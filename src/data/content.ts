// Centralised MOCK/DEMO data for the TechnoPerfect Engineers LLP demo website.
// No backend, no database — everything here is static seed data that can be
// overridden by the admin panel through localStorage.

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

// Every key MUST point to a different image. Never reuse a value.
export const images = {
  heroImage: u("photo-1565043666747-69f6646db940", 1800),
  aboutImage: u("photo-1581091226825-a6a2a5aee158"),
  cncImage: u("photo-1504328345606-18bbc8c9d7d1"),
  vmcImage: u("photo-1518709268805-4e9042af2176"),
  grindingImage: u("photo-1531482615713-2afd69097998"),
  inspectionImage: u("photo-1567789884554-0b844b597180"),
  hydraulicImage: u("photo-1573164713988-8665fc963095"),
  tractorPartsImage: u("photo-1581092160562-40aa08e78837"),
  testingPartsImage: u("photo-1581092918056-0c4c3acd3789"),
  detentBlockImage: u("photo-1581093588401-fbb62a02f120"),
  fuelPumpImage: u("photo-1581094794329-c8112a89af12"),
  precisionPartsImage: u("photo-1516110833967-0b5716ca1387"),
  customPartsImage: u("photo-1533630018502-9e58b0e0ba03"),
  portfolioImage1: u("photo-1590959651373-a3db0f38a961"),
  portfolioImage2: u("photo-1611288875785-f9f0b0d5f10a"),
  portfolioImage3: u("photo-1504917595217-d4dc5ebe6122"),
  portfolioImage4: u("photo-1580983218765-f663bec07b37"),
  portfolioImage5: u("photo-1585909695284-32d2985ac9c0"),
  portfolioImage6: u("photo-1487875961445-47a00398c267"),
  galleryImage1: u("photo-1542626991-cbc4e32524cc"),
  galleryImage2: u("photo-1555949963-aa79dcee981c"),
  galleryImage3: u("photo-1568667256549-094345857637"),
  galleryImage4: u("photo-1574269909862-7e1d70bb8078"),
  galleryImage5: u("photo-1550009158-9ebf69173e03"),
  galleryImage6: u("photo-1526406915894-7bcd65f60845"),
  qualityImage: u("photo-1581092580497-e0d23cbdf1dc"),
  contactImage: u("photo-1581092795360-fd1ca04f0952"),
};

export type Banner = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  cta: string;
  image: string;
  active: boolean;
};

export const banners: Banner[] = [
  {
    id: "b1",
    label: "PRECISION ENGINEERING & MANUFACTURING",
    title: "Precision Towards Excellence",
    subtitle:
      "Precision-machined hydraulic pump components and sub-assemblies engineered for quality, reliability and consistent performance.",
    cta: "Request an Enquiry",
    image: images.heroImage,
    active: true,
  },
];

export const company = {
  name: "TechnoPerfect Engineers LLP",
  partner: "Mr. Sandip Godhade",
  phone: "9764376881",
  email: "technoperfectengineers2023@gmail.com",
  address:
    "Plot No.- 23/24, Sector A, Parvati Co-Operative Industrial Estate, Yadrav, Kolhapur, Maharashtra - 416146, India",
  ctaText: "Send Your Requirement",
  tagline: "Precision Engineering. Reliable Manufacturing. Consistent Quality.",
};

export type Service = {
  id: string;
  title: string;
  icon: string;
  short: string;
  detail: string;
  active: boolean;
};

