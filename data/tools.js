// AI Forge - Tools Data
// Comprehensive dataset of AI tools across categories

const TOOLS_DATA = [
  // Writing
  {
    id: 1,
    name: "ChatGPT",
    tagline: "Conversational AI Assistant",
    description: "OpenAI's flagship conversational AI. Great for drafting, brainstorming, coding, research, and complex reasoning tasks.",
    category: "writing",
    pricing: "freemium",
    rating: 4.8,
    badges: ["featured"],
    color: 0,
    featured: true,
    trending: true
  },
  {
    id: 2,
    name: "Claude",
    tagline: "Thoughtful AI by Anthropic",
    description: "Constitutional AI built for safety and nuance. Excels at long documents, code analysis, and structured writing tasks.",
    category: "writing",
    pricing: "freemium",
    rating: 4.9,
    badges: ["featured"],
    color: 2,
    featured: true,
    trending: true
  },
  {
    id: 3,
    name: "Jasper",
    tagline: "Marketing Content at Scale",
    description: "Built for marketing teams. Brand voice training, templates, and workflows for content production at enterprise scale.",
    category: "writing",
    pricing: "paid",
    rating: 4.5,
    badges: [],
    color: 5,
    trending: false
  },
  {
    id: 4,
    name: "Notion AI",
    tagline: "AI Inside Your Workspace",
    description: "Native AI for docs, notes, and project management. Summarize meetings, draft docs, and extract action items.",
    category: "writing",
    pricing: "freemium",
    rating: 4.6,
    badges: [],
    color: 3,
    trending: false
  },
  {
    id: 5,
    name: "Copy.ai",
    tagline: "Go-to-Market Copy",
    description: "Specialized for sales and marketing copy. Blog posts, social media, email sequences, and ad creative.",
    category: "writing",
    pricing: "freemium",
    rating: 4.4,
    badges: [],
    color: 4,
    trending: false
  },
  {
    id: 6,
    name: "Grammarly",
    tagline: "AI Writing Assistant",
    description: "Grammar, tone, clarity, and full-sentence rewrites. Now with generative AI for drafting and ideation.",
    category: "writing",
    pricing: "freemium",
    rating: 4.7,
    badges: [],
    color: 2,
    trending: false
  },

  // Image
  {
    id: 7,
    name: "Midjourney",
    tagline: "Premium AI Image Generation",
    description: "Industry-leading image quality. Photorealistic, artistic, and stylized images from natural language prompts.",
    category: "image",
    pricing: "paid",
    rating: 4.8,
    badges: ["featured"],
    color: 5,
    featured: true,
    trending: true
  },
  {
    id: 8,
    name: "DALL-E 3",
    tagline: "OpenAI Image Generator",
    description: "Integrated with ChatGPT. Best for accurate prompt following and text-in-image generation.",
    category: "image",
    pricing: "freemium",
    rating: 4.6,
    badges: [],
    color: 0,
    trending: true
  },
  {
    id: 9,
    name: "Stable Diffusion",
    tagline: "Open Source Image AI",
    description: "Self-hosted, fully customizable. Run on your own hardware for unlimited generation and fine-tuning.",
    category: "image",
    pricing: "free",
    rating: 4.5,
    badges: ["featured"],
    color: 6,
    featured: true,
    trending: false
  },
  {
    id: 10,
    name: "Leonardo.ai",
    tagline: "Production-Ready Art",
    description: "Game assets, concept art, and consistent character design with fine-grained control over style and composition.",
    category: "image",
    pricing: "freemium",
    rating: 4.6,
    badges: [],
    color: 5,
    trending: true
  },
  {
    id: 11,
    name: "Adobe Firefly",
    tagline: "Commercial-Safe Generative AI",
    description: "Trained on licensed content. Integrated with Photoshop, Illustrator, and the Adobe creative suite.",
    category: "image",
    pricing: "freemium",
    rating: 4.5,
    badges: [],
    color: 4,
    trending: false
  },
  {
    id: 12,
    name: "Ideogram",
    tagline: "Text + Image AI",
    description: "Best-in-class for typography in images. Posters, logos, designs with legible text rendering.",
    category: "image",
    pricing: "freemium",
    rating: 4.4,
    badges: ["new"],
    color: 8,
    trending: true
  },

  // Code
  {
    id: 13,
    name: "GitHub Copilot",
    tagline: "AI Pair Programmer",
    description: "Inline code suggestions, full function generation, and chat. Now multi-model with Claude and GPT support.",
    category: "code",
    pricing: "paid",
    rating: 4.7,
    badges: ["featured"],
    color: 1,
    featured: true,
    trending: true
  },
  {
    id: 14,
    name: "Cursor",
    tagline: "AI-First Code Editor",
    description: "VSCode fork built around AI. Multi-file edits, codebase understanding, and natural language code generation.",
    category: "code",
    pricing: "freemium",
    rating: 4.8,
    badges: ["featured", "new"],
    color: 6,
    featured: true,
    trending: true
  },
  {
    id: 15,
    name: "Claude Code",
    tagline: "Agentic Coding Assistant",
    description: "Anthropic's CLI coding agent. Reads repos, plans changes, and executes multi-file refactors autonomously.",
    category: "code",
    pricing: "freemium",
    rating: 4.9,
    badges: ["new"],
    color: 2,
    trending: true
  },
  {
    id: 16,
    name: "Tabnine",
    tagline: "Personalized AI Code Completion",
    description: "Trained on permissive code. Self-hosted options for enterprises. Privacy-first code suggestions.",
    category: "code",
    pricing: "freemium",
    rating: 4.3,
    badges: [],
    color: 4,
    trending: false
  },
  {
    id: 17,
    name: "v0 by Vercel",
    tagline: "UI from Prompts",
    description: "Generate React/Tailwind UIs from text. Iterative refinement and one-click deploy to Vercel.",
    category: "code",
    pricing: "freemium",
    rating: 4.6,
    badges: ["new"],
    color: 0,
    trending: true
  },
  {
    id: 18,
    name: "Replit Agent",
    tagline: "Build Apps From Chat",
    description: "Conversational app builder inside Replit. From idea to deployed app with database and auth.",
    category: "code",
    pricing: "freemium",
    rating: 4.4,
    badges: [],
    color: 3,
    trending: false
  },

  // Video
  {
    id: 19,
    name: "Runway Gen-3",
    tagline: "Cinematic Video Generation",
    description: "State-of-the-art text-to-video. Used in Hollywood productions. Camera control, motion brushes, and editing tools.",
    category: "video",
    pricing: "freemium",
    rating: 4.6,
    badges: ["featured"],
    color: 5,
    featured: true,
    trending: true
  },
  {
    id: 20,
    name: "Pika",
    tagline: "Creative Video AI",
    description: "Idea-to-video with strong creative controls. Lip sync, motion, and easy iteration.",
    category: "video",
    pricing: "freemium",
    rating: 4.4,
    badges: [],
    color: 8,
    trending: true
  },
  {
    id: 21,
    name: "Sora",
    tagline: "OpenAI Video Generator",
    description: "Photorealistic video from text. Long-form generation with consistent characters and physics.",
    category: "video",
    pricing: "freemium",
    rating: 4.7,
    badges: ["featured", "new"],
    color: 0,
    featured: true,
    trending: true
  },
  {
    id: 22,
    name: "HeyGen",
    tagline: "AI Avatar Videos",
    description: "Talking-head videos in any language. Perfect for training, marketing, and personalized outreach at scale.",
    category: "video",
    pricing: "freemium",
    rating: 4.5,
    badges: [],
    color: 6,
    trending: false
  },
  {
    id: 23,
    name: "Descript",
    tagline: "Edit Video Like a Doc",
    description: "Transcription-based video editing. Remove filler words, overdub, and AI-powered editing workflows.",
    category: "video",
    pricing: "freemium",
    rating: 4.6,
    badges: [],
    color: 7,
    trending: false
  },
  {
    id: 24,
    name: "Synthesia",
    tagline: "Studio Without Cameras",
    description: "Enterprise video creation with AI avatars. Used by 50% of Fortune 100 for training and comms.",
    category: "video",
    pricing: "paid",
    rating: 4.4,
    badges: [],
    color: 1,
    trending: false
  },

  // Audio
  {
    id: 25,
    name: "ElevenLabs",
    tagline: "Most Realistic AI Voices",
    description: "Industry-leading voice synthesis. Voice cloning, multilingual, and emotionally-aware speech generation.",
    category: "audio",
    pricing: "freemium",
    rating: 4.8,
    badges: ["featured"],
    color: 6,
    featured: true,
    trending: true
  },
  {
    id: 26,
    name: "Suno",
    tagline: "Full Songs From Prompts",
    description: "Generate complete songs with vocals and instruments. From text prompt to radio-ready track in seconds.",
    category: "audio",
    pricing: "freemium",
    rating: 4.5,
    badges: ["new"],
    color: 4,
    trending: true
  },
  {
    id: 27,
    name: "Udio",
    tagline: "AI Music Production",
    description: "Studio-quality music generation. Genre-specific, customizable, and commercially licensable.",
    category: "audio",
    pricing: "freemium",
    rating: 4.4,
    badges: [],
    color: 5,
    trending: false
  },
  {
    id: 28,
    name: "Whisper",
    tagline: "OpenAI Speech-to-Text",
    description: "Best-in-class transcription. Multilingual, robust to noise, and open source.",
    category: "audio",
    pricing: "free",
    rating: 4.7,
    badges: [],
    color: 3,
    trending: false
  },
  {
    id: 29,
    name: "Murf",
    tagline: "AI Voiceover Studio",
    description: "Studio-quality voiceovers for explainer videos, e-learning, and product demos. 120+ voices in 20+ languages.",
    category: "audio",
    pricing: "freemium",
    rating: 4.3,
    badges: [],
    color: 8,
    trending: false
  },
  {
    id: 30,
    name: "AIVA",
    tagline: "AI Music Composer",
    description: "Compose emotional soundtracks for games, films, and content. Style presets and full editing control.",
    category: "audio",
    pricing: "freemium",
    rating: 4.2,
    badges: [],
    color: 7,
    trending: false
  },

  // Business
  {
    id: 31,
    name: "Glean",
    tagline: "Enterprise AI Search",
    description: "Search across all your workplace apps. Permissions-aware, cited answers from Slack, Drive, Notion, and more.",
    category: "business",
    pricing: "paid",
    rating: 4.7,
    badges: ["featured"],
    color: 1,
    featured: true,
    trending: true
  },
  {
    id: 32,
    name: "Harvey",
    tagline: "AI for Law Firms",
    description: "Domain-specific AI for elite law firms. Due diligence, research, drafting, and matter analysis.",
    category: "business",
    pricing: "paid",
    rating: 4.8,
    badges: ["featured"],
    color: 2,
    featured: true,
    trending: true
  },
  {
    id: 33,
    name: "Hebbia",
    tagline: "Knowledge Worker AI",
    description: "Read millions of documents at once. Used by financial institutions for analysis and research workflows.",
    category: "business",
    pricing: "paid",
    rating: 4.6,
    badges: [],
    color: 1,
    trending: false
  },
  {
    id: 34,
    name: "Clay",
    tagline: "AI-Powered Outbound",
    description: "Data enrichment + AI research + personalized outreach. The growth tool replacing traditional sales stacks.",
    category: "business",
    pricing: "paid",
    rating: 4.7,
    badges: ["new"],
    color: 4,
    trending: true
  },
  {
    id: 35,
    name: "Motion",
    tagline: "AI Calendar & Tasks",
    description: "Automatically schedule your tasks into your calendar. Deadlines-aware and conflict-free planning.",
    category: "business",
    pricing: "freemium",
    rating: 4.5,
    badges: [],
    color: 3,
    trending: false
  },
  {
    id: 36,
    name: "Replit",
    tagline: "Build Software With AI",
    description: "Cloud IDE with AI agent. From idea to deployed app with database, auth, and hosting included.",
    category: "business",
    pricing: "freemium",
    rating: 4.5,
    badges: [],
    color: 6,
    trending: true
  },

  // Design
  {
    id: 37,
    name: "Figma AI",
    tagline: "AI Inside Figma",
    description: "Generate layouts, suggest components, and auto-name layers. Native AI for the design tool you already use.",
    category: "design",
    pricing: "freemium",
    rating: 4.6,
    badges: ["featured"],
    color: 5,
    featured: true,
    trending: true
  },
  {
    id: 38,
    name: "Galileo AI",
    tagline: "UI From Text",
    description: "Generate beautiful UI designs from natural language. Editable in Figma with full design system support.",
    category: "design",
    pricing: "freemium",
    rating: 4.4,
    badges: [],
    color: 8,
    trending: false
  },
  {
    id: 39,
    name: "Uizard",
    tagline: "Mockups in Seconds",
    description: "Turn sketches and screenshots into editable mockups. AI-powered wireframing for non-designers.",
    category: "design",
    pricing: "freemium",
    rating: 4.3,
    badges: [],
    color: 7,
    trending: false
  },
  {
    id: 40,
    name: "Visily",
    tagline: "Wireframing with AI",
    description: "Text-to-wireframe, screenshot-to-design, and sketch-to-Figma. Built for product managers.",
    category: "design",
    pricing: "freemium",
    rating: 4.4,
    badges: [],
    color: 1,
    trending: false
  },
  {
    id: 41,
    name: "Framer AI",
    tagline: "Publish Sites From Prompts",
    description: "Generate full websites with AI, edit visually, and publish with one click. From prompt to production.",
    category: "design",
    pricing: "freemium",
    rating: 4.5,
    badges: ["new"],
    color: 4,
    trending: true
  },
  {
    id: 42,
    name: "Khroma",
    tagline: "AI Color Palettes",
    description: "Trained on your preferences. Discover, search, and save color combinations tailored to your taste.",
    category: "design",
    pricing: "free",
    rating: 4.2,
    badges: [],
    color: 5,
    trending: false
  },

  // Data & Research
  {
    id: 43,
    name: "Perplexity",
    tagline: "Answer Engine",
    description: "AI-powered search with cited sources. Real-time information with transparent references.",
    category: "research",
    pricing: "freemium",
    rating: 4.7,
    badges: ["featured"],
    color: 0,
    featured: true,
    trending: true
  },
  {
    id: 44,
    name: "Elicit",
    tagline: "AI Research Assistant",
    description: "Find relevant papers, extract data, and synthesize findings. Built for academic and scientific research.",
    category: "research",
    pricing: "freemium",
    rating: 4.6,
    badges: [],
    color: 3,
    trending: true
  },
  {
    id: 45,
    name: "Consensus",
    tagline: "Search Scientific Papers",
    description: "Get answers from peer-reviewed research. Citation-backed scientific answers to natural language questions.",
    category: "research",
    pricing: "freemium",
    rating: 4.5,
    badges: [],
    color: 2,
    trending: false
  },
  {
    id: 46,
    name: "Julius AI",
    tagline: "Chat With Your Data",
    description: "Analyze spreadsheets, create visualizations, and run statistical models through natural language.",
    category: "research",
    pricing: "freemium",
    rating: 4.4,
    badges: ["new"],
    color: 1,
    trending: true
  },
  {
    id: 47,
    name: "ChatPDF",
    tagline: "Talk to Your PDFs",
    description: "Upload PDFs and chat with them. Summarize, extract, and query documents instantly.",
    category: "research",
    pricing: "freemium",
    rating: 4.5,
    badges: [],
    color: 7,
    trending: false
  },
  {
    id: 48,
    name: "Scite",
    tagline: "Smart Citations",
    description: "See how research is cited - supporting, contrasting, or mentioning. Evidence-based scientific writing.",
    category: "research",
    pricing: "freemium",
    rating: 4.4,
    badges: [],
    color: 4,
    trending: false
  },

  // Manufacturing & Industrial (per user's request)
  {
    id: 49,
    name: "AI Forge Parser",
    tagline: "Custom Document Intelligence",
    description: "Our flagship custom parser. Extracts structured data from manufacturing reports, batch records, lab PDFs, and complex technical documents.",
    category: "manufacturing",
    pricing: "freemium",
    rating: 5.0,
    badges: ["featured", "new"],
    color: 0,
    featured: true,
    trending: true
  },
  {
    id: 50,
    name: "Sight Machine",
    tagline: "Manufacturing Analytics",
    description: "AI platform for manufacturing. Real-time visibility, root cause analysis, and continuous improvement.",
    category: "manufacturing",
    pricing: "paid",
    rating: 4.5,
    badges: [],
    color: 4,
    trending: true
  },
  {
    id: 51,
    name: "Uptake",
    tagline: "Industrial AI Platform",
    description: "Predictive analytics for industrial operations. Asset performance, failure prediction, and uptime optimization.",
    category: "manufacturing",
    pricing: "paid",
    rating: 4.4,
    badges: [],
    color: 1,
    trending: false
  },
  {
    id: 52,
    name: "SparkCognition",
    tagline: "AI for Industry",
    description: "Industrial AI for predictive maintenance, quality control, and operational efficiency in heavy industry.",
    category: "manufacturing",
    pricing: "paid",
    rating: 4.3,
    badges: [],
    color: 5,
    trending: false
  },
  {
    id: 53,
    name: "C3.ai",
    tagline: "Enterprise AI Applications",
    description: "Pre-built AI applications for manufacturing, supply chain, and operations. Enterprise-grade scale.",
    category: "manufacturing",
    pricing: "paid",
    rating: 4.4,
    badges: [],
    color: 1,
    trending: true
  },
  {
    id: 54,
    name: "Cognite",
    tagline: "Industrial DataOps",
    description: "Contextualize industrial data at scale. AI-ready data foundation for manufacturing and energy.",
    category: "manufacturing",
    pricing: "paid",
    rating: 4.5,
    badges: [],
    color: 6,
    trending: false
  }
];

