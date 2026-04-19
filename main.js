// ==========================================================================
// main.js - WelfareFinder 핵심 로직
// 데이터는 policies.js / posts.js 에서 관리합니다.
// ==========================================================================
import { policies } from './policies.js';
import { newsArticles, insightArticles } from './posts.js';

// ==========================================================================
// Firebase 초기화 (Auth + Firestore)
// --------------------------------------------------------------------------
// Firebase 콘솔 → 프로젝트 설정 → 내 앱 → 웹 앱에서 config 복사해 아래 FIREBASE_CONFIG
// 에 붙여넣으세요. apiKey/authDomain은 공개값이라 소스에 포함해도 안전합니다.
// 추가로 활성화 필요:
//   1) Authentication → Sign-in method → Google 제공업체 사용
//   2) Firestore Database 생성 (asia-northeast3 권장)
//   3) firestore.rules 배포: `firebase deploy --only firestore:rules`
// ==========================================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
    getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import {
    getFirestore, doc, getDoc, setDoc, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDXZCifBI1Iuz6IAWAD36bmUJa9oMfJkJM",
    authDomain: "bokjihelper-872e2.firebaseapp.com",
    projectId: "bokjihelper-872e2",
    storageBucket: "bokjihelper-872e2.firebasestorage.app",
    messagingSenderId: "366702445672",
    appId: "1:366702445672:web:754015815dedbff33367dd",
    measurementId: "G-3ELCKD56YF"
};

const firebaseApp = initializeApp(FIREBASE_CONFIG);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const googleProvider = new GoogleAuthProvider();

let currentUser = null;
let currentUserProfile = null;

