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
    field: "LLM",
    links: [
      { id: 1, name: "arXiv", link: "https://aclanthology.org/2024.lrec-main.561/" },
      { id: 2, name: "HuggingFace", link: "https://huggingface.co/EthioNLP" },
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
    featured: true,
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
    featured: true,
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
    featured: true,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "Speech",
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
    featured: true,
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
    featured: true,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: "Speech",
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
    featured: true,
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
    featured: true,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: ["NLP", "Speech"],
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: ["NLP", "Speech"],
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: ["NLP", "Speech"],
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: ["NLP", "Speech"],
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: ["NLP", "Speech"],
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
    domain: [
      "General",
      "Education",
    ],
    category: [
      "Paper",
    ],
    field: ["NLP", "Speech"],
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
  

    {
      id: 0,
      title: "Amharic Word Sequence Prediction",
      creator: [
        "Nuniyat Kifle",
      ],
      description: "Paper on Amharic Word Sequence Prediction",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/W19-3607/",
    }  ],
      year: "2019",
      content: "Paper",
    },
    {
      id: 1,
      title: "Amharic Question Answering for Biography, Definition, and Description Questions",
      creator: [
        "Tilahun Abedissa Taffa",
        "Mulugeta Libsie",
      ],
      description: "Paper on Amharic Question Answering for Biography, Definition, and Description Questions",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/W19-3635/",
    }  ],
      year: "2019",
      content: "Paper",
    },
    {
      id: 2,
      title: "GeezSwitch: Language Identification in Typologically Related Low-resourced {E}ast African Languages",
      creator: [
        "Fitsum Gaim",
        "Wonsuk Yang",
        "Jong C. Park",
      ],
      description: "Paper on GeezSwitch: Language Identification in Typologically Related Low-resourced {E}ast African Languages",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2022.lrec-1.707/",
    }  ],
      year: "2022",
      content: "Paper",
    },
    {
      id: 3,
      title: "Speech Recognition for Tigrinya language Using Deep Neural Network Approach",
      creator: [
        "Hafte Abera",
        "Sebsibe H/mariam",
      ],
      description: "Paper on Speech Recognition for Tigrinya language Using Deep Neural Network Approach",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/W19-3603/",
    }  ],
      year: "2019",
      content: "Paper",
    },
    {
      id: 4,
      title: "TIGQA}: An Expert-Annotated Question-Answering Dataset in Tigrinya",
      creator: [
        "Hailay Kidu Teklehaymanot",
        "Dren Fazlija",
        "Niloy Ganguly",
        "Gourab Kumar Patro",
        "Wolfgang Nejdl",
      ],
      description: "Paper on TIGQA}: An Expert-Annotated Question-Answering Dataset in Tigrinya",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2024.lrec-main.1404/",
    }  ],
      year: "2024",
      content: "Paper",
    },
    {
      id: 5,
      title: "Question-Answering in a Low-resourced Language: Benchmark Dataset and Models for Tigrinya",
      creator: [
        "Fitsum Gaim",
        "Wonsuk Yang",
        "Hancheol Park",
        "Jong Park",
      ],
      description: "Paper on Question-Answering in a Low-resourced Language: Benchmark Dataset and Models for Tigrinya",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2023.acl-long.661/",
    }  ],
      year: "2023",
      content: "Paper",
    },
    {
      id: 6,
      title: "Tigrinya Automatic Speech recognition with Morpheme based recognition units",
      creator: [
        "Hafte Abera",
        "Sebsibe Hailemariam",
      ],
      description: "Paper on Tigrinya Automatic Speech recognition with Morpheme based recognition units",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2020.winlp-1.12/",
    }  ],
      year: "2020",
      content: "Paper",
    },
    {
      id: 7,
      title: "Speech Recognition for Tigrinya language Using Deep Neural Network Approach",
      creator: [
        "Hafte Abera",
        "Sebsibe H/mariam",
      ],
      description: "Paper on Speech Recognition for Tigrinya language Using Deep Neural Network Approach",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/W19-3603/",
    }  ],
      year: "2019",
      content: "Paper",
    },
    {
      id: 8,
      title: "Design of a Tigrinya Language Speech Corpus for Speech Recognition",
      creator: [
        "Hafte Abera",
        "Sebsibe H/Mariam",
      ],
      description: "Paper on Design of a Tigrinya Language Speech Corpus for Speech Recognition",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/W18-3811/",
    }  ],
      year: "2018",
      content: "Paper",
    },
    {
      id: 9,
      title: "Parser combinators for Tigrinya and {O}romo morphology",
      creator: [
        "Patrick Littell",
        "Tom McCoy",
        "Na-Rae Han",
        "Shruti Rijhwani",
        "Zaid Sheikh",
        "David Mortensen",
        "Teruko Mitamura",
        "Lori Levin",
      ],
      description: "Paper on Parser combinators for Tigrinya and {O}romo morphology",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/L18-1611/",
    }  ],
      year: "2018",
      content: "Paper",
    },
    {
      id: 10,
      title: "Stemming Tigrinya Words for Information Retrieval",
      creator: [
        "Omer Osman",
        "Yoshiki Mikami",
      ],
      description: "Paper on Stemming Tigrinya Words for Information Retrieval",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/C12-3043/",
    }  ],
      year: "2012",
      content: "Paper",
    },
    {
      id: 11,
      title: "Amharic-{E}nglish Speech Translation in Tourism Domain",
      creator: [
        "Michael Melese",
        "Laurent Besacier",
        "Million Meshesha",
      ],
      description: "Paper on Amharic-{E}nglish Speech Translation in Tourism Domain",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/W17-4608/",
    }  ],
      year: "2017",
      content: "Paper",
    },
    {
      id: 12,
      title: "Amharic Part-of-Speech Tagger for Factored Language Modeling",
      creator: [
        "Martha Yifiru Tachbelie",
        "Wolfgang Menzel",
      ],
      description: "Paper on Amharic Part-of-Speech Tagger for Factored Language Modeling",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/R09-1077/",
    }  ],
      year: "2009",
      content: "Paper",
    },
    {
      id: 13,
      title: "An Amharic Stemmer : Reducing Words to their Citation Forms",
      creator: [
        "Atelach Alemu Argaw",
        "Lars Asker",
      ],
      description: "Paper on An Amharic Stemmer : Reducing Words to their Citation Forms",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/W07-0814/",
    }  ],
      year: "2007",
      content: "Paper",
    },
    {
      id: 14,
      title: "Gender Bias Evaluation in Machine Translation for Amharic, Tigrigna, and Afaan Oromoo",
      creator: [
        "Walelign Sewunetie",
        "Atnafu Tonja",
        "Tadesse Belay",
        "Hellina Hailu Nigatu",
        "Gashaw Gebremeskel",
        "Zewdie Mossie",
        "Hussien Seid",
        "Seid Yimam",
      ],
      description: "Paper on Gender Bias Evaluation in Machine Translation for Amharic, Tigrigna, and Afaan Oromoo",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2024.gitt-1.1/",
    }  ],
      year: "2024",
      content: "Paper",
    },
    {
      id: 15,
      title: "Error Analysis of Multilingual Language Models in Machine Translation: A Case Study of {E}nglish-Amharic Translation",
      creator: [
        "Hizkiel Mitiku Alemayehu",
        "Hamada M Zahera",
        "Axel-Cyrille Ngonga Ngomo",
      ],
      description: "Paper on Error Analysis of Multilingual Language Models in Machine Translation: A Case Study of {E}nglish-Amharic Translation",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2024.emnlp-main.1102/",
    }  ],
      year: "2024",
      content: "Paper",
    },
    {
      id: 16,
      title: "Exploring Amharic Hate Speech Data Collection and Classification Approaches",
      creator: [
        "Abinew Ali Ayele",
        "Seid Muhie Yimam",
        "Tadesse Destaw Belay",
        "Tesfa Asfaw",
        "Chris Biemann",
      ],
      description: "Paper on Exploring Amharic Hate Speech Data Collection and Classification Approaches",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2023.ranlp-1.6/",
    }  ],
      year: "2023",
      content: "Paper",
    },
    {
      id: 17,
      title: "Question Answering Classification for Amharic Social Media Community Based Questions",
      creator: [
        "Tadesse Destaw Belay",
        "Seid Muhie Yimam",
        "Abinew Ayele",
        "Chris Biemann",
      ],
      description: "Paper on Question Answering Classification for Amharic Social Media Community Based Questions",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2022.sigul-1.18/",
    }  ],
      year: "2022",
      content: "Paper",
    },
    {
      id: 18,
      title: "Extended Parallel Corpus for Amharic-{E}nglish Machine Translation",
      creator: [
        "Andargachew Mekonnen Gezmu",
        "Andreas N{\"u}rnberger",
        "Tesfaye Bayu Bati",
      ],
      description: "Paper on Extended Parallel Corpus for Amharic-{E}nglish Machine Translation",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2022.lrec-1.716/",
    }  ],
      year: "2022",
      content: "Paper",
    },
    {
      id: 19,
      title: "The Development of Pre-processing Tools and Pre-trained Embedding Models for Amharic",
      creator: [
        "Tadesse Destaw Belay",
        "Abinew Ayele",
        "Seid Muhie Yimam",
      ],
      description: "Paper on The Development of Pre-processing Tools and Pre-trained Embedding Models for Amharic",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2021.winlp-1.5/",
    }  ],
      year: "2021",
      content: "Paper",
    },
    {
      id: 20,
      title: "Corpus based Amharic sentiment lexicon generation",
      creator: [
        "Girma Neshir Alemneh",
        "Andreas Rauber",
        "Solomon Atnafu",
      ],
      description: "Paper on Corpus based Amharic sentiment lexicon generation",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2020.winlp-1.1/",
    }  ],
      year: "2020",
      content: "Paper",
    },
    {
      id: 21,
      title: "Negation handling for Amharic sentiment classification",
      creator: [
        "Girma Neshir Alemneh",
        "Andreas Rauber",
        "Solomon Atnafu",
      ],
      description: "Paper on Negation handling for Amharic sentiment classification",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2020.winlp-1.2/",
    }  ],
      year: "2020",
      content: "Paper",
    },
    {
      id: 22,
      title: "Embedding Oriented Adaptable Semantic Annotation Framework for Amharic Web Documents",
      creator: [
        "Kidane Woldemariyam",
        "Dr. Fekade Getahun",
      ],
      description: "Paper on Embedding Oriented Adaptable Semantic Annotation Framework for Amharic Web Documents",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2020.winlp-1.3/",
    }  ],
      year: "2020",
      content: "Paper",
    },
    {
      id: 23,
      title: "Similarity and Farness Based Bidirectional Neural Co-Attention for Amharic Natural Language Inference",
      creator: [
        "Abebawu Eshetu",
        "Getenesh Teshome",
        "Ribka Alemayehu",
      ],
      description: "Paper on Similarity and Farness Based Bidirectional Neural Co-Attention for Amharic Natural Language Inference",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2020.winlp-1.4/",
    }  ],
      year: "2020",
      content: "Paper",
    },
    {
      id: 24,
      title: "Large Vocabulary Read Speech Corpora for Four {E}thiopian Languages: Amharic, Tigrigna, {O}romo, and {W}olaytta",
      creator: [
        "Solomon Teferra Abate",
        "Martha Yifiru Tachbelie",
        "Michael Melese",
        "Hafte Abera",
        "Tewodros Gebreselassie",
        "Wondwossen Mulugeta",
        "Yaregal Assabie",
        "Million Meshesha Beyene",
        "Solomon Atinafu",
        "Binyam Ephrem Seyoum",
      ],
      description: "Paper on Large Vocabulary Read Speech Corpora for Four {E}thiopian Languages: Amharic, Tigrigna, {O}romo, and {W}olaytta",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2020.winlp-1.5/",
    }  ],
      year: "2020",
      content: "Paper",
    },
    {
      id: 25,
      title: "Transfer Learning for Less-Resourced {S}emitic Languages Speech Recognition: the Case of Amharic",
      creator: [
        "Yonas Woldemariam",
      ],
      description: "Paper on Transfer Learning for Less-Resourced {S}emitic Languages Speech Recognition: the Case of Amharic",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2020.sltu-1.9/",
    }  ],
      year: "2020",
      content: "Paper",
    },
    {
      id: 26,
      title: "Adapting Language Specific Components of Cross-Media Analysis Frameworks to Less-Resourced Languages: the Case of Amharic",
      creator: [
        "Yonas Woldemariam",
        "Adam Dahlgren",
      ],
      description: "Paper on Adapting Language Specific Components of Cross-Media Analysis Frameworks to Less-Resourced Languages: the Case of Amharic",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2020.sltu-1.42/",
    }  ],
      year: "2020",
      content: "Paper",
    },
    {
      id: 27,
      title: "Comparing Neural Network Parsers for a Less-resourced and Morphologically-rich Language: Amharic Dependency Parser",
      creator: [
        "Binyam Ephrem Seyoum",
        "Yusuke Miyao",
        "Baye Yimam Mekonnen",
      ],
      description: "Paper on Comparing Neural Network Parsers for a Less-resourced and Morphologically-rich Language: Amharic Dependency Parser",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2020.rail-1.5/",
    }  ],
      year: "2020",
      content: "Paper",
    },
    {
      id: 28,
      title: "Event Extraction from Unstructured Amharic Text",
      creator: [
        "Ephrem Tadesse",
        "Rosa Tsegaye",
        "Kuulaa Qaqqabaa",
      ],
      description: "Paper on Event Extraction from Unstructured Amharic Text",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2020.lrec-1.258/",
    }  ],
      year: "2020",
      content: "Paper",
    },
    {
      id: 29,
      title: "Exploring Amharic Sentiment Analysis from Social Media Texts: Building Annotation Tools and Classification Models",
      creator: [
        "Seid Muhie Yimam",
        "Hizkiel Mitiku Alemayehu",
        "Abinew Ayele",
        "Chris Biemann",
      ],
      description: "Paper on Exploring Amharic Sentiment Analysis from Social Media Texts: Building Annotation Tools and Classification Models",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2020.coling-main.91/",
    }  ],
      year: "2020",
      content: "Paper",
    },
    {
      id: 30,
      title: "Amharic Word Sequence Prediction",
      creator: [
        "Nuniyat Kifle",
      ],
      description: "Paper on Amharic Word Sequence Prediction",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/W19-3607/",
    }  ],
      year: "2019",
      content: "Paper",
    },
    {
      id: 31,
      title: "Amharic Question Answering for Biography, Definition, and Description Questions",
      creator: [
        "Tilahun Abedissa Taffa",
        "Mulugeta Libsie",
      ],
      description: "Paper on Amharic Question Answering for Biography, Definition, and Description Questions",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/W19-3635/",
    }  ],
      year: "2019",
      content: "Paper",
    },
    {
      id: 32,
      title: "Language Modelling with {NMT} Query Translation for Amharic-Arabic Cross-Language Information Retrieval",
      creator: [
        "Ibrahim Gashaw",
        "H.l Shashirekha",
      ],
      description: "Paper on Language Modelling with {NMT} Query Translation for Amharic-Arabic Cross-Language Information Retrieval",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2019.icon-1.7/",
    }  ],
      year: "2019",
      content: "Paper",
    },
    {
      id: 33,
      title: "Contemporary Amharic Corpus: Automatically Morpho-Syntactically Tagged Amharic Corpus",
      creator: [
        "Andargachew Mekonnen Gezmu",
        "Binyam Ephrem Seyoum",
        "Michael Gasser",
        "Andreas N{\"u}rnberger",
      ],
      description: "Paper on Contemporary Amharic Corpus: Automatically Morpho-Syntactically Tagged Amharic Corpus",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/W18-3809/",
    }  ],
      year: "2018",
      content: "Paper",
    },
    {
      id: 34,
      title: "U}niversal {D}ependencies for Amharic",
      creator: [
        "Binyam Ephrem Seyoum",
        "Yusuke Miyao",
        "Baye Yimam Mekonnen",
      ],
      description: "Paper on U}niversal {D}ependencies for Amharic",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/L18-1350/",
    }  ],
      year: "2018",
      content: "Paper",
    },
    {
      id: 35,
      title: "Machine Learning Approaches for Amharic Parts-of-speech Tagging",
      creator: [
        "Ibrahim Gashaw",
        "H. L. Shashirekha",
      ],
      description: "Paper on Machine Learning Approaches for Amharic Parts-of-speech Tagging",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2018.icon-1.9/",
    }  ],
      year: "2018",
      content: "Paper",
    },
    {
      id: 36,
      title: "The similarity and Mutual Intelligibility between Amharic and Tigrigna Varieties",
      creator: [
        "Tekabe Legesse Feleke",
      ],
      description: "Paper on The similarity and Mutual Intelligibility between Amharic and Tigrigna Varieties",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/W17-1206/",
    }  ],
      year: "2017",
      content: "Paper",
    },
    {
      id: 37,
      title: "Automatic Construction of Amharic Semantic Networks from Unstructured Text Using Amharic {W}ord{N}et",
      creator: [
        "Alelgn Tefera",
        "Yaregal Assabie",
      ],
      description: "Paper on Automatic Construction of Amharic Semantic Networks from Unstructured Text Using Amharic {W}ord{N}et",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/W14-0123/",
    }  ],
      year: "2014",
      content: "Paper",
    },
    {
      id: 38,
      title: "Development of Amharic Grammar Checker Using Morphological Features of Words and N-Gram Based Probabilistic Methods",
      creator: [
        "Aynadis Temesgen",
        "Yaregal Assabie",
      ],
      description: "Paper on Development of Amharic Grammar Checker Using Morphological Features of Words and N-Gram Based Probabilistic Methods",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/W13-5712/",
    }  ],
      year: "2013",
      content: "Paper",
    },
    {
      id: 39,
      title: "Analyse des performances de mod{\`e}les de langage sub-lexicale pour des langues peu-dot{\'e}es {\`a} morphologie riche (Performance analysis of sub-word language modeling for under-resourced languages with rich morphology: case study on {S}wahili and Amharic) [in {F}rench]",
      creator: [
        "Hadrien Gelas",
        "Solomon Teferra Abate",
        "Laurent Besacier",
        "Fran{\c{c}}ois Pellegrino",
      ],
      description: "Paper on Analyse des performances de mod{\`e}les de langage sub-lexicale pour des langues peu-dot{\'e}es {\`a} morphologie riche (Performance analysis of sub-word language modeling for under-resourced languages with rich morphology: case study on {S}wahili and Amharic) [in {F}rench]",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/W12-1305/",
    }  ],
      year: "2012",
      content: "Paper",
    },
    {
      id: 40,
      title: "Development of an Amharic Text-to-Speech System Using Cepstral Method",
      creator: [
        "Tadesse Anberbir",
        "Tomio Takara",
      ],
      description: "Paper on Development of an Amharic Text-to-Speech System Using Cepstral Method",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/W09-0707/",
    }  ],
      year: "2009",
      content: "Paper",
    },
    {
      id: 41,
      title: "Methods for Amharic Part-of-Speech Tagging",
      creator: [
        "Bj{\"o}rn Gamb{\"a}ck",
        "Fredrik Olsson",
        "Atelach Alemu Argaw",
        "Lars Asker",
      ],
      description: "Paper on Methods for Amharic Part-of-Speech Tagging",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/W09-0715/",
    }  ],
      year: "2009",
      content: "Paper",
    },
    {
      id: 42,
      title: "Amharic Part-of-Speech Tagger for Factored Language Modeling",
      creator: [
        "Martha Yifiru Tachbelie",
        "Wolfgang Menzel",
      ],
      description: "Paper on Amharic Part-of-Speech Tagger for Factored Language Modeling",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/R09-1077/",
    }  ],
      year: "2009",
      content: "Paper",
    },
    {
      id: 43,
      title: "Syllable-Based Speech Recognition for Amharic",
      creator: [
        "Solomon Teferra Abate",
        "Wolfgang Menzel",
      ],
      description: "Paper on Syllable-Based Speech Recognition for Amharic",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/W07-0805/",
    }  ],
      year: "2007",
      content: "Paper",
    },
    {
      id: 44,
      title: "An Amharic Stemmer : Reducing Words to their Citation Forms",
      creator: [
        "Atelach Alemu Argaw",
        "Lars Asker",
      ],
      description: "Paper on An Amharic Stemmer : Reducing Words to their Citation Forms",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/W07-0814/",
    }  ],
      year: "2007",
      content: "Paper",
    },
    {
      id: 45,
      title: "Data-driven Amharic-{E}nglish Bilingual Lexicon Acquisition",
      creator: [
        "Saba Amsalu",
      ],
      description: "Paper on Data-driven Amharic-{E}nglish Bilingual Lexicon Acquisition",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/L06-1413/",
    }  ],
      year: "2006",
      content: "Paper",
    },
    {
      id: 46,
      title: "Experimental detection of vowel pronunciation variants in Amharic",
      creator: [
        "Thomas Pellegrini",
        "Lori Lamel",
      ],
      description: "Paper on Experimental detection of vowel pronunciation variants in Amharic",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/L06-1434/",
    }  ],
      year: "2006",
      content: "Paper",
    },
    {
      id: 47,
      title: "Part of Speech Tagging for Amharic using Conditional Random Fields",
      creator: [
        "Sisay Fissaha Adafre",
      ],
      description: "Paper on Part of Speech Tagging for Amharic using Conditional Random Fields",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/W05-0707/",
    }  ],
      year: "2005",
      content: "Paper",
    },
    {
      id: 48,
      title: "Classifying Amharic News Text Using Self-Organizing Maps",
      creator: [
        "Samuel Eyassu",
        "Bj{\"o}rn Gamb{\"a}ck",
      ],
      description: "Paper on Classifying Amharic News Text Using Self-Organizing Maps",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/W05-0710/",
    }  ],
      year: "2005",
      content: "Paper",
    },
    {
      id: 49,
      title: "Formal analysis of some aspects of Amharic noun phrases",
      creator: [
        "Sisay Fissaha Adafre",
      ],
      description: "Paper on Formal analysis of some aspects of Amharic noun phrases",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2004.eamt-1.6/",
    }  ],
      year: "2004",
      content: "Paper",
    },
    {
      id: 50,
      title: "Application of corpus-based techniques to Amharic texts",
      creator: [
        "Sisay Fissaha",
        "Johann Haller",
      ],
      description: "Paper on Application of corpus-based techniques to Amharic texts",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2003.mtsummit-semit.7/",
    }  ],
      year: "2003",
      content: "Paper",
    },
    {
      id: 51,
      title: "Cognate Detection for Historical Language Reconstruction of Proto-Sabean Languages: the Case of {G}e`ez, Tigrinya, and Amharic",
      creator: [
        "Elleni Sisay Temesgen",
        "Hellina Hailu Nigatu",
        "Fitsum Assamnew Andargie",
      ],
      description: "Paper on Cognate Detection for Historical Language Reconstruction of Proto-Sabean Languages: the Case of {G}e`ez, Tigrinya, and Amharic",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2025.coling-main.496/",
    }  ],
      year: "2025",
      content: "Paper",
    },

    {
      id: 52,
      title: "Detecting Hate Speech in Amharic Using Multimodal Analysis of Social Media Memes",
      creator: [
        "Melese Ayichlie Jigar",
        "Abinew Ali Ayele",
        "Seid Muhie Yimam",
        "Chris Biemann",
      ],
      description: "Paper on Detecting Hate Speech in Amharic Using Multimodal Analysis of Social Media Memes",
      featured: true,
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
        name: "ACL Anthology",
        link: "https://aclanthology.org/2024.trac-1.10/",
    }  ],
      year: "2024",
      content: "Paper",
    },

  
      {
        id: 0,
        title: "wav2vec2-large-xlsr-53-amharic",
        creator: [
      {
          name: "agkphysics",
          profile: "https://huggingface.co/agkphysics",
      }  ],
        link: "https://huggingface.co/agkphysics/wav2vec2-large-xlsr-53-amharic",
        paper_title: "wav2vec2-large-xlsr-53-amharic",
        downloads_total: 2534,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "tensorboard",
          "safetensors",
          "wav2vec2",
          "automatic-speech-recognition",
          "speech",
          "am",
          "license:mit",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 1,
        title: "bert-base-multilingual-cased-finetuned-amharic",
        creator: [
      {
          name: "Davlan",
          profile: "https://huggingface.co/Davlan",
      }  ],
        link: "https://huggingface.co/Davlan/bert-base-multilingual-cased-finetuned-amharic",
        paper_title: "bert-base-multilingual-cased-finetuned-amharic",
        downloads_total: 190,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "bert",
          "fill-mask",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 2,
        title: "amharic_summarization_mt5-GGUF",
        creator: [
      {
          name: "mradermacher",
          profile: "https://huggingface.co/mradermacher",
      }  ],
        link: "https://huggingface.co/mradermacher/amharic_summarization_mt5-GGUF",
        paper_title: "amharic_summarization_mt5-GGUF",
        downloads_total: 157,
      
        last_modified: "None",
        tags: [
          "transformers",
          "gguf",
          "am",
          "base_model:mogesa/amharic_summarization_mt5",
          "base_model:quantized:mogesa/amharic_summarization_mt5",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 3,
        title: "Llama-3.2-400M-Amharic",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/Llama-3.2-400M-Amharic",
        paper_title: "Llama-3.2-400M-Amharic",
        downloads_total: 151,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "llama",
          "text-generation",
          "am",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 4,
        title: "bert-medium-amharic",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/bert-medium-amharic",
        paper_title: "bert-medium-amharic",
        downloads_total: 138,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "bert",
          "fill-mask",
          "am",
          "dataset:oscar",
          "dataset:mc4",
          "dataset:rasyosef/amharic-sentences-corpus",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 5,
        title: "bert-amharic-text-embedding-medium",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/bert-amharic-text-embedding-medium",
        paper_title: "bert-amharic-text-embedding-medium",
        downloads_total: 106,
      
        last_modified: "None",
        tags: [
          "sentence-transformers",
          "safetensors",
          "bert",
          "sentence-similarity",
          "feature-extraction",
          "generated_from_trainer",
          "dataset_size:28046",
          "loss:MatryoshkaLoss",
          "loss:MultipleNegativesRankingLoss",
          "am",
          "arxiv:1908.10084",
          "arxiv:2205.13147",
          "arxiv:1705.00652",
          "base_model:yosefw/bert-medium-am-embed",
          "base_model:finetune:yosefw/bert-medium-am-embed",
          "license:apache-2.0",
          "model-index",
          "autotrain_compatible",
          "text-embeddings-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 6,
        title: "bert-medium-amharic-finetuned-sentiment",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/bert-medium-amharic-finetuned-sentiment",
        paper_title: "bert-medium-amharic-finetuned-sentiment",
        downloads_total: 104,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "bert",
          "text-classification",
          "am",
          "dataset:rasyosef/amharic-sentiment",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 7,
        title: "AmharicNewsCharacterNormalized-GGUF",
        creator: [
      {
          name: "mradermacher",
          profile: "https://huggingface.co/mradermacher",
      }  ],
        link: "https://huggingface.co/mradermacher/AmharicNewsCharacterNormalized-GGUF",
        paper_title: "AmharicNewsCharacterNormalized-GGUF",
        downloads_total: 104,
      
        last_modified: "None",
        tags: [
          "transformers",
          "gguf",
          "generated_from_trainer",
          "en",
          "base_model:akiseid/AmharicNewsCharacterNormalized",
          "base_model:quantized:akiseid/AmharicNewsCharacterNormalized",
          "license:mit",
          "endpoints_compatible",
          "region:us",
          "feature-extraction",
        ],
        type: "model",
      },
      {
        id: 8,
        title: "xlm-roberta-base-finetuned-amharic",
        creator: [
      {
          name: "Davlan",
          profile: "https://huggingface.co/Davlan",
      }  ],
        link: "https://huggingface.co/Davlan/xlm-roberta-base-finetuned-amharic",
        paper_title: "xlm-roberta-base-finetuned-amharic",
        downloads_total: 81,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "xlm-roberta",
          "fill-mask",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 9,
        title: "asr-wav2vec2-dvoice-amharic",
        creator: [
      {
          name: "speechbrain",
          profile: "https://huggingface.co/speechbrain",
      }  ],
        link: "https://huggingface.co/speechbrain/asr-wav2vec2-dvoice-amharic",
        paper_title: "asr-wav2vec2-dvoice-amharic",
        downloads_total: 74,
      
        last_modified: "None",
        tags: [
          "speechbrain",
          "wav2vec2",
          "CTC",
          "pytorch",
          "Transformer",
          "automatic-speech-recognition",
          "dar",
          "dataset:Dvoice",
          "license:apache-2.0",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 10,
        title: "wav2vec2-large-xlsr-amharic-healthcare",
        creator: [
      {
          name: "tinkvu",
          profile: "https://huggingface.co/tinkvu",
      }  ],
        link: "https://huggingface.co/tinkvu/wav2vec2-large-xlsr-amharic-healthcare",
        paper_title: "wav2vec2-large-xlsr-amharic-healthcare",
        downloads_total: 72,
      
        last_modified: "None",
        tags: [
          "tensorboard",
          "safetensors",
          "wav2vec2",
          "am",
          "base_model:agkphysics/wav2vec2-large-xlsr-53-amharic",
          "base_model:finetune:agkphysics/wav2vec2-large-xlsr-53-amharic",
          "license:apache-2.0",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 11,
        title: "Amharic-llama-for-agriculture-chat-bot-v-1-GGUF",
        creator: [
      {
          name: "mradermacher",
          profile: "https://huggingface.co/mradermacher",
      }  ],
        link: "https://huggingface.co/mradermacher/Amharic-llama-for-agriculture-chat-bot-v-1-GGUF",
        paper_title: "Amharic-llama-for-agriculture-chat-bot-v-1-GGUF",
        downloads_total: 67,
      
        last_modified: "None",
        tags: [
          "transformers",
          "gguf",
          "en",
          "base_model:BekiTila/Amharic-llama-for-agriculture-chat-bot-v-1",
          "base_model:quantized:BekiTila/Amharic-llama-for-agriculture-chat-bot-v-1",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 12,
        title: "llama-2-7b-Amharic-pretrained-GGUF",
        creator: [
      {
          name: "mradermacher",
          profile: "https://huggingface.co/mradermacher",
      }  ],
        link: "https://huggingface.co/mradermacher/llama-2-7b-Amharic-pretrained-GGUF",
        paper_title: "llama-2-7b-Amharic-pretrained-GGUF",
        downloads_total: 62,
      
        last_modified: "None",
        tags: [
          "transformers",
          "gguf",
          "en",
          "base_model:AbelBekele/llama-2-7b-Amharic-pretrained",
          "base_model:quantized:AbelBekele/llama-2-7b-Amharic-pretrained",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 13,
        title: "amharic-hate-speech-detection-mBERT",
        creator: [
      {
          name: "amengemeda",
          profile: "https://huggingface.co/amengemeda",
      }  ],
        link: "https://huggingface.co/amengemeda/amharic-hate-speech-detection-mBERT",
        paper_title: "amharic-hate-speech-detection-mBERT",
        downloads_total: 61,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "bert",
          "text-classification",
          "Amharic",
          "hate speech",
          "sentiment analysis",
          "amh",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 14,
        title: "mt5-small-Amharic-text-summaization",
        creator: [
      {
          name: "yohannesahunm",
          profile: "https://huggingface.co/yohannesahunm",
      }  ],
        link: "https://huggingface.co/yohannesahunm/mt5-small-Amharic-text-summaization",
        paper_title: "mt5-small-Amharic-text-summaization",
        downloads_total: 58,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "mt5",
          "text2text-generation",
          "summarization",
          "generated_from_trainer",
          "base_model:google/mt5-small",
          "base_model:finetune:google/mt5-small",
          "license:apache-2.0",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 15,
        title: "whisper-finetuned-amharic",
        creator: [
      {
          name: "seyyaw",
          profile: "https://huggingface.co/seyyaw",
      }  ],
        link: "https://huggingface.co/seyyaw/whisper-finetuned-amharic",
        paper_title: "whisper-finetuned-amharic",
        downloads_total: 57,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "whisper",
          "automatic-speech-recognition",
          "generated_from_trainer",
          "base_model:openai/whisper-small",
          "base_model:finetune:openai/whisper-small",
          "license:apache-2.0",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 16,
        title: "roberta-amharic-text-embedding-medium",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/roberta-amharic-text-embedding-medium",
        paper_title: "roberta-amharic-text-embedding-medium",
        downloads_total: 56,
      
        last_modified: "None",
        tags: [
          "sentence-transformers",
          "safetensors",
          "xlm-roberta",
          "sentence-similarity",
          "feature-extraction",
          "generated_from_trainer",
          "dataset_size:28046",
          "loss:MatryoshkaLoss",
          "loss:MultipleNegativesRankingLoss",
          "am",
          "arxiv:1908.10084",
          "arxiv:2205.13147",
          "arxiv:1705.00652",
          "base_model:yosefw/roberta-medium-am-embed",
          "base_model:finetune:yosefw/roberta-medium-am-embed",
          "license:apache-2.0",
          "model-index",
          "autotrain_compatible",
          "text-embeddings-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 17,
        title: "gpt2-small-amharic",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/gpt2-small-amharic",
        paper_title: "gpt2-small-amharic",
        downloads_total: 55,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "gpt2",
          "text-generation",
          "am",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 18,
        title: "Llama-3.2-1B-Amharic-GGUF",
        creator: [
      {
          name: "mradermacher",
          profile: "https://huggingface.co/mradermacher",
      }  ],
        link: "https://huggingface.co/mradermacher/Llama-3.2-1B-Amharic-GGUF",
        paper_title: "Llama-3.2-1B-Amharic-GGUF",
        downloads_total: 49,
      
        last_modified: "None",
        tags: [
          "transformers",
          "gguf",
          "am",
          "base_model:rasyosef/Llama-3.2-1B-Amharic",
          "base_model:quantized:rasyosef/Llama-3.2-1B-Amharic",
          "endpoints_compatible",
          "region:us",
          "conversational",
        ],
        type: "model",
      },
      {
        id: 19,
        title: "amharic_text_summarization",
        creator: [
      {
          name: "yohannesahunm",
          profile: "https://huggingface.co/yohannesahunm",
      }  ],
        link: "https://huggingface.co/yohannesahunm/amharic_text_summarization",
        paper_title: "amharic_text_summarization",
        downloads_total: 48,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "mt5",
          "text2text-generation",
          "summarization",
          "generated_from_trainer",
          "base_model:google/mt5-small",
          "base_model:finetune:google/mt5-small",
          "license:apache-2.0",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 20,
        title: "Llama-3.2-1B-Amharic-Instruct-GGUF",
        creator: [
      {
          name: "mradermacher",
          profile: "https://huggingface.co/mradermacher",
      }  ],
        link: "https://huggingface.co/mradermacher/Llama-3.2-1B-Amharic-Instruct-GGUF",
        paper_title: "Llama-3.2-1B-Amharic-Instruct-GGUF",
        downloads_total: 47,
      
        last_modified: "None",
        tags: [
          "transformers",
          "gguf",
          "am",
          "base_model:rasyosef/Llama-3.2-1B-Amharic-Instruct",
          "base_model:quantized:rasyosef/Llama-3.2-1B-Amharic-Instruct",
          "endpoints_compatible",
          "region:us",
          "conversational",
        ],
        type: "model",
      },
      {
        id: 21,
        title: "llama-2-7b-Amharic-finetuned-GGUF",
        creator: [
      {
          name: "mradermacher",
          profile: "https://huggingface.co/mradermacher",
      }  ],
        link: "https://huggingface.co/mradermacher/llama-2-7b-Amharic-finetuned-GGUF",
        paper_title: "llama-2-7b-Amharic-finetuned-GGUF",
        downloads_total: 39,
      
        last_modified: "None",
        tags: [
          "transformers",
          "gguf",
          "en",
          "base_model:AbelBekele/llama-2-7b-Amharic-finetuned",
          "base_model:quantized:AbelBekele/llama-2-7b-Amharic-finetuned",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 22,
        title: "AmharicNewsNonCleaned-GGUF",
        creator: [
      {
          name: "mradermacher",
          profile: "https://huggingface.co/mradermacher",
      }  ],
        link: "https://huggingface.co/mradermacher/AmharicNewsNonCleaned-GGUF",
        paper_title: "AmharicNewsNonCleaned-GGUF",
        downloads_total: 37,
      
        last_modified: "None",
        tags: [
          "transformers",
          "gguf",
          "generated_from_trainer",
          "en",
          "base_model:akiseid/AmharicNewsNonCleaned",
          "base_model:quantized:akiseid/AmharicNewsNonCleaned",
          "license:mit",
          "endpoints_compatible",
          "region:us",
          "feature-extraction",
        ],
        type: "model",
      },
      {
        id: 23,
        title: "roberta-amharic-reranker-medium",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/roberta-amharic-reranker-medium",
        paper_title: "roberta-amharic-reranker-medium",
        downloads_total: 36,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "xlm-roberta",
          "text-classification",
          "cross-encoder",
          "sentence-transformers",
          "text-ranking",
          "am",
          "base_model:rasyosef/roberta-medium-amharic",
          "base_model:finetune:rasyosef/roberta-medium-amharic",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 24,
        title: "bert-small-amharic",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/bert-small-amharic",
        paper_title: "bert-small-amharic",
        downloads_total: 33,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "bert",
          "fill-mask",
          "am",
          "dataset:oscar",
          "dataset:mc4",
          "dataset:rasyosef/amharic-sentences-corpus",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 25,
        title: "amharic_text_summarization",
        creator: [
      {
          name: "yohannes-07",
          profile: "https://huggingface.co/yohannes-07",
      }  ],
        link: "https://huggingface.co/yohannes-07/amharic_text_summarization",
        paper_title: "amharic_text_summarization",
        downloads_total: 32,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "mt5",
          "text2text-generation",
          "summarization",
          "generated_from_trainer",
          "base_model:google/mt5-small",
          "base_model:finetune:google/mt5-small",
          "license:apache-2.0",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 26,
        title: "hate-speech-detection-using-amharic-language",
        creator: [
      {
          name: "devaprobs",
          profile: "https://huggingface.co/devaprobs",
      }  ],
        link: "https://huggingface.co/devaprobs/hate-speech-detection-using-amharic-language",
        paper_title: "hate-speech-detection-using-amharic-language",
        downloads_total: 31,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "bert",
          "text-classification",
          "am",
          "license:mit",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 27,
        title: "Amharic-News-Classification-GGUF",
        creator: [
      {
          name: "mradermacher",
          profile: "https://huggingface.co/mradermacher",
      }  ],
        link: "https://huggingface.co/mradermacher/Amharic-News-Classification-GGUF",
        paper_title: "Amharic-News-Classification-GGUF",
        downloads_total: 27,
      
        last_modified: "None",
        tags: [
          "transformers",
          "gguf",
          "generated_from_trainer",
          "en",
          "base_model:akiseid/Amharic-News-Classification",
          "base_model:quantized:akiseid/Amharic-News-Classification",
          "license:mit",
          "endpoints_compatible",
          "region:us",
          "feature-extraction",
        ],
        type: "model",
      },
      {
        id: 28,
        title: "xlm-roberta-base-finetuned-amharic-finetuned-ner-amharic",
        creator: [
      {
          name: "mbeukman",
          profile: "https://huggingface.co/mbeukman",
      }  ],
        link: "https://huggingface.co/mbeukman/xlm-roberta-base-finetuned-amharic-finetuned-ner-amharic",
        paper_title: "xlm-roberta-base-finetuned-amharic-finetuned-ner-amharic",
        downloads_total: 25,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "xlm-roberta",
          "token-classification",
          "NER",
          "am",
          "dataset:masakhaner",
          "arxiv:2103.11811",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 29,
        title: "Llama-3.2-400M-Amharic-Instruct",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/Llama-3.2-400M-Amharic-Instruct",
        paper_title: "Llama-3.2-400M-Amharic-Instruct",
        downloads_total: 25,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "llama",
          "text-generation",
          "conversational",
          "am",
          "base_model:rasyosef/Llama-3.2-400M-Amharic",
          "base_model:finetune:rasyosef/Llama-3.2-400M-Amharic",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 30,
        title: "bert-small-amharic-32k-bs256-512",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/bert-small-amharic-32k-bs256-512",
        paper_title: "bert-small-amharic-32k-bs256-512",
        downloads_total: 23,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "bert",
          "fill-mask",
          "generated_from_trainer",
          "base_model:yosefw/bert-small-amharic-32k-bs256",
          "base_model:finetune:yosefw/bert-small-amharic-32k-bs256",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 31,
        title: "wav2vec2-xlsr-300-amharic-dataset-100hr-v1",
        creator: [
      {
          name: "KYAGABA",
          profile: "https://huggingface.co/KYAGABA",
      }  ],
        link: "https://huggingface.co/KYAGABA/wav2vec2-xlsr-300-amharic-dataset-100hr-v1",
        paper_title: "wav2vec2-xlsr-300-amharic-dataset-100hr-v1",
        downloads_total: 22,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "wav2vec2",
          "automatic-speech-recognition",
          "arxiv:1910.09700",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 32,
        title: "Llama-3.2-180M-Amharic-Instruct",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/Llama-3.2-180M-Amharic-Instruct",
        paper_title: "Llama-3.2-180M-Amharic-Instruct",
        downloads_total: 22,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "llama",
          "text-generation",
          "conversational",
          "am",
          "base_model:rasyosef/Llama-3.2-180M-Amharic",
          "base_model:finetune:rasyosef/Llama-3.2-180M-Amharic",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 33,
        title: "roberta-base-amharic",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/roberta-base-amharic",
        paper_title: "roberta-base-amharic",
        downloads_total: 21,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "xlm-roberta",
          "fill-mask",
          "am",
          "dataset:oscar",
          "dataset:mc4",
          "dataset:rasyosef/amharic-sentences-corpus",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 34,
        title: "speecht5_tts_amharic",
        creator: [
      {
          name: "AddisuSeteye",
          profile: "https://huggingface.co/AddisuSeteye",
      }  ],
        link: "https://huggingface.co/AddisuSeteye/speecht5_tts_amharic",
        paper_title: "speecht5_tts_amharic",
        downloads_total: 20,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "speecht5",
          "text-to-audio",
          "tags",
          "generated_from_trainer",
          "am",
          "dataset:facebook/voxpopuli",
          "base_model:microsoft/speecht5_tts",
          "base_model:finetune:microsoft/speecht5_tts",
          "license:mit",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 35,
        title: "gpt2-medium-amharic-28k-512",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/gpt2-medium-amharic-28k-512",
        paper_title: "gpt2-medium-amharic-28k-512",
        downloads_total: 20,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "gpt2",
          "text-generation",
          "am",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 36,
        title: "roberta-amharic-reranker-medium-v5",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/roberta-amharic-reranker-medium-v5",
        paper_title: "roberta-amharic-reranker-medium-v5",
        downloads_total: 19,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "xlm-roberta",
          "text-classification",
          "cross-encoder",
          "arxiv:1910.09700",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 37,
        title: "roberta-amharic-reranker-medium-v6",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/roberta-amharic-reranker-medium-v6",
        paper_title: "roberta-amharic-reranker-medium-v6",
        downloads_total: 19,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "xlm-roberta",
          "text-classification",
          "cross-encoder",
          "arxiv:1910.09700",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 38,
        title: "wav2vec2-large-xls-r-300m-amharic-demo-colab",
        creator: [
      {
          name: "DipsankarSinha",
          profile: "https://huggingface.co/DipsankarSinha",
      }  ],
        link: "https://huggingface.co/DipsankarSinha/wav2vec2-large-xls-r-300m-amharic-demo-colab",
        paper_title: "wav2vec2-large-xls-r-300m-amharic-demo-colab",
        downloads_total: 18,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "wav2vec2",
          "automatic-speech-recognition",
          "generated_from_trainer",
          "dataset:common_voice_16_1",
          "base_model:facebook/wav2vec2-xls-r-300m",
          "base_model:finetune:facebook/wav2vec2-xls-r-300m",
          "license:apache-2.0",
          "model-index",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 39,
        title: "Llama-3.2-400M-Amharic-Instruct-Poems-Stories-Wikipedia",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/Llama-3.2-400M-Amharic-Instruct-Poems-Stories-Wikipedia",
        paper_title: "Llama-3.2-400M-Amharic-Instruct-Poems-Stories-Wikipedia",
        downloads_total: 16,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "llama",
          "text-generation",
          "conversational",
          "am",
          "base_model:rasyosef/Llama-3.2-400M-Amharic",
          "base_model:finetune:rasyosef/Llama-3.2-400M-Amharic",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 40,
        title: "roberta-amharic-embed-medium",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/roberta-amharic-embed-medium",
        paper_title: "roberta-amharic-embed-medium",
        downloads_total: 15,
      
        last_modified: "None",
        tags: [
          "sentence-transformers",
          "safetensors",
          "xlm-roberta",
          "sentence-similarity",
          "feature-extraction",
          "generated_from_trainer",
          "dataset_size:54900",
          "loss:MatryoshkaLoss",
          "loss:MultipleNegativesRankingLoss",
          "en",
          "arxiv:1908.10084",
          "arxiv:2205.13147",
          "arxiv:1705.00652",
          "base_model:rasyosef/roberta-medium-amharic",
          "base_model:finetune:rasyosef/roberta-medium-amharic",
          "license:apache-2.0",
          "model-index",
          "autotrain_compatible",
          "text-embeddings-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 41,
        title: "xlm-roberta-base-finetuned-amharic-finetuned-ner-swahili",
        creator: [
      {
          name: "mbeukman",
          profile: "https://huggingface.co/mbeukman",
      }  ],
        link: "https://huggingface.co/mbeukman/xlm-roberta-base-finetuned-amharic-finetuned-ner-swahili",
        paper_title: "xlm-roberta-base-finetuned-amharic-finetuned-ner-swahili",
        downloads_total: 14,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "xlm-roberta",
          "token-classification",
          "NER",
          "sw",
          "dataset:masakhaner",
          "arxiv:2103.11811",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 42,
        title: "AmharicRoBERTa",
        creator: [
      {
          name: "israel",
          profile: "https://huggingface.co/israel",
      }  ],
        link: "https://huggingface.co/israel/AmharicRoBERTa",
        paper_title: "AmharicRoBERTa",
        downloads_total: 14,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "roberta",
          "fill-mask",
          "Amharic",
          "masked language model",
          "language model",
          "Ethiopia",
          "amh",
          "license:cc-by-4.0",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 43,
        title: "roberta-amharic-text-embedding-base",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/roberta-amharic-text-embedding-base",
        paper_title: "roberta-amharic-text-embedding-base",
        downloads_total: 13,
      
        last_modified: "None",
        tags: [
          "sentence-transformers",
          "safetensors",
          "xlm-roberta",
          "sentence-similarity",
          "feature-extraction",
          "generated_from_trainer",
          "dataset_size:28046",
          "loss:MatryoshkaLoss",
          "loss:MultipleNegativesRankingLoss",
          "am",
          "arxiv:1908.10084",
          "arxiv:2205.13147",
          "arxiv:1705.00652",
          "base_model:yosefw/roberta-base-am-embed",
          "base_model:finetune:yosefw/roberta-base-am-embed",
          "license:apache-2.0",
          "model-index",
          "autotrain_compatible",
          "text-embeddings-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 44,
        title: "English-Amharic-MT-UnNorm",
        creator: [
      {
          name: "Tadesse",
          profile: "https://huggingface.co/Tadesse",
      }  ],
        link: "https://huggingface.co/Tadesse/English-Amharic-MT-UnNorm",
        paper_title: "English-Amharic-MT-UnNorm",
        downloads_total: 13,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 45,
        title: "wav2vec2-xlsr-amharic-speech-emotion-recognition-arabic-model",
        creator: [
      {
          name: "abuchane",
          profile: "https://huggingface.co/abuchane",
      }  ],
        link: "https://huggingface.co/abuchane/wav2vec2-xlsr-amharic-speech-emotion-recognition-arabic-model",
        paper_title: "wav2vec2-xlsr-amharic-speech-emotion-recognition-arabic-model",
        downloads_total: 12,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "wav2vec2",
          "generated_from_trainer",
          "license:apache-2.0",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 46,
        title: "asr-amharic-phoneme-based-37-6",
        creator: [
      {
          name: "Samuael",
          profile: "https://huggingface.co/Samuael",
      }  ],
        link: "https://huggingface.co/Samuael/asr-amharic-phoneme-based-37-6",
        paper_title: "asr-amharic-phoneme-based-37-6",
        downloads_total: 12,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "wav2vec2",
          "automatic-speech-recognition",
          "generated_from_trainer",
          "base_model:Samuael/asr-amharic-phoneme-based-37-6",
          "base_model:finetune:Samuael/asr-amharic-phoneme-based-37-6",
          "license:apache-2.0",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 47,
        title: "AmharicNewsNonCleanedSmall-GGUF",
        creator: [
      {
          name: "mradermacher",
          profile: "https://huggingface.co/mradermacher",
      }  ],
        link: "https://huggingface.co/mradermacher/AmharicNewsNonCleanedSmall-GGUF",
        paper_title: "AmharicNewsNonCleanedSmall-GGUF",
        downloads_total: 12,
      
        last_modified: "None",
        tags: [
          "transformers",
          "gguf",
          "generated_from_trainer",
          "en",
          "base_model:akiseid/AmharicNewsNonCleanedSmall",
          "base_model:quantized:akiseid/AmharicNewsNonCleanedSmall",
          "license:mit",
          "endpoints_compatible",
          "region:us",
          "feature-extraction",
        ],
        type: "model",
      },
      {
        id: 48,
        title: "AmharicXLMRoberta",
        creator: [
      {
          name: "israel",
          profile: "https://huggingface.co/israel",
      }  ],
        link: "https://huggingface.co/israel/AmharicXLMRoberta",
        paper_title: "AmharicXLMRoberta",
        downloads_total: 11,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "xlm-roberta",
          "fill-mask",
          "Amharic",
          "masked language model",
          "language model",
          "Ethiopia",
          "amh",
          "license:cc-by-4.0",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 49,
        title: "Amharic-llama-for-agriculture-chat-bot-v0.1.gguf",
        creator: [
      {
          name: "BekiTila",
          profile: "https://huggingface.co/BekiTila",
      }  ],
        link: "https://huggingface.co/BekiTila/Amharic-llama-for-agriculture-chat-bot-v0.1.gguf",
        paper_title: "Amharic-llama-for-agriculture-chat-bot-v0.1.gguf",
        downloads_total: 11,
      
        last_modified: "None",
        tags: [
          "gguf",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 50,
        title: "amharic-hate-speech",
        creator: [
      {
          name: "uhhlt",
          profile: "https://huggingface.co/uhhlt",
      }  ],
        link: "https://huggingface.co/uhhlt/amharic-hate-speech",
        paper_title: "amharic-hate-speech",
        downloads_total: 11,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "roberta",
          "text-classification",
          "generated_from_trainer",
          "base_model:uhhlt/am-roberta",
          "base_model:finetune:uhhlt/am-roberta",
          "license:mit",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 51,
        title: "modernbert-medium-amharic-50k",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/modernbert-medium-amharic-50k",
        paper_title: "modernbert-medium-amharic-50k",
        downloads_total: 11,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "modernbert",
          "fill-mask",
          "generated_from_trainer",
          "base_model:answerdotai/ModernBERT-base",
          "base_model:finetune:answerdotai/ModernBERT-base",
          "license:apache-2.0",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 52,
        title: "xlm-roberta-large-finetuned-amharic",
        creator: [
      {
          name: "Davlan",
          profile: "https://huggingface.co/Davlan",
      }  ],
        link: "https://huggingface.co/Davlan/xlm-roberta-large-finetuned-amharic",
        paper_title: "xlm-roberta-large-finetuned-amharic",
        downloads_total: 10,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "xlm-roberta",
          "fill-mask",
          "generated_from_trainer",
          "license:mit",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 53,
        title: "bert-mini-amharic",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/bert-mini-amharic",
        paper_title: "bert-mini-amharic",
        downloads_total: 10,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "bert",
          "fill-mask",
          "am",
          "dataset:oscar",
          "dataset:mc4",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 54,
        title: "roberta-amharic-embed-base-v0",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/roberta-amharic-embed-base-v0",
        paper_title: "roberta-amharic-embed-base-v0",
        downloads_total: 10,
      
        last_modified: "None",
        tags: [
          "sentence-transformers",
          "safetensors",
          "xlm-roberta",
          "sentence-similarity",
          "feature-extraction",
          "generated_from_trainer",
          "dataset_size:40237",
          "loss:MatryoshkaLoss",
          "loss:MultipleNegativesRankingLoss",
          "en",
          "arxiv:1908.10084",
          "arxiv:2205.13147",
          "arxiv:1705.00652",
          "base_model:yosefw/roberta-base-am-embed",
          "base_model:finetune:yosefw/roberta-base-am-embed",
          "license:apache-2.0",
          "model-index",
          "autotrain_compatible",
          "text-embeddings-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 55,
        title: "modernbert-medium-amharic-32k",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/modernbert-medium-amharic-32k",
        paper_title: "modernbert-medium-amharic-32k",
        downloads_total: 10,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "modernbert",
          "fill-mask",
          "generated_from_trainer",
          "base_model:answerdotai/ModernBERT-base",
          "base_model:finetune:answerdotai/ModernBERT-base",
          "license:apache-2.0",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 56,
        title: "hubert-base-amharic-speech-emotion-recognition",
        creator: [
      {
          name: "quaja",
          profile: "https://huggingface.co/quaja",
      }  ],
        link: "https://huggingface.co/quaja/hubert-base-amharic-speech-emotion-recognition",
        paper_title: "hubert-base-amharic-speech-emotion-recognition",
        downloads_total: 9,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "hubert",
          "speech",
          "audio",
          "audio-classification",
          "am",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 57,
        title: "English-Amharic-MT-Norm_TD",
        creator: [
      {
          name: "Tadesse",
          profile: "https://huggingface.co/Tadesse",
      }  ],
        link: "https://huggingface.co/Tadesse/English-Amharic-MT-Norm_TD",
        paper_title: "English-Amharic-MT-Norm_TD",
        downloads_total: 9,
      
        last_modified: "None",
        tags: [
          "transformer",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 58,
        title: "roberta-amharic-embed-medium-v4",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/roberta-amharic-embed-medium-v4",
        paper_title: "roberta-amharic-embed-medium-v4",
        downloads_total: 9,
      
        last_modified: "None",
        tags: [
          "sentence-transformers",
          "safetensors",
          "xlm-roberta",
          "sentence-similarity",
          "feature-extraction",
          "generated_from_trainer",
          "dataset_size:62833",
          "loss:MatryoshkaLoss",
          "loss:MultipleNegativesRankingLoss",
          "en",
          "arxiv:1908.10084",
          "arxiv:2205.13147",
          "arxiv:1705.00652",
          "base_model:rasyosef/roberta-medium-amharic",
          "base_model:finetune:rasyosef/roberta-medium-amharic",
          "license:apache-2.0",
          "model-index",
          "autotrain_compatible",
          "text-embeddings-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 59,
        title: "modernbert-medium-amharic-50k-1024",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/modernbert-medium-amharic-50k-1024",
        paper_title: "modernbert-medium-amharic-50k-1024",
        downloads_total: 9,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "modernbert",
          "fill-mask",
          "generated_from_trainer",
          "base_model:yosefw/modernbert-medium-amharic-50k",
          "base_model:finetune:yosefw/modernbert-medium-amharic-50k",
          "license:apache-2.0",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 60,
        title: "dvoice-amharic",
        creator: [
      {
          name: "aioxlabs",
          profile: "https://huggingface.co/aioxlabs",
      }  ],
        link: "https://huggingface.co/aioxlabs/dvoice-amharic",
        paper_title: "dvoice-amharic",
        downloads_total: 8,
      
        last_modified: "None",
        tags: [
          "speechbrain",
          "wav2vec2",
          "CTC",
          "pytorch",
          "Transformer",
          "automatic-speech-recognition",
          "dar",
          "dataset:commonvoice",
          "license:apache-2.0",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 61,
        title: "hubert-split-data-base-amharic-speech-emotion-recognition",
        creator: [
      {
          name: "quaja",
          profile: "https://huggingface.co/quaja",
      }  ],
        link: "https://huggingface.co/quaja/hubert-split-data-base-amharic-speech-emotion-recognition",
        paper_title: "hubert-split-data-base-amharic-speech-emotion-recognition",
        downloads_total: 8,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "hubert",
          "speech",
          "audio",
          "audio-classification",
          "am",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 62,
        title: "gpt2-small-amharic-8k-128-v3",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/gpt2-small-amharic-8k-128-v3",
        paper_title: "gpt2-small-amharic-8k-128-v3",
        downloads_total: 8,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "gpt2",
          "text-generation",
          "am",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 63,
        title: "amharic-phi3-mini-pretrain-cp1-gguf",
        creator: [
      {
          name: "simonbutt",
          profile: "https://huggingface.co/simonbutt",
      }  ],
        link: "https://huggingface.co/simonbutt/amharic-phi3-mini-pretrain-cp1-gguf",
        paper_title: "amharic-phi3-mini-pretrain-cp1-gguf",
        downloads_total: 8,
      
        last_modified: "None",
        tags: [
          "transformers",
          "gguf",
          "mistral",
          "text-generation-inference",
          "unsloth",
          "en",
          "license:apache-2.0",
          "endpoints_compatible",
          "region:us",
          "conversational",
        ],
        type: "model",
      },
      {
        id: 64,
        title: "fine_tuned_whisper_amharic_hausa",
        creator: [
      {
          name: "Bedru",
          profile: "https://huggingface.co/Bedru",
      }  ],
        link: "https://huggingface.co/Bedru/fine_tuned_whisper_amharic_hausa",
        paper_title: "fine_tuned_whisper_amharic_hausa",
        downloads_total: 8,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "whisper",
          "automatic-speech-recognition",
          "generated_from_trainer",
          "base_model:openai/whisper-small",
          "base_model:finetune:openai/whisper-small",
          "license:apache-2.0",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 65,
        title: "Llama-3.2-400M-Amharic-Poems-Stories-V5",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/Llama-3.2-400M-Amharic-Poems-Stories-V5",
        paper_title: "Llama-3.2-400M-Amharic-Poems-Stories-V5",
        downloads_total: 8,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "llama",
          "text-generation",
          "trl",
          "sft",
          "generated_from_trainer",
          "conversational",
          "base_model:rasyosef/Llama-3.2-400M-Amharic",
          "base_model:finetune:rasyosef/Llama-3.2-400M-Amharic",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 66,
        title: "Roberta-amharic-news-sentence-transformer",
        creator: [
      {
          name: "mogesa",
          profile: "https://huggingface.co/mogesa",
      }  ],
        link: "https://huggingface.co/mogesa/Roberta-amharic-news-sentence-transformer",
        paper_title: "Roberta-amharic-news-sentence-transformer",
        downloads_total: 8,
      
        last_modified: "None",
        tags: [
          "sentence-transformers",
          "safetensors",
          "xlm-roberta",
          "sentence-similarity",
          "feature-extraction",
          "generated_from_trainer",
          "dataset_size:217850",
          "loss:MultipleNegativesRankingLoss",
          "arxiv:1908.10084",
          "arxiv:1705.00652",
          "base_model:rasyosef/roberta-amharic-text-embedding-medium",
          "base_model:finetune:rasyosef/roberta-amharic-text-embedding-medium",
          "autotrain_compatible",
          "text-embeddings-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 67,
        title: "English-Amharic-MT",
        creator: [
      {
          name: "Atnafu",
          profile: "https://huggingface.co/Atnafu",
      }  ],
        link: "https://huggingface.co/Atnafu/English-Amharic-MT",
        paper_title: "English-Amharic-MT",
        downloads_total: 7,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "m2m_100",
          "text2text-generation",
          "translation",
          "am",
          "en",
          "license:apache-2.0",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 68,
        title: "llama-2-7b-amharic-tokenizer",
        creator: [
      {
          name: "Johntad110",
          profile: "https://huggingface.co/Johntad110",
      }  ],
        link: "https://huggingface.co/Johntad110/llama-2-7b-amharic-tokenizer",
        paper_title: "llama-2-7b-amharic-tokenizer",
        downloads_total: 7,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "safetensors",
          "llama",
          "text-generation",
          "facebook",
          "meta",
          "llama-2",
          "en",
          "arxiv:2307.09288",
          "license:llama2",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 69,
        title: "Amharic-llama-for-agriculture-chat-bot-Q4_K_M-GGUF",
        creator: [
      {
          name: "BekiTila",
          profile: "https://huggingface.co/BekiTila",
      }  ],
        link: "https://huggingface.co/BekiTila/Amharic-llama-for-agriculture-chat-bot-Q4_K_M-GGUF",
        paper_title: "Amharic-llama-for-agriculture-chat-bot-Q4_K_M-GGUF",
        downloads_total: 7,
      
        last_modified: "None",
        tags: [
          "transformers",
          "gguf",
          "llama-cpp",
          "gguf-my-repo",
          "base_model:BekiTila/Amharic-llama-for-agriculture-chat-bot",
          "base_model:quantized:BekiTila/Amharic-llama-for-agriculture-chat-bot",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 70,
        title: "Llama-3.2-1B-Amharic",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/Llama-3.2-1B-Amharic",
        paper_title: "Llama-3.2-1B-Amharic",
        downloads_total: 7,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "llama",
          "text-generation",
          "conversational",
          "am",
          "base_model:meta-llama/Llama-3.2-1B-Instruct",
          "base_model:finetune:meta-llama/Llama-3.2-1B-Instruct",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 71,
        title: "llama-3.2-amharic-32k-360m-1024",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/llama-3.2-amharic-32k-360m-1024",
        paper_title: "llama-3.2-amharic-32k-360m-1024",
        downloads_total: 7,
      
        last_modified: "None",
        tags: [
          "tensorboard",
          "safetensors",
          "llama",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 72,
        title: "gte-multilingual-base-finetuned-amharic",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/gte-multilingual-base-finetuned-amharic",
        paper_title: "gte-multilingual-base-finetuned-amharic",
        downloads_total: 7,
      
        last_modified: "None",
        tags: [
          "sentence-transformers",
          "safetensors",
          "new",
          "sentence-similarity",
          "feature-extraction",
          "generated_from_trainer",
          "dataset_size:28046",
          "loss:MatryoshkaLoss",
          "loss:MultipleNegativesRankingLoss",
          "custom_code",
          "en",
          "arxiv:1908.10084",
          "arxiv:2205.13147",
          "arxiv:1705.00652",
          "base_model:Alibaba-NLP/gte-multilingual-base",
          "base_model:finetune:Alibaba-NLP/gte-multilingual-base",
          "license:apache-2.0",
          "model-index",
          "autotrain_compatible",
          "text-embeddings-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 73,
        title: "snowflake-arctic-embed-l-v2.0-finetuned-amharic",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/snowflake-arctic-embed-l-v2.0-finetuned-amharic",
        paper_title: "snowflake-arctic-embed-l-v2.0-finetuned-amharic",
        downloads_total: 7,
      
        last_modified: "None",
        tags: [
          "sentence-transformers",
          "safetensors",
          "xlm-roberta",
          "sentence-similarity",
          "feature-extraction",
          "generated_from_trainer",
          "dataset_size:28046",
          "loss:MatryoshkaLoss",
          "loss:MultipleNegativesRankingLoss",
          "en",
          "arxiv:1908.10084",
          "arxiv:2205.13147",
          "arxiv:1705.00652",
          "base_model:Snowflake/snowflake-arctic-embed-l-v2.0",
          "base_model:finetune:Snowflake/snowflake-arctic-embed-l-v2.0",
          "license:apache-2.0",
          "model-index",
          "autotrain_compatible",
          "text-embeddings-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 74,
        title: "amharic_summarization_mt5",
        creator: [
      {
          name: "mogesa",
          profile: "https://huggingface.co/mogesa",
      }  ],
        link: "https://huggingface.co/mogesa/amharic_summarization_mt5",
        paper_title: "amharic_summarization_mt5",
        downloads_total: 7,
      
        last_modified: "None",
        tags: [
          "pytorch",
          "mt5",
          "summarization",
          "am",
          "arxiv:1910.09700",
          "base_model:EthioNLP/amharic_mt5_small",
          "base_model:finetune:EthioNLP/amharic_mt5_small",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 75,
        title: "bert-amharic-embed-small-v2",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/bert-amharic-embed-small-v2",
        paper_title: "bert-amharic-embed-small-v2",
        downloads_total: 7,
      
        last_modified: "None",
        tags: [
          "sentence-transformers",
          "safetensors",
          "bert",
          "sentence-similarity",
          "feature-extraction",
          "generated_from_trainer",
          "dataset_size:274500",
          "loss:MatryoshkaLoss",
          "loss:MultipleNegativesRankingLoss",
          "en",
          "arxiv:1908.10084",
          "arxiv:2205.13147",
          "arxiv:1705.00652",
          "base_model:rasyosef/bert-small-amharic",
          "base_model:finetune:rasyosef/bert-small-amharic",
          "license:apache-2.0",
          "model-index",
          "autotrain_compatible",
          "text-embeddings-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 76,
        title: "Amharic-twitter-sentiment-analysis-AfriBERTa",
        creator: [
      {
          name: "Hana14",
          profile: "https://huggingface.co/Hana14",
      }  ],
        link: "https://huggingface.co/Hana14/Amharic-twitter-sentiment-analysis-AfriBERTa",
        paper_title: "Amharic-twitter-sentiment-analysis-AfriBERTa",
        downloads_total: 7,
      
        last_modified: "None",
        tags: [
          "safetensors",
          "xlm-roberta",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 77,
        title: "AmharicCacoPostag",
        creator: [
      {
          name: "mitiku",
          profile: "https://huggingface.co/mitiku",
      }  ],
        link: "https://huggingface.co/mitiku/AmharicCacoPostag",
        paper_title: "AmharicCacoPostag",
        downloads_total: 6,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "bert",
          "token-classification",
          "generated_from_trainer",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 78,
        title: "roberta-medium-amharic",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/roberta-medium-amharic",
        paper_title: "roberta-medium-amharic",
        downloads_total: 6,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "xlm-roberta",
          "fill-mask",
          "am",
          "dataset:oscar",
          "dataset:mc4",
          "dataset:rasyosef/amharic-sentences-corpus",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 79,
        title: "English-Amharic-MT-Norm",
        creator: [
      {
          name: "Tadesse",
          profile: "https://huggingface.co/Tadesse",
      }  ],
        link: "https://huggingface.co/Tadesse/English-Amharic-MT-Norm",
        paper_title: "English-Amharic-MT-Norm",
        downloads_total: 6,
      
        last_modified: "None",
        tags: [
          "transformer",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 80,
        title: "roberta-amharic-embed-base",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/roberta-amharic-embed-base",
        paper_title: "roberta-amharic-embed-base",
        downloads_total: 6,
      
        last_modified: "None",
        tags: [
          "sentence-transformers",
          "safetensors",
          "xlm-roberta",
          "sentence-similarity",
          "feature-extraction",
          "generated_from_trainer",
          "dataset_size:40237",
          "loss:MatryoshkaLoss",
          "loss:MultipleNegativesRankingLoss",
          "en",
          "arxiv:1908.10084",
          "arxiv:2205.13147",
          "arxiv:1705.00652",
          "base_model:yosefw/roberta-base-am-embed",
          "base_model:finetune:yosefw/roberta-base-am-embed",
          "license:apache-2.0",
          "model-index",
          "autotrain_compatible",
          "text-embeddings-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 81,
        title: "bert-amharic-embed-small",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/bert-amharic-embed-small",
        paper_title: "bert-amharic-embed-small",
        downloads_total: 6,
      
        last_modified: "None",
        tags: [
          "sentence-transformers",
          "safetensors",
          "bert",
          "sentence-similarity",
          "feature-extraction",
          "generated_from_trainer",
          "dataset_size:40237",
          "loss:MatryoshkaLoss",
          "loss:MultipleNegativesRankingLoss",
          "en",
          "arxiv:1908.10084",
          "arxiv:2205.13147",
          "arxiv:1705.00652",
          "base_model:rasyosef/bert-small-amharic",
          "base_model:finetune:rasyosef/bert-small-amharic",
          "license:apache-2.0",
          "model-index",
          "autotrain_compatible",
          "text-embeddings-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 82,
        title: "w2v-bert-2.0-Amharic",
        creator: [
      {
          name: "Bedru",
          profile: "https://huggingface.co/Bedru",
      }  ],
        link: "https://huggingface.co/Bedru/w2v-bert-2.0-Amharic",
        paper_title: "w2v-bert-2.0-Amharic",
        downloads_total: 6,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "wav2vec2-bert",
          "automatic-speech-recognition",
          "generated_from_trainer",
          "base_model:facebook/wav2vec2-base",
          "base_model:finetune:facebook/wav2vec2-base",
          "license:apache-2.0",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 83,
        title: "AmharicWICPostag",
        creator: [
      {
          name: "mitiku",
          profile: "https://huggingface.co/mitiku",
      }  ],
        link: "https://huggingface.co/mitiku/AmharicWICPostag",
        paper_title: "AmharicWICPostag",
        downloads_total: 5,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "bert",
          "token-classification",
          "generated_from_trainer",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 84,
        title: "amharic-fake-news-detection-mBERT",
        creator: [
      {
          name: "Mesay",
          profile: "https://huggingface.co/Mesay",
      }  ],
        link: "https://huggingface.co/Mesay/amharic-fake-news-detection-mBERT",
        paper_title: "amharic-fake-news-detection-mBERT",
        downloads_total: 5,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "bert",
          "text-classification",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 85,
        title: "Hate-Speech-Detection-in-Amharic-Language-mBERT",
        creator: [
      {
          name: "NathyB",
          profile: "https://huggingface.co/NathyB",
      }  ],
        link: "https://huggingface.co/NathyB/Hate-Speech-Detection-in-Amharic-Language-mBERT",
        paper_title: "Hate-Speech-Detection-in-Amharic-Language-mBERT",
        downloads_total: 5,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "bert",
          "text-classification",
          "Sentiment-Analysis",
          "Hate-Speech",
          "Finetuning-mBERT",
          "am",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 86,
        title: "speecht5_tts_amharic2",
        creator: [
      {
          name: "AddisuSeteye",
          profile: "https://huggingface.co/AddisuSeteye",
      }  ],
        link: "https://huggingface.co/AddisuSeteye/speecht5_tts_amharic2",
        paper_title: "speecht5_tts_amharic2",
        downloads_total: 5,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "speecht5",
          "text-to-audio",
          "tags",
          "generated_from_trainer",
          "am",
          "dataset:facebook/voxpopuli",
          "base_model:microsoft/speecht5_tts",
          "base_model:finetune:microsoft/speecht5_tts",
          "license:mit",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 87,
        title: "Amharic-llama-for-agriculture-chat-bot",
        creator: [
      {
          name: "BekiTila",
          profile: "https://huggingface.co/BekiTila",
      }  ],
        link: "https://huggingface.co/BekiTila/Amharic-llama-for-agriculture-chat-bot",
        paper_title: "Amharic-llama-for-agriculture-chat-bot",
        downloads_total: 5,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "llama",
          "text-generation",
          "arxiv:1910.09700",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 88,
        title: "Amharic-llama-for-agriculture-chat-bot-v-1",
        creator: [
      {
          name: "BekiTila",
          profile: "https://huggingface.co/BekiTila",
      }  ],
        link: "https://huggingface.co/BekiTila/Amharic-llama-for-agriculture-chat-bot-v-1",
        paper_title: "Amharic-llama-for-agriculture-chat-bot-v-1",
        downloads_total: 5,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "llama",
          "text-generation",
          "arxiv:1910.09700",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 89,
        title: "amharic-phi3-mini-pretrain-cp1",
        creator: [
      {
          name: "simonbutt",
          profile: "https://huggingface.co/simonbutt",
      }  ],
        link: "https://huggingface.co/simonbutt/amharic-phi3-mini-pretrain-cp1",
        paper_title: "amharic-phi3-mini-pretrain-cp1",
        downloads_total: 5,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "mistral",
          "text-generation",
          "text-generation-inference",
          "unsloth",
          "trl",
          "sft",
          "conversational",
          "en",
          "license:apache-2.0",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 90,
        title: "roberta-medium-amharic-32k-256",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/roberta-medium-amharic-32k-256",
        paper_title: "roberta-medium-amharic-32k-256",
        downloads_total: 5,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "xlm-roberta",
          "fill-mask",
          "generated_from_trainer",
          "base_model:FacebookAI/xlm-roberta-base",
          "base_model:finetune:FacebookAI/xlm-roberta-base",
          "license:mit",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 91,
        title: "bert-amharic-embed-small-v3",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/bert-amharic-embed-small-v3",
        paper_title: "bert-amharic-embed-small-v3",
        downloads_total: 5,
      
        last_modified: "None",
        tags: [
          "sentence-transformers",
          "safetensors",
          "bert",
          "sentence-similarity",
          "feature-extraction",
          "generated_from_trainer",
          "dataset_size:62833",
          "loss:MatryoshkaLoss",
          "loss:MultipleNegativesRankingLoss",
          "en",
          "arxiv:1908.10084",
          "arxiv:2205.13147",
          "arxiv:1705.00652",
          "base_model:rasyosef/bert-small-amharic",
          "base_model:finetune:rasyosef/bert-small-amharic",
          "license:apache-2.0",
          "model-index",
          "autotrain_compatible",
          "text-embeddings-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 92,
        title: "bert-amharic-embed-small-v4",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/bert-amharic-embed-small-v4",
        paper_title: "bert-amharic-embed-small-v4",
        downloads_total: 5,
      
        last_modified: "None",
        tags: [
          "sentence-transformers",
          "safetensors",
          "bert",
          "sentence-similarity",
          "feature-extraction",
          "generated_from_trainer",
          "dataset_size:62833",
          "loss:MatryoshkaLoss",
          "loss:MultipleNegativesRankingLoss",
          "en",
          "arxiv:1908.10084",
          "arxiv:2205.13147",
          "arxiv:1705.00652",
          "base_model:rasyosef/bert-small-amharic",
          "base_model:finetune:rasyosef/bert-small-amharic",
          "license:apache-2.0",
          "model-index",
          "autotrain_compatible",
          "text-embeddings-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 93,
        title: "roberta-amharic-embed-base-v4",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/roberta-amharic-embed-base-v4",
        paper_title: "roberta-amharic-embed-base-v4",
        downloads_total: 5,
      
        last_modified: "None",
        tags: [
          "sentence-transformers",
          "safetensors",
          "xlm-roberta",
          "sentence-similarity",
          "feature-extraction",
          "generated_from_trainer",
          "dataset_size:62833",
          "loss:MatryoshkaLoss",
          "loss:MultipleNegativesRankingLoss",
          "en",
          "arxiv:1908.10084",
          "arxiv:2205.13147",
          "arxiv:1705.00652",
          "base_model:rasyosef/roberta-base-amharic",
          "base_model:finetune:rasyosef/roberta-base-amharic",
          "license:apache-2.0",
          "model-index",
          "autotrain_compatible",
          "text-embeddings-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 94,
        title: "bert-amharic-embed-small-v7",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/bert-amharic-embed-small-v7",
        paper_title: "bert-amharic-embed-small-v7",
        downloads_total: 5,
      
        last_modified: "None",
        tags: [
          "sentence-transformers",
          "safetensors",
          "bert",
          "sentence-similarity",
          "feature-extraction",
          "generated_from_trainer",
          "dataset_size:62833",
          "loss:MatryoshkaLoss",
          "loss:MultipleNegativesRankingLoss",
          "en",
          "arxiv:1908.10084",
          "arxiv:2205.13147",
          "arxiv:1705.00652",
          "base_model:yosefw/bert-small-amharic-32k-bs256-512",
          "base_model:finetune:yosefw/bert-small-amharic-32k-bs256-512",
          "license:apache-2.0",
          "model-index",
          "autotrain_compatible",
          "text-embeddings-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 95,
        title: "MasakhaNEWS-Amharic-AfriBERTa",
        creator: [
      {
          name: "VirginiaAchille",
          profile: "https://huggingface.co/VirginiaAchille",
      }  ],
        link: "https://huggingface.co/VirginiaAchille/MasakhaNEWS-Amharic-AfriBERTa",
        paper_title: "MasakhaNEWS-Amharic-AfriBERTa",
        downloads_total: 5,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "xlm-roberta",
          "text-classification",
          "arxiv:1910.09700",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 96,
        title: "xlm-roberta-base-finetuned-ner-amharic",
        creator: [
      {
          name: "mbeukman",
          profile: "https://huggingface.co/mbeukman",
      }  ],
        link: "https://huggingface.co/mbeukman/xlm-roberta-base-finetuned-ner-amharic",
        paper_title: "xlm-roberta-base-finetuned-ner-amharic",
        downloads_total: 4,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "xlm-roberta",
          "token-classification",
          "NER",
          "am",
          "dataset:masakhaner",
          "arxiv:2103.11811",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 97,
        title: "xlm-roberta-base-finetuned-swahili-finetuned-ner-amharic",
        creator: [
      {
          name: "mbeukman",
          profile: "https://huggingface.co/mbeukman",
      }  ],
        link: "https://huggingface.co/mbeukman/xlm-roberta-base-finetuned-swahili-finetuned-ner-amharic",
        paper_title: "xlm-roberta-base-finetuned-swahili-finetuned-ner-amharic",
        downloads_total: 4,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "xlm-roberta",
          "token-classification",
          "NER",
          "am",
          "dataset:masakhaner",
          "arxiv:2103.11811",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 98,
        title: "AmharicWICPostag10Tags",
        creator: [
      {
          name: "mitiku",
          profile: "https://huggingface.co/mitiku",
      }  ],
        link: "https://huggingface.co/mitiku/AmharicWICPostag10Tags",
        paper_title: "AmharicWICPostag10Tags",
        downloads_total: 4,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "bert",
          "token-classification",
          "generated_from_trainer",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 99,
        title: "amharic_xlmr_large",
        creator: [
      {
          name: "Atnafu",
          profile: "https://huggingface.co/Atnafu",
      }  ],
        link: "https://huggingface.co/Atnafu/amharic_xlmr_large",
        paper_title: "amharic_xlmr_large",
        downloads_total: 4,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "xlm-roberta",
          "fill-mask",
          "generated_from_trainer",
          "license:mit",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 100,
        title: "amharic_xlmr_base",
        creator: [
      {
          name: "Atnafu",
          profile: "https://huggingface.co/Atnafu",
      }  ],
        link: "https://huggingface.co/Atnafu/amharic_xlmr_base",
        paper_title: "amharic_xlmr_base",
        downloads_total: 4,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "xlm-roberta",
          "fill-mask",
          "generated_from_trainer",
          "license:mit",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 101,
        title: "improved-amharic-hate-speech-detection-mBERT",
        creator: [
      {
          name: "tseganesh",
          profile: "https://huggingface.co/tseganesh",
      }  ],
        link: "https://huggingface.co/tseganesh/improved-amharic-hate-speech-detection-mBERT",
        paper_title: "improved-amharic-hate-speech-detection-mBERT",
        downloads_total: 4,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "bert",
          "text-classification",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 102,
        title: "llama-2-7b-Amharic-finetuned",
        creator: [
      {
          name: "AbelBekele",
          profile: "https://huggingface.co/AbelBekele",
      }  ],
        link: "https://huggingface.co/AbelBekele/llama-2-7b-Amharic-finetuned",
        paper_title: "llama-2-7b-Amharic-finetuned",
        downloads_total: 4,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "llama",
          "text-generation",
          "am",
          "license:mit",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 103,
        title: "AmharicQA-RoBERta",
        creator: [
      {
          name: "Gizachew",
          profile: "https://huggingface.co/Gizachew",
      }  ],
        link: "https://huggingface.co/Gizachew/AmharicQA-RoBERta",
        paper_title: "AmharicQA-RoBERta",
        downloads_total: 4,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "roberta",
          "question-answering",
          "arxiv:1910.09700",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 104,
        title: "amharic-t5",
        creator: [
      {
          name: "Samuael",
          profile: "https://huggingface.co/Samuael",
      }  ],
        link: "https://huggingface.co/Samuael/amharic-t5",
        paper_title: "amharic-t5",
        downloads_total: 4,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "t5",
          "text2text-generation",
          "arxiv:1910.09700",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 105,
        title: "AmharicNewsNonCleaned",
        creator: [
      {
          name: "akiseid",
          profile: "https://huggingface.co/akiseid",
      }  ],
        link: "https://huggingface.co/akiseid/AmharicNewsNonCleaned",
        paper_title: "AmharicNewsNonCleaned",
        downloads_total: 4,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "xlm-roberta",
          "text-classification",
          "generated_from_trainer",
          "base_model:FacebookAI/xlm-roberta-base",
          "base_model:finetune:FacebookAI/xlm-roberta-base",
          "license:mit",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 106,
        title: "llama-3.2-180m-amharic-instruct-apo",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/llama-3.2-180m-amharic-instruct-apo",
        paper_title: "llama-3.2-180m-amharic-instruct-apo",
        downloads_total: 4,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "llama",
          "text-generation",
          "generated_from_trainer",
          "trl",
          "dpo",
          "conversational",
          "arxiv:2305.18290",
          "base_model:rasyosef/Llama-3.2-180M-Amharic-Instruct",
          "base_model:finetune:rasyosef/Llama-3.2-180M-Amharic-Instruct",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 107,
        title: "bert-amharic-embed-small-v5",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/bert-amharic-embed-small-v5",
        paper_title: "bert-amharic-embed-small-v5",
        downloads_total: 4,
      
        last_modified: "None",
        tags: [
          "sentence-transformers",
          "safetensors",
          "bert",
          "sentence-similarity",
          "feature-extraction",
          "generated_from_trainer",
          "dataset_size:62833",
          "loss:MatryoshkaLoss",
          "loss:MultipleNegativesRankingLoss",
          "en",
          "arxiv:1908.10084",
          "arxiv:2205.13147",
          "arxiv:1705.00652",
          "base_model:rasyosef/bert-small-amharic",
          "base_model:finetune:rasyosef/bert-small-amharic",
          "license:apache-2.0",
          "model-index",
          "autotrain_compatible",
          "text-embeddings-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 108,
        title: "roberta-amharic-embed-base-v6",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/roberta-amharic-embed-base-v6",
        paper_title: "roberta-amharic-embed-base-v6",
        downloads_total: 4,
      
        last_modified: "None",
        tags: [
          "sentence-transformers",
          "safetensors",
          "xlm-roberta",
          "sentence-similarity",
          "feature-extraction",
          "generated_from_trainer",
          "dataset_size:62833",
          "loss:MatryoshkaLoss",
          "loss:MultipleNegativesRankingLoss",
          "am",
          "arxiv:1908.10084",
          "arxiv:2205.13147",
          "arxiv:1705.00652",
          "base_model:rasyosef/roberta-base-amharic",
          "base_model:finetune:rasyosef/roberta-base-amharic",
          "license:apache-2.0",
          "model-index",
          "autotrain_compatible",
          "text-embeddings-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 109,
        title: "roberta-base-amharic-32k-256-512-v2",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/roberta-base-amharic-32k-256-512-v2",
        paper_title: "roberta-base-amharic-32k-256-512-v2",
        downloads_total: 4,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "xlm-roberta",
          "fill-mask",
          "generated_from_trainer",
          "base_model:yosefw/roberta-base-amharic-32k-256",
          "base_model:finetune:yosefw/roberta-base-amharic-32k-256",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 110,
        title: "bert-amharic-embed-small-v6",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/bert-amharic-embed-small-v6",
        paper_title: "bert-amharic-embed-small-v6",
        downloads_total: 4,
      
        last_modified: "None",
        tags: [
          "sentence-transformers",
          "safetensors",
          "bert",
          "sentence-similarity",
          "feature-extraction",
          "generated_from_trainer",
          "dataset_size:62833",
          "loss:MatryoshkaLoss",
          "loss:MultipleNegativesRankingLoss",
          "en",
          "arxiv:1908.10084",
          "arxiv:2205.13147",
          "arxiv:1705.00652",
          "base_model:yosefw/bert-small-amharic-32k-bs256-512",
          "base_model:finetune:yosefw/bert-small-amharic-32k-bs256-512",
          "license:apache-2.0",
          "model-index",
          "autotrain_compatible",
          "text-embeddings-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 111,
        title: "amharic-mlm-afriberta-small_config_10k",
        creator: [
      {
          name: "Bonnief",
          profile: "https://huggingface.co/Bonnief",
      }  ],
        link: "https://huggingface.co/Bonnief/amharic-mlm-afriberta-small_config_10k",
        paper_title: "amharic-mlm-afriberta-small_config_10k",
        downloads_total: 4,
      
        last_modified: "None",
        tags: [
          "safetensors",
          "xlm-roberta",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 112,
        title: "AmharicGPT",
        creator: [
      {
          name: "dagim",
          profile: "https://huggingface.co/dagim",
      }  ],
        link: "https://huggingface.co/dagim/AmharicGPT",
        paper_title: "AmharicGPT",
        downloads_total: 3,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "tensorboard",
          "safetensors",
          "gpt2",
          "text-generation",
          "generated_from_trainer",
          "license:mit",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 113,
        title: "llama-2-7b-tebot-amharic",
        creator: [
      {
          name: "Samuael",
          profile: "https://huggingface.co/Samuael",
      }  ],
        link: "https://huggingface.co/Samuael/llama-2-7b-tebot-amharic",
        paper_title: "llama-2-7b-tebot-amharic",
        downloads_total: 3,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "llama",
          "text-generation",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 114,
        title: "llama-2-7b-tebot-amharic_tuned",
        creator: [
      {
          name: "Samuael",
          profile: "https://huggingface.co/Samuael",
      }  ],
        link: "https://huggingface.co/Samuael/llama-2-7b-tebot-amharic_tuned",
        paper_title: "llama-2-7b-tebot-amharic_tuned",
        downloads_total: 3,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "llama",
          "text-generation",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 115,
        title: "llama-2-7b-tebot-amharic_tuned_2",
        creator: [
      {
          name: "Samuael",
          profile: "https://huggingface.co/Samuael",
      }  ],
        link: "https://huggingface.co/Samuael/llama-2-7b-tebot-amharic_tuned_2",
        paper_title: "llama-2-7b-tebot-amharic_tuned_2",
        downloads_total: 3,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "llama",
          "text-generation",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 116,
        title: "llama-2-7b-tebot-amharic_tuned_3",
        creator: [
      {
          name: "Samuael",
          profile: "https://huggingface.co/Samuael",
      }  ],
        link: "https://huggingface.co/Samuael/llama-2-7b-tebot-amharic_tuned_3",
        paper_title: "llama-2-7b-tebot-amharic_tuned_3",
        downloads_total: 3,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "llama",
          "text-generation",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 117,
        title: "Amharic-English-MT",
        creator: [
      {
          name: "Atnafu",
          profile: "https://huggingface.co/Atnafu",
      }  ],
        link: "https://huggingface.co/Atnafu/Amharic-English-MT",
        paper_title: "Amharic-English-MT",
        downloads_total: 3,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "m2m_100",
          "text2text-generation",
          "translation",
          "am",
          "en",
          "license:apache-2.0",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 118,
        title: "bert-mini-amharic-16k",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/bert-mini-amharic-16k",
        paper_title: "bert-mini-amharic-16k",
        downloads_total: 3,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "bert",
          "fill-mask",
          "am",
          "dataset:oscar",
          "dataset:mc4",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 119,
        title: "amharic-sentencepiece-tokenizer",
        creator: [
      {
          name: "gashudemman",
          profile: "https://huggingface.co/gashudemman",
      }  ],
        link: "https://huggingface.co/gashudemman/amharic-sentencepiece-tokenizer",
        paper_title: "amharic-sentencepiece-tokenizer",
        downloads_total: 3,
      
        last_modified: "None",
        tags: [
          "license:apache-2.0",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 120,
        title: "llama-3.2-amharic-64k-1024",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/llama-3.2-amharic-64k-1024",
        paper_title: "llama-3.2-amharic-64k-1024",
        downloads_total: 3,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "llama",
          "text-generation",
          "am",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 121,
        title: "wav2vec2-large-xls-r-300m-amharic-demo-colab",
        creator: [
      {
          name: "timotewos",
          profile: "https://huggingface.co/timotewos",
      }  ],
        link: "https://huggingface.co/timotewos/wav2vec2-large-xls-r-300m-amharic-demo-colab",
        paper_title: "wav2vec2-large-xls-r-300m-amharic-demo-colab",
        downloads_total: 3,
      
        last_modified: "None",
        tags: [
          "tensorboard",
          "safetensors",
          "wav2vec2",
          "generated_from_trainer",
          "dataset:common_voice_16_1",
          "base_model:facebook/wav2vec2-xls-r-300m",
          "base_model:finetune:facebook/wav2vec2-xls-r-300m",
          "license:apache-2.0",
          "model-index",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 122,
        title: "llama-3.2-amharic-32k-1024-v7",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/llama-3.2-amharic-32k-1024-v7",
        paper_title: "llama-3.2-amharic-32k-1024-v7",
        downloads_total: 3,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "llama",
          "text-generation",
          "generated_from_trainer",
          "base_model:meta-llama/Llama-3.2-1B",
          "base_model:finetune:meta-llama/Llama-3.2-1B",
          "license:llama3.2",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 123,
        title: "cs221-bert-base-multilingual-cased-finetuned-amharic-amh-finetuned-10-epochs",
        creator: [
      {
          name: "sercetexam9",
          profile: "https://huggingface.co/sercetexam9",
      }  ],
        link: "https://huggingface.co/sercetexam9/cs221-bert-base-multilingual-cased-finetuned-amharic-amh-finetuned-10-epochs",
        paper_title: "cs221-bert-base-multilingual-cased-finetuned-amharic-amh-finetuned-10-epochs",
        downloads_total: 3,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "bert",
          "text-classification",
          "generated_from_trainer",
          "base_model:Davlan/bert-base-multilingual-cased-finetuned-amharic",
          "base_model:finetune:Davlan/bert-base-multilingual-cased-finetuned-amharic",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 124,
        title: "llama-3.2-amharic-32k-1024-v8",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/llama-3.2-amharic-32k-1024-v8",
        paper_title: "llama-3.2-amharic-32k-1024-v8",
        downloads_total: 3,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "llama",
          "text-generation",
          "generated_from_trainer",
          "base_model:meta-llama/Llama-3.2-1B",
          "base_model:finetune:meta-llama/Llama-3.2-1B",
          "license:llama3.2",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 125,
        title: "m2m-amharic-synonym-try",
        creator: [
      {
          name: "Beck90",
          profile: "https://huggingface.co/Beck90",
      }  ],
        link: "https://huggingface.co/Beck90/m2m-amharic-synonym-try",
        paper_title: "m2m-amharic-synonym-try",
        downloads_total: 3,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "m2m_100",
          "text2text-generation",
          "generated_from_trainer",
          "base_model:facebook/m2m100_418M",
          "base_model:finetune:facebook/m2m100_418M",
          "license:mit",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 126,
        title: "amharic-xlmr-finetuned",
        creator: [
      {
          name: "abdulmunimjemal",
          profile: "https://huggingface.co/abdulmunimjemal",
      }  ],
        link: "https://huggingface.co/abdulmunimjemal/amharic-xlmr-finetuned",
        paper_title: "amharic-xlmr-finetuned",
        downloads_total: 3,
      
        last_modified: "None",
        tags: [
          "sentence-transformers",
          "safetensors",
          "xlm-roberta",
          "sentence-similarity",
          "feature-extraction",
          "generated_from_trainer",
          "dataset_size:40000",
          "loss:TripletLoss",
          "arxiv:1908.10084",
          "arxiv:1703.07737",
          "base_model:sentence-transformers/paraphrase-xlm-r-multilingual-v1",
          "base_model:finetune:sentence-transformers/paraphrase-xlm-r-multilingual-v1",
          "model-index",
          "autotrain_compatible",
          "text-embeddings-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 127,
        title: "Llama-3.2-400M-Amharic-Poems-Stories",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/Llama-3.2-400M-Amharic-Poems-Stories",
        paper_title: "Llama-3.2-400M-Amharic-Poems-Stories",
        downloads_total: 3,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "llama",
          "text-generation",
          "generated_from_trainer",
          "trl",
          "sft",
          "conversational",
          "base_model:rasyosef/Llama-3.2-400M-Amharic",
          "base_model:finetune:rasyosef/Llama-3.2-400M-Amharic",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 128,
        title: "Llama-3.2-400M-Amharic-Poems-Stories-V2",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/Llama-3.2-400M-Amharic-Poems-Stories-V2",
        paper_title: "Llama-3.2-400M-Amharic-Poems-Stories-V2",
        downloads_total: 3,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "llama",
          "text-generation",
          "generated_from_trainer",
          "trl",
          "sft",
          "conversational",
          "base_model:rasyosef/Llama-3.2-400M-Amharic",
          "base_model:finetune:rasyosef/Llama-3.2-400M-Amharic",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 129,
        title: "Llama-3.2-400M-Amharic-Poems-Stories-V3",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/Llama-3.2-400M-Amharic-Poems-Stories-V3",
        paper_title: "Llama-3.2-400M-Amharic-Poems-Stories-V3",
        downloads_total: 3,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "llama",
          "text-generation",
          "generated_from_trainer",
          "trl",
          "sft",
          "conversational",
          "base_model:rasyosef/Llama-3.2-400M-Amharic",
          "base_model:finetune:rasyosef/Llama-3.2-400M-Amharic",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 130,
        title: "Llama-3.2-400M-Amharic-Poems-Stories-V4",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/Llama-3.2-400M-Amharic-Poems-Stories-V4",
        paper_title: "Llama-3.2-400M-Amharic-Poems-Stories-V4",
        downloads_total: 3,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "llama",
          "text-generation",
          "generated_from_trainer",
          "trl",
          "sft",
          "conversational",
          "base_model:rasyosef/Llama-3.2-400M-Amharic",
          "base_model:finetune:rasyosef/Llama-3.2-400M-Amharic",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 131,
        title: "Llama-3.2-400M-Amharic-Poems-Stories-V6",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/Llama-3.2-400M-Amharic-Poems-Stories-V6",
        paper_title: "Llama-3.2-400M-Amharic-Poems-Stories-V6",
        downloads_total: 3,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "llama",
          "text-generation",
          "trl",
          "sft",
          "generated_from_trainer",
          "conversational",
          "dataset:generator",
          "base_model:rasyosef/Llama-3.2-400M-Amharic",
          "base_model:finetune:rasyosef/Llama-3.2-400M-Amharic",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 132,
        title: "Llama-3.2-400M-Amharic-Poems-Stories-V7",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/Llama-3.2-400M-Amharic-Poems-Stories-V7",
        paper_title: "Llama-3.2-400M-Amharic-Poems-Stories-V7",
        downloads_total: 3,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "llama",
          "text-generation",
          "trl",
          "sft",
          "generated_from_trainer",
          "conversational",
          "base_model:rasyosef/Llama-3.2-400M-Amharic",
          "base_model:finetune:rasyosef/Llama-3.2-400M-Amharic",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 133,
        title: "roberta-amharic-embed-base-v5",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/roberta-amharic-embed-base-v5",
        paper_title: "roberta-amharic-embed-base-v5",
        downloads_total: 3,
      
        last_modified: "None",
        tags: [
          "sentence-transformers",
          "safetensors",
          "xlm-roberta",
          "sentence-similarity",
          "feature-extraction",
          "generated_from_trainer",
          "dataset_size:62833",
          "loss:MatryoshkaLoss",
          "loss:MultipleNegativesRankingLoss",
          "en",
          "arxiv:1908.10084",
          "arxiv:2205.13147",
          "arxiv:1705.00652",
          "base_model:rasyosef/roberta-base-amharic",
          "base_model:finetune:rasyosef/roberta-base-amharic",
          "license:apache-2.0",
          "model-index",
          "autotrain_compatible",
          "text-embeddings-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 134,
        title: "wav2vec2-xlsr-amharic-speech-emotion-recognition",
        creator: [
      {
          name: "quaja",
          profile: "https://huggingface.co/quaja",
      }  ],
        link: "https://huggingface.co/quaja/wav2vec2-xlsr-amharic-speech-emotion-recognition",
        paper_title: "wav2vec2-xlsr-amharic-speech-emotion-recognition",
        downloads_total: 2,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "wav2vec2",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 135,
        title: "wav2vec2-xlsr-amharic-speech-emotion-recognition-greek-model",
        creator: [
      {
          name: "abuchane",
          profile: "https://huggingface.co/abuchane",
      }  ],
        link: "https://huggingface.co/abuchane/wav2vec2-xlsr-amharic-speech-emotion-recognition-greek-model",
        paper_title: "wav2vec2-xlsr-amharic-speech-emotion-recognition-greek-model",
        downloads_total: 2,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "wav2vec2",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 136,
        title: "amharic_hate_speech_detection",
        creator: [
      {
          name: "Abel-Mek",
          profile: "https://huggingface.co/Abel-Mek",
      }  ],
        link: "https://huggingface.co/Abel-Mek/amharic_hate_speech_detection",
        paper_title: "amharic_hate_speech_detection",
        downloads_total: 2,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "bert",
          "text-classification",
          "Sentiment-Analysis",
          "Hate-Speech",
          "Finetuning-mBERT",
          "am",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 137,
        title: "improved-amharic-hate-speech-detection-mBERT",
        creator: [
      {
          name: "zmalo",
          profile: "https://huggingface.co/zmalo",
      }  ],
        link: "https://huggingface.co/zmalo/improved-amharic-hate-speech-detection-mBERT",
        paper_title: "improved-amharic-hate-speech-detection-mBERT",
        downloads_total: 2,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "bert",
          "text-classification",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 138,
        title: "Amharic-News-Classification",
        creator: [
      {
          name: "akiseid",
          profile: "https://huggingface.co/akiseid",
      }  ],
        link: "https://huggingface.co/akiseid/Amharic-News-Classification",
        paper_title: "Amharic-News-Classification",
        downloads_total: 2,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "xlm-roberta",
          "text-classification",
          "generated_from_trainer",
          "base_model:FacebookAI/xlm-roberta-base",
          "base_model:finetune:FacebookAI/xlm-roberta-base",
          "license:mit",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 139,
        title: "bert-tiny-amharic",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/bert-tiny-amharic",
        paper_title: "bert-tiny-amharic",
        downloads_total: 2,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "bert",
          "fill-mask",
          "am",
          "dataset:oscar",
          "dataset:mc4",
          "dataset:rasyosef/amharic-sentences-corpus",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 140,
        title: "roberta-medium-amharic-32k-v2",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/roberta-medium-amharic-32k-v2",
        paper_title: "roberta-medium-amharic-32k-v2",
        downloads_total: 2,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "xlm-roberta",
          "fill-mask",
          "generated_from_trainer",
          "base_model:FacebookAI/xlm-roberta-base",
          "base_model:finetune:FacebookAI/xlm-roberta-base",
          "license:mit",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 141,
        title: "llama-3.2-amharic-32k-200m-1024",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/llama-3.2-amharic-32k-200m-1024",
        paper_title: "llama-3.2-amharic-32k-200m-1024",
        downloads_total: 2,
      
        last_modified: "None",
        tags: [
          "tensorboard",
          "safetensors",
          "llama",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 142,
        title: "llama-3.2-amharic-32k-1024-v4-instruct-bs8-nopacking",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/llama-3.2-amharic-32k-1024-v4-instruct-bs8-nopacking",
        paper_title: "llama-3.2-amharic-32k-1024-v4-instruct-bs8-nopacking",
        downloads_total: 2,
      
        last_modified: "None",
        tags: [
          "tensorboard",
          "safetensors",
          "llama",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 143,
        title: "llama-3.2-180m-amharic-instruct-dpo",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/llama-3.2-180m-amharic-instruct-dpo",
        paper_title: "llama-3.2-180m-amharic-instruct-dpo",
        downloads_total: 2,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "llama",
          "text-generation",
          "generated_from_trainer",
          "trl",
          "dpo",
          "conversational",
          "arxiv:2305.18290",
          "base_model:rasyosef/Llama-3.2-180M-Amharic-Instruct",
          "base_model:finetune:rasyosef/Llama-3.2-180M-Amharic-Instruct",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 144,
        title: "Amharicmodel-trocr",
        creator: [
      {
          name: "Gizachew",
          profile: "https://huggingface.co/Gizachew",
      }  ],
        link: "https://huggingface.co/Gizachew/Amharicmodel-trocr",
        paper_title: "Amharicmodel-trocr",
        downloads_total: 2,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "vision-encoder-decoder",
          "image-text-to-text",
          "arxiv:1910.09700",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 145,
        title: "amharic-hate-speech-detection-mBERT",
        creator: [
      {
          name: "DawitMelka",
          profile: "https://huggingface.co/DawitMelka",
      }  ],
        link: "https://huggingface.co/DawitMelka/amharic-hate-speech-detection-mBERT",
        paper_title: "amharic-hate-speech-detection-mBERT",
        downloads_total: 2,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "bert",
          "text-classification",
          "am",
          "license:apache-2.0",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 146,
        title: "amharic-llama",
        creator: [
      {
          name: "rml1",
          profile: "https://huggingface.co/rml1",
      }  ],
        link: "https://huggingface.co/rml1/amharic-llama",
        paper_title: "amharic-llama",
        downloads_total: 2,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 147,
        title: "roberta-medium-amharic-32k-256-512",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/roberta-medium-amharic-32k-256-512",
        paper_title: "roberta-medium-amharic-32k-256-512",
        downloads_total: 2,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "xlm-roberta",
          "fill-mask",
          "generated_from_trainer",
          "base_model:yosefw/roberta-medium-amharic-32k-256",
          "base_model:finetune:yosefw/roberta-medium-amharic-32k-256",
          "license:mit",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 148,
        title: "amharic_semantic_classifier",
        creator: [
      {
          name: "Beck90",
          profile: "https://huggingface.co/Beck90",
      }  ],
        link: "https://huggingface.co/Beck90/amharic_semantic_classifier",
        paper_title: "amharic_semantic_classifier",
        downloads_total: 2,
      
        last_modified: "None",
        tags: [
          "pytorch",
          "safetensors",
          "xlm-roberta",
          "amharic",
          "semantic-classification",
          "am",
          "arxiv:1910.09700",
          "license:apache-2.0",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 149,
        title: "whisper-tiny-amharic-ct2",
        creator: [
      {
          name: "daswer123",
          profile: "https://huggingface.co/daswer123",
      }  ],
        link: "https://huggingface.co/daswer123/whisper-tiny-amharic-ct2",
        paper_title: "whisper-tiny-amharic-ct2",
        downloads_total: 2,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 150,
        title: "modernbert-small-amharic-32k-bs256",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/modernbert-small-amharic-32k-bs256",
        paper_title: "modernbert-small-amharic-32k-bs256",
        downloads_total: 2,
      
        last_modified: "None",
        tags: [
          "tensorboard",
          "safetensors",
          "modernbert",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 151,
        title: "modernbert-small-amharic-32k-bs128",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/modernbert-small-amharic-32k-bs128",
        paper_title: "modernbert-small-amharic-32k-bs128",
        downloads_total: 2,
      
        last_modified: "None",
        tags: [
          "tensorboard",
          "safetensors",
          "modernbert",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 152,
        title: "bert-small-amharic-32k-bs256",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/bert-small-amharic-32k-bs256",
        paper_title: "bert-small-amharic-32k-bs256",
        downloads_total: 2,
      
        last_modified: "None",
        tags: [
          "tensorboard",
          "safetensors",
          "bert",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 153,
        title: "modernbert-medium-amharic-32k-v2",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/modernbert-medium-amharic-32k-v2",
        paper_title: "modernbert-medium-amharic-32k-v2",
        downloads_total: 2,
      
        last_modified: "None",
        tags: [
          "tensorboard",
          "safetensors",
          "modernbert",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 154,
        title: "amharic_hate_speech-PEFT",
        creator: [
      {
          name: "Gizachew",
          profile: "https://huggingface.co/Gizachew",
      }  ],
        link: "https://huggingface.co/Gizachew/amharic_hate_speech-PEFT",
        paper_title: "amharic_hate_speech-PEFT",
        downloads_total: 1,
      
        last_modified: "None",
        tags: [
          "peft",
          "safetensors",
          "arxiv:1910.09700",
          "base_model:Davlan/bert-base-multilingual-cased-finetuned-amharic",
          "base_model:adapter:Davlan/bert-base-multilingual-cased-finetuned-amharic",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 155,
        title: "hubert-amharic",
        creator: [
      {
          name: "Gizachew",
          profile: "https://huggingface.co/Gizachew",
      }  ],
        link: "https://huggingface.co/Gizachew/hubert-amharic",
        paper_title: "hubert-amharic",
        downloads_total: 1,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "hubert",
          "generated_from_trainer",
          "base_model:facebook/hubert-base-ls960",
          "base_model:finetune:facebook/hubert-base-ls960",
          "license:apache-2.0",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 156,
        title: "hubert-base960-agu-amharic",
        creator: [
      {
          name: "Gizachew",
          profile: "https://huggingface.co/Gizachew",
      }  ],
        link: "https://huggingface.co/Gizachew/hubert-base960-agu-amharic",
        paper_title: "hubert-base960-agu-amharic",
        downloads_total: 1,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "hubert",
          "generated_from_trainer",
          "base_model:facebook/hubert-base-ls960",
          "base_model:finetune:facebook/hubert-base-ls960",
          "license:apache-2.0",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 157,
        title: "gpt2-small-amharic-128-v3",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/gpt2-small-amharic-128-v3",
        paper_title: "gpt2-small-amharic-128-v3",
        downloads_total: 1,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "gpt2",
          "text-generation",
          "am",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 158,
        title: "gpt2-mini-amharic-28k",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/gpt2-mini-amharic-28k",
        paper_title: "gpt2-mini-amharic-28k",
        downloads_total: 1,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "gpt2",
          "text-generation",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 159,
        title: "Llama-3.2-1B-Amharic-Instruct",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/Llama-3.2-1B-Amharic-Instruct",
        paper_title: "Llama-3.2-1B-Amharic-Instruct",
        downloads_total: 1,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "llama",
          "text-generation",
          "conversational",
          "am",
          "base_model:rasyosef/Llama-3.2-1B-Amharic",
          "base_model:finetune:rasyosef/Llama-3.2-1B-Amharic",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 160,
        title: "Llama-3.2-180M-Amharic",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/Llama-3.2-180M-Amharic",
        paper_title: "Llama-3.2-180M-Amharic",
        downloads_total: 1,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "llama",
          "text-generation",
          "am",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 161,
        title: "bert-medium-amharic-crossencoder",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/bert-medium-amharic-crossencoder",
        paper_title: "bert-medium-amharic-crossencoder",
        downloads_total: 1,
      
        last_modified: "None",
        tags: [
          "tensorboard",
          "safetensors",
          "bert",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 162,
        title: "amharic-hate-speech-using-rnn-bidirectional",
        creator: [
      {
          name: "rio3210",
          profile: "https://huggingface.co/rio3210",
      }  ],
        link: "https://huggingface.co/rio3210/amharic-hate-speech-using-rnn-bidirectional",
        paper_title: "amharic-hate-speech-using-rnn-bidirectional",
        downloads_total: 1,
      
        last_modified: "None",
        tags: [
          "keras",
          "joblib",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 163,
        title: "whisper-small-amharic-ct2",
        creator: [
      {
          name: "daswer123",
          profile: "https://huggingface.co/daswer123",
      }  ],
        link: "https://huggingface.co/daswer123/whisper-small-amharic-ct2",
        paper_title: "whisper-small-amharic-ct2",
        downloads_total: 1,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 164,
        title: "bert-amharic-reranker-small-v2",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/bert-amharic-reranker-small-v2",
        paper_title: "bert-amharic-reranker-small-v2",
        downloads_total: 1,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "bert",
          "text-classification",
          "cross-encoder",
          "arxiv:1910.09700",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 165,
        title: "amharic_wav2vec2",
        creator: [
      {
          name: "abenezer444",
          profile: "https://huggingface.co/abenezer444",
      }  ],
        link: "https://huggingface.co/abenezer444/amharic_wav2vec2",
        paper_title: "amharic_wav2vec2",
        downloads_total: 1,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "wav2vec2",
          "automatic-speech-recognition",
          "generated_from_trainer",
          "base_model:facebook/wav2vec2-xls-r-300m",
          "base_model:finetune:facebook/wav2vec2-xls-r-300m",
          "license:apache-2.0",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 166,
        title: "deepseek-coder-6_7b-instruct-Amharic_LLAMA_MT-321fbd81-276d-401f-a44e-2244aea0e8b9",
        creator: [
      {
          name: "rayonlabs",
          profile: "https://huggingface.co/rayonlabs",
      }  ],
        link: "https://huggingface.co/rayonlabs/deepseek-coder-6_7b-instruct-Amharic_LLAMA_MT-321fbd81-276d-401f-a44e-2244aea0e8b9",
        paper_title: "deepseek-coder-6_7b-instruct-Amharic_LLAMA_MT-321fbd81-276d-401f-a44e-2244aea0e8b9",
        downloads_total: 1,
      
        last_modified: "None",
        tags: [
          "peft",
          "generated_from_trainer",
          "base_model:deepseek-ai/deepseek-coder-6.7b-instruct",
          "base_model:adapter:deepseek-ai/deepseek-coder-6.7b-instruct",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 167,
        title: "bert-amharic-reranker-small-v4",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/bert-amharic-reranker-small-v4",
        paper_title: "bert-amharic-reranker-small-v4",
        downloads_total: 1,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "bert",
          "text-classification",
          "cross-encoder",
          "arxiv:1910.09700",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 168,
        title: "modernbert-medium-amharic-32k-1024",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/modernbert-medium-amharic-32k-1024",
        paper_title: "modernbert-medium-amharic-32k-1024",
        downloads_total: 1,
      
        last_modified: "None",
        tags: [
          "tensorboard",
          "safetensors",
          "modernbert",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 169,
        title: "amharic",
        creator: [
      {
          name: "yosiasz",
          profile: "https://huggingface.co/yosiasz",
      }  ],
        link: "https://huggingface.co/yosiasz/amharic",
        paper_title: "amharic",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 170,
        title: "Amharic-RoBERTa",
        creator: [
      {
          name: "Ebrahimjibril",
          profile: "https://huggingface.co/Ebrahimjibril",
      }  ],
        link: "https://huggingface.co/Ebrahimjibril/Amharic-RoBERTa",
        paper_title: "Amharic-RoBERTa",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "pytorch",
          "license:openrail",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 171,
        title: "amharic_tokenizer",
        creator: [
      {
          name: "dagim",
          profile: "https://huggingface.co/dagim",
      }  ],
        link: "https://huggingface.co/dagim/amharic_tokenizer",
        paper_title: "amharic_tokenizer",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 172,
        title: "amharic",
        creator: [
      {
          name: "endagegnehu",
          profile: "https://huggingface.co/endagegnehu",
      }  ],
        link: "https://huggingface.co/endagegnehu/amharic",
        paper_title: "amharic",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 173,
        title: "mt5-amharic-english",
        creator: [
      {
          name: "tegbiye",
          profile: "https://huggingface.co/tegbiye",
      }  ],
        link: "https://huggingface.co/tegbiye/mt5-amharic-english",
        paper_title: "mt5-amharic-english",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "license:other",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 174,
        title: "alx_amharic_hw_recognition",
        creator: [
      {
          name: "sammylina",
          profile: "https://huggingface.co/sammylina",
      }  ],
        link: "https://huggingface.co/sammylina/alx_amharic_hw_recognition",
        paper_title: "alx_amharic_hw_recognition",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 175,
        title: "llama-2-amharic-3784m",
        creator: [
      {
          name: "iocuydi",
          profile: "https://huggingface.co/iocuydi",
      }  ],
        link: "https://huggingface.co/iocuydi/llama-2-amharic-3784m",
        paper_title: "llama-2-amharic-3784m",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "arxiv:2403.06354",
          "doi:10.57967/hf/1569",
          "license:llama2",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 176,
        title: "AmharicGPT-Quantized",
        creator: [
      {
          name: "dagim",
          profile: "https://huggingface.co/dagim",
      }  ],
        link: "https://huggingface.co/dagim/AmharicGPT-Quantized",
        paper_title: "AmharicGPT-Quantized",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 177,
        title: "asr-amharic-phoneme-based",
        creator: [
      {
          name: "Samuael",
          profile: "https://huggingface.co/Samuael",
      }  ],
        link: "https://huggingface.co/Samuael/asr-amharic-phoneme-based",
        paper_title: "asr-amharic-phoneme-based",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "wav2vec2",
          "automatic-speech-recognition",
          "generated_from_trainer",
          "base_model:facebook/wav2vec2-base",
          "base_model:finetune:facebook/wav2vec2-base",
          "license:apache-2.0",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 178,
        title: "asr-amharic-phoneme-based-39",
        creator: [
      {
          name: "Samuael",
          profile: "https://huggingface.co/Samuael",
      }  ],
        link: "https://huggingface.co/Samuael/asr-amharic-phoneme-based-39",
        paper_title: "asr-amharic-phoneme-based-39",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "wav2vec2",
          "automatic-speech-recognition",
          "generated_from_trainer",
          "dataset:alffa_amharic",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 179,
        title: "asr-amharic-phoneme-based-39-2",
        creator: [
      {
          name: "Samuael",
          profile: "https://huggingface.co/Samuael",
      }  ],
        link: "https://huggingface.co/Samuael/asr-amharic-phoneme-based-39-2",
        paper_title: "asr-amharic-phoneme-based-39-2",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "wav2vec2",
          "automatic-speech-recognition",
          "generated_from_trainer",
          "base_model:facebook/wav2vec2-base",
          "base_model:finetune:facebook/wav2vec2-base",
          "license:apache-2.0",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 180,
        title: "BERT-amharic_model",
        creator: [
      {
          name: "Gizachew",
          profile: "https://huggingface.co/Gizachew",
      }  ],
        link: "https://huggingface.co/Gizachew/BERT-amharic_model",
        paper_title: "BERT-amharic_model",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "peft",
          "safetensors",
          "arxiv:1910.09700",
          "base_model:Davlan/bert-base-multilingual-cased-finetuned-amharic",
          "base_model:adapter:Davlan/bert-base-multilingual-cased-finetuned-amharic",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 181,
        title: "amharic-tokenizer-fast",
        creator: [
      {
          name: "Mequanent",
          profile: "https://huggingface.co/Mequanent",
      }  ],
        link: "https://huggingface.co/Mequanent/amharic-tokenizer-fast",
        paper_title: "amharic-tokenizer-fast",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 182,
        title: "seq2seq-amharic",
        creator: [
      {
          name: "Samuael",
          profile: "https://huggingface.co/Samuael",
      }  ],
        link: "https://huggingface.co/Samuael/seq2seq-amharic",
        paper_title: "seq2seq-amharic",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 183,
        title: "asr-amharic-phoneme-based-39-3",
        creator: [
      {
          name: "Samuael",
          profile: "https://huggingface.co/Samuael",
      }  ],
        link: "https://huggingface.co/Samuael/asr-amharic-phoneme-based-39-3",
        paper_title: "asr-amharic-phoneme-based-39-3",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "wav2vec2",
          "automatic-speech-recognition",
          "generated_from_trainer",
          "base_model:Samuael/asr-amharic-phoneme-based-39-3",
          "base_model:finetune:Samuael/asr-amharic-phoneme-based-39-3",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 184,
        title: "Amharic-Text-Summarization-mT5-small-PEFT",
        creator: [
      {
          name: "danielmekuriaw",
          profile: "https://huggingface.co/danielmekuriaw",
      }  ],
        link: "https://huggingface.co/danielmekuriaw/Amharic-Text-Summarization-mT5-small-PEFT",
        paper_title: "Amharic-Text-Summarization-mT5-small-PEFT",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 185,
        title: "xlm-roberta-base-lora-amharic-news-classification",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/xlm-roberta-base-lora-amharic-news-classification",
        paper_title: "xlm-roberta-base-lora-amharic-news-classification",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "peft",
          "safetensors",
          "text-classification",
          "am",
          "base_model:FacebookAI/xlm-roberta-base",
          "base_model:adapter:FacebookAI/xlm-roberta-base",
          "license:mit",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 186,
        title: "roberta-amharic_lora",
        creator: [
      {
          name: "Gizachew",
          profile: "https://huggingface.co/Gizachew",
      }  ],
        link: "https://huggingface.co/Gizachew/roberta-amharic_lora",
        paper_title: "roberta-amharic_lora",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "peft",
          "safetensors",
          "roberta",
          "arxiv:1910.09700",
          "base_model:uhhlt/am-roberta",
          "base_model:adapter:uhhlt/am-roberta",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 187,
        title: "speecht5_tts_amharicspeecht5_tts_amharic",
        creator: [
      {
          name: "Walelign",
          profile: "https://huggingface.co/Walelign",
      }  ],
        link: "https://huggingface.co/Walelign/speecht5_tts_amharicspeecht5_tts_amharic",
        paper_title: "speecht5_tts_amharicspeecht5_tts_amharic",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 188,
        title: "amharic_text_summarization",
        creator: [
      {
          name: "YosefA",
          profile: "https://huggingface.co/YosefA",
      }  ],
        link: "https://huggingface.co/YosefA/amharic_text_summarization",
        paper_title: "amharic_text_summarization",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "mt5",
          "text2text-generation",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 189,
        title: "asr-amharic-phoneme-based-37-4",
        creator: [
      {
          name: "Samuael",
          profile: "https://huggingface.co/Samuael",
      }  ],
        link: "https://huggingface.co/Samuael/asr-amharic-phoneme-based-37-4",
        paper_title: "asr-amharic-phoneme-based-37-4",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "wav2vec2",
          "automatic-speech-recognition",
          "generated_from_trainer",
          "base_model:Samuael/asr-amharic-phoneme-based-37-4",
          "base_model:finetune:Samuael/asr-amharic-phoneme-based-37-4",
          "license:apache-2.0",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 190,
        title: "asr-amharic-phoneme-based-37-5",
        creator: [
      {
          name: "Samuael",
          profile: "https://huggingface.co/Samuael",
      }  ],
        link: "https://huggingface.co/Samuael/asr-amharic-phoneme-based-37-5",
        paper_title: "asr-amharic-phoneme-based-37-5",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "wav2vec2",
          "automatic-speech-recognition",
          "generated_from_trainer",
          "base_model:Samuael/asr-amharic-phoneme-based-37-5",
          "base_model:finetune:Samuael/asr-amharic-phoneme-based-37-5",
          "license:apache-2.0",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 191,
        title: "Amharic-LLAMA-all-data",
        creator: [
      {
          name: "EthioNLP",
          profile: "https://huggingface.co/EthioNLP",
      }  ],
        link: "https://huggingface.co/EthioNLP/Amharic-LLAMA-all-data",
        paper_title: "Amharic-LLAMA-all-data",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "text-generation",
          "am",
          "arxiv:1910.09700",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 192,
        title: "Amharic-LLAMA-MT",
        creator: [
      {
          name: "EthioNLP",
          profile: "https://huggingface.co/EthioNLP",
      }  ],
        link: "https://huggingface.co/EthioNLP/Amharic-LLAMA-MT",
        paper_title: "Amharic-LLAMA-MT",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "text2text-generation",
          "am",
          "arxiv:1910.09700",
          "base_model:iocuydi/llama-2-amharic-3784m",
          "base_model:finetune:iocuydi/llama-2-amharic-3784m",
          "license:afl-3.0",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 193,
        title: "Amharic-llama-base-model",
        creator: [
      {
          name: "EthioNLP",
          profile: "https://huggingface.co/EthioNLP",
      }  ],
        link: "https://huggingface.co/EthioNLP/Amharic-llama-base-model",
        paper_title: "Amharic-llama-base-model",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "llama",
          "text-generation",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 194,
        title: "Amharic_LLAMA_our_data",
        creator: [
      {
          name: "EthioNLP",
          profile: "https://huggingface.co/EthioNLP",
      }  ],
        link: "https://huggingface.co/EthioNLP/Amharic_LLAMA_our_data",
        paper_title: "Amharic_LLAMA_our_data",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "text-generation",
          "am",
          "arxiv:1910.09700",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 195,
        title: "bert_amharic_ads",
        creator: [
      {
          name: "firehiwotk",
          profile: "https://huggingface.co/firehiwotk",
      }  ],
        link: "https://huggingface.co/firehiwotk/bert_amharic_ads",
        paper_title: "bert_amharic_ads",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 196,
        title: "asr-amharic-phoneme-based-233",
        creator: [
      {
          name: "Samuael",
          profile: "https://huggingface.co/Samuael",
      }  ],
        link: "https://huggingface.co/Samuael/asr-amharic-phoneme-based-233",
        paper_title: "asr-amharic-phoneme-based-233",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "wav2vec2",
          "automatic-speech-recognition",
          "generated_from_trainer",
          "base_model:Samuael/asr-amharic-phoneme-based-233",
          "base_model:finetune:Samuael/asr-amharic-phoneme-based-233",
          "license:apache-2.0",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 197,
        title: "gpt2-oscar-amharic-tokenizer",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/gpt2-oscar-amharic-tokenizer",
        paper_title: "gpt2-oscar-amharic-tokenizer",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "am",
          "dataset:oscar",
          "license:mit",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 198,
        title: "amharic_tokenizer",
        creator: [
      {
          name: "BiniyamAjaw",
          profile: "https://huggingface.co/BiniyamAjaw",
      }  ],
        link: "https://huggingface.co/BiniyamAjaw/amharic_tokenizer",
        paper_title: "amharic_tokenizer",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "am",
          "dataset:BiniyamAjaw/amharic_dataset_v2",
          "license:mit",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 199,
        title: "Llama-7b-Amharic",
        creator: [
      {
          name: "AbelBekele",
          profile: "https://huggingface.co/AbelBekele",
      }  ],
        link: "https://huggingface.co/AbelBekele/Llama-7b-Amharic",
        paper_title: "Llama-7b-Amharic",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "license:apache-2.0",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 200,
        title: "Llama2-7b-Amharic-K",
        creator: [
      {
          name: "AbelBekele",
          profile: "https://huggingface.co/AbelBekele",
      }  ],
        link: "https://huggingface.co/AbelBekele/Llama2-7b-Amharic-K",
        paper_title: "Llama2-7b-Amharic-K",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "license:apache-2.0",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 201,
        title: "Amharic-Llama-7b-Kerod",
        creator: [
      {
          name: "AbelBekele",
          profile: "https://huggingface.co/AbelBekele",
      }  ],
        link: "https://huggingface.co/AbelBekele/Amharic-Llama-7b-Kerod",
        paper_title: "Amharic-Llama-7b-Kerod",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "license:apache-2.0",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 202,
        title: "amharic-tokenizer",
        creator: [
      {
          name: "misge10",
          profile: "https://huggingface.co/misge10",
      }  ],
        link: "https://huggingface.co/misge10/amharic-tokenizer",
        paper_title: "amharic-tokenizer",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 203,
        title: "Llama2-7b-Amharic-M",
        creator: [
      {
          name: "AbelBekele",
          profile: "https://huggingface.co/AbelBekele",
      }  ],
        link: "https://huggingface.co/AbelBekele/Llama2-7b-Amharic-M",
        paper_title: "Llama2-7b-Amharic-M",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "license:apache-2.0",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 204,
        title: "llama-2-7b-Amharic-pretrained",
        creator: [
      {
          name: "AbelBekele",
          profile: "https://huggingface.co/AbelBekele",
      }  ],
        link: "https://huggingface.co/AbelBekele/llama-2-7b-Amharic-pretrained",
        paper_title: "llama-2-7b-Amharic-pretrained",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "llama",
          "text-generation",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 205,
        title: "bert-amharic-tokenizer",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/bert-amharic-tokenizer",
        paper_title: "bert-amharic-tokenizer",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "am",
          "dataset:oscar",
          "dataset:mc4",
          "license:mit",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 206,
        title: "amharic_mt5_small",
        creator: [
      {
          name: "EthioNLP",
          profile: "https://huggingface.co/EthioNLP",
      }  ],
        link: "https://huggingface.co/EthioNLP/amharic_mt5_small",
        paper_title: "amharic_mt5_small",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "jax",
          "t5",
          "text2text-generation",
          "am",
          "ti",
          "om",
          "gez",
          "arxiv:2403.13737",
          "license:mit",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 207,
        title: "asr-amharic-phoneme-based-1008",
        creator: [
      {
          name: "Samuael",
          profile: "https://huggingface.co/Samuael",
      }  ],
        link: "https://huggingface.co/Samuael/asr-amharic-phoneme-based-1008",
        paper_title: "asr-amharic-phoneme-based-1008",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "wav2vec2",
          "automatic-speech-recognition",
          "generated_from_trainer",
          "dataset:alffa_amharic",
          "base_model:Samuael/asr-amharic-phoneme-based-1008",
          "base_model:finetune:Samuael/asr-amharic-phoneme-based-1008",
          "license:apache-2.0",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 208,
        title: "amharic-llava",
        creator: [
      {
          name: "iocuydi",
          profile: "https://huggingface.co/iocuydi",
      }  ],
        link: "https://huggingface.co/iocuydi/amharic-llava",
        paper_title: "amharic-llava",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "arxiv:2403.06354",
          "license:llama2",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 209,
        title: "Amharic-Roberta-NER",
        creator: [
      {
          name: "Gizachew",
          profile: "https://huggingface.co/Gizachew",
      }  ],
        link: "https://huggingface.co/Gizachew/Amharic-Roberta-NER",
        paper_title: "Amharic-Roberta-NER",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "xlm-roberta",
          "token-classification",
          "arxiv:1910.09700",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 210,
        title: "bert-amharic-tokenizer-16k",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/bert-amharic-tokenizer-16k",
        paper_title: "bert-amharic-tokenizer-16k",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "arxiv:1910.09700",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 211,
        title: "asr-amharic-phoneme-based-38",
        creator: [
      {
          name: "Samuael",
          profile: "https://huggingface.co/Samuael",
      }  ],
        link: "https://huggingface.co/Samuael/asr-amharic-phoneme-based-38",
        paper_title: "asr-amharic-phoneme-based-38",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "wav2vec2",
          "automatic-speech-recognition",
          "generated_from_trainer",
          "dataset:alffa_amharic",
          "base_model:Samuael/asr-amharic-phoneme-based-38",
          "base_model:finetune:Samuael/asr-amharic-phoneme-based-38",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 212,
        title: "xml-roberta-base-adapter-amharic",
        creator: [
      {
          name: "solwol",
          profile: "https://huggingface.co/solwol",
      }  ],
        link: "https://huggingface.co/solwol/xml-roberta-base-adapter-amharic",
        paper_title: "xml-roberta-base-adapter-amharic",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "adapter-transformers",
          "adapterhub:am/wikipedia-amharic-20240320",
          "xlm-roberta-base",
          "fill-mask",
          "dataset:wikipedia",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 213,
        title: "bert-amharic-tokenizer-24k",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/bert-amharic-tokenizer-24k",
        paper_title: "bert-amharic-tokenizer-24k",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "am",
          "dataset:oscar",
          "dataset:mc4",
          "license:mit",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 214,
        title: "llama-2-amharic-peft",
        creator: [
      {
          name: "Johntad110",
          profile: "https://huggingface.co/Johntad110",
      }  ],
        link: "https://huggingface.co/Johntad110/llama-2-amharic-peft",
        paper_title: "llama-2-amharic-peft",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "llama",
          "text-generation",
          "license:llama2",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 215,
        title: "whisper-tiny-amharic",
        creator: [
      {
          name: "Gizachew",
          profile: "https://huggingface.co/Gizachew",
      }  ],
        link: "https://huggingface.co/Gizachew/whisper-tiny-amharic",
        paper_title: "whisper-tiny-amharic",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "whisper",
          "automatic-speech-recognition",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 216,
        title: "xls-r-amharic",
        creator: [
      {
          name: "Gizachew",
          profile: "https://huggingface.co/Gizachew",
      }  ],
        link: "https://huggingface.co/Gizachew/xls-r-amharic",
        paper_title: "xls-r-amharic",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "wav2vec2",
          "generated_from_trainer",
          "base_model:ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition",
          "base_model:finetune:ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition",
          "license:apache-2.0",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 217,
        title: "AmharicNewsCharacterNormalized",
        creator: [
      {
          name: "akiseid",
          profile: "https://huggingface.co/akiseid",
      }  ],
        link: "https://huggingface.co/akiseid/AmharicNewsCharacterNormalized",
        paper_title: "AmharicNewsCharacterNormalized",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "xlm-roberta",
          "text-classification",
          "generated_from_trainer",
          "base_model:FacebookAI/xlm-roberta-base",
          "base_model:finetune:FacebookAI/xlm-roberta-base",
          "license:mit",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 218,
        title: "AmharicNewsNonCleanedSmall",
        creator: [
      {
          name: "akiseid",
          profile: "https://huggingface.co/akiseid",
      }  ],
        link: "https://huggingface.co/akiseid/AmharicNewsNonCleanedSmall",
        paper_title: "AmharicNewsNonCleanedSmall",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "xlm-roberta",
          "text-classification",
          "generated_from_trainer",
          "base_model:FacebookAI/xlm-roberta-base",
          "base_model:finetune:FacebookAI/xlm-roberta-base",
          "license:mit",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 219,
        title: "AmharicNewsNonCleanedNonWeighted",
        creator: [
      {
          name: "akiseid",
          profile: "https://huggingface.co/akiseid",
      }  ],
        link: "https://huggingface.co/akiseid/AmharicNewsNonCleanedNonWeighted",
        paper_title: "AmharicNewsNonCleanedNonWeighted",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "xlm-roberta",
          "text-classification",
          "generated_from_trainer",
          "base_model:FacebookAI/xlm-roberta-base",
          "base_model:finetune:FacebookAI/xlm-roberta-base",
          "license:mit",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 220,
        title: "AmharicNewsCharacterNormalizedUnWeighted",
        creator: [
      {
          name: "akiseid",
          profile: "https://huggingface.co/akiseid",
      }  ],
        link: "https://huggingface.co/akiseid/AmharicNewsCharacterNormalizedUnWeighted",
        paper_title: "AmharicNewsCharacterNormalizedUnWeighted",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "xlm-roberta",
          "text-classification",
          "generated_from_trainer",
          "base_model:FacebookAI/xlm-roberta-base",
          "base_model:finetune:FacebookAI/xlm-roberta-base",
          "license:mit",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 221,
        title: "wav2vec2-amharic",
        creator: [
      {
          name: "neilnie",
          profile: "https://huggingface.co/neilnie",
      }  ],
        link: "https://huggingface.co/neilnie/wav2vec2-amharic",
        paper_title: "wav2vec2-amharic",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "wav2vec2",
          "automatic-speech-recognition",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 222,
        title: "wav2vec2-large-xls-r-300m-amharic-maya",
        creator: [
      {
          name: "mayabedge",
          profile: "https://huggingface.co/mayabedge",
      }  ],
        link: "https://huggingface.co/mayabedge/wav2vec2-large-xls-r-300m-amharic-maya",
        paper_title: "wav2vec2-large-xls-r-300m-amharic-maya",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "wav2vec2",
          "automatic-speech-recognition",
          "arxiv:1910.09700",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 223,
        title: "wav2vec2-large-xls-r-300m-amharic-maya2",
        creator: [
      {
          name: "mayabedge",
          profile: "https://huggingface.co/mayabedge",
      }  ],
        link: "https://huggingface.co/mayabedge/wav2vec2-large-xls-r-300m-amharic-maya2",
        paper_title: "wav2vec2-large-xls-r-300m-amharic-maya2",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "arxiv:1910.09700",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 224,
        title: "amharic_nlidb_bert",
        creator: [
      {
          name: "Rakos",
          profile: "https://huggingface.co/Rakos",
      }  ],
        link: "https://huggingface.co/Rakos/amharic_nlidb_bert",
        paper_title: "amharic_nlidb_bert",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 225,
        title: "Amharic_news_classification",
        creator: [
      {
          name: "Yohanes213",
          profile: "https://huggingface.co/Yohanes213",
      }  ],
        link: "https://huggingface.co/Yohanes213/Amharic_news_classification",
        paper_title: "Amharic_news_classification",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "bert",
          "text-classification",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 226,
        title: "bert-amharic-tokenizer-28k",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/bert-amharic-tokenizer-28k",
        paper_title: "bert-amharic-tokenizer-28k",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "arxiv:1910.09700",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 227,
        title: "Amharic-llama-for-family-code-of-siri-lanka-GGUF",
        creator: [
      {
          name: "mradermacher",
          profile: "https://huggingface.co/mradermacher",
      }  ],
        link: "https://huggingface.co/mradermacher/Amharic-llama-for-family-code-of-siri-lanka-GGUF",
        paper_title: "Amharic-llama-for-family-code-of-siri-lanka-GGUF",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "gguf",
          "en",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 228,
        title: "xlm-r_amharic_sentiment",
        creator: [
      {
          name: "DGurgurov",
          profile: "https://huggingface.co/DGurgurov",
      }  ],
        link: "https://huggingface.co/DGurgurov/xlm-r_amharic_sentiment",
        paper_title: "xlm-r_amharic_sentiment",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "xlm-roberta",
          "text-classification",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 229,
        title: "hubert-agum960-amharic",
        creator: [
      {
          name: "Gizachew",
          profile: "https://huggingface.co/Gizachew",
      }  ],
        link: "https://huggingface.co/Gizachew/hubert-agum960-amharic",
        paper_title: "hubert-agum960-amharic",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "hubert",
          "generated_from_trainer",
          "base_model:facebook/hubert-large-ls960-ft",
          "base_model:finetune:facebook/hubert-large-ls960-ft",
          "license:apache-2.0",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 230,
        title: "wev2vec-base960-agu-amharic",
        creator: [
      {
          name: "Gizachew",
          profile: "https://huggingface.co/Gizachew",
      }  ],
        link: "https://huggingface.co/Gizachew/wev2vec-base960-agu-amharic",
        paper_title: "wev2vec-base960-agu-amharic",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "wav2vec2",
          "generated_from_trainer",
          "base_model:facebook/wav2vec2-base-960h",
          "base_model:finetune:facebook/wav2vec2-base-960h",
          "license:apache-2.0",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 231,
        title: "wev2vec-large960-agu-amharic",
        creator: [
      {
          name: "Gizachew",
          profile: "https://huggingface.co/Gizachew",
      }  ],
        link: "https://huggingface.co/Gizachew/wev2vec-large960-agu-amharic",
        paper_title: "wev2vec-large960-agu-amharic",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "wav2vec2",
          "generated_from_trainer",
          "base_model:facebook/wav2vec2-large-960h",
          "base_model:finetune:facebook/wav2vec2-large-960h",
          "license:apache-2.0",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 232,
        title: "Amharic-llama-for-family-code-of-ethiopia-v0.1.gguf",
        creator: [
      {
          name: "bisratwalle",
          profile: "https://huggingface.co/bisratwalle",
      }  ],
        link: "https://huggingface.co/bisratwalle/Amharic-llama-for-family-code-of-ethiopia-v0.1.gguf",
        paper_title: "Amharic-llama-for-family-code-of-ethiopia-v0.1.gguf",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "gguf",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 233,
        title: "bert-amharic-tokenizer-20k",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/bert-amharic-tokenizer-20k",
        paper_title: "bert-amharic-tokenizer-20k",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "arxiv:1910.09700",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 234,
        title: "bert-medium-amharic-finetuned-ner",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/bert-medium-amharic-finetuned-ner",
        paper_title: "bert-medium-amharic-finetuned-ner",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "bert",
          "token-classification",
          "am",
          "dataset:rasyosef/amharic-named-entity-recognition",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 235,
        title: "Amharic_xlm-roberta-base",
        creator: [
      {
          name: "Debela-Yadeta",
          profile: "https://huggingface.co/Debela-Yadeta",
      }  ],
        link: "https://huggingface.co/Debela-Yadeta/Amharic_xlm-roberta-base",
        paper_title: "Amharic_xlm-roberta-base",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 236,
        title: "Amharic_xlm-roberta-base_finetuned",
        creator: [
      {
          name: "Debela-Yadeta",
          profile: "https://huggingface.co/Debela-Yadeta",
      }  ],
        link: "https://huggingface.co/Debela-Yadeta/Amharic_xlm-roberta-base_finetuned",
        paper_title: "Amharic_xlm-roberta-base_finetuned",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 237,
        title: "gpt2-amharic-sentences-corpus",
        creator: [
      {
          name: "mikeendale",
          profile: "https://huggingface.co/mikeendale",
      }  ],
        link: "https://huggingface.co/mikeendale/gpt2-amharic-sentences-corpus",
        paper_title: "gpt2-amharic-sentences-corpus",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 238,
        title: "Amharic-QandA-llama2-finetuned",
        creator: [
      {
          name: "amanuelNVAI",
          profile: "https://huggingface.co/amanuelNVAI",
      }  ],
        link: "https://huggingface.co/amanuelNVAI/Amharic-QandA-llama2-finetuned",
        paper_title: "Amharic-QandA-llama2-finetuned",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "safetensors",
          "llama",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 239,
        title: "amharic_qa_fine_tuned_llama_model",
        creator: [
      {
          name: "redietmolla",
          profile: "https://huggingface.co/redietmolla",
      }  ],
        link: "https://huggingface.co/redietmolla/amharic_qa_fine_tuned_llama_model",
        paper_title: "amharic_qa_fine_tuned_llama_model",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "peft",
          "pytorch",
          "llama",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 240,
        title: "amharic-tft-merged",
        creator: [
      {
          name: "amaniopia",
          profile: "https://huggingface.co/amaniopia",
      }  ],
        link: "https://huggingface.co/amaniopia/amharic-tft-merged",
        paper_title: "amharic-tft-merged",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 241,
        title: "amharic-tft-lora",
        creator: [
      {
          name: "amaniopia",
          profile: "https://huggingface.co/amaniopia",
      }  ],
        link: "https://huggingface.co/amaniopia/amharic-tft-lora",
        paper_title: "amharic-tft-lora",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "text-generation-inference",
          "unsloth",
          "llama",
          "trl",
          "en",
          "license:apache-2.0",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 242,
        title: "amharic_llama3_model",
        creator: [
      {
          name: "aethiop",
          profile: "https://huggingface.co/aethiop",
      }  ],
        link: "https://huggingface.co/aethiop/amharic_llama3_model",
        paper_title: "amharic_llama3_model",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "peft",
          "safetensors",
          "arxiv:1910.09700",
          "base_model:NousResearch/Meta-Llama-3-8B-Instruct",
          "base_model:adapter:NousResearch/Meta-Llama-3-8B-Instruct",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 243,
        title: "llama-3.2-amharic-tokenizer-16k",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/llama-3.2-amharic-tokenizer-16k",
        paper_title: "llama-3.2-amharic-tokenizer-16k",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "arxiv:1910.09700",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 244,
        title: "llama-3.2-amharic-tokenizer-28k",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/llama-3.2-amharic-tokenizer-28k",
        paper_title: "llama-3.2-amharic-tokenizer-28k",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "arxiv:1910.09700",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 245,
        title: "age_amharic_geez",
        creator: [
      {
          name: "Henok",
          profile: "https://huggingface.co/Henok",
      }  ],
        link: "https://huggingface.co/Henok/age_amharic_geez",
        paper_title: "age_amharic_geez",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "license:apache-2.0",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 246,
        title: "w2v-bert-2.0-amharic-asr-dataset-1hrs-3",
        creator: [
      {
          name: "KYAGABA",
          profile: "https://huggingface.co/KYAGABA",
      }  ],
        link: "https://huggingface.co/KYAGABA/w2v-bert-2.0-amharic-asr-dataset-1hrs-3",
        paper_title: "w2v-bert-2.0-amharic-asr-dataset-1hrs-3",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "arxiv:1910.09700",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 247,
        title: "w2v-bert-2.0-amharic-asr-dataset-10hrs-4",
        creator: [
      {
          name: "KYAGABA",
          profile: "https://huggingface.co/KYAGABA",
      }  ],
        link: "https://huggingface.co/KYAGABA/w2v-bert-2.0-amharic-asr-dataset-10hrs-4",
        paper_title: "w2v-bert-2.0-amharic-asr-dataset-10hrs-4",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "arxiv:1910.09700",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 248,
        title: "w2v-bert-2.0-amharic-asr-dataset-5hrs-3",
        creator: [
      {
          name: "KYAGABA",
          profile: "https://huggingface.co/KYAGABA",
      }  ],
        link: "https://huggingface.co/KYAGABA/w2v-bert-2.0-amharic-asr-dataset-5hrs-3",
        paper_title: "w2v-bert-2.0-amharic-asr-dataset-5hrs-3",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "arxiv:1910.09700",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 249,
        title: "gemma-2-amharic-tokenizer-8k",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/rasyosef/gemma-2-amharic-tokenizer-8k",
        paper_title: "gemma-2-amharic-tokenizer-8k",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "arxiv:1910.09700",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 250,
        title: "w2v-bert-2.0-amharic-asr-dataset-20hrs-3",
        creator: [
      {
          name: "KYAGABA",
          profile: "https://huggingface.co/KYAGABA",
      }  ],
        link: "https://huggingface.co/KYAGABA/w2v-bert-2.0-amharic-asr-dataset-20hrs-3",
        paper_title: "w2v-bert-2.0-amharic-asr-dataset-20hrs-3",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "arxiv:1910.09700",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 251,
        title: "Llama2-7b-qlora-amharic-QA",
        creator: [
      {
          name: "Gizachew",
          profile: "https://huggingface.co/Gizachew",
      }  ],
        link: "https://huggingface.co/Gizachew/Llama2-7b-qlora-amharic-QA",
        paper_title: "Llama2-7b-qlora-amharic-QA",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "arxiv:1910.09700",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 252,
        title: "llama-3.2-tokenizer-amharic-16k",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/llama-3.2-tokenizer-amharic-16k",
        paper_title: "llama-3.2-tokenizer-amharic-16k",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "arxiv:1910.09700",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 253,
        title: "llama-3.2-tokenizer-amharic-16k-v2",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/llama-3.2-tokenizer-amharic-16k-v2",
        paper_title: "llama-3.2-tokenizer-amharic-16k-v2",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "arxiv:1910.09700",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 254,
        title: "large-mms-1b-amharic_try2",
        creator: [
      {
          name: "RahelM",
          profile: "https://huggingface.co/RahelM",
      }  ],
        link: "https://huggingface.co/RahelM/large-mms-1b-amharic_try2",
        paper_title: "large-mms-1b-amharic_try2",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "tensorboard",
          "safetensors",
          "wav2vec2",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 255,
        title: "w2v-bert-2.0-amharic-asr-dataset-1hrs-4",
        creator: [
      {
          name: "KYAGABA",
          profile: "https://huggingface.co/KYAGABA",
      }  ],
        link: "https://huggingface.co/KYAGABA/w2v-bert-2.0-amharic-asr-dataset-1hrs-4",
        paper_title: "w2v-bert-2.0-amharic-asr-dataset-1hrs-4",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "arxiv:1910.09700",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 256,
        title: "roberta-small-amharic-32k",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/roberta-small-amharic-32k",
        paper_title: "roberta-small-amharic-32k",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 257,
        title: "llama-3.2-amharic-32k-1024-v4",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/llama-3.2-amharic-32k-1024-v4",
        paper_title: "llama-3.2-amharic-32k-1024-v4",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "llama",
          "text-generation",
          "generated_from_trainer",
          "base_model:meta-llama/Llama-3.2-1B",
          "base_model:finetune:meta-llama/Llama-3.2-1B",
          "license:llama3.2",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 258,
        title: "llama-3.2-1b-amharic-16k-v3-instruct-bs4-all",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/llama-3.2-1b-amharic-16k-v3-instruct-bs4-all",
        paper_title: "llama-3.2-1b-amharic-16k-v3-instruct-bs4-all",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "tensorboard",
          "safetensors",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 259,
        title: "llama-3.2-1b-amharic-16k-v3-mt",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/llama-3.2-1b-amharic-16k-v3-mt",
        paper_title: "llama-3.2-1b-amharic-16k-v3-mt",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "tensorboard",
          "safetensors",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 260,
        title: "Amharic-Barille",
        creator: [
      {
          name: "Gizachew",
          profile: "https://huggingface.co/Gizachew",
      }  ],
        link: "https://huggingface.co/Gizachew/Amharic-Barille",
        paper_title: "Amharic-Barille",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 261,
        title: "llama-3.2-amharic-32k-150m-1024",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/llama-3.2-amharic-32k-150m-1024",
        paper_title: "llama-3.2-amharic-32k-150m-1024",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "tensorboard",
          "safetensors",
          "llama",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 262,
        title: "llama-3.2-amharic-32k-1024-v4-instruct-bs8-256",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/llama-3.2-amharic-32k-1024-v4-instruct-bs8-256",
        paper_title: "llama-3.2-amharic-32k-1024-v4-instruct-bs8-256",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "llama",
          "text-generation",
          "generated_from_trainer",
          "trl",
          "sft",
          "conversational",
          "base_model:yosefw/llama-3.2-amharic-32k-1024-v4-instruct-bs8-256",
          "base_model:finetune:yosefw/llama-3.2-amharic-32k-1024-v4-instruct-bs8-256",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 263,
        title: "rasyosef_-_Llama-3.2-1B-Amharic-awq",
        creator: [
      {
          name: "RichardErkhov",
          profile: "https://huggingface.co/RichardErkhov",
      }  ],
        link: "https://huggingface.co/RichardErkhov/rasyosef_-_Llama-3.2-1B-Amharic-awq",
        paper_title: "rasyosef_-_Llama-3.2-1B-Amharic-awq",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "safetensors",
          "llama",
          "4-bit",
          "awq",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 264,
        title: "yosefw-llama-3.2-180m-amharic-instruct-apo-bnb-8bit-smashed",
        creator: [
      {
          name: "PrunaAI",
          profile: "https://huggingface.co/PrunaAI",
      }  ],
        link: "https://huggingface.co/PrunaAI/yosefw-llama-3.2-180m-amharic-instruct-apo-bnb-8bit-smashed",
        paper_title: "yosefw-llama-3.2-180m-amharic-instruct-apo-bnb-8bit-smashed",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "safetensors",
          "llama",
          "pruna-ai",
          "base_model:yosefw/llama-3.2-180m-amharic-instruct-apo",
          "base_model:quantized:yosefw/llama-3.2-180m-amharic-instruct-apo",
          "8-bit",
          "bitsandbytes",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 265,
        title: "Llama-3-8B-Amharic-Video-QandA",
        creator: [
      {
          name: "hinaltt",
          profile: "https://huggingface.co/hinaltt",
      }  ],
        link: "https://huggingface.co/hinaltt/Llama-3-8B-Amharic-Video-QandA",
        paper_title: "Llama-3-8B-Amharic-Video-QandA",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "safetensors",
          "llama",
          "code",
          "text-generation",
          "conversational",
          "am",
          "base_model:meta-llama/Meta-Llama-3-8B-Instruct",
          "base_model:finetune:meta-llama/Meta-Llama-3-8B-Instruct",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 266,
        title: "llama-3.2-180m-amharic-instruct-apo-2",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/llama-3.2-180m-amharic-instruct-apo-2",
        paper_title: "llama-3.2-180m-amharic-instruct-apo-2",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "llama",
          "text-generation",
          "generated_from_trainer",
          "trl",
          "dpo",
          "conversational",
          "arxiv:2305.18290",
          "base_model:rasyosef/Llama-3.2-180M-Amharic-Instruct",
          "base_model:finetune:rasyosef/Llama-3.2-180M-Amharic-Instruct",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 267,
        title: "llama-3.2-amharic-32k-1024-v4-instruct-bs4-lora",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/llama-3.2-amharic-32k-1024-v4-instruct-bs4-lora",
        paper_title: "llama-3.2-amharic-32k-1024-v4-instruct-bs4-lora",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "generated_from_trainer",
          "trl",
          "sft",
          "base_model:rasyosef/Llama-3.2-400M-Amharic",
          "base_model:finetune:rasyosef/Llama-3.2-400M-Amharic",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 268,
        title: "Amharicprocessor-trocr",
        creator: [
      {
          name: "Gizachew",
          profile: "https://huggingface.co/Gizachew",
      }  ],
        link: "https://huggingface.co/Gizachew/Amharicprocessor-trocr",
        paper_title: "Amharicprocessor-trocr",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "arxiv:1910.09700",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 269,
        title: "llama-3.2-amharic-32k-1024-v5",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/llama-3.2-amharic-32k-1024-v5",
        paper_title: "llama-3.2-amharic-32k-1024-v5",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "llama",
          "text-generation",
          "generated_from_trainer",
          "base_model:meta-llama/Llama-3.2-1B",
          "base_model:finetune:meta-llama/Llama-3.2-1B",
          "license:llama3.2",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 270,
        title: "llama-3.2-amharic-32k-1024-v6",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/llama-3.2-amharic-32k-1024-v6",
        paper_title: "llama-3.2-amharic-32k-1024-v6",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "llama",
          "text-generation",
          "generated_from_trainer",
          "base_model:yosefw/llama-3.2-amharic-32k-1024-v6",
          "base_model:finetune:yosefw/llama-3.2-amharic-32k-1024-v6",
          "license:llama3.2",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 271,
        title: "yosefw-llama-3.2-amharic-32k-1024-v6-bnb-8bit-smashed",
        creator: [
      {
          name: "PrunaAI",
          profile: "https://huggingface.co/PrunaAI",
      }  ],
        link: "https://huggingface.co/PrunaAI/yosefw-llama-3.2-amharic-32k-1024-v6-bnb-8bit-smashed",
        paper_title: "yosefw-llama-3.2-amharic-32k-1024-v6-bnb-8bit-smashed",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "safetensors",
          "llama",
          "pruna-ai",
          "base_model:yosefw/llama-3.2-amharic-32k-1024-v6",
          "base_model:quantized:yosefw/llama-3.2-amharic-32k-1024-v6",
          "8-bit",
          "bitsandbytes",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 272,
        title: "finetuned_Llama_3_1_8B_Amharic_unsloth",
        creator: [
      {
          name: "CRLannister",
          profile: "https://huggingface.co/CRLannister",
      }  ],
        link: "https://huggingface.co/CRLannister/finetuned_Llama_3_1_8B_Amharic_unsloth",
        paper_title: "finetuned_Llama_3_1_8B_Amharic_unsloth",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "safetensors",
          "llama",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 273,
        title: "amharic-hate-speech-detection-mBERT",
        creator: [
      {
          name: "ermi8",
          profile: "https://huggingface.co/ermi8",
      }  ],
        link: "https://huggingface.co/ermi8/amharic-hate-speech-detection-mBERT",
        paper_title: "amharic-hate-speech-detection-mBERT",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "bert",
          "text-classification",
          "arxiv:1910.09700",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 274,
        title: "amharic-hate-speech-detection-mBERT",
        creator: [
      {
          name: "abdaiyan",
          profile: "https://huggingface.co/abdaiyan",
      }  ],
        link: "https://huggingface.co/abdaiyan/amharic-hate-speech-detection-mBERT",
        paper_title: "amharic-hate-speech-detection-mBERT",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "bert",
          "text-classification",
          "arxiv:1910.09700",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 275,
        title: "wav2vec2-large-xls-r-300m-amharic-ASR-final",
        creator: [
      {
          name: "timotewos",
          profile: "https://huggingface.co/timotewos",
      }  ],
        link: "https://huggingface.co/timotewos/wav2vec2-large-xls-r-300m-amharic-ASR-final",
        paper_title: "wav2vec2-large-xls-r-300m-amharic-ASR-final",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "tensorboard",
          "safetensors",
          "wav2vec2",
          "generated_from_trainer",
          "dataset:common_voice_16_1",
          "base_model:facebook/wav2vec2-xls-r-300m",
          "base_model:finetune:facebook/wav2vec2-xls-r-300m",
          "license:apache-2.0",
          "model-index",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 276,
        title: "finetuned_Llama_3_1_8B_Amharic_lora",
        creator: [
      {
          name: "CRLannister",
          profile: "https://huggingface.co/CRLannister",
      }  ],
        link: "https://huggingface.co/CRLannister/finetuned_Llama_3_1_8B_Amharic_lora",
        paper_title: "finetuned_Llama_3_1_8B_Amharic_lora",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "text-generation-inference",
          "unsloth",
          "llama",
          "trl",
          "en",
          "base_model:unsloth/Meta-Llama-3.1-8B-Instruct-bnb-4bit",
          "base_model:finetune:unsloth/Meta-Llama-3.1-8B-Instruct-bnb-4bit",
          "license:apache-2.0",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 277,
        title: "amharic-hate-speech-detection-mBERT",
        creator: [
      {
          name: "shuaibam",
          profile: "https://huggingface.co/shuaibam",
      }  ],
        link: "https://huggingface.co/shuaibam/amharic-hate-speech-detection-mBERT",
        paper_title: "amharic-hate-speech-detection-mBERT",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "bert",
          "text-classification",
          "arxiv:1910.09700",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 278,
        title: "rasyosef_-_Llama-3.2-400M-Amharic-awq",
        creator: [
      {
          name: "RichardErkhov",
          profile: "https://huggingface.co/RichardErkhov",
      }  ],
        link: "https://huggingface.co/RichardErkhov/rasyosef_-_Llama-3.2-400M-Amharic-awq",
        paper_title: "rasyosef_-_Llama-3.2-400M-Amharic-awq",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "safetensors",
          "llama",
          "4-bit",
          "awq",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 279,
        title: "yosefw_-_llama-3.2-amharic-32k-1024-v4-awq",
        creator: [
      {
          name: "RichardErkhov",
          profile: "https://huggingface.co/RichardErkhov",
      }  ],
        link: "https://huggingface.co/RichardErkhov/yosefw_-_llama-3.2-amharic-32k-1024-v4-awq",
        paper_title: "yosefw_-_llama-3.2-amharic-32k-1024-v4-awq",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "safetensors",
          "llama",
          "4-bit",
          "awq",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 280,
        title: "yosefw_-_llama-3.2-amharic-32k-1024-v4-instruct-bs8-256-awq",
        creator: [
      {
          name: "RichardErkhov",
          profile: "https://huggingface.co/RichardErkhov",
      }  ],
        link: "https://huggingface.co/RichardErkhov/yosefw_-_llama-3.2-amharic-32k-1024-v4-instruct-bs8-256-awq",
        paper_title: "yosefw_-_llama-3.2-amharic-32k-1024-v4-instruct-bs8-256-awq",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "safetensors",
          "llama",
          "4-bit",
          "awq",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 281,
        title: "amharic-wav2vec2-trained",
        creator: [
      {
          name: "rml1",
          profile: "https://huggingface.co/rml1",
      }  ],
        link: "https://huggingface.co/rml1/amharic-wav2vec2-trained",
        paper_title: "amharic-wav2vec2-trained",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 282,
        title: "amharic-hate-speech-detection-mBERT",
        creator: [
      {
          name: "indominyus",
          profile: "https://huggingface.co/indominyus",
      }  ],
        link: "https://huggingface.co/indominyus/amharic-hate-speech-detection-mBERT",
        paper_title: "amharic-hate-speech-detection-mBERT",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "bert",
          "text-classification",
          "arxiv:1910.09700",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 283,
        title: "rasyosef_-_Llama-3.2-1B-Amharic-Instruct-awq",
        creator: [
      {
          name: "RichardErkhov",
          profile: "https://huggingface.co/RichardErkhov",
      }  ],
        link: "https://huggingface.co/RichardErkhov/rasyosef_-_Llama-3.2-1B-Amharic-Instruct-awq",
        paper_title: "rasyosef_-_Llama-3.2-1B-Amharic-Instruct-awq",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "safetensors",
          "llama",
          "4-bit",
          "awq",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 284,
        title: "roberta-base-amharic-32k-v2",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/roberta-base-amharic-32k-v2",
        paper_title: "roberta-base-amharic-32k-v2",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 285,
        title: "amharic-hate-detection",
        creator: [
      {
          name: "abdaiyan",
          profile: "https://huggingface.co/abdaiyan",
      }  ],
        link: "https://huggingface.co/abdaiyan/amharic-hate-detection",
        paper_title: "amharic-hate-detection",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "safetensors",
          "bert",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 286,
        title: "amharic_summ_model",
        creator: [
      {
          name: "mogesa",
          profile: "https://huggingface.co/mogesa",
      }  ],
        link: "https://huggingface.co/mogesa/amharic_summ_model",
        paper_title: "amharic_summ_model",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "summarization",
          "am",
          "arxiv:1910.09700",
          "base_model:google/mt5-base",
          "base_model:finetune:google/mt5-base",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 287,
        title: "amharic-hate-speech-detection",
        creator: [
      {
          name: "ermi8",
          profile: "https://huggingface.co/ermi8",
      }  ],
        link: "https://huggingface.co/ermi8/amharic-hate-speech-detection",
        paper_title: "amharic-hate-speech-detection",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "safetensors",
          "bert",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 288,
        title: "amharic-llama-3b",
        creator: [
      {
          name: "rml1",
          profile: "https://huggingface.co/rml1",
      }  ],
        link: "https://huggingface.co/rml1/amharic-llama-3b",
        paper_title: "amharic-llama-3b",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 289,
        title: "roberta-mini-amharic-32k-256",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/roberta-mini-amharic-32k-256",
        paper_title: "roberta-mini-amharic-32k-256",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "tensorboard",
          "safetensors",
          "xlm-roberta",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 290,
        title: "cs221-xlm-roberta-large-finetuned-amharic-amh-finetuned-10-epochs",
        creator: [
      {
          name: "sercetexam9",
          profile: "https://huggingface.co/sercetexam9",
      }  ],
        link: "https://huggingface.co/sercetexam9/cs221-xlm-roberta-large-finetuned-amharic-amh-finetuned-10-epochs",
        paper_title: "cs221-xlm-roberta-large-finetuned-amharic-amh-finetuned-10-epochs",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "xlm-roberta",
          "text-classification",
          "generated_from_trainer",
          "base_model:Davlan/xlm-roberta-large-finetuned-amharic",
          "base_model:finetune:Davlan/xlm-roberta-large-finetuned-amharic",
          "license:mit",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 291,
        title: "roberta-mini-amharic-32k-v2",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/roberta-mini-amharic-32k-v2",
        paper_title: "roberta-mini-amharic-32k-v2",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "tensorboard",
          "safetensors",
          "xlm-roberta",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 292,
        title: "gemma-2-2b-it-finetuned-amharic",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/gemma-2-2b-it-finetuned-amharic",
        paper_title: "gemma-2-2b-it-finetuned-amharic",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "generated_from_trainer",
          "trl",
          "sft",
          "base_model:google/gemma-2-2b-it",
          "base_model:finetune:google/gemma-2-2b-it",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 293,
        title: "cs221-bert-base-multilingual-cased-finetuned-amharic-amh-finetuned-20-epochs",
        creator: [
      {
          name: "sercetexam9",
          profile: "https://huggingface.co/sercetexam9",
      }  ],
        link: "https://huggingface.co/sercetexam9/cs221-bert-base-multilingual-cased-finetuned-amharic-amh-finetuned-20-epochs",
        paper_title: "cs221-bert-base-multilingual-cased-finetuned-amharic-amh-finetuned-20-epochs",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "bert",
          "text-classification",
          "generated_from_trainer",
          "base_model:Davlan/bert-base-multilingual-cased-finetuned-amharic",
          "base_model:finetune:Davlan/bert-base-multilingual-cased-finetuned-amharic",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 294,
        title: "mt5-amharic-antonym",
        creator: [
      {
          name: "Beck90",
          profile: "https://huggingface.co/Beck90",
      }  ],
        link: "https://huggingface.co/Beck90/mt5-amharic-antonym",
        paper_title: "mt5-amharic-antonym",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "mt5",
          "text2text-generation",
          "generated_from_trainer",
          "base_model:google/mt5-small",
          "base_model:finetune:google/mt5-small",
          "license:apache-2.0",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 295,
        title: "m2m-amharic-antonym",
        creator: [
      {
          name: "Beck90",
          profile: "https://huggingface.co/Beck90",
      }  ],
        link: "https://huggingface.co/Beck90/m2m-amharic-antonym",
        paper_title: "m2m-amharic-antonym",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "m2m_100",
          "text2text-generation",
          "generated_from_trainer",
          "base_model:facebook/m2m100_418M",
          "base_model:finetune:facebook/m2m100_418M",
          "license:mit",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 296,
        title: "m2m12b-amharic-antonym",
        creator: [
      {
          name: "Beck90",
          profile: "https://huggingface.co/Beck90",
      }  ],
        link: "https://huggingface.co/Beck90/m2m12b-amharic-antonym",
        paper_title: "m2m12b-amharic-antonym",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 297,
        title: "cs221-xlm-roberta-large-finetuned-amharic-amh-finetuned-10-epochs-ary-20-epochs",
        creator: [
      {
          name: "sercetexam9",
          profile: "https://huggingface.co/sercetexam9",
      }  ],
        link: "https://huggingface.co/sercetexam9/cs221-xlm-roberta-large-finetuned-amharic-amh-finetuned-10-epochs-ary-20-epochs",
        paper_title: "cs221-xlm-roberta-large-finetuned-amharic-amh-finetuned-10-epochs-ary-20-epochs",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "xlm-roberta",
          "text-classification",
          "generated_from_trainer",
          "base_model:sercetexam9/cs221-xlm-roberta-large-finetuned-amharic-amh-finetuned-10-epochs",
          "base_model:finetune:sercetexam9/cs221-xlm-roberta-large-finetuned-amharic-amh-finetuned-10-epochs",
          "license:mit",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 298,
        title: "m2m-amharic-antonym2",
        creator: [
      {
          name: "Beck90",
          profile: "https://huggingface.co/Beck90",
      }  ],
        link: "https://huggingface.co/Beck90/m2m-amharic-antonym2",
        paper_title: "m2m-amharic-antonym2",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "m2m_100",
          "text2text-generation",
          "generated_from_trainer",
          "base_model:facebook/m2m100_418M",
          "base_model:finetune:facebook/m2m100_418M",
          "license:mit",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 299,
        title: "amharic-summarizer",
        creator: [
      {
          name: "yonatan-h",
          profile: "https://huggingface.co/yonatan-h",
      }  ],
        link: "https://huggingface.co/yonatan-h/amharic-summarizer",
        paper_title: "amharic-summarizer",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "mt5",
          "text2text-generation",
          "arxiv:1910.09700",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 300,
        title: "m2m-amharic-synonym",
        creator: [
      {
          name: "Beck90",
          profile: "https://huggingface.co/Beck90",
      }  ],
        link: "https://huggingface.co/Beck90/m2m-amharic-synonym",
        paper_title: "m2m-amharic-synonym",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "m2m_100",
          "text2text-generation",
          "generated_from_trainer",
          "base_model:facebook/m2m100_418M",
          "base_model:finetune:facebook/m2m100_418M",
          "license:mit",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 301,
        title: "m2m-amharic-synonym2",
        creator: [
      {
          name: "Beck90",
          profile: "https://huggingface.co/Beck90",
      }  ],
        link: "https://huggingface.co/Beck90/m2m-amharic-synonym2",
        paper_title: "m2m-amharic-synonym2",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "m2m_100",
          "text2text-generation",
          "generated_from_trainer",
          "base_model:facebook/m2m100_418M",
          "base_model:finetune:facebook/m2m100_418M",
          "license:mit",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 302,
        title: "m2m-amharic-synonym-tuned",
        creator: [
      {
          name: "Beck90",
          profile: "https://huggingface.co/Beck90",
      }  ],
        link: "https://huggingface.co/Beck90/m2m-amharic-synonym-tuned",
        paper_title: "m2m-amharic-synonym-tuned",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "m2m_100",
          "text2text-generation",
          "generated_from_trainer",
          "base_model:facebook/m2m100_418M",
          "base_model:finetune:facebook/m2m100_418M",
          "license:mit",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 303,
        title: "AmharicNewsClassifier",
        creator: [
      {
          name: "fikreanteneh",
          profile: "https://huggingface.co/fikreanteneh",
      }  ],
        link: "https://huggingface.co/fikreanteneh/AmharicNewsClassifier",
        paper_title: "AmharicNewsClassifier",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "safetensors",
          "xlm-roberta",
          "license:mit",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 304,
        title: "mt5-small-amharic-text-summaization",
        creator: [
      {
          name: "yohannes-07",
          profile: "https://huggingface.co/yohannes-07",
      }  ],
        link: "https://huggingface.co/yohannes-07/mt5-small-amharic-text-summaization",
        paper_title: "mt5-small-amharic-text-summaization",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 305,
        title: "hate-speech-amharic",
        creator: [
      {
          name: "rio3210",
          profile: "https://huggingface.co/rio3210",
      }  ],
        link: "https://huggingface.co/rio3210/hate-speech-amharic",
        paper_title: "hate-speech-amharic",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "joblib",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 306,
        title: "amharic-hate-speech-rnn-model",
        creator: [
      {
          name: "rio3210",
          profile: "https://huggingface.co/rio3210",
      }  ],
        link: "https://huggingface.co/rio3210/amharic-hate-speech-rnn-model",
        paper_title: "amharic-hate-speech-rnn-model",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "keras",
          "joblib",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 307,
        title: "m2m-amharic-antonym-augmented",
        creator: [
      {
          name: "Beck90",
          profile: "https://huggingface.co/Beck90",
      }  ],
        link: "https://huggingface.co/Beck90/m2m-amharic-antonym-augmented",
        paper_title: "m2m-amharic-antonym-augmented",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "m2m_100",
          "text2text-generation",
          "generated_from_trainer",
          "base_model:facebook/m2m100_418M",
          "base_model:finetune:facebook/m2m100_418M",
          "license:mit",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 308,
        title: "m2m-amharic-antonym2-augmented",
        creator: [
      {
          name: "Beck90",
          profile: "https://huggingface.co/Beck90",
      }  ],
        link: "https://huggingface.co/Beck90/m2m-amharic-antonym2-augmented",
        paper_title: "m2m-amharic-antonym2-augmented",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "m2m_100",
          "text2text-generation",
          "generated_from_trainer",
          "base_model:facebook/m2m100_418M",
          "base_model:finetune:facebook/m2m100_418M",
          "license:mit",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 309,
        title: "english-amharic_machine-translation",
        creator: [
      {
          name: "ashuChufamo",
          profile: "https://huggingface.co/ashuChufamo",
      }  ],
        link: "https://huggingface.co/ashuChufamo/english-amharic_machine-translation",
        paper_title: "english-amharic_machine-translation",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "translation",
          "en",
          "am",
          "dataset:ashuChufamo/parallel-corpus_en-am",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 310,
        title: "bert-amharic-reranker-small",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/bert-amharic-reranker-small",
        paper_title: "bert-amharic-reranker-small",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "bert",
          "text-classification",
          "cross-encoder",
          "arxiv:1910.09700",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 311,
        title: "amharic-corpus",
        creator: [
      {
          name: "Bedru",
          profile: "https://huggingface.co/Bedru",
      }  ],
        link: "https://huggingface.co/Bedru/amharic-corpus",
        paper_title: "amharic-corpus",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 312,
        title: "whisper-small-amharic_dataset-amh-50hrs-v2",
        creator: [
      {
          name: "asr-africa",
          profile: "https://huggingface.co/asr-africa",
      }  ],
        link: "https://huggingface.co/asr-africa/whisper-small-amharic_dataset-amh-50hrs-v2",
        paper_title: "whisper-small-amharic_dataset-amh-50hrs-v2",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 313,
        title: "bert-amharic-reranker-small-v3",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/bert-amharic-reranker-small-v3",
        paper_title: "bert-amharic-reranker-small-v3",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "bert",
          "text-classification",
          "cross-encoder",
          "arxiv:1910.09700",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 314,
        title: "bert-amharic-reranker-small-v5",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/bert-amharic-reranker-small-v5",
        paper_title: "bert-amharic-reranker-small-v5",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "bert",
          "text-classification",
          "cross-encoder",
          "arxiv:1910.09700",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 315,
        title: "bert-amharic-reranker-small-v6",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/yosefw/bert-amharic-reranker-small-v6",
        paper_title: "bert-amharic-reranker-small-v6",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "bert",
          "text-classification",
          "cross-encoder",
          "arxiv:1910.09700",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 316,
        title: "amharic-transformer",
        creator: [
      {
          name: "mahdertesfaye",
          profile: "https://huggingface.co/mahdertesfaye",
      }  ],
        link: "https://huggingface.co/mahdertesfaye/amharic-transformer",
        paper_title: "amharic-transformer",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "license:apache-2.0",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 317,
        title: "wav2vec2-large-960h-amharic",
        creator: [
      {
          name: "tinkvu",
          profile: "https://huggingface.co/tinkvu",
      }  ],
        link: "https://huggingface.co/tinkvu/wav2vec2-large-960h-amharic",
        paper_title: "wav2vec2-large-960h-amharic",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "safetensors",
          "wav2vec2",
          "license:apache-2.0",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 318,
        title: "amharic_generation",
        creator: [
      {
          name: "Ofge",
          profile: "https://huggingface.co/Ofge",
      }  ],
        link: "https://huggingface.co/Ofge/amharic_generation",
        paper_title: "amharic_generation",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "license:mit",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 319,
        title: "flores_english_amharic_mt",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/datasets/rasyosef/flores_english_amharic_mt",
        paper_title: "flores_english_amharic_mt",
        downloads_total: 920,
      
        last_modified: "2024-11-12 00:29:11+00:00",
        tags: [
          "task_categories:translation",
          "language:am",
          "size_categories:1K<n<10K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 320,
        title: "amharic_sft_data",
        creator: [
      {
          name: "maanasharma5",
          profile: "https://huggingface.co/maanasharma5",
      }  ],
        link: "https://huggingface.co/datasets/maanasharma5/amharic_sft_data",
        paper_title: "amharic_sft_data",
        downloads_total: 914,
      
        last_modified: "2024-11-29 04:25:06+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 321,
        title: "amharichatespeechranlp",
        creator: [
      {
          name: "uhhlt",
          profile: "https://huggingface.co/uhhlt",
      }  ],
        link: "https://huggingface.co/datasets/uhhlt/amharichatespeechranlp",
        paper_title: "amharichatespeechranlp",
        downloads_total: 713,
      
        last_modified: "2024-04-17 09:09:23+00:00",
        tags: [
          "task_categories:text-classification",
          "language:amh",
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
          "am",
        ],
        type: "dataset",
      },
      {
        id: 322,
        title: "amharic-pretraining-corpus",
        creator: [
      {
          name: "yordanoswuletaw",
          profile: "https://huggingface.co/yordanoswuletaw",
      }  ],
        link: "https://huggingface.co/datasets/yordanoswuletaw/amharic-pretraining-corpus",
        paper_title: "amharic-pretraining-corpus",
        downloads_total: 203,
      
        last_modified: "2025-03-11 11:06:10+00:00",
        tags: [
          "task_categories:text-generation",
          "language:am",
          "license:apache-2.0",
          "size_categories:100M<n<1B",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 323,
        title: "amharic-passage-retrieval-dataset-with-negatives",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/datasets/yosefw/amharic-passage-retrieval-dataset-with-negatives",
        paper_title: "amharic-passage-retrieval-dataset-with-negatives",
        downloads_total: 135,
      
        last_modified: "2025-03-11 09:28:47+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:dask",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 324,
        title: "amharic-sentences-corpus",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/datasets/rasyosef/amharic-sentences-corpus",
        paper_title: "amharic-sentences-corpus",
        downloads_total: 132,
      
        last_modified: "2024-07-20 22:05:03+00:00",
        tags: [
          "language:am",
          "size_categories:1M<n<10M",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:dask",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 325,
        title: "amharic-speech-dataset-110HRS-V21",
        creator: [
      {
          name: "KYAGABA",
          profile: "https://huggingface.co/KYAGABA",
      }  ],
        link: "https://huggingface.co/datasets/KYAGABA/amharic-speech-dataset-110HRS-V21",
        paper_title: "amharic-speech-dataset-110HRS-V21",
        downloads_total: 102,
      
        last_modified: "2024-12-13 17:12:42+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:audio",
          "modality:text",
          "library:datasets",
          "library:dask",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 326,
        title: "amharic-qa",
        creator: [
      {
          name: "dagim",
          profile: "https://huggingface.co/dagim",
      }  ],
        link: "https://huggingface.co/datasets/dagim/amharic-qa",
        paper_title: "amharic-qa",
        downloads_total: 96,
      
        last_modified: "2024-03-21 08:11:31+00:00",
        tags: [
          "license:mit",
          "size_categories:1K<n<10K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "arxiv:2303.03290",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 327,
        title: "KYAGABA_AMHARIC_ALFA_DATASET_100HRS",
        creator: [
      {
          name: "KYAGABA",
          profile: "https://huggingface.co/KYAGABA",
      }  ],
        link: "https://huggingface.co/datasets/KYAGABA/KYAGABA_AMHARIC_ALFA_DATASET_100HRS",
        paper_title: "KYAGABA_AMHARIC_ALFA_DATASET_100HRS",
        downloads_total: 96,
      
        last_modified: "2024-11-05 11:00:43+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:audio",
          "modality:text",
          "library:datasets",
          "library:dask",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 328,
        title: "Amharic-News-Text-classification-Dataset",
        creator: [
      {
          name: "israel",
          profile: "https://huggingface.co/israel",
      }  ],
        link: "https://huggingface.co/datasets/israel/Amharic-News-Text-classification-Dataset",
        paper_title: "Amharic-News-Text-classification-Dataset",
        downloads_total: 88,
      
        last_modified: "2022-04-06 09:27:52+00:00",
        tags: [
          "license:cc-by-4.0",
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:tabular",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "arxiv:2103.05639",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 329,
        title: "Amharic_Instruction_dataset",
        creator: [
      {
          name: "EthioNLP",
          profile: "https://huggingface.co/EthioNLP",
      }  ],
        link: "https://huggingface.co/datasets/EthioNLP/Amharic_Instruction_dataset",
        paper_title: "Amharic_Instruction_dataset",
        downloads_total: 85,
      
        last_modified: "2024-07-23 08:32:20+00:00",
        tags: [
          "language:am",
          "size_categories:100K<n<1M",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "arxiv:2402.08015",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 330,
        title: "amharic-news-category-classification",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/datasets/rasyosef/amharic-news-category-classification",
        paper_title: "amharic-news-category-classification",
        downloads_total: 70,
      
        last_modified: "2024-10-25 01:19:33+00:00",
        tags: [
          "task_categories:text-classification",
          "task_categories:summarization",
          "language:am",
          "license:cc-by-4.0",
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "arxiv:2103.05639",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 331,
        title: "amharic-retrieval-dataset-with-negatives",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/datasets/yosefw/amharic-retrieval-dataset-with-negatives",
        paper_title: "amharic-retrieval-dataset-with-negatives",
        downloads_total: 70,
      
        last_modified: "2025-02-28 22:51:52+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:dask",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 332,
        title: "amharic-passage-retrieval-dataset",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/datasets/rasyosef/amharic-passage-retrieval-dataset",
        paper_title: "amharic-passage-retrieval-dataset",
        downloads_total: 68,
      
        last_modified: "2025-03-10 01:02:44+00:00",
        tags: [
          "language:am",
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 333,
        title: "afrikaans-amharic_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/afrikaans-amharic_sentence-pairs",
        paper_title: "afrikaans-amharic_sentence-pairs",
        downloads_total: 45,
      
        last_modified: "2025-04-03 13:56:20+00:00",
        tags: [
          "size_categories:1M<n<10M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 334,
        title: "amharic_truthful_qa",
        creator: [
      {
          name: "simonbutt",
          profile: "https://huggingface.co/simonbutt",
      }  ],
        link: "https://huggingface.co/datasets/simonbutt/amharic_truthful_qa",
        paper_title: "amharic_truthful_qa",
        downloads_total: 44,
      
        last_modified: "2024-04-26 11:20:45+00:00",
        tags: [
          "language:am",
          "language:en",
          "license:apache-2.0",
          "size_categories:n<1K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 335,
        title: "amharic-qa",
        creator: [
      {
          name: "Henok",
          profile: "https://huggingface.co/Henok",
      }  ],
        link: "https://huggingface.co/datasets/Henok/amharic-qa",
        paper_title: "amharic-qa",
        downloads_total: 43,
      
        last_modified: "2023-12-20 19:33:47+00:00",
        tags: [
          "task_categories:question-answering",
          "language:am",
          "license:mit",
          "size_categories:1K<n<10K",
          "format:json",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "arxiv:2303.03290",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 336,
        title: "amharic_qa",
        creator: [
      {
          name: "Tadesse",
          profile: "https://huggingface.co/Tadesse",
      }  ],
        link: "https://huggingface.co/datasets/Tadesse/amharic_qa",
        paper_title: "amharic_qa",
        downloads_total: 43,
      
        last_modified: "2025-04-06 13:50:31+00:00",
        tags: [
          "size_categories:1K<n<10K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 337,
        title: "amharic-stopwords",
        creator: [
      {
          name: "uhhlt",
          profile: "https://huggingface.co/uhhlt",
      }  ],
        link: "https://huggingface.co/datasets/uhhlt/amharic-stopwords",
        paper_title: "amharic-stopwords",
        downloads_total: 42,
      
        last_modified: "2024-08-01 09:26:00+00:00",
        tags: [
          "language:am",
          "license:apache-2.0",
          "size_categories:n<1K",
          "format:text",
          "modality:text",
          "library:datasets",
          "library:mlcroissant",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 338,
        title: "amharic-language-voices",
        creator: [
      {
          name: "Am4nu3l",
          profile: "https://huggingface.co/Am4nu3l",
      }  ],
        link: "https://huggingface.co/datasets/Am4nu3l/amharic-language-voices",
        paper_title: "amharic-language-voices",
        downloads_total: 36,
      
        last_modified: "2023-11-22 04:40:09+00:00",
        tags: [
          "license:mit",
          "modality:audio",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 339,
        title: "amharic-zulu_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-zulu_sentence-pairs",
        paper_title: "amharic-zulu_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-04-03 11:59:11+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 340,
        title: "amharic-yoruba_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-yoruba_sentence-pairs",
        paper_title: "amharic-yoruba_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-04-03 12:00:19+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 341,
        title: "amharic-twi_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-twi_sentence-pairs",
        paper_title: "amharic-twi_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-04-03 12:04:47+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 342,
        title: "amharic-shona_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-shona_sentence-pairs",
        paper_title: "amharic-shona_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-04-03 12:13:51+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 343,
        title: "amharic-oromo_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-oromo_sentence-pairs",
        paper_title: "amharic-oromo_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-04-03 12:17:08+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 344,
        title: "amharic-lingala_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-lingala_sentence-pairs",
        paper_title: "amharic-lingala_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-04-03 12:19:18+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 345,
        title: "amharic-kongo_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-kongo_sentence-pairs",
        paper_title: "amharic-kongo_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-04-03 12:20:23+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 346,
        title: "amharic-ewe_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-ewe_sentence-pairs",
        paper_title: "amharic-ewe_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-04-03 12:31:25+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 347,
        title: "amharic-dinka_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-dinka_sentence-pairs",
        paper_title: "amharic-dinka_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-04-03 12:33:45+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 348,
        title: "amharic-bambara_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-bambara_sentence-pairs",
        paper_title: "amharic-bambara_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-04-03 12:37:05+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 349,
        title: "amharic-xhosa_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-xhosa_sentence-pairs",
        paper_title: "amharic-xhosa_sentence-pairs",
        downloads_total: 34,
      
        last_modified: "2025-04-03 12:01:30+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 350,
        title: "amharic-wolof_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-wolof_sentence-pairs",
        paper_title: "amharic-wolof_sentence-pairs",
        downloads_total: 34,
      
        last_modified: "2025-04-03 12:02:36+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 351,
        title: "amharic-swahili_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-swahili_sentence-pairs",
        paper_title: "amharic-swahili_sentence-pairs",
        downloads_total: 34,
      
        last_modified: "2025-04-03 12:11:32+00:00",
        tags: [
          "size_categories:1M<n<10M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 352,
        title: "amharic-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-somali_sentence-pairs",
        paper_title: "amharic-somali_sentence-pairs",
        downloads_total: 34,
      
        last_modified: "2025-04-03 12:12:40+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 353,
        title: "amharic-hausa_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-hausa_sentence-pairs",
        paper_title: "amharic-hausa_sentence-pairs",
        downloads_total: 34,
      
        last_modified: "2025-04-03 12:27:03+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 354,
        title: "amharic-chichewa_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-chichewa_sentence-pairs",
        paper_title: "amharic-chichewa_sentence-pairs",
        downloads_total: 34,
      
        last_modified: "2025-04-03 12:34:57+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 355,
        title: "akan-amharic_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/akan-amharic_sentence-pairs",
        paper_title: "akan-amharic_sentence-pairs",
        downloads_total: 34,
      
        last_modified: "2025-04-03 13:15:40+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 356,
        title: "amharic_gsm8k",
        creator: [
      {
          name: "simonbutt",
          profile: "https://huggingface.co/simonbutt",
      }  ],
        link: "https://huggingface.co/datasets/simonbutt/amharic_gsm8k",
        paper_title: "amharic_gsm8k",
        downloads_total: 33,
      
        last_modified: "2024-04-26 11:27:59+00:00",
        tags: [
          "language:am",
          "language:en",
          "license:apache-2.0",
          "size_categories:1K<n<10K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 357,
        title: "2AIRTC-Amharic-Adhoc-Information-Retrieval-Test-Collection",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/datasets/rasyosef/2AIRTC-Amharic-Adhoc-Information-Retrieval-Test-Collection",
        paper_title: "2AIRTC-Amharic-Adhoc-Information-Retrieval-Test-Collection",
        downloads_total: 33,
      
        last_modified: "2024-12-02 02:35:30+00:00",
        tags: [
          "language:am",
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 358,
        title: "synthetic_amharic_handwriting",
        creator: [
      {
          name: "pnadel",
          profile: "https://huggingface.co/pnadel",
      }  ],
        link: "https://huggingface.co/datasets/pnadel/synthetic_amharic_handwriting",
        paper_title: "synthetic_amharic_handwriting",
        downloads_total: 33,
      
        last_modified: "2025-02-27 16:29:00+00:00",
        tags: [
          "size_categories:1K<n<10K",
          "format:parquet",
          "modality:image",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 359,
        title: "amharic-wikipedia",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/datasets/yosefw/amharic-wikipedia",
        paper_title: "amharic-wikipedia",
        downloads_total: 33,
      
        last_modified: "2025-03-01 02:40:48+00:00",
        tags: [
          "size_categories:1K<n<10K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 360,
        title: "amharic-umbundu_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-umbundu_sentence-pairs",
        paper_title: "amharic-umbundu_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-04-03 12:03:40+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 361,
        title: "amharic-tumbuka_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-tumbuka_sentence-pairs",
        paper_title: "amharic-tumbuka_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-04-03 12:05:53+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 362,
        title: "amharic-tswana_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-tswana_sentence-pairs",
        paper_title: "amharic-tswana_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-04-03 12:07:05+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 363,
        title: "amharic-swati_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-swati_sentence-pairs",
        paper_title: "amharic-swati_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-04-03 12:10:20+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 364,
        title: "amharic-rundi_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-rundi_sentence-pairs",
        paper_title: "amharic-rundi_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-04-03 12:14:57+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 365,
        title: "amharic-nuer_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-nuer_sentence-pairs",
        paper_title: "amharic-nuer_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-04-03 12:18:13+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 366,
        title: "amharic-kinyarwanda_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-kinyarwanda_sentence-pairs",
        paper_title: "amharic-kinyarwanda_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-04-03 12:21:28+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 367,
        title: "amharic-fulah_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-fulah_sentence-pairs",
        paper_title: "amharic-fulah_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-04-03 12:29:16+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 368,
        title: "amharic-pedi_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-pedi_sentence-pairs",
        paper_title: "amharic-pedi_sentence-pairs",
        downloads_total: 32,
      
        last_modified: "2025-04-03 12:16:03+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 369,
        title: "amharic-kimbundu_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-kimbundu_sentence-pairs",
        paper_title: "amharic-kimbundu_sentence-pairs",
        downloads_total: 32,
      
        last_modified: "2025-04-03 12:22:33+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 370,
        title: "amharic-igbo_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-igbo_sentence-pairs",
        paper_title: "amharic-igbo_sentence-pairs",
        downloads_total: 32,
      
        last_modified: "2025-04-03 12:25:50+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 371,
        title: "amharic-ganda_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-ganda_sentence-pairs",
        paper_title: "amharic-ganda_sentence-pairs",
        downloads_total: 32,
      
        last_modified: "2025-04-03 12:28:08+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 372,
        title: "amharic-fon_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-fon_sentence-pairs",
        paper_title: "amharic-fon_sentence-pairs",
        downloads_total: 32,
      
        last_modified: "2025-04-03 12:30:21+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 373,
        title: "Amharic_corpus",
        creator: [
      {
          name: "surafelkindu",
          profile: "https://huggingface.co/surafelkindu",
      }  ],
        link: "https://huggingface.co/datasets/surafelkindu/Amharic_corpus",
        paper_title: "Amharic_corpus",
        downloads_total: 31,
      
        last_modified: "2022-04-17 18:19:47+00:00",
        tags: [
          "license:mit",
          "size_categories:100K<n<1M",
          "format:text",
          "modality:text",
          "library:datasets",
          "library:mlcroissant",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 374,
        title: "amharic-kikuyu_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-kikuyu_sentence-pairs",
        paper_title: "amharic-kikuyu_sentence-pairs",
        downloads_total: 31,
      
        last_modified: "2025-04-03 12:23:39+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 375,
        title: "amharic_maternal_health",
        creator: [
      {
          name: "danilior",
          profile: "https://huggingface.co/danilior",
      }  ],
        link: "https://huggingface.co/datasets/danilior/amharic_maternal_health",
        paper_title: "amharic_maternal_health",
        downloads_total: 30,
      
        last_modified: "2025-03-31 12:37:25+00:00",
        tags: [
          "size_categories:n<1K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 376,
        title: "amharic-kamba_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-kamba_sentence-pairs",
        paper_title: "amharic-kamba_sentence-pairs",
        downloads_total: 30,
      
        last_modified: "2025-04-03 12:24:42+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 377,
        title: "amharic-dyula_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-dyula_sentence-pairs",
        paper_title: "amharic-dyula_sentence-pairs",
        downloads_total: 30,
      
        last_modified: "2025-04-03 12:32:39+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 378,
        title: "amharic-bemba_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-bemba_sentence-pairs",
        paper_title: "amharic-bemba_sentence-pairs",
        downloads_total: 30,
      
        last_modified: "2025-04-03 12:36:01+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 379,
        title: "amharic-openhermes",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/datasets/rasyosef/amharic-openhermes",
        paper_title: "amharic-openhermes",
        downloads_total: 29,
      
        last_modified: "2024-11-20 03:04:04+00:00",
        tags: [
          "language:am",
          "size_categories:n<1K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
          "conversational",
        ],
        type: "dataset",
      },
      {
        id: 380,
        title: "amharic-tsonga_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-tsonga_sentence-pairs",
        paper_title: "amharic-tsonga_sentence-pairs",
        downloads_total: 28,
      
        last_modified: "2025-04-03 12:08:10+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 381,
        title: "amharic-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-tigrinya_sentence-pairs",
        paper_title: "amharic-tigrinya_sentence-pairs",
        downloads_total: 28,
      
        last_modified: "2025-04-03 12:09:17+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 382,
        title: "amharic-sentiment",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/datasets/rasyosef/amharic-sentiment",
        paper_title: "amharic-sentiment",
        downloads_total: 27,
      
        last_modified: "2024-06-26 23:26:16+00:00",
        tags: [
          "task_categories:text-classification",
          "language:am",
          "size_categories:1K<n<10K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 383,
        title: "Amharic_LLAMA_MT",
        creator: [
      {
          name: "EthioNLP",
          profile: "https://huggingface.co/EthioNLP",
      }  ],
        link: "https://huggingface.co/datasets/EthioNLP/Amharic_LLAMA_MT",
        paper_title: "Amharic_LLAMA_MT",
        downloads_total: 26,
      
        last_modified: "2024-03-18 07:19:25+00:00",
        tags: [
          "language:am",
          "language:en",
          "size_categories:100K<n<1M",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 384,
        title: "amharic_corpus",
        creator: [
      {
          name: "YHtechnology",
          profile: "https://huggingface.co/YHtechnology",
      }  ],
        link: "https://huggingface.co/datasets/YHtechnology/amharic_corpus",
        paper_title: "amharic_corpus",
        downloads_total: 26,
      
        last_modified: "2024-03-19 14:45:54+00:00",
        tags: [
          "size_categories:1M<n<10M",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 385,
        title: "amharic-text-recognition",
        creator: [
      {
          name: "pnadel",
          profile: "https://huggingface.co/pnadel",
      }  ],
        link: "https://huggingface.co/datasets/pnadel/amharic-text-recognition",
        paper_title: "amharic-text-recognition",
        downloads_total: 26,
      
        last_modified: "2024-09-24 15:20:22+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:image",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 386,
        title: "amharic-retrieval-dataset-clean",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/datasets/yosefw/amharic-retrieval-dataset-clean",
        paper_title: "amharic-retrieval-dataset-clean",
        downloads_total: 26,
      
        last_modified: "2025-02-10 02:10:22+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 387,
        title: "amharic-retrieval-dataset-clean-v2",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/datasets/yosefw/amharic-retrieval-dataset-clean-v2",
        paper_title: "amharic-retrieval-dataset-clean-v2",
        downloads_total: 26,
      
        last_modified: "2025-02-18 00:52:32+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 388,
        title: "amharic-relevance-dataset-binary",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/datasets/rasyosef/amharic-relevance-dataset-binary",
        paper_title: "amharic-relevance-dataset-binary",
        downloads_total: 25,
      
        last_modified: "2024-11-15 04:34:11+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 389,
        title: "amharic-bio",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/datasets/yosefw/amharic-bio",
        paper_title: "amharic-bio",
        downloads_total: 23,
      
        last_modified: "2025-03-01 21:37:55+00:00",
        tags: [
          "size_categories:1K<n<10K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 390,
        title: "amharic_dataset_v2",
        creator: [
      {
          name: "BiniyamAjaw",
          profile: "https://huggingface.co/BiniyamAjaw",
      }  ],
        link: "https://huggingface.co/datasets/BiniyamAjaw/amharic_dataset_v2",
        paper_title: "amharic_dataset_v2",
        downloads_total: 22,
      
        last_modified: "2024-02-01 06:44:08+00:00",
        tags: [
          "task_categories:text-generation",
          "task_categories:text-classification",
          "language:am",
          "license:mit",
          "size_categories:100K<n<1M",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
          "Language",
          "News",
          "Ads",
        ],
        type: "dataset",
      },
      {
        id: 391,
        title: "xlsum_amharic_summarization",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/datasets/rasyosef/xlsum_amharic_summarization",
        paper_title: "xlsum_amharic_summarization",
        downloads_total: 21,
      
        last_modified: "2024-11-12 00:24:38+00:00",
        tags: [
          "task_categories:summarization",
          "language:am",
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 392,
        title: "english-amharic-translation",
        creator: [
      {
          name: "habtew",
          profile: "https://huggingface.co/habtew",
      }  ],
        link: "https://huggingface.co/datasets/habtew/english-amharic-translation",
        paper_title: "english-amharic-translation",
        downloads_total: 21,
      
        last_modified: "2024-12-20 18:53:07+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 393,
        title: "alpaca-amharic-cleaned",
        creator: [
      {
          name: "saillab",
          profile: "https://huggingface.co/saillab",
      }  ],
        link: "https://huggingface.co/datasets/saillab/alpaca-amharic-cleaned",
        paper_title: "alpaca-amharic-cleaned",
        downloads_total: 20,
      
        last_modified: "2024-09-20 23:32:26+00:00",
        tags: [
          "language:am",
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 394,
        title: "amharic-llama-pref",
        creator: [
      {
          name: "yosefw",
          profile: "https://huggingface.co/yosefw",
      }  ],
        link: "https://huggingface.co/datasets/yosefw/amharic-llama-pref",
        paper_title: "amharic-llama-pref",
        downloads_total: 20,
      
        last_modified: "2024-11-26 12:54:46+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:tabular",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 395,
        title: "amharic-alpaca",
        creator: [
      {
          name: "iocuydi",
          profile: "https://huggingface.co/iocuydi",
      }  ],
        link: "https://huggingface.co/datasets/iocuydi/amharic-alpaca",
        paper_title: "amharic-alpaca",
        downloads_total: 19,
      
        last_modified: "2024-03-29 03:55:14+00:00",
        tags: [
          "license:apache-2.0",
          "size_categories:10K<n<100K",
          "format:json",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "arxiv:2403.06354",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 396,
        title: "amharic-redpajama-synthetic",
        creator: [
      {
          name: "iocuydi",
          profile: "https://huggingface.co/iocuydi",
      }  ],
        link: "https://huggingface.co/datasets/iocuydi/amharic-redpajama-synthetic",
        paper_title: "amharic-redpajama-synthetic",
        downloads_total: 19,
      
        last_modified: "2024-03-29 03:53:49+00:00",
        tags: [
          "license:cc-by-sa-3.0",
          "size_categories:10M<n<100M",
          "format:text",
          "modality:text",
          "library:datasets",
          "library:mlcroissant",
          "arxiv:2403.06354",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 397,
        title: "amharic-question",
        creator: [
      {
          name: "Gizachew",
          profile: "https://huggingface.co/Gizachew",
      }  ],
        link: "https://huggingface.co/datasets/Gizachew/amharic-question",
        paper_title: "amharic-question",
        downloads_total: 19,
      
        last_modified: "2024-04-12 06:52:51+00:00",
        tags: [
          "size_categories:1K<n<10K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 398,
        title: "AMHARIC_ALFA_DATASET_new_val_subset",
        creator: [
      {
          name: "KYAGABA",
          profile: "https://huggingface.co/KYAGABA",
      }  ],
        link: "https://huggingface.co/datasets/KYAGABA/AMHARIC_ALFA_DATASET_new_val_subset",
        paper_title: "AMHARIC_ALFA_DATASET_new_val_subset",
        downloads_total: 19,
      
        last_modified: "2024-11-05 11:01:25+00:00",
        tags: [
          "size_categories:1K<n<10K",
          "format:parquet",
          "modality:audio",
          "modality:text",
          "library:datasets",
          "library:dask",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 399,
        title: "amharic-llama-preferences",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/datasets/rasyosef/amharic-llama-preferences",
        paper_title: "amharic-llama-preferences",
        downloads_total: 19,
      
        last_modified: "2024-11-26 19:20:12+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:tabular",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 400,
        title: "amharic_clear_audio_tts",
        creator: [
      {
          name: "surafelabebe",
          profile: "https://huggingface.co/surafelabebe",
      }  ],
        link: "https://huggingface.co/datasets/surafelabebe/amharic_clear_audio_tts",
        paper_title: "amharic_clear_audio_tts",
        downloads_total: 19,
      
        last_modified: "2025-02-19 00:57:51+00:00",
        tags: [
          "size_categories:1K<n<10K",
          "format:parquet",
          "modality:audio",
          "modality:text",
          "library:datasets",
          "library:dask",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 401,
        title: "Roleplay-Amharic",
        creator: [
      {
          name: "jojo-ai-mst",
          profile: "https://huggingface.co/jojo-ai-mst",
      }  ],
        link: "https://huggingface.co/datasets/jojo-ai-mst/Roleplay-Amharic",
        paper_title: "Roleplay-Amharic",
        downloads_total: 18,
      
        last_modified: "2024-09-29 09:07:24+00:00",
        tags: [
          "task_categories:text-generation",
          "language:am",
          "license:mit",
          "size_categories:1K<n<10K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 402,
        title: "amharic_cleaned_testset_verified",
        creator: [
      {
          name: "KYAGABA",
          profile: "https://huggingface.co/KYAGABA",
      }  ],
        link: "https://huggingface.co/datasets/KYAGABA/amharic_cleaned_testset_verified",
        paper_title: "amharic_cleaned_testset_verified",
        downloads_total: 18,
      
        last_modified: "2024-10-05 14:57:59+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:audio",
          "modality:text",
          "library:datasets",
          "library:dask",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 403,
        title: "amharic_sa",
        creator: [
      {
          name: "DGurgurov",
          profile: "https://huggingface.co/DGurgurov",
      }  ],
        link: "https://huggingface.co/datasets/DGurgurov/amharic_sa",
        paper_title: "amharic_sa",
        downloads_total: 17,
      
        last_modified: "2024-05-30 10:58:24+00:00",
        tags: [
          "task_categories:text-classification",
          "language:am",
          "license:mit",
          "size_categories:1K<n<10K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 404,
        title: "amharic-named-entity-recognition",
        creator: [
      {
          name: "rasyosef",
          profile: "https://huggingface.co/rasyosef",
      }  ],
        link: "https://huggingface.co/datasets/rasyosef/amharic-named-entity-recognition",
        paper_title: "amharic-named-entity-recognition",
        downloads_total: 17,
      
        last_modified: "2024-06-26 23:51:11+00:00",
        tags: [
          "task_categories:token-classification",
          "language:am",
          "size_categories:1K<n<10K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 405,
        title: "amharic-detox",
        creator: [
      {
          name: "uhhlt",
          profile: "https://huggingface.co/uhhlt",
      }  ],
        link: "https://huggingface.co/datasets/uhhlt/amharic-detox",
        paper_title: "amharic-detox",
        downloads_total: 17,
      
        last_modified: "2024-07-21 09:29:58+00:00",
        tags: [
          "size_categories:1K<n<10K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 406,
        title: "COMBINED_TEST_AMHARIC",
        creator: [
      {
          name: "KYAGABA",
          profile: "https://huggingface.co/KYAGABA",
      }  ],
        link: "https://huggingface.co/datasets/KYAGABA/COMBINED_TEST_AMHARIC",
        paper_title: "COMBINED_TEST_AMHARIC",
        downloads_total: 17,
      
        last_modified: "2024-10-17 20:28:45+00:00",
        tags: [
          "size_categories:1K<n<10K",
          "format:parquet",
          "modality:audio",
          "modality:text",
          "library:datasets",
          "library:dask",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 407,
        title: "Amharic_Corpus",
        creator: [
      {
          name: "Bedru",
          profile: "https://huggingface.co/Bedru",
      }  ],
        link: "https://huggingface.co/datasets/Bedru/Amharic_Corpus",
        paper_title: "Amharic_Corpus",
        downloads_total: 17,
      
        last_modified: "2025-03-02 06:25:53+00:00",
        tags: [
          "size_categories:1M<n<10M",
          "format:text",
          "modality:text",
          "library:datasets",
          "library:mlcroissant",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 408,
        title: "NEW_TEST_SET_AMHARIC_FINAL",
        creator: [
      {
          name: "KYAGABA",
          profile: "https://huggingface.co/KYAGABA",
      }  ],
        link: "https://huggingface.co/datasets/KYAGABA/NEW_TEST_SET_AMHARIC_FINAL",
        paper_title: "NEW_TEST_SET_AMHARIC_FINAL",
        downloads_total: 16,
      
        last_modified: "2024-10-16 16:21:02+00:00",
        tags: [
          "size_categories:1K<n<10K",
          "format:parquet",
          "modality:audio",
          "modality:text",
          "library:datasets",
          "library:dask",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 409,
        title: "Amharic_Stories",
        creator: [
      {
          name: "KerVerse",
          profile: "https://huggingface.co/KerVerse",
      }  ],
        link: "https://huggingface.co/datasets/KerVerse/Amharic_Stories",
        paper_title: "Amharic_Stories",
        downloads_total: 15,
      
        last_modified: "2025-03-28 18:10:43+00:00",
        tags: [
          "task_categories:text-generation",
          "language:am",
          "license:mit",
          "size_categories:1K<n<10K",
          "format:text",
          "modality:text",
          "library:datasets",
          "library:mlcroissant",
          "region:us",
          "art",
        ],
        type: "dataset",
      },
      {
        id: 410,
        title: "amharic_words",
        creator: [
      {
          name: "rcade",
          profile: "https://huggingface.co/rcade",
      }  ],
        link: "https://huggingface.co/datasets/rcade/amharic_words",
        paper_title: "amharic_words",
        downloads_total: 15,
      
        last_modified: "2024-01-30 08:36:56+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:tabular",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 411,
        title: "amharic_data",
        creator: [
      {
          name: "adunca08",
          profile: "https://huggingface.co/adunca08",
      }  ],
        link: "https://huggingface.co/datasets/adunca08/amharic_data",
        paper_title: "amharic_data",
        downloads_total: 15,
      
        last_modified: "2024-11-24 18:18:15+00:00",
        tags: [
          "size_categories:1K<n<10K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 412,
        title: "amharic-dolly-15k",
        creator: [
      {
          name: "iocuydi",
          profile: "https://huggingface.co/iocuydi",
      }  ],
        link: "https://huggingface.co/datasets/iocuydi/amharic-dolly-15k",
        paper_title: "amharic-dolly-15k",
        downloads_total: 14,
      
        last_modified: "2024-03-29 03:55:00+00:00",
        tags: [
          "license:cc-by-sa-3.0",
          "size_categories:10K<n<100K",
          "format:json",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "arxiv:2403.06354",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 413,
        title: "AmharicTigrinyaEnglishDictionary",
        creator: [
      {
          name: "admasorg",
          profile: "https://huggingface.co/admasorg",
      }  ],
        link: "https://huggingface.co/datasets/admasorg/AmharicTigrinyaEnglishDictionary",
        paper_title: "AmharicTigrinyaEnglishDictionary",
        downloads_total: 14,
      
        last_modified: "2025-01-31 21:44:59+00:00",
        tags: [
          "language:am",
          "language:ti",
          "license:apache-2.0",
          "size_categories:1K<n<10K",
          "format:text",
          "modality:text",
          "library:datasets",
          "library:mlcroissant",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 414,
        title: "Amharic_ASR_Dataset",
        creator: [
      {
          name: "Ephrem",
          profile: "https://huggingface.co/Ephrem",
      }  ],
        link: "https://huggingface.co/datasets/Ephrem/Amharic_ASR_Dataset",
        paper_title: "Amharic_ASR_Dataset",
        downloads_total: 13,
      
        last_modified: "2022-06-07 08:31:19+00:00",
        tags: [
          "license:apache-2.0",
          "size_categories:n<1K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 415,
        title: "amharic_dataset_v1",
        creator: [
      {
          name: "BiniyamAjaw",
          profile: "https://huggingface.co/BiniyamAjaw",
      }  ],
        link: "https://huggingface.co/datasets/BiniyamAjaw/amharic_dataset_v1",
        paper_title: "amharic_dataset_v1",
        downloads_total: 13,
      
        last_modified: "2024-02-01 06:26:52+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 416,
        title: "alpaca_amharic_taco",
        creator: [
      {
          name: "saillab",
          profile: "https://huggingface.co/saillab",
      }  ],
        link: "https://huggingface.co/datasets/saillab/alpaca_amharic_taco",
        paper_title: "alpaca_amharic_taco",
        downloads_total: 13,
      
        last_modified: "2024-09-20 22:08:26+00:00",
        tags: [
          "language:am",
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 417,
        title: "amharic-llama-2-formatted-dataset-sample",
        creator: [
      {
          name: "Muller01",
          profile: "https://huggingface.co/Muller01",
      }  ],
        link: "https://huggingface.co/datasets/Muller01/amharic-llama-2-formatted-dataset-sample",
        paper_title: "amharic-llama-2-formatted-dataset-sample",
        downloads_total: 13,
      
        last_modified: "2024-09-24 11:44:46+00:00",
        tags: [
          "language:am",
          "license:mit",
          "size_categories:n<1K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 418,
        title: "Amharic",
        creator: [
      {
          name: "CRLannister",
          profile: "https://huggingface.co/CRLannister",
      }  ],
        link: "https://huggingface.co/datasets/CRLannister/Amharic",
        paper_title: "Amharic",
        downloads_total: 13,
      
        last_modified: "2024-12-08 19:10:32+00:00",
        tags: [
          "language:am",
          "size_categories:10K<n<100K",
          "format:json",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 419,
        title: "Amharic-News-Classification",
        creator: [
      {
          name: "fikreanteneh",
          profile: "https://huggingface.co/fikreanteneh",
      }  ],
        link: "https://huggingface.co/datasets/fikreanteneh/Amharic-News-Classification",
        paper_title: "Amharic-News-Classification",
        downloads_total: 13,
      
        last_modified: "2025-01-17 12:07:44+00:00",
        tags: [
          "license:mit",
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 420,
        title: "amharic-visual-instruction-tuning",
        creator: [
      {
          name: "iocuydi",
          profile: "https://huggingface.co/iocuydi",
      }  ],
        link: "https://huggingface.co/datasets/iocuydi/amharic-visual-instruction-tuning",
        paper_title: "amharic-visual-instruction-tuning",
        downloads_total: 12,
      
        last_modified: "2024-03-29 03:54:11+00:00",
        tags: [
          "license:apache-2.0",
          "arxiv:2403.06354",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 421,
        title: "amharic-blip-laion",
        creator: [
      {
          name: "iocuydi",
          profile: "https://huggingface.co/iocuydi",
      }  ],
        link: "https://huggingface.co/datasets/iocuydi/amharic-blip-laion",
        paper_title: "amharic-blip-laion",
        downloads_total: 12,
      
        last_modified: "2024-03-29 03:53:07+00:00",
        tags: [
          "license:cc-by-4.0",
          "size_categories:100K<n<1M",
          "format:json",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "arxiv:2403.06354",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 422,
        title: "aya_amharic_dataset",
        creator: [
      {
          name: "Henok",
          profile: "https://huggingface.co/Henok",
      }  ],
        link: "https://huggingface.co/datasets/Henok/aya_amharic_dataset",
        paper_title: "aya_amharic_dataset",
        downloads_total: 12,
      
        last_modified: "2024-06-25 04:24:31+00:00",
        tags: [
          "license:apache-2.0",
          "size_categories:1K<n<10K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "arxiv:2402.06619",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 423,
        title: "English-amharic-Tigrigna-Dict",
        creator: [
      {
          name: "hopegeb",
          profile: "https://huggingface.co/hopegeb",
      }  ],
        link: "https://huggingface.co/datasets/hopegeb/English-amharic-Tigrigna-Dict",
        paper_title: "English-amharic-Tigrigna-Dict",
        downloads_total: 12,
      
        last_modified: "2024-11-25 09:41:17+00:00",
        tags: [
          "license:mit",
          "size_categories:1K<n<10K",
          "format:text",
          "modality:text",
          "library:datasets",
          "library:mlcroissant",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 424,
        title: "Amharic_ad_generation",
        creator: [
      {
          name: "Tvsybkzkmapab",
          profile: "https://huggingface.co/Tvsybkzkmapab",
      }  ],
        link: "https://huggingface.co/datasets/Tvsybkzkmapab/Amharic_ad_generation",
        paper_title: "Amharic_ad_generation",
        downloads_total: 11,
      
        last_modified: "2024-02-15 09:10:04+00:00",
        tags: [
          "language:am",
          "license:apache-2.0",
          "size_categories:1K<n<10K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 425,
        title: "AmharicQA",
        creator: [
      {
          name: "israel",
          profile: "https://huggingface.co/israel",
      }  ],
        link: "https://huggingface.co/datasets/israel/AmharicQA",
        paper_title: "AmharicQA",
        downloads_total: 10,
      
        last_modified: "2024-01-15 15:57:17+00:00",
        tags: [
          "size_categories:1K<n<10K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 426,
        title: "AmharicZefen",
        creator: [
      {
          name: "israel",
          profile: "https://huggingface.co/israel",
      }  ],
        link: "https://huggingface.co/datasets/israel/AmharicZefen",
        paper_title: "AmharicZefen",
        downloads_total: 10,
      
        last_modified: "2024-01-16 13:10:31+00:00",
        tags: [
          "size_categories:n<1K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 427,
        title: "AmharicASR",
        creator: [
      {
          name: "israel",
          profile: "https://huggingface.co/israel",
      }  ],
        link: "https://huggingface.co/datasets/israel/AmharicASR",
        paper_title: "AmharicASR",
        downloads_total: 10,
      
        last_modified: "2024-05-06 22:13:54+00:00",
        tags: [
          "size_categories:n<1K",
          "format:audiofolder",
          "modality:audio",
          "library:datasets",
          "library:mlcroissant",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 428,
        title: "amharic_cleaned_testset_fleurs_current",
        creator: [
      {
          name: "KYAGABA",
          profile: "https://huggingface.co/KYAGABA",
      }  ],
        link: "https://huggingface.co/datasets/KYAGABA/amharic_cleaned_testset_fleurs_current",
        paper_title: "amharic_cleaned_testset_fleurs_current",
        downloads_total: 10,
      
        last_modified: "2024-10-13 06:25:07+00:00",
        tags: [
          "size_categories:1K<n<10K",
          "format:parquet",
          "modality:audio",
          "modality:text",
          "library:datasets",
          "library:dask",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 429,
        title: "FLEURS_AMHARIC",
        creator: [
      {
          name: "KYAGABA",
          profile: "https://huggingface.co/KYAGABA",
      }  ],
        link: "https://huggingface.co/datasets/KYAGABA/FLEURS_AMHARIC",
        paper_title: "FLEURS_AMHARIC",
        downloads_total: 10,
      
        last_modified: "2024-10-17 20:16:00+00:00",
        tags: [
          "size_categories:1K<n<10K",
          "format:parquet",
          "modality:audio",
          "modality:text",
          "library:datasets",
          "library:dask",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 430,
        title: "amharic_new_with_phonemes-v1",
        creator: [
      {
          name: "surafelabebe",
          profile: "https://huggingface.co/surafelabebe",
      }  ],
        link: "https://huggingface.co/datasets/surafelabebe/amharic_new_with_phonemes-v1",
        paper_title: "amharic_new_with_phonemes-v1",
        downloads_total: 10,
      
        last_modified: "2025-02-17 22:27:47+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:tabular",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 431,
        title: "AMHARIC_ALFA_DATASET_new_current",
        creator: [
      {
          name: "KYAGABA",
          profile: "https://huggingface.co/KYAGABA",
      }  ],
        link: "https://huggingface.co/datasets/KYAGABA/AMHARIC_ALFA_DATASET_new_current",
        paper_title: "AMHARIC_ALFA_DATASET_new_current",
        downloads_total: 9,
      
        last_modified: "2024-10-13 06:31:55+00:00",
        tags: [
          "size_categories:1K<n<10K",
          "format:parquet",
          "modality:audio",
          "modality:text",
          "library:datasets",
          "library:dask",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 432,
        title: "LLM_generated_Amharic_QA_for_Family_Code_of_Ethiopia",
        creator: [
      {
          name: "beimnet777",
          profile: "https://huggingface.co/beimnet777",
      }  ],
        link: "https://huggingface.co/datasets/beimnet777/LLM_generated_Amharic_QA_for_Family_Code_of_Ethiopia",
        paper_title: "LLM_generated_Amharic_QA_for_Family_Code_of_Ethiopia",
        downloads_total: 8,
      
        last_modified: "2024-05-11 07:14:58+00:00",
        tags: [
          "size_categories:1K<n<10K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 433,
        title: "AmharicSpellCheck",
        creator: [
      {
          name: "israel",
          profile: "https://huggingface.co/israel",
      }  ],
        link: "https://huggingface.co/datasets/israel/AmharicSpellCheck",
        paper_title: "AmharicSpellCheck",
        downloads_total: 7,
      
        last_modified: "2024-01-11 10:28:07+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 434,
        title: "amharic-OASST1-pruned",
        creator: [
      {
          name: "iocuydi",
          profile: "https://huggingface.co/iocuydi",
      }  ],
        link: "https://huggingface.co/datasets/iocuydi/amharic-OASST1-pruned",
        paper_title: "amharic-OASST1-pruned",
        downloads_total: 7,
      
        last_modified: "2024-03-29 03:54:47+00:00",
        tags: [
          "license:apache-2.0",
          "arxiv:2403.06354",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 435,
        title: "Amharic_sum_final",
        creator: [
      {
          name: "mHossain",
          profile: "https://huggingface.co/mHossain",
      }  ],
        link: "https://huggingface.co/datasets/mHossain/Amharic_sum_final",
        paper_title: "Amharic_sum_final",
        downloads_total: 6,
      
        last_modified: "2024-03-11 17:07:35+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 436,
        title: "amharic_primary_school_exams",
        creator: [
      {
          name: "abraham-diress",
          profile: "https://huggingface.co/abraham-diress",
      }  ],
        link: "https://huggingface.co/datasets/abraham-diress/amharic_primary_school_exams",
        paper_title: "amharic_primary_school_exams",
        downloads_total: 6,
      
        last_modified: "2024-08-31 20:51:53+00:00",
        tags: [
          "size_categories:n<1K",
          "format:json",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 437,
        title: "AMHARIC_ALFA_DATASET_new",
        creator: [
      {
          name: "KYAGABA",
          profile: "https://huggingface.co/KYAGABA",
      }  ],
        link: "https://huggingface.co/datasets/KYAGABA/AMHARIC_ALFA_DATASET_new",
        paper_title: "AMHARIC_ALFA_DATASET_new",
        downloads_total: 6,
      
        last_modified: "2024-10-12 20:09:56+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:audio",
          "modality:text",
          "library:datasets",
          "library:dask",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 438,
        title: "row_col_amharic",
        creator: [
      {
          name: "OCR-Ethiopic",
          profile: "https://huggingface.co/OCR-Ethiopic",
      }  ],
        link: "https://huggingface.co/datasets/OCR-Ethiopic/row_col_amharic",
        paper_title: "row_col_amharic",
        downloads_total: 5,
      
        last_modified: "2024-02-25 00:00:04+00:00",
        tags: [
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 439,
        title: "amharic-speech-dataset-110HRS",
        creator: [
      {
          name: "KYAGABA",
          profile: "https://huggingface.co/KYAGABA",
      }  ],
        link: "https://huggingface.co/datasets/KYAGABA/amharic-speech-dataset-110HRS",
        paper_title: "amharic-speech-dataset-110HRS",
        downloads_total: 5,
      
        last_modified: "2024-12-13 15:57:45+00:00",
        tags: [
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 440,
        title: "amharic-corpus",
        creator: [
      {
          name: "BiniyamAjaw",
          profile: "https://huggingface.co/BiniyamAjaw",
      }  ],
        link: "https://huggingface.co/datasets/BiniyamAjaw/amharic-corpus",
        paper_title: "amharic-corpus",
        downloads_total: 4,
      
        last_modified: "2024-01-27 14:01:24+00:00",
        tags: [
          "license:mit",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 441,
        title: "Ethiopian_Amharic_Free_Dialogue_Speech_Corpus",
        creator: [
      {
          name: "DataoceanAI",
          profile: "https://huggingface.co/DataoceanAI",
      }  ],
        link: "https://huggingface.co/datasets/DataoceanAI/Ethiopian_Amharic_Free_Dialogue_Speech_Corpus",
        paper_title: "Ethiopian_Amharic_Free_Dialogue_Speech_Corpus",
        downloads_total: 4,
      
        last_modified: "2024-07-17 16:18:21+00:00",
        tags: [
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 442,
        title: "NEW_TEST_SET_AMHARIC",
        creator: [
      {
          name: "KYAGABA",
          profile: "https://huggingface.co/KYAGABA",
      }  ],
        link: "https://huggingface.co/datasets/KYAGABA/NEW_TEST_SET_AMHARIC",
        paper_title: "NEW_TEST_SET_AMHARIC",
        downloads_total: 4,
      
        last_modified: "2024-10-16 16:15:28+00:00",
        tags: [
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 443,
        title: "amharic-english-tr",
        creator: [
      {
          name: "bengeos",
          profile: "https://huggingface.co/bengeos",
      }  ],
        link: "https://huggingface.co/datasets/bengeos/amharic-english-tr",
        paper_title: "amharic-english-tr",
        downloads_total: 4,
      
        last_modified: "2024-10-20 04:01:59+00:00",
        tags: [
          "license:apache-2.0",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 444,
        title: "Amharic-Text-Summarization-Benchmark-Dataset",
        creator: [
      {
          name: "danielmekuriaw",
          profile: "https://huggingface.co/danielmekuriaw",
      }  ],
        link: "https://huggingface.co/datasets/danielmekuriaw/Amharic-Text-Summarization-Benchmark-Dataset",
        paper_title: "Amharic-Text-Summarization-Benchmark-Dataset",
        downloads_total: 3,
      
        last_modified: "2023-12-31 20:16:26+00:00",
        tags: [
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 445,
        title: "amharicSpeech",
        creator: [
      {
          name: "Ermiasa",
          profile: "https://huggingface.co/Ermiasa",
      }  ],
        link: "https://huggingface.co/datasets/Ermiasa/amharicSpeech",
        paper_title: "amharicSpeech",
        downloads_total: 3,
      
        last_modified: "2024-01-28 02:20:30+00:00",
        tags: [
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 446,
        title: "oasst1_amharic_dataset_test",
        creator: [
      {
          name: "aethiop",
          profile: "https://huggingface.co/aethiop",
      }  ],
        link: "https://huggingface.co/datasets/aethiop/oasst1_amharic_dataset_test",
        paper_title: "oasst1_amharic_dataset_test",
        downloads_total: 3,
      
        last_modified: "2024-09-25 20:59:19+00:00",
        tags: [
          "license:apache-2.0",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 447,
        title: "Barille-Amharic",
        creator: [
      {
          name: "Gizachew",
          profile: "https://huggingface.co/Gizachew",
      }  ],
        link: "https://huggingface.co/datasets/Gizachew/Barille-Amharic",
        paper_title: "Barille-Amharic",
        downloads_total: 3,
      
        last_modified: "2024-11-21 01:51:13+00:00",
        tags: [
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 448,
        title: "amharic-speech-dataset-110HRS-V1",
        creator: [
      {
          name: "KYAGABA",
          profile: "https://huggingface.co/KYAGABA",
      }  ],
        link: "https://huggingface.co/datasets/KYAGABA/amharic-speech-dataset-110HRS-V1",
        paper_title: "amharic-speech-dataset-110HRS-V1",
        downloads_total: 3,
      
        last_modified: "2024-12-13 16:15:38+00:00",
        tags: [
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 449,
        title: "RTechs-Oromo-RVC-Datamodel",
        creator: [
      {
          name: "RO-Rtechs",
          profile: "https://huggingface.co/RO-Rtechs",
      }  ],
        link: "https://huggingface.co/RO-Rtechs/RTechs-Oromo-RVC-Datamodel",
        paper_title: "RTechs-Oromo-RVC-Datamodel",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "license:mit",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 450,
        title: "oromo",
        creator: [
      {
          name: "lfperez10",
          profile: "https://huggingface.co/lfperez10",
      }  ],
        link: "https://huggingface.co/lfperez10/oromo",
        paper_title: "oromo",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "license:other",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 451,
        title: "oromo-bible-chatbot",
        creator: [
      {
          name: "jigsa",
          profile: "https://huggingface.co/jigsa",
      }  ],
        link: "https://huggingface.co/jigsa/oromo-bible-chatbot",
        paper_title: "oromo-bible-chatbot",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "license:apache-2.0",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 452,
        title: "OROMO_100_HOUR_DATASET",
        creator: [
      {
          name: "KYAGABA",
          profile: "https://huggingface.co/KYAGABA",
      }  ],
        link: "https://huggingface.co/datasets/KYAGABA/OROMO_100_HOUR_DATASET",
        paper_title: "OROMO_100_HOUR_DATASET",
        downloads_total: 125,
      
        last_modified: "2025-02-15 14:53:33+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:audio",
          "modality:text",
          "library:datasets",
          "library:dask",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 453,
        title: "alpaca-oromo-cleaned",
        creator: [
      {
          name: "saillab",
          profile: "https://huggingface.co/saillab",
      }  ],
        link: "https://huggingface.co/datasets/saillab/alpaca-oromo-cleaned",
        paper_title: "alpaca-oromo-cleaned",
        downloads_total: 66,
      
        last_modified: "2024-09-20 23:32:28+00:00",
        tags: [
          "language:om",
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 454,
        title: "dinka-oromo_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/dinka-oromo_sentence-pairs",
        paper_title: "dinka-oromo_sentence-pairs",
        downloads_total: 44,
      
        last_modified: "2025-04-02 13:40:35+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 455,
        title: "afaan_oromo_dataset",
        creator: [
      {
          name: "KYAGABA",
          profile: "https://huggingface.co/KYAGABA",
      }  ],
        link: "https://huggingface.co/datasets/KYAGABA/afaan_oromo_dataset",
        paper_title: "afaan_oromo_dataset",
        downloads_total: 36,
      
        last_modified: "2025-03-25 10:48:50+00:00",
        tags: [
          "size_categories:1K<n<10K",
          "format:parquet",
          "modality:audio",
          "modality:text",
          "library:datasets",
          "library:dask",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 456,
        title: "oromo-wolof_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/oromo-wolof_sentence-pairs",
        paper_title: "oromo-wolof_sentence-pairs",
        downloads_total: 36,
      
        last_modified: "2025-03-30 20:08:42+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 457,
        title: "nuer-oromo_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/nuer-oromo_sentence-pairs",
        paper_title: "nuer-oromo_sentence-pairs",
        downloads_total: 36,
      
        last_modified: "2025-03-30 20:01:22+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 458,
        title: "kinyarwanda-oromo_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/kinyarwanda-oromo_sentence-pairs",
        paper_title: "kinyarwanda-oromo_sentence-pairs",
        downloads_total: 36,
      
        last_modified: "2025-03-30 19:44:56+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 459,
        title: "pedi-oromo_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/pedi-oromo_sentence-pairs",
        paper_title: "pedi-oromo_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-03-30 20:10:07+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 460,
        title: "oromo-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/oromo-tigrinya_sentence-pairs",
        paper_title: "oromo-tigrinya_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-03-30 20:07:09+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 461,
        title: "oromo-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/oromo-somali_sentence-pairs",
        paper_title: "oromo-somali_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-03-30 20:06:29+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 462,
        title: "hausa-oromo_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/hausa-oromo_sentence-pairs",
        paper_title: "hausa-oromo_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-04-02 10:39:37+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 463,
        title: "dyula-oromo_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/dyula-oromo_sentence-pairs",
        paper_title: "dyula-oromo_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-04-02 13:06:45+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 464,
        title: "chichewa-oromo_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/chichewa-oromo_sentence-pairs",
        paper_title: "chichewa-oromo_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-04-03 10:45:06+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 465,
        title: "bambara-oromo_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/bambara-oromo_sentence-pairs",
        paper_title: "bambara-oromo_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-04-03 11:39:27+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 466,
        title: "amharic-oromo_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-oromo_sentence-pairs",
        paper_title: "amharic-oromo_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-04-03 12:17:08+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 467,
        title: "akan-oromo_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/akan-oromo_sentence-pairs",
        paper_title: "akan-oromo_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-04-03 12:55:22+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 468,
        title: "oromo-xhosa_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/oromo-xhosa_sentence-pairs",
        paper_title: "oromo-xhosa_sentence-pairs",
        downloads_total: 34,
      
        last_modified: "2025-03-30 20:08:55+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 469,
        title: "oromo-tumbuka_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/oromo-tumbuka_sentence-pairs",
        paper_title: "oromo-tumbuka_sentence-pairs",
        downloads_total: 34,
      
        last_modified: "2025-03-30 20:07:51+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 470,
        title: "oromo-tswana_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/oromo-tswana_sentence-pairs",
        paper_title: "oromo-tswana_sentence-pairs",
        downloads_total: 34,
      
        last_modified: "2025-03-30 20:07:40+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 471,
        title: "oromo-swahili_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/oromo-swahili_sentence-pairs",
        paper_title: "oromo-swahili_sentence-pairs",
        downloads_total: 34,
      
        last_modified: "2025-03-30 20:06:44+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 472,
        title: "oromo-shona_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/oromo-shona_sentence-pairs",
        paper_title: "oromo-shona_sentence-pairs",
        downloads_total: 34,
      
        last_modified: "2025-03-30 20:05:37+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 473,
        title: "oromo-rundi_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/oromo-rundi_sentence-pairs",
        paper_title: "oromo-rundi_sentence-pairs",
        downloads_total: 34,
      
        last_modified: "2025-03-30 20:05:24+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 474,
        title: "kimbundu-oromo_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/kimbundu-oromo_sentence-pairs",
        paper_title: "kimbundu-oromo_sentence-pairs",
        downloads_total: 34,
      
        last_modified: "2025-03-30 19:38:19+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 475,
        title: "kikuyu-oromo_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/kikuyu-oromo_sentence-pairs",
        paper_title: "kikuyu-oromo_sentence-pairs",
        downloads_total: 34,
      
        last_modified: "2025-03-31 07:06:38+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 476,
        title: "kamba-oromo_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/kamba-oromo_sentence-pairs",
        paper_title: "kamba-oromo_sentence-pairs",
        downloads_total: 34,
      
        last_modified: "2025-03-31 07:33:35+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 477,
        title: "igbo-oromo_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/igbo-oromo_sentence-pairs",
        paper_title: "igbo-oromo_sentence-pairs",
        downloads_total: 34,
      
        last_modified: "2025-04-02 10:11:11+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 478,
        title: "oromo-yoruba_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/oromo-yoruba_sentence-pairs",
        paper_title: "oromo-yoruba_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-03-30 20:09:11+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 479,
        title: "oromo-umbundu_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/oromo-umbundu_sentence-pairs",
        paper_title: "oromo-umbundu_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-03-30 20:08:26+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 480,
        title: "lingala-oromo_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/lingala-oromo_sentence-pairs",
        paper_title: "lingala-oromo_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-03-30 19:56:22+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 481,
        title: "kongo-oromo_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/kongo-oromo_sentence-pairs",
        paper_title: "kongo-oromo_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-03-30 19:51:23+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 482,
        title: "ganda-oromo_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/ganda-oromo_sentence-pairs",
        paper_title: "ganda-oromo_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-04-02 11:08:52+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 483,
        title: "fon-oromo_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/fon-oromo_sentence-pairs",
        paper_title: "fon-oromo_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-04-02 12:02:45+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 484,
        title: "afrikaans-oromo_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/afrikaans-oromo_sentence-pairs",
        paper_title: "afrikaans-oromo_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-04-03 13:34:57+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 485,
        title: "oromo-zulu_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/oromo-zulu_sentence-pairs",
        paper_title: "oromo-zulu_sentence-pairs",
        downloads_total: 32,
      
        last_modified: "2025-03-30 20:09:29+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 486,
        title: "oromo-twi_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/oromo-twi_sentence-pairs",
        paper_title: "oromo-twi_sentence-pairs",
        downloads_total: 32,
      
        last_modified: "2025-03-30 20:08:06+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 487,
        title: "oromo-tsonga_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/oromo-tsonga_sentence-pairs",
        paper_title: "oromo-tsonga_sentence-pairs",
        downloads_total: 32,
      
        last_modified: "2025-03-30 20:07:23+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 488,
        title: "bemba-oromo_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/bemba-oromo_sentence-pairs",
        paper_title: "bemba-oromo_sentence-pairs",
        downloads_total: 32,
      
        last_modified: "2025-04-03 11:03:34+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 489,
        title: "afaan_oromo_dataset_final",
        creator: [
      {
          name: "KYAGABA",
          profile: "https://huggingface.co/KYAGABA",
      }  ],
        link: "https://huggingface.co/datasets/KYAGABA/afaan_oromo_dataset_final",
        paper_title: "afaan_oromo_dataset_final",
        downloads_total: 31,
      
        last_modified: "2025-03-25 10:56:00+00:00",
        tags: [
          "size_categories:1K<n<10K",
          "format:parquet",
          "modality:audio",
          "modality:text",
          "library:datasets",
          "library:dask",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 490,
        title: "oromo-swati_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/oromo-swati_sentence-pairs",
        paper_title: "oromo-swati_sentence-pairs",
        downloads_total: 31,
      
        last_modified: "2025-03-30 20:06:55+00:00",
        tags: [
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 491,
        title: "fulah-oromo_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/fulah-oromo_sentence-pairs",
        paper_title: "fulah-oromo_sentence-pairs",
        downloads_total: 30,
      
        last_modified: "2025-04-02 11:29:15+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 492,
        title: "ewe-oromo_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/ewe-oromo_sentence-pairs",
        paper_title: "ewe-oromo_sentence-pairs",
        downloads_total: 30,
      
        last_modified: "2025-04-02 12:34:10+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 493,
        title: "oromo_name",
        creator: [
      {
          name: "Soressaa",
          profile: "https://huggingface.co/Soressaa",
      }  ],
        link: "https://huggingface.co/datasets/Soressaa/oromo_name",
        paper_title: "oromo_name",
        downloads_total: 18,
      
        last_modified: "2023-07-15 14:50:54+00:00",
        tags: [
          "task_categories:token-classification",
          "language:om",
          "license:apache-2.0",
          "size_categories:10K<n<100K",
          "format:text",
          "modality:text",
          "library:datasets",
          "library:mlcroissant",
          "region:us",
          "art",
        ],
        type: "dataset",
      },
      {
        id: 494,
        title: "alpaca_oromo_taco",
        creator: [
      {
          name: "saillab",
          profile: "https://huggingface.co/saillab",
      }  ],
        link: "https://huggingface.co/datasets/saillab/alpaca_oromo_taco",
        paper_title: "alpaca_oromo_taco",
        downloads_total: 11,
      
        last_modified: "2024-09-20 22:08:28+00:00",
        tags: [
          "language:om",
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 495,
        title: "oromo_cleaned_dataset",
        creator: [
      {
          name: "KYAGABA",
          profile: "https://huggingface.co/KYAGABA",
      }  ],
        link: "https://huggingface.co/datasets/KYAGABA/oromo_cleaned_dataset",
        paper_title: "oromo_cleaned_dataset",
        downloads_total: 10,
      
        last_modified: "2025-02-19 11:21:25+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:audio",
          "modality:text",
          "library:datasets",
          "library:dask",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 496,
        title: "Tsegay-Tigrigna-tokenizer",
        creator: [
      {
          name: "Tsegayesemere",
          profile: "https://huggingface.co/Tsegayesemere",
      }  ],
        link: "https://huggingface.co/Tsegayesemere/Tsegay-Tigrigna-tokenizer",
        paper_title: "Tsegay-Tigrigna-tokenizer",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "ti",
          "base_model:gg-ai/xml-bert-1312",
          "base_model:finetune:gg-ai/xml-bert-1312",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 497,
        title: "tigrigna-xlm-roberta-tokenizer",
        creator: [
      {
          name: "Tsegayesemere",
          profile: "https://huggingface.co/Tsegayesemere",
      }  ],
        link: "https://huggingface.co/Tsegayesemere/tigrigna-xlm-roberta-tokenizer",
        paper_title: "tigrigna-xlm-roberta-tokenizer",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "ti",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 498,
        title: "tigrigna-xlm-tokenizer",
        creator: [
      {
          name: "Tsegayesemere",
          profile: "https://huggingface.co/Tsegayesemere",
      }  ],
        link: "https://huggingface.co/Tsegayesemere/tigrigna-xlm-tokenizer",
        paper_title: "tigrigna-xlm-tokenizer",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 499,
        title: "tigrigna-tokenizer",
        creator: [
      {
          name: "Tsegayesemere",
          profile: "https://huggingface.co/Tsegayesemere",
      }  ],
        link: "https://huggingface.co/Tsegayesemere/tigrigna-tokenizer",
        paper_title: "tigrigna-tokenizer",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "license:llama3.2",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 500,
        title: "English-amharic-Tigrigna-Dict",
        creator: [
      {
          name: "hopegeb",
          profile: "https://huggingface.co/hopegeb",
      }  ],
        link: "https://huggingface.co/datasets/hopegeb/English-amharic-Tigrigna-Dict",
        paper_title: "English-amharic-Tigrigna-Dict",
        downloads_total: 12,
      
        last_modified: "2024-11-25 09:41:17+00:00",
        tags: [
          "license:mit",
          "size_categories:1K<n<10K",
          "format:text",
          "modality:text",
          "library:datasets",
          "library:mlcroissant",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 501,
        title: "gpt2-tigrinya-medium",
        creator: [
      {
          name: "luel",
          profile: "https://huggingface.co/luel",
      }  ],
        link: "https://huggingface.co/luel/gpt2-tigrinya-medium",
        paper_title: "gpt2-tigrinya-medium",
        downloads_total: 52,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "safetensors",
          "gpt2",
          "text-generation",
          "tigrinya",
          "ti",
          "license:mit",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 502,
        title: "gpt2-tigrinya-small",
        creator: [
      {
          name: "luel",
          profile: "https://huggingface.co/luel",
      }  ],
        link: "https://huggingface.co/luel/gpt2-tigrinya-small",
        paper_title: "gpt2-tigrinya-small",
        downloads_total: 17,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "safetensors",
          "gpt2",
          "text-generation",
          "tigrinya",
          "ti",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 503,
        title: "ethiopic-sec2sec-tigrinya",
        creator: [
      {
          name: "Samuael",
          profile: "https://huggingface.co/Samuael",
      }  ],
        link: "https://huggingface.co/Samuael/ethiopic-sec2sec-tigrinya",
        paper_title: "ethiopic-sec2sec-tigrinya",
        downloads_total: 16,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "t5",
          "text2text-generation",
          "generated_from_trainer",
          "base_model:Samuael/ethiopic-sec2sec-tigrinya",
          "base_model:finetune:Samuael/ethiopic-sec2sec-tigrinya",
          "autotrain_compatible",
          "text-generation-inference",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 504,
        title: "luel-gpt2-tigrinya-medium-bnb-smashed",
        creator: [
      {
          name: "PrunaAI",
          profile: "https://huggingface.co/PrunaAI",
      }  ],
        link: "https://huggingface.co/PrunaAI/luel-gpt2-tigrinya-medium-bnb-smashed",
        paper_title: "luel-gpt2-tigrinya-medium-bnb-smashed",
        downloads_total: 1,
      
        last_modified: "None",
        tags: [
          "safetensors",
          "gpt2",
          "pruna-ai",
          "base_model:luel/gpt2-tigrinya-medium",
          "base_model:quantized:luel/gpt2-tigrinya-medium",
          "8-bit",
          "bitsandbytes",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 505,
        title: "Tigrinya-1.0",
        creator: [
      {
          name: "baraki",
          profile: "https://huggingface.co/baraki",
      }  ],
        link: "https://huggingface.co/baraki/Tigrinya-1.0",
        paper_title: "Tigrinya-1.0",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 506,
        title: "ethipic-sec2sec-tigrinya",
        creator: [
      {
          name: "Samuael",
          profile: "https://huggingface.co/Samuael",
      }  ],
        link: "https://huggingface.co/Samuael/ethipic-sec2sec-tigrinya",
        paper_title: "ethipic-sec2sec-tigrinya",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 507,
        title: "Tigrinya-tacotron-1.1",
        creator: [
      {
          name: "shetizmo",
          profile: "https://huggingface.co/shetizmo",
      }  ],
        link: "https://huggingface.co/shetizmo/Tigrinya-tacotron-1.1",
        paper_title: "Tigrinya-tacotron-1.1",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "license:mit",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 508,
        title: "tigrinya-tts-beta",
        creator: [
      {
          name: "shetizmo",
          profile: "https://huggingface.co/shetizmo",
      }  ],
        link: "https://huggingface.co/shetizmo/tigrinya-tts-beta",
        paper_title: "tigrinya-tts-beta",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "license:mit",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 509,
        title: "asr-tigrinya-935",
        creator: [
      {
          name: "Samuael",
          profile: "https://huggingface.co/Samuael",
      }  ],
        link: "https://huggingface.co/Samuael/asr-tigrinya-935",
        paper_title: "asr-tigrinya-935",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "arxiv:1910.09700",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 510,
        title: "asr-tigrinya-1045",
        creator: [
      {
          name: "Samuael",
          profile: "https://huggingface.co/Samuael",
      }  ],
        link: "https://huggingface.co/Samuael/asr-tigrinya-1045",
        paper_title: "asr-tigrinya-1045",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "arxiv:1910.09700",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 511,
        title: "tigrinya-asr-characters",
        creator: [
      {
          name: "Samuael",
          profile: "https://huggingface.co/Samuael",
      }  ],
        link: "https://huggingface.co/Samuael/tigrinya-asr-characters",
        paper_title: "tigrinya-asr-characters",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "wav2vec2",
          "automatic-speech-recognition",
          "generated_from_trainer",
          "dataset:alffa_amharic",
          "base_model:Samuael/asr-amharic-phoneme-based-37-6",
          "base_model:finetune:Samuael/asr-amharic-phoneme-based-37-6",
          "license:apache-2.0",
          "model-index",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 512,
        title: "tigrinya-tsonga_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/tigrinya-tsonga_sentence-pairs",
        paper_title: "tigrinya-tsonga_sentence-pairs",
        downloads_total: 40,
      
        last_modified: "2025-03-31 05:05:01+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 513,
        title: "somali-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/somali-tigrinya_sentence-pairs",
        paper_title: "somali-tigrinya_sentence-pairs",
        downloads_total: 40,
      
        last_modified: "2025-03-31 04:54:47+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 514,
        title: "tigrinya-twi_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/tigrinya-twi_sentence-pairs",
        paper_title: "tigrinya-twi_sentence-pairs",
        downloads_total: 39,
      
        last_modified: "2025-03-31 05:05:59+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 515,
        title: "tigrinya-yoruba_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/tigrinya-yoruba_sentence-pairs",
        paper_title: "tigrinya-yoruba_sentence-pairs",
        downloads_total: 38,
      
        last_modified: "2025-03-31 05:07:11+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 516,
        title: "swahili-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/swahili-tigrinya_sentence-pairs",
        paper_title: "swahili-tigrinya_sentence-pairs",
        downloads_total: 38,
      
        last_modified: "2025-03-31 04:58:07+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 517,
        title: "rundi-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/rundi-tigrinya_sentence-pairs",
        paper_title: "rundi-tigrinya_sentence-pairs",
        downloads_total: 38,
      
        last_modified: "2025-03-31 04:44:13+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 518,
        title: "kinyarwanda-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/kinyarwanda-tigrinya_sentence-pairs",
        paper_title: "kinyarwanda-tigrinya_sentence-pairs",
        downloads_total: 38,
      
        last_modified: "2025-03-30 19:47:32+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 519,
        title: "tigrinya-tswana_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/tigrinya-tswana_sentence-pairs",
        paper_title: "tigrinya-tswana_sentence-pairs",
        downloads_total: 37,
      
        last_modified: "2025-03-31 05:05:20+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 520,
        title: "kikuyu-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/kikuyu-tigrinya_sentence-pairs",
        paper_title: "kikuyu-tigrinya_sentence-pairs",
        downloads_total: 37,
      
        last_modified: "2025-03-31 06:59:06+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 521,
        title: "tigrinya-tumbuka_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/tigrinya-tumbuka_sentence-pairs",
        paper_title: "tigrinya-tumbuka_sentence-pairs",
        downloads_total: 36,
      
        last_modified: "2025-03-31 05:05:39+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 522,
        title: "pedi-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/pedi-tigrinya_sentence-pairs",
        paper_title: "pedi-tigrinya_sentence-pairs",
        downloads_total: 36,
      
        last_modified: "2025-03-30 20:11:42+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 523,
        title: "kamba-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/kamba-tigrinya_sentence-pairs",
        paper_title: "kamba-tigrinya_sentence-pairs",
        downloads_total: 36,
      
        last_modified: "2025-03-31 07:25:57+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 524,
        title: "oromo-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/oromo-tigrinya_sentence-pairs",
        paper_title: "oromo-tigrinya_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-03-30 20:07:09+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 525,
        title: "nuer-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/nuer-tigrinya_sentence-pairs",
        paper_title: "nuer-tigrinya_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-03-30 20:02:52+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 526,
        title: "lingala-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/lingala-tigrinya_sentence-pairs",
        paper_title: "lingala-tigrinya_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-03-30 19:58:19+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 527,
        title: "kimbundu-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/kimbundu-tigrinya_sentence-pairs",
        paper_title: "kimbundu-tigrinya_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-03-30 19:40:31+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 528,
        title: "ganda-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/ganda-tigrinya_sentence-pairs",
        paper_title: "ganda-tigrinya_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-04-02 11:01:22+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 529,
        title: "fon-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/fon-tigrinya_sentence-pairs",
        paper_title: "fon-tigrinya_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-04-02 11:55:14+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 530,
        title: "tigrinya-umbundu_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/tigrinya-umbundu_sentence-pairs",
        paper_title: "tigrinya-umbundu_sentence-pairs",
        downloads_total: 34,
      
        last_modified: "2025-03-31 05:06:17+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 531,
        title: "bemba-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/bemba-tigrinya_sentence-pairs",
        paper_title: "bemba-tigrinya_sentence-pairs",
        downloads_total: 34,
      
        last_modified: "2025-04-03 10:55:51+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 532,
        title: "tigrinya-xhosa_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/tigrinya-xhosa_sentence-pairs",
        paper_title: "tigrinya-xhosa_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-03-31 05:06:51+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 533,
        title: "tigrinya-wolof_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/tigrinya-wolof_sentence-pairs",
        paper_title: "tigrinya-wolof_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-03-31 05:06:33+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 534,
        title: "swati-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/swati-tigrinya_sentence-pairs",
        paper_title: "swati-tigrinya_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-03-31 05:02:13+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 535,
        title: "shona-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/shona-tigrinya_sentence-pairs",
        paper_title: "shona-tigrinya_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-03-31 04:48:58+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 536,
        title: "kongo-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/kongo-tigrinya_sentence-pairs",
        paper_title: "kongo-tigrinya_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-03-30 19:52:51+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 537,
        title: "chichewa-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/chichewa-tigrinya_sentence-pairs",
        paper_title: "chichewa-tigrinya_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-04-03 10:38:22+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 538,
        title: "akan-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/akan-tigrinya_sentence-pairs",
        paper_title: "akan-tigrinya_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-04-03 12:47:52+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 539,
        title: "tigrinya-zulu_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/tigrinya-zulu_sentence-pairs",
        paper_title: "tigrinya-zulu_sentence-pairs",
        downloads_total: 32,
      
        last_modified: "2025-03-31 05:07:31+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 540,
        title: "igbo-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/igbo-tigrinya_sentence-pairs",
        paper_title: "igbo-tigrinya_sentence-pairs",
        downloads_total: 32,
      
        last_modified: "2025-04-02 10:03:33+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 541,
        title: "hausa-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/hausa-tigrinya_sentence-pairs",
        paper_title: "hausa-tigrinya_sentence-pairs",
        downloads_total: 32,
      
        last_modified: "2025-04-02 10:31:53+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 542,
        title: "fulah-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/fulah-tigrinya_sentence-pairs",
        paper_title: "fulah-tigrinya_sentence-pairs",
        downloads_total: 32,
      
        last_modified: "2025-04-02 11:21:43+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 543,
        title: "dyula-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/dyula-tigrinya_sentence-pairs",
        paper_title: "dyula-tigrinya_sentence-pairs",
        downloads_total: 32,
      
        last_modified: "2025-04-02 12:59:05+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 544,
        title: "ewe-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/ewe-tigrinya_sentence-pairs",
        paper_title: "ewe-tigrinya_sentence-pairs",
        downloads_total: 31,
      
        last_modified: "2025-04-02 12:26:38+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 545,
        title: "dinka-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/dinka-tigrinya_sentence-pairs",
        paper_title: "dinka-tigrinya_sentence-pairs",
        downloads_total: 29,
      
        last_modified: "2025-04-02 13:32:31+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 546,
        title: "afrikaans-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/afrikaans-tigrinya_sentence-pairs",
        paper_title: "afrikaans-tigrinya_sentence-pairs",
        downloads_total: 29,
      
        last_modified: "2025-04-03 13:26:59+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 547,
        title: "amharic-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-tigrinya_sentence-pairs",
        paper_title: "amharic-tigrinya_sentence-pairs",
        downloads_total: 28,
      
        last_modified: "2025-04-03 12:09:17+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 548,
        title: "bambara-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/bambara-tigrinya_sentence-pairs",
        paper_title: "bambara-tigrinya_sentence-pairs",
        downloads_total: 26,
      
        last_modified: "2025-04-03 11:31:48+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 549,
        title: "alpaca_tigrinya_taco",
        creator: [
      {
          name: "saillab",
          profile: "https://huggingface.co/saillab",
      }  ],
        link: "https://huggingface.co/datasets/saillab/alpaca_tigrinya_taco",
        paper_title: "alpaca_tigrinya_taco",
        downloads_total: 18,
      
        last_modified: "2024-09-20 22:08:36+00:00",
        tags: [
          "language:ti",
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 550,
        title: "alpaca-tigrinya-cleaned",
        creator: [
      {
          name: "saillab",
          profile: "https://huggingface.co/saillab",
      }  ],
        link: "https://huggingface.co/datasets/saillab/alpaca-tigrinya-cleaned",
        paper_title: "alpaca-tigrinya-cleaned",
        downloads_total: 16,
      
        last_modified: "2024-09-20 23:32:34+00:00",
        tags: [
          "language:ti",
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 551,
        title: "GLOCR-v1-Tigrinya-Bible-Train",
        creator: [
      {
          name: "bustamiyusoef",
          profile: "https://huggingface.co/bustamiyusoef",
      }  ],
        link: "https://huggingface.co/datasets/bustamiyusoef/GLOCR-v1-Tigrinya-Bible-Train",
        paper_title: "GLOCR-v1-Tigrinya-Bible-Train",
        downloads_total: 15,
      
        last_modified: "2024-12-01 09:53:54+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:image",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 552,
        title: "Sentiment-Analysis-for-Tigrinya",
        creator: [
      {
          name: "abrhaleitela",
          profile: "https://huggingface.co/abrhaleitela",
      }  ],
        link: "https://huggingface.co/datasets/abrhaleitela/Sentiment-Analysis-for-Tigrinya",
        paper_title: "Sentiment-Analysis-for-Tigrinya",
        downloads_total: 11,
      
        last_modified: "2023-07-10 02:45:32+00:00",
        tags: [
          "license:apache-2.0",
          "arxiv:2006.07698",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 553,
        title: "ASR-Somali",
        creator: [
      {
          name: "Mustafaa4a",
          profile: "https://huggingface.co/Mustafaa4a",
      }  ],
        link: "https://huggingface.co/Mustafaa4a/ASR-Somali",
        paper_title: "ASR-Somali",
        downloads_total: 616,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "tensorboard",
          "wav2vec2",
          "automatic-speech-recognition",
          "generated_from_trainer",
          "license:apache-2.0",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 554,
        title: "somali-mms-tts",
        creator: [
      {
          name: "saleolow",
          profile: "https://huggingface.co/saleolow",
      }  ],
        link: "https://huggingface.co/saleolow/somali-mms-tts",
        paper_title: "somali-mms-tts",
        downloads_total: 337,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "vits",
          "arxiv:1910.09700",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 555,
        title: "xlm-roberta-base-finetuned-somali",
        creator: [
      {
          name: "Davlan",
          profile: "https://huggingface.co/Davlan",
      }  ],
        link: "https://huggingface.co/Davlan/xlm-roberta-base-finetuned-somali",
        paper_title: "xlm-roberta-base-finetuned-somali",
        downloads_total: 81,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "xlm-roberta",
          "fill-mask",
          "license:apache-2.0",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 556,
        title: "speecht5_finetuned_somalitts_sm",
        creator: [
      {
          name: "Somalitts",
          profile: "https://huggingface.co/Somalitts",
      }  ],
        link: "https://huggingface.co/Somalitts/speecht5_finetuned_somalitts_sm",
        paper_title: "speecht5_finetuned_somalitts_sm",
        downloads_total: 22,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "speecht5",
          "text-to-audio",
          "generated_from_trainer",
          "so",
          "base_model:microsoft/speecht5_tts",
          "base_model:finetune:microsoft/speecht5_tts",
          "license:mit",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 557,
        title: "whisper-small-somali",
        creator: [
      {
          name: "steja",
          profile: "https://huggingface.co/steja",
      }  ],
        link: "https://huggingface.co/steja/whisper-small-somali",
        paper_title: "whisper-small-somali",
        downloads_total: 14,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "whisper",
          "automatic-speech-recognition",
          "whisper-event",
          "generated_from_trainer",
          "dataset:google/fleurs",
          "license:apache-2.0",
          "model-index",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 558,
        title: "nllb-english-somali_v4.0",
        creator: [
      {
          name: "adeptschneiderthedev",
          profile: "https://huggingface.co/adeptschneiderthedev",
      }  ],
        link: "https://huggingface.co/adeptschneiderthedev/nllb-english-somali_v4.0",
        paper_title: "nllb-english-somali_v4.0",
        downloads_total: 14,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "m2m_100",
          "text2text-generation",
          "generated_from_trainer",
          "base_model:facebook/nllb-200-distilled-600M",
          "base_model:finetune:facebook/nllb-200-distilled-600M",
          "license:cc-by-nc-4.0",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 559,
        title: "xlm-roberta-large-finetuned-somali",
        creator: [
      {
          name: "Davlan",
          profile: "https://huggingface.co/Davlan",
      }  ],
        link: "https://huggingface.co/Davlan/xlm-roberta-large-finetuned-somali",
        paper_title: "xlm-roberta-large-finetuned-somali",
        downloads_total: 11,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "xlm-roberta",
          "fill-mask",
          "generated_from_trainer",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 560,
        title: "asr-somali-may",
        creator: [
      {
          name: "ayaazlion",
          profile: "https://huggingface.co/ayaazlion",
      }  ],
        link: "https://huggingface.co/ayaazlion/asr-somali-may",
        paper_title: "asr-somali-may",
        downloads_total: 9,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "wav2vec2",
          "automatic-speech-recognition",
          "generated_from_trainer",
          "base_model:facebook/wav2vec2-xls-r-300m",
          "base_model:finetune:facebook/wav2vec2-xls-r-300m",
          "license:apache-2.0",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 561,
        title: "whisper-large-somali",
        creator: [
      {
          name: "steja",
          profile: "https://huggingface.co/steja",
      }  ],
        link: "https://huggingface.co/steja/whisper-large-somali",
        paper_title: "whisper-large-somali",
        downloads_total: 7,
      
        last_modified: "None",
        tags: [
          "transformers",
          "pytorch",
          "whisper",
          "automatic-speech-recognition",
          "whisper-event",
          "generated_from_trainer",
          "dataset:google/fleurs",
          "license:apache-2.0",
          "model-index",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 562,
        title: "wav2vec2-large-mms-1b-somalia",
        creator: [
      {
          name: "skydheere",
          profile: "https://huggingface.co/skydheere",
      }  ],
        link: "https://huggingface.co/skydheere/wav2vec2-large-mms-1b-somalia",
        paper_title: "wav2vec2-large-mms-1b-somalia",
        downloads_total: 6,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "wav2vec2",
          "automatic-speech-recognition",
          "generated_from_trainer",
          "dataset:xtreme_s",
          "base_model:facebook/mms-1b-all",
          "base_model:finetune:facebook/mms-1b-all",
          "license:cc-by-nc-4.0",
          "model-index",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 563,
        title: "openmath_instruct_somali_llama_instruct",
        creator: [
      {
          name: "taresco",
          profile: "https://huggingface.co/taresco",
      }  ],
        link: "https://huggingface.co/taresco/openmath_instruct_somali_llama_instruct",
        paper_title: "openmath_instruct_somali_llama_instruct",
        downloads_total: 2,
      
        last_modified: "None",
        tags: [
          "pytorch",
          "llama",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 564,
        title: "qwen_somali_lora",
        creator: [
      {
          name: "Adanmohh",
          profile: "https://huggingface.co/Adanmohh",
      }  ],
        link: "https://huggingface.co/Adanmohh/qwen_somali_lora",
        paper_title: "qwen_somali_lora",
        downloads_total: 1,
      
        last_modified: "None",
        tags: [
          "peft",
          "safetensors",
          "generated_from_trainer",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 565,
        title: "ASR-Somali-v2",
        creator: [
      {
          name: "Mustafaa4a",
          profile: "https://huggingface.co/Mustafaa4a",
      }  ],
        link: "https://huggingface.co/Mustafaa4a/ASR-Somali-v2",
        paper_title: "ASR-Somali-v2",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 566,
        title: "somali-gpt",
        creator: [
      {
          name: "Bingz22",
          profile: "https://huggingface.co/Bingz22",
      }  ],
        link: "https://huggingface.co/Bingz22/somali-gpt",
        paper_title: "somali-gpt",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "license:mit",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 567,
        title: "mistral_somali_lora_model",
        creator: [
      {
          name: "burtugeey",
          profile: "https://huggingface.co/burtugeey",
      }  ],
        link: "https://huggingface.co/burtugeey/mistral_somali_lora_model",
        paper_title: "mistral_somali_lora_model",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "text-generation-inference",
          "unsloth",
          "mistral",
          "trl",
          "en",
          "base_model:unsloth/mistral-7b-bnb-4bit",
          "base_model:finetune:unsloth/mistral-7b-bnb-4bit",
          "license:apache-2.0",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 568,
        title: "mms1b-finetuned-somali",
        creator: [
      {
          name: "laalays",
          profile: "https://huggingface.co/laalays",
      }  ],
        link: "https://huggingface.co/laalays/mms1b-finetuned-somali",
        paper_title: "mms1b-finetuned-somali",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "wav2vec2",
          "automatic-speech-recognition",
          "arxiv:1910.09700",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 569,
        title: "mms1b-finetuned-somali-2",
        creator: [
      {
          name: "laalays",
          profile: "https://huggingface.co/laalays",
      }  ],
        link: "https://huggingface.co/laalays/mms1b-finetuned-somali-2",
        paper_title: "mms1b-finetuned-somali-2",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "tensorboard",
          "safetensors",
          "wav2vec2",
          "automatic-speech-recognition",
          "generated_from_trainer",
          "dataset:cs224s",
          "base_model:facebook/mms-1b-all",
          "base_model:finetune:facebook/mms-1b-all",
          "license:cc-by-nc-4.0",
          "model-index",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 570,
        title: "llama3-somali",
        creator: [
      {
          name: "adityaedy01",
          profile: "https://huggingface.co/adityaedy01",
      }  ],
        link: "https://huggingface.co/adityaedy01/llama3-somali",
        paper_title: "llama3-somali",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "somali",
          "tts",
          "google/fleurs",
          "unsloth",
          "text-generation",
          "so",
          "dataset:google/fleurs",
          "base_model:unsloth/llama-3-8b-bnb-4bit",
          "base_model:finetune:unsloth/llama-3-8b-bnb-4bit",
          "license:mit",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 571,
        title: "llama3-somali1",
        creator: [
      {
          name: "adityaedy01",
          profile: "https://huggingface.co/adityaedy01",
      }  ],
        link: "https://huggingface.co/adityaedy01/llama3-somali1",
        paper_title: "llama3-somali1",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "text-generation-inference",
          "unsloth",
          "llama",
          "trl",
          "text-generation",
          "en",
          "base_model:unsloth/llama-3-8b-bnb-4bit",
          "base_model:finetune:unsloth/llama-3-8b-bnb-4bit",
          "license:apache-2.0",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 572,
        title: "whisper-small-somali",
        creator: [
      {
          name: "Treqeee",
          profile: "https://huggingface.co/Treqeee",
      }  ],
        link: "https://huggingface.co/Treqeee/whisper-small-somali",
        paper_title: "whisper-small-somali",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "tensorboard",
          "safetensors",
          "whisper",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 573,
        title: "whisper-small-somali",
        creator: [
      {
          name: "hali111",
          profile: "https://huggingface.co/hali111",
      }  ],
        link: "https://huggingface.co/hali111/whisper-small-somali",
        paper_title: "whisper-small-somali",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 574,
        title: "whisper-small-somali",
        creator: [
      {
          name: "maqsud01",
          profile: "https://huggingface.co/maqsud01",
      }  ],
        link: "https://huggingface.co/maqsud01/whisper-small-somali",
        paper_title: "whisper-small-somali",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "tensorboard",
          "safetensors",
          "whisper",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 575,
        title: "SomaliGPT",
        creator: [
      {
          name: "engmohameddjama",
          profile: "https://huggingface.co/engmohameddjama",
      }  ],
        link: "https://huggingface.co/engmohameddjama/SomaliGPT",
        paper_title: "SomaliGPT",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 576,
        title: "cs221-xlm-roberta-base-finetuned-somali-som-finetuned-10-epochs",
        creator: [
      {
          name: "sercetexam9",
          profile: "https://huggingface.co/sercetexam9",
      }  ],
        link: "https://huggingface.co/sercetexam9/cs221-xlm-roberta-base-finetuned-somali-som-finetuned-10-epochs",
        paper_title: "cs221-xlm-roberta-base-finetuned-somali-som-finetuned-10-epochs",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "safetensors",
          "xlm-roberta",
          "text-classification",
          "generated_from_trainer",
          "base_model:Davlan/xlm-roberta-base-finetuned-somali",
          "base_model:finetune:Davlan/xlm-roberta-base-finetuned-somali",
          "license:apache-2.0",
          "autotrain_compatible",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 577,
        title: "nllb-english-somali_v4-200-distilled-600M-int8",
        creator: [
      {
          name: "adeptschneiderthedev",
          profile: "https://huggingface.co/adeptschneiderthedev",
      }  ],
        link: "https://huggingface.co/adeptschneiderthedev/nllb-english-somali_v4-200-distilled-600M-int8",
        paper_title: "nllb-english-somali_v4-200-distilled-600M-int8",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 578,
        title: "wav2vec2-somali",
        creator: [
      {
          name: "ooloteam10",
          profile: "https://huggingface.co/ooloteam10",
      }  ],
        link: "https://huggingface.co/ooloteam10/wav2vec2-somali",
        paper_title: "wav2vec2-somali",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 579,
        title: "somali_wav2vec2",
        creator: [
      {
          name: "ooloteam10",
          profile: "https://huggingface.co/ooloteam10",
      }  ],
        link: "https://huggingface.co/ooloteam10/somali_wav2vec2",
        paper_title: "somali_wav2vec2",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "transformers",
          "arxiv:1910.09700",
          "endpoints_compatible",
          "region:us",
        ],
        type: "model",
      },
      {
        id: 580,
        title: "somali_asr_dataset",
        creator: [
      {
          name: "nurfarah57",
          profile: "https://huggingface.co/nurfarah57",
      }  ],
        link: "https://huggingface.co/nurfarah57/somali_asr_dataset",
        paper_title: "somali_asr_dataset",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 581,
        title: "Qwen2.5-7B-Somali-LoRA",
        creator: [
      {
          name: "Adanmohh",
          profile: "https://huggingface.co/Adanmohh",
      }  ],
        link: "https://huggingface.co/Adanmohh/Qwen2.5-7B-Somali-LoRA",
        paper_title: "Qwen2.5-7B-Somali-LoRA",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 582,
        title: "tts_somali_finetuned",
        creator: [
      {
          name: "Somali-tts",
          profile: "https://huggingface.co/Somali-tts",
      }  ],
        link: "https://huggingface.co/Somali-tts/tts_somali_finetuned",
        paper_title: "tts_somali_finetuned",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 583,
        title: "somali-tts",
        creator: [
      {
          name: "Somalitts",
          profile: "https://huggingface.co/Somalitts",
      }  ],
        link: "https://huggingface.co/Somalitts/somali-tts",
        paper_title: "somali-tts",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 584,
        title: "speecht5_finetuned_somalitts_soomaalia",
        creator: [
      {
          name: "HusseinBashir",
          profile: "https://huggingface.co/HusseinBashir",
      }  ],
        link: "https://huggingface.co/HusseinBashir/speecht5_finetuned_somalitts_soomaalia",
        paper_title: "speecht5_finetuned_somalitts_soomaalia",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 585,
        title: "somali",
        creator: [
      {
          name: "X0lane",
          profile: "https://huggingface.co/X0lane",
      }  ],
        link: "https://huggingface.co/X0lane/somali",
        paper_title: "somali",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "region:us",
        ],
        type: "model",
      },
      {
        id: 586,
        title: "somali_speech",
        creator: [
      {
          name: "HusseinBashir",
          profile: "https://huggingface.co/HusseinBashir",
      }  ],
        link: "https://huggingface.co/datasets/HusseinBashir/somali_speech",
        paper_title: "somali_speech",
        downloads_total: 227,
      
        last_modified: "2025-03-19 11:59:12+00:00",
        tags: [
          "license:apache-2.0",
          "size_categories:n<1K",
          "format:audiofolder",
          "modality:audio",
          "library:datasets",
          "library:mlcroissant",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 587,
        title: "Landsat-8-Somalia-2013-2020",
        creator: [
      {
          name: "rubencart",
          profile: "https://huggingface.co/rubencart",
      }  ],
        link: "https://huggingface.co/datasets/rubencart/Landsat-8-Somalia-2013-2020",
        paper_title: "Landsat-8-Somalia-2013-2020",
        downloads_total: 101,
      
        last_modified: "2025-01-07 11:54:56+00:00",
        tags: [
          "license:mit",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 588,
        title: "dinka-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/dinka-somali_sentence-pairs",
        paper_title: "dinka-somali_sentence-pairs",
        downloads_total: 44,
      
        last_modified: "2025-04-02 13:35:45+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 589,
        title: "somali-tumbuka_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/somali-tumbuka_sentence-pairs",
        paper_title: "somali-tumbuka_sentence-pairs",
        downloads_total: 42,
      
        last_modified: "2025-03-31 04:55:40+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 590,
        title: "somali-tsonga_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/somali-tsonga_sentence-pairs",
        paper_title: "somali-tsonga_sentence-pairs",
        downloads_total: 42,
      
        last_modified: "2025-03-31 04:55:06+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 591,
        title: "somali-yoruba_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/somali-yoruba_sentence-pairs",
        paper_title: "somali-yoruba_sentence-pairs",
        downloads_total: 41,
      
        last_modified: "2025-03-31 04:57:18+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 592,
        title: "somali-umbundu_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/somali-umbundu_sentence-pairs",
        paper_title: "somali-umbundu_sentence-pairs",
        downloads_total: 40,
      
        last_modified: "2025-03-31 04:56:15+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 593,
        title: "somali-twi_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/somali-twi_sentence-pairs",
        paper_title: "somali-twi_sentence-pairs",
        downloads_total: 40,
      
        last_modified: "2025-03-31 04:55:58+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 594,
        title: "somali-tswana_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/somali-tswana_sentence-pairs",
        paper_title: "somali-tswana_sentence-pairs",
        downloads_total: 40,
      
        last_modified: "2025-03-31 04:55:23+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 595,
        title: "somali-tigrinya_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/somali-tigrinya_sentence-pairs",
        paper_title: "somali-tigrinya_sentence-pairs",
        downloads_total: 40,
      
        last_modified: "2025-03-31 04:54:47+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 596,
        title: "somali-xhosa_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/somali-xhosa_sentence-pairs",
        paper_title: "somali-xhosa_sentence-pairs",
        downloads_total: 39,
      
        last_modified: "2025-03-31 04:56:55+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 597,
        title: "somali-wolof_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/somali-wolof_sentence-pairs",
        paper_title: "somali-wolof_sentence-pairs",
        downloads_total: 39,
      
        last_modified: "2025-03-31 04:56:31+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 598,
        title: "pedi-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/pedi-somali_sentence-pairs",
        paper_title: "pedi-somali_sentence-pairs",
        downloads_total: 38,
      
        last_modified: "2025-03-30 20:10:55+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 599,
        title: "somali-zulu_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/somali-zulu_sentence-pairs",
        paper_title: "somali-zulu_sentence-pairs",
        downloads_total: 37,
      
        last_modified: "2025-03-31 04:57:44+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 600,
        title: "somali-swahili_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/somali-swahili_sentence-pairs",
        paper_title: "somali-swahili_sentence-pairs",
        downloads_total: 37,
      
        last_modified: "2025-03-31 04:54:11+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 601,
        title: "shona-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/shona-somali_sentence-pairs",
        paper_title: "shona-somali_sentence-pairs",
        downloads_total: 36,
      
        last_modified: "2025-03-31 04:47:47+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 602,
        title: "rundi-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/rundi-somali_sentence-pairs",
        paper_title: "rundi-somali_sentence-pairs",
        downloads_total: 36,
      
        last_modified: "2025-03-31 04:43:19+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 603,
        title: "nuer-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/nuer-somali_sentence-pairs",
        paper_title: "nuer-somali_sentence-pairs",
        downloads_total: 36,
      
        last_modified: "2025-03-30 20:02:11+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 604,
        title: "kinyarwanda-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/kinyarwanda-somali_sentence-pairs",
        paper_title: "kinyarwanda-somali_sentence-pairs",
        downloads_total: 36,
      
        last_modified: "2025-03-30 19:46:30+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 605,
        title: "oromo-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/oromo-somali_sentence-pairs",
        paper_title: "oromo-somali_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-03-30 20:06:29+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 606,
        title: "kikuyu-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/kikuyu-somali_sentence-pairs",
        paper_title: "kikuyu-somali_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-03-31 07:02:20+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 607,
        title: "kamba-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/kamba-somali_sentence-pairs",
        paper_title: "kamba-somali_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-03-31 07:29:10+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 608,
        title: "ganda-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/ganda-somali_sentence-pairs",
        paper_title: "ganda-somali_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-04-02 11:04:37+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 609,
        title: "fon-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/fon-somali_sentence-pairs",
        paper_title: "fon-somali_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-04-02 11:58:28+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 610,
        title: "dyula-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/dyula-somali_sentence-pairs",
        paper_title: "dyula-somali_sentence-pairs",
        downloads_total: 35,
      
        last_modified: "2025-04-02 13:02:24+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 611,
        title: "lingala-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/lingala-somali_sentence-pairs",
        paper_title: "lingala-somali_sentence-pairs",
        downloads_total: 34,
      
        last_modified: "2025-03-30 19:57:39+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 612,
        title: "kimbundu-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/kimbundu-somali_sentence-pairs",
        paper_title: "kimbundu-somali_sentence-pairs",
        downloads_total: 34,
      
        last_modified: "2025-03-30 19:39:24+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 613,
        title: "bemba-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/bemba-somali_sentence-pairs",
        paper_title: "bemba-somali_sentence-pairs",
        downloads_total: 34,
      
        last_modified: "2025-04-03 10:59:11+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 614,
        title: "amharic-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/amharic-somali_sentence-pairs",
        paper_title: "amharic-somali_sentence-pairs",
        downloads_total: 34,
      
        last_modified: "2025-04-03 12:12:40+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 615,
        title: "afrikaans-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/afrikaans-somali_sentence-pairs",
        paper_title: "afrikaans-somali_sentence-pairs",
        downloads_total: 34,
      
        last_modified: "2025-04-03 13:30:31+00:00",
        tags: [
          "size_categories:1M<n<10M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 616,
        title: "kongo-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/kongo-somali_sentence-pairs",
        paper_title: "kongo-somali_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-03-30 19:52:09+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 617,
        title: "ewe-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/ewe-somali_sentence-pairs",
        paper_title: "ewe-somali_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-04-02 12:29:52+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 618,
        title: "chichewa-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/chichewa-somali_sentence-pairs",
        paper_title: "chichewa-somali_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-04-03 10:41:44+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 619,
        title: "bambara-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/bambara-somali_sentence-pairs",
        paper_title: "bambara-somali_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-04-03 11:35:08+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 620,
        title: "akan-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/akan-somali_sentence-pairs",
        paper_title: "akan-somali_sentence-pairs",
        downloads_total: 33,
      
        last_modified: "2025-04-03 12:51:03+00:00",
        tags: [
          "size_categories:10K<n<100K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 621,
        title: "SomaliData",
        creator: [
      {
          name: "Hanaacadey",
          profile: "https://huggingface.co/Hanaacadey",
      }  ],
        link: "https://huggingface.co/datasets/Hanaacadey/SomaliData",
        paper_title: "SomaliData",
        downloads_total: 33,
      
        last_modified: "2025-04-05 17:14:23+00:00",
        tags: [
          "license:openrail",
          "size_categories:n<1K",
          "format:imagefolder",
          "modality:image",
          "library:datasets",
          "library:mlcroissant",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 622,
        title: "somali-swati_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/somali-swati_sentence-pairs",
        paper_title: "somali-swati_sentence-pairs",
        downloads_total: 32,
      
        last_modified: "2025-03-30 15:17:59+00:00",
        tags: [
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 623,
        title: "hausa-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/hausa-somali_sentence-pairs",
        paper_title: "hausa-somali_sentence-pairs",
        downloads_total: 32,
      
        last_modified: "2025-04-02 10:35:16+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 624,
        title: "alpaca-somali-cleaned",
        creator: [
      {
          name: "saillab",
          profile: "https://huggingface.co/saillab",
      }  ],
        link: "https://huggingface.co/datasets/saillab/alpaca-somali-cleaned",
        paper_title: "alpaca-somali-cleaned",
        downloads_total: 31,
      
        last_modified: "2024-09-20 23:32:40+00:00",
        tags: [
          "language:so",
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 625,
        title: "alpaca_somali_final",
        creator: [
      {
          name: "burtugeey",
          profile: "https://huggingface.co/burtugeey",
      }  ],
        link: "https://huggingface.co/datasets/burtugeey/alpaca_somali_final",
        paper_title: "alpaca_somali_final",
        downloads_total: 31,
      
        last_modified: "2025-01-19 17:50:37+00:00",
        tags: [
          "license:apache-2.0",
          "size_categories:10K<n<100K",
          "format:json",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 626,
        title: "somali-videos",
        creator: [
      {
          name: "Hanaacadey",
          profile: "https://huggingface.co/Hanaacadey",
      }  ],
        link: "https://huggingface.co/datasets/Hanaacadey/somali-videos",
        paper_title: "somali-videos",
        downloads_total: 31,
      
        last_modified: "2025-04-05 16:28:53+00:00",
        tags: [
          "license:openrail",
          "size_categories:n<1K",
          "format:imagefolder",
          "modality:image",
          "library:datasets",
          "library:mlcroissant",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 627,
        title: "igbo-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/igbo-somali_sentence-pairs",
        paper_title: "igbo-somali_sentence-pairs",
        downloads_total: 30,
      
        last_modified: "2025-04-02 10:06:52+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 628,
        title: "fulah-somali_sentence-pairs",
        creator: [
      {
          name: "michsethowusu",
          profile: "https://huggingface.co/michsethowusu",
      }  ],
        link: "https://huggingface.co/datasets/michsethowusu/fulah-somali_sentence-pairs",
        paper_title: "fulah-somali_sentence-pairs",
        downloads_total: 30,
      
        last_modified: "2025-04-02 11:24:58+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 629,
        title: "Somali_dataset",
        creator: [
      {
          name: "burtugeey",
          profile: "https://huggingface.co/burtugeey",
      }  ],
        link: "https://huggingface.co/datasets/burtugeey/Somali_dataset",
        paper_title: "Somali_dataset",
        downloads_total: 26,
      
        last_modified: "2024-04-24 04:52:43+00:00",
        tags: [
          "license:mit",
          "size_categories:10K<n<100K",
          "format:json",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 630,
        title: "alpaca_somali_taco",
        creator: [
      {
          name: "saillab",
          profile: "https://huggingface.co/saillab",
      }  ],
        link: "https://huggingface.co/datasets/saillab/alpaca_somali_taco",
        paper_title: "alpaca_somali_taco",
        downloads_total: 26,
      
        last_modified: "2024-09-20 22:08:43+00:00",
        tags: [
          "language:so",
          "size_categories:10K<n<100K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 631,
        title: "my_somali_tts_dataset",
        creator: [
      {
          name: "HusseinBashir",
          profile: "https://huggingface.co/HusseinBashir",
      }  ],
        link: "https://huggingface.co/datasets/HusseinBashir/my_somali_tts_dataset",
        paper_title: "my_somali_tts_dataset",
        downloads_total: 25,
      
        last_modified: "2025-03-19 15:21:30+00:00",
        tags: [
          "size_categories:n<1K",
          "format:parquet",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 632,
        title: "Somali_Alpaca_Google_translator",
        creator: [
      {
          name: "burtugeey",
          profile: "https://huggingface.co/burtugeey",
      }  ],
        link: "https://huggingface.co/datasets/burtugeey/Somali_Alpaca_Google_translator",
        paper_title: "Somali_Alpaca_Google_translator",
        downloads_total: 22,
      
        last_modified: "2024-04-23 02:30:20+00:00",
        tags: [
          "license:mit",
          "size_categories:10K<n<100K",
          "format:json",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 633,
        title: "Somali-Agriculture-ASR",
        creator: [
      {
          name: "Somali-asr",
          profile: "https://huggingface.co/Somali-asr",
      }  ],
        link: "https://huggingface.co/datasets/Somali-asr/Somali-Agriculture-ASR",
        paper_title: "Somali-Agriculture-ASR",
        downloads_total: 21,
      
        last_modified: "2025-04-08 13:54:24+00:00",
        tags: [
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 634,
        title: "somali-ttt",
        creator: [
      {
          name: "adityaedy01",
          profile: "https://huggingface.co/adityaedy01",
      }  ],
        link: "https://huggingface.co/datasets/adityaedy01/somali-ttt",
        paper_title: "somali-ttt",
        downloads_total: 19,
      
        last_modified: "2024-06-01 20:06:40+00:00",
        tags: [
          "size_categories:100K<n<1M",
          "format:csv",
          "modality:tabular",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 635,
        title: "AlpacaCleaned_translated_somali",
        creator: [
      {
          name: "burtugeey",
          profile: "https://huggingface.co/burtugeey",
      }  ],
        link: "https://huggingface.co/datasets/burtugeey/AlpacaCleaned_translated_somali",
        paper_title: "AlpacaCleaned_translated_somali",
        downloads_total: 18,
      
        last_modified: "2024-04-07 22:43:32+00:00",
        tags: [
          "license:mit",
          "size_categories:10K<n<100K",
          "format:json",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 636,
        title: "somali_data",
        creator: [
      {
          name: "1llahz",
          profile: "https://huggingface.co/1llahz",
      }  ],
        link: "https://huggingface.co/datasets/1llahz/somali_data",
        paper_title: "somali_data",
        downloads_total: 13,
      
        last_modified: "2025-01-27 06:22:31+00:00",
        tags: [
          "size_categories:n<1K",
          "format:parquet",
          "modality:audio",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 637,
        title: "somali_asr",
        creator: [
      {
          name: "nurfarah57",
          profile: "https://huggingface.co/nurfarah57",
      }  ],
        link: "https://huggingface.co/datasets/nurfarah57/somali_asr",
        paper_title: "somali_asr",
        downloads_total: 12,
      
        last_modified: "2025-01-26 15:00:49+00:00",
        tags: [
          "size_categories:n<1K",
          "format:parquet",
          "modality:audio",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 638,
        title: "Roleplay-Somali",
        creator: [
      {
          name: "jojo-ai-mst",
          profile: "https://huggingface.co/jojo-ai-mst",
      }  ],
        link: "https://huggingface.co/datasets/jojo-ai-mst/Roleplay-Somali",
        paper_title: "Roleplay-Somali",
        downloads_total: 11,
      
        last_modified: "2024-10-04 15:16:42+00:00",
        tags: [
          "task_categories:text-generation",
          "language:so",
          "license:mit",
          "size_categories:1K<n<10K",
          "format:csv",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 639,
        title: "Somali_alpaca",
        creator: [
      {
          name: "burtugeey",
          profile: "https://huggingface.co/burtugeey",
      }  ],
        link: "https://huggingface.co/datasets/burtugeey/Somali_alpaca",
        paper_title: "Somali_alpaca",
        downloads_total: 10,
      
        last_modified: "2024-05-21 17:06:53+00:00",
        tags: [
          "language:so",
          "license:mit",
          "size_categories:10K<n<100K",
          "format:json",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 640,
        title: "Alpaca_Somali",
        creator: [
      {
          name: "burtugeey",
          profile: "https://huggingface.co/burtugeey",
      }  ],
        link: "https://huggingface.co/datasets/burtugeey/Alpaca_Somali",
        paper_title: "Alpaca_Somali",
        downloads_total: 9,
      
        last_modified: "2024-04-13 21:39:22+00:00",
        tags: [
          "license:apache-2.0",
          "size_categories:n<1K",
          "format:json",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 641,
        title: "somali-voice",
        creator: [
      {
          name: "adityaedy01",
          profile: "https://huggingface.co/adityaedy01",
      }  ],
        link: "https://huggingface.co/datasets/adityaedy01/somali-voice",
        paper_title: "somali-voice",
        downloads_total: 9,
      
        last_modified: "2024-07-06 17:43:16+00:00",
        tags: [
          "language:so",
          "license:mit",
          "size_categories:n<1K",
          "format:parquet",
          "modality:audio",
          "modality:text",
          "library:datasets",
          "library:pandas",
          "library:mlcroissant",
          "library:polars",
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 642,
        title: "somali",
        creator: [
      {
          name: "X0lane",
          profile: "https://huggingface.co/X0lane",
      }  ],
        link: "https://huggingface.co/datasets/X0lane/somali",
        paper_title: "somali",
        downloads_total: 5,
      
        last_modified: "2025-04-21 20:04:03+00:00",
        tags: [
          "region:us",
        ],
        type: "dataset",
      },
      {
        id: 643,
        title: "amit_harari",
        creator: [
      {
          name: "shirgr",
          profile: "https://huggingface.co/shirgr",
      }  ],
        link: "https://huggingface.co/shirgr/amit_harari",
        paper_title: "amit_harari",
        downloads_total: 0,
      
        last_modified: "None",
        tags: [
          "license:other",
          "region:us",
        ],
        type: "model",
      },
      ];
      
    

  
  