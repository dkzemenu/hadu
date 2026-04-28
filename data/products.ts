export type Product = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  specs: Record<string, string>;
  applications: string[];
  datasheet: string;
  image: string;
};

export const products: Product[] = [
  {
    slug: "electric-cables",
    category: "Electrical Supply",
    title: "Electric Cables",
    summary: "Low-voltage and project-specified power cables for buildings, industrial sites, and infrastructure works.",
    specs: {
      Voltage: "Project-specified LV ranges",
      Conductors: "Copper or aluminum options",
      Documentation: "Datasheet, compliance certificate, delivery note"
    },
    applications: ["Building distribution", "Industrial feeders", "Public infrastructure"],
    datasheet: "/documents/datasheet-electric-cables.pdf",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "generators",
    category: "Power Systems",
    title: "Generators",
    summary: "Standby and prime power generator sets for facilities, project sites, institutions, and commercial users.",
    specs: {
      Rating: "Sized by project load requirement",
      Fuel: "Diesel options",
      Scope: "Supply, installation support, commissioning"
    },
    applications: ["Backup power", "Remote site power", "Institutional facilities"],
    datasheet: "/documents/datasheet-generators.pdf",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "solar-systems",
    category: "Renewable Energy",
    title: "Solar Systems",
    summary: "PV panels, inverters, batteries, mounting structures, and protection devices for complete solar systems.",
    specs: {
      Configuration: "Grid-tied, off-grid, or hybrid",
      Components: "Panels, inverter, batteries, DC/AC protection",
      Services: "Sizing, supply, installation, commissioning"
    },
    applications: ["Commercial power", "Institutional facilities", "Remote operations"],
    datasheet: "/documents/datasheet-solar-systems.pdf",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "electrical-panels",
    category: "Electrical Supply",
    title: "Electrical Panels",
    summary: "Distribution panels, control panels, and protection boards built around project specifications.",
    specs: {
      Type: "Distribution and control panels",
      Protection: "Breakers, metering, surge protection options",
      Documentation: "Panel schedule, test sheet, handover file"
    },
    applications: ["Commercial buildings", "Industrial facilities", "Utility rooms"],
    datasheet: "/documents/datasheet-electrical-panels.pdf",
    image: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "street-lighting",
    category: "Infrastructure",
    title: "Street Lighting Systems",
    summary: "Street lighting poles, luminaires, solar lighting options, cabling, and accessories for public and private sites.",
    specs: {
      Lighting: "LED and solar street lighting options",
      Accessories: "Poles, brackets, cables, protection devices",
      Support: "Supply, installation, and maintenance planning"
    },
    applications: ["Roads", "Compounds", "Public facilities"],
    datasheet: "/documents/datasheet-street-lighting.pdf",
    image: "https://images.unsplash.com/photo-1542776600-e921421a1ffb?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "laboratory-equipment",
    category: "Laboratory",
    title: "Laboratory Equipment",
    summary: "Laboratory instruments and accessories for education, research, testing, and quality control environments.",
    specs: {
      Categories: "Analytical, water testing, balances, general lab",
      Support: "Bid specs, datasheets, installation coordination",
      Documentation: "Manufacturer datasheets and compliance files"
    },
    applications: ["Universities", "Research centers", "Quality control labs"],
    datasheet: "/documents/datasheet-laboratory-equipment.pdf",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80"
  }
];
