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
            'emergency': '긴급/생활지원', 'youth': '청년/취업지원', 'family': '가족/육아지원',
            'disability': '장애인복지', 'elderly': '노후/연금지원', 'housing': '주거/주택지원',
            'medical': '의료/건강지원', 'all': '공통복지'
        };

        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; height: 100%; }
                .card {
                    background: var(--surface-color, #fff);
                    border: 1px solid var(--border-color, #eee);
                    border-radius: 12px;
                    padding: 2rem;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                    box-shadow: var(--shadow-sm);
                }
                .card:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-lg);
                    border-color: var(--accent-color);
                }
                .badge {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--accent-color);
                    margin-bottom: 1rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .title {
                    font-size: 1.25rem;
                    font-weight: 800;
                    margin-bottom: 1rem;
                    line-height: 1.4;
                    color: var(--text-main);
                }
                .desc {
                    font-size: 0.95rem;
                    color: var(--text-muted);
                    line-height: 1.6;
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
                    gap: 0.5rem;
                    font-weight: 700;
                    font-size: 0.85rem;
                    color: var(--accent-color);
                }
            </style>
            <div class="card">
                <span class="badge">${categoryLabels[category]}</span>
                <h3 class="title">${title}</h3>
                <p class="desc">${description}</p>
                <div class="footer">자세히 읽어보기 <i class="fas fa-arrow-right"></i></div>
            </div>
        `;
    }
}
customElements.define('policy-card', PolicyCard);

// ==========================================================================
// Rich Mock Data (AdSense Optimization: Long Text Content)
// ==========================================================================
const mockPolicies = [
    {
        id: 1,
        title: "긴급복지 생계지원금 상세 가이드",
        category: "emergency",
        description: "갑작스러운 위기 상황(실직, 휴폐업, 질병 등)으로 인해 생계 유지가 어려운 가구에게 국가가 신속하게 현금을 지원하여 안정적인 생활을 돕는 제도입니다.",
        details: {
            purpose: "긴급복지지원제도는 주소득자의 사망, 가출, 행방불명, 구금시설 수용 등으로 소득을 상실하거나 중한 질병 또는 부상을 당한 경우, 가구 구성원으로부터 방임·유기되거나 학대 등을 당한 경우 등 갑작스러운 위기 상황에 처하여 도움이 필요한 사람에게 생계·의료·주거 등 필요한 지원을 신속하게 제공하여 위기상황에서 벗어나게 함을 목적으로 합니다. 이는 국가가 국민의 최소한의 인간다운 생활을 보장하기 위한 가장 최전선의 사회적 안전망입니다.",
            benefit: "지원 금액은 가구 구성원 수에 따라 매년 보건복지부 고시에 의해 결정됩니다. 2026년 기준 1인 가구는 약 713,100원, 4인 가구는 약 1,833,500원을 매월 현금으로 지원받습니다. 지원 기간은 기본 1개월이며, 위기 상황이 지속된다고 판단될 경우 시·군·구청장의 결정에 따라 최대 6개월까지 연장이 가능합니다. 또한 동절기(10월~3월)에는 연료비(난방비)가 가구당 추가로 지원되어 추운 겨울을 안전하게 날 수 있도록 돕습니다.",
            target: "소득 기준은 기준 중위소득 75% 이하(1인 가구 약 167만원, 4인 가구 약 429만원 이하)를 충족해야 합니다. 재산 기준은 대도시 2억 4,100만원, 중소도시 1억 5,200만원, 농어촌 1억 3,000만원 이하이며, 금융 재산은 가구원수별로 차등 적용되나 기본적으로 600만원 이하(주거지원을 받는 경우 별도 기준 적용)여야 합니다. 단, 자살 고위험군이나 지자체장이 긴급하다고 인정하는 경우에는 심의를 통해 지원 가능성이 열려 있습니다.",
            process: "도움이 필요한 본인 또는 주변 이웃이 보건복지상담센터(국번 없이 129)로 전화하여 24시간 언제든 상담을 받을 수 있습니다. 또한 주소지 관할 읍·면·동 행정복지센터나 시·군·구청을 방문하여 신청할 수 있습니다. 긴급 지원은 '선지원 후조사' 원칙에 따라 신청 후 현장 확인을 거쳐 신속하게 지원이 결정되며, 사후에 소득 및 재산을 정밀 조사하여 적정성을 확인하게 됩니다.",
            documents: "신청 시 신분증과 통장 사본이 기본적으로 필요합니다. 위기 상황을 증명할 수 있는 서류(사망진단서, 해고통지서, 폐업신고서, 진단서, 소득감소 확인서 등)가 있다면 지참하는 것이 좋으나, 서류가 즉시 준비되지 않더라도 현장 확인 공무원의 판단에 따라 우선 지원이 가능하므로 걱정하지 말고 상담부터 진행하시기 바랍니다."
        },
        link: "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00003180"
    },
    {
        id: 2,
        title: "2026년 장애인연금 및 수당 가이드",
        category: "disability",
        description: "중증장애인의 생활 안정을 돕고 장애로 인한 추가 비용을 보전하기 위해 매월 일정 금액을 연금 형식으로 지급하는 사회보장 제도입니다.",
        details: {
            purpose: "장애인연금은 장애로 인하여 생활이 어려운 중증장애인에게 매월 일정 금액을 연금으로 지급하여 생활 안정을 돕고 복지를 증진하는 데 목적이 있습니다. 특히 근로 능력이 상실되거나 현저하게 감소하여 줄어든 소득을 보전해주는 기초급여와 장애로 인한 추가 비용을 보전해주는 부가급여로 구성됩니다.",
            benefit: "기초급여는 월 최대 334,810원이며, 부가급여는 소득 수준에 따라 최대 9만원까지 추가 지급됩니다. 따라서 매월 최대 약 42만원 수준의 연금을 수령하실 수 있습니다. 이 금액은 매년 물가 상승률을 반영하여 인상되므로 실질적인 구매력을 보장받을 수 있습니다.",
            target: "18세 이상의 등록 중증장애인(기존 1급, 2급 및 3급 중복 장애) 중 본인과 배우자의 소득인정액이 선정기준액 이하인 분들이 대상입니다. 2026년 선정기준액은 단독가구 기준 월 130만원 이하입니다.",
            process: "본인 또는 대리인이 거주지 읍·면·동 행정복지센터에 방문하여 신청하거나, 거동이 불편한 경우 '복지로' 홈페이지를 통해 온라인으로도 신청할 수 있습니다. 신청 후에는 국민연금공단에서 장애 정도를 심사하게 됩니다.",
            documents: "장애인연금 신청서, 금융정보 제공동의서, 소득·재산 신고서, 본인 명의의 통장 사본이 필요합니다. 기존에 장애 등록이 되어 있더라도 연금 신청 시 추가적인 심사가 진행될 수 있음을 유의해야 합니다."
        },
        link: "https://www.bokjiro.go.kr/ssis-tbu/index.do"
    },
    {
        id: 3,
        title: "기초연금 신청 자격 및 혜택 정리",
        category: "elderly",
        description: "만 65세 이상 어르신 중 소득 인정액이 하위 70% 이하인 분들에게 매월 연금을 지급하여 노후 소득을 보장하는 핵심 복지 정책입니다.",
        details: {
            purpose: "평생 대한민국을 위해 헌신하신 어르신들의 노후 소득을 보장하고 생활의 안정을 돕기 위해 마련된 제도입니다. 현재 우리나라의 노인 빈곤 문제를 해결하고 후세대의 부담을 줄이는 사회적 안전망 역할을 수행하고 있습니다.",
            benefit: "2026년 기준으로 단독가구는 월 최대 약 33만원, 부부가구는 합산하여 월 최대 약 53만원을 지급받습니다. 국민연금 수령액이 일정 수준 이상인 경우 금액이 일부 감액될 수 있으나, 대부분의 어르신들이 혜택을 받고 계십니다.",
            target: "만 65세 이상 대한민국 국적을 소유하고 국내에 거주하시는 어르신 중 가구의 소득인정액이 선정기준액 이하인 분들이 대상입니다. 단독가구 기준 소득인정액이 213만원 이하, 부부가구 기준 340.8만원 이하면 신청이 가능합니다.",
            process: "주소지 관할 읍·면·동 행정복지센터나 전국 국민연금공단 지사를 방문하여 신청하시면 됩니다. 또한 복지로(www.bokjiro.go.kr)를 통한 온라인 신청도 가능합니다. 만 65세 생일이 속하는 달의 1개월 전부터 미리 신청할 수 있습니다.",
            documents: "신분증, 통장 사본, 배우자의 정보 제공 동의서, 전·월세 계약서 등이 필요합니다. 본인이 직접 신청하기 어려운 경우 자녀가 대리 신청할 수도 있으며, 상담원 방문 서비스를 요청할 수도 있습니다."
        },
        link: "https://www.bokjiro.go.kr/ssis-tbu/index.do"
    },
    {
        id: 4,
        title: "청년내일저축계좌 - 3배로 불리는 자산",
        category: "youth",
        description: "일하는 저소득 청년이 매월 10만원을 저축하면 정부가 최소 10만원에서 최대 30만원을 매칭 지원하여 3년 뒤 목돈을 만들어주는 효자 상품입니다.",
        details: {
            purpose: "경제적으로 어려운 환경에 있는 청년들이 사회에 첫발을 내디딜 때 필요한 자산을 형성할 수 있도록 돕는 것이 목적입니다. 단순한 현금 지원이 아니라 근로 의욕을 고취하고 자립 역량을 키울 수 있도록 설계된 '자산 형성 지원 사업'입니다.",
            benefit: "본인이 매월 10만원을 저축하면 국가가 월 10만원(중위 50~100%) 또는 월 30만원(중위 50% 이하)을 적립해 줍니다. 3년 만기 시 본인 저축액 360만원을 포함하여 최소 720만원에서 최대 1,440만원에 이자까지 더해진 큰 금액을 수령하게 됩니다.",
            target: "만 15세 이상 34세 이하의 청년 중 현재 근로 중이며 가구 소득이 기준 중위소득 100% 이하인 가구가 대상입니다. 기초생활수급자나 차상위 계층의 경우 연령 기준이 만 39세까지 확대 적용됩니다.",
            process: "연 1회 특정 기간에 집중적으로 모집하므로 모집 시기를 놓치지 않는 것이 중요합니다. 주로 상반기(5월경)에 신청을 받으며, 주소지 읍·면·동 행정복지센터를 방문하거나 복지로 홈페이지를 통해 신청서를 제출합니다.",
            documents: "재직증명서 또는 근로 확인 서류, 소득 증빙 서류, 가구원 정보 제공 동의서 등이 필요합니다. 특히 저축 기간 중 꾸준히 근로 활동을 유지해야 하고, 정부에서 제공하는 자립 역량 교육을 이수해야 만기 시 지원금을 전액 받을 수 있습니다."
        },
        link: "https://hope.welfareinfo.or.kr/ntcn/prmtDetail.do"
    }
];

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
    
    // Modals
    const policyModal = document.getElementById('policyModal');
    const modalBody = document.getElementById('modalBody');
    const privacyModal = document.getElementById('privacyModal');
    
    // Privacy Logic
    document.getElementById('privacyLink').addEventListener('click', (e) => {
        e.preventDefault();
        privacyModal.classList.remove('hidden');
    });
    document.getElementById('privacyBtnFooter').addEventListener('click', (e) => {
        e.preventDefault();
        privacyModal.classList.remove('hidden');
    });
    document.getElementById('closePrivacy').addEventListener('click', () => privacyModal.classList.add('hidden'));

    // Theme Toggle
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
        themeToggle.querySelector('i').className = isDark ? 'fas fa-moon' : 'fas fa-sun';
    });

    // Render Function
    function render(policies) {
        policyGrid.innerHTML = '';
        resultCount.textContent = `${policies.length}건`;
        if (policies.length === 0) noResults.classList.remove('hidden');
        else {
            noResults.classList.add('hidden');
            policies.forEach(p => {
                const card = document.createElement('policy-card');
                card.setAttribute('title', p.title);
                card.setAttribute('category', p.category);
                card.setAttribute('description', p.description);
                card.addEventListener('click', () => showPolicyDetail(p));
                policyGrid.appendChild(card);
            });
        }
    }

    // Detail Modal Function (AdSense Content Powerhouse)
    function showPolicyDetail(p) {
        modalBody.innerHTML = `
            <h2 style="font-size: 2.2rem; font-weight: 900; margin-bottom: 1.5rem; color: var(--primary-color); line-height: 1.2;">${p.title}</h2>
            
            <div style="background: var(--bg-color); padding: 2rem; border-radius: 12px; margin-bottom: 2.5rem; border-left: 5px solid var(--accent-color);">
                <h4 style="margin-bottom: 0.5rem; font-weight: 800;"><i class="fas fa-info-circle"></i> 정책 요약</h4>
                <p style="font-size: 1.1rem; line-height: 1.8;">${p.details.purpose}</p>
            </div>

            <div class="detail-content-grid" style="display: grid; gap: 2rem;">
                <section>
                    <h4 style="font-weight: 800; color: var(--accent-color); margin-bottom: 0.5rem;"><i class="fas fa-gift"></i> 어떤 혜택을 받나요?</h4>
                    <p style="color: var(--text-main); font-size: 1.05rem;">${p.details.benefit}</p>
                </section>
                <section>
                    <h4 style="font-weight: 800; color: var(--accent-color); margin-bottom: 0.5rem;"><i class="fas fa-user-check"></i> 누가 신청할 수 있나요?</h4>
                    <p style="color: var(--text-main); font-size: 1.05rem;">${p.details.target}</p>
                </section>
                <section>
                    <h4 style="font-weight: 800; color: var(--accent-color); margin-bottom: 0.5rem;"><i class="fas fa-edit"></i> 어떻게 신청하나요?</h4>
                    <p style="color: var(--text-main); font-size: 1.05rem;">${p.details.process}</p>
                </section>
                <section>
                    <h4 style="font-weight: 800; color: var(--accent-color); margin-bottom: 0.5rem;"><i class="fas fa-file-alt"></i> 필요한 서류는 무엇인가요?</h4>
                    <p style="color: var(--text-main); font-size: 1.05rem;">${p.details.documents}</p>
                </section>
            </div>

            <div style="margin-top: 4rem; text-align: center;">
                <a href="${p.link}" target="_blank" style="background: var(--accent-color); color: white; text-decoration: none; padding: 1.25rem 3rem; border-radius: 50px; font-weight: 800; font-size: 1.1rem; display: inline-block; box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2); transition: transform 0.2s;">
                    공식 사이트에서 신청하기 <i class="fas fa-external-link-alt"></i>
                </a>
                <p style="margin-top: 1rem; font-size: 0.85rem; color: var(--text-muted);">* 위 주소를 클릭하면 공식 복지 포털로 연결됩니다.</p>
            </div>
        `;
        policyModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    document.getElementById('closeModal').addEventListener('click', () => {
        policyModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    // Filter & Search Logic
    let currentCat = 'all';
    let searchTerm = '';

    function filterAndRender() {
        const filtered = mockPolicies.filter(p => {
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

    // Initial Load
    render(mockPolicies);
});
