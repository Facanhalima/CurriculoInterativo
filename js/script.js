// --- DATA ---
const timelineData = [
    {
        date: 'Fev/2023 - Atualmente',
        title: 'Bolsista de Iniciação Científica',
        institution: 'LNCC/MCTI – Petrópolis/RJ',
        description: 'Atuação no projeto INVMULTIFIS, aplicando conceitos de computação científica e análise de dados em problemas complexos.',
        type: 'work'
    },
    {
        date: '2021 - Atualmente',
        title: 'Bacharelado em Sistemas de Informação',
        institution: 'CEFET/RJ',
        description: 'Cursando o 8º período, com foco em disciplinas de desenvolvimento de software, banco de dados e inteligência artificial.',
        type: 'education'
    },
    {
        date: '2017 - 2019',
        title: 'Desenvolvedor de Aplicativos (Projeto Escolar)',
        institution: 'Projeto Educacional do SENAI – Rio de Janeiro/RJ',
        description: 'Experiência prática no ciclo de vida de desenvolvimento de aplicativos comerciais para dispositivos móveis.',
        type: 'work'
    },
    {
        date: '2017 - 2019',
        title: 'Ensino Médio Técnico em TI',
        institution: 'SENAI',
        description: 'Formação técnica integrada com ênfase em Tecnologias para Indústria Criativa, cobrindo programação, redes e infraestrutura.',
        type: 'education'
    },
];

const skillsData = {
    'Linguagens': [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'C/C++', level: 75 },
        { name: 'CUDA', level: 70 },
        { name: 'MPI', level: 70 },
        { name: 'OpenMP', level: 65 },
        { name: 'Swift', level: 60 },
        { name: 'PHP', level: 60 },
    ],
    'Ferramentas': [
        { name: 'Git', level: 85 },
        { name: 'SDUMONT / SLURM', level: 80 },
        { name: 'Docker', level: 70 },
        { name: 'FPGA (Conceitos)', level: 50 },
    ],
    'Bases de Dados': [
        { name: 'SQL (Conceitos)', level: 70 },
        { name: 'Bancos NoSQL (Conceitos)', level: 60 },
    ],
    'Metodologias': [
        { name: 'Paralelismo', level: 85 },
        { name: 'Workflows Científicos', level: 80 },
        { name: 'POO', level: 75 },
        { name: 'MPI-IO', level: 70 },
    ],
    'Outras': [
        { name: 'Análise de Dados', level: 80 },
        { name: 'Deep Learning', level: 75 },
        { name: 'Computação Quântica', level: 65 },
        { name: 'Big Data', level: 60 },
    ]
};

