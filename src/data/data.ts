import type { TimelineItem, SkillsData, Certification } from '../types/types';

export const timelineData: TimelineItem[] = [
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

export const skillsData: SkillsData = {
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

export const certificationsData: Certification[] = [
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