export const services: Service[] = [
  {
    id: "s1",
    title: "CNC Turning",
    icon: "turning",
    short: "Turned components produced on CNC turning centres for repeatable accuracy.",
    detail:
      "CNC turning of cylindrical precision components on our turning centres, supported by in-process inspection and consistent process control.",
    active: true,
  },
  {
    id: "s2",
    title: "Vertical Machining",
    icon: "vmc",
    short: "Prismatic machining on vertical machining centres with rigid fixturing.",
    detail:
      "Vertical machining of housings, blocks and prismatic components using programmed cycles and validated fixtures for batch consistency.",
    active: true,
  },
  {
    id: "s3",
    title: "Surface Grinding",
    icon: "grinding",
    short: "Surface finishing operations for flat and critical faces.",
    detail:
      "Surface grinding operations supporting flatness and finish requirements on machined components before assembly.",
    active: true,
  },
  {
    id: "s4",
    title: "Hydraulic Pump Components",
    icon: "hydraulic",
    short: "Manufacturing of high-quality hydraulic pump components.",
    detail:
      "Core focus area of the company — manufacture of hydraulic pump components for reputed customers with disciplined quality practices.",
    active: true,
  },
  {
    id: "s5",
    title: "Hydraulic Pump Sub-Assemblies",
    icon: "assembly",
    short: "Sub-assembly build-up of machined hydraulic pump parts.",
    detail:
      "Assembly of machined components into hydraulic pump sub-assemblies, handled with documented process steps and inspection checks.",
    active: true,
  },
  {
    id: "s6",
    title: "Precision Inspection",
    icon: "inspection",
    short: "Dimensional inspection using digital instruments and gauges.",
    detail:
      "Inspection supported by digital height gauges, vernier calipers, micrometers, air gauges and outsourced CMM / contour tracing facilities.",
    active: true,
  },
  {
    id: "s7",
    title: "Industrial Component Manufacturing",
    icon: "factory",
    short: "General precision component manufacturing for industrial customers.",
    detail:
      "Machining of industrial components across customer segments, supported by skilled operators and planned production control.",
    active: true,
  },
  {
    id: "s8",
    title: "Custom Engineering Solutions",
    icon: "custom",
    short: "Component development support based on customer drawings.",
    detail:
      "New part development support with process planning, fixturing approach and part proving carried out with the customer.",
    active: true,
  },
];

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  application: string;
  image: string;
  active: boolean;
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Hydraulic Gear Pump Parts",
    category: "Hydraulic",
    description: "Precision machined parts used in hydraulic gear pump builds.",
    application: "Hydraulic gear pump manufacturing.",
    image: images.hydraulicImage,
    active: true,
  },
  {
    id: "p2",
    name: "Tractor Segment Components",
    category: "Automotive",
    description: "Machined components supplied for the tractor segment.",
    application: "Agricultural equipment manufacturing.",
    image: images.tractorPartsImage,
    active: true,
  },
  {
    id: "p3",
    name: "Testing Machine Parts",
    category: "Industrial",
    description: "Components manufactured for testing machine builders.",
    application: "Industrial testing equipment.",
    image: images.testingPartsImage,
    active: true,
  },
  {
    id: "p4",
    name: "Support Fuel Injection Pump Components",
    category: "Automotive",
    description: "Support components associated with fuel injection pump assemblies.",
    application: "Fuel injection pump manufacturing.",
    image: images.fuelPumpImage,
    active: true,
  },
  {
    id: "p5",
    name: "Detent Block",
    category: "Precision",
    description: "Machined detent block produced to customer drawing.",
    application: "Hydraulic and control assemblies.",
    image: images.detentBlockImage,
    active: true,
  },
  {
    id: "p6",
    name: "Hydraulic Components",
    category: "Hydraulic",
    description: "General hydraulic components machined in batch quantities.",
    application: "Hydraulic systems and pump builds.",
    image: images.cncImage,
    active: true,
  },
  {
    id: "p7",
    name: "Precision Machined Components",
    category: "Precision",
    description: "Turned and milled precision components for industrial customers.",
    application: "General industrial assemblies.",
    image: images.precisionPartsImage,
    active: true,
  },
  {
    id: "p8",
    name: "Custom Engineered Parts",
    category: "Custom",
    description: "Components developed as per customer-supplied drawings.",
    application: "Customer-specific engineering requirements.",
    image: images.customPartsImage,
    active: true,
  },
];

export type Facility = {
  id: string;
  name: string;
  qty: string;
  specs: { label: string; value: string }[];
  image: string;
};

