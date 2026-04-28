export type Project = {
  title: string;
  status: "Completed" | "Ongoing";
  client: string;
  location: string;
  scope: string;
  category: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "UEAP B_2/01 Lot_6 MV/LV Distribution Network",
    status: "Completed",
    client: "Universal Electric Access Program (UEAP)",
    location: "North Shoa Oromia and South Wollo areas",
    scope: "Construction of 122 km concrete pole medium-voltage line works and more than 52 km low-voltage distribution works, including Debre Birhan-Sheno 33 kV line works.",
    category: "MV/LV Distribution",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "UEAP B_2/03 Lot_74 Tekeze-AbiAdi 33 kV Line",
    status: "Completed",
    client: "Universal Electric Access Program (UEAP)",
    location: "Tigray Region",
    scope: "Construction of 96 km concrete pole 33 kV double line from Tekeze HPP to AbiAdi town, installation of net stations, and upgrading of medium-voltage lines for five villages.",
    category: "MV/LV Distribution",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "UEAP Distribution Networks and D.B. Blanket Factory LV Underground Lines",
    status: "Completed",
    client: "Universal Electric Access Program (UEAP)",
    location: "Ethiopia",
    scope: "Construction of MV and LV distribution networks under UEAP B_2/01 Lot_6 and UEAP B_1/03 Lot_74, including LV underground line installation at D.B. Blanket Factory.",
    category: "Distribution & Underground Lines",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Safaricom Ethiopia Commercial Power Line Connections",
    status: "Ongoing",
    client: "Safaricom Ethiopia",
    location: "Amhara Region",
    scope: "Commercial power line connection services under SOW Ref. No. 002 for telecom infrastructure power supply.",
    category: "Telecom Power",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Bonga Town Street Light Works",
    status: "Completed",
    client: "Sub-contract completion certificate",
    location: "Bonga Town",
    scope: "Civil and electrical technical works for street lighting, including street light poles, sodium lamps, and cable installation support. Contract amount: 10.23 million ETB.",
    category: "Street Lighting",
    image: "https://images.unsplash.com/photo-1542776600-e921421a1ffb?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "KEC Mojo-Adama Compound Electrification",
    status: "Completed",
    client: "KEC International",
    location: "Mojo-Adama area",
    scope: "33 kV high-voltage underground cable installation and 220 V low-voltage street lighting works, including 0.12 km UG cable installation and 104 steel pole erection.",
    category: "Underground Cable & Street Lighting",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
  }
];
