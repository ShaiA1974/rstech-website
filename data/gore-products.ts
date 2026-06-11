export type GorePartNumberEntry = {
  /** Optional model / series label, e.g. "PolyVent XS" or "VE7 Series" */
  model?: string;
  /** The orderable part number, e.g. "PMF100318" */
  number: string;
  /** Color, size, or other variant, e.g. "black", "Ø7.6 mm" */
  variant?: string;
};

export type GoreProduct = {
  id: string;
  name: string;
  description: string;
  category: "cables" | "sealants" | "vents";
  subcategory: string;
  industries: string[];
  goreUrl: string;
  catalogUrl: string | null;
  features?: string[];
  imageUrl?: string;
  /** Orderable part numbers listed on gore.com, grouped by model/series */
  partNumbers?: GorePartNumberEntry[];
};

export const GORE_INDUSTRIES = [
  "All",
  "Aerospace & Defense",
  "Automotive",
  "Electronics",
  "Industrial",
  "Medical",
  "Semiconductor",
  "Space",
  "Telecommunications",
  "Test & Measurement",
] as const;

export type GoreIndustry = (typeof GORE_INDUSTRIES)[number];

export const GORE_PRODUCTS: GoreProduct[] = [
  // ─── CABLES & ASSEMBLIES › DATA CABLES ───────────────────────────────────
  {
    id: "data-can-bus",
    name: "CAN Bus Cables",
    description:
      "Robust CAN bus cables engineered for reliable in-vehicle networking and industrial automation. Lightweight with excellent EMI shielding and mechanical durability.",
    category: "cables",
    subcategory: "Data Cables",
    industries: ["Automotive", "Industrial", "Aerospace & Defense"],
    goreUrl: "https://www.gore.com/products/can-bus-cables-aerospace-defense",
    catalogUrl: null,
    imageUrl: "/products/gore/data-can-bus.jpg",
  },
  {
    id: "data-coaxial",
    name: "Coaxial Cables",
    description:
      "High-performance coaxial cables with stable electrical characteristics over wide temperature ranges, ideal for signal transmission in demanding environments.",
    category: "cables",
    subcategory: "Data Cables",
    industries: ["Aerospace & Defense", "Electronics", "Telecommunications", "Test & Measurement"],
    goreUrl: "https://www.gore.com/products/coaxial-cables-aerospace-defense-air-land",
    catalogUrl: null,
    imageUrl: "/products/gore/data-coaxial.jpg",
  },
  {
    id: "data-dvi",
    name: "DVI Cables",
    description:
      "Ultra-flexible DVI cables that maintain signal integrity at lengths where conventional cables fail, designed for high-resolution video in medical imaging and simulation.",
    category: "cables",
    subcategory: "Data Cables",
    industries: ["Medical", "Electronics", "Industrial"],
    goreUrl: "https://www.gore.com/products/dvi-cables-aerospace-defense-air-land",
    catalogUrl: null,
    imageUrl: "/products/gore/data-dvi.jpg",
  },
  {
    id: "data-ethernet",
    name: "Ethernet Cables",
    description:
      "High-speed Ethernet cables rated for extreme environments. Support 10GbE+ with superior EMI shielding, fine-wire construction, and exceptional flex life.",
    category: "cables",
    subcategory: "Data Cables",
    industries: ["Industrial", "Medical", "Semiconductor", "Electronics", "Aerospace & Defense"],
    goreUrl: "https://www.gore.com/products/ethernet-cables-aerospace-defense-air-land",
    catalogUrl: null,
    imageUrl: "/products/gore/data-ethernet.jpg",
  },
  {
    id: "data-fiber-optic",
    name: "Fiber Optic Cables",
    description:
      "Lightweight, ruggedized fiber optic cables with ePTFE buffer tubes. Immune to EMI and optimized for harsh environments where conventional fiber fails.",
    category: "cables",
    subcategory: "Data Cables",
    industries: ["Aerospace & Defense", "Telecommunications", "Medical", "Industrial"],
    goreUrl: "https://www.gore.com/products/fiber-optic-cables-aerospace-defense-air-land",
    catalogUrl: null,
    imageUrl: "/products/gore/data-fiber-optic.jpg",
  },
  {
    id: "data-fibre-channel",
    name: "Fibre Channel Cables",
    description:
      "High-bandwidth Fibre Channel cables for storage area networks and high-speed data transfer applications requiring extreme reliability and low latency.",
    category: "cables",
    subcategory: "Data Cables",
    industries: ["Electronics", "Industrial", "Semiconductor"],
    goreUrl: "https://www.gore.com/products/fibre-channel-cables-aerospace-defense-air-land",
    catalogUrl: null,
    imageUrl: "/products/gore/data-fibre-channel.jpg",
  },
  {
    id: "data-firewire",
    name: "FireWire Cables",
    description:
      "High-speed FireWire (IEEE 1394) cables offering exceptional flex performance and signal integrity for industrial imaging and data acquisition systems.",
    category: "cables",
    subcategory: "Data Cables",
    industries: ["Industrial", "Medical", "Electronics"],
    goreUrl: "https://www.gore.com/products/firewire-cables-aerospace-defense-air-land",
    catalogUrl: null,
    imageUrl: "/products/gore/data-firewire.jpg",
  },
  {
    id: "data-flat",
    name: "Flat Cables",
    description:
      "Fine-pitch flat cables engineered for tight-space routing. Extremely lightweight with reliable flex life for applications where space and weight are critical.",
    category: "cables",
    subcategory: "Data Cables",
    industries: ["Medical", "Industrial", "Aerospace & Defense", "Electronics"],
    goreUrl: "https://www.gore.com/products/high-speed-flat-data-cables-semiconductor",
    catalogUrl: null,
    imageUrl: "/products/gore/data-flat.jpg",
  },
  {
    id: "data-hdmi",
    name: "HDMI Cables",
    description:
      "Ultra-thin, flexible HDMI cables that deliver uncompromised 4K video over distances where standard cables suffer signal degradation.",
    category: "cables",
    subcategory: "Data Cables",
    industries: ["Electronics", "Medical", "Industrial"],
    goreUrl: "https://www.gore.com/products/hdmi-cables-aerospace-defense-air-land",
    catalogUrl: null,
    imageUrl: "/products/gore/data-hdmi.jpg",
  },
  {
    id: "data-quad",
    name: "Quad Cables",
    description:
      "High-density quad cables combining multiple data channels in a compact assembly for complex signal routing in space-constrained applications.",
    category: "cables",
    subcategory: "Data Cables",
    industries: ["Aerospace & Defense", "Industrial", "Electronics"],
    goreUrl: "https://www.gore.com/products/quad-cables-aerospace-defense-air-land",
    catalogUrl: null,
    imageUrl: "/products/gore/data-quad.jpg",
  },
  {
    id: "data-stp",
    name: "Shielded Twisted Pair Cables",
    description:
      "High-performance shielded twisted pair cables offering excellent noise immunity for critical data transmission in electrically noisy industrial and medical environments.",
    category: "cables",
    subcategory: "Data Cables",
    industries: ["Industrial", "Medical", "Aerospace & Defense", "Electronics"],
    goreUrl: "https://www.gore.com/products/shielded-twisted-pair-cables-aerospace-defense-air-land",
    catalogUrl: null,
    imageUrl: "/products/gore/data-stp.jpg",
  },
  {
    id: "data-usb",
    name: "USB Cables",
    description:
      "Slim, flexible USB cables with superior flex life and signal integrity for use in medical devices, industrial equipment, and portable electronics.",
    category: "cables",
    subcategory: "Data Cables",
    industries: ["Medical", "Industrial", "Electronics"],
    goreUrl: "https://www.gore.com/products/usb-cables-aerospace-defense-air-land",
    catalogUrl: null,
    imageUrl: "/products/gore/data-usb.jpg",
  },
  {
    id: "data-ultra-clean",
    name: "Ultra-Clean Round Cables",
    description:
      "Specially engineered for contamination-sensitive semiconductor and medical environments. Outgasses minimally and meets strict cleanliness standards.",
    category: "cables",
    subcategory: "Data Cables",
    industries: ["Semiconductor", "Medical"],
    goreUrl: "https://www.gore.com/products/ultra-clean-round-cables",
    catalogUrl: null,
    imageUrl: "/products/gore/data-ultra-clean.jpg",
  },

  // ─── CABLES & ASSEMBLIES › HIGH FLEX & AUTOMATION ────────────────────────
  {
    id: "hf-flat",
    name: "High Flex Flat Cables",
    description:
      "Designed for millions of flex cycles in robotic and automation applications. Maintains electrical performance under continuous, high-speed dynamic movement.",
    category: "cables",
    subcategory: "High Flex & Automation",
    industries: ["Industrial", "Semiconductor", "Medical"],
    goreUrl: "https://www.gore.com/products/high-flex-flat-cables-semiconductor-industrial-automation",
    catalogUrl: null,
    imageUrl: "/products/gore/hf-flat.jpg",
  },
  {
    id: "hf-hybrid-round",
    name: "Hybrid Round Cables",
    description:
      "Multi-function hybrid cables combining power, signal, and data in a single lightweight assembly for collaborative robots and automated guided vehicles.",
    category: "cables",
    subcategory: "High Flex & Automation",
    industries: ["Industrial", "Aerospace & Defense"],
    goreUrl: "https://www.gore.com/products/hybrid-round-cables-harsh-environment",
    catalogUrl: null,
    imageUrl: "/products/gore/hf-hybrid-round.png",
  },
  {
    id: "hf-insulated-wires",
    name: "Insulated Wires",
    description:
      "Gore ePTFE-insulated wires offering outstanding resistance to harsh chemicals, extreme temperatures, and abrasion for demanding automation environments.",
    category: "cables",
    subcategory: "High Flex & Automation",
    industries: ["Industrial", "Aerospace & Defense", "Electronics"],
    goreUrl: "https://www.gore.com/products/insulated-wires-oil-downhole-equipment",
    catalogUrl: null,
    imageUrl: "/products/gore/hf-insulated-wires.jpg",
  },
  {
    id: "hf-trackless",
    name: "Trackless Cables",
    description:
      "Trackless cables engineered for linear motion stages and gantry systems, eliminating the need for cable carriers while maintaining exceptional flex durability.",
    category: "cables",
    subcategory: "High Flex & Automation",
    industries: ["Semiconductor", "Industrial"],
    goreUrl: "https://www.gore.com/products/trackless-high-flex-cables-semiconductor-production-equipment",
    catalogUrl: null,
    imageUrl: "/products/gore/hf-trackless.jpg",
  },

  // ─── CABLES & ASSEMBLIES › MICROWAVE / RF ASSEMBLIES ─────────────────────
  {
    id: "rf-general",
    name: "General Purpose Microwave/RF Assemblies",
    description:
      "Phase-stable RF cable assemblies for bench-top and field use. Covering DC to 70 GHz with low insertion loss, low VSWR, and stable phase across temperature.",
    category: "cables",
    subcategory: "Microwave/RF Assemblies",
    industries: ["Test & Measurement", "Aerospace & Defense", "Semiconductor", "Telecommunications"],
    goreUrl: "https://www.gore.com/products/microwave-rf-assemblies-general-purpose",
    catalogUrl: null,
    features: ["DC to 70 GHz", "Low phase variation", "Multiple connector options"],
    imageUrl: "/products/gore/rf-general.jpg",
  },
  {
    id: "rf-airframe",
    name: "Ruggedized Airframe RF Assemblies",
    description:
      "Ruggedized airframe RF assemblies qualified for the extreme vibration, temperature, and humidity conditions inside military and commercial aircraft.",
    category: "cables",
    subcategory: "Microwave/RF Assemblies",
    industries: ["Aerospace & Defense"],
    goreUrl: "https://www.gore.com/products/ruggedized-airframe-microwave-rf-assemblies",
    catalogUrl: null,
    features: ["MIL-SPEC rated", "Extreme temperature range", "Vibration & shock resistant"],
    imageUrl: "/products/gore/rf-airframe.jpg",
  },
  {
    id: "rf-phaseflex",
    name: "PHASEFLEX® Ruggedized Test Assemblies",
    description:
      "The industry-leading PHASEFLEX® test cable assemblies deliver exceptional phase stability and repeatability for the most demanding microwave test environments.",
    category: "cables",
    subcategory: "Microwave/RF Assemblies",
    industries: ["Test & Measurement", "Aerospace & Defense", "Semiconductor"],
    goreUrl: "https://www.gore.com/products/ruggedized-test-microwave-rf-assemblies",
    catalogUrl: null,
    features: ["Best-in-class phase stability", "DC to 110 GHz", "Rated for millions of flex cycles"],
    imageUrl: "/products/gore/rf-phaseflex.jpg",
  },
  {
    id: "rf-vna",
    name: "VNA Microwave/RF Test Assemblies",
    description:
      "Precision VNA test cables optimized for vector network analyzer measurements, providing stable phase and low insertion loss across the full measurement frequency range.",
    category: "cables",
    subcategory: "Microwave/RF Assemblies",
    industries: ["Test & Measurement", "Semiconductor"],
    goreUrl: "https://www.gore.com/products/vna-microwave-rf-assemblies",
    catalogUrl: null,
    imageUrl: "/products/gore/rf-vna.jpg",
  },
  {
    id: "rf-vapor-sealed",
    name: "Vapor Sealed RF Assemblies",
    description:
      "Hermetically sealed RF assemblies with ePTFE vapor barriers preventing moisture ingress, critical for airborne radar, EW systems, and outdoor infrastructure.",
    category: "cables",
    subcategory: "Microwave/RF Assemblies",
    industries: ["Aerospace & Defense", "Telecommunications"],
    goreUrl: "https://www.gore.com/products/vapor-sealed-microwave-rf-assemblies",
    catalogUrl: null,
    features: ["Hermetic moisture seal", "Corrosion resistant", "Long service life outdoors"],
    imageUrl: "/products/gore/rf-vapor-sealed.jpg",
  },

  // ─── CABLES & ASSEMBLIES › POWER ENABLERS ────────────────────────────────
  {
    id: "pwr-capacitor-films",
    name: "Capacitor Films",
    description:
      "Gore ePTFE capacitor films enabling miniaturized, high-performance capacitors for power electronics, offering superior dielectric properties and thermal stability.",
    category: "cables",
    subcategory: "Power Enablers",
    industries: ["Electronics", "Aerospace & Defense", "Industrial"],
    goreUrl: "https://www.gore.com/products/high-temperature-capacitor-films",
    catalogUrl: null,
    imageUrl: "/products/gore/pwr-capacitor-films.jpg",
  },
  {
    id: "pwr-aerospace-wire",
    name: "High Performance Aerospace Wire",
    description:
      "FAR 25.1359-compliant aerospace wiring with lightweight ePTFE insulation. Passes flame, smoke, and fluid resistance requirements for civil and military aircraft.",
    category: "cables",
    subcategory: "Power Enablers",
    industries: ["Aerospace & Defense"],
    goreUrl: "https://www.gore.com/products/high-performance-power-wire-aerospace-defense",
    catalogUrl: null,
    features: ["FAR 25.1359 compliant", "Weight savings vs. traditional wire", "Fluid & flame resistant"],
    imageUrl: "/products/gore/pwr-aerospace-wire.jpg",
  },
  {
    id: "pwr-magnet-wire",
    name: "Magnet Wire",
    description:
      "Gore-insulated magnet wire delivering superior thermal performance and compactness for motors, transformers, and solenoids operating in extreme environments.",
    category: "cables",
    subcategory: "Power Enablers",
    industries: ["Industrial", "Aerospace & Defense", "Automotive"],
    goreUrl: "https://www.gore.com/products/magnet-wire-downhole-oil-gas-motors",
    catalogUrl: null,
    imageUrl: "/products/gore/pwr-magnet-wire.jpg",
  },
  {
    id: "pwr-feeder",
    name: "Power Feeder Cables",
    description:
      "High-current power feeder cables engineered for weight-critical aerospace platforms and rugged industrial machinery requiring compact, reliable power delivery.",
    category: "cables",
    subcategory: "Power Enablers",
    industries: ["Aerospace & Defense", "Industrial"],
    goreUrl: "https://www.gore.com/products/power-feeder-cables-aerospace-defense",
    catalogUrl: null,
    imageUrl: "/products/gore/pwr-feeder.jpg",
  },

  // ─── CABLES & ASSEMBLIES › SECONDARY INSULATION ──────────────────────────
  {
    id: "ins-abrasion",
    name: "Abrasion Resistant Jackets",
    description:
      "Gore abrasion-resistant ePTFE jackets extend cable service life in environments with continuous mechanical wear, sharp edges, and dynamic cable motion.",
    category: "cables",
    subcategory: "Secondary Insulation",
    industries: ["Industrial", "Aerospace & Defense", "Automotive"],
    goreUrl: "https://www.gore.com/products/abrasion-resistant-cable-jackets-aerospace-defense",
    catalogUrl: null,
    imageUrl: "/products/gore/ins-abrasion.jpg",
  },
  {
    id: "ins-protection-systems",
    name: "Cable Protection Systems",
    description:
      "Comprehensive ePTFE-based cable protection solutions guarding against cut-through, chemicals, and extreme temperatures across the full cable length.",
    category: "cables",
    subcategory: "Secondary Insulation",
    industries: ["Industrial", "Aerospace & Defense", "Electronics"],
    goreUrl: "https://www.gore.com/products/cable-protection-systems",
    catalogUrl: null,
    imageUrl: "/products/gore/ins-protection-systems.jpg",
  },
  {
    id: "ins-braids",
    name: "Protective Braids",
    description:
      "Gore ePTFE braids provide lightweight EMI shielding and mechanical protection while maintaining the cable assembly's flexibility and routing capability.",
    category: "cables",
    subcategory: "Secondary Insulation",
    industries: ["Aerospace & Defense", "Industrial", "Medical"],
    goreUrl: "https://www.gore.com/products/space-cable-protective-braids",
    catalogUrl: null,
    imageUrl: "/products/gore/ins-braids.jpg",
  },

  // ─── CABLES & ASSEMBLIES › SPACE CABLES ──────────────────────────────────
  {
    id: "space-asw",
    name: "ASW Space Wire Cables",
    description:
      "ASW-series space-rated cables with radiation-resistant ePTFE insulation, engineered for the extreme thermal cycling and outgassing requirements of space missions.",
    category: "cables",
    subcategory: "Space Cables",
    industries: ["Space", "Aerospace & Defense"],
    goreUrl: "https://www.gore.com/products/space-cables-type-asw",
    catalogUrl: null,
    features: ["Radiation resistant", "Low outgassing (ECSS compliant)", "Extreme temperature range"],
    imageUrl: "/products/gore/space-asw.jpg",
  },
  {
    id: "space-csc",
    name: "CSC Space Cables",
    description:
      "CSC-series lightweight coaxial space cables with excellent phase stability and radiation tolerance for satellite RF signal distribution systems.",
    category: "cables",
    subcategory: "Space Cables",
    industries: ["Space", "Aerospace & Defense"],
    goreUrl: "https://www.gore.com/products/space-cables-type-csc",
    catalogUrl: null,
    imageUrl: "/products/gore/space-csc.jpg",
  },
  {
    id: "space-cswl",
    name: "CSWL Space Cables",
    description:
      "CSWL-series multi-conductor space cables combining signal and power in a single lightweight assembly for complex spacecraft harness simplification.",
    category: "cables",
    subcategory: "Space Cables",
    industries: ["Space", "Aerospace & Defense"],
    goreUrl: "https://www.gore.com/products/space-cables-type-cswl",
    catalogUrl: null,
    imageUrl: "/products/gore/space-cswl.jpg",
  },
  {
    id: "space-lew",
    name: "LEW Space Cables",
    description:
      "LEW-series lightweight electrical wires with radiation-hardened ePTFE insulation, meeting NASA and ESA outgassing standards for satellite applications.",
    category: "cables",
    subcategory: "Space Cables",
    industries: ["Space", "Aerospace & Defense"],
    goreUrl: "https://www.gore.com/products/space-cables-type-lew",
    catalogUrl: null,
    imageUrl: "/products/gore/space-lew.jpg",
  },
  {
    id: "space-spm",
    name: "SPM Space Cables",
    description:
      "SPM-series space power and multipurpose cables delivering reliable electrical performance across the extreme vacuum and temperature environment of space.",
    category: "cables",
    subcategory: "Space Cables",
    industries: ["Space", "Aerospace & Defense"],
    goreUrl: "https://www.gore.com/products/space-cables-type-spm",
    catalogUrl: null,
    imageUrl: "/products/gore/space-spm.jpg",
  },
  {
    id: "space-spaceflight",
    name: "Spaceflight Cables",
    description:
      "Gore's flagship spaceflight cable line, qualified for crewed and uncrewed missions. Heritage on ISS, launch vehicles, and deep-space probes.",
    category: "cables",
    subcategory: "Space Cables",
    industries: ["Space", "Aerospace & Defense"],
    goreUrl: "https://www.gore.com/products/space-cables-assemblies",
    catalogUrl: null,
    features: ["Flight-heritage qualified", "Ultra-low outgassing", "Gamma & particle radiation resistant"],
    imageUrl: "/products/gore/space-spaceflight.jpg",
  },
  {
    id: "space-spacewire",
    name: "SpaceWire Cables",
    description:
      "ESA SpaceWire standard-compliant cables for high-speed on-board data handling networks in spacecraft, enabling reliable 200 Mbit/s communication.",
    category: "cables",
    subcategory: "Space Cables",
    industries: ["Space", "Aerospace & Defense"],
    goreUrl: "https://www.gore.com/products/spacewire",
    catalogUrl: null,
    features: ["SpaceWire (ECSS-E-50-12) compliant", "200 Mbit/s", "EMI shielded"],
    imageUrl: "/products/gore/space-spacewire.jpg",
  },

  // ─── CABLES & ASSEMBLIES › SPECIALTY ─────────────────────────────────────
  {
    id: "spec-drone",
    name: "Drone Cables",
    description:
      "Lightweight, ultra-flexible cables purpose-built for UAVs and drones. Minimize aircraft weight while withstanding vibration, UV, and exposure to the elements.",
    category: "cables",
    subcategory: "Specialty Cables",
    industries: ["Aerospace & Defense", "Industrial"],
    goreUrl: "https://www.gore.com/products/tethered-drone-cables-commercial-defense",
    catalogUrl: null,
    features: ["Weight-optimized construction", "High flex life", "UV and weather resistant"],
    imageUrl: "/products/gore/spec-drone.jpg",
  },
  {
    id: "spec-mil1760",
    name: "MIL-STD-1760 Cables",
    description:
      "MIL-STD-1760-compliant cables for aircraft-to-store electrical interfaces, providing data and power connections for smart weapons and external stores.",
    category: "cables",
    subcategory: "Specialty Cables",
    industries: ["Aerospace & Defense"],
    goreUrl: "https://www.gore.com/products/mil-std-1760-cables-umbilical-assemblies-defense-aircraft",
    catalogUrl: null,
    features: ["MIL-STD-1760 compliant", "Qualified for external stores", "Ruggedized connectors"],
    imageUrl: "/products/gore/spec-mil1760.jpg",
  },

  // ─── GASKETS & SEALANTS › SKYFLEX® ───────────────────────────────────────
  {
    id: "seal-skyflex",
    name: "GORE® SKYFLEX® Aerospace Materials",
    description:
      "Non-curing, chemically inert ePTFE sealant tapes and gaskets for aircraft access panels, fairings, engine cowlings, and fuselage joints. Reusable, reducing maintenance time and cost. Approved by Airbus, Boeing, Bombardier, COMAC, and Embraer.",
    category: "sealants",
    subcategory: "Aircraft Sealant",
    industries: ["Aerospace & Defense"],
    goreUrl: "https://www.gore.com/products/skyflex-aircraft-sealants-tapes-gaskets-aerospace-defense",
    catalogUrl: null,
    features: [
      "Non-curing — no mixing or cure time",
      "Reusable — reduce maintenance cost",
      "OEM approved: Airbus, Boeing, Bombardier, COMAC, Embraer",
      "Series: 100, 110, 200, 500, 520, 700, 720, 730, 1600, PX1",
      "Temperature range: −65°C to +260°C",
    ],
    imageUrl: "/products/gore/seal-skyflex.jpg",
  },

  // ─── VENTS › AUTOMOTIVE ───────────────────────────────────────────────────
  {
    id: "vent-auto-acoustic",
    name: "Automotive Acoustic Vents",
    description:
      "Gore acoustic ePTFE vents for automotive speakers and microphone assemblies. Balance pressure while maintaining acoustic performance and preventing water ingress.",
    category: "vents",
    subcategory: "Automotive Vents",
    industries: ["Automotive"],
    goreUrl: "https://www.gore.com/products/automotive-vents-acoustic",
    catalogUrl: null,
    imageUrl: "/products/gore/vent-auto-acoustic.jpg",
    partNumbers: [
      { model: "AVS 700", number: "AAV10307" },
      { model: "AVS 701", number: "AAV10307-R" },
    ],
  },
  {
    id: "vent-auto-battery",
    name: "Automotive Battery Vents",
    description:
      "ePTFE membrane vents for EV battery packs, safely venting pressure from thermal events while blocking liquid water and contaminants from entering the housing.",
    category: "vents",
    subcategory: "Automotive Vents",
    industries: ["Automotive"],
    goreUrl: "https://www.gore.com/products/vents-automotive-battery-components",
    catalogUrl: null,
    features: ["IP6K9K rated", "Flame retardant versions available", "High-volume gas release capability"],
    imageUrl: "/products/gore/vent-auto-battery.jpg",
    partNumbers: [
      { model: "PolyVent Standard",    number: "AMF300114" },
      { model: "PolyVent High Airflow", number: "AMF300070" },
      { model: "PolyVent Compact",     number: "AMF300200" },
      { model: "Catalytic Device",     number: "NVA9064"   },
    ],
  },
  {
    id: "vent-auto-electronics",
    name: "Automotive Electronics Vents",
    description:
      "Pressure equalization vents for ECUs, control modules, and sensors. Prevent condensation and seal failure caused by thermal pressure cycling inside automotive housings.",
    category: "vents",
    subcategory: "Automotive Vents",
    industries: ["Automotive"],
    goreUrl: "https://www.gore.com/products/vents-automotive-electronics-protection",
    catalogUrl: null,
    features: ["IP69K compliant", "−40°C to +125°C", "Multiple mounting styles"],
    imageUrl: "/products/gore/vent-auto-electronics.jpg",
    partNumbers: [
      // Screw-In
      { model: "PolyVent Standard (Screw-In)",    number: "AMF301190" },
      { model: "PolyVent High Airflow (Screw-In)", number: "AMF301191" },
      // Snap-Fit
      { model: "PolyVent Standard (Snap-Fit)",       number: "AMF300114" },
      { model: "PolyVent High Temperature (Snap-Fit)", number: "AMF300167" },
      { model: "PolyVent High Airflow (Snap-Fit)",   number: "AMF300070" },
      { model: "PolyVent Compact (Snap-Fit)",        number: "AMF300200" },
      // Adhesive — High Durability
      { model: "Adhesive High Durability", number: "AVE230206" },
      { model: "Adhesive High Durability", number: "AVE230408" },
      { model: "Adhesive High Durability", number: "AVE230610" },
      { model: "Adhesive High Durability", number: "AVE230814" },
      { model: "Adhesive High Durability", number: "AVE230919" },
      // Adhesive — High Airflow
      { model: "Adhesive High Airflow", number: "AVE930307" },
      { model: "Adhesive High Airflow", number: "AVE930610" },
      // Weldable — High Airflow
      { model: "Weldable High Airflow", number: "AMP300248-00057" },
      { model: "Weldable High Airflow", number: "AMP300249-00080" },
      { model: "Weldable High Airflow", number: "AMP300250-00100" },
      { model: "Weldable High Airflow", number: "AMP300251-00117" },
      { model: "Weldable High Airflow", number: "AMP300252-00140" },
      // Weldable — High Temperature
      { model: "Weldable High Temperature", number: "AMP200024-00060" },
      { model: "Weldable High Temperature", number: "AMP200082-00080" },
      { model: "Weldable High Temperature", number: "AMP200069-00100" },
      { model: "Weldable High Temperature", number: "AMP200055-00120" },
      { model: "Weldable High Temperature", number: "AMP200023-00140" },
    ],
  },
  {
    id: "vent-auto-lighting",
    name: "Exterior Lighting Vents",
    description:
      "Waterproof pressure equalization vents for automotive headlamps, tail lamps, and LED assemblies. Prevent fogging and extend lamp housing lifetime.",
    category: "vents",
    subcategory: "Automotive Vents",
    industries: ["Automotive"],
    goreUrl: "https://www.gore.com/products/automotive-vents-exterior-lighting-moisture-protection",
    catalogUrl: null,
    features: ["IP69K rated", "Prevents fogging", "UV stable membrane"],
    imageUrl: "/products/gore/vent-auto-lighting.jpg",
    partNumbers: [
      // Headlamps
      { model: "AVS 120 (Headlamp)",  number: "VE2122" },
      { model: "AVS 120 (Headlamp)",  number: "VE2123" },
      { model: "AVS 9 (Headlamp)",    number: "VE0020GMC" },
      { model: "AVS 9 (Headlamp)",    number: "VE2068" },
      { model: "AVS 113 (Headlamp)",  number: "VE2113" },
      { model: "AVS 113 (Headlamp)",  number: "VE2114" },
      { model: "AVS 100 (Headlamp)",  number: "VE2084" },
      { model: "AVS 100 (Headlamp)",  number: "VE2086" },
      // Rear Lamps
      { model: "AVS 2 (Rear Lamp)",   number: "VE0001VAP" },
      { model: "AVS 2 (Rear Lamp)",   number: "VE2051" },
      { model: "AVS 5 (Rear Lamp)",   number: "VE2004" },
      { model: "AVS 5 (Rear Lamp)",   number: "VE2016" },
      { model: "AVS 600 (Rear Lamp)", number: "VE2100" },
      { model: "AVS 610 (Rear Lamp)", number: "VE2110" },
      { model: "AVS 601 (Rear Lamp)", number: "VE2101" },
      { model: "AVS 611 (Rear Lamp)", number: "VE2111" },
      { model: "AVS 602 (Rear Lamp)", number: "VE2102" },
      { model: "AVS 612 (Rear Lamp)", number: "VE2112" },
      // Fog / Accessory Lamps
      { model: "AVS 118 (Fog Lamp)",  number: "VE2117" },
      { model: "AVS 118 (Fog Lamp)",  number: "VE2118" },
      { model: "AVS 119 (Fog Lamp)",  number: "VE2119" },
      { model: "AVS 119 (Fog Lamp)",  number: "VE2120" },
      // Manual / Automated
      { model: "AVS 22",              number: "VE2094", variant: "manual" },
      { model: "AVS 22",              number: "VE2095", variant: "automated" },
      { model: "AVS 23",              number: "VE2096", variant: "manual" },
      { model: "AVS 23",              number: "VE2097", variant: "automated" },
    ],
  },
  {
    id: "vent-auto-powertrain",
    name: "Automotive Powertrain Vents",
    description:
      "High-temperature ePTFE vents for transmissions, axles, and powertrain housings. Vent pressure differentials without allowing fluid or contaminant intrusion.",
    category: "vents",
    subcategory: "Automotive Vents",
    industries: ["Automotive"],
    goreUrl: "https://www.gore.com/products/automotive-vents-powertrain-protection-performance",
    catalogUrl: null,
    features: ["Up to +150°C continuous", "Oil-resistant membrane", "Snap-in or weld-mount options"],
    imageUrl: "/products/gore/vent-auto-powertrain.jpg",
    partNumbers: [
      { model: "Direct-Fit Vent",  number: "VE2148" },
      { model: "Tube-Mount Vent",  number: "VE2048" },
    ],
  },

  // ─── VENTS › OUTDOOR ELECTRONICS ─────────────────────────────────────────
  {
    id: "vent-oe-adhesive",
    name: "Adhesive Outdoor Electronics Vents",
    description:
      "Peel-and-stick ePTFE membrane vents (VE7/VE8/VE9 series) for outdoor telecom enclosures, junction boxes, and LED luminaires. IP64–IP68 rated.",
    category: "vents",
    subcategory: "Outdoor Electronics Vents",
    industries: ["Telecommunications", "Industrial", "Electronics"],
    goreUrl: "https://www.gore.com/products/protective-adhesive-vents-electronic-outdoor-enclosures",
    catalogUrl: null,
    features: ["IP64 to IP68", "EU REACH compliant", "Easy peel-and-stick installation"],
    imageUrl: "/products/gore/vent-oe-adhesive.jpg",
    partNumbers: [
      { model: "VE7 Series", number: "VE70205" },
      { model: "VE7 Series", number: "VE70308" },
      { model: "VE7 Series", number: "VE70510" },
      { model: "VE7 Series", number: "VE70814" },
      { model: "VE7 Series", number: "VE70919" },
      { model: "VE7 Series", number: "VE71221" },
      { model: "VE7 Series", number: "VE72029" },
      { model: "VE8 Series", number: "VE80205" },
      { model: "VE8 Series", number: "VE80308" },
      { model: "VE8 Series", number: "VE80510" },
      { model: "VE8 Series", number: "VE80814" },
      { model: "VE8 Series", number: "VE80919" },
      { model: "VE8 Series", number: "VE81221" },
      { model: "VE8 Series", number: "VE82029" },
      { model: "VE9 Series", number: "VE90308" },
      { model: "VE9 Series", number: "VE90510" },
      { model: "VE9 Series", number: "VE90814" },
      { model: "VE9 Series", number: "VE90919" },
      { model: "VE9 Series", number: "VE91221" },
      { model: "VE9 Series", number: "VE92029" },
    ],
  },
  {
    id: "vent-oe-screw-in",
    name: "Screw-In Outdoor Electronics Vents",
    description:
      "Threaded ePTFE vents for outdoor enclosures requiring robust, field-replaceable pressure equalization with IP68 protection against high-pressure water jets.",
    category: "vents",
    subcategory: "Outdoor Electronics Vents",
    industries: ["Telecommunications", "Industrial", "Electronics"],
    goreUrl: "https://www.gore.com/products/screw-protective-vents-outdoor-electronics-enclosures",
    catalogUrl: null,
    features: ["IP68 & IP69K", "Tamper-resistant versions", "Field replaceable"],
    imageUrl: "/products/gore/vent-oe-screw-in.jpg",
    partNumbers: [
      { model: "PolyVent XS",              number: "PMF100318", variant: "black" },
      { model: "PolyVent XS",              number: "PMF100319", variant: "gray"  },
      { model: "PolyVent Standard",        number: "PMF100320", variant: "black" },
      { model: "PolyVent Standard",        number: "PMF100321", variant: "gray"  },
      { model: "PolyVent Standard",        number: "PMF100585", variant: "black" },
      { model: "PolyVent Standard",        number: "PMF100586", variant: "gray"  },
      { model: "PolyVent High Airflow",    number: "PMF100600" },
      { model: "PolyVent High Airflow PRO", number: "PMF300670", variant: "black" },
      { model: "PolyVent High Airflow PRO", number: "PMF300671", variant: "gray"  },
      { model: "PolyVent High Airflow PRO", number: "PMF300680", variant: "black" },
      { model: "PolyVent High Airflow PRO", number: "PMF300681", variant: "gray"  },
      { model: "PolyVent XL",              number: "PMF200400" },
      { model: "PolyVent XL",              number: "PMF200444" },
      { model: "PolyVent XL",              number: "PMF200542" },
    ],
  },
  {
    id: "vent-oe-snap-in",
    name: "Snap-In Outdoor Electronics Vents",
    description:
      "Tool-free snap-in ePTFE vents for high-volume assembly of telecom cabinets, smart meters, and outdoor lighting. Designed for automated installation.",
    category: "vents",
    subcategory: "Outdoor Electronics Vents",
    industries: ["Telecommunications", "Industrial", "Electronics"],
    goreUrl: "https://www.gore.com/products/snap-in-vents-electronics",
    catalogUrl: null,
    features: ["Snap-in — no tools required", "IP68", "High-volume compatible"],
    imageUrl: "/products/gore/vent-oe-snap-in.jpg",
    partNumbers: [
      { number: "PMF100271" },
      { number: "PMF200125" },
      { number: "PMF200128" },
      { number: "PMF200484" },
      { number: "PMF200521" },
    ],
  },
  {
    id: "vent-oe-tube-mount",
    name: "Tube-Mount Outdoor Electronics Vents",
    description:
      "Tube-mounted vents routing pressure equalization to a remote location, ideal for sealed enclosures where surface mounting is impossible.",
    category: "vents",
    subcategory: "Outdoor Electronics Vents",
    industries: ["Telecommunications", "Industrial"],
    goreUrl: "https://www.gore.com/products/tube-mount-vents-electronics-gearbox",
    catalogUrl: null,
    imageUrl: "/products/gore/vent-oe-tube-mount.jpg",
    partNumbers: [
      { number: "PMF100570" },
    ],
  },
  {
    id: "vent-oe-weldable",
    name: "Weldable Outdoor Electronics Vents",
    description:
      "Ultrasonic or heat-weldable ePTFE vent membranes for seamless integration into plastic enclosures without additional hardware.",
    category: "vents",
    subcategory: "Outdoor Electronics Vents",
    industries: ["Electronics", "Industrial", "Telecommunications"],
    goreUrl: "https://www.gore.com/products/protective-vents-weldable",
    catalogUrl: null,
    features: ["Ultrasonic or heat weld compatible", "Clean manufacturing process", "Custom shapes available"],
    imageUrl: "/products/gore/vent-oe-weldable.jpg",
    partNumbers: [
      { number: "VC70008-1",   variant: "Ø7.6 mm, black"  },
      { number: "VE0001SLR",   variant: "Ø10.0 mm, black" },
      { number: "VE0003AML",   variant: "Ø11.9 mm, black" },
    ],
  },

  // ─── VENTS › PORTABLE ELECTRONICS ────────────────────────────────────────
  {
    id: "vent-pe-acoustic",
    name: "Portable Electronic Acoustic Vents",
    description:
      "Ultra-thin acoustic ePTFE vent membranes protecting microphones and speakers in smartphones, wearables, and hearables from liquid and dust without compromising sound.",
    category: "vents",
    subcategory: "Portable Electronic Vents",
    industries: ["Electronics"],
    goreUrl: "https://www.gore.com/products/portable-electronics-acoustic-vents",
    catalogUrl: null,
    features: ["IP67/IP68 compliant", "< 0.3 mm thick", "Minimal acoustic loss"],
    imageUrl: "/products/gore/vent-pe-acoustic.jpg",
    partNumbers: [
      { number: "GAW111" },
      { number: "GAW112" },
      { number: "GAW350" },
      { number: "GAW348" },
      { number: "GAW333" },
      { number: "GAW337" },
      { number: "GAW334" },
      { number: "GAW342" },
      { number: "GAW344" },
      { number: "GAW346" },
    ],
  },
  {
    id: "vent-pe-mems",
    name: "MEMs Protective Vents",
    description:
      "Protective ePTFE membranes shielding MEMS pressure and microphone sensors from particle contamination while allowing pressure and sound transmission.",
    category: "vents",
    subcategory: "Portable Electronic Vents",
    industries: ["Electronics", "Medical"],
    goreUrl: "https://www.gore.com/products/mems-protective-vents-microphones",
    catalogUrl: null,
    features: ["< 1 µm particle filtration", "High acoustic transparency", "Adhesive or reel formats"],
    imageUrl: "/products/gore/vent-pe-mems.jpg",
    partNumbers: [
      { model: "Style 100 — circuit board assembly",   number: "VP1001MPX" },
      { model: "Style 200 — microphone manufacturers", number: "VP0002MPN" },
      { model: "Style 300 — microphone manufacturers", number: "VP0001MWN" },
    ],
  },
  {
    id: "vent-pe-pressure",
    name: "Portable Electronic Pressure Vents",
    description:
      "Pressure equalization ePTFE membranes for altitude sensors, barometers, and environmental sensors in consumer and medical portable devices.",
    category: "vents",
    subcategory: "Portable Electronic Vents",
    industries: ["Electronics", "Medical"],
    goreUrl: "https://www.gore.com/products/pressure-vents-portable-electronics",
    catalogUrl: null,
    imageUrl: "/products/gore/vent-pe-pressure.png",
    partNumbers: [
      { model: "ID 2.0 / OD 5.0 mm", number: "PE130205" },
      { model: "ID 2.0 / OD 5.0 mm", number: "PE120205" },
      { model: "ID 2.0 / OD 5.0 mm", number: "PE80205"  },
      { model: "ID 2.0 / OD 5.0 mm", number: "PE30205"  },
      { model: "ID 3.0 / OD 6.0 mm", number: "PE130306" },
      { model: "ID 3.0 / OD 6.0 mm", number: "PE120306" },
      { model: "ID 3.0 / OD 6.0 mm", number: "PE80306"  },
      { model: "ID 3.0 / OD 6.0 mm", number: "PE30306"  },
      { model: "ID 3.0 / OD 6.0 mm", number: "PE70306"  },
      { model: "ID 5.0 / OD 9.4 mm", number: "PE30509"  },
      { model: "ID 5.5 / OD 10.2 mm", number: "PE80510" },
      { model: "ID 5.5 / OD 10.2 mm", number: "PE70510" },
      { model: "ID 1.6 / OD 3.8 mm", number: "PE151.63.8" },
      { model: "ID 2.0 / OD 4.2 mm", number: "PE152.04.2" },
      { model: "ID 2.0 / OD 4.2 mm", number: "PE172.04.2" },
    ],
  },

  // ─── VENTS › PACKAGING ────────────────────────────────────────────────────
  {
    id: "vent-pkg-liners",
    name: "Packaging Liners",
    description:
      "Gore ePTFE liner membranes for pharmaceutical, specialty chemical, and food packaging — controlling gas exchange and moisture while maintaining product integrity.",
    category: "vents",
    subcategory: "Packaging Vents",
    industries: ["Industrial", "Medical"],
    goreUrl: "https://www.gore.com/products/packaging-vents-liners-pressure-equalization-sealed-packaging",
    catalogUrl: null,
    features: ["Chemically inert ePTFE", "FDA-compliant materials", "Custom cut to size"],
    imageUrl: "/products/gore/vent-pkg-liners.jpg",
    partNumbers: [
      { model: "Foam Liner Standard",          number: "323G" },
      { model: "Foam Liner Standard",          number: "324G" },
      { model: "Foam Liner High Performance",  number: "383G" },
      { model: "Foam Liner High Performance",  number: "384G" },
      { model: "Induction Liner High Repellency", number: "CM6B" },
      { model: "Induction Liner High Airflow", number: "CM6C" },
      { model: "Induction Liner High Airflow", number: "CM8C" },
    ],
  },
  {
    id: "vent-pkg-plugin",
    name: "Plug-In Packaging Vents",
    description:
      "Plug-in ePTFE membrane vents for drums, containers, and specialty packaging requiring controlled vapor exchange and protection against liquid ingress.",
    category: "vents",
    subcategory: "Packaging Vents",
    industries: ["Industrial", "Medical"],
    goreUrl: "https://www.gore.com/products/vents-plug-in",
    catalogUrl: null,
    imageUrl: "/products/gore/vent-pkg-plugin.jpg",
    partNumbers: [
      { model: "D38 (large drum)", number: "D38" },
      { model: "D17",              number: "D17" },
      { model: "D15",              number: "D15" },
      { model: "D15 Converse",     number: "D15 Converse" },
      { model: "D10",              number: "D10" },
      { model: "D3 (small)",       number: "D3"  },
    ],
  },
];

