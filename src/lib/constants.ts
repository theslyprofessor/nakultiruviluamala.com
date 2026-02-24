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
  { href: "#projects", label: "Projects" },
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
    title: "MIDI Maze",
    description: "Educational platform for music technology learning",
    url: "https://midimaze.com",
    tags: ["Education", "Web App", "Music Technology"],
  },
  {
    title: "Southwestern Recording",
    description: "Recording arts program at Southwestern College",
    url: "https://southwesternrecording.org",
    tags: ["Education", "Audio Engineering", "Institution"],
  },
  {
    title: "MEC Info",
    description: "Music education and technology resources",
    url: "https://mecinfo.org",
    tags: ["Education", "Resources", "Music"],
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