// ==========================================================================
// Web Component: Policy Card (<policy-card>)
// ==========================================================================
class PolicyCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const title = this.getAttribute('title') || '정책 이름';
        const category = this.getAttribute('category') || 'all';
        const description = this.getAttribute('description') || '';
        const categoryLabels = {
            'emergency': '긴급/생활지원',
            'youth': '청년/취업지원',
            'family': '가족/육아지원',
            'disability': '장애인복지',
            'elderly': '노후/연금지원',
            'housing': '주거/주택지원',
            'medical': '의료/건강지원',
            'all': '공통복지'
        };
        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; height: 100%; }
                .card {
                    background: var(--surface-color, #fff);
                    border: 1px solid var(--border-color, #eee);
                    border-radius: 14px;
                    padding: 2rem;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                    box-shadow: var(--shadow-sm);
                    position: relative;
                    overflow: hidden;
                }
                .card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(135deg, #2563eb, #7c3aed);
                    opacity: 0;
                    transition: opacity 0.3s;
                }
                .card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 20px 40px -10px rgba(37,99,235,0.15);
                    border-color: transparent;
                }
                .card:hover::before { opacity: 1; }
                .badge {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--accent-color, #2563eb);
                    margin-bottom: 1rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .title {
                    font-size: 1.2rem;
                    font-weight: 800;
                    margin-bottom: 1rem;
                    line-height: 1.4;
                    color: var(--text-main);
                }
                .desc {
                    font-size: 0.92rem;
                    color: var(--text-muted);
                    line-height: 1.7;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    margin-bottom: 1.5rem;
                    flex-grow: 1;
                }
                .footer {
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    font-weight: 700;
                    font-size: 0.85rem;
                    color: var(--accent-color, #2563eb);
                    transition: gap 0.2s;
                }
                .card:hover .footer { gap: 0.7rem; }
            </style>
            <div class="card">
                <span class="badge">${categoryLabels[category] || category}</span>
                <h3 class="title">${title}</h3>
                <p class="desc">${description}</p>
                <div class="footer">자세히 읽어보기 <span>→</span></div>
            </div>
        `;
    }
}
customElements.define('policy-card', PolicyCard);

// ==========================================================================
// 홈 탭 (뉴스레터 이번 호) - 헤드라인 / 리스트 / 인사이트 렌더링
// ==========================================================================
function renderNewsletterMasthead() {
    const sorted = [...newsArticles].sort((a, b) => new Date(b.date) - new Date(a.date));
    const latestDate = sorted[0]?.date;
    const volEl = document.getElementById('issueVol');
    const dateEl = document.getElementById('issueDate');
    if (latestDate) {
        // 발행호: 가장 이른 뉴스 날짜부터 최신 뉴스 날짜까지 주 단위 계산
        const earliest = new Date([...sorted].sort((a, b) => new Date(a.date) - new Date(b.date))[0].date);
        const latest = new Date(latestDate);
        const weeks = Math.max(1, Math.floor((latest - earliest) / (7 * 24 * 3600 * 1000)) + 1);
        if (volEl) volEl.textContent = `Vol.${weeks}`;
        if (dateEl) {
            const d = new Date(latestDate);
            dateEl.textContent = `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 발행`;
        }
    }
}

function renderHomeNews() {
    const feature = document.getElementById('newsletterFeature');
    const list = document.getElementById('newsletterList');
    if (!feature || !list) return;
    const sorted = [...newsArticles].sort((a, b) => new Date(b.date) - new Date(a.date));
    const [headline, ...rest] = sorted;
    const listItems = rest.slice(0, 5);

    if (headline) {
        feature.innerHTML = `
            <a href="article.html?type=news&id=${headline.id}" class="feature-card">
                <span class="feature-kicker"><i class="fas fa-star"></i> TOP STORY</span>
                <div class="feature-date"><i class="fas fa-calendar-alt"></i> ${headline.date}</div>
                <h3 class="feature-title">${headline.title}</h3>
                <p class="feature-summary">${headline.summary}</p>
                <span class="feature-read-more">전문 읽기 <i class="fas fa-arrow-right"></i></span>
            </a>
        `;
    }

    list.innerHTML = listItems.map(article => `
        <a href="article.html?type=news&id=${article.id}" class="newsletter-list-item">
            <div class="list-item-date">${article.date}</div>
            <div class="list-item-body">
                <h4 class="list-item-title">${article.title}</h4>
                <p class="list-item-summary">${article.summary}</p>
            </div>
            <div class="list-item-arrow"><i class="fas fa-arrow-right"></i></div>
        </a>
    `).join('');
}

function renderHomeInsights() {
    const grid = document.getElementById('homeInsightGrid');
    if (!grid) return;
    grid.innerHTML = insightArticles.slice(0, 3).map(article => `
        <a href="article.html?type=insight&id=${article.id}" class="newsletter-insight-card">
            <div class="insight-card-tag ${article.tag}">${article.tagLabel}</div>
            <div class="insight-card-title">${article.title}</div>
            <div class="insight-card-excerpt">${(article.paragraphs || [])[0] || ''}</div>
            <div class="card-read-more">전문 읽기 <span>→</span></div>
        </a>
    `).join('');
}

// ==========================================================================
// 구독 폼 핸들러 — Google Forms 연동
// --------------------------------------------------------------------------
// 연동 순서:
//  1) Google Forms에서 "이메일" 단답형 질문 하나짜리 폼을 만든다
//  2) 상단 "보내기 → <>" 버튼으로 임베드 HTML을 열어본다
//  3) action URL에서 `/forms/d/e/{FORM_ID}/formResponse` 부분의 FORM_ID 복사
//  4) 폼 응답 페이지에서 개발자도구 → <input name="entry.XXXXXX"> 값 복사
//  5) 아래 두 상수에 붙여넣는다
// ==========================================================================
const GOOGLE_FORM_ID = '1FAIpQLSc2Hd_KxVNJFgj3ffH_SimsKr9OkIZ8afnecu7iE5z4fovKlA';
const GOOGLE_FORM_EMAIL_FIELD = 'entry.596837271';

function buildGoogleFormUrl(email) {
    const base = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/viewform?usp=pp_url`;
    return email ? `${base}&${GOOGLE_FORM_EMAIL_FIELD}=${encodeURIComponent(email)}` : base;
}

function setupSubscribeForm() {
    const form = document.getElementById('subscribeForm');
    const note = document.getElementById('subscribeNote');
    if (!form) return;
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const input = form.querySelector('#subscribeEmail');
        const email = (input.value || '').trim();
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            note.textContent = '올바른 이메일 주소를 입력해 주세요.';
            note.classList.remove('success');
            note.classList.add('error');
            return;
        }
        // 로그인 유저의 경우 Firestore에 구독 의향 기록 (이미 구독 중 상태 유지용)
        if (currentUser) {
            try {
                await setDoc(doc(db, 'users', currentUser.uid), {
                    email: currentUser.email,
                    displayName: currentUser.displayName || null,
                    subscribedEmail: email || currentUser.email,
                    subscribedAt: serverTimestamp()
                }, { merge: true });
                currentUserProfile = { ...(currentUserProfile || {}), subscribedEmail: email || currentUser.email };
                refreshSubscriptionUI();
            } catch (err) {
                console.error('[subscribe] firestore write failed', err);
            }
        }
        // 새 창으로 Google Form 이동 (이메일은 URL 파라미터로 미리 채움)
        const url = buildGoogleFormUrl(email);
        window.open(url, '_blank', 'noopener');
        note.textContent = '새 창에서 구독 폼을 열었습니다. 추가 정보를 입력하고 제출해 주세요.';
        note.classList.remove('error');
        note.classList.add('success');
    });
}

