export type JaeProduct = {
  id: string;
  name: string;
  description: string;
  category:
    | "board-to-board"
    | "fpc-ffc"
    | "wire-to-board"
    | "circular"
    | "memory"
    | "high-speed"
    | "automotive";
  subcategory: string;
  industries: string[];
  supplierUrl: string;
  datasheetUrl: string | null;
  features?: string[];
  imageUrl?: string;
  specs?: { label: string; value: string }[];
};

export const JAE_CATEGORIES = [
  { key: "all",           label: "All Connectors"    },
  { key: "board-to-board", label: "Board-to-Board"   },
  { key: "fpc-ffc",       label: "FPC / FFC"         },
  { key: "wire-to-board", label: "Wire-to-Board"     },
  { key: "circular",      label: "Circular"          },
  { key: "memory",        label: "Memory"            },
  { key: "high-speed",    label: "High-Speed"        },
  { key: "automotive",    label: "Automotive"        },
] as const;

export type JaeCategoryKey = (typeof JAE_CATEGORIES)[number]["key"];

export const JAE_INDUSTRIES = [
  "All",
  "Aerospace",
  "Automotive",
  "Consumer Electronics",
  "Industrial",
  "Medical",
  "Telecommunications",
  "Defense",
  "Storage & Computing",
] as const;

export type JaeIndustry = (typeof JAE_INDUSTRIES)[number];

