export type TsubakiProduct = {
  id: string;
  name: string;
  description: string;
  category: "cable-carriers" | "cables" | "systems";
  subcategory: string;
  industries: string[];
  supplierUrl: string;
  datasheetUrl: string | null;
  features?: string[];
  imageUrl?: string;
  /** Optional override for the "Learn More" link (used to redirect cables to /cables/[category]) */
  href?: string;
};

export const TSUBAKI_INDUSTRIES = [
  "All",
  "Machine Tools",
  "Automation",
  "Robotics",
  "Semiconductor",
  "Medical",
  "Crane & Port",
  "Oil & Gas",
  "Cleanroom",
  "Printing & Textile",
  "Packaging",
] as const;

export type TsubakiIndustry = (typeof TSUBAKI_INDUSTRIES)[number];

export const TSUBAKI_PRODUCTS: TsubakiProduct[] = [
  // ─── CABLE CARRIERS › STANDARD CARRIERS ──────────────────────────────────
  {
    id: "cc-mono",
    name: "MONO Series",
    description:
      "Reliable plastic cable carriers for standard applications. Cost-effective with extensive unsupported lengths, high torsional rigidity, and one of the most comprehensive standard ranges available worldwide.",
    category: "cable-carriers",
    subcategory: "Standard Carriers",
    industries: ["Machine Tools", "Automation", "Packaging"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/mono-series/",
    datasheetUrl: "https://tsubaki-kabelschlepp.com/uploads/tx_tkg17pim/documents/pdf/MONO-series_EN_Y25W45.pdf",
    imageUrl: "/products/tsubaki/carriers/cc-mono.jpg",
    features: [
      "Easy and fast installation",
      "Extensive unsupported lengths",
      "High torsional rigidity via large link surfaces",
      "Easy to shorten and extend",
      "Immediate worldwide stock availability",
    ],
  },
  {
    id: "cc-quicktrax",
    name: "QuickTrax® Series",
    description:
      "Compact and cost-effective cable carriers in two-component technology. Glass-fiber-reinforced body combined with elastic film-hinge crossbars deliver 20% longer unsupported length and 33% greater load capacity vs. competitive products.",
    category: "cable-carriers",
    subcategory: "Standard Carriers",
    industries: ["Machine Tools", "Automation", "Packaging", "Printing & Textile"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/quicktrax-series/",
    datasheetUrl: null,
    imageUrl: "/products/tsubaki/carriers/cc-quicktrax.jpg",
    features: [
      "20% longer unsupported length than competitors",
      "33% greater load capacity through fibre-glass reinforcement",
      "Integrated noise damping",
      "Tool-free opening inward/outward",
      "Sliding dividers for cable separation",
    ],
  },
  {
    id: "cc-uniflex",
    name: "UNIFLEX Advanced Series",
    description:
      "Light, quiet all-rounder with ball-joint opening stays and extensive subdivision options. Available in ESD, heat-resistant, and flame-resistant variants for a wide range of demanding applications.",
    category: "cable-carriers",
    subcategory: "Standard Carriers",
    industries: ["Machine Tools", "Automation", "Semiconductor", "Medical", "Printing & Textile"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/uniflex-advanced-series/",
    datasheetUrl: "https://tsubaki-kabelschlepp.com/uploads/tx_tkg17pim/documents/pdf/UNIFLEX-Advanced-series_EN_Y25W49_01.pdf",
    imageUrl: "/products/tsubaki/carriers/cc-uniflex.jpg",
    features: [
      "Ball-joint opening stays — opens both sides",
      "Integrated noise damping",
      "Lateral wear surfaces for rotating applications",
      "ESD, heat-resistant, and flame-resistant variants",
      "7 sizes from 17.5mm to 80mm inner height",
    ],
  },
  {
    id: "cc-easytrax",
    name: "EasyTrax® Series",
    description:
      "The fastest cable laying on the market. Lateral swiveling lamellae allow very high fill levels and extremely rapid cable installation. Two-component design with glass-fiber-reinforced body and elastic lamellae.",
    category: "cable-carriers",
    subcategory: "Standard Carriers",
    industries: ["Machine Tools", "Automation", "Semiconductor", "Packaging"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/easytrax-series/",
    datasheetUrl: null,
    imageUrl: "/products/tsubaki/carriers/cc-easytrax.jpg",
    features: [
      "Fastest cable insertion in the industry",
      "Very high fill levels via lateral lamellae",
      "Integrated noise damping",
      "Cleanroom and ESD variants available",
      "High torsional rigidity with extensive unsupported lengths",
    ],
  },

  {
    id: "cc-tkp35",
    name: "TKP35 Series",
    description:
      "Robust all-rounder plastic cable carrier with variable inner distribution. Reliable cable separation through fixable dividers and solid construction for demanding standard applications across a wide range of widths.",
    category: "cable-carriers",
    subcategory: "Standard Carriers",
    industries: ["Machine Tools", "Automation", "Packaging"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/tkp35-series/",
    datasheetUrl: null,
    imageUrl: "/products/tsubaki/carriers/cc-tkp35.jpg",
    features: [
      "Reliable cable separation through fixable dividers",
      "Robust construction for demanding applications",
      "Variable inner distribution options",
      "Tool-free opening for fast cable installation",
      "Wide range of sizes and accessories",
    ],
  },
  {
    id: "cc-tkk",
    name: "TKK Series",
    description:
      "Dirt-repellent plastic cable carriers with an optimised divider design to protect cables. The smooth closed design resists contamination build-up and is suitable for environments where cleanliness is important.",
    category: "cable-carriers",
    subcategory: "Standard Carriers",
    industries: ["Machine Tools", "Automation", "Semiconductor"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/tkk-series/",
    datasheetUrl: null,
    imageUrl: "/products/tsubaki/carriers/cc-tkk.jpg",
    features: [
      "Dirt-repellent smooth closed design",
      "Optimised divider design for cable protection",
      "Low contamination build-up in dirty environments",
      "Compact and lightweight construction",
      "Suitable for food, packaging, and machining sectors",
    ],
  },
  {
    id: "cc-k-series",
    name: "K Series",
    description:
      "Cost-effective, robust plastic cable carriers suitable for large additional loads. Minimized hinge wear through the patented 'life extending 2 disc principle' delivers exceptional durability at competitive cost.",
    category: "cable-carriers",
    subcategory: "Standard Carriers",
    industries: ["Machine Tools", "Automation", "Crane & Port", "Packaging"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/k-series/",
    datasheetUrl: null,
    imageUrl: "/products/tsubaki/carriers/cc-k-series.jpg",
    features: [
      "Patented 'life extending 2 disc principle' hinge",
      "High load capacity at competitive cost",
      "Robust construction for harsh environments",
      "Extensive unsupported length capability",
      "Wide range of sizes and inner widths",
    ],
  },
  {
    id: "cc-m-series",
    name: "M Series",
    description:
      "Variable plastic cable carriers with extensive accessories and stay variants. Minimized hinge wear through the 'life extending 2 disc principle' combined with a comprehensive range of stays and subdivision options.",
    category: "cable-carriers",
    subcategory: "Standard Carriers",
    industries: ["Machine Tools", "Automation", "Packaging", "Printing & Textile"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/m-series/",
    datasheetUrl: null,
    imageUrl: "/products/tsubaki/carriers/cc-m-series.jpg",
    features: [
      "Patented 'life extending 2 disc principle' hinge",
      "Extensive accessories and stay variants",
      "Variable inner distribution options",
      "Multiple opening directions",
      "6 size variants for diverse applications",
    ],
  },
  {
    id: "cc-xl-series",
    name: "XL Series",
    description:
      "Extra-large inner height plastic cable carriers for applications requiring substantial cable bundles. Bolted stays deliver maximum stability even at large cable carrier widths, accommodating the most demanding cable fills.",
    category: "cable-carriers",
    subcategory: "Standard Carriers",
    industries: ["Machine Tools", "Crane & Port", "Automation"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/xl-series/",
    datasheetUrl: null,
    imageUrl: "/products/tsubaki/carriers/cc-xl-series.jpg",
    features: [
      "Extra-large inner height for large cable bundles",
      "Bolted stays for maximum stability at wide widths",
      "High load capacity design",
      "Variable inner distribution",
      "Suitable for heavy industrial applications",
    ],
  },

  // ─── CABLE CARRIERS › HIGH-PERFORMANCE CARRIERS ───────────────────────────
  {
    id: "cc-tkr",
    name: "TKR Series",
    description:
      "Extremely quiet and low-vibration cable carriers for highly dynamic applications. Captive connecting elements eliminate link abrasion — ideal for cleanroom, handling systems, metrology, and high-speed robotics.",
    category: "cable-carriers",
    subcategory: "High-Performance Carriers",
    industries: ["Automation", "Robotics", "Semiconductor", "Medical", "Printing & Textile"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/tkr-series/",
    datasheetUrl: "https://tsubaki-kabelschlepp.com/uploads/tx_tkg17pim/documents/pdf/TKR-series_EN_Y25W45.pdf",
    imageUrl: "/products/tsubaki/carriers/cc-tkr.jpg",
    features: [
      "Extremely low vibration — minimal polygon effect",
      "Cleanroom compatible design",
      "Captive connecting elements — no link abrasion",
      "Opens at any position for easy cable access",
      "Fixable and sliding dividers for cable organisation",
    ],
  },
  {
    id: "cc-quantum",
    name: "QUANTUM® Series",
    description:
      "The quietest cable carrier in the world. Continuous side bands without link connections achieve 31 dB(A), speeds to 40 m/s, and accelerations to 300 m/s². Rated for ≥25 million motion cycles.",
    category: "cable-carriers",
    subcategory: "High-Performance Carriers",
    industries: ["Semiconductor", "Automation", "Medical", "Printing & Textile", "Cleanroom"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/quantum-series/",
    datasheetUrl: "https://tsubaki-kabelschlepp.com/uploads/tx_tkg17pim/documents/pdf/QUANTUM-series_EN_Y25W49.pdf",
    imageUrl: "/products/tsubaki/carriers/cc-quantum.jpg",
    features: [
      "Ultra-quiet: 31 dB(A) — virtually no polygon effect",
      "Speeds to 40 m/s and accelerations to 300 m/s²",
      "≥25 million motion cycle service life",
      "Cleanroom compatible — no links, no link wear",
      "Custom inner widths: 1mm increments (aluminium)",
    ],
  },
  {
    id: "cc-tkhp",
    name: "TKHP Series",
    description:
      "High-performance cable carriers for long travel lengths and high additional loads. Aluminium stays adjustable in 1 mm increments with optional roller damping system (RSD) for quiet heavy-duty operation.",
    category: "cable-carriers",
    subcategory: "High-Performance Carriers",
    industries: ["Machine Tools", "Crane & Port", "Automation"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/tkhp-series",
    datasheetUrl: null,
    imageUrl: "/products/tsubaki/carriers/cc-tkhp.jpg",
    features: [
      "Inner widths 100–800 mm in 1 mm increments",
      "Quick inside/outside opening for cable laying",
      "Optional RSD roller damping for quiet operation",
      "Replaceable glide shoes for extended service life",
      "Robust double fork-bracket sidebands",
    ],
  },

  {
    id: "cc-tka",
    name: "TKA Series",
    description:
      "Chip-tight plastic cable carriers engineered for machining environments where swarf intrusion must be prevented. Optimized interior space utilization with both vertical and horizontal inner distribution possible.",
    category: "cable-carriers",
    subcategory: "High-Performance Carriers",
    industries: ["Machine Tools", "Automation"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/tka-series/",
    datasheetUrl: null,
    imageUrl: "/products/tsubaki/carriers/cc-tka.jpg",
    features: [
      "Chip-tight sealed design — right to the end",
      "Vertical and horizontal inner distribution",
      "Optimized interior space utilization",
      "Robust construction for machining environments",
      "4 size variants available",
    ],
  },
  {
    id: "cc-mt-series",
    name: "MT Series",
    description:
      "Variable closed plastic cable carriers with extensive range of accessories for fully enclosed cable protection. The 'life extending 2 disc principle' minimizes hinge wear across 5 size variants for long service life.",
    category: "cable-carriers",
    subcategory: "High-Performance Carriers",
    industries: ["Machine Tools", "Automation", "Semiconductor"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/mt-series/",
    datasheetUrl: null,
    imageUrl: "/products/tsubaki/carriers/cc-mt-series.jpg",
    features: [
      "Fully closed design for complete cable enclosure",
      "Patented 'life extending 2 disc principle' hinge",
      "Extensive range of accessories",
      "Variable inner distribution options",
      "5 size variants available",
    ],
  },
  {
    id: "cc-xlt-series",
    name: "XLT Series",
    description:
      "Extra-large tube-format cable carriers with variable widths for maximum cable protection in demanding environments. Bolted cover systems deliver maximum stability even at the largest cable carrier widths.",
    category: "cable-carriers",
    subcategory: "High-Performance Carriers",
    industries: ["Machine Tools", "Crane & Port", "Oil & Gas"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/xlt-series/",
    datasheetUrl: null,
    imageUrl: "/products/tsubaki/carriers/cc-xlt-series.jpg",
    features: [
      "Tube format for full cable enclosure",
      "Bolted covers for maximum stability at large widths",
      "Variable inner widths available",
      "Heavy-duty construction for harsh environments",
      "Compatible with S/SX steel carrier accessories",
    ],
  },
  {
    id: "cc-uat",
    name: "UAT Series",
    description:
      "Extreme cable protection plastic carriers engineered for the harshest environmental conditions. Tool-free cover release with a simple screwdriver allows fast cable access while maintaining a fully sealed enclosure.",
    category: "cable-carriers",
    subcategory: "High-Performance Carriers",
    industries: ["Machine Tools", "Oil & Gas", "Crane & Port"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/uat-series/",
    datasheetUrl: null,
    imageUrl: "/products/tsubaki/carriers/cc-uat.jpg",
    features: [
      "Extreme environmental protection rating",
      "Screwdriver-release cover for fast cable access",
      "Fully sealed against liquids and contaminants",
      "Robust construction for harshest conditions",
      "Suitable for outdoor and heavy-industry use",
    ],
  },

  // ─── CABLE CARRIERS › STEEL CARRIERS ─────────────────────────────────────
  {
    id: "cc-ssx",
    name: "S/SX Steel Series",
    description:
      "Extremely robust steel cable carriers for the heaviest loads and harshest environments. Galvanized (S) or stainless/acid-resistant (SX) steel with ATEX EX II 2 GD explosion protection — inner heights to 578 mm.",
    category: "cable-carriers",
    subcategory: "Steel Carriers",
    industries: ["Crane & Port", "Machine Tools", "Oil & Gas"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/ssx-series/",
    datasheetUrl: null,
    imageUrl: "/products/tsubaki/carriers/cc-s-sx.jpg",
    features: [
      "ATEX EX II 2 GD explosion protection",
      "Galvanized (S) or stainless/acid-resistant (SX) steel",
      "Sandwich-designed link plates for extreme load capacity",
      "Inner widths in 1 mm increments up to 1800 mm",
      "Hardened bolt joint design for long service life",
    ],
  },

  {
    id: "cc-ls-lsx",
    name: "LS/LSX Steel Series",
    description:
      "Cost-effective steel cable carriers with a lightweight open-link design for industrial applications requiring steel construction without the premium of fully reinforced carriers. Available in standard (LS) and stainless (LSX) steel.",
    category: "cable-carriers",
    subcategory: "Steel Carriers",
    industries: ["Machine Tools", "Crane & Port", "Oil & Gas"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/ls-lsx-series/",
    datasheetUrl: null,
    imageUrl: "/products/tsubaki/carriers/cc-ls-lsx.jpg",
    features: [
      "Cost-effective steel construction",
      "Lightweight open-link design",
      "Standard (LS) and stainless steel (LSX) variants",
      "Suitable for moderate to heavy loads",
      "Corrosion-resistant LSX variant for aggressive environments",
    ],
  },
  {
    id: "cc-s-sx-tubes",
    name: "S/SX Tubes Series",
    description:
      "Fully enclosed steel tube cable carriers combining the extreme robustness of the S/SX steel range with a sealed tube format for total cable enclosure. Ideal for very harsh environments where cables must be completely protected.",
    category: "cable-carriers",
    subcategory: "Steel Carriers",
    industries: ["Crane & Port", "Machine Tools", "Oil & Gas"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/ssx-series/",
    datasheetUrl: null,
    imageUrl: "/products/tsubaki/carriers/cc-s-sx-tubes.jpg",
    features: [
      "Fully enclosed tube design for complete cable protection",
      "Extreme robustness of the S/SX steel range",
      "Galvanized or stainless/acid-resistant steel",
      "4 tube size variants",
      "Suitable for the most demanding industrial environments",
    ],
  },

  // ─── CABLE CARRIERS › SPECIALIST CARRIERS ────────────────────────────────
  {
    id: "cc-robotrax",
    name: "ROBOTRAX® System",
    description:
      "The only cable carrier engineered for three-dimensional swivel and rotation movements in robotic applications. Three separate chambers organise cables with an integrated steel cable supporting up to 10g acceleration.",
    category: "cable-carriers",
    subcategory: "Specialist Carriers",
    industries: ["Robotics", "Automation", "Semiconductor", "Machine Tools"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/robotrax/",
    datasheetUrl: null,
    imageUrl: "/products/tsubaki/carriers/cc-robotrax.jpg",
    features: [
      "Three-dimensional swivel and rotation movements",
      "Three separate cable chambers",
      "Integrated steel cable — supports up to 10g acceleration",
      "Optional heat shields and protective covers",
      "Fast open-design for direct cable press-in",
    ],
  },
  {
    id: "cc-cleanveyor",
    name: "CLEANVEYOR",
    description:
      "Cleanroom cable carrier system certified to ISO Class 1 — the highest cleanliness rating achievable. Free-standing guiding eliminates particle generation at speeds to 2 m/s and 4G acceleration.",
    category: "cable-carriers",
    subcategory: "Specialist Carriers",
    industries: ["Semiconductor", "Medical", "Cleanroom"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/cleanveyor/",
    datasheetUrl: null,
    imageUrl: "/products/tsubaki/carriers/cc-cleanveyor.jpg",
    features: [
      "Certified cleanroom ISO Class 1",
      "Zero particle generation from friction",
      "Max travel speed 2 m/s with 4G acceleration",
      "−10°C to +80°C operating temperature range",
      "Compatible with 3–10 mm cable/tube diameters",
    ],
  },
  {
    id: "cc-flatveyor",
    name: "FLATVEYOR",
    description:
      "Ultra-low-profile cable management system for cleanroom applications. Compact flat design minimises installation footprint while delivering quiet, particle-minimised operation for sensitive semiconductor production.",
    category: "cable-carriers",
    subcategory: "Specialist Carriers",
    industries: ["Semiconductor", "Medical", "Cleanroom"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/flatveyor/",
    datasheetUrl: null,
    imageUrl: "/products/tsubaki/carriers/cc-flatveyor.png",
    features: [
      "Ultra-low profile for tight installation spaces",
      "Cleanroom-optimised design",
      "Quiet particle-minimised operation",
      "Sustainable ZP variant available",
      "Ideal for semiconductor flat panel display equipment",
    ],
  },
  {
    id: "cc-flatveyor-zp",
    name: "FLATVEYOR ZP",
    description:
      "Sustainable zero-particle ultra-low-profile cleanroom cable management for semiconductor production. The ZP variant delivers the same compact flat design as FLATVEYOR with enhanced sustainability credentials for green manufacturing initiatives.",
    category: "cable-carriers",
    subcategory: "Specialist Carriers",
    industries: ["Semiconductor", "Medical", "Cleanroom"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/flatveyor/",
    datasheetUrl: null,
    imageUrl: "/products/tsubaki/carriers/cc-flatveyor-zp.png",
    features: [
      "Sustainable zero-particle (ZP) design",
      "Ultra-low profile for tight installation spaces",
      "Cleanroom-optimised for semiconductor production",
      "Enhanced sustainability vs. standard FLATVEYOR",
      "Compatible with flat panel display and wafer equipment",
    ],
  },
  {
    id: "cc-protum",
    name: "PROTUM® Series",
    description:
      "Small, lightweight cable carriers for modern office and laboratory environments. No link wear, simple press-in cable installation, and an attractive design available in black, white, or silver gray.",
    category: "cable-carriers",
    subcategory: "Specialist Carriers",
    industries: ["Medical", "Automation"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/protum-series/",
    datasheetUrl: null,
    imageUrl: "/products/tsubaki/carriers/cc-protum.jpg",
    features: [
      "No link wear — very long service life",
      "Cables simply pressed into carrier — no tools",
      "Clip-on side parts for length customisation",
      "Available in black, white, and silver gray",
      "High travel speed and acceleration capability",
    ],
  },

  // ─── CABLES › CONTROL & SIGNAL CABLES ────────────────────────────────────
  {
    id: "cab-control",
    name: "TRAXLINE® CONTROL Cables",
    description:
      "Hi-flex control cables engineered specifically for cable carriers. Four quality tiers — PVC (200/400), PUR (700), and TPE (1000) — rated from 2 to 10 million motion cycles and up to 600 V.",
    category: "cables",
    subcategory: "Control & Signal Cables",
    industries: ["Machine Tools", "Automation", "Robotics", "Packaging", "Medical"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cables/control-cables/",
    datasheetUrl: null,
    imageUrl: "/images/cables/control-200.jpg",
    href: "/companies/tsubaki/cables/control",
    features: [
      "2 to 10 million motion cycle ratings",
      "4 quality tiers: PVC / PVC / PUR / TPE jackets",
      "Shielded and unshielded variants",
      "Up to 600 V rated",
      "TRAXLINE® optimised for cable carrier use",
    ],
  },
  {
    id: "cab-power",
    name: "TRAXLINE® POWER Cables",
    description:
      "Hi-flex power cables for transmitting electrical current to drives and motors in cable carriers. Rated to 1 kV with travel lengths up to 1000 m and 10 million motion cycles in TPE variants.",
    category: "cables",
    subcategory: "Power Cables",
    industries: ["Machine Tools", "Automation", "Crane & Port"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cables/power-cables/",
    datasheetUrl: null,
    imageUrl: "/images/cables/power-400.jpg",
    href: "/companies/tsubaki/cables/power",
    features: [
      "Up to 1 kV rated",
      "Up to 10 million motion cycles (TPE variants)",
      "Travel lengths up to 1000 m",
      "PVC / PUR / TPE outer jacket options",
      "POWER ONE series for extreme applications",
    ],
  },
  {
    id: "cab-data",
    name: "TRAXLINE® DATA Cables",
    description:
      "Hi-flex data cables for network communication in cable carrier applications. Up to 10 million motion cycles with double-shielded twisted-pair options and 1 kV rated variants for maximum noise immunity.",
    category: "cables",
    subcategory: "Control & Signal Cables",
    industries: ["Machine Tools", "Automation", "Semiconductor", "Medical", "Robotics"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cables/data-cables/",
    datasheetUrl: null,
    imageUrl: "/images/cables/data-700.jpg",
    href: "/companies/tsubaki/cables/data",
    features: [
      "Up to 10 million motion cycles",
      "Travel lengths up to 400 m",
      "Double-shielded twisted-pair options",
      "1 kV rated high-isolation variants",
      "PUR outer jacket for heavy applications",
    ],
  },
  {
    id: "cab-bus",
    name: "TRAXLINE® BUS Cables",
    description:
      "Hi-flex fieldbus cables covering PROFIBUS, PROFINET, CAN-BUS, USB, and CAT.5E/6 for industrial networks in cable carriers. PUR-jacketed with up to 7 million motion cycles and 200 m travel lengths.",
    category: "cables",
    subcategory: "BUS & Network Cables",
    industries: ["Machine Tools", "Automation", "Robotics", "Semiconductor"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cables/bus-cables/",
    datasheetUrl: null,
    imageUrl: "/images/cables/profibus-700c.jpg",
    href: "/companies/tsubaki/cables/bus",
    features: [
      "PROFIBUS, PROFINET, CAN-BUS compatible",
      "CAT.5E and CAT.6 double-shielded variants",
      "Up to 7 million motion cycles",
      "Travel lengths up to 200 m",
      "PUR outer jacket for demanding environments",
    ],
  },

  // ─── CABLES › SPECIALTY CABLES ────────────────────────────────────────────
  {
    id: "cab-coaxial",
    name: "TRAXLINE® COAXIAL Cables",
    description:
      "Hi-flex coaxial cables for video and audio signal transmission in cable carrier applications. Available in 50 Ω and 75 Ω impedances with single or double shielding and up to 2 million motion cycles.",
    category: "cables",
    subcategory: "Specialty Cables",
    industries: ["Automation", "Machine Tools", "Medical"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cables/coaxial-cables/",
    datasheetUrl: null,
    imageUrl: "/images/cables/koax-700c-50.jpg",
    href: "/companies/tsubaki/cables/coaxial",
    features: [
      "50 Ω and 75 Ω impedance options",
      "Single and double shielded variants",
      "Up to 2 million motion cycles",
      "PUR outer jacket",
      "Hi-flex construction for continuous movement",
    ],
  },
  {
    id: "cab-foc",
    name: "TRAXLINE® Fiber Optic Cables",
    description:
      "Hi-flex fiber optic cables for EMC-safe, ultra-high-speed data transmission in cable carriers. Metal-free construction, immune to electromagnetic interference, with up to 7 million motion cycles and 500 m travel.",
    category: "cables",
    subcategory: "Specialty Cables",
    industries: ["Automation", "Semiconductor", "Medical", "Robotics"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cables/fiber-optic-cables/",
    datasheetUrl: null,
    imageUrl: "/images/cables/foc-700.jpg",
    href: "/companies/tsubaki/cables/fiber-optic",
    features: [
      "EMC-safe — completely metal-free",
      "Speed-of-light data transmission",
      "Up to 7 million motion cycles",
      "Travel lengths up to 500 m",
      "PUR outer jacket for harsh environments",
    ],
  },
  {
    id: "cab-hv",
    name: "TRAXLINE® High Voltage Cables",
    description:
      "Hi-flex high voltage power cables rated from 6/10 kV to 7.2/12 kV for heavy-duty crane drives and industrial machinery. PUR-jacketed single-core designs with up to 1 million cycles and 1000 m travel.",
    category: "cables",
    subcategory: "Power Cables",
    industries: ["Crane & Port", "Oil & Gas", "Machine Tools"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cables/high-voltage-cables/",
    datasheetUrl: null,
    imageUrl: "/images/cables/hv-6-10kv.jpg",
    href: "/companies/tsubaki/cables/high-voltage",
    features: [
      "Rated from 6/10 kV to 7.2/12 kV",
      "Up to 1 million motion cycles",
      "Travel lengths up to 1000 m",
      "Single-core shielded construction",
      "PUR jacket for extreme environments",
    ],
  },
  {
    id: "cab-oem",
    name: "TRAXLINE® OEM / Servo Cables",
    description:
      "Hi-flex servo and feedback cables for the supply and control of servo drives in cable carriers. SYSTEM S and SYSTEM M variants with hybrid stranding and up to 5 million motion cycles.",
    category: "cables",
    subcategory: "Specialty Cables",
    industries: ["Machine Tools", "Robotics", "Automation", "Semiconductor", "Medical"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cables/oem-cables/",
    datasheetUrl: null,
    imageUrl: "/images/cables/system-s-700c.jpg",
    href: "/companies/tsubaki/cables/oem",
    features: [
      "Servo supply and feedback in one cable",
      "Up to 5 million motion cycles",
      "Hybrid stranding for flexibility and durability",
      "SYSTEM S (shielded) and SYSTEM M (double-shielded)",
      "PUR outer jacket",
    ],
  },

  // ─── OTHER SYSTEMS ────────────────────────────────────────────────────────
  {
    id: "conv-systems",
    name: "Conveyor Systems",
    description:
      "Modular chip and coolant conveyor systems for turning, milling, drilling, laser machining, and punch machining. Hinged belt, wave-belt, scraper belt, and belt conveyor variants for central chip disposal.",
    category: "systems",
    subcategory: "Conveyor Systems",
    industries: ["Machine Tools"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/conveyor-systems/",
    datasheetUrl: null,
    imageUrl: "/products/tsubaki/conv-systems.jpg",
    features: [
      "Modular design for custom machine configurations",
      "Hinged belt, wave-belt, scraper, and belt variants",
      "Central chip disposal capability",
      "Suitable for turning, milling, drilling, laser, and punch",
      "Accessories for complete system integration",
    ],
  },
  {
    id: "guide-telescopic",
    name: "Telescopic Covers",
    description:
      "Precision telescopic covers protecting guideways, measuring systems, and drive elements from chips, coolant, and contaminants at high machining speeds. Flame-retardant and chip-resistant material options.",
    category: "systems",
    subcategory: "Guideway Protection",
    industries: ["Machine Tools"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/guideway-protection/telescopic-covers/",
    datasheetUrl: null,
    imageUrl: "/products/tsubaki/guide-telescopic.jpg",
    features: [
      "Full guideway and drive element protection",
      "Flame-retardant (V0/V2 UL94) material options",
      "Heat, cold, and hot-chip resistance",
      "Custom-engineered to machine specifications",
      "Compatible with high-speed machining centres",
    ],
  },
  {
    id: "guide-bellows",
    name: "Bellows & Wiper Systems",
    description:
      "Protective bellows, way wiper systems, apron covers, spring covers, and roll-up covers for comprehensive guideway protection against chips, coolant splash, and mechanical damage in CNC machining centres.",
    category: "systems",
    subcategory: "Guideway Protection",
    industries: ["Machine Tools"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/guideway-protection/bellows/",
    datasheetUrl: null,
    imageUrl: "/products/tsubaki/guide-bellows.jpg",
    features: [
      "Bellows, way wipers, apron, spring, and roll-up covers",
      "Complete chip and coolant exclusion",
      "Custom-engineered to fit any machine geometry",
      "Durable materials rated for high-speed operations",
      "Compatible with vertical, horizontal, and inclined guideways",
    ],
  },
  {
    id: "machine-protection",
    name: "Machine Protection Systems",
    description:
      "Comprehensive machine protection systems safeguarding sensitive components of production machinery from chips, coolant, and environmental hazards. Custom-engineered solutions for any machine tool layout.",
    category: "systems",
    subcategory: "Machine Protection",
    industries: ["Machine Tools"],
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/machine-protection/",
    datasheetUrl: null,
    imageUrl: "/products/tsubaki/machine-protection.jpg",
    features: [
      "Complete machine envelope protection",
      "Chip, coolant, and contamination exclusion",
      "Wide selection of material grades and finishes",
      "Custom-engineered for any machine layout",
      "Integrated with guideway protection systems",
    ],
  },
];

export const TSUBAKI_CATEGORIES = [
  { key: "all", label: "All Products" },
  { key: "cable-carriers", label: "Cable Carriers" },
  { key: "cables", label: "Cables" },
  { key: "systems", label: "Other Systems" },
] as const;

export type TsubakiCategoryKey = (typeof TSUBAKI_CATEGORIES)[number]["key"];
