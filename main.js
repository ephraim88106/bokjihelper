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
        const target = this.getAttribute('target') || '';
        
        const categoryLabels = {
            'youth': '청년',
            'marriage': '신혼부부',
            'family': '가족/여성',
            'elderly': '노인',
            'housing': '주거자금',
            'medical': '의료/건강',
            'job': '일자리/창업',
            'all': '전체'
        };

        const badgeColor = `var(--${category}-color, var(--primary-color))`;
        const badgeLabel = categoryLabels[category] || category;

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    cursor: pointer;
                }
                .card {
                    background-color: var(--surface-color);
                    border: 1px solid var(--border-color);
                    border-radius: var(--radius-md);
                    padding: 1.8rem;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: var(--shadow-soft);
                    position: relative;
                    overflow: hidden;
                }
                .card:hover {
                    transform: translateY(-8px);
                    box-shadow: var(--shadow-premium);
                    border-color: var(--primary-color);
                }
                .badge {
                    display: inline-block;
                    background-color: ${badgeColor};
                    color: white;
                    padding: 0.35rem 0.9rem;
                    border-radius: var(--radius-pill);
                    font-size: 0.75rem;
                    font-weight: 800;
                    margin-bottom: 1.2rem;
                    align-self: flex-start;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .title {
                    font-size: 1.3rem;
                    font-weight: 800;
                    margin-bottom: 0.8rem;
                    line-height: 1.4;
                    color: var(--text-color);
                }
                .description {
                    font-size: 0.95rem;
                    color: var(--text-muted);
                    margin-bottom: 1.5rem;
                    flex-grow: 1;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 1.2rem;
                    border-top: 1px solid var(--border-color);
                    font-size: 0.85rem;
                    font-weight: 700;
                    color: var(--primary-color);
                }
                .footer i { font-size: 1rem; }
            </style>
            <div class="card">
                <span class="badge">${badgeLabel}</span>
                <h3 class="title">${title}</h3>
                <p class="description">${description}</p>
                <div class="footer">
                    <span>상세보기</span>
                    <span><i class="fas fa-chevron-right"></i></span>
                </div>
            </div>
        `;
    }
}
customElements.define('policy-card', PolicyCard);

// ==========================================================================
// Enhanced Mock Data (with Details)
// ==========================================================================
const mockPolicies = [
    {
        id: 1,
        title: "청년 월세 특별지원",
        category: "youth",
        description: "경제적 어려움을 겪고 있는 청년층의 주거비 부담 경감을 위해 월세를 지원합니다.",
        details: {
            purpose: "코로나19 장기화로 인한 경제적 어려움을 겪는 청년층의 주거비 부담 경감",
            benefit: "실제 납부하는 임차료 범위 내에서 월 최대 20만원씩 최대 12개월(회) 동안 지원",
            target: "만 19세~34세 독립거주 무주택 청년 중 소득·재산 요건을 충족하는 자",
            documents: "임대차계약서, 월세이체 증빙서류, 통장사본, 가족관계증명서 등",
            process: "복지로 홈페이지 또는 거주지 관할 읍·면·동 행정복지센터 방문 신청"
        },
        link: "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveWlfareInfoDetl.do?wlfareInfoId=WLF00004661"
    },
    {
        id: 2,
        title: "신혼부부 전세자금 대출",
        category: "marriage",
        description: "신혼부부의 주거 안정을 위해 전세자금을 저금리로 대출해 드립니다.",
        details: {
            purpose: "목돈 마련이 어려운 신혼부부에게 저리의 전세자금 대출을 지원하여 주거 안정 도모",
            benefit: "수도권 최대 3억원, 지방 최대 2억원 (연 1.2% ~ 2.1% 금리)",
            target: "부부합산 연소득 6천만원 이하, 순자산가액 3.61억원 이하 무주택 세대주",
            documents: "주민등록등본, 소득확인서류, 임대차계약서, 확정일자부 등",
            process: "주택도시기금 수탁은행(우리, 국민, 기업, 농협, 신한) 방문 및 기금e든든 홈페이지 신청"
        },
        link: "https://nhuf.molit.go.kr/FP/FP005/FP0050201.jsp"
    },
    {
        id: 3,
        title: "노인 일자리 및 사회활동 지원",
        category: "elderly",
        description: "어르신들이 활기찬 노후생활을 보낼 수 있도록 다양한 일자리를 지원합니다.",
        details: {
            purpose: "어르신이 활기차고 건강한 노후생활을 영위할 수 있도록 다양한 사회활동 지원",
            benefit: "공익활동(월 27만원), 사회서비스형(월 71만원 내외) 등 활동비 지급",
            target: "만 65세 이상 기초연금수급자 (일부 사업은 만 60세 이상 가능)",
            documents: "참여신청서, 주민등록등본 등",
            process: "지자체별 노인복지관, 시니어클럽, 대한노인회 등 수행기관 방문 신청"
        },
        link: "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveWlfareInfoDetl.do?wlfareInfoId=WLF00000021"
    },
    {
        id: 4,
        title: "한부모가족 아동양육비 지원",
        category: "family",
        description: "저소득 한부모가족의 아동양육비를 지원하여 가정의 안정을 돕습니다.",
        details: {
            purpose: "저소득 한부모가족의 양육 부담을 덜어주어 아동의 건강한 성장 환경 조성",
            benefit: "아동당 월 20만원 (만 18세 미만 자녀)",
            target: "기준 중위소득 60% 이하 한부모가족 (조손가족 포함)",
            documents: "사회보장급여 신청서, 소득·재산 신고서 등",
            process: "읍·면·동 행정복지센터 방문 또는 복지로 온라인 신청"
        },
        link: "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveWlfareInfoDetl.do?wlfareInfoId=WLF00000101"
    }
];

// ==========================================================================
// Application Logic
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const policyGrid = document.getElementById('policyGrid');
    const resultCount = document.getElementById('resultCount');
    const noResults = document.getElementById('noResults');
    const filterChips = document.querySelectorAll('.filter-chip');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    // Modal Elements
    const policyModal = document.getElementById('policyModal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.getElementById('closeModal');

    // 1. Theme Toggle
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    themeToggleBtn.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.body.removeAttribute('data-theme');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });

    // 2. Render Policies
    function renderPolicies(policies) {
        policyGrid.innerHTML = '';
        resultCount.textContent = policies.length;

        if (policies.length === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
            policies.forEach(policy => {
                const card = document.createElement('policy-card');
                card.setAttribute('title', policy.title);
                card.setAttribute('category', policy.category);
                card.setAttribute('description', policy.description);
                
                // Click Event to open Modal
                card.addEventListener('click', () => openPolicyModal(policy));
                
                policyGrid.appendChild(card);
            });
        }
    }

    // 3. Modal Logic
    function openPolicyModal(policy) {
        const categoryLabels = {
            'youth': '청년', 'marriage': '신혼부부', 'family': '가족/여성', 
            'elderly': '노인', 'housing': '주거자금', 'medical': '의료/건강', 'job': '일자리/창업'
        };

        modalBody.innerHTML = `
            <span class="modal-badge" style="background-color: var(--${policy.category}-color)">
                ${categoryLabels[policy.category] || '전체'}
            </span>
            <h2 class="modal-title">${policy.title}</h2>
            <div class="modal-desc-box">
                ${policy.details.purpose}
            </div>
            <div class="modal-details-grid">
                <div class="detail-item">
                    <h4><i class="fas fa-check-circle"></i> 지원 내용</h4>
                    <p>${policy.details.benefit}</p>
                </div>
                <div class="detail-item">
                    <h4><i class="fas fa-user-friends"></i> 지원 대상</h4>
                    <p>${policy.details.target}</p>
                </div>
                <div class="detail-item">
                    <h4><i class="fas fa-file-alt"></i> 구비 서류</h4>
                    <p>${policy.details.documents}</p>
                </div>
                <div class="detail-item">
                    <h4><i class="fas fa-info-circle"></i> 신청 방법</h4>
                    <p>${policy.details.process}</p>
                </div>
            </div>
            <a href="${policy.link}" class="modal-action-btn" target="_blank" rel="noopener noreferrer">
                공식 사이트에서 바로 신청하기 <i class="fas fa-external-link-alt"></i>
            </a>
        `;
        policyModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scroll
    }

    closeModal.addEventListener('click', () => {
        policyModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === policyModal) {
            policyModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });

    // 4. Filter & Search
    let currentCategory = 'all';
    let currentSearchTerm = '';

    function applyFilters() {
        const filtered = mockPolicies.filter(p => {
            const matchesCategory = currentCategory === 'all' || p.category === currentCategory;
            const matchesSearch = p.title.includes(currentSearchTerm) || p.description.includes(currentSearchTerm);
            return matchesCategory && matchesSearch;
        });
        renderPolicies(filtered);
    }

    filterChips.forEach(chip => {
        chip.addEventListener('click', (e) => {
            filterChips.forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.getAttribute('data-category');
            applyFilters();
        });
    });

    searchBtn.addEventListener('click', () => {
        currentSearchTerm = searchInput.value.trim();
        applyFilters();
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            currentSearchTerm = searchInput.value.trim();
            applyFilters();
        }
    });

    // Initial Load
    renderPolicies(mockPolicies);
});
