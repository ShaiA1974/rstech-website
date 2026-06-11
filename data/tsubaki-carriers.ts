export type CarrierMaterial = "plastic" | "steel" | "hybrid" | "aluminium";
export type CarrierOpening = "open" | "closed" | "both";

export type TsubakiCarrier = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  material: CarrierMaterial;
  opening: CarrierOpening;
  innerHeights: string;
  innerWidths: string;
  pitch: string;
  travelLength?: string;
  variantCount?: number;
  imageUrl?: string;
  supplierUrl: string;
  features: string[];
  benefits: { title: string; body: string }[];
  specs: { label: string; value: string }[];
  applications: string[];
  faq: { q: string; a: string }[];
  industries: string[];
};

export const CARRIER_MATERIALS = [
  { key: "all" as const,        label: "All Materials" },
  { key: "plastic" as const,    label: "Plastic" },
  { key: "steel" as const,      label: "Steel" },
  { key: "hybrid" as const,     label: "Hybrid" },
  { key: "aluminium" as const,  label: "Aluminium" },
];

export const CARRIER_OPENINGS = [
  { key: "all" as const,    label: "All Types" },
  { key: "open" as const,   label: "Open" },
  { key: "closed" as const, label: "Closed" },
  { key: "both" as const,   label: "Open & Closed" },
];

export type CarrierMaterialFilter = (typeof CARRIER_MATERIALS)[number]["key"];
export type CarrierOpeningFilter  = (typeof CARRIER_OPENINGS)[number]["key"];