// ==========================================================================
// Firebase Auth + Firestore 연동
// ==========================================================================
function setupAuth() {
    const loginBtn = document.getElementById('loginBtn');
    const userMenu = document.getElementById('userMenu');
    const userTrigger = document.getElementById('userTrigger');
    const userDropdown = document.getElementById('userDropdown');
    const logoutBtn = document.getElementById('logoutBtn');

    loginBtn?.addEventListener('click', async () => {
        if (FIREBASE_CONFIG.apiKey.startsWith('REPLACE_')) {
            alert('Firebase 설정이 완료되지 않았습니다. main.js 상단의 FIREBASE_CONFIG를 채워 주세요.');
            return;
        }
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error('[auth] sign-in failed', err);
            if (err.code === 'auth/popup-closed-by-user' || err.code === 'auth/cancelled-popup-request') return;
            alert('로그인에 실패했습니다: ' + (err.message || err.code || '알 수 없는 오류'));
        }
    });

    userTrigger?.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = !userDropdown.classList.contains('hidden');
        if (open) {
            userDropdown.classList.add('hidden');
            userTrigger.setAttribute('aria-expanded', 'false');
        } else {
            userDropdown.classList.remove('hidden');
            userTrigger.setAttribute('aria-expanded', 'true');
        }
    });

    document.addEventListener('click', (e) => {
        if (userMenu && !userMenu.contains(e.target) && userDropdown) {
            userDropdown.classList.add('hidden');
            userTrigger?.setAttribute('aria-expanded', 'false');
        }
    });

    logoutBtn?.addEventListener('click', async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error('[auth] sign-out failed', err);
        }
    });

    onAuthStateChanged(auth, async (user) => {
        currentUser = user;
        if (user) {
            await handleUserSignedIn(user);
        } else {
            handleUserSignedOut();
        }
    });
}

