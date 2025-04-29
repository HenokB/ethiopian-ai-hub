export const projects = [
  {
    id: 1,
    title: "HornMT",
    languages_used: ["Python"], 
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
  },

  {
    id: 11,
    title: "Dense Retrieval for Low Resource Languages -- the Case of Amharic Language",
    creator: [
      "Tilahun Yeshambel",
      "Moncef Garouani",
      "Serge Molina",
      "Josiane Mothe",
    ],
    description: "Paper on Dense Retrieval for Low Resource Languages -- the Case of Amharic Language",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2503.18570v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 2,
    title: "Whispering in Amharic: Fine-tuning Whisper for Low-resource Language",
    creator: [
      "Dawit Ketema Gete",
      "Bedru Yimam Ahmed",
      "Tadesse Destaw Belay",
      "Yohannes Ayana Ejigu",
      "Sukairaj Hafiz Imam",
      "Alemu Belay Tessema",
      "Mohammed Oumer Adem",
      "Tadesse Amare Belay",
      "Robert Geislinger",
      "Umma Aliyu Musa",
      "Martin Semmann",
      "Shamsuddeen Hassan Muhammad",
      "Henning Schreiber",
      "Seid Muhie Yimam",
    ],
    description: "Paper on Whispering in Amharic: Fine-tuning Whisper for Low-resource Language",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2503.18485v2",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 3,
    title: "AmaSQuAD: A Benchmark for Amharic Extractive Question Answering",
    creator: [
      "Nebiyou Daniel Hailemariam",
      "Blessed Guda",
      "Tsegazeab Tefferi",
    ],
    description: "Paper on AmaSQuAD: A Benchmark for Amharic Extractive Question Answering",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2502.02047v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 4,
    title: "Hate Speech Detection and Classification in Amharic Text with Deep Learning",
    creator: [
      "Samuel Minale Gashe",
      "Seid Muhie Yimam",
      "Yaregal Assabie",
    ],
    description: "Paper on Hate Speech Detection and Classification in Amharic Text with Deep Learning",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2408.03849v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 5,
    title: "I Searched for a Religious Song in Amharic and Got Sexual Content Instead: Investigating Online Harm in Low-Resourced Languages on YouTube",
    creator: [
      "Hellina Hailu Nigatu",
      "Inioluwa Deborah Raji",
    ],
    description: "Paper on I Searched for a Religious Song in Amharic and Got Sexual Content Instead: Investigating Online Harm in Low-Resourced Languages on YouTube",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2405.16656v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 6,
    title: "Semantically Corrected Amharic Automatic Speech Recognition",
    creator: [
      "Samuael Adnew",
      "Paul Pu Liang",
    ],
    description: "Paper on Semantically Corrected Amharic Automatic Speech Recognition",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2404.13362v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 7,
    title: "Amharic LLaMA and LLaVA: Multimodal LLMs for Low Resource Languages",
    creator: [
      "Michael Andersland",
    ],
    description: "Paper on Amharic LLaMA and LLaVA: Multimodal LLMs for Low Resource Languages",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2403.06354v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 8,
    title: "Walia-LLM: Enhancing Amharic-LLaMA by Integrating Task-Specific and Generative Datasets",
    creator: [
      "Israel Abebe Azime",
      "Atnafu Lambebo Tonja",
      "Tadesse Destaw Belay",
      "Mitiku Yohannes Fuge",
      "Aman Kassahun Wassie",
      "Eyasu Shiferaw Jada",
      "Yonas Chanie",
      "Walelign Tewabe Sewunetie",
      "Seid Muhie Yimam",
    ],
    description: "Paper on Walia-LLM: Enhancing Amharic-LLaMA by Integrating Task-Specific and Generative Datasets",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2402.08015v5",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 9,
    title: "Deep Learning Based Amharic Chatbot for FAQs in Universities",
    creator: [
      "Goitom Ybrah Hailu",
      "Hadush Hailu",
      "Shishay Welay",
    ],
    description: "Paper on Deep Learning Based Amharic Chatbot for FAQs in Universities",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2402.01720v2",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 10,
    title: "Cross-Corpus Multilingual Speech Emotion Recognition: Amharic vs. Other Languages",
    creator: [
      "Ephrem Afele Retta",
      "Richard Sutcliffe",
      "Jabar Mahmood",
      "Michael Abebe Berwo",
      "Eiad Almekhlafi",
      "Sajjad Ahmed Khan",
      "Shehzad Ashraf Chaudhry",
      "Mustafa Mhamed",
      "Jun Feng",
    ],
    description: "Paper on Cross-Corpus Multilingual Speech Emotion Recognition: Amharic vs. Other Languages",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2307.10814v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 11,
    title: "AmQA: Amharic Question Answering Dataset",
    creator: [
      "Tilahun Abedissa",
      "Ricardo Usbeck",
      "Yaregal Assabie",
    ],
    description: "Paper on AmQA: Amharic Question Answering Dataset",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2303.03290v2",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 12,
    title: "The Effect of Normalization for Bi-directional Amharic-English Neural Machine Translation",
    creator: [
      "Tadesse Destaw Belay",
      "Atnafu Lambebo Tonja",
      "Olga Kolesnikova",
      "Seid Muhie Yimam",
      "Abinew Ali Ayele",
      "Silesh Bogale Haile",
      "Grigori Sidorov",
      "Alexander Gelbukh",
    ],
    description: "Paper on The Effect of Normalization for Bi-directional Amharic-English Neural Machine Translation",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2210.15224v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 13,
    title: "Offline Handwritten Amharic Character Recognition Using Few-shot Learning",
    creator: [
      "Mesay Samuel",
      "Lars Schmidt-Thieme",
      "DP Sharma",
      "Abiot Sinamo",
      "Abey Bruck",
    ],
    description: "Paper on Offline Handwritten Amharic Character Recognition Using Few-shot Learning",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2210.00275v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 14,
    title: "ANEC: An Amharic Named Entity Corpus and Transformer Based Recognizer",
    creator: [
      "Ebrahim Chekol Jibril",
      "A. Cüneyd Tantğ",
    ],
    description: "Paper on ANEC: An Amharic Named Entity Corpus and Transformer Based Recognizer",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2207.00785v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 15,
    title: "Comprehensive Benchmark Datasets for Amharic Scene Text Detection and Recognition",
    creator: [
      "Wondimu Dikubab",
      "Dingkang Liang",
      "Minghui Liao",
      "Xiang Bai",
    ],
    description: "Paper on Comprehensive Benchmark Datasets for Amharic Scene Text Detection and Recognition",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2203.12165v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 16,
    title: "Improving Amharic Handwritten Word Recognition Using Auxiliary Task",
    creator: [
      "Mesay Samuel Gondere",
      "Lars Schmidt-Thieme",
      "Durga Prasad Sharma",
      "Abiot Sinamo Boltena",
    ],
    description: "Paper on Improving Amharic Handwritten Word Recognition Using Auxiliary Task",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2202.12687v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 17,
    title: "A New Amharic Speech Emotion Dataset and Classification Benchmark",
    creator: [
      "Ephrem A. Retta",
      "Eiad Almekhlafi",
      "Richard Sutcliffe",
      "Mustafa Mhamed",
      "Haider Ali",
      "Jun Feng",
    ],
    description: "Paper on A New Amharic Speech Emotion Dataset and Classification Benchmark",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2201.02710v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 18,
    title: "Manually Annotated Spelling Error Corpus for Amharic",
    creator: [
      "Andargachew Mekonnen Gezmu",
      "Tirufat Tesifaye Lema",
      "Binyam Ephrem Seyoum",
      "Andreas Nürnberger",
    ],
    description: "Paper on Manually Annotated Spelling Error Corpus for Amharic",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2106.13521v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 19,
    title: "Contemporary Amharic Corpus: Automatically Morpho-Syntactically Tagged Amharic Corpus",
    creator: [
      "Andargachew Mekonnen Gezmu",
      "Binyam Ephrem Seyoum",
      "Michael Gasser",
      "Andreas Nürnberger",
    ],
    description: "Paper on Contemporary Amharic Corpus: Automatically Morpho-Syntactically Tagged Amharic Corpus",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2106.07241v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 20,
    title: "Extended Parallel Corpus for Amharic-English Machine Translation",
    creator: [
      "Andargachew Mekonnen Gezmu",
      "Andreas Nürnberger",
      "Tesfaye Bayu Bati",
    ],
    description: "Paper on Extended Parallel Corpus for Amharic-English Machine Translation",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2104.03543v3",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 21,
    title: "Amharic Text Clustering Using Encyclopedic Knowledge with Neural Word Embedding",
    creator: [
      "Dessalew Yohannes",
      "Yeregal Assabie",
    ],
    description: "Paper on Amharic Text Clustering Using Encyclopedic Knowledge with Neural Word Embedding",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2105.00809v2",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 22,
    title: "An Amharic News Text classification Dataset",
    creator: [
      "Israel Abebe Azime",
      "Nebil Mohammed",
    ],
    description: "Paper on An Amharic News Text classification Dataset",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2103.05639v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 23,
    title: "Introducing various Semantic Models for Amharic: Experimentation and Evaluation with multiple Tasks and Datasets",
    creator: [
      "Seid Muhie Yimam",
      "Abinew Ali Ayele",
      "Gopalakrishnan Venkatesh",
      "Ibrahim Gashaw",
      "Chris Biemann",
    ],
    description: "Paper on Introducing various Semantic Models for Amharic: Experimentation and Evaluation with multiple Tasks and Datasets",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2011.01154v2",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 24,
    title: "Evaluating Amharic Machine Translation",
    creator: [
      "Asmelash Teka Hadgu",
      "Adam Beaudoin",
      "Abel Aregawi",
    ],
    description: "Paper on Evaluating Amharic Machine Translation",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2003.14386v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 25,
    title: "Amharic Abstractive Text Summarization",
    creator: [
      "Amr M. Zaki",
      "Mahmoud I. Khalil",
      "Hazem M. Abbas",
    ],
    description: "Paper on Amharic Abstractive Text Summarization",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2003.13721v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 26,
    title: "Machine Learning Approaches for Amharic Parts-of-speech Tagging",
    creator: [
      "Ibrahim Gashaw",
      "H L. Shashirekha",
    ],
    description: "Paper on Machine Learning Approaches for Amharic Parts-of-speech Tagging",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2001.03324v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 27,
    title: "Amharic-Arabic Neural Machine Translation",
    creator: [
      "Ibrahim Gashaw",
      "H L Shashirekha",
    ],
    description: "Paper on Amharic-Arabic Neural Machine Translation",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/1912.13161v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 28,
    title: "Analysis of the Ethiopic Twitter Dataset for Abusive Speech in Amharic",
    creator: [
      "Seid Muhie Yimam",
      "Abinew Ali Ayele",
      "Chris Biemann",
    ],
    description: "Paper on Analysis of the Ethiopic Twitter Dataset for Abusive Speech in Amharic",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/1912.04419v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 29,
    title: "Handwritten Amharic Character Recognition Using a Convolutional Neural Network",
    creator: [
      "Mesay Samuel Gondere",
      "Lars Schmidt-Thieme",
      "Abiot Sinamo Boltena",
      "Hadi Samer Jomaa",
    ],
    description: "Paper on Handwritten Amharic Character Recognition Using a Convolutional Neural Network",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/1909.12943v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 30,
    title: "amLite: Amharic Transliteration Using Key Map Dictionary",
    creator: [
      "Tadele Tedla",
    ],
    description: "Paper on amLite: Amharic Transliteration Using Key Map Dictionary",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/1509.04811v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 31,
    title: "Application of the Double Metaphone Algorithm to Amharic Orthography",
    creator: [
      "Daniel Yacob",
    ],
    description: "Paper on Application of the Double Metaphone Algorithm to Amharic Orthography",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/cs/0408052v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 32,
    title: "Sagalee: an Open Source Automatic Speech Recognition Dataset for Oromo Language",
    creator: [
      "Turi Abu",
      "Ying Shi",
      "Thomas Fang Zheng",
      "Dong Wang",
    ],
    description: "Paper on Sagalee: an Open Source Automatic Speech Recognition Dataset for Oromo Language",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2502.00421v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 33,
    title: "The effects of having lists of synonyms on the performance of Afaan Oromo Text Retrieval system",
    creator: [
      "Isayas Wakgari Kelbessa",
    ],
    description: "Paper on The effects of having lists of synonyms on the performance of Afaan Oromo Text Retrieval system",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2103.02900v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 34,
    title: "Crowdsourcing Parallel Corpus for English-Oromo Neural Machine Translation using Community Engagement Platform",
    creator: [
      "Sisay Chala",
      "Bekele Debisa",
      "Amante Diriba",
      "Silas Getachew",
      "Chala Getu",
      "Solomon Shiferaw",
    ],
    description: "Paper on Crowdsourcing Parallel Corpus for English-Oromo Neural Machine Translation using Community Engagement Platform",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2102.07539v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 35,
    title: "Learning based Ge'ez character handwritten recognition",
    creator: [
      "Hailemicael Lulseged Yimer",
      "Hailegabriel Dereje Degefa",
      "Marco Cristani",
      "Federico Cunico",
    ],
    description: "Paper on Learning based Ge'ez character handwritten recognition",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2411.13350v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 36,
    title: "Machine Translation for Ge'ez Language",
    creator: [
      "Aman Kassahun Wassie",
    ],
    description: "Paper on Machine Translation for Ge'ez Language",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2311.14530v3",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 37,
    title: "Large Vocabulary Spontaneous Speech Recognition for Tigrigna",
    creator: [
      "Ataklti Kahsu",
      "Solomon Teferra",
    ],
    description: "Paper on Large Vocabulary Spontaneous Speech Recognition for Tigrigna",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2402.04254v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 38,
    title: "TIGQA:An Expert Annotated Question Answering Dataset in Tigrinya",
    creator: [
      "Hailay Teklehaymanot",
      "Dren Fazlija",
      "Niloy Ganguly",
      "Gourab K. Patro",
      "Wolfgang Nejdl",
    ],
    description: "Paper on TIGQA:An Expert Annotated Question Answering Dataset in Tigrinya",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2404.17194v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 39,
    title: "An Exploration of Data Augmentation Techniques for Improving English to Tigrinya Translation",
    creator: [
      "Lidia Kidane",
      "Sachin Kumar",
      "Yulia Tsvetkov",
    ],
    description: "Paper on An Exploration of Data Augmentation Techniques for Improving English to Tigrinya Translation",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2103.16789v2",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 40,
    title: "Transferring Monolingual Model to Low-Resource Language: The Case of Tigrinya",
    creator: [
      "Abrhalei Tela",
      "Abraham Woubie",
      "Ville Hautamaki",
    ],
    description: "Paper on Transferring Monolingual Model to Low-Resource Language: The Case of Tigrinya",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2006.07698v2",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 41,
    title: "Tigrinya Neural Machine Translation with Transfer Learning for Humanitarian Response",
    creator: [
      "Alp Öktem",
      "Mirko Plitt",
      "Grace Tang",
    ],
    description: "Paper on Tigrinya Neural Machine Translation with Transfer Learning for Humanitarian Response",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2003.11523v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 42,
    title: "Detection of Somali-written Fake News and Toxic Messages on the Social Media Using Transformer-based Language Models",
    creator: [
      "Muhidin A. Mohamed",
      "Shuab D. Ahmed",
      "Yahye A. Isse",
      "Hanad M. Mohamed",
      "Fuad M. Hassan",
      "Houssein A. Assowe",
    ],
    description: "Paper on Detection of Somali-written Fake News and Toxic Messages on the Social Media Using Transformer-based Language Models",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2503.18117v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 43,
    title: "Lexicon and Rule-based Word Lemmatization Approach for the Somali Language",
    creator: [
      "Shafie Abdi Mohamed",
      "Muhidin Abdullahi Mohamed",
    ],
    description: "Paper on Lexicon and Rule-based Word Lemmatization Approach for the Somali Language",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2308.01785v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  
  {
    id: 44,
    title: "Evaluating Students Perspectives on ICT Readiness in Somali Higher Education towards Teaching -- Learning Acceptance",
    creator: [
      "Yunis Ali Ahmed",
      "Mohamed M. Mohamed",
      "Abdifatah Farah Ali",
      "Mohamud M. Alasso",
      "Ahmed Dahir Siyad Mohammad Nazir Ahmad",
    ],
    description: "Paper on Evaluating Students Perspectives on ICT Readiness in Somali Higher Education towards Teaching -- Learning Acceptance",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2108.11455v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 45,
    title: "Improved low-resource Somali speech recognition by semi-supervised acoustic and language model training",
    creator: [
      "Astik Biswas",
      "Raghav Menon",
      "Ewald van der Westhuizen",
      "Thomas Niesler",
    ],
    description: "Paper on Improved low-resource Somali speech recognition by semi-supervised acoustic and language model training",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/1907.03064v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 46,
    title: "Automatic Speech Recognition for Humanitarian Applications in Somali",
    creator: [
      "Raghav Menon",
      "Astik Biswas",
      "Armin Saeb",
      "John Quinn",
      "Thomas Niesler",
    ],
    description: "Paper on Automatic Speech Recognition for Humanitarian Applications in Somali",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/1807.08669v1",
  }  ],
    year: "2024",
    content: "Paper",
  },

  {
    id: 1,
    title: "EthioMT: Parallel Corpus for Low-resource Ethiopian Languages",
    creator: [
      "Atnafu Lambebo Tonja",
      "Olga Kolesnikova",
      "Alexander Gelbukh",
      "Jugal Kalita",
    ],
    description: "Paper on EthioMT: Parallel Corpus for Low-resource Ethiopian Languages",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2403.19365v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 2,
    title: "Natural Language Processing in Ethiopian Languages: Current State, Challenges, and Opportunities",
    creator: [
      "Atnafu Lambebo Tonja",
      "Tadesse Destaw Belay",
      "Israel Abebe Azime",
      "Abinew Ali Ayele",
      "Moges Ahmed Mehamed",
      "Olga Kolesnikova",
      "Seid Muhie Yimam",
    ],
    description: "Paper on Natural Language Processing in Ethiopian Languages: Current State, Challenges, and Opportunities",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2303.14406v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 3,
    title: "Novel Machine Learning Approach for Predicting Poverty using Temperature and Remote Sensing Data in Ethiopia",
    creator: [
      "Om Shah",
      "Krti Tallam",
    ],
    description: "Paper on Novel Machine Learning Approach for Predicting Poverty using Temperature and Remote Sensing Data in Ethiopia",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2302.14835v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  {
    id: 4,
    title: "Banknote Recognition for Visually Impaired People (Case of Ethiopian note)",
    creator: [
      "Nuredin Ali Abdelkadir",
    ],
    description: "Paper on Banknote Recognition for Visually Impaired People (Case of Ethiopian note)",
    featured: false,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "NLP",
    links: [
  {
      id: 1,
      name: "arXiv",
      link: "http://arxiv.org/abs/2209.03236v1",
  }  ],
    year: "2024",
    content: "Paper",
  },
  
  ];

  
  