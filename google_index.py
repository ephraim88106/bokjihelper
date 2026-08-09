#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
google_index.py — Google Indexing API 자동 제출 스크립트
==========================================================

기능
  1) sitemap.xml의 URL을 Google Indexing API로 제출 (URL_UPDATED)
  2) --new-only 모드: posts.js에서 최근 N일 기사만 제출
  3) --all 모드: sitemap 전체 제출 (일일 쿼터 200개 주의)
  4) 서비스 계정 키 없으면 Sitemap Ping만 실행 (무자격 폴백)

사전 설정 (최초 1회, 5분 작업)
─────────────────────────────────────────────────────────────
① Google Cloud Console → 프로젝트 생성
   → API 라이브러리 → "Web Search Indexing API" 활성화

② IAM → 서비스 계정 생성 → JSON 키 다운로드
   → 파일명을 service_account.json 으로 변경
   → 이 repo 루트(bokjihelper/)에 저장

③ Google Search Console → 설정 → 사용자 및 권한
   → "+ 사용자 추가" → service_account.json 의 client_email 값 입력
   → 권한: 소유자 (Owner) ← 반드시 소유자여야 함

이후 매일 자동 실행됩니다.
─────────────────────────────────────────────────────────────

사용법
  python3 google_index.py              # 최근 3일 신규 기사 제출
  python3 google_index.py --new-only 7 # 최근 7일 기사 제출
  python3 google_index.py --all        # 전체 제출 (쿼터 주의)
  python3 google_index.py --ping-only  # Sitemap Ping만