async function handleUserSignedIn(user) {
    const loginBtn = document.getElementById('loginBtn');
    const userMenu = document.getElementById('userMenu');
    const avatar = document.getElementById('userAvatar');
    const nameEl = document.getElementById('userName');
    const dropName = document.getElementById('userDropdownName');
    const dropEmail = document.getElementById('userDropdownEmail');

    if (loginBtn) loginBtn.classList.add('hidden');
    if (userMenu) userMenu.classList.remove('hidden');
    if (avatar) avatar.src = user.photoURL || 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" fill="%232563eb"/><text x="50%25" y="55%25" font-family="sans-serif" font-size="16" fill="white" text-anchor="middle" font-weight="700">' + (user.displayName?.[0] || user.email?.[0] || 'U').toUpperCase() + '</text></svg>';
    if (nameEl) nameEl.textContent = user.displayName || user.email?.split('@')[0] || '사용자';
    if (dropName) dropName.textContent = user.displayName || '—';
    if (dropEmail) dropEmail.textContent = user.email || '';

    // Firestore 유저 문서 upsert (로그인 이력만 기록, 구독은 별도)
    try {
        const ref = doc(db, 'users', user.uid);
        const snap = await getDoc(ref);
        if (!snap.exists()) {
            await setDoc(ref, {
                email: user.email,
                displayName: user.displayName || null,
                createdAt: serverTimestamp(),
                lastLoginAt: serverTimestamp()
            });
            currentUserProfile = {};
        } else {
            await setDoc(ref, { lastLoginAt: serverTimestamp() }, { merge: true });
            currentUserProfile = snap.data();
        }
    } catch (err) {
        console.error('[auth] user doc write failed', err);
        currentUserProfile = null;
    }

    // 로그인 유저면 구독폼에 이메일 자동 채움
    const emailInput = document.getElementById('subscribeEmail');
    if (emailInput && user.email) emailInput.value = user.email;

    refreshSubscriptionUI();
}

function handleUserSignedOut() {
    currentUserProfile = null;
    const loginBtn = document.getElementById('loginBtn');
    const userMenu = document.getElementById('userMenu');
    const userDropdown = document.getElementById('userDropdown');
    if (loginBtn) loginBtn.classList.remove('hidden');
    if (userMenu) userMenu.classList.add('hidden');
    if (userDropdown) userDropdown.classList.add('hidden');

    // 구독폼 초기화 (값 비우고 상태 표시 리셋)
    const emailInput = document.getElementById('subscribeEmail');
    if (emailInput) emailInput.value = '';
    refreshSubscriptionUI();
}

function refreshSubscriptionUI() {
    const form = document.getElementById('subscribeForm');
    const note = document.getElementById('subscribeNote');
    const statusEl = document.getElementById('subscriptionStatus');
    const isSubscribed = !!(currentUserProfile && currentUserProfile.subscribedEmail);

    if (statusEl) {
        if (!currentUser) {
            statusEl.textContent = '—';
            statusEl.className = 'subscription-status';
        } else if (isSubscribed) {
            statusEl.textContent = '구독 중 ✓';
            statusEl.className = 'subscription-status active';
        } else {
            statusEl.textContent = '미구독';
            statusEl.className = 'subscription-status inactive';
        }
    }

    if (!form) return;
    if (currentUser && isSubscribed) {
        form.classList.add('subscribed');
        if (note) {
            note.textContent = `이미 ${currentUserProfile.subscribedEmail} 주소로 구독 중입니다.`;
            note.classList.remove('error');
            note.classList.add('success');
        }
    } else {
        form.classList.remove('subscribed');
        if (note && !note.classList.contains('success') && !note.classList.contains('error')) {
            note.textContent = '매주 1회 발송 · 언제든지 해지 가능 · 스팸 없음';
        }
    }
}

// ==========================================================================
// 뉴스 탭 - 뉴스 & 인사이트 렌더링
// ==========================================================================
function renderNews() {
    const newsGrid = document.getElementById('newsGrid');
    if (!newsGrid) return;
    newsGrid.innerHTML = newsArticles.map(article => `
        <a href="article.html?type=news&id=${article.id}" style="text-decoration: none; color: inherit;">
          <article class="news-card" style="cursor: pointer;">
            <div class="news-date">${article.date}</div>
            <h4>${article.title}</h4>
            <p>${article.summary}</p>
            <div style="margin-top: 14px; color: var(--accent-color); font-size: 0.85rem; font-weight: 600;">자세히 보기 →</div>
          </article>
        </a>
    `).join('');
}

