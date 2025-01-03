export interface Experience {
    id: number;
    position: string;
    company: string;
    description: string;
    technologies: string[];
    startDate: Date;
    endDate: Date
}

export interface Technology {
    id: string;
    name: string;
}