const certificationsData = [
    { year: 2024, title: 'Apresentação de Artigo: Adaptação de código CSEM 3D...', institution: 'ERAD-RJ 2024', duration: 'Novembro' },
    { year: 2024, title: 'XVI Escola Supercomputador Santos Dumont', institution: 'LNCC/MCTI', duration: 'Intensivo' },
    { year: 2024, title: 'Workflows Científicos em Python/Parsl', institution: 'LNCC/MCTI', duration: '4h' },
    { year: 2024, title: 'Programação com MPI', institution: 'LNCC/MCTI', duration: '4h' },
    { year: 2024, title: 'AMPI Adaptive MPI', institution: 'LNCC/MCTI', duration: '4h' },
    { year: 2024, title: 'Profiling e Otimização em C/C++', institution: 'LNCC/MCTI', duration: '4h' },
    { year: 2024, title: 'Programação Paralela e Vetorial', institution: 'LNCC/MCTI', duration: '4h' },
    { year: 2024, title: 'Introdução ao OpenMP', institution: 'LNCC/MCTI', duration: '4h' },
    { year: 2024, title: 'Programação em GPU com OpenACC', institution: 'LNCC/MCTI', duration: '4h' },
    { year: 2024, title: 'Introdução ao Ambiente SDUMONT', institution: 'LNCC/MCTI', duration: '4h' },
    { year: 2024, title: 'E/S Paralela no SDUMONT', institution: 'LNCC/MCTI', duration: '4h' },
    { year: 2024, title: 'Computação Quântica Avançada', institution: 'LNCC/MCTI', duration: '8h' },
    { year: 2024, title: 'OpenMP Cluster Programming Model', institution: 'LNCC/MCTI', duration: '4h' },
    { year: 2024, title: 'Programação com FPGA', institution: 'LNCC/MCTI', duration: '4h' },
    { year: 2024, title: 'Introdução a CUDA AWARE', institution: 'LNCC/MCTI', duration: '4h' },
    { year: 2024, title: 'Introdução à Programação CUDA', institution: 'LNCC/MCTI', duration: '4h' },
    { year: 2024, title: 'Programação MPI com Extensões para E/S', institution: 'LNCC/MCTI', duration: '4h' },
    { year: 2023, title: 'Physics-Informed Machine Learning', institution: 'SBGf', duration: '8h' },
    { year: 2023, title: 'Direct and Inverse Problems in Geophysics', institution: 'SBGf', duration: '8h' },
    { year: 2023, title: 'Jornada em Ciência de Dados', institution: 'LNCC/MCTI', duration: 'Intensivo' },
    { year: 2023, title: 'Escola Supercomputador Santos Dumont', institution: 'LNCC/MCTI', duration: 'Intensivo' },
    { year: 2023, title: 'Algoritmos para Big Data', institution: 'LNCC/MCTI', duration: '6h' },
    { year: 2023, title: 'Análise de Dados', institution: 'LNCC/MCTI', duration: '6h' },
    { year: 2023, title: 'Análise de Redes Sociais', institution: 'LNCC/MCTI', duration: '6h' },
    { year: 2023, title: 'Deep Learning', institution: 'LNCC/MCTI', duration: '6h' },
    { year: 2023, title: 'Introdução ao SLURM', institution: 'LNCC/MCTI', duration: '4h' },
    { year: 2023, title: 'Configuração de Clusters', institution: 'LNCC/MCTI', duration: '8h' },
    { year: 2022, title: 'Hackatruck EAD e Presencial', institution: 'Hackatruck', duration: '' },
    { year: 2022, title: 'Algoritmos, Swift, JS, APIs', institution: 'Instituto Eldorado', duration: '' },
    { year: 2022, title: 'Gestão de Processos', institution: 'IETEC', duration: '' },
    { year: 2021, title: 'Análise de Negócios e Projetos', institution: 'IETEC', duration: '' },
    { year: 2019, title: 'Inglês Avançado', institution: 'Cultura Inglesa', duration: 'Conclusão' },
    { year: 2016, title: 'Certificação em Inglês', institution: 'Universidade de Cambridge', duration: '' }
];

