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
      Range: "Power, control and installation cable options",
      Conductors: "Copper or aluminum options",
      Documentation: "Datasheet, compliance certificate, delivery note"
    },
    applications: ["Building distribution", "Industrial feeders", "Public infrastructure"],
    datasheet: "/documents/datasheet-electric-cables.pdf",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "generators-and-pumps",
    category: "Power & Pumping Systems",
    title: "Generators and Pumps",
    summary: "Generator sets, water pumps, and related accessories for facilities, project sites, institutions, and commercial users.",
    specs: {
      Generator: "Standby and prime power options sized by load requirement",
      Pump: "Water transfer, booster and project-specific pump options",
      Scope: "Supply, installation support, commissioning and maintenance guidance"
    },
    applications: ["Backup power", "Water supply and transfer", "Remote site operations"],
    datasheet: "/documents/datasheet-generators.pdf",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "solar-system-equipment-accessories",
    category: "Renewable Energy",
    title: "Solar System Equipment and Accessories",
    summary: "PV panels, inverters, batteries, mounting structures, protection devices, and accessories for complete solar systems.",
    specs: {
      Configuration: "Grid-tied, off-grid, or hybrid",
      Components: "Panels, inverter, batteries, DC/AC protection and mounting accessories",
      Support: "Sizing, supply, installation and commissioning"
    },
    applications: ["Commercial power", "Institutional facilities", "Remote operations"],
    datasheet: "/documents/datasheet-solar-systems.pdf",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "research-laboratory-equipment",
    category: "Research & Laboratory",
    title: "Research and Laboratory Equipment",
    summary: "Research instruments, laboratory equipment, and accessories for education, testing, quality control, and laboratory operations.",
    specs: {
      Categories: "Analytical, water testing, balances, general lab and research equipment",
      Support: "Bid specs, datasheets, installation coordination and training support",
      Documentation: "Manufacturer datasheets and compliance files"
    },
    applications: ["Universities", "Research centers", "Quality control labs"],
    datasheet: "/documents/datasheet-laboratory-equipment.pdf",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "lightings-fixtures",
    category: "Lighting",
    title: "Lightings and Fixtures",
    summary: "Indoor, outdoor, street, compound and project lighting fixtures with accessories for public and private facilities.",
    specs: {
      Lighting: "LED, solar, street, compound and building lighting options",
      Accessories: "Poles, brackets, fixtures, cables and protection devices",
      Support: "Supply, installation planning and maintenance support"
    },
    applications: ["Roads", "Commercial buildings", "Compounds and public facilities"],
    datasheet: "/documents/datasheet-street-lighting.pdf",
    image: "https://images.unsplash.com/photo-1542776600-e921421a1ffb?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "chemicals",
    category: "Chemicals",
    title: "Chemicals",
    summary: "Project, industrial, water treatment, laboratory, and maintenance chemicals supplied according to client specifications.",
    specs: {
      Categories: "Industrial, laboratory, cleaning, treatment and maintenance chemicals",
      Packaging: "Supplier and project specification dependent",
      Documentation: "Safety data sheets, technical datasheets and delivery documents"
    },
    applications: ["Laboratories", "Industrial facilities", "Water treatment and maintenance works"],
    datasheet: "",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "electronic-equipments",
    category: "Electronics",
    title: "Electronic Equipments",
    summary: "Electronic equipment, accessories, controls, and technical devices for institutional, commercial, and project requirements.",
    specs: {
      Categories: "Electronic devices, control accessories and project-specific equipment",
      Support: "Specification matching, sourcing and technical documentation",
      Documentation: "Datasheets, warranty documents and compliance files"
    },
    applications: ["Institutions", "Commercial facilities", "Industrial and technical projects"],
    datasheet: "",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
  }
];