export const TSUBAKI_CARRIERS: TsubakiCarrier[] = [
  // ─── STANDARD CARRIERS ────────────────────────────────────────────────────
  {
    id: "cc-mono",
    name: "MONO Series",
    tagline: "The Universal Plastic Carrier for Everyday Automation",
    description:
      "Reliable plastic cable carriers for standard applications. Cost-effective with extensive unsupported lengths, high torsional rigidity, and one of the most comprehensive standard ranges available worldwide. The MONO Series sets the benchmark for general-purpose cable carrier performance.",
    material: "plastic",
    opening: "both",
    innerHeights: "10–100 mm",
    innerWidths: "25–350 mm",
    pitch: "25–100 mm",
    travelLength: "up to 150 m",
    variantCount: 120,
    imageUrl: "/products/tsubaki/carriers/hero/cc-mono-hero.jpg",
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/mono-series/",
    features: [
      "Easy and fast installation — no special tools required",
      "Extensive unsupported lengths for clean machine designs",
      "High torsional rigidity via large link surfaces",
      "Easy to shorten and extend in the field",
      "Immediate worldwide stock availability",
    ],
    benefits: [
      {
        title: "Rapid Installation, Zero Downtime",
        body: "MONO carriers snap together without tools and cables press in from above — reducing assembly time dramatically. On retrofit projects where machine downtime costs money, this matters. Immediate worldwide stock availability means no waiting on lead times.",
      },
      {
        title: "Outstanding Unsupported Length Performance",
        body: "High torsional rigidity through large link surface areas gives the MONO Series some of the longest unsupported lengths in the standard plastic carrier segment. This enables cleaner machine designs with fewer support troughs and lower overall system cost.",
      },
      {
        title: "Lifelong Scalability Across 120 Sizes",
        body: "The MONO range spans 120 standard sizes. As your application evolves — wider cables, heavier loads, longer travels — you stay within the same carrier family. Shortening or extending a MONO carrier requires no special tooling and no new procurement.",
      },
    ],
    specs: [
      { label: "Material", value: "PA66 glass-fibre reinforced" },
      { label: "Inner Height Range", value: "10–100 mm" },
      { label: "Inner Width Range", value: "25–350 mm" },
      { label: "Pitch Options", value: "25–100 mm" },
      { label: "Max Travel Length", value: "up to 150 m (guided)" },
      { label: "Operating Temperature", value: "-20°C to +80°C" },
      { label: "Opening Style", value: "Inward / Outward / Both" },
      { label: "Standard Sizes", value: "120 sizes in catalogue" },
    ],
    applications: [
      "CNC machine tools and machining centres",
      "Packaging machinery and conveyor lines",
      "General automation and handling systems",
      "Assembly lines and transfer systems",
      "Industrial robots with linear axes",
      "Printing and textile machinery",
    ],
    faq: [
      {
        q: "Can I shorten or extend a MONO carrier on-site?",
        a: "Yes. MONO carriers are designed to be shortened by removing links or extended by snapping in additional links — no special tools required. This makes field modifications fast and cost-effective.",
      },
      {
        q: "What cable fill levels does the MONO Series support?",
        a: "The MONO Series supports up to 60% cross-sectional fill as a general guideline. With proper cable bundling and separation using optional dividers, higher fill is achievable. Contact RSTECH for application-specific calculation.",
      },
      {
        q: "Is the MONO Series available in ESD or cleanroom variants?",
        a: "Standard MONO carriers are not classified for cleanroom use. For ESD or cleanroom requirements, Tsubaki offers the UNIFLEX Advanced or QUANTUM Series. Contact RSTECH to discuss the best fit for your environment.",
      },
      {
        q: "How do I source MONO Series carriers in Israel?",
        a: "RSTECH Electronics is Tsubaki Kabelschlepp's authorized representative in Israel. We hold local stock of the most common sizes and can arrange delivery for all 120 sizes. Contact us for a quote.",
      },
    ],
    industries: ["Machine Tools", "Automation", "Packaging", "Printing & Textile"],
  },

  {
    id: "cc-quicktrax",
    name: "QuickTrax® Series",
    tagline: "Two-Component Engineering for Superior Performance",
    description:
      "Compact and cost-effective cable carriers in two-component technology. A glass-fiber-reinforced body combined with elastic film-hinge crossbars delivers 20% longer unsupported length and 33% greater load capacity versus competitive products, with integrated noise damping for quieter operation.",
    material: "plastic",
    opening: "open",
    innerHeights: "20–55 mm",
    innerWidths: "35–200 mm",
    pitch: "32–64 mm",
    travelLength: "up to 80 m",
    variantCount: 40,
    imageUrl: "/products/tsubaki/carriers/hero/cc-quicktrax-hero.jpg",
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/quicktrax-series/",
    features: [
      "20% longer unsupported length than competing products",
      "33% greater load capacity through glass-fibre reinforcement",
      "Integrated noise damping via elastic film-hinge crossbars",
      "Tool-free opening inward and outward",
      "Sliding dividers for precise cable separation",
    ],
    benefits: [
      {
        title: "More Payload, Longer Reach",
        body: "The glass-fiber-reinforced body gives QuickTrax 33% more load capacity and 20% greater unsupported length than competing standard carriers of the same footprint. This directly reduces the number of support brackets required — fewer brackets, lower installation cost.",
      },
      {
        title: "Quieter Operation from Day One",
        body: "The elastic film-hinge crossbars act as integrated noise dampers, absorbing link impact vibration during direction changes. Machine operators benefit from a measurably quieter working environment without any additional acoustic treatment.",
      },
      {
        title: "Fast Cable Installation",
        body: "Tool-free opening in both directions and sliding dividers allow cables to be laid and separated quickly without disassembly. On high-volume machine builds where cable installation hours add up, this efficiency is a real production advantage.",
      },
    ],
    specs: [
      { label: "Material", value: "2-component: PA66-GF30 body + TPE film hinge" },
      { label: "Inner Height Range", value: "20–55 mm" },
      { label: "Inner Width Range", value: "35–200 mm" },
      { label: "Pitch Options", value: "32 / 64 mm" },
      { label: "Max Travel Length", value: "up to 80 m" },
      { label: "Load Capacity vs Competition", value: "+33%" },
      { label: "Opening Style", value: "Inward and outward, tool-free" },
      { label: "Dividers", value: "Sliding adjustable dividers" },
    ],
    applications: [
      "Machine tool linear axes and Z-axes",
      "Packaging and labelling machinery",
      "Automation and pick-and-place systems",
      "Printing machinery cross-gantries",
      "Assembly and test equipment",
      "Semiconductor handler peripherals",
    ],
    faq: [
      {
        q: "What does 'two-component technology' mean in the QuickTrax?",
        a: "The carrier body is moulded from glass-fibre-reinforced PA66 for high rigidity and load capacity, while the crossbar film hinges are moulded from TPE — a soft elastic material that acts as an integrated noise damper and allows tool-free opening.",
      },
      {
        q: "Can QuickTrax run unsupported (gliding application)?",
        a: "Yes. The 20% longer unsupported length compared to competitors makes QuickTrax well-suited for gliding (unsupported) applications with moderate travel lengths. For very long travels, consult RSTECH for a supported trough configuration.",
      },
      {
        q: "Are sliding dividers standard or optional?",
        a: "Sliding adjustable dividers are available as accessories for the QuickTrax Series. They allow cable grouping without fixed divider spacing and can be repositioned without tools.",
      },
    ],
    industries: ["Machine Tools", "Automation", "Packaging", "Printing & Textile"],
  },

  {
    id: "cc-uniflex",
    name: "UNIFLEX Advanced Series",
    tagline: "The Quiet All-Rounder for Demanding Environments",
    description:
      "Light, quiet all-rounder cable carrier with ball-joint opening stays and extensive subdivision options. Available in ESD, heat-resistant, and flame-resistant variants across seven inner height sizes for a wide range of demanding applications including semiconductor, medical, and high-temperature machinery.",
    material: "plastic",
    opening: "both",
    innerHeights: "17.5–80 mm",
    innerWidths: "50–500 mm",
    pitch: "25–100 mm",
    variantCount: 60,
    imageUrl: "/products/tsubaki/carriers/hero/cc-uniflex-hero.jpg",
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/uniflex-advanced-series/",
    features: [
      "Ball-joint opening stays — opens both sides at any position",
      "Integrated noise damping for quieter machinery",
      "Lateral wear surfaces for rotating applications",
      "ESD, heat-resistant, and flame-resistant variants available",
      "7 sizes from 17.5 mm to 80 mm inner height",
    ],
    benefits: [
      {
        title: "Opens Either Side for Any Installation",
        body: "Ball-joint opening stays allow the UNIFLEX Advanced to open inward or outward at any position along its length. This makes cable laying and maintenance access straightforward regardless of carrier orientation or mounting position.",
      },
      {
        title: "Built for Specialist Environments",
        body: "Standard PA66 performs well in most applications, but UNIFLEX Advanced goes further. ESD-dissipative variants protect static-sensitive electronics. Heat-resistant grades handle elevated ambient temperatures. Flame-retardant versions meet fire safety regulations in machine builder markets.",
      },
      {
        title: "Rotating and 3D Motion Capable",
        body: "Lateral wear surfaces are built into the side links, allowing the UNIFLEX Advanced to be used in rotating or triaxially articulating configurations without premature link wear — a capability absent from simpler carrier designs.",
      },
    ],
    specs: [
      { label: "Material", value: "PA66-GF30 (standard), ESD, HTR, FR variants" },
      { label: "Inner Height Range", value: "17.5–80 mm" },
      { label: "Inner Width Range", value: "50–500 mm" },
      { label: "Pitch Options", value: "25–100 mm" },
      { label: "Opening Style", value: "Ball-joint stays — both sides" },
      { label: "Special Variants", value: "ESD / Heat-resistant / Flame-retardant" },
      { label: "Lateral Wear Surfaces", value: "Yes — rotation applications" },
      { label: "Operating Temperature", value: "-40°C to +100°C (HTR to +150°C)" },
    ],
    applications: [
      "Machine tools with rotating axes",
      "Semiconductor process equipment",
      "Medical imaging and laboratory automation",
      "Cleanroom peripheral automation",
      "Printing and textile machinery",
      "Automation in fire-rated building environments",
    ],
    faq: [
      {
        q: "What makes the ball-joint opening stay better than a standard hinge?",
        a: "A standard opening stay opens only in one fixed direction. The ball-joint design in UNIFLEX Advanced allows the crossbar to open inward or outward from any point along the carrier's length, giving full flexibility regardless of how the carrier is mounted.",
      },
      {
        q: "What temperature rating does the heat-resistant variant offer?",
        a: "The heat-resistant (HTR) variant of the UNIFLEX Advanced is rated up to +150°C continuous ambient temperature, compared to the standard +80°C. This covers applications near machine tool spindles, ovens, and hot process equipment.",
      },
      {
        q: "Can the ESD variant be used in ISO Class 5 cleanroom environments?",
        a: "The UNIFLEX Advanced ESD variant controls static discharge but is not classified as an ISO Class 1 cleanroom carrier. For certified ISO Class 1 operation, Tsubaki's CLEANVEYOR system is the appropriate solution. Contact RSTECH to assess your specific cleanroom requirement.",
      },
    ],
    industries: ["Machine Tools", "Automation", "Semiconductor", "Medical", "Printing & Textile"],
  },

  {
    id: "cc-tkp35",
    name: "TKP35 Series",
    tagline: "Compact Precision Carrier for Tight Machine Envelopes",
    description:
      "A small-pitch compact plastic cable carrier designed for precision machinery with restricted installation envelopes. The TKP35 delivers reliable cable guidance in tight spaces where standard-pitch carriers cannot fit, with smooth quiet operation and good fill capacity relative to its compact 35 mm pitch footprint.",
    material: "plastic",
    opening: "both",
    innerHeights: "10–35 mm",
    innerWidths: "10–100 mm",
    pitch: "35 mm",
    imageUrl: "/products/tsubaki/carriers/cc-tkp35.png",
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/",
    features: [
      "35 mm pitch for very compact installation envelopes",
      "Lightweight design reduces moving mass on dynamic axes",
      "Quiet operation suitable for precision instrumentation",
      "Inward and outward opening for easy cable access",
      "Suitable for light-duty cable and tube guidance",
    ],
    benefits: [
      {
        title: "Fits Where Others Cannot",
        body: "The 35 mm pitch and compact cross-section allow the TKP35 to be installed in machine cavities and sub-panels where a standard 40–80 mm pitch carrier simply cannot fit. This opens up cable carrier solutions for miniaturised automation and precision instruments.",
      },
      {
        title: "Reduced Moving Mass",
        body: "Lighter carrier weight means lower dynamic forces on the mounting points and connected cables during acceleration and deceleration. In high-cycle applications, reduced inertia directly translates to longer cable life and lower bearing loads on linear guides.",
      },
      {
        title: "Clean, Quiet Performance",
        body: "The TKP35's link geometry is optimised to minimise polygon effect and noise in the small-pitch regime, making it appropriate for laboratory, medical, and precision measurement environments where acoustic emissions matter.",
      },
    ],
    specs: [
      { label: "Material", value: "PA66 glass-fibre reinforced" },
      { label: "Inner Height Range", value: "10–35 mm" },
      { label: "Inner Width Range", value: "10–100 mm" },
      { label: "Pitch", value: "35 mm" },
      { label: "Opening Style", value: "Inward / Outward" },
      { label: "Operating Temperature", value: "-40°C to +80°C" },
      { label: "Application Class", value: "Light-duty precision" },
    ],
    applications: [
      "Precision measurement and metrology equipment",
      "Medical diagnostic and laboratory devices",
      "Laboratory automation and pipetting systems",
      "Small semiconductor handling equipment",
      "Miniaturised assembly automation",
      "Optical systems and camera gantries",
    ],
    faq: [
      {
        q: "Is the TKP35 suitable for gliding (unsupported) applications?",
        a: "The TKP35 is best suited for guided or lightly supported applications due to its small pitch. For unsupported travels beyond a few hundred millimetres, consult RSTECH for a supported trough recommendation.",
      },
      {
        q: "What is the maximum cable diameter that fits in the TKP35?",
        a: "The inner height range of 10–35 mm accommodates individual cables up to approximately 30 mm diameter depending on the selected cross-section. For hose or tube guidance, contact RSTECH with your specific cable mix for a fill calculation.",
      },
      {
        q: "Can the TKP35 be sourced in Israel?",
        a: "Yes. RSTECH Electronics represents Tsubaki Kabelschlepp throughout Israel and can supply the TKP35 Series. Contact us with your travel length, cable set, and cycle requirements for a complete recommendation.",
      },
    ],
    industries: ["Medical", "Automation", "Semiconductor", "Machine Tools"],
  },

  {
    id: "cc-tkk",
    name: "TKK Series",
    tagline: "Heavy-Duty Plastic Carrier for Extended Travel Lengths",
    description:
      "A robust large-format plastic cable carrier optimised for longer travel lengths and heavier cable fills. The TKK Series uses strengthened link geometry to maintain shape and resist deformation under high additional loads, making it the preferred choice when standard carriers reach their performance limits.",
    material: "plastic",
    opening: "both",
    innerHeights: "50–150 mm",
    innerWidths: "100–600 mm",
    pitch: "50–120 mm",
    imageUrl: "/products/tsubaki/carriers/cc-tkk.png",
    travelLength: "up to 50 m unsupported",
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/",
    features: [
      "High additional load capacity for heavy cable fills",
      "Extended unsupported travel lengths up to 50 m",
      "Strengthened link geometry resists deformation",
      "Opens inward and outward for easy cable laying",
      "Wide inner widths up to 600 mm for large cable bundles",
    ],
    benefits: [
      {
        title: "Handle Heavy Cable Sets with Confidence",
        body: "The TKK's reinforced link design supports substantial additional loads — heavy power cables, large-diameter hoses, and multi-conductor bundles — without sagging or distorting the carrier geometry. This protects cables from excessive bending stress and unplanned wear.",
      },
      {
        title: "Long Travels Without a Trough",
        body: "With unsupported lengths to 50 m, the TKK enables clean machine designs where routing a support trough is impractical. This is particularly valuable in crane applications, large transfer lines, and warehouse automation where fixed infrastructure is difficult to install.",
      },
      {
        title: "Simple Maintenance Access",
        body: "Both-side opening crossbars allow maintenance engineers to access cables at any point along a long TKK installation without dismounting the entire carrier — a key advantage in applications with 20–50 m travel where full carrier removal is disruptive.",
      },
    ],
    specs: [
      { label: "Material", value: "PA66-GF30 reinforced" },
      { label: "Inner Height Range", value: "50–150 mm" },
      { label: "Inner Width Range", value: "100–600 mm" },
      { label: "Pitch Options", value: "50–120 mm" },
      { label: "Max Unsupported Length", value: "up to 50 m" },
      { label: "Opening Style", value: "Inward and outward" },
      { label: "Operating Temperature", value: "-40°C to +80°C" },
    ],
    applications: [
      "Large CNC machining centres and transfer lines",
      "Overhead crane cable management",
      "Warehouse automation and storage systems",
      "Large-format printing and cutting machines",
      "Automotive assembly line conveyor systems",
      "Shipbuilding and port handling equipment",
    ],
    faq: [
      {
        q: "How does the TKK differ from the MONO Series?",
        a: "The TKK is engineered for heavier loads and longer travel lengths than the MONO. It uses a reinforced link geometry with greater cross-section and higher load ratings. MONO is the right choice for standard light-to-medium applications; TKK is selected when load or travel requirements exceed MONO's range.",
      },
      {
        q: "Can the TKK be used in an overhead (hanging) configuration?",
        a: "Yes. The TKK can be specified for hanging configurations where the carrier hangs from the upper strand. The reinforced links maintain their shape under the additional gravitational load. RSTECH can calculate the maximum hanging travel for your specific cable set.",
      },
    ],
    industries: ["Machine Tools", "Crane & Port", "Automation", "Packaging"],
  },

  {
    id: "cc-protum",
    name: "PROTUM® Series",
    tagline: "Elegant Cable Management for Clean Environments",
    description:
      "Small, lightweight cable carriers for modern office, laboratory, and medical environments. No link wear, simple press-in cable installation, and an attractive design available in black, white, or silver gray make PROTUM the choice where aesthetics and cleanliness matter alongside engineering function.",
    material: "plastic",
    opening: "open",
    innerHeights: "12–30 mm",
    innerWidths: "25–100 mm",
    pitch: "20–32 mm",
    imageUrl: "/products/tsubaki/carriers/hero/cc-protum-hero.jpg",
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/protum-series/",
    features: [
      "No link wear — very long service life by design",
      "Cables simply pressed into carrier — no tools required",
      "Clip-on side parts for precise length customisation",
      "Available in black, white, and silver gray",
      "High travel speed and acceleration capability",
    ],
    benefits: [
      {
        title: "Zero Wear, Maximum Longevity",
        body: "PROTUM uses a continuous side-band design with no conventional link connections. Without link-on-link contact, there is no progressive wear mechanism. This delivers exceptional service life in high-cycle applications — a key advantage for medical devices and laboratory automation that run continuously.",
      },
      {
        title: "Tool-Free Cable Installation",
        body: "Cables press directly into the carrier from above — no crossbar removal, no tools, no disassembly. This simplifies initial wiring and reduces service intervention time significantly. In environments where machine downtime is expensive, this is a practical operational benefit.",
      },
      {
        title: "Designed to Be Seen",
        body: "Available in matte black, clinical white, and silver gray, PROTUM integrates into the aesthetic language of modern precision equipment. Medical imaging devices, laboratory instruments, and office automation benefit from cable management that looks as considered as the rest of the machine.",
      },
    ],
    specs: [
      { label: "Material", value: "PA66 (link-free continuous side band)" },
      { label: "Inner Height Range", value: "12–30 mm" },
      { label: "Inner Width Range", value: "25–100 mm" },
      { label: "Pitch", value: "20–32 mm" },
      { label: "Opening Style", value: "Open-top press-in" },
      { label: "Colour Options", value: "Black / White / Silver Gray" },
      { label: "Link Wear", value: "None — link-free design" },
      { label: "Operating Temperature", value: "-20°C to +80°C" },
    ],
    applications: [
      "Medical diagnostic and imaging devices",
      "Laboratory automation and pipetting systems",
      "Office and professional AV equipment",
      "Precision metrology instruments",
      "Small semiconductor and electronics assembly",
      "Dental and surgical equipment",
    ],
    faq: [
      {
        q: "Does PROTUM require a trough or guide channel?",
        a: "PROTUM can be used with or without a guide channel depending on the travel length and additional load. For short travels with light cables, free-moving operation is often sufficient. For longer or heavier applications, Tsubaki's matching guide channels provide support.",
      },
      {
        q: "Is PROTUM suitable for cleanroom use?",
        a: "PROTUM's link-free design minimises particle generation compared to conventional link carriers. While it is not certified to ISO Class 1, it performs well in semi-clean environments. For ISO Class 1 certification, the CLEANVEYOR system is the appropriate choice.",
      },
      {
        q: "Can I change cable routing after installation?",
        a: "Yes. Cables can be pressed in and removed by hand without tools. This makes PROTUM very convenient for equipment that undergoes frequent cable configuration changes during its lifecycle.",
      },
    ],
    industries: ["Medical", "Automation", "Semiconductor"],
  },

  {
    id: "cc-easytrax",
    name: "EasyTrax® Series",
    tagline: "The Fastest Cable Installation in the Industry",
    description:
      "The fastest cable laying on the market. Lateral swiveling lamellae allow very high fill levels and extremely rapid cable installation. Two-component design with glass-fiber-reinforced body and elastic lamellae delivers outstanding noise damping, with cleanroom and ESD variants available.",
    material: "hybrid",
    opening: "both",
    innerHeights: "25–100 mm",
    innerWidths: "50–400 mm",
    pitch: "32–80 mm",
    travelLength: "up to 50 m",
    variantCount: 35,
    imageUrl: "/products/tsubaki/carriers/hero/cc-easytrax-hero.jpg",
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/easytrax-series/",
    features: [
      "Fastest cable insertion in the industry via lateral lamellae",
      "Very high fill levels — more cables in less cross-section",
      "Integrated noise damping from elastic TPE lamellae",
      "Cleanroom and ESD variants available",
      "High torsional rigidity with extensive unsupported lengths",
    ],
    benefits: [
      {
        title: "Cut Cable Installation Time in Half",
        body: "EasyTrax's lateral swiveling lamellae open sideways rather than requiring top-removal. Cables simply press in from the side with no crossbar manipulation. On machine builds with dense cable populations — 20, 30, 40+ cables — this fundamentally changes the wiring labour calculation.",
      },
      {
        title: "Higher Fill Levels for Dense Cable Sets",
        body: "Because the lamellae flex to accommodate large-diameter cables and bundles, fill levels significantly above standard recommendations are achievable with EasyTrax. Machine builders can run more cables through a given carrier cross-section, reducing the need for a second carrier or larger housing.",
      },
      {
        title: "Versatile Across Environments",
        body: "Standard EasyTrax covers the majority of industrial applications, while cleanroom and ESD variants extend the system to semiconductor fabs and sensitive electronics production. One carrier family covers the full range from rough machine tools to clean environments.",
      },
    ],
    specs: [
      { label: "Material", value: "2-component: PA66-GF30 body + TPE lamellae" },
      { label: "Inner Height Range", value: "25–100 mm" },
      { label: "Inner Width Range", value: "50–400 mm" },
      { label: "Pitch Options", value: "32–80 mm" },
      { label: "Opening Style", value: "Lateral lamellae — press-in from side" },
      { label: "Special Variants", value: "Cleanroom / ESD" },
      { label: "Noise Damping", value: "Integrated (TPE lamellae)" },
      { label: "Operating Temperature", value: "-40°C to +90°C" },
    ],
    applications: [
      "Machine tool cable management with dense cable sets",
      "Automation systems requiring fast field wiring",
      "Semiconductor process equipment (ESD variant)",
      "Packaging machinery with frequent cable changes",
      "Printing and textile machinery",
      "Assembly systems with diverse cable mixes",
    ],
    faq: [
      {
        q: "How do the lateral lamellae work in practice?",
        a: "The lamellae are elastic TPE elements that run along the inside of the carrier. To insert a cable, you press it sideways into the lamellae — they flex to accept the cable and spring back to hold it. No crossbars need to be removed, and no tools are needed.",
      },
      {
        q: "Is EasyTrax available in an ESD-safe variant?",
        a: "Yes. The ESD variant uses a carbon-loaded compound that limits surface resistance to prevent static discharge — suitable for handling PCBs and static-sensitive components. Confirm exact resistance values with RSTECH for your specific ESD requirements.",
      },
      {
        q: "What is the maximum fill level achievable with EasyTrax?",
        a: "Tsubaki's calculator supports fill levels up to 60% by cross-section for standard carriers, but EasyTrax's flexible lamellae allow somewhat higher fill in practice. RSTECH can perform an exact fill calculation for your cable list.",
      },
    ],
    industries: ["Machine Tools", "Automation", "Semiconductor", "Packaging"],
  },

  {
    id: "cc-quantum",
    name: "QUANTUM® Series",
    tagline: "The Quietest Cable Carrier in the World",
    description:
      "The quietest cable carrier in the world. Continuous side bands without link connections achieve 31 dB(A), speeds to 40 m/s, and accelerations to 300 m/s². Rated for 25 million or more motion cycles — the pinnacle of high-speed, low-noise cable carrier technology.",
    material: "plastic",
    opening: "open",
    innerHeights: "17–120 mm",
    innerWidths: "50–800 mm",
    pitch: "22–100 mm",
    travelLength: "up to 150 m",
    variantCount: 200,
    imageUrl: "/products/tsubaki/carriers/hero/cc-quantum-hero.jpg",
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/quantum-series/",
    features: [
      "Ultra-quiet: 31 dB(A) — virtually no polygon effect",
      "Speeds to 40 m/s and accelerations to 300 m/s²",
      "≥25 million motion cycle service life",
      "Cleanroom compatible — no links, no link wear",
      "Custom inner widths in 1 mm increments (aluminium version)",
    ],
    benefits: [
      {
        title: "31 dB(A) — Quieter Than a Whisper",
        body: "Conventional link carriers generate audible noise at every direction reversal through polygon effect and link impact. QUANTUM's continuous side bands have no link connections, eliminating polygon effect entirely. At 31 dB(A), QUANTUM operates in virtually complete acoustic silence — critical for medical imaging suites, metrology labs, and premium semiconductor fabs.",
      },
      {
        title: "40 m/s Speed, 300 m/s² Acceleration",
        body: "QUANTUM is rated for the fastest linear axes in existence. High-speed PCB handlers, flat panel display glass transporters, and flying-shear cutting systems all demand carrier speeds and accelerations that destroy conventional carriers within months. QUANTUM is built for exactly these demands.",
      },
      {
        title: "25 Million Cycles and Counting",
        body: "With no links to wear, QUANTUM's continuous side band design has no inherent wear mechanism. The 25 million cycle rating exceeds the total lifecycle of many machines, meaning QUANTUM is effectively a fit-and-forget solution — no carrier replacement intervals to schedule, no spare parts to stock.",
      },
    ],
    specs: [
      { label: "Material", value: "PA66-GF30 or aluminium (custom widths)" },
      { label: "Noise Level", value: "31 dB(A)" },
      { label: "Max Speed", value: "40 m/s" },
      { label: "Max Acceleration", value: "300 m/s²" },
      { label: "Service Life", value: "≥25 million motion cycles" },
      { label: "Inner Height Range", value: "17–120 mm" },
      { label: "Inner Width Range", value: "50–800 mm" },
      { label: "Max Travel Length", value: "up to 150 m" },
    ],
    applications: [
      "PCB handling and SMT assembly equipment",
      "Flat panel display manufacturing lines",
      "Semiconductor wafer handling systems",
      "High-speed flying-shear cutting machines",
      "Medical imaging gantries",
      "Precision metrology and CMM systems",
    ],
    faq: [
      {
        q: "Why does QUANTUM have no polygon effect?",
        a: "Polygon effect occurs when a cable carrier's discrete links generate a rhythmic rise and fall as each link passes over the deflection radius — producing vibration and noise. QUANTUM's continuous side bands have no link transitions, so the carrier path changes radius smoothly with no polygon effect at all.",
      },
      {
        q: "Can QUANTUM be used in cleanrooms?",
        a: "Yes. The link-free design generates no link-on-link particle emissions, making QUANTUM suitable for controlled environments. For ISO Class 1 certification, Tsubaki's CLEANVEYOR system is the dedicated solution; QUANTUM covers semi-clean to ISO Class 3–5 environments.",
      },
      {
        q: "Is the custom 1 mm increment inner width available in the plastic version?",
        a: "The 1 mm increment inner width customisation is available in the aluminium QUANTUM variant. The plastic variant is supplied in standard width steps. Contact RSTECH for full width availability tables.",
      },
    ],
    industries: ["Semiconductor", "Automation", "Medical", "Printing & Textile", "Cleanroom"],
  },

  {
    id: "cc-tkr",
    name: "TKR Series",
    tagline: "Precision Dynamics for High-Speed Clean Applications",
    description:
      "Extremely quiet and low-vibration cable carriers for highly dynamic applications. Captive connecting elements eliminate link abrasion — ideal for cleanroom environments, handling systems, metrology, and high-speed robotics where particle generation and noise cannot be tolerated.",
    material: "plastic",
    opening: "both",
    innerHeights: "17–100 mm",
    innerWidths: "50–400 mm",
    imageUrl: "/products/tsubaki/tkr-1.jpg",
    pitch: "25–75 mm",
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/tkr-series/",
    features: [
      "Extremely low vibration — minimal polygon effect",
      "Cleanroom compatible design",
      "Captive connecting elements — no link abrasion particles",
      "Opens at any position for easy cable access",
      "Fixable and sliding dividers for cable organisation",
    ],
    benefits: [
      {
        title: "Captive Links Eliminate Abrasion",
        body: "TKR's connecting elements are captively retained within the link geometry — they cannot contact adjacent surfaces during carrier motion. This eliminates the particle generation from link-on-link abrasion, making TKR suitable for sensitive environments without the cost of a full QUANTUM or CLEANVEYOR installation.",
      },
      {
        title: "Open at Any Point for Easy Maintenance",
        body: "Unlike some high-performance carriers that require end-to-end disassembly for cable changes, TKR can be opened at any position along its length. Service engineers can access any section of the cable run without disturbing the rest of the carrier — reducing mean time to repair.",
      },
      {
        title: "Flexible Cable Organisation",
        body: "Both fixable and sliding dividers are available for TKR, allowing cables to be rigidly segregated or loosely grouped as the application demands. This flexibility makes TKR straightforward to specify and rework as cable sets evolve over a machine's life.",
      },
    ],
    specs: [
      { label: "Material", value: "PA66-GF30 (cleanroom-optimised)" },
      { label: "Inner Height Range", value: "17–100 mm" },
      { label: "Inner Width Range", value: "50–400 mm" },
      { label: "Pitch Options", value: "25–75 mm" },
      { label: "Connecting Elements", value: "Captive — no link abrasion" },
      { label: "Opening Style", value: "Opens at any position" },
      { label: "Dividers", value: "Fixable and sliding variants" },
      { label: "Operating Temperature", value: "-40°C to +80°C" },
    ],
    applications: [
      "High-speed handling and pick-and-place systems",
      "Metrology and precision measurement equipment",
      "Semiconductor peripheral automation",
      "Medical device manufacturing",
      "Printing and textile high-cycle machinery",
      "Cleanroom-adjacent automation",
    ],
    faq: [
      {
        q: "How does TKR differ from the QUANTUM Series?",
        a: "Both are high-performance carriers, but QUANTUM uses a fully link-free continuous side band design for the absolute highest speeds (40 m/s) and lowest noise (31 dB(A)). TKR uses a conventional link design with captive connecting elements — still far superior to standard carriers for noise and particle emissions, at a lower cost point than QUANTUM.",
      },
      {
        q: "Is TKR suitable for ISO Class 5 cleanroom use?",
        a: "TKR's captive connecting elements prevent link abrasion particle generation, making it appropriate for semi-clean environments. For certified ISO Class 1, the CLEANVEYOR is required. Contact RSTECH to assess your specific cleanroom classification needs.",
      },
    ],
    industries: ["Automation", "Robotics", "Semiconductor", "Medical", "Printing & Textile"],
  },

  {
    id: "cc-tka",
    name: "TKA Aluminium Series",
    tagline: "Lightweight Aluminium Precision for High-Load Dynamic Axes",
    description:
      "Aluminium cable carriers combining low weight with high rigidity for dynamic applications where plastic carriers have reached their load or travel limits. The TKA offers inner width customisation in fine increments, long travel capability, and corrosion-resistant aluminium construction suited to harsh industrial environments.",
    material: "aluminium",
    opening: "both",
    innerHeights: "30–150 mm",
    innerWidths: "50–800 mm",
    imageUrl: "/products/tsubaki/carriers/hero/cc-tka-hero.jpg",
    pitch: "40–120 mm",
    travelLength: "up to 100 m",
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/",
    features: [
      "Aluminium construction — lightweight yet highly rigid",
      "Custom inner widths in fine increments",
      "Long travel capability for large machine envelopes",
      "Corrosion resistant for outdoor and harsh environments",
      "High additional load capacity beyond plastic carrier range",
    ],
    benefits: [
      {
        title: "Metal Strength at Plastic Weight",
        body: "Aluminium delivers far greater rigidity than plastic per unit of cross-section area. This means the TKA can span longer unsupported lengths and carry heavier cable fills without the bulk of a steel carrier. For dynamic axes that must accelerate quickly, every kilogram saved in moving mass is a performance gain.",
      },
      {
        title: "Custom Widths for Precise Cable Packing",
        body: "Because the TKA's inner width can be specified in fine increments, you can design the carrier cross-section to exactly match your cable bundle — no wasted space, no cables rattling in an oversized cavity. This precise fit also improves cable retention during high-acceleration movements.",
      },
      {
        title: "Built for Outdoor and Harsh Sites",
        body: "Aluminium's inherent corrosion resistance makes the TKA appropriate for outdoor machinery, coastal environments, and applications with coolant or chemical exposure where plastic carriers degrade prematurely. Anodised finish options extend service life further.",
      },
    ],
    specs: [
      { label: "Material", value: "Extruded aluminium alloy" },
      { label: "Inner Height Range", value: "30–150 mm" },
      { label: "Inner Width Range", value: "50–800 mm (custom increments)" },
      { label: "Pitch Options", value: "40–120 mm" },
      { label: "Max Travel Length", value: "up to 100 m" },
      { label: "Opening Style", value: "Inward and outward" },
      { label: "Surface Finish", value: "Natural / Anodised" },
      { label: "Operating Temperature", value: "-40°C to +120°C" },
    ],
    applications: [
      "Large machining centres and gantry systems",
      "Outdoor crane and harbour equipment",
      "Long-travel linear axes in automation",
      "Semiconductor manufacturing with high load requirements",
      "Automotive assembly automation",
      "Printing and coating line traversing systems",
    ],
    faq: [
      {
        q: "When should I choose aluminium TKA over plastic carriers?",
        a: "Choose TKA when plastic carriers cannot meet the load, travel length, or rigidity requirement — typically with inner widths above 300 mm, heavy cable sets, or travel lengths beyond 30 m. Aluminium also wins in outdoor or corrosive environments where plastic grades would degrade.",
      },
      {
        q: "Can TKA inner width be specified in millimetre increments?",
        a: "Yes. The aluminium TKA profile is extruded and cut to custom widths, enabling fine incremental specification. Contact RSTECH with your exact cable bundle dimensions for a custom width quote.",
      },
    ],
    industries: ["Machine Tools", "Crane & Port", "Automation", "Semiconductor"],
  },

  {
    id: "cc-k-series",
    name: "K-Series",
    tagline: "Proven Compact Design for General Industrial Use",
    description:
      "A proven, versatile compact cable carrier series covering a broad range of standard industrial applications. The K-Series provides a reliable and economical solution with good unsupported length performance, straightforward installation, and broad size availability for general-purpose cable and hose guidance.",
    material: "plastic",
    opening: "both",
    innerHeights: "15–75 mm",
    innerWidths: "25–300 mm",
    imageUrl: "/products/tsubaki/carriers/hero/cc-k-series-hero.jpg",
    pitch: "25–75 mm",
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/",
    features: [
      "Broad size range covering general industrial needs",
      "Good unsupported length performance for most applications",
      "Simple tool-free link assembly",
      "Inward and outward crossbar opening",
      "Cost-effective for standard volume applications",
    ],
    benefits: [
      {
        title: "One Carrier Family for the Majority of Applications",
        body: "The K-Series spans a wide size range with consistent link geometry and compatible accessories across the family. This simplifies BOM management for machine builders who run multiple machine variants — one carrier family covers nearly all standard cable guidance requirements.",
      },
      {
        title: "Economical Without Compromise",
        body: "The K-Series is engineered for cost efficiency in high-volume production. The link design balances rigidity and weight without premium materials or complex tooling. For OEM machine builders supplying competitive markets, the K-Series delivers acceptable performance at a controlled cost per metre.",
      },
      {
        title: "Quick Assembly and Commissioning",
        body: "Tool-free link assembly and both-side crossbar opening make the K-Series fast to build up and easy to commission. On production lines where many machines are built to the same design, fast, consistent assembly translates to meaningful labour savings.",
      },
    ],
    specs: [
      { label: "Material", value: "PA66 (standard)" },
      { label: "Inner Height Range", value: "15–75 mm" },
      { label: "Inner Width Range", value: "25–300 mm" },
      { label: "Pitch Options", value: "25–75 mm" },
      { label: "Opening Style", value: "Inward and outward" },
      { label: "Assembly", value: "Tool-free link assembly" },
      { label: "Operating Temperature", value: "-40°C to +80°C" },
    ],
    applications: [
      "General-purpose machine tools",
      "Industrial automation and handling",
      "Conveyor and material handling systems",
      "Agricultural and construction machinery",
      "General factory automation",
      "Packaging and food processing equipment",
    ],
    faq: [
      {
        q: "Is the K-Series compatible with MONO Series accessories?",
        a: "The K-Series and MONO Series are separate product families with different link geometries. Accessories such as dividers and mounting brackets are specific to each series. Contact RSTECH to confirm accessory compatibility for your application.",
      },
      {
        q: "Is the K-Series available in special materials?",
        a: "The K-Series is primarily offered in standard PA66. For ESD, high-temperature, or flame-retardant requirements, the UNIFLEX Advanced Series is the recommended alternative. Contact RSTECH if you need special material properties in this size range.",
      },
    ],
    industries: ["Machine Tools", "Automation", "Packaging"],
  },

  {
    id: "cc-m-series",
    name: "M-Series",
    tagline: "Medium-Duty Carrier with Wide Size Coverage",
    description:
      "A medium-duty plastic cable carrier family offering wider size coverage and higher additional load capacity than compact-series carriers. The M-Series is suited to applications that need more than a light carrier can offer but do not require the full performance of a high-performance or steel series.",
    material: "plastic",
    opening: "both",
    innerHeights: "30–120 mm",
    innerWidths: "50–500 mm",
    imageUrl: "/products/tsubaki/carriers/hero/cc-m-series-hero.jpg",
    pitch: "40–100 mm",
    travelLength: "up to 40 m",
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/",
    features: [
      "Medium-duty additional load capacity for heavier cable fills",
      "Wide size range from compact to large cross-sections",
      "Both-side crossbar opening for easy cable access",
      "Suitable for gliding and supported configurations",
      "Broad range of optional dividers and accessories",
    ],
    benefits: [
      {
        title: "Bridges the Gap Between Light and Heavy Duty",
        body: "The M-Series occupies the space between compact economy carriers and reinforced heavy-duty series. It handles the mid-range loads and travel lengths that are too demanding for K or MONO but do not justify the cost of a full heavy-duty or aluminium solution.",
      },
      {
        title: "Flexible Configuration Options",
        body: "With inner widths up to 500 mm and both-side opening crossbars, the M-Series accommodates a wide variety of cable mix configurations. A broad accessories range allows the carrier to be precisely configured for the application.",
      },
      {
        title: "Reliable in Gliding and Supported Layouts",
        body: "The M-Series is rated for both gliding (unsupported) and guided (trough-supported) installations. This versatility means the same carrier specification can be used across different machine configurations in a product family.",
      },
    ],
    specs: [
      { label: "Material", value: "PA66-GF30" },
      { label: "Inner Height Range", value: "30–120 mm" },
      { label: "Inner Width Range", value: "50–500 mm" },
      { label: "Pitch Options", value: "40–100 mm" },
      { label: "Max Unsupported Length", value: "up to 40 m" },
      { label: "Opening Style", value: "Inward and outward" },
      { label: "Application Class", value: "Medium duty" },
      { label: "Operating Temperature", value: "-40°C to +80°C" },
    ],
    applications: [
      "Mid-range CNC machine tools",
      "Automation and handling systems",
      "Packaging and form-fill-seal machinery",
      "Crane festoon replacement applications",
      "Transfer and assembly lines",
      "Woodworking and panel processing centres",
    ],
    faq: [
      {
        q: "How do I choose between M-Series and TKK?",
        a: "The M-Series suits medium-duty loads and travels up to 40 m. The TKK is the correct choice for heavier cable fills, very long travels (to 50 m), or when higher torsional rigidity is required. RSTECH can perform a carrier selection calculation if you provide your cable set and travel data.",
      },
    ],
    industries: ["Machine Tools", "Automation", "Packaging", "Crane & Port"],
  },

  {
    id: "cc-tkhp",
    name: "TKHP Series",
    tagline: "High-Performance Hybrid Carrier for Heavy Dynamic Loads",
    description:
      "High-performance cable carriers engineered for long travel lengths and high additional loads. Aluminium stays adjustable in 1 mm width increments with optional roller damping system (RSD) deliver quiet, precise heavy-duty operation across travel lengths to 200 m.",
    material: "hybrid",
    opening: "both",
    innerHeights: "55–220 mm",
    innerWidths: "100–800 mm",
    pitch: "56–150 mm",
    travelLength: "up to 200 m",
    imageUrl: "/products/tsubaki/carriers/hero/cc-tkhp-hero.jpg",
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/tkhp-series",
    features: [
      "Inner widths 100–800 mm in 1 mm increments via aluminium stays",
      "Quick inside/outside opening for fast cable laying",
      "Optional RSD roller damping for quiet heavy-duty operation",
      "Replaceable glide shoes for extended service life",
      "Robust double fork-bracket side bands",
    ],
    benefits: [
      {
        title: "Millimetre-Precise Width Customisation",
        body: "TKHP's aluminium stays are adjustable in 1 mm width increments across 100–800 mm, allowing the inner width to be set to exactly match the cable bundle. Proper cable fill geometry is critical at long travel lengths — cables that shift sideways in an over-wide carrier experience bending stress that degrades insulation and connectors over time.",
      },
      {
        title: "RSD Roller Damping for Quiet Long-Travel Operation",
        body: "The optional Roller Damping System (RSD) replaces conventional sliding glide shoes with rolling elements, dramatically reducing travel resistance and operational noise at long travel lengths. Cranes, gantries, and transfer lines operating at 150–200 m travel can suffer significant carrier noise without damping — RSD eliminates this problem.",
      },
      {
        title: "Replaceable Glide Shoes Extend Service Life",
        body: "Rather than replacing the entire carrier when glide surfaces wear, TKHP uses replaceable glide shoes. Worn shoes are swapped out in minutes without dismounting the carrier, extending the carrier's total service life and reducing total cost of ownership in heavy continuous-duty applications.",
      },
    ],
    specs: [
      { label: "Material", value: "Plastic side bands + aluminium cross stays" },
      { label: "Inner Height Range", value: "55–220 mm" },
      { label: "Inner Width Range", value: "100–800 mm (1 mm increments)" },
      { label: "Pitch Options", value: "56–150 mm" },
      { label: "Max Travel Length", value: "up to 200 m" },
      { label: "Noise Reduction", value: "Optional RSD roller damping" },
      { label: "Glide Shoes", value: "Field-replaceable" },
      { label: "Opening Style", value: "Quick inside/outside" },
    ],
    applications: [
      "Overhead cranes and gantry cranes",
      "Automated warehouses and stacker cranes",
      "Long-travel machine tool transfer lines",
      "Automotive body shop automation",
      "Port and shipyard handling equipment",
      "Large steel mill and rolling mill automation",
    ],
    faq: [
      {
        q: "What is the RSD (Roller Damping System) and when should I specify it?",
        a: "The RSD replaces the standard glide shoe contact interface with a roller bearing contact. This reduces friction and noise substantially at long travel lengths and high speeds. Specify RSD when travel exceeds 100 m, when noise is a concern, or when the carrier runs at high cycle rates in a continuous production environment.",
      },
      {
        q: "Can TKHP be used in hanging configurations on cranes?",
        a: "Yes. TKHP is one of Tsubaki's preferred solutions for crane applications with long travel lengths. The robust double fork-bracket side band construction handles the gravitational loads in hanging configurations. RSTECH can calculate the hanging travel limit for your specific cable and carrier combination.",
      },
    ],
    industries: ["Machine Tools", "Crane & Port", "Automation"],
  },

  {
    id: "cc-xl-series",
    name: "XL Series",
    tagline: "Extra-Large Carriers for the Biggest Machine Envelopes",
    description:
      "Extra-large plastic cable carriers designed for machine envelopes that exceed the range of standard series. The XL Series handles very wide cable bundles and high additional loads in large-format machinery such as press lines, ship loaders, and large-scale automation platforms.",
    material: "plastic",
    opening: "both",
    innerHeights: "100–300 mm",
    innerWidths: "300–1500 mm",
    imageUrl: "/products/tsubaki/carriers/hero/cc-xl-series-hero.jpg",
    pitch: "100–200 mm",
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/",
    features: [
      "Very large inner cross-sections for big cable bundles",
      "High additional load capacity for heavy fills",
      "Both-side opening for easy cable access at scale",
      "Modular design allows on-site large-format assembly",
      "Suitable for large industrial and offshore applications",
    ],
    benefits: [
      {
        title: "Handles the Largest Cable Bundles",
        body: "With inner widths to 1500 mm, XL Series carriers can accommodate cable bundles that would require multiple conventional carriers to manage. Consolidating to a single carrier simplifies installation, reduces mounting points, and makes cable routing cleaner and more maintainable.",
      },
      {
        title: "Modular Assembly for Large Machines",
        body: "XL carriers are assembled from modular link components, enabling on-site construction to the exact length required. For machines in shipyards, offshore platforms, or large factory floors where transport of a complete pre-assembled carrier is impractical, modular assembly is the only viable approach.",
      },
      {
        title: "Engineered for Industrial-Scale Structural Loads",
        body: "The XL link geometry is engineered to maintain shape and resist deformation under very high additional loads — multiple large-diameter hoses, heavy power cables, and instrumentation cables running simultaneously. This structural integrity protects cables from localised bending stress concentrations.",
      },
    ],
    specs: [
      { label: "Material", value: "PA66-GF30 reinforced" },
      { label: "Inner Height Range", value: "100–300 mm" },
      { label: "Inner Width Range", value: "300–1500 mm" },
      { label: "Pitch Options", value: "100–200 mm" },
      { label: "Opening Style", value: "Inward and outward" },
      { label: "Assembly", value: "Modular, on-site assembly" },
      { label: "Application Class", value: "Extra-large industrial" },
    ],
    applications: [
      "Ship loaders and port unloaders",
      "Large hydraulic press lines",
      "Offshore platform machinery",
      "Mine and quarry large-scale equipment",
      "Wind turbine nacelle wiring",
      "Heavy industrial transfer lines",
    ],
    faq: [
      {
        q: "Are XL Series carriers available from stock?",
        a: "XL Series carriers are typically special-order items given their large dimensions and highly application-specific configurations. Lead times vary. Contact RSTECH early in the design process to allow sufficient procurement time.",
      },
      {
        q: "What is the maximum additional load the XL Series supports?",
        a: "Additional load capacity varies by size and is calculated per linear metre of carrier. Contact RSTECH with your cable and hose fill for a specific calculation.",
      },
    ],
    industries: ["Crane & Port", "Oil & Gas", "Machine Tools"],
  },

  {
    id: "cc-mt-series",
    name: "MT Series",
    tagline: "Multi-Axis and Triaxial Cable Carrier Solutions",
    description:
      "Cable carriers designed for multi-axis and triaxial motion where the carrier must articulate in more than one plane simultaneously. The MT Series enables clean cable management in robotic cells, three-dimensional gantries, and articulated machine axes where standard linear carriers cannot follow the motion path.",
    material: "plastic",
    opening: "both",
    innerHeights: "20–80 mm",
    innerWidths: "25–200 mm",
    imageUrl: "/products/tsubaki/carriers/hero/cc-mt-series-hero.jpg",
    pitch: "25–60 mm",
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/",
    features: [
      "Three-dimensional articulation capability",
      "Lateral rotation on horizontal plane",
      "Suitable for robotic and multi-axis machine axes",
      "Durable construction for high-cycle 3D motion",
      "Internal dividers for cable separation in motion",
    ],
    benefits: [
      {
        title: "Follows the Robot, Not Just the Axis",
        body: "Standard cable carriers articulate in one plane only. MT Series carriers add lateral rotation capability, allowing the carrier to follow three-dimensional motion paths found in articulated robot arms, delta robots, and multi-axis machining centres without fighting the machine's movement.",
      },
      {
        title: "Prevents Cable Fatigue in 3D Cycles",
        body: "Without a carrier, cables subjected to three-dimensional motion twist and splay unpredictably, concentrating bending stress at fixed points. The MT Series guides cables in a controlled path, distributing bending loads evenly over the carrier's bend radius — dramatically extending cable service life.",
      },
      {
        title: "Clean Integration into Robotic Cells",
        body: "Loose cables in robotic cells create safety hazards and snag risks. MT Series carriers present a defined, predictable cable path that can be risk-assessed and guarded. This simplifies cell safety validation and reduces cable-snag-related machine stops.",
      },
    ],
    specs: [
      { label: "Material", value: "PA66-GF30" },
      { label: "Inner Height Range", value: "20–80 mm" },
      { label: "Inner Width Range", value: "25–200 mm" },
      { label: "Pitch Options", value: "25–60 mm" },
      { label: "Articulation", value: "3D — lateral + vertical rotation" },
      { label: "Opening Style", value: "Inward and outward" },
      { label: "Application Class", value: "Multi-axis and robotic" },
    ],
    applications: [
      "Articulated robotic arm cable management",
      "Delta and SCARA robot wiring",
      "Multi-axis machining centres",
      "Coordinate measuring machines (CMM)",
      "Welding robot cable guidance",
      "Automated material handling with 3D motion",
    ],
    faq: [
      {
        q: "What is the maximum lateral rotation angle of the MT Series?",
        a: "Lateral rotation capability varies by MT Series size. Typical side deflection angles range from ±10° to ±20° per link depending on size and pitch. Contact RSTECH with your 3D motion envelope for a specific feasibility assessment.",
      },
      {
        q: "Is MT Series suitable for all six-axis robot configurations?",
        a: "MT Series covers a wide range of robotic cable guidance applications. For the most demanding six-axis robot configurations with combined high-speed rotation and rapid extension, Tsubaki's ROBOTRAX system may be the more appropriate solution. Contact RSTECH for a detailed comparison.",
      },
    ],
    industries: ["Robotics", "Automation", "Machine Tools", "Semiconductor"],
  },

  {
    id: "cc-xlt-series",
    name: "XLT Series",
    tagline: "Extra-Large Heavy-Duty for the Most Demanding Installations",
    description:
      "The extra-large, heavy-duty evolution of the XL Series with reinforced construction for the highest additional loads and most demanding industrial environments. XLT combines very large cross-sections with robust material and link engineering for applications where standard XL carriers reach their structural limits.",
    material: "plastic",
    opening: "both",
    innerHeights: "150–400 mm",
    innerWidths: "400–2000 mm",
    imageUrl: "/products/tsubaki/carriers/hero/cc-xlt-series-hero.jpg",
    pitch: "120–250 mm",
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/",
    features: [
      "Maximum cross-section for the largest cable and hose bundles",
      "Reinforced link geometry for extreme additional loads",
      "Modular design for on-site large-format assembly",
      "Both-side opening for maintenance access at scale",
      "Suitable for mining, offshore, and heavy industrial use",
    ],
    benefits: [
      {
        title: "The Largest Cable Carrier Cross-Sections Available",
        body: "With inner widths to 2000 mm and inner heights to 400 mm, the XLT accommodates cable and hose bundles that represent the practical limit of cable carrier technology. This is the solution for ship loaders carrying hydraulic hose sets, offshore platforms with large instrumentation bundles, and major steel mill automation.",
      },
      {
        title: "Reinforced for Extreme Structural Loads",
        body: "The XLT goes beyond XL with reinforced link geometry that resists deformation under the highest additional loads. In very wide carriers at long travel lengths, the additional load and gravitational forces can exceed the structural capacity of standard large carriers — XLT is engineered for this regime.",
      },
      {
        title: "On-Site Assembly for Remote Installations",
        body: "The modular link design allows XLT carriers to be shipped as components and assembled on-site. For installations on offshore platforms, mine sites, or remote industrial facilities where factory-pre-assembled carriers cannot be transported, this is an essential capability.",
      },
    ],
    specs: [
      { label: "Material", value: "PA66-GF reinforced" },
      { label: "Inner Height Range", value: "150–400 mm" },
      { label: "Inner Width Range", value: "400–2000 mm" },
      { label: "Pitch Options", value: "120–250 mm" },
      { label: "Opening Style", value: "Inward and outward" },
      { label: "Assembly", value: "Modular on-site assembly" },
      { label: "Application Class", value: "Extra-large, heavy-duty industrial" },
    ],
    applications: [
      "Large ship loaders and unloaders",
      "Offshore oil and gas platform machinery",
      "Mine and quarry large-scale equipment",
      "Steel mill and rolling mill automation",
      "Large offshore wind turbine installation equipment",
      "Heavy manufacturing transfer lines",
    ],
    faq: [
      {
        q: "How does XLT differ from XL?",
        a: "XLT is the heavy-duty variant, with reinforced link geometry, larger maximum cross-sections (up to 2000 mm wide versus 1500 mm for XL), and higher additional load ratings. XL is appropriate for large industrial applications; XLT is specified where XL would be structurally insufficient.",
      },
    ],
    industries: ["Crane & Port", "Oil & Gas", "Machine Tools"],
  },

  {
    id: "cc-uat",
    name: "UAT Series",
    tagline: "Extending Travel Length Without a Full Support Trough",
    description:
      "A specialist cable carrier design for applications requiring very long unsupported travel lengths without the cost and complexity of a full support trough. The UAT (Underslung Advance Travel) system uses a guide rail rather than a full trough, making it economical for long-travel applications in material handling and crane systems.",
    material: "plastic",
    opening: "both",
    innerHeights: "40–150 mm",
    innerWidths: "75–600 mm",
    imageUrl: "/products/tsubaki/carriers/hero/cc-uat-hero.jpg",
    pitch: "50–120 mm",
    travelLength: "up to 200 m (guided)",
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/",
    features: [
      "Very long guided travel without a full support trough",
      "Guide rail system replaces expensive full trough installation",
      "Lower installation cost for long travel length applications",
      "Suitable for overhead crane and gantry use",
      "Both-side opening for cable installation and maintenance",
    ],
    benefits: [
      {
        title: "Long Travel at Lower Installation Cost",
        body: "Full support troughs for very long travels are expensive in material and installation labour. The UAT's guide rail system provides the necessary carrier guidance at a fraction of the trough cost. For applications at 100–200 m travel lengths, this cost difference is substantial.",
      },
      {
        title: "Ideal for Overhead and Crane Applications",
        body: "Mounting a full trough overhead on a crane gantry or warehouse aisle is often structurally challenging. The UAT's slimmer guide rail integrates more easily into overhead structures and imposes lower structural loads on the supporting framework.",
      },
      {
        title: "Maintained Cable Guidance Over Long Spans",
        body: "Without guidance, very long cable carriers can bow, twist, or develop resonance vibration at speed. The UAT's rail guide system controls the carrier's path over long spans, preventing these failure modes and protecting cables from the additional stress they would produce.",
      },
    ],
    specs: [
      { label: "Material", value: "PA66-GF30" },
      { label: "Inner Height Range", value: "40–150 mm" },
      { label: "Inner Width Range", value: "75–600 mm" },
      { label: "Pitch Options", value: "50–120 mm" },
      { label: "Max Guided Travel", value: "up to 200 m" },
      { label: "Guide System", value: "Rail guide (not full trough)" },
      { label: "Opening Style", value: "Inward and outward" },
    ],
    applications: [
      "Overhead cranes and bridge cranes",
      "Automated warehouse stacker cranes",
      "Gantry automation over long spans",
      "Rail-mounted industrial robots",
      "Long-travel linear axes in automotive plants",
      "Port and logistics handling equipment",
    ],
    faq: [
      {
        q: "What is the difference between a UAT guide rail and a conventional support trough?",
        a: "A conventional support trough fully encloses and supports the returning carrier strand over the entire travel length. A UAT guide rail provides lateral and vertical guidance at intervals without full enclosure. This is lighter, cheaper, and easier to install, while still controlling carrier path deviation over long travels.",
      },
      {
        q: "Can the UAT be used in hanging (underslung) crane applications?",
        a: "Yes — the UAT name includes 'Underslung', reflecting its specific suitability for hanging crane applications. The guide rail is mounted above and the carrier hangs from the fixed end attachment, travelling along the guide as the crane moves. Contact RSTECH for crane-specific application support.",
      },
    ],
    industries: ["Crane & Port", "Automation", "Machine Tools"],
  },

  {
    id: "cc-ls-lsx",
    name: "LS/LSX Series",
    tagline: "Side-Running Carriers for Horizontal Linear Axes",
    description:
      "Side-running cable carriers designed for linear axes where vertical installation space is restricted and the carrier must travel horizontally alongside the machine axis rather than above or below it. The LS/LSX Series provides reliable lateral cable guidance for horizontal and side-mounted applications.",
    material: "plastic",
    opening: "both",
    innerHeights: "25–100 mm",
    innerWidths: "50–300 mm",
    imageUrl: "/products/tsubaki/carriers/hero/cc-ls-lsx-hero.jpg",
    pitch: "32–80 mm",
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/",
    features: [
      "Side-running configuration for restricted vertical space",
      "Lateral cable guidance alongside the machine axis",
      "Both-side opening for easy cable access from either side",
      "Robust construction optimised for horizontal operation",
      "Compatible with standard mounting hardware",
    ],
    benefits: [
      {
        title: "Solves the Vertical Space Constraint",
        body: "Many machine designs lack overhead space for a conventional cable carrier arc. The LS/LSX runs laterally alongside the axis, using horizontal space rather than vertical space. This opens up cable carrier solutions for low-headroom machines, wall-mounted axes, and horizontally-oriented linear systems.",
      },
      {
        title: "Stable Lateral Operation",
        body: "Side-running carriers must resist the tendency to twist or sag under gravity in the lateral plane. The LS/LSX is engineered specifically for this operating orientation, with link geometry that maintains shape and guides cables cleanly without drooping or shifting sideways during motion.",
      },
      {
        title: "Straightforward Integration",
        body: "The LS/LSX uses standard Tsubaki mounting hardware and accessories, simplifying integration into machines already using Tsubaki carrier products elsewhere. A common accessory ecosystem reduces the number of unique parts a machine builder must manage.",
      },
    ],
    specs: [
      { label: "Material", value: "PA66-GF30" },
      { label: "Inner Height Range", value: "25–100 mm" },
      { label: "Inner Width Range", value: "50–300 mm" },
      { label: "Pitch Options", value: "32–80 mm" },
      { label: "Running Direction", value: "Side-running (horizontal)" },
      { label: "Opening Style", value: "Inward and outward" },
      { label: "Operating Temperature", value: "-40°C to +80°C" },
    ],
    applications: [
      "Horizontal linear axis machines with limited vertical space",
      "Wall-mounted automation and handling axes",
      "Low-headroom workshop machinery",
      "Horizontal gantry cross-travel systems",
      "Side-mounted robot traversing units",
      "Palletising systems with restricted overhead clearance",
    ],
    faq: [
      {
        q: "Is the LS/LSX different from the S/SX Steel Series?",
        a: "Yes. The LS/LSX Series is a plastic side-running carrier for horizontal linear applications. The S/SX Steel Series is a steel carrier for the heaviest loads in harsh environments. The naming is unrelated — contact RSTECH to confirm the correct series for your application.",
      },
      {
        q: "Can LS/LSX be converted to vertical operation if required?",
        a: "The LS/LSX is specifically designed for side-running orientation and its structural properties are optimised for the horizontal side-running load case. For vertical applications, a standard vertically-oriented carrier series is the appropriate choice.",
      },
    ],
    industries: ["Machine Tools", "Automation", "Robotics"],
  },

  {
    id: "cc-s-sx",
    name: "S/SX Steel Series",
    tagline: "Maximum Load Capacity for the Harshest Environments",
    description:
      "Extremely robust steel cable carriers for the heaviest loads and most demanding environments. Galvanized (S) or stainless/acid-resistant (SX) steel construction with ATEX EX II 2 GD explosion protection. Inner heights to 578 mm and inner widths to 1800 mm cover the most demanding industrial applications.",
    material: "steel",
    opening: "both",
    innerHeights: "40–578 mm",
    innerWidths: "50–1800 mm",
    pitch: "50–200 mm",
    travelLength: "up to 300 m",
    imageUrl: "/products/tsubaki/carriers/hero/cc-s-sx-hero.jpg",
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/ssx-series/",
    features: [
      "ATEX EX II 2 GD explosion protection certification",
      "Galvanized (S) or stainless/acid-resistant (SX) steel",
      "Sandwich-designed link plates for extreme load capacity",
      "Inner widths in 1 mm increments up to 1800 mm",
      "Hardened bolt joint design for long service life",
    ],
    benefits: [
      {
        title: "ATEX Certification for Explosive Atmospheres",
        body: "In Zone 1 and Zone 2 ATEX environments — oil and gas facilities, chemical plants, grain silos, paint shops — plastic cable carriers are not permissible. The S/SX Steel Series carries EX II 2 GD certification, making it the compliant choice for explosive atmosphere cable management.",
      },
      {
        title: "Steel Strength for Maximum Cable Loads",
        body: "Steel link plates in sandwich construction carry additional loads that would buckle and deform any plastic carrier design. Applications with very large power cable bundles, heavy hydraulic hoses, or pneumatic supply lines require the structural stiffness that only steel provides across wide cross-sections.",
      },
      {
        title: "Stainless Steel for Chemical and Coastal Environments",
        body: "The SX variant uses stainless or acid-resistant steel — essential for offshore, coastal, chemical processing, and food production environments where carbon steel corrodes rapidly. The SX maintains structural integrity and appearance where a galvanised carrier would fail within months.",
      },
    ],
    specs: [
      { label: "Material (S)", value: "Galvanized steel" },
      { label: "Material (SX)", value: "Stainless / acid-resistant steel" },
      { label: "Inner Height Range", value: "40–578 mm" },
      { label: "Inner Width Range", value: "50–1800 mm (1 mm increments)" },
      { label: "Pitch Options", value: "50–200 mm" },
      { label: "Max Travel Length", value: "up to 300 m" },
      { label: "ATEX Certification", value: "EX II 2 GD" },
      { label: "Link Design", value: "Sandwich plates, hardened bolt joints" },
    ],
    applications: [
      "Oil and gas platform cable management",
      "Chemical plant process equipment",
      "Crane and port handling machinery (SX — coastal)",
      "Offshore wind turbine installation vessels",
      "Mining and quarry heavy machinery",
      "Steel mill and foundry automation",
    ],
    faq: [
      {
        q: "When must I use steel over plastic in an industrial setting?",
        a: "Steel is mandatory for ATEX-certified explosive atmosphere applications. It is also the correct choice when additional loads exceed plastic carrier ratings, when very wide cross-sections (over 600 mm) are needed, when the operating temperature exceeds plastic ratings, or in outdoor coastal and chemical environments requiring SX corrosion resistance.",
      },
      {
        q: "What is the difference between the S and SX variants?",
        a: "S uses galvanized carbon steel — suitable for general industrial, indoor, and moderately humid environments. SX uses stainless or acid-resistant steel for applications with chemical exposure, seawater, aggressive cleaning agents, or food-grade hygiene requirements where galvanised steel corrodes.",
      },
      {
        q: "Can S/SX carriers be sourced in Israel for oil and gas projects?",
        a: "Yes. RSTECH Electronics can supply S/SX Steel Series carriers as Tsubaki's authorized Israeli representative. We can support ATEX documentation requirements. Contact us with your project specifications for a quotation.",
      },
    ],
    industries: ["Crane & Port", "Machine Tools", "Oil & Gas"],
  },

  {
    id: "cc-s-sx-tubes",
    name: "S/SX Steel Series — Tube Carriers",
    tagline: "Steel Tube-Style Enclosed Cable Protection",
    description:
      "Fully enclosed steel tube cable carriers offering maximum mechanical protection for cables in the harshest environments. The tube profile completely shields cable contents from chips, coolant, weld spatter, and mechanical impact while retaining the structural and ATEX advantages of the steel S/SX Series.",
    material: "steel",
    opening: "closed",
    innerHeights: "40–200 mm",
    innerWidths: "50–600 mm",
    imageUrl: "/products/tsubaki/carriers/hero/cc-s-sx-tubes-hero.jpg",
    pitch: "50–150 mm",
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/ssx-series/",
    features: [
      "Fully enclosed tube profile for maximum cable protection",
      "Steel construction for extreme environments",
      "Shields cables completely from chips, coolant, and weld spatter",
      "Galvanized (S) or stainless (SX) variants available",
      "ATEX compatible construction",
    ],
    benefits: [
      {
        title: "Total Mechanical Shielding",
        body: "Open-style carriers expose cables to chips, coolant spray, weld spatter, and mechanical impact. In heavy machining centres, robotic welding cells, and foundry environments, these exposures cause premature cable jacket degradation and eventual failures. The S/SX Tube carrier's fully enclosed profile gives cables complete protection from the machining environment.",
      },
      {
        title: "Ideal for Welding and Foundry Environments",
        body: "Weld spatter is one of the most destructive cable hazards in manufacturing. Even heat-resistant cable jackets fail under direct spatter contact over time. The steel tube housing provides a sacrificial barrier that absorbs spatter impact, protecting cables inside and extending their service life dramatically in welding cell applications.",
      },
      {
        title: "Steel Strength Plus Total Enclosure",
        body: "The tube design combines the structural load capacity of the S/SX Steel Series with the added benefit of full enclosure. Applications requiring both maximum load capacity and maximum cable protection — such as foundry automation and heavy presswork — find the S/SX Tube the only viable solution.",
      },
    ],
    specs: [
      { label: "Material", value: "Galvanized (S) or stainless (SX) steel" },
      { label: "Profile Style", value: "Fully enclosed tube" },
      { label: "Inner Height Range", value: "40–200 mm" },
      { label: "Inner Width Range", value: "50–600 mm" },
      { label: "Pitch Options", value: "50–150 mm" },
      { label: "Opening Style", value: "Sealed (access via end fittings)" },
      { label: "Cable Protection", value: "Full enclosure — chips, coolant, weld spatter" },
      { label: "ATEX", value: "Compatible" },
    ],
    applications: [
      "Robotic welding cell cable management",
      "Foundry and hot-metal processing automation",
      "Heavy press and stamping line cable guidance",
      "High-pressure coolant machine tool environments",
      "Explosive atmosphere applications (ATEX)",
      "Outdoor machinery with high contamination exposure",
    ],
    faq: [
      {
        q: "How are cables installed in an enclosed tube carrier?",
        a: "Cables are threaded through the tube carrier from one end during installation. Unlike open or both-side-opening carriers, access for cable replacement requires working from the carrier ends. Tube carriers are specified for applications where the cable set is stable and replacement frequency is low.",
      },
      {
        q: "Is the S/SX Tube suitable for very high travel speeds?",
        a: "The enclosed tube profile adds weight compared to open steel carriers, which affects the maximum permissible speed and additional load. For high-speed applications, consult RSTECH with full carrier weight and travel data for a dynamics calculation.",
      },
    ],
    industries: ["Machine Tools", "Crane & Port", "Oil & Gas"],
  },

  {
    id: "cc-robotrax",
    name: "ROBOTRAX® System",
    tagline: "The Cable Carrier Built for Three-Dimensional Robotic Motion",
    description:
      "The only cable carrier engineered specifically for three-dimensional swivel and rotation movements in robotic applications. Three separate chambers organise cables with an integrated steel cable supporting up to 10g acceleration — purpose-built for six-axis industrial robots.",
    material: "plastic",
    opening: "open",
    innerHeights: "85–160 mm (outer dimension)",
    innerWidths: "42–120 mm",
    pitch: "50 mm",
    imageUrl: "/products/tsubaki/carriers/hero/cc-robotrax-hero.jpg",
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/robotrax/",
    features: [
      "Three-dimensional swivel and rotation movements",
      "Three separate cable chambers for cable organisation",
      "Integrated steel cable supports up to 10g acceleration",
      "Optional heat shields and protective covers",
      "Fast open-design for direct cable press-in",
    ],
    benefits: [
      {
        title: "The Only Carrier Engineered for Six-Axis Robot Motion",
        body: "A six-axis robot creates cable motion that combines extension, lateral rotation, twist, and acceleration simultaneously. Standard linear carriers cannot follow this motion without fighting the robot's movement. ROBOTRAX is specifically engineered for multi-dimensional articulation — it follows the robot rather than restraining it.",
      },
      {
        title: "10g Acceleration Support",
        body: "Modern industrial robots accelerate at rates that would tear conventional cable management free from its mounts. ROBOTRAX's integrated steel support cable anchors the carrier contents against accelerations up to 10g, preventing cable whip and connector damage during rapid robotic trajectories.",
      },
      {
        title: "Three-Chamber Organisation Prevents Cable Interaction",
        body: "In a free cable bundle, power cables, signal cables, and pneumatic hoses move independently and tangle against each other during three-dimensional motion. ROBOTRAX's three separate chambers keep each cable type segregated — preventing wear from inter-cable contact and making cable identification straightforward during maintenance.",
      },
    ],
    specs: [
      { label: "Material", value: "PA66 + integrated steel support cable" },
      { label: "Motion Capability", value: "3D — swivel + rotation" },
      { label: "Max Acceleration", value: "10g" },
      { label: "Cable Chambers", value: "3 separate chambers" },
      { label: "Pitch", value: "50 mm" },
      { label: "Opening Style", value: "Open — direct cable press-in" },
      { label: "Accessories", value: "Heat shields, protective covers" },
    ],
    applications: [
      "Six-axis industrial robot cable management",
      "Welding robot cable and hose guidance",
      "Painting and coating robot installations",
      "Pick-and-place robot with 3D motion",
      "Collaborative robot (cobot) cable management",
      "Handling and assembly robot cells",
    ],
    faq: [
      {
        q: "Can ROBOTRAX replace cable conduit systems on six-axis robots?",
        a: "ROBOTRAX is specifically designed to outperform both loose cable bundles and rigid conduit systems on six-axis robots. Unlike conduit, it articulates freely in 3D. Unlike loose bundles, it organises and protects cables in three separate chambers. It is the preferred solution for high-cycle robotic applications.",
      },
      {
        q: "Is ROBOTRAX compatible with all robot brands?",
        a: "ROBOTRAX is a universal accessory that can be adapted to most industrial robot brands including KUKA, FANUC, ABB, Yaskawa, and others. Tsubaki offers robot-specific mounting kits. Contact RSTECH with your robot model for a compatibility confirmation.",
      },
      {
        q: "Does ROBOTRAX require special cables inside?",
        a: "For maximum service life, Tsubaki recommends TRAXLINE cables rated for robotic applications (high torsional flex life, minimum twisting resistance). Using standard cables may result in premature failure. Contact RSTECH for a complete robot cable set recommendation.",
      },
    ],
    industries: ["Robotics", "Automation", "Semiconductor", "Machine Tools"],
  },

  {
    id: "cc-cleanveyor",
    name: "CLEANVEYOR",
    tagline: "ISO Class 1 Certified Cable Carrier for Critical Cleanrooms",
    description:
      "Cleanroom cable carrier system certified to ISO Class 1 — the highest cleanliness rating achievable. Free-standing guided design eliminates particle generation at speeds to 2 m/s and 4G acceleration, delivering fully compliant cable management for semiconductor and pharmaceutical production.",
    material: "plastic",
    opening: "open",
    innerHeights: "30–80 mm",
    innerWidths: "25–150 mm",
    pitch: "30–60 mm",
    travelLength: "up to 10 m",
    imageUrl: "/products/tsubaki/carriers/hero/cc-cleanveyor-hero.jpg",
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/cleanveyor/",
    features: [
      "Certified cleanroom ISO Class 1 — highest standard",
      "Zero particle generation from friction",
      "Max travel speed 2 m/s with 4G acceleration",
      "-10°C to +80°C operating temperature range",
      "Compatible with 3–10 mm cable/tube diameters",
    ],
    benefits: [
      {
        title: "ISO Class 1 Certification — The Highest Standard",
        body: "ISO Class 1 is the most stringent cleanroom classification, permitting fewer than 10 particles ≥0.1 µm per cubic metre. Most cable carriers cannot operate in ISO Class 1 environments at all. CLEANVEYOR is specifically certified for ISO Class 1 operation — providing documented, traceable compliance for cleanroom qualification.",
      },
      {
        title: "Zero Particle Generation by Design",
        body: "Conventional cable carrier link connections generate particles through link-on-link abrasion during every direction change. CLEANVEYOR's free-standing guided design eliminates all friction contact points, producing literally zero particles from carrier operation. This fundamental design principle is the basis for its ISO Class 1 certification.",
      },
      {
        title: "4G Acceleration in a Certified Cleanroom System",
        body: "Semiconductor wafer handlers and flat panel display robots must move fast to achieve throughput targets. CLEANVEYOR supports 4G acceleration at 2 m/s — delivering the dynamic performance required by high-throughput handlers without compromising cleanroom certification.",
      },
    ],
    specs: [
      { label: "Cleanroom Rating", value: "ISO Class 1 (ISO 14644-1) certified" },
      { label: "Particle Generation", value: "Zero — link-free design" },
      { label: "Max Travel Speed", value: "2 m/s" },
      { label: "Max Acceleration", value: "4G" },
      { label: "Operating Temperature", value: "-10°C to +80°C" },
      { label: "Cable/Tube Diameter", value: "3–10 mm" },
      { label: "Max Travel Length", value: "up to 10 m" },
      { label: "Inner Width Range", value: "25–150 mm" },
    ],
    applications: [
      "Semiconductor wafer handling equipment",
      "Flat panel display manufacturing robots",
      "Pharmaceutical production automation",
      "Biotechnology process equipment",
      "Precision optical assembly in cleanrooms",
      "Critical microelectronics manufacturing",
    ],
    faq: [
      {
        q: "What documentation does CLEANVEYOR provide for cleanroom qualification?",
        a: "Tsubaki provides ISO Class 1 certification documentation for CLEANVEYOR. This includes particle count test reports and material certificates — the documentation required by cleanroom qualification engineers for IQOQ/PQ validation. Contact RSTECH for the full documentation package.",
      },
      {
        q: "Is CLEANVEYOR suitable for vacuum environments?",
        a: "Standard CLEANVEYOR is designed for atmospheric cleanroom conditions. For vacuum or ultra-high vacuum (UHV) applications, specific material and outgassing requirements apply. Contact RSTECH to discuss vacuum-compatible cable carrier solutions.",
      },
      {
        q: "What happens if a cable in the CLEANVEYOR requires replacement?",
        a: "CLEANVEYOR's open design allows cables to be pressed in and removed without tools. Cable replacement is possible without removing the carrier from the machine, minimising cleanroom process disruption during maintenance.",
      },
    ],
    industries: ["Semiconductor", "Medical", "Cleanroom"],
  },

  {
    id: "cc-flatveyor",
    name: "FLATVEYOR",
    tagline: "Ultra-Low Profile Cleanroom Cable Management",
    description:
      "Ultra-low-profile cable management system for cleanroom applications. Compact flat design minimises installation footprint while delivering quiet, particle-minimised operation for sensitive semiconductor and flat panel display production equipment.",
    material: "plastic",
    opening: "open",
    innerHeights: "8–25 mm",
    innerWidths: "50–400 mm",
    pitch: "20–40 mm",
    travelLength: "up to 60 m",
    variantCount: 25,
    imageUrl: "/products/tsubaki/carriers/hero/cc-flatveyor-hero.jpg",
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/flatveyor/",
    features: [
      "Ultra-low profile from 8 mm inner height",
      "Cleanroom-optimised design with particle-minimised operation",
      "Quiet operation for sensitive semiconductor environments",
      "Sustainable ZP (zero-plastic) variant available",
      "Ideal for semiconductor flat panel display equipment",
    ],
    benefits: [
      {
        title: "Minimum Height for Maximum Design Freedom",
        body: "The FLATVEYOR's ultra-low profile allows cable management in machine envelopes where even a 50 mm inner height carrier would be impossible. Flat panel display handlers, wafer stage assemblies, and precision gantries can all benefit from cable guidance that adds minimal height to the moving assembly.",
      },
      {
        title: "Particle-Minimised for Clean Environments",
        body: "FLATVEYOR's design minimises friction contact surfaces and particle generation without requiring full ISO Class 1 certification infrastructure. For applications in ISO Class 3–6 cleanrooms — covering most semiconductor back-end and advanced packaging equipment — FLATVEYOR provides a practical, cost-effective clean cable management solution.",
      },
      {
        title: "Available in a Sustainable ZP Variant",
        body: "The FLATVEYOR ZP uses zero-plastic compound materials, addressing sustainability requirements in semiconductor and electronics manufacturing where environmental impact of equipment components is increasingly part of procurement criteria.",
      },
    ],
    specs: [
      { label: "Material", value: "Cleanroom-optimised polymer (ZP variant available)" },
      { label: "Inner Height Range", value: "8–25 mm" },
      { label: "Inner Width Range", value: "50–400 mm" },
      { label: "Pitch Options", value: "20–40 mm" },
      { label: "Max Travel Length", value: "up to 60 m" },
      { label: "Opening Style", value: "Open — top access" },
      { label: "Application", value: "Cleanroom, semiconductor, FPD" },
      { label: "Particle Generation", value: "Minimised" },
    ],
    applications: [
      "Semiconductor flat panel display equipment",
      "Wafer stage and handler cable management",
      "Precision flat-bed plotting machines",
      "LCD/OLED panel handling automation",
      "Low-profile metrology gantries",
      "Advanced packaging and interconnect equipment",
    ],
    faq: [
      {
        q: "What is the minimum inner height available in FLATVEYOR?",
        a: "The FLATVEYOR is available from 8 mm inner height, making it the thinnest cable carrier in the Tsubaki portfolio. This is designed specifically for flat panel display stage and wafer handler applications with extreme height constraints.",
      },
      {
        q: "What is the FLATVEYOR ZP variant?",
        a: "ZP stands for Zero Plastic — FLATVEYOR ZP uses materials formulated to minimise or eliminate conventional petroleum-derived plastic content, supporting sustainability targets in the semiconductor and electronics industry. Contact RSTECH for ZP material details and availability.",
      },
      {
        q: "Is FLATVEYOR ISO Class 1 certified?",
        a: "FLATVEYOR is designed for cleanroom use with particle-minimised operation, but it is not certified to ISO Class 1 in the same manner as CLEANVEYOR. For ISO Class 1 certification requirements, CLEANVEYOR is the appropriate solution.",
      },
    ],
    industries: ["Semiconductor", "Medical", "Cleanroom"],
  },

  {
    id: "cc-flatveyor-zp",
    name: "FLATVEYOR ZP",
    tagline: "Sustainable Zero-Plastic Cleanroom Cable Management",
    description:
      "The sustainability-focused evolution of FLATVEYOR, using zero-plastic compound materials to address environmental requirements in semiconductor and electronics manufacturing. FLATVEYOR ZP retains the ultra-low profile and cleanroom-optimised performance of FLATVEYOR while meeting green manufacturing procurement criteria.",
    material: "plastic",
    opening: "open",
    innerHeights: "8–25 mm",
    innerWidths: "50–400 mm",
    pitch: "20–40 mm",
    imageUrl: "/products/tsubaki/carriers/hero/cc-flatveyor-zp-hero.jpg",
    supplierUrl: "https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/flatveyor/",
    features: [
      "Zero-plastic compound materials for sustainability compliance",
      "Ultra-low profile for the tightest cleanroom installations",
      "Particle-minimised operation for cleanroom compatibility",
      "Dimensionally identical to standard FLATVEYOR — drop-in substitute",
      "Meets green manufacturing procurement criteria and ESG targets",
    ],
    benefits: [
      {
        title: "Meets Green Procurement Requirements Without Compromise",
        body: "Semiconductor fabs and electronics manufacturers are under increasing pressure to document the environmental impact of all equipment components. FLATVEYOR ZP's zero-plastic formulation provides a concrete, documentable answer to cleanroom equipment sustainability requirements — without sacrificing the flat profile or cleanroom performance of the standard FLATVEYOR.",
      },
      {
        title: "Same Ultra-Low Profile, Different Material",
        body: "FLATVEYOR ZP maintains the 8–25 mm inner height range and ultra-low profile of the standard FLATVEYOR. Design engineers can substitute FLATVEYOR ZP for FLATVEYOR in existing machine designs without dimensional changes — only the material specification changes.",
      },
      {
        title: "Supports Corporate Sustainability Reporting",
        body: "With supply chain sustainability reporting now mandated in many semiconductor customer contracts, being able to specify zero-plastic cable carriers provides measurable contribution to Scope 3 emissions and materials impact reduction targets.",
      },
    ],
    specs: [
      { label: "Material", value: "Zero-plastic compound (ZP formulation)" },
      { label: "Inner Height Range", value: "8–25 mm" },
      { label: "Inner Width Range", value: "50–400 mm" },
      { label: "Pitch Options", value: "20–40 mm" },
      { label: "Opening Style", value: "Open — top access" },
      { label: "Application", value: "Cleanroom, semiconductor, FPD" },
      { label: "Sustainability", value: "Zero-plastic formulation" },
      { label: "Compatibility", value: "Drop-in for standard FLATVEYOR" },
    ],
    applications: [
      "Semiconductor wafer and FPD equipment with sustainability mandates",
      "Green-certified cleanroom equipment builds",
      "Advanced packaging automation with ESG requirements",
      "Electronics manufacturing with sustainability reporting",
      "Medical device automation with green credentials",
      "LCD/OLED panel manufacturing equipment",
    ],
    faq: [
      {
        q: "What does 'zero-plastic' mean for FLATVEYOR ZP?",
        a: "Zero-plastic refers to the material compound used — it eliminates or minimises conventional petroleum-derived plastic polymer content. The exact formulation uses bio-based or alternative compound materials. Contact RSTECH for full material composition and sustainability documentation.",
      },
      {
        q: "Is FLATVEYOR ZP mechanically interchangeable with standard FLATVEYOR?",
        a: "Yes. FLATVEYOR ZP is dimensionally equivalent to standard FLATVEYOR, designed as a drop-in sustainable substitute. Mechanical properties are equivalent; confirm with RSTECH if your application involves extreme temperature or chemical exposure.",
      },
      {
        q: "Can RSTECH supply sustainability certification documentation for FLATVEYOR ZP?",
        a: "Yes. Tsubaki provides material certificates and sustainability documentation for FLATVEYOR ZP. RSTECH can supply these documents as part of the standard order package. Contact us to confirm the specific documentation your procurement team requires.",
      },
    ],
    industries: ["Semiconductor", "Medical", "Cleanroom"],
  },
];