export const JAE_PRODUCTS: JaeProduct[] = [
  // ─── BOARD-TO-BOARD ──────────────────────────────────────────────────────
  {
    id: "jae-wp7",
    name: "WP7 Series",
    description:
      "Ultra-miniature 0.4 mm pitch board-to-board connector with a low profile of 0.9–4.0 mm. Designed for space-constrained smartphones, wearables, and portable devices requiring reliable fine-pitch interconnection.",
    category: "board-to-board",
    subcategory: "Board-to-Board Connectors",
    industries: ["Consumer Electronics", "Medical", "Telecommunications"],
    supplierUrl: "https://www.jae.com/en/connectors/series/detail/id=64346",
    datasheetUrl: "https://www.jae.com/en/connectors/series/detail/id=64346#Downloads",
    imageUrl: "/products/jae/jae-wp7.jpg",
    features: [
      "0.4 mm pitch, available in 4–100 positions",
      "Low profile: 0.9 mm to 4.0 mm mated height",
      "High insertion/extraction cycle life",
      "Designed for reflow soldering",
      "Compatible with automated pick-and-place assembly",
    ],
    specs: [
      { label: "Pitch", value: "0.4 mm" },
      { label: "Mated height", value: "0.9 – 4.0 mm" },
      { label: "Current rating", value: "0.3 A per contact" },
    ],
  },
  {
    id: "jae-wp10",
    name: "WP10 Series",
    description:
      "High-current 10 A board-to-board connector in a compact 0.5 mm pitch format. Ideal for battery management systems, power modules, and high-power portable devices where current capacity and small footprint are both critical.",
    category: "board-to-board",
    subcategory: "Board-to-Board Connectors",
    industries: ["Consumer Electronics", "Automotive", "Industrial"],
    supplierUrl: "https://www.jae.com/en/connectors/series/detail/id=64340",
    datasheetUrl: "https://www.jae.com/en/connectors/series/detail/id=64340#Downloads",
    features: [
      "10 A per contact high-current rating",
      "0.5 mm pitch, 2–100 positions",
      "Low contact resistance for power applications",
      "Robust locking mechanism",
      "RoHS compliant",
    ],
    specs: [
      { label: "Pitch", value: "0.5 mm" },
      { label: "Current rating", value: "10 A per contact" },
      { label: "Voltage rating", value: "50 V AC/DC" },
    ],
  },
  {
    id: "jae-wp27d",
    name: "WP27D Series",
    description:
      "Ultra-fine 0.35 mm pitch board-to-board connector offering the smallest footprint in JAE's WP family. Engineered for next-generation smartphones and compact medical wearables where PCB real estate is at an absolute premium.",
    category: "board-to-board",
    subcategory: "Board-to-Board Connectors",
    industries: ["Consumer Electronics", "Medical", "Telecommunications"],
    supplierUrl: "https://www.jae.com/en/connectors/series/detail/id=859",
    datasheetUrl: "https://www.jae.com/en/connectors/series/detail/id=859#Downloads",
    imageUrl: "/products/jae/jae-wp27d.jpg",
    features: [
      "0.35 mm pitch — among the smallest available",
      "Mated height from 0.9 mm",
      "4–100 positions",
      "High-frequency signal integrity",
      "Designed for compact portable devices",
    ],
    specs: [
      { label: "Pitch", value: "0.35 mm" },
      { label: "Mated height", value: "from 0.9 mm" },
      { label: "Current rating", value: "0.2 A per contact" },
    ],
  },
  {
    id: "jae-wp56ms",
    name: "WP55DK / WP56MS Series",
    description:
      "0.3 mm ultra-low-profile board-to-board connector with a mated height of just 0.7 mm. Sets the industry benchmark for miniaturization in compact mobile and IoT devices demanding the thinnest possible interconnect solution.",
    category: "board-to-board",
    subcategory: "Board-to-Board Connectors",
    industries: ["Consumer Electronics", "Telecommunications", "Medical"],
    supplierUrl: "https://www.jae.com/en/connectors/series/detail/id=112618",
    datasheetUrl: "https://www.jae.com/en/connectors/series/detail/id=112618#Downloads",
    imageUrl: "/products/jae/jae-wp56ms.jpg",
    features: [
      "0.3 mm pitch — industry-leading miniaturization",
      "0.7 mm ultra-low mated height",
      "Optimized for thin smartphones and IoT",
      "Stacking heights from 0.7 mm",
      "High signal integrity at fine pitch",
    ],
    specs: [
      { label: "Pitch", value: "0.3 mm" },
      { label: "Mated height", value: "0.7 mm" },
      { label: "Current rating", value: "0.15 A per contact" },
    ],
  },

  // ─── FPC / FFC ───────────────────────────────────────────────────────────
  {
    id: "jae-fr02",
    name: "FR02 Series",
    description:
      "Slim, back-flip ZIF FPC/FFC connector with a 0.5 mm pitch for camera modules, display ribbons, and touch panels. The dual-contact design ensures reliable connection to single-sided and double-sided FPC cables.",
    category: "fpc-ffc",
    subcategory: "FPC / FFC Connectors",
    industries: ["Consumer Electronics", "Medical", "Industrial"],
    supplierUrl: "https://products.jae.com/gl/en/connectors/category/fpc-ffc/fr02/",
    datasheetUrl: null,
    imageUrl: "/products/jae/jae-fr02.jpg",
    features: [
      "0.5 mm pitch ZIF back-flip actuator",
      "Dual-contact design — compatible with single/double-sided FPC",
      "Ultra-low profile for display and camera assemblies",
      "4–51 positions",
      "Reflow solderable",
    ],
    specs: [
      { label: "Pitch", value: "0.5 mm" },
      { label: "Type", value: "ZIF back-flip" },
      { label: "FPC thickness", value: "0.3 mm" },
    ],
  },
  {
    id: "jae-fi-fpc",
    name: "FI Series (FPC)",
    description:
      "Versatile FPC connector family available in a wide range of pitches (0.3 to 1.25 mm) and actuator types — bottom contact, top contact, and non-ZIF. Used extensively in smartphones, tablets, and industrial HMI displays.",
    category: "fpc-ffc",
    subcategory: "FPC / FFC Connectors",
    industries: ["Consumer Electronics", "Industrial", "Medical"],
    supplierUrl: "https://www.jae.com/en/connectors/series/detail/id=64285",
    datasheetUrl: "https://www.jae.com/en/connectors/series/detail/id=64285#Downloads",
    imageUrl: "/products/jae/jae-fi.jpg",
    features: [
      "Wide pitch range: 0.3 – 1.25 mm",
      "Multiple actuator styles: ZIF, non-ZIF, flip-lock",
      "Top and bottom contact options",
      "Up to 60 positions",
      "Industry-standard footprints",
    ],
    specs: [
      { label: "Pitch", value: "0.3 – 1.25 mm" },
      { label: "Contact type", value: "Top / Bottom / Dual" },
      { label: "Positions", value: "4 – 60" },
    ],
  },

  // ─── WIRE-TO-BOARD ────────────────────────────────────────────────────────
  {
    id: "jae-fi-b2c",
    name: "FI Series (Board-to-Cable)",
    description:
      "1.25 mm pitch board-to-cable connector from the FI family, suited for internal wiring harnesses in consumer electronics, industrial equipment, and medical devices. Positive locking latch and a compact body prevent accidental disconnection.",
    category: "wire-to-board",
    subcategory: "Wire-to-Board Connectors",
    industries: ["Consumer Electronics", "Industrial", "Medical"],
    supplierUrl: "https://www.jae.com/en/connectors/series/detail/id=64285",
    datasheetUrl: "https://www.jae.com/en/connectors/series/detail/id=64285#Downloads",
    imageUrl: "/products/jae/jae-fi.jpg",
    features: [
      "1.25 mm pitch, 2–20 positions",
      "Positive-locking latch prevents accidental extraction",
      "Compatible with 26–30 AWG wire",
      "Rated up to 1 A per contact",
      "UL/CSA recognized",
    ],
    specs: [
      { label: "Pitch", value: "1.25 mm" },
      { label: "Current rating", value: "1 A per contact" },
      { label: "Wire gauge", value: "26 – 30 AWG" },
    ],
  },
  {
    id: "jae-il-ag5",
    name: "IL-AG5 Series",
    description:
      "Ultra-fine 0.25 mm pitch wire-to-board connector for high-density internal interconnects in portable devices. The zero-insertion-force design minimizes assembly force, protecting fragile ultra-fine wires during manufacturing.",
    category: "wire-to-board",
    subcategory: "Wire-to-Board Connectors",
    industries: ["Consumer Electronics", "Medical", "Telecommunications"],
    supplierUrl: "https://www.jae.com/en/connectors/series/detail/id=64295",
    datasheetUrl: "https://www.jae.com/en/connectors/series/detail/id=64295#Downloads",
    imageUrl: "/products/jae/jae-il-ag5.jpg",
    features: [
      "0.25 mm pitch — industry-leading density",
      "ZIF design protects ultra-fine wires",
      "Compact low-profile housing",
      "Designed for robotic assembly",
      "Up to 30 positions",
    ],
    specs: [
      { label: "Pitch", value: "0.25 mm" },
      { label: "Type", value: "ZIF (zero insertion force)" },
      { label: "Positions", value: "up to 30" },
    ],
  },

  // ─── CIRCULAR ─────────────────────────────────────────────────────────────
  {
    id: "jae-jl02",
    name: "JL02 Series",
    description:
      "MIL-C-5015 style rugged circular connector for harsh-environment industrial, aerospace, and defense applications. Offers a threaded coupling with vibration resistance and a broad range of shell sizes and contact arrangements.",
    category: "circular",
    subcategory: "Circular Connectors",
    industries: ["Aerospace", "Defense", "Industrial", "Medical"],
    supplierUrl: "https://www.jae.com/en/connectors/series/detail/id=64263",
    datasheetUrl: "https://www.jae.com/en/connectors/series/detail/id=64263#Downloads",
    imageUrl: "/products/jae/jae-jl02.jpg",
    features: [
      "MIL-C-5015 compatible design",
      "Threaded coupling — vibration resistant",
      "Multiple shell sizes and contact configurations",
      "Rated IP67 when mated",
      "Suitable for military and aviation environments",
    ],
    specs: [
      { label: "Standard", value: "MIL-C-5015 compatible" },
      { label: "IP rating", value: "IP67 (mated)" },
      { label: "Shell sizes", value: "10 – 28" },
    ],
  },
  {
    id: "jae-jl10",
    name: "JL10 Series",
    description:
      "IP67-rated waterproof circular connector with a one-touch push-pull locking mechanism, TÜV and UL certified. Designed for outdoor industrial equipment, marine environments, and factory automation where quick connect/disconnect cycles are needed.",
    category: "circular",
    subcategory: "Circular Connectors",
    industries: ["Industrial", "Defense", "Medical", "Aerospace"],
    supplierUrl: "https://products.jae.com/gl/en/connectors/category/circular/jl10/",
    datasheetUrl: null,
    imageUrl: "/products/jae/jae-jl10.jpg",
    features: [
      "IP67 waterproof when mated",
      "One-touch push-pull locking — no tools required",
      "TÜV and UL certified",
      "Compact plastic or metal shell",
      "2–8 contacts, multiple current ratings",
    ],
    specs: [
      { label: "IP rating", value: "IP67 (mated)" },
      { label: "Locking", value: "Push-pull" },
      { label: "Certifications", value: "TÜV, UL" },
    ],
  },

  // ─── MEMORY ──────────────────────────────────────────────────────────────
  {
    id: "jae-st1",
    name: "ST1 Series",
    description:
      "Hinge-type microSD card connector with a slim profile for smartphones, cameras, and embedded computing modules. The hinge mechanism provides secure card retention while enabling single-hand card insertion and removal.",
    category: "memory",
    subcategory: "Memory Card Connectors",
    industries: ["Consumer Electronics", "Industrial", "Storage & Computing"],
    supplierUrl: "https://products.jae.com/gl/en/connectors/category/memory-card/st1/",
    datasheetUrl: null,
    imageUrl: "/products/jae/jae-st1.jpg",
    features: [
      "microSD hinge-type retention",
      "Ultra-slim PCB footprint",
      "Gold-plated contacts for reliability",
      "Designed for high cycle life",
      "Compatible with microSD / microSDHC / microSDXC",
    ],
    specs: [
      { label: "Type", value: "microSD hinge" },
      { label: "Contacts", value: "8" },
      { label: "Voltage", value: "3.3 V" },
    ],
  },
  {
    id: "jae-st12",
    name: "ST12 Series",
    description:
      "Push-push microSD card connector with self-ejection for consumer electronics and embedded systems. The push-push mechanism allows card removal without tools, while the spring-retention holds the card securely during operation.",
    category: "memory",
    subcategory: "Memory Card Connectors",
    industries: ["Consumer Electronics", "Industrial", "Telecommunications"],
    supplierUrl: "https://products.jae.com/gl/en/connectors/category/memory-card/st12/",
    datasheetUrl: null,
    imageUrl: "/products/jae/jae-st12.jpg",
    features: [
      "Push-push self-eject mechanism",
      "No tools required for insertion or removal",
      "Compact SMT footprint",
      "Compatible with microSD / microSDHC / microSDXC",
      "Suitable for automated board assembly",
    ],
    specs: [
      { label: "Type", value: "microSD push-push" },
      { label: "Contacts", value: "8" },
      { label: "Voltage", value: "3.3 V" },
    ],
  },
  {
    id: "jae-sm3",
    name: "SM3 Series",
    description:
      "M.2 (NGFF) edge card connector for SSDs, Wi-Fi modules, and cellular modules in laptops, embedded PCs, and IoT gateways. Supports M.2 key types M, B+M, E, and A+E for maximum compatibility across storage and wireless applications.",
    category: "memory",
    subcategory: "Memory Module Connectors",
    industries: ["Storage & Computing", "Telecommunications", "Industrial"],
    supplierUrl: "https://products.jae.com/gl/en/connectors/category/memory-module/sm3/",
    datasheetUrl: null,
    imageUrl: "/products/jae/jae-sm3.jpg",
    features: [
      "M.2 / NGFF form factor support",
      "Key types: M, B+M, E, A+E",
      "High-speed signal integrity up to PCIe Gen 4",
      "67 or 75 contact positions",
      "SMT, suitable for automated soldering",
    ],
    specs: [
      { label: "Standard", value: "M.2 / NGFF" },
      { label: "Key types", value: "M, B+M, E, A+E" },
      { label: "Max speed", value: "PCIe Gen 4" },
    ],
  },

  // ─── HIGH-SPEED ───────────────────────────────────────────────────────────
  {
    id: "jae-fi-e",
    name: "FI-E Series",
    description:
      "LVDS display connector for laptop panels, monitors, and embedded displays. Available in 31, 41, and 51 positions at a 0.5 mm pitch, supporting high-definition video signals in compact consumer and industrial display assemblies.",
    category: "high-speed",
    subcategory: "High-Speed Connectors",
    industries: ["Consumer Electronics", "Industrial", "Medical"],
    supplierUrl: "https://products.jae.com/gl/en/connectors/category/high-speed/fi-e/",
    datasheetUrl: null,
    features: [
      "0.5 mm pitch LVDS FPC connector",
      "31, 41, 51 positions for display signals",
      "Supports LVDS and eDP signals",
      "Low crosstalk design for high-definition video",
      "Industry-standard footprint for display panels",
    ],
    specs: [
      { label: "Pitch", value: "0.5 mm" },
      { label: "Positions", value: "31 / 41 / 51" },
      { label: "Signal type", value: "LVDS / eDP" },
    ],
  },
  {
    id: "jae-mx49a",
    name: "MX49A / MX49C Series",
    description:
      "Automotive-grade LVDS and GVIF (Gigabit Video Interface) connector for in-vehicle infotainment, head-up displays, and digital instrument clusters. Meets AEC-Q200 standards with full vibration and temperature compliance.",
    category: "high-speed",
    subcategory: "High-Speed Connectors",
    industries: ["Automotive", "Aerospace"],
    supplierUrl: "https://www.jae.com/en/connectors/series/detail/id=64366",
    datasheetUrl: "https://www.jae.com/en/connectors/series/detail/id=64366#Downloads",
    imageUrl: "/products/jae/jae-mx49a.jpg",
    features: [
      "LVDS and GVIF high-speed video signal support",
      "AEC-Q200 automotive grade",
      "Qualified for −40 °C to +125 °C operation",
      "Vibration and shock resistant",
      "Used in IVI, HUD, and instrument cluster applications",
    ],
    specs: [
      { label: "Signal type", value: "LVDS / GVIF" },
      { label: "Standard", value: "AEC-Q200" },
      { label: "Temperature", value: "−40 °C to +125 °C" },
    ],
  },

  // ─── AUTOMOTIVE ───────────────────────────────────────────────────────────
  {
    id: "jae-mx80",
    name: "MX80 Series",
    description:
      "0.64 mm terminal pitch automotive wire-to-board connector rated at 10 A, designed for ECUs, body electronics, and powertrain control modules. Meets USCAR-2 and JASO D616 requirements for automotive vibration and temperature cycling.",
    category: "automotive",
    subcategory: "Automotive Wire-to-Board",
    industries: ["Automotive", "Industrial"],
    supplierUrl: "https://products.jae.com/gl/en/connectors/category/automotive/mx80/",
    datasheetUrl: null,
    imageUrl: "/products/jae/jae-mx80.jpg",
    features: [
      "0.64 mm terminal pitch, 1–20 circuits",
      "10 A per circuit current rating",
      "USCAR-2 and JASO D616 compliant",
      "Sealed and unsealed versions available",
      "Designed for ECU and body electronics",
    ],
    specs: [
      { label: "Pitch", value: "0.64 mm" },
      { label: "Current rating", value: "10 A per circuit" },
      { label: "Standards", value: "USCAR-2, JASO D616" },
    ],
  },
];
