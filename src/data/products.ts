export interface ProductMetric {
  label: string;
  value: string;
  change?: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ProductData {
  id: string;
  name: string;
  code: string;
  tagline: string;
  description: string;
  category: string;
  status: string;
  version: string;
  accentColor: string;
  glowColor: string;
  logo: string;
  screenshots: string[];
  metrics: ProductMetric[];
  features: ProductFeature[];
  demoType: "guilds" | "pathfinder" | "quiz" | "canvas";
}

export const PRODUCTS: ProductData[] = [
  {
    id: "ookubb",
    name: "OOKUBB",
    code: "001_OOKB",
    tagline: "GenZ Social Media Platform with the Guilds",
    description: "Next-generation decentralized social network engineered for GenZ communities. Features ultra-responsive voice guilds, custom 3D avatar rooms, instant drop-in lobbies, and zero-tracking encrypted messaging mesh.",
    category: "SOCIAL_MESH_PLATFORM",
    status: "ACTIVE PHASE",
    version: "v3.4.0-PROD",
    accentColor: "#ffb59e", // Tertiary warm orange/peach
    glowColor: "rgba(255, 181, 158, 0.25)",
    logo: "/ookubb/logo.png",
    screenshots: [
      "/ookubb/Screenshot 2026-07-01 153646.png",
      "/ookubb/Screenshot 2026-07-01 153657.png",
      "/ookubb/Screenshot 2026-07-01 153710.png",
      "/ookubb/Screenshot 2026-07-01 153717.png",
      "/ookubb/Screenshot 2026-07-01 153735.png",
      "/ookubb/Screenshot 2026-07-01 153759.png"
    ],
    metrics: [
      { label: "ACTIVE GUILDS", value: "24,810+", change: "+14.2%" },
      { label: "VOICE LATENCY", value: "8.4 ms", change: "OPTIMAL" },
      { label: "DAILY DROP-INS", value: "1.2M", change: "+28.5%" },
      { label: "MESH SECURITY", value: "QUANTUM", change: "99.99%" }
    ],
    features: [
      {
        title: "Dynamic Guild Hubs",
        description: "Create structured topic rooms, voice lounges, and interactive broadcast stages with custom moderation bots.",
        icon: "groups"
      },
      {
        title: "Instant Voice Drop-In",
        description: "Spatial audio rendering with background noise suppression and zero-friction room hopping.",
        icon: "record_voice_over"
      },
      {
        title: "GenZ Aesthetic Customizer",
        description: "Personalize profile banners, holographic badges, and animated guild emblems with live CSS shaders.",
        icon: "palette"
      },
      {
        title: "Sovereign Data Privacy",
        description: "End-to-end decentralized relay servers ensuring complete ownership of user interactions and media.",
        icon: "security"
      }
    ],
    demoType: "guilds"
  },
  {
    id: "lyniq",
    name: "LYNIQ",
    code: "002_LYNQ",
    tagline: "Android 2D Game Where You Find Paths",
    description: "An atmospheric puzzle and speedrun pathfinding game built for Android. Navigate intricate procedural labyrinths, manipulate gravitational grids, and discover hidden dimensional portals to beat global speedrun records.",
    category: "2D_MOBILE_PATHFINDER",
    status: "GLOBAL RELEASE",
    version: "v2.1.8-AND",
    accentColor: "#38bdf8", // Sky cyan
    glowColor: "rgba(56, 189, 248, 0.25)",
    logo: "/lyniq/logo.png",
    screenshots: [
      "/lyniq/WhatsApp Image 2026-07-01 at 4.35.30 PM (1).jpeg",
      "/lyniq/WhatsApp Image 2026-07-01 at 4.35.30 PM.jpeg",
      "/lyniq/WhatsApp Image 2026-07-01 at 4.35.31 PM.jpeg"
    ],
    metrics: [
      { label: "DOWNLOADS", value: "850K+", change: "+34.1%" },
      { label: "FRAME RATE", value: "120 FPS", change: "LOCKED" },
      { label: "PUZZLE LABYRINTHS", value: "500+", change: "PROCEDURAL" },
      { label: "USER RATING", value: "4.9 / 5.0", change: "TOP RATED" }
    ],
    features: [
      {
        title: "Procedural Pathfinding",
        description: "Every level dynamically shifts grid obstacles and warp portals, requiring adaptive spatial reasoning.",
        icon: "route"
      },
      {
        title: "Fluid 2D Physics & Art",
        description: "Hand-crafted minimalist cyber-aesthetics combined with buttery smooth 120 FPS physics rendering.",
        icon: "brush"
      },
      {
        title: "Global Speedrun Arena",
        description: "Compete against asynchronous ghost data from top players worldwide with millisecond precision.",
        icon: "timer"
      },
      {
        title: "Haptic Tactile Feedback",
        description: "Custom vibrational profiles tuned for Android haptic engines that respond to wall collisions and speed boosts.",
        icon: "vibration"
      }
    ],
    demoType: "pathfinder"
  },
  {
    id: "quizzy",
    name: "QUIZZY",
    code: "003_QZZY",
    tagline: "Matchmaking 1v1 or Team Quiz Game",
    description: "High-octane competitive quiz arena featuring instant Elo-based matchmaking for intense 1v1 duels or multi-player squad clashes. AI-generated trivia questions adapt in real-time to challenge both teams' knowledge limits.",
    category: "COMPETITIVE_TRIVIA_ARENA",
    status: "LIVE MATCHMAKING",
    version: "v4.0.2-NET",
    accentColor: "#34d399", // Emerald green
    glowColor: "rgba(52, 211, 153, 0.25)",
    logo: "/quizzy/new logo.png",
    screenshots: [
      "/quizzy/WhatsApp Image 2026-07-01 at 3.40.31 PM.jpeg",
      "/quizzy/WhatsApp Image 2026-07-01 at 3.40.33 PM (1).jpeg",
      "/quizzy/WhatsApp Image 2026-07-01 at 3.40.33 PM.jpeg",
      "/quizzy/WhatsApp Image 2026-07-01 at 3.40.34 PM.jpeg"
    ],
    metrics: [
      { label: "DAILY MATCHES", value: "185,000", change: "+19.4%" },
      { label: "MATCHMAKING TIME", value: "1.2 sec", change: "INSTANT" },
      { label: "QUESTION BANK", value: "2.4M+", change: "AI-SYNTH" },
      { label: "PEAK ELO RATING", value: "3450", change: "GRANDMASTER" }
    ],
    features: [
      {
        title: "Instant 1v1 & Team Arena",
        description: "Queue up solo for lightning-fast trivia duels or assemble a 4-player squad for synchronized team battles.",
        icon: "sports_esports"
      },
      {
        title: "Adaptive AI Question Engine",
        description: "Questions calibrate dynamically based on current score momentum to keep matches thrilling until the final second.",
        icon: "psychology"
      },
      {
        title: "Elo Ranking & Leagues",
        description: "Climb from Bronze Challenger to Apex Grandmaster with seasonal tournaments and exclusive title rewards.",
        icon: "military_tech"
      },
      {
        title: "Custom Room & Tourneys",
        description: "Host private clan wars, academic study bowls, or company-wide trivia showdowns with custom category filters.",
        icon: "emoji_events"
      }
    ],
    demoType: "quiz"
  },
  {
    id: "studyspace",
    name: "STUDYSPACE",
    code: "004_STSP",
    tagline: "The Best Notetaking App in the World with AI Assistant & Infinite Canvas",
    description: "The ultimate cognitive workstation for students, researchers, and creators. Combine an unbounded infinite spatial canvas with a neural AI assistant that synthesizes lectures, auto-links concepts, and generates interactive mind maps instantly.",
    category: "NEURAL_SPATIAL_WORKSPACE",
    status: "OMEGA RELEASE",
    version: "v5.0.0-AI",
    accentColor: "#a78bfa", // Violet purple
    glowColor: "rgba(167, 139, 250, 0.25)",
    logo: "/studyspace/logo.jpeg",
    screenshots: [
      "/studyspace/WhatsApp Image 2026-07-01 at 4.00.23 PM.jpeg",
      "/studyspace/WhatsApp Image 2026-07-01 at 4.22.30 PM (1).jpeg",
      "/studyspace/WhatsApp Image 2026-07-01 at 4.22.30 PM.jpeg",
      "/studyspace/WhatsApp Image 2026-07-01 at 4.23.22 PM (1).jpeg",
      "/studyspace/WhatsApp Image 2026-07-01 at 4.23.22 PM.jpeg",
      "/studyspace/WhatsApp Image 2026-07-01 at 4.23.28 PM.jpeg"
    ],
    metrics: [
      { label: "CANVAS SIZE", value: "INFINITE", change: "UNBOUNDED" },
      { label: "AI SYNTHESIS SPEED", value: "0.3 sec", change: "REAL-TIME" },
      { label: "STUDENT ADOPTION", value: "1.4M+", change: "#1 IN CLASS" },
      { label: "KNOWLEDGE RETENTION", value: "94.2%", change: "+40% BOOST" }
    ],
    features: [
      {
        title: "Infinite Spatial Canvas",
        description: "Zoom effortlessly from high-level curriculum roadmaps down to atomic equation notes without borders or page limits.",
        icon: "all_inclusive"
      },
      {
        title: "Neural AI Assistant",
        description: "Ask your AI copilot to summarize PDFs, generate flashcards, solve equations, or critique your thesis right on the canvas.",
        icon: "smart_toy"
      },
      {
        title: "Auto Concept Linking",
        description: "The neural engine automatically detects relationships between scattered notes and draws bi-directional knowledge graphs.",
        icon: "hub"
      },
      {
        title: "Multi-Modal Annotation",
        description: "Embed voice memos, video lectures, code snippets, and hand-drawn diagrams seamlessly in one cohesive workspace.",
        icon: "draw"
      }
    ],
    demoType: "canvas"
  }
];

export function getProductById(id: string): ProductData | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
