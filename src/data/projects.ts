export const projects = [
  {
    id: 1,
    title: "HornMT",
    languages_used: ["Python", "Pytorch"], 
    creator: ["Lesan AI", "Asmelash Teka", "Gebrekirstos G. Gebremeskel"], 
    description: `The HornMT repository contains data and the associated metadata for the project Machine Translation Benchmark Dataset for Languages in the Horn of Africa. It is a multi-way parallel corpus that will serve as a benchmark to accelerate progress in machine translation research and production systems for languages in the Horn of Africa.`,
    featured: true, 
    domain: [
      "Health",
      "Politics",
      "Education",
      "Agriculture",
      "Bussiness",
      "Art and Culture",
      "Disaster and Accidents",
    ],
    category: ["Dataset"], 
    field: "NLP", 
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
    year: "2024", 
    content: "Dataset",
  },

  {
    id: 2,
    title: "Afro Chest X-ray",
    languages_used: ["Python", "pydicom", "dicom2jpg"], 
    creator: ["Negasi Haile", "Asmelash Teka", "Lesan AI"], 
    description: `The Chest X-ray Imaging Dataset for Multiple Cardio-respiratory Diseases in Ethiopia (Afro Chest X-ray for short) is a project funded by the LacunaFund whose aim is to close the gap in health disparities by fostering interdisciplinary collaborations that create, expand, or aggregate labeled training and evaluation datasets.`,
    featured: true, 
    domain: ["Health"], 
    category: ["Dataset"], 
    field: "Computer Vision", 
    links: [
      {
        id: 1,
        name: "GitHub",
        link: "https://github.com/asmelashteka/Afro-Chest-X-ray",
      },
      {
        id: 2,
        name: "Hugging Face",
        link: "https://github.com/asmelashteka/Afro-Chest-X-ray",
      },
    ],
    year: "2024", 
    content: "Dataset",
  },
  {
    id: 3,
    title: "AGE: Amharic, English, Ge'ez Dataset",
    languages_used: ["geez", "machine translation", "nlp"], 
    creator: ["Henok Biadglign Ademtew", "Mikiyas Girma Birbo"], 
    description: `AGE, an open-source tripartite alignment of Amharic, Ge’ez, and English parallel dataset. Additionally, we introduced a novel, 1,000 Ge’ez-centered sentences sourced from areas such as news and novels.`,
    featured: true, 
    domain: [
      "Religion",
      "Health",
      "Politics",
      "Education",
      "Agriculture",
      "Bussiness",
      "Art and Culture",
    ],
    category: ["Dataset"], 
    field: "NLP", 
    links: [
      {
        id: 1,
        name: "GitHub",
        link: "https://github.com/HenokB/AGE-Dataset/",
      },
      {
        id: 2,
        name: "Hugging Face",
        link: "https://huggingface.co/datasets/Henok/age_dataset",
      },
    ],
    year: "2024", 
    content: "Dataset",
  },

  {
    id: 4,
    title: "Amharic Llama",
    languages_used: ["LLM", "Llama"], 
    creator: ["Michael Andersland"], 
    description: `Uses Llama-2-7b as base. Does not use chat variant.`,
    featured: true, 
    domain: [
      "LLM",
    ],
    category: ["Model"], 
    field: "NLP", 
    links: [
      {
        id: 1,
        name: "Huggingface",
        link: "https://huggingface.co/iocuydi/llama-2-amharic-3784m",
      },
      {
        id: 2,
        name: "Github",
        link: "https://github.com/iocuydi/amharic-llama-llava",
      },
      {
        id: 3,
        name: "Paper",
        link: "https://arxiv.org/abs/2403.06354",
      },
    ],
    year: "2024", 
    content: "Model",
  },


  {
    id: 5,
    title: "Amharic QA Dataset",
    languages_used: ["QA", "Dataset"], 
    creator: ["Tilahun Abedissa, Ricardo Usbeck, Yaregal Assabie"], 
    description: `Amharic Question Answering Dataset (Amh-QuAD). 2,628 question-answer pairs from over 378 Amharic Wikipedia articles.`,
    featured: true, 
    domain: [
      "QA",
    ],
    category: ["Dataset"], 
    field: "NLP", 
    links: [
      
      {
        id: 1,
        name: "Github",
        link: "https://github.com/semantic-systems/amharic-qa",
      },
      {
        id: 2,
        name: "Paper",
        link: "https://arxiv.org/pdf/2303.03290",
      },
    ],
    year: "2024", 
    content: "Model",
  },
  {
    id: 6,
    title: "EthioLLM",
    creator: ["Atnafu Lambebo Tonja", "Israel Abebe Azime", "Tadesse Destaw Belay","et al"],
    description: `EthioLLM is a multilingual LLM trained on five Ethiopian languages and English. It comes with EthioBenchmark for evaluating models on tasks like classification, NER, sentiment analysis, and translation.`,
    featured: true,
    domain: ["Health", "Politics", "Culture", "General", "LLM"],
    category: ["Paper", "Model"],
    field: "NLP",
    links: [
      { id: 1, name: "arXiv", link: "https://aclanthology.org/2024.lrec-main.561/" },
      { id: 2, name: "HuggingFace", link: "https://huggingface.co/EthioNLP" },
    ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 7,
    title: "Walia-LLM",
    creator: ["Israel Abebe Azime", "Atnafu Lambebo Tonja", "Tadesse Destaw Belay","et al"],
    description: `Walia-LLM is an Amharic-tuned LLaMA model fine-tuned using task-specific and translated instruction datasets for improved downstream performance.`,
    featured: false,
    domain: ["General", "Education"],
    category: ["Paper"],
    field: "NLP",
    links: [
      { id: 1, name: "ACL Anthology", link: "https://aclanthology.org/2024.findings-emnlp.25" },
      { id: 2, name: "GitHub", link: "https://github.com/IsraelAbebe/Walia-LLM" },
    ],
    year: "2024",
    content: "Paper",
  },

  {
    id: 10,
    title: "Detecting Hate Speech in Amharic Using Multimodal Analysis of Social Media Memes",
    languages_used: [],
    creator: ["Melese Ayichlie Jigar", "Abinew Ali Ayele","Seid Muhie Yimam", "Chris Biemann"],
    description: `Detecting Hate Speech in Amharic`,
    featured: false,
    domain: ["Social Media", "Culture"],
    category: ["Dataset"],
    field: "Multimodal",
    links: [
      { id: 1, name: "Paper", link: "https://aclanthology.org/2024.trac-1.10.pdf" },
    ],
    year: "2024",
    content: "Dataset",
  }
];