function renderInsights() {
    const insightGrid = document.getElementById('insightGrid');
    if (!insightGrid) return;
    insightGrid.innerHTML = insightArticles.map(article => {
        const paragraphsHtml = (article.paragraphs || []).map(p => `<p>${p}</p>`).join('');
        const listHtml = article.list ? `<ul>${article.list.map(item => `<li><strong>${item.strong}</strong> ${item.text}</li>`).join('')}</ul>` : '';
        return `
            <a href="article.html?type=insight&id=${article.id}" style="text-decoration: none; color: inherit;">
              <article class="insight-card ${article.tag}" style="cursor: pointer;">
                <div class="insight-tag">${article.tagLabel}</div>
                <h4>${article.title}</h4>
                <div class="insight-body">
                  ${paragraphsHtml}
                  ${listHtml}
                  ${article.highlight ? `<p class="highlight">${article.highlight}</p>` : ''}
                </div>
                <div style="margin-top: 14px; color: var(--accent-color); font-size: 0.85rem; font-weight: 600;">자세히 보기 →</div>
              </article>
            </a>
        `;
    }).join('');
}

// ==========================================================================
// 히어로 통계 카운터 애니메이션
// ==========================================================================
function animateCounter(el, target) {
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 30));
    const interval = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        el.textContent = current + '건';
    }, 30);
}

