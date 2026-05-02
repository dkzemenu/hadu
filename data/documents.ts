export type TenderDocument = {
  title: string;
  type: string;
  description: string;
  href: string;
};

export const tenderDocuments: TenderDocument[] = [
  {
    title: "Company Profile",
    type: "PDF",
    description: "Official HADU Electro-Mechanical Engineering company profile with background, registration, management, project experience, staff, OSH and equipment details.",
    href: "/documents/hadu-company-profile.pdf"
  },
  {
    title: "Registration & License File",
    type: "PDF",
    description: "Combined legal pack extracted from the original company profile, including taxpayer registration, VAT registration, business license, trade name and business competency certificate.",
    href: "/documents/hadu-registration-license.pdf"
  },
  {
    title: "Tax Payer Registration",
    type: "PDF",
    description: "Taxpayer registration document extracted from the original HADU company profile.",
    href: "/documents/hadu-tax-payer-registration.pdf"
  },
  {
    title: "VAT Registration",
    type: "PDF",
    description: "VAT registration document extracted from the original HADU company profile.",
    href: "/documents/hadu-vat-registration.pdf"
  },
  {
    title: "Business License",
    type: "PDF",
    description: "Business license document extracted from the original HADU company profile.",
    href: "/documents/hadu-business-license.pdf"
  },
  {
    title: "Trade Name Certificate",
    type: "PDF",
    description: "Trade name certificate extracted from the original HADU company profile.",
    href: "/documents/hadu-trade-name.pdf"
  },
  {
    title: "Business Competency Certificate",
    type: "PDF",
    description: "Business competency certificate extracted from the original HADU company profile.",
    href: "/documents/hadu-business-competency-certificate.pdf"
  },
  {
    title: "HSE Policy Statement",
    type: "PDF",
    description: "Safety, quality, and risk management policy prepared for public and private tenders.",
    href: "/documents/hadu-hse-policy.pdf"
  },
  {
    title: "Bid Specs Pack",
    type: "PDF",
    description: "Technical bid-specification references for product and service categories.",
    href: "/documents/hadu-bid-specs.pdf"
  },
  {
    title: "Reference Letters",
    type: "PDF",
    description: "Client references and experience letters to support tender submissions.",
    href: "/documents/hadu-reference-letters.pdf"
  }
];
