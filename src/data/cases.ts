export interface Credit {
    role: string;
    name: string;
    link?: string;
}

export interface Case {
    id: string;
    title: string;
    overview: string;
    year: string;
    production: string;
    result: string;
    problem: string;
    solution: string;
    credits: Credit[];
    comingSoon?: boolean;
    keyHighlight?: string;
    approach?: string;
    projectOverview?: string;
}

export const CASES: Case[] = [
    {
        id: "theoneyoukeep",
        title: "The One You Keep — Brand film",
        year: "2024",
        production: "2 Weeks",
        overview: "A personal cinematic poem about memory and connection.",
        problem: "Test whether emotion could be manufactured on demand, using the same rigor typically reserved for commercial work.",
        solution: "A proof-of-concept for emotional engineering — produced as a birthday gift but executed at full brand-film production level.",
        result: "Instant emotional impact, proving that restraint compounds emotion.",
        credits: [
            { role: "Director & Animator", name: "Djamel Haroual" },
            { role: "Sound Design", name: "John Green" },
            { role: "Music", name: "Penrose Audio" }
        ]
    },
    {
        id: "hrwl",
        title: "Hrwl — Visual Identity + Brand Film + OC Animations",
        year: "2024",
        production: "1 Month",
        overview: "Personal brand build: identity, cinematic film and original character animations.",
        problem: "Creating a cohesive visual language that represents cinematic storytelling while maintaining a modern, premium feel.",
        solution: "Developed a minimalist identity system paired with original character animations and a high-end brand film.",
        result: "A complete identity system that communicates quality before a single word is read.",
        credits: [
            { role: "Creative Direction", name: "Djamel Haroual" },
            { role: "Animation", name: "Djamel Haroual" }
        ]
    },
    {
        id: "google",
        title: "Google — Short Film Case Study",
        year: "2023",
        production: "4 Weeks",
        overview: "A narrative film demonstrating how quality commercials drive exponential business growth.",
        problem: "Google Workspace was 'only' generating $840M/year. They needed to scale by promoting Google Vids.",
        solution: "Strategic problem analysis — storytelling that intrigues — production quality so good, people forgot it was selling.",
        result: "Drove $312M additional annual revenue — proving one cinematic piece can trigger exponential growth.",
        credits: [
            { role: "Creative Direction", name: "Djamel Haroual" },
            { role: "Problem Analysis", name: "Team" },
            { role: "Storyboarding", name: "Djamel Haroual" },
            { role: "Animation", name: "Djamel Haroual" },
            { role: "Sound Design", name: "Ilyas" }
        ],
        keyHighlight: "The commercial highlighted tangible benefits: time saved, better communication, brand polish."
    },
    {
        id: "coinbase",
        title: "Coinbase — Commercial",
        year: "2024",
        production: "Coming Soon",
        overview: "A commercial highlighting speed and clarity of crypto.",
        problem: "N/A",
        solution: "N/A",
        result: "N/A",
        credits: [],
        comingSoon: true
    },
    {
        id: "noxisros",
        title: "Noxisros — Visual Identity + Commercial",
        year: "2023",
        production: "Coming Soon",
        overview: "A complete identity and modular motion system for a creative collective.",
        problem: "N/A",
        solution: "N/A",
        result: "N/A",
        credits: [],
        comingSoon: true
    }
];
