export interface CompanyType {
  id: number;
  name: string;
  area: string; // e.g., "NLP", "Computer Vision", "AI Research", "Data Science"
  description?: string;
  website?: string;
  location?: string;
  logo?: string;
  type?: "company" | "organization" | "research" | "startup";
}

export const companies: CompanyType[] = [
  {
    id: 1,
    name: "Lesan AI",
    area: "NLP & Machine Translation",
    description: "Building machine translation systems for Ethiopian languages",
    website: "https://lesan.ai",
  },
  {
    id: 2,
    name: "iCog Labs",
    area: "AI Research and Software Development",
    description: "iCog Labs provides a variety of research and development services.",
    website: "https://icog-labs.com",
  },
  {
    id: 3,
    name: "Zemenu",
    area: "Customer Support and AI Solutions",
    description: "Zemenu provides a variety of customer support and AI solutions.",
    website: "https://lucy.zemenu.org/",
  },
  {
    id: 4,
    name: "NERD",
    area: "AI & ROBOTICS",
    description: "Robotics and AI lab with core competencies in Computer Vision.",
    website: "https://www.nerdethiopia.com/",
  },
  {
    id: 5,
    name: "Ethiopian AI Insititute",
    area: "AI Research & Development",
    website: "https://www.eii.et/",
    description: "Ethiopian AI Institute is a research institution in AI and machine learning",
  },
  {
    id: 6,
    name: "iCog",
    area: "AI Solutions & Consulting",
    description: "AI-powered solutions for businesses in Ethiopia",
    website: "https://icog-labs.com",
  },
  {
    id: 7,
    name: "EthioNLP",
    area: "NLP for Ethiopian Languages",
    description: "EthioNLP is a community of NLP researchers that work on NLP for Ethiopian languages.",
    website: "https://ethionlp.github.io/",
  },
  {
    id: 8,
    name: "Addis AI",
    area: "Personal AI Assistant",
    description: "Ethiopian AI technologies with language processing, speech recognition, and translation services",
    website: "https://addisassistant.com/en/",
  },
  {
    id: 9,
    name: "Hasab AI",
    area: "Speech Recognition",
    description: "Hasab AI is a company that provides speech recognition services for Ethiopian languages",
    website: "https://hasab.ai",
  },
];

