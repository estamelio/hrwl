export type QuestionType = "text" | "choice" | "multichoice" | "date" | "textarea" | "contact" | "boolean" | "final";

export interface QuestionStep {
  id: number;
  type: QuestionType;
  title: string;
  description?: string;
  placeholder?: string;
  options?: string[];
  fields?: { name: string; label: string; placeholder: string; type?: string }[];
}

export const INQUIRY_QUESTIONS: QuestionStep[] = [
  {
    id: 1,
    type: "text",
    title: "Brand Name / Organization*",
    description: "Ex. \"OpenAI\" or \"AirBnb\"",
    placeholder: "Type your answer here...",
  },
  {
    id: 2,
    type: "choice",
    title: "Industry*",
    options: [
      "Tech / Fintech",
      "Crypto",
      "Marketing / Creative Agency",
      "Clothing / Ecom",
      "Event",
      "Concert / Festival",
      "Other",
    ],
  },
  {
    id: 3,
    type: "multichoice",
    title: "Services*",
    description: "Choose as many as you like",
    options: ["Brand film", "Commercial", "Explainer video", "Other"],
  },
  {
    id: 4,
    type: "date",
    title: "Project Debut*",
    description: "I work backward from this date, creating multiple checkpoints to ensure timely project completion.",
  },
  {
    id: 5,
    type: "multichoice",
    title: "Business Problems / Goals*",
    description: "I need to know the Business problems that you need creative solutions for\nChoose as many as you like",
    options: [
      "Low conversion rate",
      "Complex Product/services",
      "Credibility issues",
      "Low brand awareness",
      "Promote for an upcoming product launch",
      "Other",
    ],
  },
  {
    id: 6,
    type: "choice",
    title: "How did you find HRWL?*",
    options: ["Instagram", "Tiktok", "LinkedIn", "Blog", "Peer referral", "Other"],
  },
  {
    id: 7,
    type: "contact",
    title: "Contact Info*",
    fields: [
      { name: "firstName", label: "First name", placeholder: "Jane" },
      { name: "lastName", label: "Last name", placeholder: "Smith" },
      { name: "email", label: "Email", placeholder: "name@example.com", type: "email" },
    ],
  },
  {
    id: 8,
    type: "textarea",
    title: "What specifically prompted you want to reach out?*",
    placeholder: "Type your answer here...",
    description: "Shift ⇧ + Enter ↵ to make a line break",
  },
  {
    id: 9,
    type: "boolean",
    title: "Will i be able to use the created work to share on social channels?*",
    description: "With all future projects, I MUST preserve the ability to share the work on our social channels (BTS, breakdowns etc). This is essential to the model i run, and keeps quality, creativity, and transparency at the forefront of how we operate.",
    options: ["Yes", "No"],
  },
  {
    id: 10,
    type: "choice",
    title: "Resources available for investment*",
    options: ["$8k–$15k", "$15-25k", "$25-55k", "$55-75k+", "Other"],
  },
  {
    id: 11,
    type: "text",
    title: "Your brand's website*",
    description: "Please provide your URL",
    placeholder: "https://",
  },
  {
    id: 12,
    type: "final",
    title: "Thank you for filling out the form",
    description: "I will get back to you to confirm the call, and hopefully \"see\" you soon",
  },
];
