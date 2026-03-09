export const SITE_CONFIG = {
  name: "Nakul Tiruviluamala",
  tagline: "Musician | Audio Engineer | Technologist | Educator",
  description: "Portfolio of Nakul Tiruviluamala - musician, audio engineer, technologist, and educator based in San Diego, California. Bridging the worlds of music, technology, and education.",
  email: "nakul@nakultiruviluamala.com",
  location: "San Diego, California",
  url: "https://nakultiruviluamala.com",
} as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#music", label: "Music" },
  { href: "#projects", label: "Web Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export const ROLES = [
  { title: "Musician", icon: "Music" },
  { title: "Audio Engineer", icon: "Mic" },
  { title: "Technologist", icon: "Code" },
  { title: "Educator", icon: "GraduationCap" },
] as const;

export const EXPERTISE = [
  {
    category: "Music & Audio",
    skills: [
      { name: "Music Production", description: "Creating and producing original compositions across genres" },
      { name: "Recording Engineering", description: "Professional studio recording and live sound capture" },
      { name: "Mixing & Mastering", description: "Polishing audio to professional release quality" },
      { name: "Sound Design", description: "Crafting unique sonic textures and audio experiences" },
    ],
  },
  {
    category: "Technology",
    skills: [
      { name: "Web Development", description: "Modern web applications with cutting-edge frameworks" },
      { name: "Audio Software", description: "DAWs, plugins, and audio programming tools" },
      { name: "Systems Integration", description: "Connecting hardware and software for seamless workflows" },
      { name: "Digital Audio", description: "Signal processing, formats, and streaming technologies" },
    ],
  },
  {
    category: "Education",
    skills: [
      { name: "Curriculum Development", description: "Designing engaging courses for music technology" },
      { name: "Private Instruction", description: "One-on-one mentorship for aspiring audio professionals" },
      { name: "Workshop Facilitation", description: "Interactive sessions on recording and production" },
      { name: "Academic Research", description: "Contributing to the field through scholarly work" },
    ],
  },
] as const;

export const PROJECTS = [
  {
    title: "Midimaze",
    description: "Full-stack educational platform featuring knowledge-graph navigation, full-text search, real-time collaboration, and 1,000+ interconnected articles powered by a headless Obsidian CMS.",
    url: "https://midimaze.com",
    tag: "EdTech Platform",
    gradient: "from-violet-500/20 to-purple-500/20",
    thumbnail: "/thumbnails/midimaze.webp?v=3",
  },
  {
    title: "Southwestern Recording",
    description: "Official college program website for Southwestern College's Recording Arts & Technology department.",
    url: "https://southwesternrecording.com",
    tag: "Education",
    gradient: "from-emerald-500/20 to-teal-500/20",
    thumbnail: "/thumbnails/southwesternrecording.webp?v=3",
  },
  {
    title: "Musician's Empowerment Collective",
    description: "Website for a non-profit organization dedicated to empowering musicians through community, resources, and advocacy.",
    url: "https://mecinfo.org",
    tag: "Non-Profit",
    gradient: "from-sky-500/20 to-indigo-500/20",
    thumbnail: "/thumbnails/mecinfo.webp?v=3",
  },
  {
    title: "MusicMind",
    description: "Music business agency offering entertainment consulting, contract and licensing support, and entertainment law guidance for artists and industry professionals.",
    url: "https://musicmind.biz",
    tag: "Music Business",
    gradient: "from-cyan-500/20 to-blue-500/20",
    thumbnail: "/thumbnails/musicmind.webp?v=3",
  },
  {
    title: "Verse & Vow",
    description: "Full-service wedding and event agency featuring entertainment booking, photography packages, and event coordination.",
    url: "https://verseandvow.com",
    tag: "Event Agency",
    gradient: "from-rose-500/20 to-pink-500/20",
    thumbnail: "/thumbnails/verseandvow.webp?v=3",
  },
  {
    title: "Build Forward Tech",
    description: "Technology consulting firm specializing in AI readiness, web development, security audits, and scalability services.",
    url: "https://buildforwardtech.com",
    tag: "Tech Consulting",
    gradient: "from-slate-500/20 to-zinc-500/20",
    thumbnail: "/thumbnails/buildforwardtech.webp?v=3",
  },
] as const;

export const MUSIC_PROJECTS = [
  {
    title: "Forever",
    description: "Original score for the Sundance Film Festival selection. Featured in the 2021 ASCAP Sundance Composer Spotlight.",
    tag: "Film Score",
    icon: "Film",
    url: "https://www.ascap.com/news-events/Events/2021/Sundance/composers/Tiruviluamala_Nakul",
  },
  {
    title: "NWEAMO",
    description: "Performances and compositions for the New West Evolving Arts & Music Organism — an international festival celebrating experimental music and cross-cultural collaboration.",
    tag: "Experimental",
    icon: "Radio",
    url: "https://nweamo.org/nakul-tiruviluamala/",
  },
  {
    title: "Studio Production",
    description: "Recording, mixing, and mastering across genres including classical, jazz, rock, electronica, hip-hop, ambient, and Indian music.",
    tag: "Production",
    icon: "Disc3",
  },
  {
    title: "Live Performance",
    description: "Multi-instrumentalist performing in ensembles and solo settings, blending traditional and electronic instrumentation.",
    tag: "Performance",
    icon: "Mic",
  },
] as const;

export const BIO = {
  short: "Bridging the worlds of music, technology, and education in San Diego, California.",
  full: `Nakul Tiruviluamala is a multifaceted creative professional based in San Diego, California.
  With deep roots in music performance and production, combined with expertise in audio engineering
  and technology, Nakul brings a unique perspective to every project.

  As an educator, Nakul is passionate about sharing knowledge and empowering the next generation
  of music technology professionals. Through innovative curriculum design and hands-on instruction,
  Nakul helps students discover their creative potential at the intersection of art and technology.

  Whether in the studio crafting sonic landscapes, on stage performing, or in the classroom
  inspiring students, Nakul approaches each endeavor with dedication, creativity, and a
  commitment to excellence.`,
} as const;
