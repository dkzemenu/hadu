export type MediaRef =
  | {
      url?: null | string;
    }
  | number
  | string
  | null
  | undefined;

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

export type Service = {
  slug: string;
  title: string;
  summary: string;
  scope: string[];
  standards: string[];
  relatedProducts: string[];
  image: string;
};

export type Project = {
  title: string;
  status: "Completed" | "Ongoing";
  client: string;
  location: string;
  scope: string;
  category: string;
  image: string;
};

export type NewsItem = {
  title: string;
  date: string;
  summary: string;
};

export type Partner = {
  name: string;
  summary: string;
  category: string;
  url?: string;
};

export type TenderDocument = {
  title: string;
  type: string;
  description: string;
  href: string;
};

export type Company = {
  name: string;
  shortName: string;
  tagline: string;
  email: string;
  phone: string;
  secondaryPhone: string;
  whatsapp: string;
  address: string;
  mapQuery: string;
  profileUrl: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type CompanyProfile = {
  legalName: string;
  registrationPlace: string;
  office: string;
  mission: string;
  vision: string;
  objective: string;
  management: string[];
  equipment: string[];
};

export type SiteSettings = {
  company: Company;
  stats: Stat[];
  values: string[];
  companyProfile: CompanyProfile;
};
