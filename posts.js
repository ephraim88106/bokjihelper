// ==========================================================================
// posts.js - 복지 소식 & 인사이트 데이터
// ==========================================================================

export const newsArticles = [
  {
    id: 14,
    title: "2026년 근로장려금 5월 신청 시작, 최대 330만원 받는 방법",
    date: "2026-04-05",
    summary: "2025년 귀속 근로장려금 정기 신청이 5월 1일~31일 진행됩니다. 단독가구 165만원, 홑벌이 285만원, 맞벌이 330만원까지 지급되며, 재산 2억 4천만원 미만이면 신청 가능합니다. 손택스·홈택스로 간편 신청하세요.",
    content: `
      <p><strong>근로장려금(EITC, Earned Income Tax Credit)</strong>은 일은 하지만 소득이 낮은 근로자·사업자 가구에 현금을 지원하는 제도입니다. 복지 수혜가 아닌 <strong>'세금 환급' 형태</strong>로 지급되어 낙인 없이 신청할 수 있습니다. 2025년 귀속 근로장려금 정기 신청이 <strong>5월 1일~31일</strong>에 진행되니, 대상이 된다면 반드시 챙겨야 합니다.</p>

      <div class="info-box blue">
        <div class="info-title">근로장려금 vs 자녀장려금</div>
        <p>근로장려금은 '일하는 저소득 가구'에 지급되며, <strong>자녀장려금</strong>은 만 18세 미만 자녀가 있는 경우 별도 신청 가능합니다. 두 제도는 동시 신청이 가능합니다.</p>
      </div>

      <h3>가구 유형별 지급액</h3>
      <p>가구 유형에 따라 소득 요건과 최대 지급액이 다릅니다. 소득이 낮을수록, 그리고 부양가족이 많을수록 더 많은 금액을 받습니다.</p>

      <table>
        <thead>
          <tr><th>가구 유형</th><th>연소득 상한</th><th>최대 지급액</th><th>해당 조건</th></tr>
        </thead>
        <tbody>
          <tr><td>단독가구</td><td>2,200만원 미만</td><td class="td-highlight">165만원</td><td>배우자·부양자녀·70세 이상 직계존속 없음</td></tr>
          <tr><td>홑벌이가구</td><td>3,200만원 미만</td><td class="td-highlight">285만원</td><td>배우자 또는 부양자녀·70세 이상 직계존속 있음</td></tr>
          <tr><td>맞벌이가구</td><td>3,800만원 미만</td><td class="td-highlight">330만원</td><td>본인·배우자 모두 근로·사업소득 있음</td></tr>
        </tbody>
      </table>

      <h3>가구 유형별 최대 지급액 비교</h3>
      <div class="bar-chart">
        <div class="bar-item">
          <div class="bar-label"><span>맞벌이가구</span><span class="bar-value">330만원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 100%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>홑벌이가구</span><span class="bar-value">285만원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 86.4%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>단독가구</span><span class="bar-value">165만원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 50%"></div></div>
        </div>
      </div>

      <h3>신청 자격 요건</h3>
      <p>아래 세 가지 요건을 모두 충족해야 신청할 수 있습니다.</p>

      <table>
        <thead>
          <tr><th>요건</th><th>기준</th><th>상세 내용</th></tr>
        </thead>
        <tbody>
          <tr><td>소득 요건</td><td class="td-highlight">가구 유형별 상이</td><td>단독 2,200만원 / 홑벌이 3,200만원 / 맞벌이 3,800만원 미만</td></tr>
          <tr><td>재산 요건</td><td class="td-highlight">2억 4,000만원 미만</td><td>가구 전체 재산(토지·건물·예금·자동차 등) 합산 기준</td></tr>
          <tr><td>국적 요건</td><td>대한민국 거주자</td><td>외국인은 내국인 배우자가 있는 경우 신청 가능</td></tr>
        </tbody>
      </table>

      <div class="info-box amber">
        <div class="info-title">재산 1억 7,000만원~2억 4,000만원 구간 주의</div>
        <p>재산 합계가 1억 7,000만원 이상이면 산정된 장려금의 <strong>50%만 지급</strong>됩니다. 예를 들어 맞벌이가구가 최대 금액 330만원을 산정받더라도 재산이 2억원이면 165만원만 받습니다.</p>
      </div>

      <h3>2025년 vs 2024년 지급액 변화</h3>
      <div class="compare-grid">
        <div class="compare-card before">
          <div class="compare-label">2024년 귀속</div>
          <div class="compare-value">맞벌이 300만원</div>
          <div class="compare-desc">홑벌이 260만원 / 단독 150만원</div>
        </div>
        <div class="compare-card after">
          <div class="compare-label">2025년 귀속</div>
          <div class="compare-value">맞벌이 330만원</div>
          <div class="compare-desc">홑벌이 285만원 / 단독 165만원</div>
        </div>
      </div>

      <h3>신청 및 지급 일정</h3>
      <div class="timeline">
        <div class="tl-item">
          <div class="tl-date">5월 1일~31일</div>
          <div class="tl-title">정기 신청 기간</div>
          <div class="tl-desc">2025년 귀속 근로·사업·종교인 소득 기준으로 신청</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">8월~9월</div>
          <div class="tl-title">심사 후 지급</div>
          <div class="tl-desc">신청 후 약 3개월 내 심사 완료, 계좌로 지급</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">6월 이후 신청 가능</div>
          <div class="tl-title">기한 후 신청 (감액 주의)</div>
          <div class="tl-desc">기한 후 신청 시 산정액의 90%만 지급 (12월 1일까지)</div>
        </div>
      </div>

      <h3>신청 방법</h3>
      <table>
        <thead>
          <tr><th>신청 방법</th><th>방법</th><th>특이사항</th></tr>
        </thead>
        <tbody>
          <tr><td>손택스(앱)</td><td class="td-highlight">스마트폰 앱 → 장려금 신청</td><td>가장 간편, 24시간 이용 가능</td></tr>
          <tr><td>홈택스(PC)</td><td>hometax.go.kr 접속 후 신청</td><td>공인인증서 또는 간편인증 필요</td></tr>
          <tr><td>ARS 전화</td><td>1544-9944 전화 신청</td><td>정보 조회 후 자동 신청 가능</td></tr>
          <tr><td>세무서 방문</td><td>가까운 세무서 직접 방문</td><td>고령자·장애인 등 전화 안내 후 신청 지원</td></tr>
        </tbody>
      </table>

      <div class="key-numbers">
        <div class="key-num"><span class="num">330만원</span><span class="num-label">맞벌이 최대 지급</span></div>
        <div class="key-num"><span class="num">285만원</span><span class="num-label">홑벌이 최대 지급</span></div>
        <div class="key-num"><span class="num">165만원</span><span class="num-label">단독가구 최대</span></div>
        <div class="key-num"><span class="num">5월 31일</span><span class="num-label">신청 마감일</span></div>
      </div>

      <div class="info-box">
        <div class="info-title">자녀장려금도 함께 신청하세요</div>
        <p>만 18세 미만 부양자녀가 있다면 근로장려금과 <strong>자녀장려금(1인당 최대 100만원)</strong>을 동시에 신청할 수 있습니다. 손택스 신청 화면에서 자동으로 안내됩니다.</p>
      </div>

      <div class="summary-card">
        <h4>핵심 요약</h4>
        <ul>
          <li>5월 1일~31일 정기 신청 (2025년 귀속 소득 기준)</li>
          <li>가구 재산 2억 4,000만원 미만이면 신청 가능</li>
          <li>맞벌이 최대 330만원 / 홑벌이 최대 285만원 / 단독 최대 165만원</li>
          <li>손택스 앱·홈택스·ARS(1544-9944)·세무서 방문 신청</li>
          <li>기한 후 신청 시 10% 감액 → 5월 내 꼭 신청!</li>
        </ul>
      </div>
    `
  },
  {
    id: 9,
    title: "26.2조원 추경 의결, 소득 하위 70% 국민에 고유가 피해지원금 지급",
    date: "2026-03-31",
    summary: "이재명 정부가 중동전쟁에 따른 고유가 위기에 대응해 26.2조원 규모 추경을 의결했습니다. 소득 하위 70% 국민 약 3,580만 명에게 10만~60만원의 피해지원금이 차등 지급되며, 취약계층 무상 먹거리 시설 '그냥드림센터'가 300개소로 확대됩니다.",
    content: `
      <p>2026년 3월 31일, 국무회의에서 <strong>26.2조원 규모의 추가경정예산안</strong>이 의결되었습니다. 국채를 발행하지 않는 이른바 <strong>'빚 없는 추경'</strong>으로 편성된 이번 대책은, 중동전쟁 장기화로 인한 국제유가 급등이 국민 생활 전반에 미치는 충격을 완화하기 위한 종합 대응입니다.</p>

      <p>정부는 이번 추경의 핵심 목표를 <strong>"고유가 충격으로부터 국민 생활을 보호하는 것"</strong>이라고 밝혔습니다. 에너지 가격 상승은 교통비, 난방비뿐 아니라 식료품·생필품 물가 전반을 끌어올리기 때문에, 저소득층일수록 체감 부담이 큽니다.</p>

      <h3>추경 예산 배분 구조</h3>
      <p>26.2조원은 크게 네 가지 분야에 배분됩니다. 가장 큰 비중은 고유가 직접 대응이며, 민생 안정과 산업 피해 최소화가 뒤따릅니다.</p>

      <div class="bar-chart">
        <div class="bar-item">
          <div class="bar-label"><span>고유가 대응</span><span class="bar-value">10.1조원 (38.5%)</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 38.5%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>고유가 피해지원금</span><span class="bar-value">4.8조원 (18.3%)</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 18.3%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>민생 안정</span><span class="bar-value">2.8조원 (10.7%)</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 10.7%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>산업 피해 최소화</span><span class="bar-value">2.6조원 (9.9%)</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 9.9%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>기타 (예비비 등)</span><span class="bar-value">5.9조원 (22.6%)</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 22.6%"></div></div>
        </div>
      </div>

      <h3>고유가 피해지원금 상세</h3>
      <p>이번 추경의 가장 큰 관심사인 피해지원금은 <strong>소득 하위 70% 국민 약 3,580만 명</strong>을 대상으로 차등 지급됩니다. 소득이 낮을수록 더 많은 금액을 받게 됩니다.</p>

      <table>
        <thead>
          <tr><th>대상 구분</th><th>지급 금액</th><th>대상 인원(약)</th></tr>
        </thead>
        <tbody>
          <tr><td>기초생활수급자</td><td class="td-highlight">60만원</td><td>약 250만 명</td></tr>
          <tr><td>차상위계층</td><td class="td-highlight">50만원</td><td>약 150만 명</td></tr>
          <tr><td>한부모 가정</td><td class="td-highlight">45만원</td><td>약 25만 명</td></tr>
          <tr><td>소득 하위 50%</td><td class="td-highlight">25만원</td><td>약 1,400만 명</td></tr>
          <tr><td>소득 하위 50~70%</td><td class="td-highlight">10만원</td><td>약 1,755만 명</td></tr>
        </tbody>
      </table>

      <div class="info-box blue">
        <div class="info-title">신청 방법 안내</div>
        <p>별도 신청 없이 기존 복지 수급자는 자동 지급되며, 그 외 대상자는 주민센터·복지로·정부24에서 간편 신청할 수 있습니다. 4월 중순부터 순차 지급 예정입니다.</p>
      </div>

      <h3>그냥드림센터 확대</h3>
      <p>취약계층을 위한 무상 먹거리·생필품 제공 시설인 <strong>'그냥드림센터'</strong>가 기존 150개소에서 <strong>300개소로 두 배 확대</strong>됩니다. 사전 자격심사 없이 누구나 이용할 수 있어 긴급한 상황에 즉시 도움을 받을 수 있습니다.</p>

      <div class="compare-grid">
        <div class="compare-card before">
          <div class="compare-label">2025년</div>
          <div class="compare-value">150개소</div>
          <div class="compare-desc">전국 그냥드림센터</div>
        </div>
        <div class="compare-card after">
          <div class="compare-label">2026년 확대</div>
          <div class="compare-value">300개소</div>
          <div class="compare-desc">2배 확대 운영</div>
        </div>
      </div>

      <h3>향후 일정</h3>
      <div class="timeline">
        <div class="tl-item">
          <div class="tl-date">3월 31일</div>
          <div class="tl-title">국무회의 추경안 의결</div>
          <div class="tl-desc">26.2조원 빚 없는 추경 확정</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">4월 초</div>
          <div class="tl-title">국회 제출 및 심의</div>
          <div class="tl-desc">여야 협의를 통한 신속 처리 추진</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">4월 중순</div>
          <div class="tl-title">피해지원금 순차 지급 시작</div>
          <div class="tl-desc">기초생활수급자·차상위 우선 지급</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">5월</div>
          <div class="tl-title">전체 대상자 지급 완료 목표</div>
          <div class="tl-desc">3,580만 명 지급 완료</div>
        </div>
      </div>

      <div class="summary-card">
        <h4>핵심 요약</h4>
        <ul>
          <li>26.2조원 추경: 국채 없이 세수 여분 등으로 편성</li>
          <li>소득 하위 70% 국민 3,580만 명에 10만~60만원 차등 지급</li>
          <li>그냥드림센터 300개소 확대, 유류세 인하 연장</li>
          <li>4월 중순부터 순차 지급 예정</li>
        </ul>
      </div>
    `
  },
  {
    id: 8,
    title: "2026년 기준중위소득 6.51% 역대 최대 인상, 복지 수급 범위 대폭 확대",
    date: "2026-01-01",
    summary: "2026년도 기준중위소득이 4인 가구 기준 649만 4,738원으로 역대 최대인 6.51% 인상되었습니다. 생계·의료·주거·교육급여 수급 범위가 확대되어 약 4만 명이 새롭게 생계급여를 받을 수 있게 됩니다.",
    content: `
      <p><strong>기준중위소득</strong>은 대한민국 복지 제도의 기준선 역할을 하는 핵심 지표입니다. 기초생활보장, 긴급복지, 장학금, 각종 바우처 등 수십 가지 복지 사업의 수급 자격이 이 숫자에 연동됩니다. 2026년 기준중위소득이 <strong>역대 최대 폭인 6.51%</strong> 인상됨에 따라, 더 많은 국민이 복지 혜택을 받을 수 있게 되었습니다.</p>

      <h3>기준중위소득이란?</h3>
      <p>기준중위소득은 전체 가구를 소득 순으로 줄 세웠을 때 정확히 가운데에 위치하는 가구의 소득을 말합니다. 보건복지부 산하 중앙생활보장위원회가 매년 결정하며, 이 금액의 일정 비율(32%, 40%, 48%, 50%)이 각 급여의 선정 기준이 됩니다.</p>

      <div class="info-box blue">
        <div class="info-title">왜 6.51% 인상이 중요한가요?</div>
        <p>기준중위소득이 오르면 각 급여의 선정 기준선도 동반 상승하여, 그동안 기준선 바로 위에서 탈락했던 '사각지대' 가구들이 새롭게 수급 자격을 얻게 됩니다. 6.51%는 제도 시행 이래 가장 큰 인상 폭으로, 약 4만 명이 새로 생계급여를 받을 수 있게 됩니다.</p>
      </div>

      <h3>가구 규모별 기준중위소득 변화</h3>
      <table>
        <thead>
          <tr><th>가구 규모</th><th>2025년</th><th>2026년</th><th>인상률</th></tr>
        </thead>
        <tbody>
          <tr><td>1인 가구</td><td>239만 2,013원</td><td class="td-highlight">256만 4,238원</td><td class="td-highlight">+7.20%</td></tr>
          <tr><td>2인 가구</td><td>393만 2,658원</td><td class="td-highlight">419만 4,491원</td><td class="td-highlight">+6.66%</td></tr>
          <tr><td>3인 가구</td><td>502만 5,353원</td><td class="td-highlight">535만 4,246원</td><td class="td-highlight">+6.55%</td></tr>
          <tr><td>4인 가구</td><td>609만 7,773원</td><td class="td-highlight">649만 4,738원</td><td class="td-highlight">+6.51%</td></tr>
          <tr><td>5인 가구</td><td>710만 8,192원</td><td class="td-highlight">756만 3,862원</td><td class="td-highlight">+6.41%</td></tr>
        </tbody>
      </table>

      <p>특히 <strong>1인 가구의 인상률이 7.20%로 가장 높습니다.</strong> 1인 가구 비율이 빠르게 증가하는 인구 구조 변화를 반영한 결과입니다.</p>

      <h3>급여별 선정기준 (4인 가구 기준)</h3>
      <p>기준중위소득에서 일정 비율을 적용한 금액이 각 급여의 선정기준입니다. 해당 금액 이하의 소득인 가구가 급여를 받을 수 있습니다.</p>

      <div class="bar-chart">
        <div class="bar-item">
          <div class="bar-label"><span>생계급여 (32%)</span><span class="bar-value">207만 8,316원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 32%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>의료급여 (40%)</span><span class="bar-value">259만 7,895원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 40%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>주거급여 (48%)</span><span class="bar-value">311만 7,474원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 48%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>교육급여 (50%)</span><span class="bar-value">324만 7,369원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 50%"></div></div>
        </div>
      </div>

      <h3>생계급여 선정기준 변화 (1인 가구)</h3>
      <div class="compare-grid">
        <div class="compare-card before">
          <div class="compare-label">2025년</div>
          <div class="compare-value">76.5만원</div>
          <div class="compare-desc">월 생계급여 선정기준</div>
        </div>
        <div class="compare-card after">
          <div class="compare-label">2026년</div>
          <div class="compare-value">82.1만원</div>
          <div class="compare-desc">5.6만원 상향</div>
        </div>
      </div>

      <h3>핵심 수혜 예상</h3>
      <div class="key-numbers">
        <div class="key-num"><span class="num">+4만 명</span><span class="num-label">신규 생계급여 수급</span></div>
        <div class="key-num"><span class="num">6.51%</span><span class="num-label">역대 최대 인상률</span></div>
        <div class="key-num"><span class="num">649만원</span><span class="num-label">4인 가구 기준</span></div>
        <div class="key-num"><span class="num">7.20%</span><span class="num-label">1인 가구 인상률</span></div>
      </div>

      <div class="info-box">
        <div class="info-title">내가 해당되는지 확인하려면?</div>
        <p>복지로(www.bokjiro.go.kr)의 '복지서비스 모의계산'에서 가구원 수와 소득·재산을 입력하면 수급 가능 여부를 간편하게 확인할 수 있습니다. 또한 주민센터에 방문하면 상세 상담을 받을 수 있습니다.</p>
      </div>

      <div class="summary-card">
        <h4>핵심 요약</h4>
        <ul>
          <li>2026년 기준중위소득 4인 가구 649만 4,738원 (6.51% 인상, 역대 최대)</li>
          <li>1인 가구 256만 4,238원 (7.20% 인상)</li>
          <li>약 4만 명 신규 생계급여 수급 가능</li>
          <li>생계 32%, 의료 40%, 주거 48%, 교육 50% 선정기준 동시 상향</li>
        </ul>
      </div>
    `
  },
  {
    id: 7,
    title: "기초연금 인상 및 저소득 노인 월 40만원 지급 시작",
    date: "2026-01-01",
    summary: "2026년 기초연금 기준연금액이 월 34만 9,700원으로 인상되고, 저소득 노인부터 월 40만원 지급이 시작됩니다. 수급 대상도 779만 명으로 확대되어 더 많은 어르신이 혜택을 받게 됩니다.",
    content: `
      <p>2026년부터 기초연금이 소비자물가상승률 2.1%를 반영하여 인상되었습니다. 더불어 <strong>저소득 노인 대상 월 40만원 지급</strong>이 새롭게 시작되며, 이는 '국민 노후 기본소득'을 향한 중요한 첫걸음으로 평가됩니다.</p>

      <h3>기초연금이란?</h3>
      <p>기초연금은 만 65세 이상의 소득 하위 70% 노인에게 매월 지급되는 연금입니다. 국민연금과 별도로 지급되며, 노후 소득 보장의 기초 역할을 합니다. 2014년 월 20만원으로 시작한 이래 꾸준히 인상되어 왔습니다.</p>

      <h3>기초연금 인상 추이</h3>
      <div class="bar-chart">
        <div class="bar-item">
          <div class="bar-label"><span>2014년 도입</span><span class="bar-value">20만원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 50%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>2019년</span><span class="bar-value">25만원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 62.5%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>2021년</span><span class="bar-value">30만원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 75%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>2025년</span><span class="bar-value">34만 2,510원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 85.6%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>2026년</span><span class="bar-value">34만 9,700원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 87.4%"></div></div>
        </div>
      </div>

      <h3>2026년 주요 변화 한눈에 보기</h3>
      <table>
        <thead>
          <tr><th>항목</th><th>2025년</th><th>2026년</th><th>변화</th></tr>
        </thead>
        <tbody>
          <tr><td>기준연금액</td><td>34만 2,510원</td><td class="td-highlight">34만 9,700원</td><td class="td-highlight">+2.1%</td></tr>
          <tr><td>선정기준(단독)</td><td>228만원</td><td class="td-highlight">247만원</td><td class="td-highlight">+19만원</td></tr>
          <tr><td>선정기준(부부)</td><td>376만원</td><td class="td-highlight">395만 2,000원</td><td class="td-highlight">+19만 2,000원</td></tr>
          <tr><td>근로소득 공제</td><td>112만원</td><td class="td-highlight">116만원</td><td class="td-highlight">+4만원</td></tr>
          <tr><td>수급 대상</td><td>736만 명</td><td class="td-highlight">779만 명</td><td class="td-highlight">+43만 명</td></tr>
        </tbody>
      </table>

      <h3>저소득 노인 월 40만원 지급</h3>
      <p>2026년의 가장 큰 변화는 <strong>저소득 노인부터 월 40만원 지급</strong>이 시작된다는 점입니다. 이는 기존 기준연금액(34만 9,700원)보다 약 5만원 높은 금액으로, 소득이 가장 낮은 노인층의 생활 안정에 기여할 것으로 기대됩니다.</p>

      <div class="timeline">
        <div class="tl-item">
          <div class="tl-date">2026년 상반기</div>
          <div class="tl-title">저소득 노인 40만원 선지급 시작</div>
          <div class="tl-desc">생계급여 수급 노인 등 최저소득층부터 적용</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">2026년 하반기</div>
          <div class="tl-title">대상 단계적 확대</div>
          <div class="tl-desc">차상위 노인까지 점진적 확대 예정</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">2027년</div>
          <div class="tl-title">전체 기초연금 수급자 40만원 적용 목표</div>
          <div class="tl-desc">779만 명 전원 40만원 수령</div>
        </div>
      </div>

      <div class="key-numbers">
        <div class="key-num"><span class="num">779만 명</span><span class="num-label">수급 대상</span></div>
        <div class="key-num"><span class="num">34.97만원</span><span class="num-label">기준연금액</span></div>
        <div class="key-num"><span class="num">40만원</span><span class="num-label">저소득 노인 지급</span></div>
        <div class="key-num"><span class="num">+43만 명</span><span class="num-label">신규 수급자</span></div>
      </div>

      <div class="info-box">
        <div class="info-title">신청 안내</div>
        <p>만 65세 생일이 속하는 달의 1개월 전부터 신청 가능합니다. 주민센터, 국민연금공단 지사, 또는 복지로(www.bokjiro.go.kr)에서 온라인 신청할 수 있습니다. 필요 서류: 신분증, 통장사본, 금융정보 제공 동의서.</p>
      </div>

      <div class="summary-card">
        <h4>핵심 요약</h4>
        <ul>
          <li>기준연금액 34만 9,700원 (전년 대비 2.1% 인상)</li>
          <li>수급 대상 779만 명으로 43만 명 확대</li>
          <li>저소득 노인부터 월 40만원 지급 시작 (2027년 전체 확대 예정)</li>
          <li>선정기준액·근로소득 공제액 동시 상향</li>
        </ul>
      </div>
    `
  },
  {
    id: 6,
    title: "육아휴직 급여 월 최대 250만원 인상, 기간도 1년 6개월로 확대",
    date: "2026-01-01",
    summary: "2026년부터 육아휴직 급여가 대폭 인상되어 12개월 사용 시 총 2,310만원까지 지급됩니다. 사후지급금 제도가 폐지되고, 육아휴직 기간도 최대 1년 6개월로 확대되어 일·가정 양립이 크게 개선됩니다.",
    content: `
      <p>2026년 1월부터 시행된 육아휴직 제도 개편은 <strong>"대한민국 역대 가장 파격적인 육아 지원"</strong>이라는 평가를 받고 있습니다. 급여 대폭 인상, 사후지급금 폐지, 휴직 기간 확대라는 세 가지 핵심 변화가 동시에 이루어졌습니다.</p>

      <p>저출생 위기에 대응하기 위한 이번 개편은, 육아휴직을 사용하고 싶어도 경제적 부담 때문에 포기하는 부모를 줄이는 데 초점을 맞추고 있습니다.</p>

      <h3>육아휴직 급여 단계별 인상</h3>
      <p>사용 기간에 따라 단계적으로 지급 금액이 달라집니다. 초반 3개월은 통상임금의 100%를 월 250만원 한도로 받을 수 있어, 소득 단절 부담을 크게 줄였습니다.</p>

      <table>
        <thead>
          <tr><th>기간</th><th>지급률</th><th>월 상한액</th><th>월 하한액</th></tr>
        </thead>
        <tbody>
          <tr><td>1~3개월</td><td>통상임금 100%</td><td class="td-highlight">250만원</td><td>70만원</td></tr>
          <tr><td>4~6개월</td><td>통상임금 100%</td><td class="td-highlight">200만원</td><td>70만원</td></tr>
          <tr><td>7~12개월</td><td>통상임금 80%</td><td class="td-highlight">160만원</td><td>70만원</td></tr>
          <tr><td>13~18개월</td><td>통상임금 50%</td><td class="td-highlight">120만원</td><td>70만원</td></tr>
        </tbody>
      </table>

      <h3>12개월 사용 시 총 수령액 비교</h3>
      <div class="compare-grid">
        <div class="compare-card before">
          <div class="compare-label">2025년</div>
          <div class="compare-value">1,800만원</div>
          <div class="compare-desc">12개월 최대 수령액</div>
        </div>
        <div class="compare-card after">
          <div class="compare-label">2026년</div>
          <div class="compare-value">2,310만원</div>
          <div class="compare-desc">510만원 증가</div>
        </div>
      </div>

      <h3>3대 핵심 변화</h3>

      <div class="info-box blue">
        <div class="info-title">변화 1: 사후지급금 폐지</div>
        <p>기존에는 육아휴직 급여의 25%를 복직 후 6개월 근무해야 받을 수 있었습니다. 2026년부터는 이 사후지급금 제도가 폐지되어, <strong>매월 전액 즉시 지급</strong>됩니다. 경제적 부담 없이 온전히 육아에 집중할 수 있게 되었습니다.</p>
      </div>

      <div class="info-box">
        <div class="info-title">변화 2: 휴직 기간 1년 6개월로 확대</div>
        <p>육아휴직 기간이 기존 최대 1년에서 <strong>최대 1년 6개월</strong>로 확대됩니다. 특히 영아기 집중 돌봄이 필요한 시기에 부모가 더 오래 함께할 수 있습니다.</p>
      </div>

      <div class="info-box amber">
        <div class="info-title">변화 3: 6+6 부모육아휴직제 강화</div>
        <p>생후 18개월 이내 자녀를 둔 부부가 동시에 육아휴직을 사용하면, 부부 합산 <strong>최대 5,920만원</strong>을 수령할 수 있습니다. 아빠도 엄마도 함께 아이를 돌보는 문화를 만들어가는 제도입니다.</p>
      </div>

      <h3>월별 급여 수령 흐름도</h3>
      <div class="bar-chart">
        <div class="bar-item">
          <div class="bar-label"><span>1~3개월차</span><span class="bar-value">월 250만원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 100%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>4~6개월차</span><span class="bar-value">월 200만원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 80%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>7~12개월차</span><span class="bar-value">월 160만원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 64%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>13~18개월차</span><span class="bar-value">월 120만원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 48%"></div></div>
        </div>
      </div>

      <div class="key-numbers">
        <div class="key-num"><span class="num">250만원</span><span class="num-label">월 최대 급여</span></div>
        <div class="key-num"><span class="num">2,310만원</span><span class="num-label">12개월 총액</span></div>
        <div class="key-num"><span class="num">18개월</span><span class="num-label">최대 휴직 기간</span></div>
        <div class="key-num"><span class="num">5,920만원</span><span class="num-label">부부 동시 최대</span></div>
      </div>

      <div class="summary-card">
        <h4>핵심 요약</h4>
        <ul>
          <li>육아휴직 급여 월 최대 250만원 (통상임금 100%)</li>
          <li>12개월 사용 시 최대 2,310만원 (전년 대비 510만원 증가)</li>
          <li>사후지급금(25%) 폐지 → 매월 전액 즉시 지급</li>
          <li>휴직 기간 1년 → 1년 6개월 확대</li>
          <li>6+6 부부동시 사용 시 합산 최대 5,920만원</li>
        </ul>
      </div>
    `
  },
  {
    id: 10,
    title: "장애인 활동지원 월 258시간으로 확대, 개인예산제 전국 시행",
    date: "2026-03-27",
    summary: "2026년 장애인 활동지원 서비스가 월 258시간으로 확대되고, 시범사업이던 개인예산제가 전국 본사업으로 전환됩니다. 고용장려금 증액 등 장애인 고용 지원도 대폭 강화됩니다.",
    content: `
      <p>2026년은 장애인 복지 역사에서 <strong>'자기결정권 원년'</strong>이라 불릴 만합니다. 활동지원 시간 확대와 함께, 장애인 스스로 예산을 설계하는 <strong>개인예산제</strong>가 전국 본사업으로 전환되었기 때문입니다. 이는 '공급자 중심'에서 '당사자 중심'으로의 패러다임 전환을 의미합니다.</p>

      <h3>활동지원 서비스 확대</h3>
      <p>중증장애인의 일상생활과 사회활동을 돕는 활동지원 서비스가 양적·질적으로 모두 강화됩니다.</p>

      <table>
        <thead>
          <tr><th>항목</th><th>2025년</th><th>2026년</th><th>변화</th></tr>
        </thead>
        <tbody>
          <tr><td>월 최대 지원시간</td><td>205시간</td><td class="td-highlight">258시간</td><td class="td-highlight">+53시간</td></tr>
          <tr><td>시간당 단가</td><td>16,620원</td><td class="td-highlight">17,270원</td><td class="td-highlight">+650원</td></tr>
          <tr><td>지원 대상 인원</td><td>약 12만 명</td><td class="td-highlight">14만 명</td><td class="td-highlight">+2만 명</td></tr>
          <tr><td>월 최대 지원금액</td><td>약 341만원</td><td class="td-highlight">약 446만원</td><td class="td-highlight">+약 105만원</td></tr>
        </tbody>
      </table>

      <div class="compare-grid">
        <div class="compare-card before">
          <div class="compare-label">2025년 월 지원시간</div>
          <div class="compare-value">205시간</div>
          <div class="compare-desc">하루 약 6.8시간</div>
        </div>
        <div class="compare-card after">
          <div class="compare-label">2026년 월 지원시간</div>
          <div class="compare-value">258시간</div>
          <div class="compare-desc">하루 약 8.6시간</div>
        </div>
      </div>

      <h3>개인예산제란?</h3>
      <p>개인예산제는 기존의 정해진 서비스 대신, 장애인에게 <strong>현금성 예산을 직접 배정</strong>하여 본인이 필요한 서비스를 직접 선택·구매할 수 있도록 하는 제도입니다.</p>

      <div class="info-box blue">
        <div class="info-title">개인예산제로 이용 가능한 서비스</div>
        <p>활동지원 급여의 일부를 현금으로 전환하여, 보조기기 구입·수리, 주거환경 개선, 건강관리, 외출 지원, 정보통신 보조기기 등을 장애인 당사자가 직접 결정하여 사용합니다.</p>
      </div>

      <div class="timeline">
        <div class="tl-item">
          <div class="tl-date">2024~2025년</div>
          <div class="tl-title">시범사업 운영</div>
          <div class="tl-desc">서울·경기 등 일부 지역에서 시범 운영</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">2026년 1월</div>
          <div class="tl-title">전국 본사업 전환</div>
          <div class="tl-desc">전국 시·군·구로 확대 시행</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">2026년 3월 27일</div>
          <div class="tl-title">통합돌봄사업 본격 시행</div>
          <div class="tl-desc">지역사회 중심 장애인 통합돌봄 시작</div>
        </div>
      </div>

      <h3>장애인 고용 지원 강화</h3>
      <p>활동지원뿐 아니라 장애인의 경제활동 참여를 위한 고용 지원도 대폭 강화되었습니다.</p>

      <table>
        <thead>
          <tr><th>항목</th><th>2025년</th><th>2026년</th></tr>
        </thead>
        <tbody>
          <tr><td>고용장려금</td><td>3,721억원</td><td class="td-highlight">4,014억원 (+293억)</td></tr>
          <tr><td>지원고용 훈련수당 (일)</td><td>18,000원</td><td class="td-highlight">35,000원 (약 2배)</td></tr>
          <tr><td>취업성공패키지 수당 (월)</td><td>50만원</td><td class="td-highlight">60만원</td></tr>
          <tr><td>장애인 일자리</td><td>33,546명</td><td class="td-highlight">35,846명 (+2,300명)</td></tr>
        </tbody>
      </table>

      <div class="key-numbers">
        <div class="key-num"><span class="num">258시간</span><span class="num-label">월 활동지원</span></div>
        <div class="key-num"><span class="num">14만 명</span><span class="num-label">지원 대상</span></div>
        <div class="key-num"><span class="num">4,014억</span><span class="num-label">고용장려금</span></div>
        <div class="key-num"><span class="num">35,846명</span><span class="num-label">장애인 일자리</span></div>
      </div>

      <div class="summary-card">
        <h4>핵심 요약</h4>
        <ul>
          <li>활동지원 월 258시간으로 확대, 시간당 단가 17,270원 인상</li>
          <li>개인예산제 전국 본사업 전환 - 장애인 자기결정권 강화</li>
          <li>통합돌봄사업 3월 27일 본격 시행</li>
          <li>고용장려금 4,014억원, 훈련수당 약 2배 인상</li>
        </ul>
      </div>
    `
  },
  {
    id: 11,
    title: "국민취업지원제도 구직촉진수당 월 60만원 인상, 대상도 확대",
    date: "2026-01-01",
    summary: "국민취업지원제도 1유형 구직촉진수당이 월 50만원에서 60만원으로 인상되었습니다. 재신청이 가능해지고, 50~60대 중장년층까지 대상이 확대되어 더 많은 구직자가 지원받을 수 있게 됩니다.",
    content: `
      <p><strong>국민취업지원제도</strong>는 고용보험 사각지대에 있는 구직자에게 취업 지원 서비스와 생활 안정 자금을 함께 제공하는 '한국형 실업부조'입니다. 2026년 개편으로 지원 금액과 대상이 모두 확대되어, 더 촘촘한 고용 안전망으로 진화합니다.</p>

      <h3>제도 구조 이해하기</h3>
      <p>국민취업지원제도는 소득·재산 수준에 따라 두 가지 유형으로 나뉩니다.</p>

      <table>
        <thead>
          <tr><th>구분</th><th>1유형</th><th>2유형</th></tr>
        </thead>
        <tbody>
          <tr><td>대상</td><td>저소득 구직자 (기준중위소득 60% 이하)</td><td>청년, 중장년, 특정 계층</td></tr>
          <tr><td>구직촉진수당</td><td class="td-highlight">월 60만원 x 6개월 = 360만원</td><td>해당 없음</td></tr>
          <tr><td>취업활동비</td><td>최대 195만 4,000원</td><td class="td-highlight">최대 195만 4,000원</td></tr>
          <tr><td>취업지원서비스</td><td>1:1 맞춤형 상담</td><td>1:1 맞춤형 상담</td></tr>
          <tr><td>직업훈련</td><td>훈련비 지원</td><td>훈련비 지원</td></tr>
        </tbody>
      </table>

      <h3>구직촉진수당 인상</h3>
      <div class="compare-grid">
        <div class="compare-card before">
          <div class="compare-label">2025년</div>
          <div class="compare-value">월 50만원</div>
          <div class="compare-desc">6개월 합계 300만원</div>
        </div>
        <div class="compare-card after">
          <div class="compare-label">2026년</div>
          <div class="compare-value">월 60만원</div>
          <div class="compare-desc">6개월 합계 360만원</div>
        </div>
      </div>

      <h3>2026년 주요 개편 사항</h3>

      <div class="info-box blue">
        <div class="info-title">재신청 가능</div>
        <p>기존에는 1회 수급 후 재신청이 불가했으나, 2026년부터는 일정 조건을 충족하면 <strong>재신청이 가능</strong>합니다. 장기 실직자나 반복적 고용불안을 겪는 취약 구직자에게 큰 도움이 됩니다.</p>
      </div>

      <div class="info-box">
        <div class="info-title">대상 확대 - 중장년층 포함</div>
        <p>기존 청년 중심에서 <strong>50~60대 중장년 구직자, 고령층, 장기 실직자</strong>까지 대상이 확대되었습니다. 인구 고령화로 늘어나는 중장년 구직 수요에 적극 대응합니다.</p>
      </div>

      <div class="info-box amber">
        <div class="info-title">자격요건 완화</div>
        <p>가구 소득 및 재산 기준이 상향되어 신청 문턱이 낮아졌습니다. 기준중위소득 인상(6.51%)에 연동하여 선정기준이 함께 올라, 더 많은 구직자가 1유형 자격을 얻게 됩니다.</p>
      </div>

      <h3>지원 내용 종합</h3>
      <div class="key-numbers">
        <div class="key-num"><span class="num">월 60만원</span><span class="num-label">구직촉진수당</span></div>
        <div class="key-num"><span class="num">360만원</span><span class="num-label">6개월 최대</span></div>
        <div class="key-num"><span class="num">195만원</span><span class="num-label">취업활동비</span></div>
        <div class="key-num"><span class="num">300만원</span><span class="num-label">훈련장려금</span></div>
      </div>

      <h3>신청 방법</h3>
      <div class="timeline">
        <div class="tl-item">
          <div class="tl-date">1단계</div>
          <div class="tl-title">온라인 사전 신청</div>
          <div class="tl-desc">워크넷(www.work.go.kr)에서 온라인 신청 또는 고용센터 방문</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">2단계</div>
          <div class="tl-title">자격 심사 및 수급자격 결정</div>
          <div class="tl-desc">소득·재산 조사 후 1유형 또는 2유형 결정</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">3단계</div>
          <div class="tl-title">취업활동계획 수립</div>
          <div class="tl-desc">전담 상담사와 1:1 맞춤형 취업 계획 수립</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">4단계</div>
          <div class="tl-title">구직활동 + 수당 지급</div>
          <div class="tl-desc">구직활동 이행 확인 후 매월 60만원 지급</div>
        </div>
      </div>

      <div class="summary-card">
        <h4>핵심 요약</h4>
        <ul>
          <li>구직촉진수당 월 50만원 → 60만원 인상 (6개월 최대 360만원)</li>
          <li>1회 한정 → 재신청 가능으로 변경</li>
          <li>대상: 청년 + 50~60대 중장년 + 장기 실직자까지 확대</li>
          <li>가구 소득·재산 기준 상향으로 신청 문턱 완화</li>
        </ul>
      </div>
    `
  },
  {
    id: 12,
    title: "청년미래적금 6월 출시 예정, 정부 기여금 2배 확대",
    date: "2026-04-01",
    summary: "청년도약계좌를 대체하는 '청년미래적금'이 2026년 6월 출시 예정입니다. 월 50만원씩 3년 납입 시 최대 2,200만원 마련이 가능하며, 정부 기여금이 기존 대비 2배로 확대됩니다.",
    content: `
      <p>청년의 자산 형성을 돕는 새로운 금융 상품 <strong>'청년미래적금'</strong>이 2026년 6월 출시를 앞두고 있습니다. 기존 청년도약계좌의 성과와 한계를 반영하여 설계된 이 상품은, 정부 기여금이 <strong>2배로 확대</strong>되고 가입 기간이 단축되어 청년들이 더 빠르게 목돈을 마련할 수 있도록 설계되었습니다.</p>

      <h3>청년미래적금 vs 청년도약계좌 비교</h3>
      <table>
        <thead>
          <tr><th>항목</th><th>청년도약계좌 (기존)</th><th>청년미래적금 (신규)</th></tr>
        </thead>
        <tbody>
          <tr><td>가입 연령</td><td>만 19~34세</td><td>만 19~34세</td></tr>
          <tr><td>소득 요건</td><td>연 7,500만원 이하</td><td class="td-highlight">연 6,000만원 이하</td></tr>
          <tr><td>월 납입한도</td><td>70만원</td><td class="td-highlight">50만원</td></tr>
          <tr><td>만기</td><td>5년</td><td class="td-highlight">3년</td></tr>
          <tr><td>정부 기여금 (월)</td><td>최대 3.3만원</td><td class="td-highlight">최대 6만원 (약 2배)</td></tr>
          <tr><td>만기 수령액</td><td>최대 약 5,000만원</td><td class="td-highlight">최대 약 2,200만원</td></tr>
          <tr><td>이자소득 비과세</td><td>O</td><td>O</td></tr>
        </tbody>
      </table>

      <div class="info-box blue">
        <div class="info-title">왜 만기가 짧아졌을까?</div>
        <p>기존 5년 만기는 중간 해지율이 높다는 문제가 있었습니다. 청년미래적금은 3년으로 단축하되 정부 기여금을 높여, <strong>실제 수령 가능성</strong>을 크게 높인 것이 핵심 전략입니다.</p>
      </div>

      <h3>정부 기여금 구조</h3>
      <p>소득 수준에 따라 기여금이 차등 지급됩니다. 소득이 낮을수록 정부가 더 많이 지원합니다.</p>

      <div class="bar-chart">
        <div class="bar-item">
          <div class="bar-label"><span>우대형 (소득 3,600만원 이하)</span><span class="bar-value">월 6만원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 100%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>일반형 (소득 3,600~4,800만원)</span><span class="bar-value">월 4만원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 67%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>기본형 (소득 4,800~6,000만원)</span><span class="bar-value">월 2만원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 33%"></div></div>
        </div>
      </div>

      <h3>3년 만기 시뮬레이션 (우대형 기준)</h3>
      <div class="key-numbers">
        <div class="key-num"><span class="num">1,800만원</span><span class="num-label">본인 납입 (50만x36개월)</span></div>
        <div class="key-num"><span class="num">216만원</span><span class="num-label">정부 기여금 (6만x36개월)</span></div>
        <div class="key-num"><span class="num">~184만원</span><span class="num-label">이자 수익 (비과세)</span></div>
        <div class="key-num"><span class="num">~2,200만원</span><span class="num-label">만기 수령액</span></div>
      </div>

      <h3>함께 확대되는 청년 복지</h3>

      <table>
        <thead>
          <tr><th>제도</th><th>변경 내용</th></tr>
        </thead>
        <tbody>
          <tr><td>청년 월세 지원</td><td class="td-highlight">한시사업 → 상시 제도 전환, 월 최대 20만원 (최대 2년)</td></tr>
          <tr><td>청년 추가 공제</td><td class="td-highlight">대상 29세 이하 → 34세 이하 확대, 공제금 40만 → 60만원</td></tr>
          <tr><td>비수도권 취업 청년</td><td class="td-highlight">지역별 480만~720만원 차등 지원 (신규)</td></tr>
        </tbody>
      </table>

      <h3>출시 일정</h3>
      <div class="timeline">
        <div class="tl-item">
          <div class="tl-date">4월</div>
          <div class="tl-title">상품 세부 설계 확정 및 금융위 인가</div>
          <div class="tl-desc">취급 은행 선정, 금리 조건 확정</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">5월</div>
          <div class="tl-title">사전 안내 및 가입 예약</div>
          <div class="tl-desc">은행 앱·워크넷 등에서 사전 정보 공개</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">6월</div>
          <div class="tl-title">정식 출시 및 가입 시작</div>
          <div class="tl-desc">취급 은행 앱 또는 영업점에서 가입</div>
        </div>
      </div>

      <div class="summary-card">
        <h4>핵심 요약</h4>
        <ul>
          <li>만 19~34세, 연소득 6,000만원 이하 청년 대상</li>
          <li>월 50만원, 3년 만기 → 최대 약 2,200만원 수령</li>
          <li>정부 기여금 월 최대 6만원 (기존 대비 약 2배)</li>
          <li>2026년 6월 출시 예정</li>
          <li>청년 월세 지원 상시화, 추가 공제 확대 동시 시행</li>
        </ul>
      </div>
    `
  },
  {
    id: 13,
    title: "긴급복지 생계지원금 인상, 위기 가구 안전망 강화",
    date: "2026-01-01",
    summary: "실직·단전 등 갑작스러운 위기 상황의 가구에 지급되는 긴급복지 생계지원금이 인상되었습니다. 1인 가구 월 78만원, 4인 가구 월 199만원으로 올라 위기 가구 보호가 한층 두터워집니다.",
    content: `
      <p><strong>긴급복지 지원제도</strong>는 갑작스러운 위기 상황(실직, 사망, 단전, 가정폭력 등)으로 생계가 어려워진 가구에 신속하게 지원금을 지급하는 제도입니다. 복잡한 심사 없이 <strong>'선지원 후처리'</strong> 원칙으로 운영되어, 위기 상황에서 가장 빠르게 도움을 받을 수 있는 제도 중 하나입니다.</p>

      <h3>긴급복지 지원, 어떤 상황에서 받을 수 있나요?</h3>
      <p>아래 위기 사유 중 하나에 해당하면 긴급복지 지원을 신청할 수 있습니다.</p>

      <table>
        <thead>
          <tr><th>위기 사유</th><th>구체적 상황</th></tr>
        </thead>
        <tbody>
          <tr><td>주소득자의 사망·실종</td><td>가구의 주 수입원인 가족이 사망하거나 행방불명된 경우</td></tr>
          <tr><td>주소득자의 실직</td><td>갑작스러운 해고, 폐업 등으로 소득이 끊긴 경우</td></tr>
          <tr><td>중한 질병·부상</td><td>가구원의 중대 질환·사고로 경제적 위기에 처한 경우</td></tr>
          <tr><td>가정폭력·성폭력</td><td>폭력 피해로 기존 주거지에서 이탈한 경우</td></tr>
          <tr><td>화재 등 재난</td><td>자연재해, 화재로 주거지를 잃은 경우</td></tr>
          <tr><td>단전·단수·단가스</td><td>요금 체납으로 에너지 공급이 중단된 경우</td></tr>
        </tbody>
      </table>

      <h3>2026년 생계지원금 인상</h3>

      <table>
        <thead>
          <tr><th>가구 규모</th><th>2025년</th><th>2026년</th><th>인상액</th></tr>
        </thead>
        <tbody>
          <tr><td>1인 가구</td><td>73만 1,600원</td><td class="td-highlight">78만원</td><td class="td-highlight">+4만 8,400원</td></tr>
          <tr><td>2인 가구</td><td>120만 2,700원</td><td class="td-highlight">128만 4,000원</td><td class="td-highlight">+8만 1,300원</td></tr>
          <tr><td>3인 가구</td><td>153만 8,800원</td><td class="td-highlight">164만원</td><td class="td-highlight">+10만 1,200원</td></tr>
          <tr><td>4인 가구</td><td>187만 2,700원</td><td class="td-highlight">199만 4,600원</td><td class="td-highlight">+12만 1,900원</td></tr>
          <tr><td>5인 가구</td><td>217만 5,500원</td><td class="td-highlight">231만 7,000원</td><td class="td-highlight">+14만 1,500원</td></tr>
        </tbody>
      </table>

      <h3>소득·재산 기준 (4인 가구)</h3>
      <div class="key-numbers">
        <div class="key-num"><span class="num">487만원</span><span class="num-label">소득 기준 (중위소득 75%)</span></div>
        <div class="key-num"><span class="num">1,249만원</span><span class="num-label">금융재산 기준</span></div>
        <div class="key-num"><span class="num">최대 6회</span><span class="num-label">생계지원 횟수</span></div>
        <div class="key-num"><span class="num">즉시지급</span><span class="num-label">선지원 후처리</span></div>
      </div>

      <h3>지원 종류와 내용</h3>
      <p>긴급복지는 생계지원 외에도 의료·주거·교육 등 다양한 지원을 동시에 받을 수 있습니다.</p>

      <table>
        <thead>
          <tr><th>지원 종류</th><th>내용</th><th>지원 기간</th></tr>
        </thead>
        <tbody>
          <tr><td>생계지원</td><td class="td-highlight">가구 규모별 현금 지급</td><td>최대 6회</td></tr>
          <tr><td>의료지원</td><td>300만원 이내 의료비 지원</td><td>최대 2회</td></tr>
          <tr><td>주거지원</td><td>임시거소 제공 또는 주거비 지원</td><td>최대 12회</td></tr>
          <tr><td>교육지원</td><td>초·중·고 학비, 수업료, 입학금</td><td>최대 2회</td></tr>
          <tr><td>연료비 지원</td><td>월 10만원 이내</td><td>최대 6회</td></tr>
        </tbody>
      </table>

      <h3>신청 방법</h3>
      <div class="info-box blue">
        <div class="info-title">긴급할 때 이렇게 신청하세요</div>
        <p><strong>129 보건복지상담센터</strong> (24시간 운영)에 전화하거나, 가까운 주민센터에 방문하면 됩니다. 본인뿐 아니라 이웃, 친인척, 공무원도 발견 즉시 신고·신청할 수 있습니다. 서류가 없어도 먼저 지원하고 나중에 보완하는 '선지원 후처리' 원칙이 적용됩니다.</p>
      </div>

      <div class="info-box red">
        <div class="info-title">주의: 부정수급 시 환수</div>
        <p>거짓이나 부정한 방법으로 지원을 받은 경우 지원금 전액이 환수되며, 향후 5년간 긴급복지 신청이 제한됩니다.</p>
      </div>

      <div class="summary-card">
        <h4>핵심 요약</h4>
        <ul>
          <li>위기 사유 발생 시 '선지원 후처리'로 즉시 지급</li>
          <li>1인 가구 월 78만원, 4인 가구 월 199만원 (전년 대비 인상)</li>
          <li>생계·의료·주거·교육·연료비 동시 지원 가능</li>
          <li>129 (24시간) 또는 주민센터에서 신청</li>
        </ul>
      </div>
    `
  },
  {
    id: 5,
    title: "청년도약계좌 가입 조건 완화, 월 최대 70만원 정부 지원",
    date: "2026-04-04",
    summary: "만 19~34세 청년이라면 연소득 7,500만원 이하 시 청년도약계좌에 가입 가능합니다. 정부 기여금 포함 월 최대 70만원까지 납입 지원되며, 5년 만기 시 최대 5,000만원 목돈 마련이 가능합니다.",
    content: `
      <p>청년의 자산 형성을 지원하는 <strong>청년도약계좌</strong>의 가입 조건이 완화되어 더 많은 청년이 혜택을 누릴 수 있게 되었습니다. 정부 기여금과 이자소득 비과세 혜택이 결합되어, 5년 만기 시 최대 5,000만원의 목돈 마련이 가능합니다.</p>

      <h3>청년도약계좌 개요</h3>
      <table>
        <thead>
          <tr><th>항목</th><th>내용</th></tr>
        </thead>
        <tbody>
          <tr><td>가입 대상</td><td class="td-highlight">만 19~34세, 개인소득 연 7,500만원 이하</td></tr>
          <tr><td>가구소득 요건</td><td>기준중위소득 180% 이하</td></tr>
          <tr><td>월 납입한도</td><td class="td-highlight">최대 70만원 (정부 기여금 포함)</td></tr>
          <tr><td>만기</td><td>5년</td></tr>
          <tr><td>만기 수령액</td><td class="td-highlight">최대 약 5,000만원</td></tr>
          <tr><td>세제 혜택</td><td>이자소득 비과세</td></tr>
        </tbody>
      </table>

      <h3>소득 구간별 정부 기여금</h3>
      <div class="bar-chart">
        <div class="bar-item">
          <div class="bar-label"><span>소득 2,400만원 이하</span><span class="bar-value">월 최대 3.3만원 (6%)</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 100%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>소득 2,400~3,600만원</span><span class="bar-value">월 최대 2.3만원 (4.6%)</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 70%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>소득 3,600~4,800만원</span><span class="bar-value">월 최대 1.5만원 (3.7%)</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 45%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>소득 4,800~6,000만원</span><span class="bar-value">월 최대 1만원 (3%)</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 30%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>소득 6,000~7,500만원</span><span class="bar-value">기여금 없음 (비과세만)</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 5%"></div></div>
        </div>
      </div>

      <h3>5년 만기 수령 시뮬레이션</h3>
      <p>매월 70만원 납입, 소득 2,400만원 이하 기준으로 계산한 예시입니다.</p>

      <div class="key-numbers">
        <div class="key-num"><span class="num">4,200만원</span><span class="num-label">본인 납입 (70만x60개월)</span></div>
        <div class="key-num"><span class="num">~198만원</span><span class="num-label">정부 기여금 합계</span></div>
        <div class="key-num"><span class="num">~602만원</span><span class="num-label">이자 수익 (비과세)</span></div>
        <div class="key-num"><span class="num">~5,000만원</span><span class="num-label">만기 수령액</span></div>
      </div>

      <div class="info-box amber">
        <div class="info-title">청년미래적금과 비교하세요</div>
        <p>2026년 6월 출시 예정인 '청년미래적금'은 만기가 3년으로 짧고 정부 기여금이 월 최대 6만원(약 2배)입니다. 5년 장기 저축이 가능하다면 도약계좌, 3년 내 목돈이 필요하다면 미래적금이 유리합니다. 두 상품 동시 가입은 불가합니다.</p>
      </div>

      <h3>신청 방법</h3>
      <div class="timeline">
        <div class="tl-item">
          <div class="tl-date">1단계</div>
          <div class="tl-title">자격 확인</div>
          <div class="tl-desc">연령, 개인소득, 가구소득 요건 충족 여부 확인</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">2단계</div>
          <div class="tl-title">은행 앱에서 가입 신청</div>
          <div class="tl-desc">취급 은행 모바일 앱 또는 영업점 방문</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">3단계</div>
          <div class="tl-title">서민금융진흥원 자격 심사</div>
          <div class="tl-desc">소득·가구 요건 심사 (약 2~3주 소요)</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">4단계</div>
          <div class="tl-title">계좌 개설 완료 및 적립 시작</div>
          <div class="tl-desc">심사 통과 후 자동 개설, 매월 자유롭게 납입</div>
        </div>
      </div>

      <div class="summary-card">
        <h4>핵심 요약</h4>
        <ul>
          <li>만 19~34세, 연소득 7,500만원 이하 청년 대상</li>
          <li>월 최대 70만원 납입, 5년 만기 시 최대 약 5,000만원</li>
          <li>소득 구간별 정부 기여금 차등 지급 + 이자소득 비과세</li>
          <li>취급 은행 앱 또는 영업점에서 가입 신청</li>
        </ul>
      </div>
    `
  },
  {
    id: 15,
    title: "아동수당 만 13세까지 단계적 확대, 인구감소지역 최대 월 13만원",
    date: "2026-04-05",
    summary: "2026년 4월부터 아동수당 지급 대상이 만 9세 미만으로 확대되며, 2030년까지 만 13세 미만으로 단계적으로 넓어집니다. 비수도권은 월 10만 5천원, 인구감소지역은 최대 월 13만원까지 받을 수 있습니다.",
    content: `
      <p><strong>아동수당</strong>은 만 8세 미만(2025년 기준) 아동에게 월 10만원을 지급하는 보편적 복지 제도입니다. 2026년부터 아동수당법이 개정되어 <strong>지급 연령이 단계적으로 만 13세까지 확대</strong>되고, 거주 지역에 따라 추가 지원까지 받을 수 있게 됩니다.</p>

      <div class="info-box blue">
        <div class="info-title">왜 확대되었나요?</div>
        <p>저출생 시대에 양육비 부담을 줄이고, 아동의 기본적 권리를 보장하기 위한 조치입니다. 특히 초등학교 입학 후에도 양육비가 지속되는 현실을 반영하여, 만 8세에서 끊기던 아동수당을 점차 확대하는 것입니다.</p>
      </div>

      <h3>단계적 확대 일정</h3>
      <p>매년 1세씩 확대하여 2030년에 만 13세 미만까지 완성됩니다.</p>

      <table>
        <thead>
          <tr><th>연도</th><th>지급 대상</th><th>신규 포함 학년</th><th>예상 수혜 아동</th></tr>
        </thead>
        <tbody>
          <tr><td>2025년</td><td>만 8세 미만</td><td>-</td><td>약 300만 명</td></tr>
          <tr><td>2026년</td><td class="td-highlight">만 9세 미만</td><td>초등 2학년</td><td class="td-highlight">약 340만 명</td></tr>
          <tr><td>2027년</td><td>만 10세 미만</td><td>초등 3학년</td><td>약 380만 명</td></tr>
          <tr><td>2028년</td><td>만 11세 미만</td><td>초등 4학년</td><td>약 415만 명</td></tr>
          <tr><td>2029년</td><td>만 12세 미만</td><td>초등 5학년</td><td>약 450만 명</td></tr>
          <tr><td>2030년</td><td class="td-highlight">만 13세 미만</td><td>초등 6학년</td><td class="td-highlight">약 480만 명</td></tr>
        </tbody>
      </table>

      <div class="bar-chart">
        <div class="bar-item">
          <div class="bar-label"><span>2025년 (만 8세 미만)</span><span class="bar-value">약 300만 명</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 62.5%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>2026년 (만 9세 미만)</span><span class="bar-value">약 340만 명</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 70.8%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>2028년 (만 11세 미만)</span><span class="bar-value">약 415만 명</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 86.5%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>2030년 (만 13세 미만)</span><span class="bar-value">약 480만 명</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 100%"></div></div>
        </div>
      </div>

      <h3>지역별 차등 지급 — 최대 월 13만원</h3>
      <p>2026년부터 거주 지역에 따라 아동수당 금액이 달라집니다. 인구감소지역에 거주하는 아동에게 더 많은 금액을 지원하여 <strong>지방 정착을 유도</strong>하는 것이 목적입니다.</p>

      <table>
        <thead>
          <tr><th>거주 지역</th><th>월 지급액</th><th>지역사랑상품권 추가</th><th>합계</th></tr>
        </thead>
        <tbody>
          <tr><td>수도권</td><td>10만원</td><td>-</td><td>10만원</td></tr>
          <tr><td>비수도권</td><td class="td-highlight">10만 5천원</td><td>-</td><td class="td-highlight">10만 5천원</td></tr>
          <tr><td>인구감소지역 (우대)</td><td class="td-highlight">11만원</td><td>+1만원</td><td class="td-highlight">12만원</td></tr>
          <tr><td>인구감소지역 (특별)</td><td class="td-highlight">12만원</td><td>+1만원</td><td class="td-highlight">최대 13만원</td></tr>
        </tbody>
      </table>

      <div class="key-numbers">
        <div class="key-num"><span class="num">13만원</span><span class="num-label">인구감소 특별지역 최대</span></div>
        <div class="key-num"><span class="num">만 9세</span><span class="num-label">2026년 지급 대상</span></div>
        <div class="key-num"><span class="num">340만 명</span><span class="num-label">2026년 수혜 아동</span></div>
        <div class="key-num"><span class="num">1월 소급</span><span class="num-label">2026년 1월분부터</span></div>
      </div>

      <div class="info-box amber">
        <div class="info-title">지역사랑상품권 추가 지원 안내</div>
        <p>인구감소지역에서 아동수당을 <strong>지역사랑상품권</strong>으로 수령하면 월 1만원 상당액을 추가로 받을 수 있습니다. 해당 지원은 지자체 조례 제정을 거쳐 <strong>2026년 하반기</strong>부터 순차 시행 예정입니다.</p>
      </div>

      <h3>함께 알아두면 좋은 육아 지원금 총정리</h3>
      <p>아동수당 외에도 연령대별로 다양한 지원금이 있습니다. 중복 수령이 가능한 항목이 많으니 빠짐없이 챙기세요.</p>

      <table>
        <thead>
          <tr><th>제도</th><th>대상</th><th>금액</th><th>비고</th></tr>
        </thead>
        <tbody>
          <tr><td>부모급여</td><td>만 0세</td><td class="td-highlight">월 100만원</td><td>아동수당과 중복 수령 가능</td></tr>
          <tr><td>부모급여</td><td>만 1세</td><td class="td-highlight">월 50만원</td><td>아동수당과 중복 수령 가능</td></tr>
          <tr><td>첫만남이용권</td><td>출생아</td><td class="td-highlight">첫째 200만원 / 둘째+ 300만원</td><td>출생 후 1회 지급</td></tr>
          <tr><td>아동수당</td><td>만 9세 미만 (2026년)</td><td class="td-highlight">월 10만~13만원</td><td>지역별 차등</td></tr>
          <tr><td>조부모 돌봄수당</td><td>영아</td><td class="td-highlight">월 최대 60만원</td><td>2026년 신설</td></tr>
        </tbody>
      </table>

      <div class="info-box">
        <div class="info-title">0세 아동을 둔 가정의 월 지원금 합산 예시</div>
        <p>수도권 거주, 만 0세 아동 기준: <strong>부모급여 100만원 + 아동수당 10만원 = 월 110만원</strong><br>
        인구감소 특별지역 거주: <strong>부모급여 100만원 + 아동수당 13만원 = 월 113만원</strong></p>
      </div>

      <h3>지급 일정 및 신청 방법</h3>
      <div class="timeline">
        <div class="tl-item">
          <div class="tl-date">2026년 4월</div>
          <div class="tl-title">확대 대상(만 8~9세 미만) 지급 시작</div>
          <div class="tl-desc">2026년 1월분부터 소급 지급 (4개월치 일괄)</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">매월 25일</div>
          <div class="tl-title">정기 지급일</div>
          <div class="tl-desc">신청한 계좌로 매월 25일 자동 입금</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">2026년 하반기</div>
          <div class="tl-title">지역사랑상품권 추가 지원 시작</div>
          <div class="tl-desc">인구감소지역 지자체별 순차 시행</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">2027년 1월</div>
          <div class="tl-title">만 10세 미만으로 2차 확대</div>
          <div class="tl-desc">매년 1세씩 확대하여 2030년 만 13세 완성</div>
        </div>
      </div>

      <div class="info-box blue">
        <div class="info-title">신청 방법 안내</div>
        <p><strong>온라인:</strong> 복지로(bokjiro.go.kr) 또는 정부24(gov.kr)에서 신청<br>
        <strong>오프라인:</strong> 주민센터 방문 신청<br>
        <strong>필요 서류:</strong> 신청인 신분증, 아동 통장 사본<br>
        <strong>기존 수급자:</strong> 만 8세 이상 확대분은 별도 신청 없이 자동 지급됩니다.</p>
      </div>

      <div class="compare-grid">
        <div class="compare-card before">
          <div class="compare-label">2025년</div>
          <div class="compare-value">만 8세 미만</div>
          <div class="compare-desc">전국 일괄 월 10만원</div>
        </div>
        <div class="compare-card after">
          <div class="compare-label">2030년 완성 시</div>
          <div class="compare-value">만 13세 미만</div>
          <div class="compare-desc">지역별 최대 월 13만원</div>
        </div>
      </div>

      <div class="summary-card">
        <h4>핵심 요약</h4>
        <ul>
          <li>2026년 4월부터 아동수당 만 9세 미만으로 확대 (1월분 소급 지급)</li>
          <li>2030년까지 매년 1세씩 확대 → 최종 만 13세 미만</li>
          <li>수도권 10만원 / 비수도권 10.5만원 / 인구감소지역 최대 13만원</li>
          <li>부모급여(0세 100만원, 1세 50만원)와 중복 수령 가능</li>
          <li>기존 수급자 확대분은 별도 신청 없이 자동 지급</li>
        </ul>
      </div>
    `
  },
  {
    id: 16,
    title: "2026년 아이돌봄서비스 대폭 확대, 4월 23일부터 달라지는 5가지",
    date: "2026-04-05",
    summary: "4월 23일부터 아이돌봄사 국가자격제가 도입되고, 지원 대상이 기준중위소득 250% 이하로 확대됩니다. 취약가구 지원시간은 연 1,080시간으로 늘어나며, 영아·야간긴급 돌봄수당이 새롭게 신설됩니다.",
    content: `
      <p><strong>아이돌봄서비스</strong>는 만 12세 이하 아동이 있는 가정에 돌봄사를 파견하여 부모의 양육 부담을 덜어주는 정부 지원 제도입니다. 2026년에는 <strong>역대 가장 큰 폭의 개편</strong>이 이루어져, 더 많은 가정이 더 안심하고 이용할 수 있게 됩니다.</p>

      <div class="key-numbers">
        <div class="key-num"><span class="num">250%</span><span class="num-label">지원 대상 확대 (중위소득)</span></div>
        <div class="key-num"><span class="num">1,080시간</span><span class="num-label">취약가구 연간 지원</span></div>
        <div class="key-num"><span class="num">12,790원</span><span class="num-label">시간당 돌봄 단가</span></div>
        <div class="key-num"><span class="num">4.23</span><span class="num-label">국가자격제 시행일</span></div>
      </div>

      <h3>변화 1: 아이돌봄사 국가자격제 도입</h3>
      <p>4월 23일부터 아이돌봄 인력의 전문성과 신뢰성을 높이기 위한 <strong>'아이돌봄사' 국가자격제</strong>가 시행됩니다. 정해진 교육과정을 이수하고 적성·인성 검사를 통과해야만 자격을 부여받을 수 있습니다.</p>

      <div class="info-box blue">
        <div class="info-title">부모가 안심할 수 있는 이유</div>
        <p>범죄경력조회 근거가 법적으로 마련되고, 건강 상태 확인 절차가 강화됩니다. 기존에 활동 중이던 아이돌보미는 개정된 규정에 따라 자격을 취득한 것으로 인정되므로 서비스 공백은 없습니다.</p>
      </div>

      <h3>변화 2: 지원 대상 대폭 확대</h3>
      <p>지원 가구의 소득 기준이 기준중위소득 200%에서 <strong>250% 이하</strong>로 상향됩니다. 4인 가구 기준 월 소득 약 1,624만원 이하면 정부 지원을 받을 수 있어, 중산층 맞벌이 가정까지 폭넓게 포함됩니다.</p>

      <div class="compare-grid">
        <div class="compare-card before">
          <div class="compare-label">2025년 지원 기준</div>
          <div class="compare-value">중위소득 200%</div>
          <div class="compare-desc">4인 가구 약 1,299만원</div>
        </div>
        <div class="compare-card after">
          <div class="compare-label">2026년 지원 기준</div>
          <div class="compare-value">중위소득 250%</div>
          <div class="compare-desc">4인 가구 약 1,624만원</div>
        </div>
      </div>

      <h3>소득유형별 정부 지원 비율</h3>
      <p>소득 수준에 따라 4개 유형으로 나뉘며, 소득이 낮을수록 정부가 더 많이 부담합니다. 맞벌이 가구는 합산 소득의 25%가 감경되어 판정되므로 유리합니다.</p>

      <table>
        <thead>
          <tr><th>유형</th><th>소득 기준 (4인 가구)</th><th>정부 지원</th><th>본인 부담(시간당)</th></tr>
        </thead>
        <tbody>
          <tr><td>가형 (75% 이하)</td><td>약 487만원 이하</td><td class="td-highlight">85%</td><td>약 1,918원</td></tr>
          <tr><td>나형 (120% 이하)</td><td>약 779만원 이하</td><td class="td-highlight">60%</td><td>약 5,116원</td></tr>
          <tr><td>다형 (200% 이하)</td><td>약 1,299만원 이하</td><td class="td-highlight">30%</td><td>약 8,953원</td></tr>
          <tr><td>라형 (250% 이하)</td><td>약 1,624만원 이하</td><td class="td-highlight">15%</td><td>약 10,871원</td></tr>
        </tbody>
      </table>

      <div class="info-box amber">
        <div class="info-title">다자녀 가정 추가 혜택</div>
        <p>2자녀 이상 다자녀 가정은 모든 서비스에 대해 본인부담금의 <strong>10%를 추가 감면</strong>받습니다. 한부모·장애부모·청소년부모 가정은 가형 기준으로 정부지원이 5% 추가 적용됩니다.</p>
      </div>

      <h3>변화 3: 취약가구 지원시간 확대</h3>
      <div class="compare-grid">
        <div class="compare-card before">
          <div class="compare-label">2025년 취약가구</div>
          <div class="compare-value">연 960시간</div>
          <div class="compare-desc">월 약 80시간</div>
        </div>
        <div class="compare-card after">
          <div class="compare-label">2026년 취약가구</div>
          <div class="compare-value">연 1,080시간</div>
          <div class="compare-desc">월 약 90시간 (+120시간)</div>
        </div>
      </div>
      <p>한부모·조손·장애·청소년부모 등 <strong>취약가구의 지원시간이 연 960시간에서 1,080시간으로 120시간 확대</strong>됩니다.</p>

      <h3>변화 4: 돌봄수당 인상 및 신규 수당 신설</h3>
      <table>
        <thead>
          <tr><th>항목</th><th>2025년</th><th>2026년</th><th>변화</th></tr>
        </thead>
        <tbody>
          <tr><td>기본 돌봄수당 (시간당)</td><td>12,180원</td><td class="td-highlight">12,790원</td><td class="td-highlight">+5% 인상</td></tr>
          <tr><td>영아돌봄수당 (시간당)</td><td>1,500원</td><td class="td-highlight">2,000원</td><td class="td-highlight">+33% 인상</td></tr>
          <tr><td>유아돌봄수당 (시간당)</td><td>없음</td><td class="td-highlight">1,000원</td><td class="td-highlight">신설</td></tr>
          <tr><td>야간긴급돌봄수당 (1일)</td><td>없음</td><td class="td-highlight">5,000원</td><td class="td-highlight">신설</td></tr>
        </tbody>
      </table>

      <h3>변화 5: 서비스 종류별 안내</h3>
      <table>
        <thead>
          <tr><th>서비스 유형</th><th>대상 아동</th><th>서비스 내용</th><th>이용 시간</th></tr>
        </thead>
        <tbody>
          <tr><td>시간제 돌봄</td><td>만 3개월~만 12세</td><td>일시적 돌봄 (놀이, 식사 보조 등)</td><td class="td-highlight">연 840시간</td></tr>
          <tr><td>영아종일제</td><td>만 3개월~만 36개월</td><td>이유식, 목욕, 수유 등 전반 돌봄</td><td class="td-highlight">월 200시간</td></tr>
          <tr><td>질병감염아동 돌봄</td><td>만 12세 이하</td><td>질병 아동 특별 돌봄</td><td>필요 시</td></tr>
          <tr><td>기관연계 돌봄</td><td>만 12세 이하</td><td>어린이집·학교 등하원 대행</td><td>필요 시</td></tr>
        </tbody>
      </table>

      <h3>시행 일정</h3>
      <div class="timeline">
        <div class="tl-item">
          <div class="tl-date">2026년 1월</div>
          <div class="tl-title">지원 대상 중위소득 250%로 확대</div>
          <div class="tl-desc">돌봄수당 인상 및 신규 수당 적용 시작</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">2026년 3월</div>
          <div class="tl-title">소득 재판정 신청 기간</div>
          <div class="tl-desc">기존 이용자 및 신규 신청자 소득유형 재산정</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">2026년 4월 23일</div>
          <div class="tl-title">아이돌봄사 국가자격제 시행</div>
          <div class="tl-desc">범죄경력조회·인성검사 의무화, 민간 돌봄기관 등록제 시행</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">2026년 하반기</div>
          <div class="tl-title">서비스 품질 모니터링 강화</div>
          <div class="tl-desc">국가자격제 정착 상황 점검 및 보완</div>
        </div>
      </div>

      <h3>신청 방법</h3>
      <div class="info-box blue">
        <div class="info-title">이렇게 신청하세요</div>
        <p><strong>온라인:</strong> 아이돌봄서비스 홈페이지(idolbom.go.kr) 또는 복지로(bokjiro.go.kr)에서 신청<br>
        <strong>오프라인:</strong> 주민센터 방문 신청<br>
        <strong>필요 서류:</strong> 신분증, 건강보험료 납부확인서, 가족관계증명서, 맞벌이 증빙서류(해당 시)</p>
      </div>

      <div class="summary-card">
        <h4>핵심 요약</h4>
        <ul>
          <li>4월 23일 아이돌봄사 국가자격제 시행 — 범죄경력조회·인성검사 의무화</li>
          <li>지원 대상 중위소득 200% → 250%로 확대 (4인 가구 약 1,624만원)</li>
          <li>취약가구 지원시간 연 960 → 1,080시간 (+120시간)</li>
          <li>돌봄수당 5% 인상 + 유아돌봄·야간긴급 수당 신설</li>
          <li>다자녀 가정 본인부담금 10% 추가 감면</li>
        </ul>
      </div>
    `
  },
  {
    id: 17,
    title: "2026 고유가 피해지원금, 전국민 70%에 1인당 최대 10만원",
    date: "2026-04-06",
    summary: "국제 유가 급등에 따른 가계 부담 완화를 위해 정부가 전국민 70%를 대상으로 1인당 최대 10만원의 고유가 피해지원금을 지급합니다. 취약계층은 4월 우선 지급, 일반 대상자는 6~7월 순차 지급되며 선별 기준은 건강보험료입니다.",
    content: `
      <p>국제 유가 급등에 따른 가계 부담 완화를 위해 정부가 전국민 70%를 대상으로 <strong>1인당 최대 10만원</strong>의 고유가 피해지원금을 지급합니다. 취약계층은 4월 우선 지급, 일반 대상자는 6~7월 순차 지급될 예정이며 선별 기준은 건강보험료입니다.</p>

      <div class="key-numbers">
        <div class="key-num"><span class="num">10만원</span><span class="num-label">1인당 최대 지원</span></div>
        <div class="key-num"><span class="num">70%</span><span class="num-label">지원 대상 비율</span></div>
        <div class="key-num"><span class="num">4월</span><span class="num-label">취약계층 우선 지급</span></div>
      </div>

      <h3>지원 대상 및 선별 기준</h3>
      <p>이번 고유가 피해지원금은 기초생활수급자와 차상위계층을 시작으로, 건강보험료 납부액 기준 <strong>소득 하위 70% 가구</strong>에 지급됩니다. 작년 2차 소비쿠폰이 상위 10%를 제외한 90% 가구를 대상으로 건보료 약 51만원을 기준으로 활용했던 것과 달리, 이번에는 70% 기준으로 더 정밀하게 선별됩니다. 수도권과 비수도권의 생활비 차이를 반영해 지역별로도 일부 차등이 적용될 수 있습니다.</p>

      <table>
        <thead>
          <tr><th>구분</th><th>지원 금액</th><th>지급 시기</th></tr>
        </thead>
        <tbody>
          <tr><td>기초수급자</td><td class="td-highlight">10만원</td><td>2026년 4월</td></tr>
          <tr><td>차상위계층</td><td class="td-highlight">10만원</td><td>2026년 4월</td></tr>
          <tr><td>소득 하위 70%</td><td>10만원</td><td>2026년 6~7월</td></tr>
          <tr><td>상위 30%</td><td>지원 제외</td><td>-</td></tr>
        </tbody>
      </table>

      <h3>지급 일정 타임라인</h3>
      <div class="timeline">
        <div class="tl-item">
          <div class="tl-date">2026년 4월</div>
          <div class="tl-title">취약계층 우선 지급</div>
          <div class="tl-desc">기초수급자·차상위 자동 지급 시작</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">2026년 5월</div>
          <div class="tl-title">대상자 산정 및 통보</div>
          <div class="tl-desc">건강보험료 기준 산정</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">2026년 6~7월</div>
          <div class="tl-title">일반 대상자 순차 지급</div>
          <div class="tl-desc">정부24 신청 접수</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">2026년 8월</div>
          <div class="tl-title">이의신청 및 마무리</div>
          <div class="tl-desc">추가 지급 종료</div>
        </div>
      </div>

      <h3>신청 방법</h3>
      <div class="info-box blue">
        <div class="info-title">신청 채널</div>
        <p><strong>정부24(gov.kr)</strong> 온라인 신청 또는 주민센터 방문 신청. 기초수급자·차상위는 별도 신청 없이 자동 지급됩니다.</p>
      </div>
      <div class="info-box amber">
        <div class="info-title">유의사항</div>
        <p>건강보험료 기준은 2026년 3월 부과액을 기준으로 산정되며, 직장·지역 가입자가 함께 있는 가구는 합산 처리됩니다.</p>
      </div>
      <div class="info-box red">
        <div class="info-title">사기 주의</div>
        <p>지원금 신청을 사유로 비밀번호·OTP를 요구하는 문자·전화는 100% 사기입니다. 절대 응답하지 마세요.</p>
      </div>

      <div class="summary-card">
        <h4>핵심 요약</h4>
        <ul>
          <li>전국민 70%에 1인당 최대 10만원 지급</li>
          <li>기초수급자·차상위 4월 자동 지급</li>
          <li>일반 대상자 6~7월 정부24 신청</li>
          <li>건강보험료(2026년 3월 부과액) 기준 선별</li>
        </ul>
      </div>
    `
  },
  {
    id: 18,
    title: "2026 청년월세지원, 상시 신청 전환 최대 480만원 지원",
    date: "2026-04-06",
    summary: "2026년부터 청년월세지원이 한시 사업에서 상시 신청 제도로 전환되어, 만 19~34세 무주택 청년이 월 최대 20만원씩 최대 24개월(총 480만원)을 지원받을 수 있습니다. 1차 신청은 3월 30일부터 5월 29일까지 청년몽땅정보통·복지로에서 접수합니다.",
    content: `
      <p>2026년부터 <strong>청년월세지원</strong>이 한시 사업에서 상시 신청 제도로 전환됩니다. 만 19~34세 무주택 청년이 월 최대 20만원씩 최대 24개월(총 480만원)을 지원받을 수 있으며, 1차 신청 기간은 <strong>3월 30일부터 5월 29일</strong>까지입니다.</p>

      <div class="key-numbers">
        <div class="key-num"><span class="num">20만원</span><span class="num-label">월 최대 지원</span></div>
        <div class="key-num"><span class="num">24개월</span><span class="num-label">최대 지원 기간</span></div>
        <div class="key-num"><span class="num">480만원</span><span class="num-label">총 지원 한도</span></div>
      </div>

      <h3>지원 대상 및 자격</h3>
      <p>지원 대상은 부모와 별도 거주 중인 만 19~34세 무주택 청년으로, <strong>보증금 5,000만원 이하·월세 70만원 이하</strong>의 주택에 거주해야 합니다. 본인 소득은 중위소득 60% 이하, 원가구(부모 포함) 소득은 중위소득 100% 이하여야 하며, 2026년부터는 자산 기준이 일부 완화되어 청년가구 1억 2,200만원, 원가구 4억 7,000만원 이하로 적용됩니다.</p>

      <h3>2025 vs 2026 비교</h3>
      <div class="compare-grid">
        <div class="compare-card before">
          <div class="compare-label">2025년 (한시)</div>
          <div class="compare-value">최대 240만원</div>
          <div class="compare-desc">연 1회 한정·최대 12개월</div>
        </div>
        <div class="compare-card after">
          <div class="compare-label">2026년 (상시)</div>
          <div class="compare-value">최대 480만원</div>
          <div class="compare-desc">상시 신청·최대 24개월</div>
        </div>
      </div>

      <table>
        <thead>
          <tr><th>구분</th><th>2025년 (한시)</th><th>2026년 (상시)</th></tr>
        </thead>
        <tbody>
          <tr><td>신청 방식</td><td>연 1회 한정</td><td class="td-highlight">상시 신청</td></tr>
          <tr><td>지원 금액</td><td>월 20만원</td><td>월 20만원</td></tr>
          <tr><td>지원 기간</td><td>최대 12개월</td><td class="td-highlight">최대 24개월</td></tr>
          <tr><td>총 지원액</td><td>240만원</td><td class="td-highlight">480만원</td></tr>
          <tr><td>보증금 기준</td><td>5,000만원</td><td>5,000만원</td></tr>
        </tbody>
      </table>

      <h3>신청 일정 타임라인</h3>
      <div class="timeline">
        <div class="tl-item">
          <div class="tl-date">2026년 3월 30일</div>
          <div class="tl-title">1차 신청 접수 시작</div>
          <div class="tl-desc">복지로·청년몽땅정보통</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">2026년 5월 29일</div>
          <div class="tl-title">1차 신청 마감</div>
          <div class="tl-desc">서류 제출 완료</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">2026년 6월</div>
          <div class="tl-title">소득·자산 조사 및 선정</div>
          <div class="tl-desc">대상자 발표</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">2026년 7월</div>
          <div class="tl-title">첫 월세 지원금 지급</div>
          <div class="tl-desc">계좌 입금 시작</div>
        </div>
      </div>

      <h3>신청 방법</h3>
      <div class="info-box blue">
        <div class="info-title">온라인 신청</div>
        <p><strong>복지로(bokjiro.go.kr)</strong> 또는 <strong>청년몽땅정보통(youth.seoul.go.kr)</strong>에 공동인증서로 로그인 후 '청년월세지원' 메뉴에서 신청. 임대차계약서, 월세 이체 증빙, 가족관계증명서가 필요합니다.</p>
      </div>
      <div class="info-box amber">
        <div class="info-title">자주 놓치는 조건</div>
        <p>주민등록상 부모와 분리되어 있어야 하며, 실제 거주지와 등본 주소가 일치해야 합니다. 전입신고를 미루면 탈락 사유가 됩니다.</p>
      </div>
      <div class="info-box red">
        <div class="info-title">중복 수혜 불가</div>
        <p>주거급여, 행복주택 등 다른 공공 주거지원을 받고 있다면 청년월세지원과 중복 수령이 제한됩니다.</p>
      </div>

      <div class="summary-card">
        <h4>핵심 요약</h4>
        <ul>
          <li>한시 사업 → 상시 신청 제도로 전환</li>
          <li>최대 24개월·총 480만원까지 지원 (2배 확대)</li>
          <li>1차 신청: 2026년 3월 30일 ~ 5월 29일</li>
          <li>복지로·청년몽땅정보통에서 온라인 접수</li>
        </ul>
      </div>
    `
  },
  {
    id: 19,
    title: "2026 육아휴직 급여 대폭 개편 — 통상임금 100%·사후지급금 폐지",
    date: "2026-04-06",
    summary: "2026년부터 육아휴직 급여가 '초기 집중 지원형'으로 전면 개편됩니다. 1~3개월 차에 통상임금의 100%(최대 월 250만원)를 받고, 복직 6개월 후 지급되던 사후지급금(25%)은 폐지되어 휴직 중 전액 수령합니다. 0세 부모급여도 월 120만원으로 인상됩니다.",
    content: `
      <p>2026년부터 <strong>육아휴직 급여 체계</strong>가 전면 개편되었습니다. 휴직 1~3개월 차에는 통상임금의 <strong>100%(최대 월 250만원)</strong>가 지급되고, 기존의 사후지급금 제도(25%를 복직 6개월 후 지급)는 <strong>완전히 폐지</strong>되어 휴직 기간 중 전액을 받습니다.</p>

      <div class="key-numbers">
        <div class="key-num"><span class="num">250만원</span><span class="num-label">1~3개월 월 최대</span></div>
        <div class="key-num"><span class="num">100%</span><span class="num-label">통상임금 지급률</span></div>
        <div class="key-num"><span class="num">0원</span><span class="num-label">사후지급금(폐지)</span></div>
      </div>

      <h3>월차별 지급액</h3>
      <div class="bar-chart">
        <div class="bar-item">
          <div class="bar-label"><span>1~3개월 (통상임금 100%)</span><span class="bar-value">최대 250만원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 100%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>4~6개월</span><span class="bar-value">최대 200만원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 80%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>7개월 이후</span><span class="bar-value">최대 160만원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 64%"></div></div>
        </div>
      </div>

      <h3>개편 전후 비교</h3>
      <table>
        <thead>
          <tr><th>구분</th><th>개편 전 (~2025)</th><th>개편 후 (2026~)</th></tr>
        </thead>
        <tbody>
          <tr><td>1~3개월 급여</td><td>통상임금 80% (상한 150만원)</td><td class="td-highlight">통상임금 100% (상한 250만원)</td></tr>
          <tr><td>사후지급금</td><td>25% 복직 6개월 후 지급</td><td class="td-highlight">폐지 — 전액 휴직 중 지급</td></tr>
          <tr><td>0세 부모급여</td><td>월 100만원</td><td>월 120만원</td></tr>
          <tr><td>1세 부모급여</td><td>월 50만원</td><td>월 60만원</td></tr>
        </tbody>
      </table>

      <h3>신청 방법 및 일정</h3>
      <div class="timeline">
        <div class="tl-item">
          <div class="tl-title">1단계</div>
          <div class="tl-desc">회사에 육아휴직 개시일 30일 전 신청서 제출</div>
        </div>
        <div class="tl-item">
          <div class="tl-title">2단계</div>
          <div class="tl-desc">휴직 시작 후 고용24(work24.go.kr) 또는 관할 고용센터에 급여 신청</div>
        </div>
        <div class="tl-item">
          <div class="tl-title">3단계</div>
          <div class="tl-desc">매월 단위로 급여 지급 (사후지급금 없이 전액)</div>
        </div>
        <div class="tl-item">
          <div class="tl-title">부모급여</div>
          <div class="tl-desc">출생 후 60일 이내 복지로 또는 행정복지센터에서 신청</div>
        </div>
      </div>

      <div class="info-box blue">
        <div class="info-title">꿀팁 — 6+6 부모육아휴직제</div>
        <p>부부가 모두 육아휴직을 사용하면 첫 6개월 동안 부모 각각 월 최대 450만원까지 받을 수 있어, 맞벌이 가구는 합산 시 매우 큰 효과를 볼 수 있습니다.</p>
      </div>
      <div class="info-box amber">
        <div class="info-title">주의</div>
        <p>통상임금 250만원 상한은 1~3개월 차에만 적용되며, 이후 단계적으로 줄어듭니다. 사업장의 통상임금 산정 기준(기본급+고정수당)을 미리 확인하세요.</p>
      </div>
      <div class="info-box red">
        <div class="info-title">유의사항</div>
        <p>자영업자·특수고용직 등 고용보험 미가입자는 본 제도의 직접 적용 대상이 아닙니다. 별도의 '특고·예술인 출산전후급여' 제도를 확인해야 합니다.</p>
      </div>

      <div class="summary-card">
        <h4>핵심 요약</h4>
        <ul>
          <li>1~3개월 차 통상임금 100%·월 최대 250만원</li>
          <li>사후지급금(25%) 완전 폐지 — 휴직 중 전액 수령</li>
          <li>0세 부모급여 월 120만원, 1세 월 60만원 인상</li>
          <li>6+6 부모육아휴직제 활용 시 월 최대 450만원</li>
        </ul>
      </div>
    `
  },
  {
    id: 20,
    title: "2026 청년월세 특별지원 — 연중 상시 신청, 최대 480만원",
    date: "2026-04-06",
    summary: "2026년 청년월세 특별지원이 연중 상시 신청 체계로 전환되었습니다. 만 19~34세 무주택 청년이 월 최대 20만원씩 최대 24개월간 총 480만원을 지원받을 수 있으며, 2026년 신규 모집 규모는 전국 6만 명, 지급은 2028년 12월까지 이어집니다.",
    content: `
      <p>2026년부터 <strong>청년월세 특별지원</strong>이 연중 상시 신청 체계로 전환되었습니다. 만 19~34세 무주택 청년이 월 최대 20만원을 최대 24개월 동안 지원받아 총 <strong>480만원</strong>까지 받을 수 있습니다.</p>

      <div class="key-numbers">
        <div class="key-num"><span class="num">480만원</span><span class="num-label">최대 총 지원금</span></div>
        <div class="key-num"><span class="num">24개월</span><span class="num-label">최대 지원 기간</span></div>
        <div class="key-num"><span class="num">6만 명</span><span class="num-label">2026 신규 모집</span></div>
      </div>

      <h3>지원 규모 한눈에 보기</h3>
      <div class="bar-chart">
        <div class="bar-item">
          <div class="bar-label"><span>월 지원 한도</span><span class="bar-value">월 20만원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 42%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>연간 최대</span><span class="bar-value">240만원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 60%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>총 최대</span><span class="bar-value">480만원 (24개월)</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 100%"></div></div>
        </div>
      </div>

      <h3>2025 vs 2026 제도 비교</h3>
      <table>
        <thead>
          <tr><th>구분</th><th>2025년</th><th>2026년</th></tr>
        </thead>
        <tbody>
          <tr><td>신청 기간</td><td>한정 모집(특정 기간)</td><td class="td-highlight">연중 상시 신청</td></tr>
          <tr><td>월 지원 금액</td><td>최대 20만원</td><td>최대 20만원</td></tr>
          <tr><td>지원 기간</td><td>최대 12개월</td><td class="td-highlight">최대 24개월</td></tr>
          <tr><td>총 한도</td><td>240만원</td><td class="td-highlight">480만원</td></tr>
          <tr><td>지급 종료</td><td>2026년 말</td><td>2028년 12월</td></tr>
        </tbody>
      </table>

      <h3>신청 자격</h3>
      <div class="compare-grid">
        <div class="compare-card before">
          <div class="compare-label">연령</div>
          <div class="compare-value">만 19~34세</div>
          <div class="compare-desc">무주택 청년 (신청일 기준)</div>
        </div>
        <div class="compare-card after">
          <div class="compare-label">소득</div>
          <div class="compare-value">중위 60% 이하</div>
          <div class="compare-desc">원가구 중위 100% 이하</div>
        </div>
        <div class="compare-card before">
          <div class="compare-label">재산</div>
          <div class="compare-value">1.22억 이하</div>
          <div class="compare-desc">원가구 4.7억 원 이하</div>
        </div>
        <div class="compare-card after">
          <div class="compare-label">주거</div>
          <div class="compare-value">보증금 5천·월세 70만</div>
          <div class="compare-desc">이하 임차 거주</div>
        </div>
      </div>

      <h3>신청 일정 타임라인</h3>
      <div class="timeline">
        <div class="tl-item">
          <div class="tl-date">2026.03.30</div>
          <div class="tl-title">1차 모집 개시</div>
          <div class="tl-desc">09:00 복지로 접수 시작</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">2026.05.29</div>
          <div class="tl-title">1차 모집 마감</div>
          <div class="tl-desc">이후 연중 상시 접수 전환</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">심사</div>
          <div class="tl-title">소득·재산 조사</div>
          <div class="tl-desc">약 2개월 소요</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">지급</div>
          <div class="tl-title">심사 완료 후 소급 지급</div>
          <div class="tl-desc">최대 2028년 12월까지</div>
        </div>
      </div>

      <div class="info-box blue">
        <div class="info-title">신청 경로</div>
        <p>복지로(bokjiro.go.kr) 온라인 신청 또는 주소지 관할 행정복지센터 방문 신청. 모바일은 '복지로 앱'에서 가능합니다.</p>
      </div>
      <div class="info-box amber">
        <div class="info-title">준비 서류</div>
        <p>임대차계약서, 월세 이체 증빙(최근 3개월), 가족관계증명서, 통장 사본. 분리거주 청년은 '가족관계 분리' 입증이 핵심입니다.</p>
      </div>
      <div class="info-box red">
        <div class="info-title">제외 대상</div>
        <p>주택 소유자, 직계존속·형제자매 주택 임차인, 공공임대주택 거주자, 보증금 5천만원 초과 거주자는 신청할 수 없습니다.</p>
      </div>

      <div class="summary-card">
        <h4>핵심 요약</h4>
        <ul>
          <li>연중 상시 신청 체계로 전환</li>
          <li>최대 24개월·총 480만원 지원</li>
          <li>2026년 신규 모집 6만 명</li>
          <li>지급은 2028년 12월까지 이어짐</li>
        </ul>
      </div>
    `
  },
  {
    id: 21,
    title: "2026 고유가 피해지원금 — 1인당 10만~60만원, 3,580만 명 대상",
    date: "2026-04-07",
    summary: "국제 유가 급등에 따른 가계 부담을 줄이기 위해 정부가 4조 8,000억 원 규모의 고유가 피해지원금을 추진합니다. 소득 하위 70% 국민 약 3,580만 명이 기본 대상이며, 기초생활수급자·차상위·한부모 등 취약계층은 1인당 최대 60만 원까지 받을 수 있습니다. 1차 지급은 2026년 4월 말~5월 초 시작됩니다.",
    content: `
      <p>국제 유가 급등으로 인한 가계·서민 부담을 완화하기 위해 정부가 <strong>4조 8,000억 원 규모</strong>의 고유가 피해지원금을 추진합니다. 소득 하위 70% 국민 약 <strong>3,580만 명</strong>이 기본 대상이며, 기초생활수급자·차상위계층·한부모가족 등 취약계층에는 가산금이 더해져 1인당 <strong>최대 60만 원</strong>까지 받을 수 있습니다.</p>

      <div class="key-numbers">
        <div class="key-num"><span class="num">4.8조원</span><span class="num-label">총 예산</span></div>
        <div class="key-num"><span class="num">3,580만명</span><span class="num-label">예상 수혜</span></div>
        <div class="key-num"><span class="num">최대 60만원</span><span class="num-label">1인당 상한</span></div>
      </div>

      <h3>대상별 지급액(예시)</h3>
      <div class="bar-chart">
        <div class="bar-item">
          <div class="bar-label"><span>기초생활수급자(비수도권)</span><span class="bar-value">최대 60만원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 100%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>차상위·한부모</span><span class="bar-value">40~45만원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 75%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>소득 하위 70% 일반</span><span class="bar-value">20~25만원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 42%"></div></div>
        </div>
        <div class="bar-item">
          <div class="bar-label"><span>기본 지원</span><span class="bar-value">10만원</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 18%"></div></div>
        </div>
      </div>

      <h3>대상 구분표</h3>
      <table>
        <thead>
          <tr><th>구분</th><th>1인당 지급액</th><th>신청 방식</th></tr>
        </thead>
        <tbody>
          <tr><td>기초생활수급자</td><td class="td-highlight">최대 60만원</td><td>자동 지급</td></tr>
          <tr><td>차상위·한부모</td><td>40만~45만원</td><td>온라인/주민센터</td></tr>
          <tr><td>소득 하위 70%</td><td>20만~25만원</td><td>온라인/주민센터</td></tr>
          <tr><td>기본 지원</td><td>10만원</td><td>온라인/주민센터</td></tr>
        </tbody>
      </table>

      <h3>온라인 vs 오프라인 신청</h3>
      <div class="compare-grid">
        <div class="compare-card before">
          <div class="compare-label">온라인</div>
          <div class="compare-value">정부24·복지로</div>
          <div class="compare-desc">공동인증 로그인, 24시간 가능</div>
        </div>
        <div class="compare-card after">
          <div class="compare-label">오프라인</div>
          <div class="compare-value">행정복지센터</div>
          <div class="compare-desc">어르신·디지털 취약계층 권장</div>
        </div>
      </div>

      <h3>지급 일정</h3>
      <div class="timeline">
        <div class="tl-item">
          <div class="tl-date">2026.04 말~05 초</div>
          <div class="tl-title">1차 지급</div>
          <div class="tl-desc">취약계층 자동 지급</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">2026.05 중순</div>
          <div class="tl-title">2차 신청 개시(예정)</div>
          <div class="tl-desc">일반 대상자 접수 시작</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">2026.06~</div>
          <div class="tl-title">순차 지급</div>
          <div class="tl-desc">심사 후 본인 명의 계좌로 입금</div>
        </div>
      </div>

      <div class="info-box blue">
        <div class="info-title">건강보험료 기준</div>
        <p>소득 하위 70% 판정은 본인부담 건강보험료 합산액 기준으로 이루어질 가능성이 높습니다. 가구원 수별 컷오프 금액은 정부 공식 발표를 확인하세요.</p>
      </div>
      <div class="info-box amber">
        <div class="info-title">준비물</div>
        <p>신분증, 본인 명의 계좌번호, 가구원 정보. 온라인 신청 시 공동·간편인증이 필요합니다.</p>
      </div>
      <div class="info-box red">
        <div class="info-title">주의</div>
        <p>구체적인 신청 일정과 컷오프 기준은 일부 미확정입니다. 사칭 문자·전화에 주의하고, 반드시 정부24·복지로 공식 채널을 이용하세요.</p>
      </div>

      <div class="summary-card">
        <h4>핵심 요약</h4>
        <ul>
          <li>총 예산 4조 8,000억 원, 약 3,580만 명 수혜 추정</li>
          <li>1인당 최소 10만원 ~ 최대 60만원 차등 지급</li>
          <li>소득 하위 70% 기본 대상, 취약계층 가산</li>
          <li>1차 지급 2026년 4월 말~5월 초 예정</li>
        </ul>
      </div>
    `
  }
];

