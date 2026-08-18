/* ==========================================================================
   PORTFOLIO DATA STORE — HARSHAN RASU (UPDATED CGPA: 8.77 / 10.0)
   ========================================================================== */

export const PERSONAL_INFO = {
  name: "HARSHAN RASU",
  roleTitle: "Agentic AI Developer",
  headline: "Agentic AI Developer",
  contactPhone: "+91 6381534316",
  contactEmail: "harshan0077888@gmail.com",
  linkedin: "https://linkedin.com/in/harshanrasu",
  linkedinHandle: "linkedin.com/in/harshanrasu",
  github: "https://github.com/harshanrasu",
  githubHandle: "github.com/harshanrasu",
  website: "https://harshan26.in",
  domain: "harshan26.in",
  location: "Coimbatore, TN • Remote",
  cgpa: "8.77 / 10.0",
  resumePath: "/Harshan_Rasu_Agentic_AI_Developer-1.pdf",
  
  introStatement: "Agentic AI Developer specializing in autonomous, LLM-powered automation built with n8n, Make, Zapier, and the OpenAI API. Experienced designing multi-step agent orchestration, RAG pipelines, tool-use, and webhook-triggered workflows that run end-to-end without human intervention.",
  summary: "Agentic AI Developer specializing in autonomous, LLM-powered automation built with n8n, Make, Zapier, and the OpenAI API. Experienced designing multi-step agent orchestration, RAG pipelines, tool-use, and webhook-triggered workflows that run end-to-end without human intervention.",
  
  coreCompetencies: [
    "Agentic AI Systems",
    "LLM Orchestration & Tool Use",
    "n8n / Make / Zapier Automation",
    "OpenAI GPT API",
    "Prompt Engineering",
    "Webhook & REST API Integration",
    "Multi-Agent Workflow Design",
    "Anomaly Detection",
    "Conditional Branching & Error Handling",
    "Cloud AI (Azure, OCI)"
  ],

  bio: {
    greeting: "Hello!",
    headline: "I'm Harshan Rasu — Agentic AI Developer.",
    description: "Specializing in autonomous, LLM-powered automation built with n8n, Make, Zapier, and the OpenAI API. I design multi-step agent orchestration, RAG pipelines, tool-use, and webhook-triggered workflows running end-to-end without human intervention.",
    supporting: "Currently pursuing B.E. in Mechanical Engineering at SNS College of Engineering, Coimbatore (CGPA: 8.77/10.0). Authored research paper submitted to IEEE Xplore on intelligent motion monitoring and thief detection."
  },

  education: {
    degree: "B.E., Mechanical Engineering",
    institution: "SNS College of Engineering, Coimbatore",
    years: "2023 – 2027",
    cgpa: "8.77 / 10.0",
    coursework: "Statistics for Data Science, Probability, Linear Algebra, AI Agent Development"
  },

  researchPaper: {
    title: "An Intelligent System for Real-Time Thief Detection and Motion Monitoring",
    publisher: "Submitted to IEEE Xplore",
    date: "Nov 2024",
    hackathons: ["Smart India Hackathon 2024", "L&T Techgium Hackathon", "National AI/ML Hackathon 2026"]
  },

  certifications: [
    { title: "Oracle Cloud Infrastructure — GenAI Professional", issuer: "Oracle", year: "2025" },
    { title: "Azure AI Fundamentals", issuer: "Microsoft", year: "2025" },
    { title: "AI Fundamentals", issuer: "IBM SkillsBuild", year: "2026" },
    { title: "Google Analytics", issuer: "Google", year: "2026" }
  ],

  socials: [
    { name: "LinkedIn", url: "https://linkedin.com/in/harshanrasu", handle: "linkedin.com/in/harshanrasu" },
    { name: "GitHub", url: "https://github.com/harshanrasu", handle: "github.com/harshanrasu" },
    { name: "Website", url: "https://harshan26.in", handle: "harshan26.in" }
  ]
};

export const SERVICES = [
  {
    id: "s1",
    title: "Agentic AI Systems",
    subtitle: "Autonomous Agent Orchestration • Tool Use • LLM Decision Trees",
    description: "Designing end-to-end multi-agent pipelines with tool-use, dynamic branching, validation logic, and self-correcting error handling."
  },
  {
    id: "s2",
    title: "n8n / Make / Zapier Automation",
    subtitle: "Webhook-Triggered Workflows • Zero-Touch Business Processes",
    description: "Building production-grade automation workflows connecting custom webhooks, OpenAI APIs, CRM systems, and database pipelines."
  },
  {
    id: "s3",
    title: "RAG & Vector Search Systems",
    subtitle: "LangChain • Pinecone / FAISS • PDF Document Q&A",
    description: "Constructing Retrieval-Augmented Generation agents for grounded document Q&A, chunk embedding, and hallucination reduction."
  },
  {
    id: "s4",
    title: "AI Anomaly Detection & ML",
    subtitle: "Python • Isolation Forest • Scikit-learn • Real-Time Scoring",
    description: "Building machine learning models and surveillance agents for live stream anomaly detection, vessel activity scoring, and predictive classification."
  },
  {
    id: "s5",
    title: "Prompt Engineering & REST APIs",
    subtitle: "OpenAI GPT API • Structured JSON • Custom Integrations",
    description: "Crafting structured JSON prompts, REST API integrations, and robust validation pipelines that ensure 100% schema compliance."
  }
];

