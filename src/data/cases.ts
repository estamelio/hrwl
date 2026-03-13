export interface CaseCredit {
  role: string;
  name: string;
  link?: string;
}

export interface Case {
  id: string;
  title: string;
  year: string;
  overview: string;
  projectOverview: string;
  problem: string;
  hero: string;
  solution: string;
  production: string;
  result: string;
  credits: CaseCredit[];
  detailedDescription?: string;
  approach?: string;
  keyHighlight?: string;
  comingSoon?: boolean;
}

export const CASES: Case[] = [
  {
    id: "hrwl-launch",
    title: "HRWL – Launch Campaign",
    year: "2026",
    overview: "Instant brand recall through strategic restraint — 15s and 17s motion films designed for pattern recognition.",
    projectOverview:
      "A brand awareness campaign inspired by IBM-style character animation, focused on clarity, restraint, and recall rather than explanation or sales. HRWL is Djamel's personal brand, launching into a saturated creative market.",
    problem: "Typical creative brand launches suffer from overcommunication, delayed payoff, and aesthetic dependence. In a crowded feed environment, these approaches slow recognition and dilute recall.",
    hero: "HRWL – Launch Campaign — pattern recognition over persuasion.",
    solution: "A minimalist motion identity built around consistency, timing, and reduction. The films operate as moving logos rather than narratives. Single CTA: djamel@hrwl.studio",
    production: "5 days",
    result: "Instant brand recall, increased curiosity, high perceived quality, premium perception without explanation.",
    credits: [
      { role: "Creative Direction", name: "Djamel Haroual" },
      { role: "Motion Design", name: "Djamel Haroual" },
      { role: "Sound Design & Music", name: "Yuhui (Kelvin) Jian" },
    ],
  },
  {
    id: "hrwl",
    title: "HRWL — Visual Identity + Demo Reel + OC Animations",
    year: "2024",
    overview: "Personal brand build: identity, demo reel, and original character animations.",
    projectOverview:
      "Hrwl isn't just a portfolio — it's my philosophy in motion. Complete identity system, demo reel, and reusable motion assets.",
    problem: "Show studio-grade identity and motion while maintaining authorship.",
    hero: "Hrwl — a personal brand embodying rebellion, clarity and premium storytelling.",
    solution: "Cohesive visual language, demo reel, and modular motion assets.",
    production: "1 month",
    result: "Full identity system + demo reel and reusable motion assets.",
    credits: [
      { role: "Creative Direction & Motion", name: "Djamel Haroual" },
      { role: "Sound Design", name: "Djamel Haroual" },
    ],
  },
  {
    id: "noxisros",
    title: "Noxisros — Visual Identity + Brand Film",
    year: "2023",
    overview: "A complete identity and motion system for a creative collective.",
    projectOverview: "Unite 8 creatives under one cohesive brand — from naming to full identity and promotional film.",
    problem: "Create a unified brand for a team to showcase collective work.",
    hero: "Noxisros — a nimble collective with studio-grade polish.",
    solution: "Complete brand ecosystem: naming, logo, animations, Instagram assets, and 1-month brand film production.",
    production: "2 months",
    result: "Full brand system with motion toolkit and cinematic brand film.",
    credits: [
      { role: "Creative Direction", name: "Djamel Haroual" },
      { role: "Motion / Styleframes", name: "Nick" },
      { role: "Scriptwriting", name: "Djamel Haroual" },
      { role: "Voiceover", name: "Djamel Haroual" },
      { role: "Storyboarding", name: "Team" },
      { role: "Animation", name: "Nick & Team" },
      { role: "Sound Design", name: "Djamel Haroual" },
      { role: "Music Composition", name: "Djamel Haroual" },
    ],
  },
  {
    id: "google",
    title: "Google — Short Film Case Study",
    year: "2025",
    overview: "A narrative film demonstrating how quality commercials drive exponential business growth.",
    projectOverview: "Case study film breaking down how Google scaled through strategic creative investment — and why a well-crafted commercial can be the missing link for scaling.",
    problem: "Google Workspace was 'only' generating $840M/year. They needed to scale by promoting Google Vids.",
    hero: "Google Vids — powered by a cinematic commercial that drove massive adoption.",
    solution: "Strategic problem analysis → storytelling that intrigues → production quality so good, people forgot it was selling.",
    production: "4 weeks",
    result: "Drove $312M additional annual revenue — proving one cinematic piece can trigger exponential growth.",
    approach: "The commercial highlighted tangible benefits: time saved, better communication, brand polish. Principle: 'a good commercial sells, a great one hides that it's selling.'",
    credits: [
      { role: "Creative Direction", name: "Djamel Haroual" },
      { role: "Problem Analysis", name: "Team" },
      { role: "Storyboarding", name: "Djamel Haroual" },
      { role: "Animation", name: "Djamel Haroual" },
      { role: "Sound Design", name: "Ilyas" },
    ],
  },
  {
    id: "coinbase",
    title: "Coinbase — Commercial",
    year: "2026",
    overview: "A commercial that makes you forget you're watching an ad.",
    projectOverview: "Storytelling-driven commercial that intrigues viewers while showcasing crypto's advantages.",
    problem: "Create compelling financial messaging that doesn't feel like jargon-heavy advertising.",
    hero: "Coinbase — framed through human stories, strategic pacing, and cinematic craft.",
    solution: "Research → storytelling strategy → storyboard → animation → sound design → delivery.",
    production: "1 month",
    result: "A cinematic commercial that sells without feeling like it's selling.",
    comingSoon: true,
    credits: [
      { role: "Creative Direction", name: "Djamel Haroual" },
      { role: "Problem Research", name: "Team" },
      { role: "Storyboarding", name: "Djamel Haroual" },
      { role: "Art Direction", name: "Saleh" },
      { role: "Styleframe Design", name: "Reem & Saleh" },
      { role: "Motion Design", name: "Ayman" },
      { role: "Voiceover Pacing", name: "Djamel Haroual" },
      { role: "Music Production", name: "Davis" },
      { role: "Sound Design", name: "Davis" },
    ],
  },
  {
    id: "theoneyoukeep",
    title: "The One You Keep — Brand Film",
    year: "2025",
    overview: "Engineering emotional recall through intentional storytelling — proving personal emotion becomes universal resonance.",
    projectOverview: "A proof-of-concept for emotional engineering. Produced as a birthday gift but executed at full brand-film production level.",
    problem: "Most brand content fails because it's transactional. It doesn't stay with the viewer.",
    hero: "The One You Keep — where emotion meets artistry.",
    solution: "Poetic script → voiceover → visual system → frame-by-frame animation → sound design → cinematic polish.",
    production: "1 month",
    result: "A proof of concept: personal craft becomes universal resonance.",
    keyHighlight: "If a message as simple as 'Happy Birthday' can leave a WOW, imagine what I can do for your brand's message.",
    detailedDescription: "Test whether emotion could be manufactured on demand, using the same rigor typically reserved for commercial work.",
    approach: "Every creative decision followed a single governing principle: restraint compounds emotion.",
    credits: [
      { role: "Creative Direction", name: "Djamel Haroual" },
      { role: "Poem Writing", name: "Djamel Haroual" },
      { role: "Voiceover", name: "Djamel Haroual" },
      { role: "Pixel Art Design", name: "Djamel Haroual" },
      { role: "Character Animation", name: "Djamel Haroual" },
      { role: "Motion Design", name: "Djamel Haroual" },
      { role: "Sound Design", name: "John Green", link: "https://www.instagram.com/johnodysseyaudio/" },
      { role: "Music Composition", name: "Penrose Audio", link: "https://www.instagram.com/p/DNIBDJyNTRK/" },
    ],
  },
];