// ==========================================================================
// Application Core Logic
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const policyGrid = document.getElementById('policyGrid');
    const resultCount = document.getElementById('resultCount');
    const noResults = document.getElementById('noResults');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const themeToggle = document.getElementById('themeToggle');
    const policyModal = document.getElementById('policyModal');
    const modalBody = document.getElementById('modalBody');
    const privacyModal = document.getElementById('privacyModal');
    const tabs = document.querySelectorAll('.tab-content');
    const navLinks = document.querySelectorAll('.nav-links a[data-tab]');
    const homeSearchInput = document.getElementById('homeSearchInput');
    const homeSearchBtn = document.getElementById('homeSearchBtn');

    // 홈 탭 (뉴스레터 이번 호) 렌더링
    renderNewsletterMasthead();
    renderHomeNews();
    renderHomeInsights();
    setupSubscribeForm();
    setupAuth();

    // 뉴스 탭 렌더링
    renderNews();
    renderInsights();

    // 히어로 통계 카운터
    const statPolicies = document.getElementById('statPolicies');
    const statNews = document.getElementById('statNews');
    const statInsights = document.getElementById('statInsights');
    if (statPolicies) animateCounter(statPolicies, policies.length);
    if (statNews) animateCounter(statNews, newsArticles.length);
    if (statInsights) animateCounter(statInsights, insightArticles.length);

    // 탭 전환
    function switchTab(tabId) {
        tabs.forEach(tab => {
            if (tab.id === tabId) tab.classList.remove('hidden');
            else tab.classList.add('hidden');
        });
        navLinks.forEach(link => {
            if (link.dataset.tab === tabId) link.classList.add('active');
            else link.classList.remove('active');
        });
        window.scrollTo(0, 0);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.dataset.tab) {
                e.preventDefault();
                switchTab(link.dataset.tab);
                history.pushState(null, null, link.getAttribute('href'));
            }
        });
    });

    // "전체보기" 버튼 이벤트
    document.querySelectorAll('.view-all-btn[data-tab]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab(btn.dataset.tab);
            history.pushState(null, null, btn.getAttribute('href'));
        });
    });

    homeSearchBtn.addEventListener('click', () => {
        const term = homeSearchInput.value.trim();
        if (term) {
            searchInput.value = term;
            searchTerm = term;
            switchTab('tab-benefits');
            filterAndRender();
        } else {
            switchTab('tab-benefits');
        }
    });

    homeSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') homeSearchBtn.click();
    });

    const initialHash = window.location.hash;
    if (initialHash === '#benefits') switchTab('tab-benefits');
    else if (initialHash === '#news') switchTab('tab-news');
    else switchTab('tab-home');

    document.getElementById('privacyLink').addEventListener('click', (e) => {
        e.preventDefault();
        privacyModal.classList.remove('hidden');
    });
    document.getElementById('privacyBtnFooter').addEventListener('click', (e) => {
        e.preventDefault();
        privacyModal.classList.remove('hidden');
    });
    document.getElementById('closePrivacy').addEventListener('click', () => privacyModal.classList.add('hidden'));

    themeToggle.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
        themeToggle.querySelector('i').className = isDark ? 'fas fa-moon' : 'fas fa-sun';
    });

    // 정책 카드 렌더링
    function render(policiesList) {
        policyGrid.innerHTML = '';
        resultCount.textContent = `${policiesList.length}건`;
        if (policiesList.length === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
            policiesList.forEach(p => {
                const card = document.createElement('policy-card');
                card.setAttribute('title', p.title);
                card.setAttribute('category', p.category);
                card.setAttribute('description', p.description);
                card.addEventListener('click', () => showPolicyDetail(p));
                policyGrid.appendChild(card);
            });
        }
    }

    function showPolicyDetail(p) {
        modalBody.innerHTML = `
            <h2 style="font-size: 2.2rem; font-weight: 900; margin-bottom: 1.5rem; color: var(--text-main); line-height: 1.2;">${p.title}</h2>
            <div style="background: var(--bg-color); padding: 2rem; border-radius: 14px; margin-bottom: 2.5rem; border-left: 5px solid var(--accent-color);">
                <h4 style="margin-bottom: 0.5rem; font-weight: 800;">정책 요약</h4>
                <p style="font-size: 1.1rem; line-height: 1.8;">${p.details.purpose}</p>
            </div>
            <div class="detail-content-grid" style="display: grid; gap: 2rem;">
                <section>
                    <h4 style="font-weight: 800; color: var(--accent-color); margin-bottom: 0.5rem;">어떤 혜택을 받나요?</h4>
                    <p style="color: var(--text-main); font-size: 1.05rem;">${p.details.benefit}</p>
                </section>
                <section>
                    <h4 style="font-weight: 800; color: var(--accent-color); margin-bottom: 0.5rem;">누가 신청할 수 있나요?</h4>
                    <p style="color: var(--text-main); font-size: 1.05rem;">${p.details.target}</p>
                </section>
                <section>
                    <h4 style="font-weight: 800; color: var(--accent-color); margin-bottom: 0.5rem;">어떻게 신청하나요?</h4>
                    <p style="color: var(--text-main); font-size: 1.05rem;">${p.details.process}</p>
                </section>
                <section>
                    <h4 style="font-weight: 800; color: var(--accent-color); margin-bottom: 0.5rem;">필요한 서류는 무엇인가요?</h4>
                    <p style="color: var(--text-main); font-size: 1.05rem;">${p.details.documents}</p>
                </section>
            </div>
            <div style="margin-top: 4rem; text-align: center;">
                <a href="${p.link}" target="_blank" style="background: linear-gradient(135deg, #2563eb, #7c3aed); color: white; text-decoration: none; padding: 1.25rem 3rem; border-radius: 50px; font-weight: 800; font-size: 1.1rem; display: inline-block; box-shadow: 0 10px 20px rgba(37,99,235,0.2);">
                    공식 사이트에서 신청하기 →
                </a>
                <p style="margin-top: 1rem; font-size: 0.85rem; color: var(--text-muted);">* 위 버튼을 클릭하면 공식 복지 포털로 연결됩니다.</p>
            </div>
        `;
        policyModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    document.getElementById('closeModal').addEventListener('click', () => {
        policyModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    policyModal.addEventListener('click', (e) => {
        if (e.target === policyModal) {
            policyModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });

    let currentCat = 'all';
    let searchTerm = '';

    function filterAndRender() {
        const filtered = policies.filter(p => {
            const matchCat = currentCat === 'all' || p.category === currentCat;
            const matchSearch = p.title.includes(searchTerm) || p.description.includes(searchTerm);
            return matchCat && matchSearch;
        });
        render(filtered);
    }

    document.querySelectorAll('.filter-chip').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCat = btn.dataset.category;
            filterAndRender();
        });
    });

    searchBtn.addEventListener('click', () => {
        searchTerm = searchInput.value.trim();
        filterAndRender();
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchTerm = searchInput.value.trim();
            filterAndRender();
        }
    });

    render(policies);
});
