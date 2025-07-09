export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    image?: string;
    liveUrl?: string;
    githubUrl?: string;
    type: 'personal' | 'freelance';
}

export interface Skill {
    name: string;
    level: number;
    category: 'frontend' | 'backend' | 'database' | 'tools' | 'ml';
}

export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
}
