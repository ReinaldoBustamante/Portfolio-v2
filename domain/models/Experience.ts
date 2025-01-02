export interface Experience {
    id: string;
    position: string;
    company: string;
    description: string;
    technologies: string[]; // IDs de tecnologías relacionadas.
    startDate: Date;
    endDate: Date
}

export interface Technology {
    id: string;
    name: string;
}