const CATEGORIES_DATA = [
  {
    id: "writing",
    name: "Writing AI",
    description: "Drafting, editing, and content generation",
    icon: "edit",
    count: 0
  },
  {
    id: "image",
    name: "Image AI",
    description: "Generate, edit, and enhance images",
    icon: "image",
    count: 0
  },
  {
    id: "code",
    name: "Code AI",
    description: "Code generation, review, and debugging",
    icon: "code",
    count: 0
  },
  {
    id: "video",
    name: "Video AI",
    description: "Generate and edit video content",
    icon: "video",
    count: 0
  },
  {
    id: "audio",
    name: "Audio AI",
    description: "Voice, music, and sound generation",
    icon: "audio",
    count: 0
  },
  {
    id: "business",
    name: "Business AI",
    description: "Productivity, sales, and operations",
    icon: "briefcase",
    count: 0
  },
  {
    id: "design",
    name: "Design AI",
    description: "UI/UX, graphics, and prototyping",
    icon: "design",
    count: 0
  },
  {
    id: "research",
    name: "Research AI",
    description: "Analysis, data, and academic research",
    icon: "research",
    count: 0
  },
  {
    id: "manufacturing",
    name: "Manufacturing AI",
    description: "Industrial, batch, and production AI",
    icon: "factory",
    count: 0
  }
];

// Compute category counts
CATEGORIES_DATA.forEach(cat => {
  cat.count = TOOLS_DATA.filter(t => t.category === cat.id).length;
});
