<div align="center">

# Ethiopian AI Research Hub

</div>

Explore machine learning models, datasets, and research papers focused on Ethiopian 


Features
🔎 Search and filter resources by category

🧠 Access models 

📚 Find datasets 

📄 Discover papers 

## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000/models-hub](http://localhost:3000/models-hub) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## How to add project

1. Go to

```bash
src/data/projects.ts
```

2. Add your project with the following example

```
  {
    id: 1, // Check the last project Id, (last_project_id + 1)
    title: "HornMT",
    languages_used: ["Python", "Pythorch"], // Languages and libraries used
    creator: ["Ethio NLP", "Dr. XXX", "Pro. YYY", "Mr. ZZZ"], // Who created the project
    description: `The HornMT repository contains data and the associated metadata for the project Machine Translation Benchmark Dataset for Languages in the Horn of Africa. It is a multi-way parallel corpus that will serve as a benchmark to accelerate progress in machine translation research and production systems for languages in the Horn of Africa.`,
    featured: true, // true/false
    domain: [
      "Helath",
      "Politics",
      "Education",
      "Agriculture",
      "Bussiness",
      "Art and Culture",
      "Disaster and Accidents",
    ], //  "Helath", "Politics", "Education", "Agriculture", "Bussiness","Art and Culture", "Constraction", "Disaster and Accidents
    field: "Computer Vision", // "NLP", "Computer Vision", "Speech Recognition", "Generative AI"
    field: "NLP", // Computer Vision, NLP ...
    links: [
      {
        id: 1,
        name: "GitHub",
        link: "https://github.com/asmelashteka/HornMT",
      },
      {
        id: 2,
        name: "NIH",
        link: "https://data.niaid.nih.gov/resources?id=zenodo_6369441",
      },
    ],
    year: "2024", // The year that the project published
    content: "Dataset", // Dataset, Model, Paper
  },
```

