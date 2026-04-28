export type Service = {
  slug: string;
  title: string;
  summary: string;
  scope: string[];
  standards: string[];
  relatedProducts: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "power-design-installation",
    title: "Power Design & Installation Works",
    summary:
      "Electrical power design, MV/LV distribution network construction, underground and overhead line works, and commissioning support for public and private clients.",
    scope: [
      "Power design, route study and single-line diagram preparation",
      "MV and LV overhead and underground distribution line works",
      "Pole pit preparation, pole erection, stringing, cable laying and jointing",
      "Testing, energizing, commissioning and handover support"
    ],
    standards: ["Client specifications", "Relevant electrical standards", "Manufacturer and utility requirements"],
    relatedProducts: ["Power cables", "Distribution panels", "Poles and line accessories"],
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "lifts-escalators",
    title: "Lifts & Escalators Installation",
    summary:
      "Installation coordination and technical support for lift and escalator systems as part of HADU's wider electro-mechanical works capability.",
    scope: [
      "Site readiness coordination",
      "Mechanical and electrical installation support",
      "Interface coordination with building works",
      "Testing, safety checks and handover documentation"
    ],
    standards: ["Manufacturer installation manuals", "Project safety requirements", "Client specification compliance"],
    relatedProducts: ["Lift equipment", "Escalator systems", "Control accessories"],
    image: "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "solar-systems",
    title: "Solar System Supply & Installation",
    summary:
      "Design-oriented supply and installation of solar PV systems for institutional, commercial, and remote-site power needs.",
    scope: [
      "Load assessment and system sizing",
      "Panels, inverters, batteries, mounting structures, and protection devices",
      "Installation, commissioning, and user orientation",
      "Maintenance planning and performance checks"
    ],
    standards: ["IEC PV equipment standards", "Electrical safety requirements", "Manufacturer installation manuals"],
    relatedProducts: ["Solar panels", "Inverters", "Battery systems"],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "generators-appliances",
    title: "Generator & Appliance Installation",
    summary:
      "Procurement, installation, and commissioning support for standby power, distribution transformers, and industrial motors.",
    scope: [
      "Technical specification review",
      "Equipment sourcing and supplier coordination",
      "Installation supervision and commissioning",
      "Preventive maintenance planning"
    ],
    standards: ["IEC machine standards", "Manufacturer commissioning requirements", "Site safety procedures"],
    relatedProducts: ["Diesel generators", "Transformers", "Electrical appliances"],
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "telecom-fiber-lines",
    title: "Telecom Fiber Line Works",
    summary:
      "Telecom fiber line works and commercial power connection support for communication infrastructure projects.",
    scope: [
      "Site survey and route preparation",
      "Commercial power line connection services",
      "Fiber line work coordination",
      "Safety, inspection and handover documentation"
    ],
    standards: ["Telecom project requirements", "Electrical safety requirements", "Client specification compliance"],
    relatedProducts: ["Fiber line accessories", "Power connection materials", "Site electrical accessories"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "laboratory-equipment",
    title: "Laboratory Equipment Supply",
    summary:
      "Tender-focused supply of laboratory instruments, consumables, and technical equipment for universities, research centers, and quality control labs.",
    scope: [
      "Equipment category matching",
      "Datasheet and bid specification preparation",
      "Delivery, installation coordination, and training support",
      "After-sales support documentation"
    ],
    standards: ["ISO-oriented lab practices", "Manufacturer specifications", "Procurement documentation standards"],
    relatedProducts: ["Analytical instruments", "Balances", "Water testing equipment"],
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "construction-materials",
    title: "Other Electrical & Mechanical Works",
    summary:
      "Additional electrical, mechanical, lighting, installation and construction-support works required by project scope.",
    scope: [
      "Street light and compound lighting works",
      "Mechanical and electrical work packages",
      "Material sourcing and BOQ support",
      "Quality documentation and handover"
    ],
    standards: ["Project specification compliance", "Supplier quality documentation", "Site acceptance requirements"],
    relatedProducts: ["Cable trays", "Mounting materials", "Civil support materials"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
  }
];
