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
            'emergency': '긴급지원', 'youth': '청년/취업', 'family': '임신/출산/육아',
            'disability': '장애인', 'elderly': '어르신', 'housing': '주거/생활',
            'medical': '의료/건강', 'all': '전체'
        };

        const accentColor = `var(--${category}-color, var(--primary-color))`;

        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; height: 100%; }
                .card {
                    background: var(--surface-color, #fff);
                    border: 1px solid var(--border-color, #eee);
                    border-radius: 16px;
                    padding: 2rem;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.03);
                    border-top: 5px solid ${accentColor};
                }
                .card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 12px 30px rgba(0,0,0,0.1);
                }
                .badge {
                    display: inline-block;
                    padding: 0.3rem 0.8rem;
                    background: ${accentColor}15;
                    color: ${accentColor};
                    border-radius: 50px;
                    font-size: 0.75rem;
                    font-weight: 800;
                    margin-bottom: 1rem;
                }
                .title {
                    font-size: 1.25rem;
                    font-weight: 800;
                    margin-bottom: 1rem;
                    line-height: 1.4;
                    color: var(--text-main, #333);
                }
                .desc {
                    font-size: 0.95rem;
                    color: var(--text-muted, #666);
                    line-height: 1.6;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    margin-bottom: 1.5rem;
                    flex-grow: 1;
                }
                .more {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 700;
                    font-size: 0.85rem;
                    color: ${accentColor};
                }
            </style>
            <div class="card">
                <span class="badge">${categoryLabels[category]}</span>
                <h3 class="title">${title}</h3>
                <p class="desc">${description}</p>
                <div class="more">상세보기 <i class="fas fa-arrow-right"></i></div>
            </div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        `;
    }
}
customElements.define('policy-card', PolicyCard);

// ==========================================================================
// Comprehensive Policy Data (15+ Items)
// ==========================================================================
const mockPolicies = [
    {
        id: 1,
        title: "긴급복지 생계지원",
        category: "emergency",
        description: "갑작스러운 위기 사유 발생으로 생계유지가 곤란한 저소득층에게 생계비를 신속하게 지원합니다.",
        details: {
            purpose: "주소득자의 사망, 가출, 행방불명 등으로 인한 위기 상황 해소",
            benefit: "가구원 수별 차등 지급 (1인 기준 약 71만원)",
            target: "기준중위소득 75% 이하, 재산 및 금융재산 기준 충족 가구",
            process: "관할 시·군·구청 또는 읍·면·동 행정복지센터 방문 신청 (상담 129)"
        },
        link: "https://www.bokjiro.go.kr/ssis-tbu/index.do"
    },
    {
        id: 2,
        title: "장애인연금 지원",
        category: "disability",
        description: "장애로 인하여 생활이 어려운 중증장애인에게 연금을 지급하여 생활 안정을 돕습니다.",
        details: {
            purpose: "근로능력 상실 또는 감소에 따른 비용 보전",
            benefit: "기초급여 및 부가급여 합산 지급 (월 최대 약 40만원)",
            target: "18세 이상의 등록 중증장애인 중 소득인정액이 선정기준액 이하인 자",
            process: "전국 읍·면·동 행정복지센터 방문 또는 복지로 온라인 신청"
        },
        link: "https://www.bokjiro.go.kr/ssis-tbu/index.do"
    },
    {
        id: 3,
        title: "첫만남이용권 (바우처)",
        category: "family",
        description: "출산 시 아동 양육에 따른 경제적 부담을 경감하기 위해 국민행복카드 바우처를 지급합니다.",
        details: {
            purpose: "출생 아동을 위한 초기 육아 비용 지원",
            benefit: "첫째아 200만원, 둘째아 이상 300만원 (일시금 바우처)",
            target: "출생아로서 출생 신고되어 주민등록번호를 부여받은 아동",
            process: "복지로 또는 정부24 온라인 신청, 행정복지센터 방문"
        },
        link: "https://www.bokjiro.go.kr/ssis-tbu/index.do"
    },
    {
        id: 4,
        title: "기초연금 지원",
        category: "elderly",
        description: "어르신들의 편안한 노후생활을 위해 매월 일정액의 연금을 지원합니다.",
        details: {
            purpose: "노후 소득 보장 및 복지 증진",
            benefit: "월 최대 약 33만원 지급 (단독가구 기준)",
            target: "만 65세 이상 대한민국 국적 소유자 중 소득인정액 기준 충족자",
            process: "주소지 관할 읍·면·동 행정복지센터 또는 국민연금공단 지사 방문"
        },
        link: "https://www.bokjiro.go.kr/ssis-tbu/index.do"
    },
    {
        id: 5,
        title: "청년내일저축계좌",
        category: "youth",
        description: "일하는 저소득 청년이 사회에 안착할 수 있도록 자산 형성을 지원합니다.",
        details: {
            purpose: "청년의 근로 유인 및 자립 기반 마련",
            benefit: "매월 10만원 저축 시 정부 지원금 월 10~30만원 매칭 지원",
            target: "만 15세~34세 중위소득 100% 이하 일하는 청년 (기초·차상위는 만 39세까지)",
            process: "복지로 홈페이지 또는 행정복지센터 방문 신청"
        },
        link: "https://www.bokjiro.go.kr/ssis-tbu/index.do"
    },
    {
        id: 6,
        title: "버팀목 전세자금 대출",
        category: "housing",
        description: "서민의 주거 안정을 위하여 저금리로 전세 자금을 대출해 드립니다.",
        details: {
            purpose: "전세 자금이 부족한 서민들의 이자 부담 완화",
            benefit: "연 2.1% ~ 2.9% 금리로 최대 1.2억원 ~ 2억원 대출",
            target: "부부합산 연소득 5천만원 이하, 순자산가액 3.45억원 이하 무주택 세대주",
            process: "기금e든든 홈페이지 또는 수탁은행(우리, 국민, 기업, 농협, 신한) 방문"
        },
        link: "https://nhuf.molit.go.kr/FP/FP005/FP0050201.jsp"
    },
    {
        id: 7,
        title: "에너지바우처 지원",
        category: "medical",
        description: "에너지 취약계층에게 전기, 도시가스, 등유 등을 구입할 수 있는 이용권을 지원합니다.",
        details: {
            purpose: "겨울철 난방 및 여름철 냉방 비용 부담 경감",
            benefit: "가구원 수별 차등 지급 (하절기/동절기 통합 바우처)",
            target: "생계·의료·주거·교육급여 수급자 중 노인, 장애인, 영유아, 임산부 등 포함 가구",
            process: "읍·면·동 행정복지센터 방문 또는 복지로 온라인 신청"
        },
        link: "https://www.energyv.or.kr"
    },
    {
        id: 8,
        title: "국민취업지원제도 (1, 2유형)",
        category: "job",
        description: "취업을 원하는 분들에게 취업지원서비스를 제공하고 저소득 구직자에게는 생계비를 지원합니다.",
        details: {
            purpose: "한국형 실업부조로서 구직자의 생계 안정과 취업 촉진",
            benefit: "구직촉진수당(월 50만원x6개월) + 취업활동비용 등",
            target: "15세~69세 구직자 중 가구 소득 요건 충족자",
            process: "국민취업지원제도 홈페이지 또는 고용센터 방문 신청"
        },
        link: "https://www.kua.go.kr"
    },
    {
        id: 9,
        title: "희귀질환자 의료비 지원",
        category: "medical",
        description: "희귀질환으로 인한 의료비 부담을 줄여드리기 위해 요양급여 본인부담금을 지원합니다.",
        details: {
            purpose: "과도한 의료비로 인한 가계의 경제적 파탄 방지",
            benefit: "본인부담금 전액 또는 일부 지원 (질환별 상이)",
            target: "등록 희귀질환자 중 환자가구 및 부양의무자가구 소득·재산 기준 충족자",
            process: "주소지 관할 보건소 방문 신청"
        },
        link: "https://helpline.kdca.go.kr"
    },
    {
        id: 10,
        title: "아이돌봄 서비스",
        category: "family",
        description: "맞벌이 등으로 양육 공백이 발생한 가정에 아이돌보미가 찾아가 돌봄 서비스를 제공합니다.",
        details: {
            purpose: "시설 보육의 사각지대 해소 및 양육 부담 경감",
            benefit: "시간제 또는 영아종합돌봄 서비스 이용료 일부 지원",
            target: "만 12세 이하 아동이 있는 양육 공백 발생 가정",
            process: "아이돌봄 홈페이지 또는 행정복지센터 방문 신청"
        },
        link: "https://www.idolbom.go.kr"
    },
    {
        id: 11,
        title: "혜택알리미 (정부24)",
        category: "youth",
        description: "연령, 가구 구성, 소득 데이터를 분석해 3,600개 이상의 맞춤형 복지 서비스를 안내합니다.",
        details: {
            purpose: "정보 부족으로 놓치는 국가 혜택을 방지하고 상황 변화 시 능동적 알림 제공",
            benefit: "개인별 맞춤형 혜택 정보 실시간 알림 및 안내",
            target: "대한민국 국민 누구나 (가족 구성원 혜택 동시 확인 가능)",
            process: "정부24 홈페이지 또는 앱에서 '혜택알리미' 신청"
        },
        link: "https://www.gov.kr/portal/rcvfvrSvc/main"
    },
    {
        id: 12,
        title: "복지멤버십 (맞춤형 급여 안내)",
        category: "emergency",
        description: "복지로에 가입 시 127종 이상의 복지 서비스를 선제적으로 안내받을 수 있는 능동적 복지 서비스입니다.",
        details: {
            purpose: "신청주의 제도 하에서 혜택을 몰라 못 받는 일이 없도록 선제적 발굴 및 안내",
            benefit: "출산, 실직 등 상황 변화 시 받을 수 있는 급여를 시스템이 알아서 추천",
            target: "복지 수급 희망자 및 대한민국 국민 누구나",
            process: "복지로 홈페이지/앱 '복지멤버십' 가입 또는 행정복지센터 방문"
        },
        link: "https://www.bokjiro.go.kr/ssis-tbu/index.do"
    }
];

// ==========================================================================
// App Implementation
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const policyGrid = document.getElementById('policyGrid');
    const resultCount = document.getElementById('resultCount');
    const noResults = document.getElementById('noResults');
    const filterChips = document.querySelectorAll('.filter-chip');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const themeToggle = document.getElementById('themeToggle');
    const policyModal = document.getElementById('policyModal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.getElementById('closeModal');

    // 1. Theme Toggle
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
        themeToggle.querySelector('i').className = isDark ? 'fas fa-moon' : 'fas fa-sun';
    });

    // 2. Render Policies
    function render(policies) {
        policyGrid.innerHTML = '';
        resultCount.textContent = `${policies.length}건`;
        
        if (policies.length === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
            policies.forEach(p => {
                const card = document.createElement('policy-card');
                card.setAttribute('title', p.title);
                card.setAttribute('category', p.category);
                card.setAttribute('description', p.description);
                card.addEventListener('click', () => showModal(p));
                policyGrid.appendChild(card);
            });
        }
    }

    // 3. Modal Logic
    function showModal(p) {
        modalBody.innerHTML = `
            <div class="modal-header">
                <span class="modal-badge badge-${p.category}">${p.category}</span>
                <h2 class="modal-title">${p.title}</h2>
            </div>
            <div class="modal-section">
                <h3><i class="fas fa-bullseye"></i> 지원 목적</h3>
                <p>${p.details.purpose}</p>
            </div>
            <div class="modal-section">
                <h3><i class="fas fa-gift"></i> 지원 내용</h3>
                <p>${p.details.benefit}</p>
            </div>
            <div class="modal-section">
                <h3><i class="fas fa-user-check"></i> 지원 대상</h3>
                <p>${p.details.target}</p>
            </div>
            <div class="modal-section">
                <h3><i class="fas fa-clipboard-list"></i> 신청 방법</h3>
                <p>${p.details.process}</p>
            </div>
            <div class="modal-footer">
                <a href="${p.link}" target="_blank" class="modal-link-btn">
                    상세 내용 확인 및 신청하러 가기 <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
            <style>
                .modal-header { margin-bottom: 2rem; border-bottom: 1px solid #eee; padding-bottom: 1rem; }
                .modal-badge { display: inline-block; padding: 0.3rem 1rem; border-radius: 50px; color: white; font-weight: 800; font-size: 0.8rem; margin-bottom: 1rem; }
                .badge-emergency { background: #e53935; } .badge-youth { background: #1e88e5; }
                .badge-family { background: #d81b60; } .badge-disability { background: #7b1fa2; }
                .badge-elderly { background: #5d4037; } .badge-housing { background: #00897b; }
                .badge-medical { background: #43a047; } .badge-job { background: #fb8c00; }
                .modal-title { font-size: 2rem; font-weight: 900; color: var(--primary-color); }
                .modal-section { margin-bottom: 1.5rem; }
                .modal-section h3 { font-size: 1.1rem; font-weight: 800; margin-bottom: 0.5rem; color: #333; }
                .modal-section p { color: #555; line-height: 1.7; font-size: 1.05rem; }
                .modal-footer { margin-top: 3rem; text-align: center; }
                .modal-link-btn { background: var(--primary-color); color: white; text-decoration: none; padding: 1.2rem 2rem; border-radius: 12px; font-weight: 800; display: inline-block; transition: all 0.3s; }
                .modal-link-btn:hover { background: #000; transform: translateY(-3px); }
            </style>
        `;
        policyModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    closeModal.addEventListener('click', () => {
        policyModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    // 4. Filter/Search
    let cat = 'all';
    let term = '';

    function update() {
        const f = mockPolicies.filter(p => {
            const mCat = cat === 'all' || p.category === cat;
            const mTerm = p.title.includes(term) || p.description.includes(term);
            return mCat && mTerm;
        });
        render(f);
    }

    filterChips.forEach(c => {
        c.addEventListener('click', () => {
            filterChips.forEach(x => x.classList.remove('active'));
            c.classList.add('active');
            cat = c.dataset.category;
            update();
        });
    });

    searchBtn.addEventListener('click', () => {
        term = searchInput.value.trim();
        update();
    });

    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            term = searchInput.value.trim();
            update();
        }
    });

    render(mockPolicies);
});