export const GORE_CATEGORIES = [
  { key: "all", label: "All Products" },
  { key: "cables", label: "Cables & Assemblies" },
  { key: "sealants", label: "SKYFLEX® Sealant" },
  { key: "vents", label: "Vents" },
] as const;

export type GoreCategoryKey = (typeof GORE_CATEGORIES)[number]["key"];

// ─── Part-number lookup utilities ────────────────────────────────────────────

/**
 * Find the product and specific part-number entry for a given part number.
 * Comparison is case-insensitive and trims whitespace.
 */
export function findProductByPartNumber(
  partNumber: string
): { product: GoreProduct; partEntry: GorePartNumberEntry } | null {
  const needle = partNumber.trim().toLowerCase();
  for (const product of GORE_PRODUCTS) {
    if (!product.partNumbers) continue;
    const entry = product.partNumbers.find(
      (pn) => pn.number.trim().toLowerCase() === needle
    );
    if (entry) return { product, partEntry: entry };
  }
  return null;
}

/**
 * Returns all vent part numbers with their parent product ID.
 * Used by generateStaticParams for the dynamic [partNumber] route.
 */
export function getAllVentPartNumbers(): Array<{
  productId: string;
  partNumber: string;
}> {
  return GORE_PRODUCTS.filter(
    (p) => p.category === "vents" && Array.isArray(p.partNumbers) && p.partNumbers.length > 0
  ).flatMap((p) =>
    p.partNumbers!.map((pn) => ({ productId: p.id, partNumber: pn.number }))
  );
}
