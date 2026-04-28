export type Partner = {
  name: string;
  summary: string;
  category: string;
  url?: string;
};

export const partners: Partner[] = [
  {
    name: "Power Equipment Manufacturers",
    category: "Generators & Transformers",
    summary: "Supplier relationships for generator sets, transformers, motors, and commissioning documentation."
  },
  {
    name: "Solar Technology Suppliers",
    category: "Renewable Energy",
    summary: "Panel, inverter, storage, and protection-device sourcing for solar PV projects."
  },
  {
    name: "Laboratory Instrument Suppliers",
    category: "Laboratory Equipment",
    summary: "Manufacturer-backed datasheets and bid specs for laboratory and quality control equipment."
  },
  {
    name: "Electrical Material Distributors",
    category: "Electrical Supply",
    summary: "Cables, fittings, panels, street lighting, and accessories aligned with project requirements."
  }
];