export const EXPERIENCE = [
  {
    id: "exp-1",
    role: "AI Automation & Agentic Workflow Developer",
    company: "Independent / Freelance Projects — Remote",
    period: "Jul 2024 – Present",
    bullets: [
      "Designed and shipped 5 production-style autonomous AI agent pipelines (resume screening, social content publishing, maritime threat detection, RAG document Q&A, video summarization) using n8n, LangChain, and the OpenAI API — replacing manual, multi-step workflows with zero-touch automation.",
      "Reduced manual processing time by an estimated 90%+ per workflow by replacing human-in-the-loop review steps with autonomous LLM decision-making, tool use, and validation logic."
    ]
  },
  {
    id: "exp-2",
    role: "Data Analytics & Machine Learning Intern",
    company: "YBI Foundation — Remote",
    period: "Jul 2024 – Dec 2024",
    bullets: [
      "Built automated Python ETL pipelines that cut null values and duplicate records by ~20% across 3 source files, laying groundwork for downstream agent data-ingestion logic.",
      "Achieved 92% classification accuracy (vs. 76% baseline) on a healthcare prediction model, validated via 5-fold cross-validation — foundational ML work supporting later anomaly-detection agent design."
    ]
  }
];

export const WORK_PROJECTS = [
  {
    id: "resume-analyzer-ai",
    title: "Resume Analyzer AI",
    category: "Autonomous ATS Scoring Agent",
    techStack: ["n8n", "OpenAI API", "Webhook", "PDF Extraction"],
    summary: "Built a fully autonomous webhook-triggered agent (PDF Extract → Validation → LLM Prompt Engineering → Structured JSON) that scores resumes against job descriptions and returns ATS/keyword-gap feedback with zero manual intervention.",
    impact: "90%+ Manual Time Saved",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    link: "https://github.com/harshanrasu"
  },
  {
    id: "social-media-content-agent",
    title: "Social Media AI Content Generator Agent",
    category: "Zero-Touch Instagram Agent",
    techStack: ["n8n", "OpenAI API", "Instagram Graph API", "Webhook"],
    summary: "Built an agentic pipeline (content generation → image detection → media container creation → publish → verification) that turns brand inputs into published Instagram posts autonomously, with dynamic branching for all outcomes.",
    impact: "100% Autonomous Publishing",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    link: "https://github.com/harshanrasu"
  },
  {
    id: "oceanshield-ai",
    title: "OceanShield AI",
    category: "Real-Time Threat-Detection Agent",
    techStack: ["Python", "Scikit-learn", "Isolation Forest", "Folium", "Hackathon 2026"],
    summary: "Built an autonomous surveillance agent detecting illegal vessel activity (dark ships, loitering, AIS gaps) via Isolation Forest anomaly detection on live AIS streams, achieving under 5% false-positive rate. Designed a weighted risk-scoring engine (Low/Medium/High) with live Folium visualization; presented to 8 judges at a national AI/ML hackathon.",
    impact: "<5% False-Positive Rate",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    link: "https://github.com/harshanrasu"
  },
  {
    id: "rag-pdf-assistant",
    title: "AI PDF Chat Assistant (RAG Agent)",
    category: "Vector Search Document Q&A Agent",
    techStack: ["LangChain", "OpenAI API", "Pinecone/FAISS", "Python"],
    summary: "Built a Retrieval-Augmented Generation agent for natural-language Q&A over PDFs — chunk → embed → vector search (Pinecone/FAISS) → context-grounded GPT response — with conversational memory, reducing hallucinated answers vs. direct LLM prompting.",
    impact: "0% Hallucination Target",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    link: "https://github.com/harshanrasu"
  },
  {
    id: "video-summarizer-agent",
    title: "AI Video Summarizer Agent",
    category: "Multimodal Video Triage Agent",
    techStack: ["OpenCV", "OpenAI GPT", "Python"],
    summary: "Built an autonomous agent combining OpenCV frame extraction with audio/transcript context to auto-generate concise GPT summaries of long-form video, eliminating manual review for content triage.",
    impact: "Instant Video Triage",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
    link: "https://github.com/harshanrasu"
  }
];

export const TECHNICAL_SKILLS = [
  {
    category: "AI Agents & Automation",
    skills: ["n8n", "Make", "Zapier", "Webhooks", "Agentic Pipelines", "LLM Tool Use", "Conditional Branching & Error Handling"]
  },
  {
    category: "LLMs & RAG Architectures",
    skills: ["OpenAI GPT API", "Prompt Engineering", "RAG", "Vector DBs (Pinecone, FAISS)", "LangChain"]
  },
  {
    category: "Languages & Core Tools",
    skills: ["Python (Pandas, NumPy, Scikit-learn)", "SQL", "REST APIs", "JSON", "Git / GitHub"]
  },
  {
    category: "Machine Learning & Cloud AI",
    skills: ["Isolation Forest", "Anomaly Detection", "Azure AI", "Oracle Cloud Infrastructure (OCI GenAI)"]
  }
];