export const facilities: Facility[] = [
  {
    id: "f1",
    name: "CNC Turning Centre",
    qty: "4 units available",
    specs: [
      { label: "Make", value: "Pride Machine Tools Bangalore" },
      { label: "Spindle Nose", value: "A2-6" },
      { label: "Maximum Turning", value: "Diameter 300 mm / Length 500 mm" },
    ],
    image: images.vmcImage,
  },
  {
    id: "f2",
    name: "Vertical Machining Centre",
    qty: "5 units available",
    specs: [
      { label: "Make", value: "BFW, AMS, Jyoti" },
      { label: "Spindle Type", value: "BT40" },
      { label: "Table Size", value: "1000 x 450 x 500 mm" },
    ],
    image: images.grindingImage,
  },
  {
    id: "f3",
    name: "Surface Grinder",
    qty: "2 units available",
    specs: [
      { label: "Make", value: "Proth, Snow" },
      { label: "Table Sizes", value: "600 x 300 mm / 1000 x 350 mm" },
    ],
    image: images.portfolioImage3,
  },
];

export const instruments = [
  {
    id: "i1",
    title: "Advanced Measurement",
    items: [
      "CMM — outsourced to nearby facility",
      "Contour Tracer — outsourced to nearby facility",
      "Roughness Tester — Mitutoyo Make",
      "2D & 3D Height Master — Trimos Make Model V7",
    ],
  },
  {
    id: "i2",
    title: "Digital Measuring Tools",
    items: [
      "Digital Height Gauge — 2 nos.",
      "Digital Vernier Caliper — 2 nos.",
      "Digital Micrometer — 2 nos.",
    ],
  },
  {
    id: "i3",
    title: "Specialized Gauges",
    items: [
      "Air Gauge — 2 nos.",
      "Baker make",
      "Used for high precision internal dimension measurement",
    ],
  },
];

export const qualityPolicy =
  "At TechnoPerfect Engineers LLP, we are committed to delivering engineering products and services that consistently meet customer requirements and applicable statutory and regulatory standards, while continuously enhancing customer satisfaction.";

export const qualityPillars = [
  {
    title: "Reliable Delivery",
    text: "Ensuring reliable and timely delivery of high-quality products to support customer operational success.",
  },
  {
    title: "Continuous Improvement",
    text: "Relentlessly improving processes and systems to achieve manufacturing excellence.",
  },
  {
    title: "Employee Involvement",
    text: "Fostering active employee involvement, regular training and strong personal accountability.",
  },
  {
    title: "Engineering Practices",
    text: "Adoption of appropriate advanced engineering practices, techniques and modern technologies.",
  },
];

export type Objective = {
  id: string;
  metric: string;
  description: string;
  status: string;
  bar: number;
};

export const objectives: Objective[] = [
  { id: "o1", metric: "> 95%", description: "Customer Satisfaction", status: "Objective", bar: 95 },
  { id: "o2", metric: "< 1%", description: "Defects / Rework", status: "Objective", bar: 99 },
  { id: "o3", metric: "100%", description: "Compliance", status: "Objective", bar: 100 },
  { id: "o4", metric: "> 95%", description: "On-Time Delivery", status: "Objective", bar: 95 },
  {
    id: "o5",
    metric: "1 / Month",
    description: "Employee Training Session",
    status: "Objective",
    bar: 80,
  },
  {
    id: "o6",
    metric: "Continuous",
    description: "Process Efficiency Improvement",
    status: "Objective",
    bar: 85,
  },
  { id: "o7", metric: "100%", description: "Vendor Approval", status: "Objective", bar: 100 },
];

export type Certification = {
  id: string;
  title: string;
  status: string;
  description: string;
};

export const certifications: Certification[] = [
  {
    id: "c1",
    title: "ISO 9001:2015",
    status: "UNDER PROCESS",
    description:
      "Quality Management System standard covering the manufacturing and supply of hydraulic pump components.",
  },
  {
    id: "c2",
    title: "Customer PPAP",
    status: "COMPLIANCE VALIDATED",
    description:
      "Production Part Approval Process documentation and compliance records for key reputed clients.",
  },
  {
    id: "c3",
    title: "Statutory & Safety",
    status: "100% COMPLIANT",
    description:
      "Adherence to applicable local, state and national regulations and safety standards for manufacturing facilities.",
  },
];

