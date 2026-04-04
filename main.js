// ==========================================================================
// main.js - WelfareFinder 핵심 로직
// 데이터는 policies.js / posts.js 에서 관리합니다.
// ==========================================================================
import { policies } from './policies.js';
import { newsArticles, insightArticles } from './posts.js';

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
// 홈 탭 - 최신 뉴스 & 인사이트 카드 렌더링
// ==========================================================================
function renderHomeNews() {
    const grid = document.getElementById('homeNewsGrid');
    if (!grid) return;
    // 최신순 정렬, 최대 3개 표시
    const sorted = [...newsArticles].sort((a, b) => new Date(b.date) - new Date(a.date));
    const latest = sorted.slice(0, 3);
    grid.innerHTML = latest.map(article => `
        <a href="article.html?type=news&id=${article.id}" class="home-news-card">
            <div class="card-date"><i class="fas fa-calendar-alt"></i> ${article.date}</div>
            <div class="card-title">${article.title}</div>
            <div class="card-summary">${article.summary}</div>
            <div class="card-read-more">자세히 보기 <span>→</span></div>
        </a>
    `).join('');
}

function renderHomeInsights() {
    const grid = document.getElementById('homeInsightGrid');
    if (!grid) return;
    grid.innerHTML = insightArticles.map(article => `
        <a href="article.html?type=insight&id=${article.id}" class="home-insight-card">
            <div class="insight-card-tag ${article.tag}">${article.tagLabel}</div>
            <div class="insight-card-title">${article.title}</div>
            <div class="insight-card-excerpt">${(article.paragraphs || [])[0] || ''}</div>
            <div class="card-read-more">자세히 보기 <span>→</span></div>
        </a>
    `).join('');
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

    // 홈 탭 카드 렌더링
    renderHomeNews();
    renderHomeInsights();

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
