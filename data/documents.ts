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
    description: "Placeholder for business registration, trade license, VAT/TIN, and relevant certificates.",
    href: "/documents/hadu-registration-license.pdf"
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