export const associates = [
  {
    id: "a1",
    name: "Yesate Engineering Works",
    established: "2022",
    location: "Parvati Industrial Estate, Yadrav (Ichalkaranji)",
    detail:
      "Job work on labor charges for various customers in Kolhapur and Sangli districts.",
  },
  {
    id: "a2",
    name: "Microtech Enterprises",
    established: "2025",
    location: "Tool Room facilities",
    detail:
      "Tool Room facilities for manufacturing of Jigs & Fixtures, Special Gauges and Custom Tooling Solutions.",
  },
];

export type Customer = {
  id: string;
  name: string;
  tier: "Tier 1" | "Tier 2";
  description: string;
};

export const customers: Customer[] = [
  {
    id: "cu1",
    name: "Jugai Iron & Steel Pvt. Ltd.",
    tier: "Tier 1",
    description: "Direct manufacturing customer.",
  },
  {
    id: "cu2",
    name: "HKClimax Engineering Pvt. Ltd.",
    tier: "Tier 1",
    description: "Direct manufacturing customer.",
  },
  {
    id: "cu3",
    name: "Hitech Balancing & Engineering Industries",
    tier: "Tier 1",
    description: "Direct manufacturing customer.",
  },
  { id: "cu4", name: "Space EV Tech", tier: "Tier 1", description: "Direct manufacturing customer." },
  {
    id: "cu5",
    name: "Bosch Rexroth (Gear Pump Division)",
    tier: "Tier 2",
    description: "End customer through Tier-1 supply chain.",
  },
  {
    id: "cu6",
    name: "Danfoss Systems Pvt. Ltd.",
    tier: "Tier 2",
    description: "End customer through Tier-1 supply chain.",
  },
];

export type TeamMember = {
  id: string;
  name: string;
  designation: string;
  experience: string;
  description: string;
};

export const team: TeamMember[] = [
  {
    id: "t1",
    name: "Mr. Sandip Godhade",
    designation: "Partner / Plant Head",
    experience: "20+ years",
    description: "Experience in handling operations across multiple customer bases.",
  },
  {
    id: "t2",
    name: "Mr. Pushnal Khot",
    designation: "Partner / Quality Head",
    experience: "20+ years",
    description: "Thorough knowledge of QMS, EHS & HSE compliance.",
  },
  {
    id: "t3",
    name: "Mr. Amol Patil",
    designation: "Partner / D&A & PPC",
    experience: "20+ years",
    description: "Specialized experience in rigorous new part development.",
  },
  {
    id: "t4",
    name: "Mr. Pritam Yease",
    designation: "Partner / PPC Manager",
    experience: "10+ years",
    description: "Focus on engineering/production planning and control.",
  },
  {
    id: "t5",
    name: "Mr. Mansoor Shaikh",
    designation: "Production Supervisor",
    experience: "20+ years",
    description: "Experience in CNC/VMC programming & part proving.",
  },
  {
    id: "t6",
    name: "Mr. Keshav Naral",
    designation: "Production Supervisor",
    experience: "20+ years",
    description: "Experience in CNC/VMC programming & part proving.",
  },
  {
    id: "t7",
    name: "Machine Operators",
    designation: "25 Nos.",
    experience: "10+ years average",
    description:
      "Highly skilled operators with an average of 10+ years experience in engineering industry and CNC/VMC machines.",
  },
];