document.addEventListener('DOMContentLoaded', function () {
    // --- MOBILE MENU ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuIconOpen.classList.toggle('hidden');
        menuIconClose.classList.toggle('hidden');
    });
    // Close mobile menu on link click
    mobileMenu.addEventListener('click', (e) => {
        if(e.target.tagName === 'A'){
            mobileMenu.classList.add('hidden');
            menuIconOpen.classList.remove('hidden');
            menuIconClose.classList.add('hidden');
        }
    });

    // --- ACTIVE NAV LINK SCROLL ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
    
    // --- TIMELINE RENDER ---
    const timelineContainer = document.getElementById('timeline-container');
    const workIcon = `<span class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white"><svg class="w-5 h-5 text-blue-800" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v1.5a2.5 2.5 0 015 0V4a2 2 0 00-2-2H6zM2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM4 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" clip-rule="evenodd"></path></svg></span>`;
    const eduIcon = `<span class="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -left-4 ring-8 ring-white"><svg class="w-5 h-5 text-green-800" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3.5a1 1 0 00.002 1.84L9 10.51l-4.002 2.001a1 1 0 00-.634 1.267 1 1 0 001.267.634l4-2a1 1 0 00.634 0l4 2a1 1 0 001.267-.634 1 1 0 00-.634-1.267L11 10.51l6.21-3.105a1 1 0 00.002-1.84l-7-3.5zM3.79 6.51L10 9.583l6.21-3.072L10 3.417 3.79 6.51zM10 16.683L6 14.683v-2.05l4 2 4-2v2.05L10 16.683z"></path></svg></span>`;

    timelineData.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'mb-10 ml-10';
        itemDiv.innerHTML = `
            ${item.type === 'work' ? workIcon : eduIcon}
            <h3 class="flex items-center mb-1 text-lg font-semibold text-slate-900">${item.title}</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-slate-500">${item.institution} &bull; ${item.date}</time>
            <p class="mb-4 text-base font-normal text-slate-600">${item.description}</p>
        `;
        timelineContainer.appendChild(itemDiv);
    });

    // --- SKILLS CHART ---
    const ctx = document.getElementById('skillsChart').getContext('2d');
    let skillsChart;

    function createOrUpdateChart(category) {
        const data = skillsData[category];
        const chartData = {
            labels: data.map(skill => skill.name),
            datasets: [{
                label: category,
                data: data.map(skill => skill.level),
                backgroundColor: 'rgba(59, 130, 246, 0.5)',
                borderColor: 'rgba(37, 99, 235, 1)',
                borderWidth: 1,
            }]
        };

        const chartOptions = {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%'
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.raw + '%';
                        }
                    }
                }
            }
        };
        
        if (skillsChart) {
            skillsChart.data = chartData;
            skillsChart.options.plugins.tooltip.callbacks.label = function(context) {
                return category + ': ' + context.raw + '%';
            };
            skillsChart.update();
        } else {
            skillsChart = new Chart(ctx, {
                type: 'bar',
                data: chartData,
                options: chartOptions,
            });
        }
    }
    
    // Render filter buttons
    const skillsFilterContainer = document.getElementById('skills-filter-buttons');
    Object.keys(skillsData).forEach((category, index) => {
        const button = document.createElement('button');
        button.textContent = category;
        button.className = `skill-filter-btn px-4 py-2 text-sm font-medium rounded-full transition-colors ${index === 0 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`;
        button.dataset.category = category;
        skillsFilterContainer.appendChild(button);
    });

    // Add event listeners to filter buttons
    skillsFilterContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('skill-filter-btn')) {
            const category = e.target.dataset.category;
            createOrUpdateChart(category);

            // Update button styles
            document.querySelectorAll('.skill-filter-btn').forEach(btn => {
                btn.classList.remove('bg-blue-600', 'text-white');
                btn.classList.add('bg-slate-200', 'text-slate-700', 'hover:bg-slate-300');
            });
            e.target.classList.add('bg-blue-600', 'text-white');
            e.target.classList.remove('bg-slate-200', 'text-slate-700', 'hover:bg-slate-300');
        }
    });

    // Initial chart render
    createOrUpdateChart(Object.keys(skillsData)[0]);

    // --- CERTIFICATIONS FILTER ---
    const certGrid = document.getElementById('certifications-grid');
    const certSearchInput = document.getElementById('cert-search');
    const certYearFilterContainer = document.getElementById('cert-year-filter');
    const noResultsP = document.getElementById('no-results');

    let activeYear = 'all';

    function renderCertifications(certs) {
        certGrid.innerHTML = '';
        if(certs.length === 0){
            noResultsP.classList.remove('hidden');
        } else {
            noResultsP.classList.add('hidden');
        }
        certs.forEach(cert => {
            const card = document.createElement('div');
            card.className = 'bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300';
            card.innerHTML = `
                <p class="text-sm text-slate-500">${cert.year}</p>
                <h3 class="font-semibold text-slate-800 mt-1">${cert.title}</h3>
                <p class="text-sm text-slate-600 mt-2">${cert.institution}</p>
                ${cert.duration ? `<span class="inline-block bg-blue-100 text-blue-800 text-xs font-medium mt-3 px-2.5 py-0.5 rounded-full">${cert.duration}</span>` : ''}
            `;
            certGrid.appendChild(card);
        });
    }

    function filterAndRender() {
        const searchTerm = certSearchInput.value.toLowerCase();
        const filteredCerts = certificationsData.filter(cert => {
            const titleMatch = cert.title.toLowerCase().includes(searchTerm);
            const yearMatch = (activeYear === 'all' || cert.year == activeYear);
            return titleMatch && yearMatch;
        });
        renderCertifications(filteredCerts);
    }

    // Create year filter buttons
    const years = ['all', ...new Set(certificationsData.map(c => c.year))];
    years.sort((a,b) => (b === 'all' ? -1 : a === 'all' ? 1: b-a)); // sort years desc, 'all' first

    years.forEach((year, index) => {
        const button = document.createElement('button');
        button.textContent = year === 'all' ? 'Todos' : year;
        button.dataset.year = year;
        button.className = `year-filter-btn px-3 py-1 text-sm font-medium rounded-full transition-colors ${index === 0 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`;
        certYearFilterContainer.appendChild(button);
    });

    certYearFilterContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('year-filter-btn')) {
            activeYear = e.target.dataset.year;
            filterAndRender();
            document.querySelectorAll('.year-filter-btn').forEach(btn => {
                    btn.classList.remove('bg-blue-600', 'text-white');
                    btn.classList.add('bg-slate-200', 'text-slate-700', 'hover:bg-slate-300');
            });
            e.target.classList.add('bg-blue-600', 'text-white');
            e.target.classList.remove('bg-slate-200', 'text-slate-700', 'hover:bg-slate-300');
        }
    });
    
    certSearchInput.addEventListener('input', filterAndRender);
    
    // Initial render
    renderCertifications(certificationsData);
});