export const insightArticles = [
  {
    id: 1,
    tag: "empathy",
    tagLabel: "따뜻한 공감",
    title: "복지, '도움'을 넘어 '당연한 권리'가 되는 세상",
    paragraphs: [
      "우리는 살아가면서 누구나 한 번쯤 예기치 못한 비바람을 맞곤 합니다. 갑작스러운 질병, 경제적인 어려움, 혹은 홀로 감당하기 벅찬 육아나 노후의 무게까지. 이때 사회복지는 단순히 누군가에게 베푸는 '자선'이 아닙니다.",
      "복지는 우리가 대한민국 국민으로서 당당하게 누려야 할 <strong>'사회적 안전망'</strong>입니다. \"내가 이런 지원을 받아도 될까?\"라는 망설임 대신, \"나의 어려움을 국가와 사회가 함께 짊어지고 있구나\"라는 안도감을 드리는 것이 복지의 진짜 목적입니다."
    ],
    highlight: "복지헬퍼는 그 막막한 순간에 여러분의 손을 잡아주는 이정표가 되고자 합니다. 복잡한 서류와 어려운 용어 뒤에 숨겨진 당신의 권리를 찾아드리는 일, 그것이 우리가 존재하는 이유입니다."
  },
  {
    id: 2,
    tag: "practical",
    tagLabel: "실용 정보",
    title: "모르면 손해! 내 상황에 딱 맞는 복지 서비스 찾는 법",
    paragraphs: [
      "매년 수많은 복지 정책이 쏟아져 나오지만, 정작 나에게 필요한 혜택이 무엇인지 몰라 지나치는 경우가 많습니다. '복지 사각지대'는 정보의 부재에서 시작됩니다."
    ],
    list: [
      { strong: "생애주기별 맞춤 지원:", text: "영유아 보육료 지원부터 청년 내일채움공제, 노인 기초연금까지 인생의 단계마다 준비된 혜택을 확인하세요." },
      { strong: "가구 특성별 혜택:", text: "다자녀 가구, 한부모 가족, 장애인 가구 등 상황에 따라 가산되는 지원금과 바우처 제도가 다양합니다." },
      { strong: "지자체 특화 서비스:", text: "중앙정부뿐만 아니라 내가 살고 있는 지역에서만 제공하는 숨은 복지 포인트를 놓치지 마세요." }
    ],
    highlight: "복지는 신청하는 사람에게 열리는 문입니다. 오늘 바로 복지헬퍼에서 당신의 이름으로 준비된 혜택을 검색해 보세요."
  },
  {
    id: 3,
    tag: "future",
    tagLabel: "미래 비전",
    title: "차가운 기술이 전하는 따뜻한 온기, 스마트 복지의 시대",
    paragraphs: [
      "4차 산업혁명 시대, 복지도 변화하고 있습니다. 이제는 단순히 사후에 지원하는 것을 넘어, 데이터와 AI를 통해 위기 가구를 미리 예측하고 돌보는 <strong>'선제적 복지'</strong>가 실현되고 있습니다.",
      "고독사를 예방하는 스마트 플러그, 거동이 불편한 어르신을 돕는 돌봄 로봇, 그리고 복잡한 복지 정보를 한눈에 찾아주는 지능형 큐레이션 서비스까지. 기술은 차갑지만, 그 기술이 향하는 곳은 가장 낮은 곳의 따뜻한 사람이어야 합니다."
    ],
    highlight: "저희는 기술을 통해 복지의 문턱을 낮추고, 단 한 사람도 소외되지 않는 '디지털 포용 사회'를 꿈꿉니다. 복지의 온기가 구석구석 퍼질 수 있도록 앞장서겠습니다."
  },
  {
    id: 4,
    tag: "practical",
    tagLabel: "실용 정보",
    title: "청년이 꼭 챙겨야 할 취업 지원금 총정리: 내일채움공제부터 국민취업지원제도까지",
    paragraphs: [
      "취업 준비 중인 청년이라면 정부가 지원하는 다양한 취업 지원 제도를 반드시 확인해야 합니다. 제대로 활용하면 수백만 원에서 최대 수천만 원의 목돈을 마련할 수 있습니다.",
      "핵심은 내가 어떤 상황에 있는지를 먼저 파악하는 것입니다. 재직자라면 <strong>청년내일채움공제</strong>, 구직자라면 <strong>국민취업지원제도</strong>가 출발점이 됩니다."
    ],
    list: [
      { strong: "청년내일채움공제:", text: "중소·중견기업에 취업한 청년이 2년간 400만원 적립 시 정부·기업 기여금 합산 1,200만원 수령 가능. 만 15~34세 대상." },
      { strong: "국민취업지원제도:", text: "구직활동 지원금 월 50만원(최대 6개월)과 취업 알선 서비스 제공. 소득·재산 요건 충족 시 1유형으로 신청 가능." },
      { strong: "청년 일자리 도약 장려금:", text: "취업 취약 청년을 채용한 기업에 최대 월 60만원 지원, 청년 입장에서는 더 많은 채용 기회로 연결됩니다." }
    ],
    highlight: "지원금은 '알고 신청하는 사람'에게만 돌아갑니다. 오늘 워크넷과 복지헬퍼에서 내 조건에 맞는 취업 지원 제도를 확인해 보세요."
  },
  {
    id: 5,
    tag: "empathy",
    tagLabel: "따뜻한 공감",
    title: "고유가 시대, 우리 가족을 지키는 정부 지원금 총정리",
    paragraphs: [
      "중동전쟁으로 인한 고유가가 장기화되면서, 기름값·난방비·물가 상승으로 가계 부담이 커지고 있습니다. 특히 저소득층과 취약계층일수록 에너지 비용이 가처분소득에서 차지하는 비중이 높아 충격이 더 큽니다.",
      "정부는 26.2조원 규모의 추경을 통해 국민 생활 안정에 나섰습니다. <strong>소득 하위 70% 국민 3,580만 명</strong>에게 고유가 피해지원금이 지급되며, 에너지 바우처 확대, 유류세 인하 연장 등 다층적 지원이 이루어집니다."
    ],
    list: [
      { strong: "고유가 피해지원금:", text: "기초생활수급자·차상위 45만~60만원, 나머지 하위 70% 10만~25만원 차등 지급" },
      { strong: "에너지 바우처:", text: "저소득 취약계층 대상 난방비·전기료 지원, 2026년 지원 단가 인상" },
      { strong: "그냥드림센터:", text: "전국 300개소에서 먹거리·생필품 무상 제공, 사전 자격심사 없이 누구나 이용 가능" }
    ],
    highlight: "위기의 시대일수록 복지의 역할이 중요합니다. 자격이 될 수 있는 지원금을 놓치지 말고, 주민센터나 129 복지상담센터에 지금 바로 문의해 보세요."
  }
];