export const whyChooseUs = [
  {
    title: "Skilled Workforce",
    icon: "people",
    text: "25 machine operators with an average of 10+ years experience on CNC/VMC machines.",
  },
  {
    title: "Precision Machining",
    icon: "turning",
    text: "CNC turning, vertical machining and surface grinding under one roof.",
  },
  {
    title: "Rapid Capacity Expansion",
    icon: "growth",
    text: "Expansion of manufacturing capacity to serve diverse customers with quality components.",
  },
  {
    title: "Experienced Leadership",
    icon: "shield",
    text: "Partner team carrying 10–20+ years of engineering and quality experience.",
  },
  {
    title: "Reliable Delivery",
    icon: "truck",
    text: "Reliable and timely delivery of high-quality products supporting customer operations.",
  },
  {
    title: "Customer-Centric Approach",
    icon: "handshake",
    text: "Manufacturing driven by customer requirements and continuous satisfaction improvement.",
  },
  {
    title: "Strategic Location",
    icon: "pin",
    text: "Located at Parvati Industrial Estate, Yadrav, Kolhapur — approximately 250 km from Pune.",
  },
];

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  application: string;
  process: string;
  image: string;
};

export const portfolio: PortfolioItem[] = [
  {
    id: "pf1",
    title: "Hydraulic Pump Body Machining",
    category: "Hydraulic",
    description: "Batch machining of hydraulic pump bodies to customer drawing. (Demo project)",
    application: "Hydraulic gear pump assemblies.",
    process: "Vertical machining + surface grinding",
    image: images.portfolioImage1,
  },
  {
    id: "pf2",
    title: "Turned Shaft Components",
    category: "CNC",
    description: "Turned shaft components produced on CNC turning centres. (Demo project)",
    application: "Pump and drive assemblies.",
    process: "CNC turning",
    image: images.portfolioImage2,
  },
  {
    id: "pf3",
    title: "Precision Detent Block Batch",
    category: "Precision",
    description: "Precision machined detent blocks with inspection records. (Demo project)",
    application: "Control and hydraulic assemblies.",
    process: "Vertical machining + precision inspection",
    image: images.portfolioImage4,
  },
  {
    id: "pf4",
    title: "Tractor Segment Component Run",
    category: "Automotive",
    description: "Machined components supplied for the tractor segment. (Demo project)",
    application: "Agricultural equipment manufacturing.",
    process: "CNC turning + vertical machining",
    image: images.portfolioImage5,
  },
  {
    id: "pf5",
    title: "Testing Machine Part Set",
    category: "Industrial",
    description: "Component set manufactured for testing machine builders. (Demo project)",
    application: "Industrial testing equipment.",
    process: "Vertical machining",
    image: images.portfolioImage6,
  },
  {
    id: "pf6",
    title: "Custom Fixture-Based Component",
    category: "Custom Engineering",
    description: "New part development carried out with customer part proving. (Demo project)",
    application: "Customer-specific engineering requirement.",
    process: "Custom fixturing + machining + inspection",
    image: images.portfolioImage3,
  },
];

export const portfolioFilters = [
  "All",
  "Hydraulic",
  "CNC",
  "Precision",
  "Automotive",
  "Industrial",
];

export type GalleryItem = {
  id: string;
  caption: string;
  category: string;
  image: string;
};

export const gallery: GalleryItem[] = [
  {
    id: "g1",
    caption: "Manufacturing Floor",
    category: "Manufacturing Floor",
    image: images.galleryImage1,
  },
  { id: "g2", caption: "CNC Machining", category: "CNC Machining", image: images.galleryImage2 },
  {
    id: "g3",
    caption: "Precision Components",
    category: "Precision Components",
    image: images.galleryImage3,
  },
  { id: "g4", caption: "Inspection", category: "Inspection", image: images.galleryImage4 },
  { id: "g5", caption: "Tooling", category: "Tooling", image: images.galleryImage5 },
  {
    id: "g6",
    caption: "Finished Components",
    category: "Finished Components",
    image: images.galleryImage6,
  },
];

export const requirementTypes = [
  "Product Enquiry",
  "Manufacturing Enquiry",
  "CNC Machining",
  "Hydraulic Components",
  "Custom Component",
  "General Enquiry",
];

export type Enquiry = {
  id: string;
  name: string;
  companyName: string;
  email: string;
  phone: string;
  requirementType: string;
  product: string;
  message: string;
  status: "New" | "Contacted" | "Closed";
  createdAt: string;
};
