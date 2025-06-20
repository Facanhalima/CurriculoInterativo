export interface TimelineItem {
    date: string;
    title: string;
    institution: string;
    description: string;
    type: 'work' | 'education';
}

export interface Skill {
    name: string;
    level: number;
}

export interface SkillsData {
    [category: string]: Skill[];
}

export interface Certification {
    year: number;
    title: string;
    institution: string;
    duration: string;
}
