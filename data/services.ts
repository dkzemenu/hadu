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
    relatedProducts: ["Electric cables", "Lightings and fixtures", "Electronic equipments"],
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
    slug: "electrical-installation-works",
    title: "Electrical Installation Works",
    summary:
      "Electrical installation works for buildings, facilities, industrial sites, and public infrastructure projects.",
    scope: [
      "Internal and external electrical installation",
      "Cable laying, containment, termination and panel connection",
      "Lighting, power outlet and equipment connection works",
      "Inspection, testing and handover documentation"
    ],
    standards: ["Project electrical specifications", "Electrical safety requirements", "Client acceptance requirements"],
    relatedProducts: ["Electric cables", "Lightings and fixtures", "Electronic equipments"],
    image: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "solar-renewable-energy-systems",
    title: "Solar & Renewable Energy Systems",
    summary:
      "Design-oriented supply and installation of solar and renewable energy systems for institutional, commercial, and remote-site power needs.",
    scope: [
      "Load assessment and system sizing",
      "Panels, inverters, batteries, mounting structures and protection devices",
      "Installation, commissioning and user orientation",
      "Maintenance planning and performance checks"
    ],
    standards: ["IEC PV equipment standards", "Electrical safety requirements", "Manufacturer installation manuals"],
    relatedProducts: ["Solar system equipment and accessories", "Electric cables", "Electronic equipments"],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "mechanical-works",
    title: "Mechanical Works",
    summary:
      "Mechanical installation and project-support works for buildings, facilities, industrial operations, and infrastructure projects.",
    scope: [
      "Mechanical equipment installation support",
      "Pump, generator and equipment interface works",
      "Material sourcing and BOQ support",
      "Quality documentation and handover"
    ],
    standards: ["Project specification compliance", "Manufacturer installation requirements", "Site safety procedures"],
    relatedProducts: ["Generators and pumps", "Chemicals", "Electronic equipments"],
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "industrial-laboratory-systems",
    title: "Industrial & Laboratory Systems",
    summary:
      "Tender-focused supply, installation coordination, and technical support for industrial and laboratory systems.",
    scope: [
      "Equipment category matching",
      "Datasheet and bid specification preparation",
      "Delivery, installation coordination and training support",
      "After-sales support documentation"
    ],
    standards: ["ISO-oriented lab practices", "Manufacturer specifications", "Procurement documentation standards"],
    relatedProducts: ["Research and laboratory equipment", "Chemicals", "Electronic equipments"],
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "maintenance",
    title: "Maintenance",
    summary:
      "Preventive and corrective maintenance support for electrical, mechanical, power, lighting, and facility systems.",
    scope: [
      "System inspection and fault identification",
      "Preventive maintenance planning",
      "Corrective repair coordination",
      "Maintenance records and service reporting"
    ],
    standards: ["Manufacturer maintenance requirements", "Client safety procedures", "Site acceptance requirements"],
    relatedProducts: ["Generators and pumps", "Lightings and fixtures", "Electric cables"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "engineering-consultancy-services",
    title: "Engineering & Consultancy Services",
    summary:
      "Engineering support, technical evaluation, specification preparation, and consultancy services for procurement and project delivery.",
    scope: [
      "Technical assessment and recommendation",
      "Specification and BOQ support",
      "Bid document and compliance review",
      "Project supervision and reporting support"
    ],
    standards: ["Client requirements", "Relevant engineering standards", "Procurement documentation standards"],
    relatedProducts: ["Electric cables", "Solar system equipment and accessories", "Research and laboratory equipment"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "telecom-fiber-line-works",
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
    relatedProducts: ["Fiber line accessories", "Electric cables", "Electronic equipments"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80"
  }
];