"""

import os, sys, re, json, argparse, datetime, time
from urllib.request import urlopen, Request
from urllib.error import URLError

ROOT          = os.path.dirname(os.path.abspath(__file__))
SITE          = "https://welfare.ephseed.com"
SITEMAP_PATH  = os.path.join(ROOT, "sitemap.xml")
POSTS_JS_PATH = os.path.join(ROOT, "posts.js")
SA_KEY_PATH   = os.path.join(ROOT, "service_account.json")
LOG_PATH      = os.path.join(ROOT, "indexing_log.json")
DAILY_QUOTA   = 200


# ─────────── 사이트맵 파싱 ───────────
def read_sitemap_urls():
    if not os.path.exists(SITEMAP_PATH):
        print("[!] sitemap.xml 없음 — seo_fix.py 먼저 실행하세요.")
        return []
    from html import unescape
    with open(SITEMAP_PATH, encoding="utf-8") as f:
        content = f.read()
    return [unescape(u.strip()) for u in re.findall(r"<loc>(.*?)</loc>", content)]


# ─────────── posts.js 파싱 ───────────
def read_recent_urls(days=3):
    if not os.path.exists(POSTS_JS_PATH):
        return []
    with open(POSTS_JS_PATH, encoding="utf-8") as f:
        content = f.read()
    cutoff = datetime.date.today() - datetime.timedelta(days=days)
    recent_dates = set()
    for d in re.findall(r'date:\s*["\'](\d{4}-\d{2}-\d{2})["\']', content):
        try:
            if datetime.date.fromisoformat(d) >= cutoff:
                recent_dates.add(d)
        except ValueError:
            pass
    all_urls = read_sitemap_urls()
    return [u for u in all_urls if any(d in u for d in recent_dates)]


# ─────────── Sitemap 안내 ───────────
def note_sitemap():
    """
    Google Sitemap Ping은 2023년 6월 폐지됨.
    대신: Search Console에서 sitemap.xml을 한 번 등록하면 구글이 알아서 주기적으로 수집합니다.
    등록 URL: https://search.google.com/search-console/sitemaps
    제출할 사이트맵: https://welfare.ephseed.com/sitemap.xml
    """
    print(f"[i] sitemap.xml => {SITE}/sitemap.xml (GSC에 등록 권장)")


# ─────────── OAuth2 토큰 발급 ───────────
def get_access_token(sa_key):
    try:
        import jwt as pyjwt
    except ImportError:
        print("[!] PyJWT 없음. 다음 실행 후 재시도:")
        print("    pip install PyJWT cryptography --break-system-packages")
        sys.exit(1)
    now = int(time.time())
    payload = {
        "iss":   sa_key["client_email"],
        "scope": "https://www.googleapis.com/auth/indexing",
        "aud":   "https://oauth2.googleapis.com/token",
        "iat":   now,
        "exp":   now + 3600,
    }
    token = pyjwt.encode(payload, sa_key["private_key"], algorithm="RS256")
    body = (
        "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer"
        "&assertion=" + token
    ).encode()
    req  = Request("https://oauth2.googleapis.com/token", data=body,
                   headers={"Content-Type": "application/x-www-form-urlencoded"})
    resp = urlopen(req, timeout=15)
    return json.loads(resp.read())["access_token"]


# ─────────── URL 제출 ───────────
def submit_url(url, token):
    body = json.dumps({"url": url, "type": "URL_UPDATED"}).encode()
    req  = Request(
        "https://indexing.googleapis.com/v3/urlNotifications:publish",
        data=body,
        headers={"Content-Type": "application/json", "Authorization": "Bearer " + token},
    )
    try:
        resp = urlopen(req, timeout=15)
        return {"url": url, "status": resp.status, "ok": True}
    except Exception as e:
        return {"url": url, "status": getattr(e, "code", 0), "ok": False, "error": str(e)}


# ─────────── 로그 관리 ───────────
def load_log():
    if os.path.exists(LOG_PATH):
        with open(LOG_PATH, encoding="utf-8") as f:
            return json.load(f)
    return {"submitted": {}}

def save_log(log):
    with open(LOG_PATH, "w", encoding="utf-8") as f:
        json.dump(log, f, ensure_ascii=False, indent=2)

def already_today(url, log):
    return log["submitted"].get(url, "") == datetime.date.today().isoformat()

def mark_done(url, log):
    log["submitted"][url] = datetime.date.today().isoformat()


# ─────────── 메인 ───────────
def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--all", action="store_true")
    parser.add_argument("--new-only", type=int, metavar="DAYS", nargs="?", const=3, default=3)
    parser.add_argument("--ping-only", action="store_true")
    args = parser.parse_args()

    # sitemap 안내 (ping은 2023년 폐지됨)
    note_sitemap()
    if args.ping_only:
        print("[i] --ping-only: sitemap 안내만 출력")
        return

    # 서비스 계정 키 없으면 종료
    if not os.path.exists(SA_KEY_PATH):
        print(f"\n[i] {SA_KEY_PATH} 없음 — Indexing API 건너뜀.")
        print("    파일 상단 '사전 설정' 3단계를 따라 설정 후 재실행하세요.")
        return

    with open(SA_KEY_PATH, encoding="utf-8") as f:
        sa_key = json.load(f)

    # URL 목록
    if args.all:
        urls = read_sitemap_urls()
        print(f"[i] --all: {len(urls)}개")
    else:
        urls = read_recent_urls(days=args.new_only)
        print(f"[i] --new-only {args.new_only}일: {len(urls)}개")

    if not urls:
        print("[i] 제출할 URL 없음.")
        return

    log        = load_log()
    to_submit  = [u for u in urls if not already_today(u, log)]
    print(f"[i] 미제출: {len(to_submit)}개 / 이미 제출: {len(urls)-len(to_submit)}개")

    if not to_submit:
        print("[v] 오늘 이미 전부 제출됨.")
        return

    if len(to_submit) > DAILY_QUOTA:
        print(f"[!] 쿼터 {DAILY_QUOTA}개 초과 — 앞 {DAILY_QUOTA}개만 제출.")
        to_submit = to_submit[:DAILY_QUOTA]

    print("[i] 토큰 발급 중...")
    try:
        token = get_access_token(sa_key)
    except Exception as e:
        print(f"[!] 토큰 실패: {e}")
        return

    ok = fail = 0
    for i, url in enumerate(to_submit, 1):
        r = submit_url(url, token)
        if r["ok"]:
            mark_done(url, log); ok += 1
            print(f"  [{i:3}/{len(to_submit)}] v {url}")
        else:
            fail += 1
            print(f"  [{i:3}/{len(to_submit)}] x {url}  => {r.get('error', r['status'])}")
        if i % 10 == 0:
            time.sleep(1)

    save_log(log)
    print(f"\n[완료] 성공 {ok} / 실패 {fail}")


if __name__ == "__main__":
    main()
