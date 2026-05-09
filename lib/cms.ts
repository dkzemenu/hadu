import "server-only";

import config from "@payload-config";
import { products as productSeedOrder } from "@/data/products";
import { services as serviceSeedOrder } from "@/data/services";
import { getPayload } from "payload";
import type { Company, CompanyProfile, NewsItem, Partner, Product, Project, Service, SiteSettings, Stat, TenderDocument } from "@/lib/content-types";

type PayloadMedia = {
  url?: null | string;
};

type ValueRow = {
  value?: null | string;
};

type SpecRow = {
  label?: null | string;
  value?: null | string;
};

type ProductDoc = {
  applications?: null | ValueRow[];
  category?: null | string;
  datasheet?: null | PayloadMedia | number | string;
  datasheetUrl?: null | string;
  externalImageUrl?: null | string;
  image?: null | PayloadMedia | number | string;
  slug?: null | string;
  specs?: null | SpecRow[];
  summary?: null | string;
  title?: null | string;
};

type ServiceDoc = {
  externalImageUrl?: null | string;
  image?: null | PayloadMedia | number | string;
  relatedProducts?: null | ValueRow[];
  scope?: null | ValueRow[];
  slug?: null | string;
  standards?: null | ValueRow[];
  summary?: null | string;
  title?: null | string;
};

type ProjectDoc = {
  category?: null | string;
  client?: null | string;
  externalImageUrl?: null | string;
  image?: null | PayloadMedia | number | string;
  location?: null | string;
  scope?: null | string;
  status?: null | "Completed" | "Ongoing";
  title?: null | string;
};

type NewsDoc = {
  date?: null | string;
  summary?: null | string;
  title?: null | string;
};

type PartnerDoc = {
  category?: null | string;
  name?: null | string;
  summary?: null | string;
  url?: null | string;
};

type DocumentDoc = {
  description?: null | string;
  file?: null | PayloadMedia | number | string;
  href?: null | string;
  title?: null | string;
  type?: null | string;
};

type SiteSettingsDoc = {
  company?: Partial<Company>;
  companyProfile?: Partial<Omit<CompanyProfile, "equipment" | "management">> & {
    equipment?: null | ValueRow[];
    management?: null | ValueRow[];
  };
  stats?: null | Partial<Stat>[];
  values?: null | ValueRow[];
};

async function getCMS() {
  return getPayload({ config });
}

function arrayValues(rows?: null | ValueRow[]) {
  return rows?.map((row) => row.value).filter((value): value is string => Boolean(value)) ?? [];
}

function mediaUrl(media: PayloadMedia | number | string | null | undefined, fallback = "") {
  if (media && typeof media === "object" && typeof media.url === "string") {
    return media.url;
  }

  return fallback;
}

function sortBySlugOrder<T extends { slug: string }>(items: T[], order: string[]) {
  const index = new Map(order.map((slug, position) => [slug, position]));
  return [...items].sort((first, second) => (index.get(first.slug) ?? Number.MAX_SAFE_INTEGER) - (index.get(second.slug) ?? Number.MAX_SAFE_INTEGER));
}

function mapProduct(doc: ProductDoc): Product {
  return {
    slug: doc.slug ?? "",
    category: doc.category ?? "",
    title: doc.title ?? "",
    summary: doc.summary ?? "",
    specs: Object.fromEntries((doc.specs ?? []).map((spec) => [spec.label ?? "", spec.value ?? ""]).filter(([label]) => Boolean(label))),
    applications: arrayValues(doc.applications),
    datasheet: mediaUrl(doc.datasheet, doc.datasheetUrl ?? ""),
    image: mediaUrl(doc.image, doc.externalImageUrl ?? "")
  };
}

function mapService(doc: ServiceDoc): Service {
  return {
    slug: doc.slug ?? "",
    title: doc.title ?? "",
    summary: doc.summary ?? "",
    scope: arrayValues(doc.scope),
    standards: arrayValues(doc.standards),
    relatedProducts: arrayValues(doc.relatedProducts),
    image: mediaUrl(doc.image, doc.externalImageUrl ?? "")
  };
}

function mapProject(doc: ProjectDoc): Project {
  return {
    title: doc.title ?? "",
    status: doc.status ?? "Completed",
    client: doc.client ?? "",
    location: doc.location ?? "",
    scope: doc.scope ?? "",
    category: doc.category ?? "",
    image: mediaUrl(doc.image, doc.externalImageUrl ?? "")
  };
}

function mapNews(doc: NewsDoc): NewsItem {
  return {
    title: doc.title ?? "",
    date: doc.date ?? "",
    summary: doc.summary ?? ""
  };
}

function mapPartner(doc: PartnerDoc): Partner {
  return {
    name: doc.name ?? "",
    category: doc.category ?? "",
    summary: doc.summary ?? "",
    url: doc.url ?? undefined
  };
}

function mapDocument(doc: DocumentDoc): TenderDocument {
  return {
    title: doc.title ?? "",
    type: doc.type ?? "",
    description: doc.description ?? "",
    href: mediaUrl(doc.file, doc.href ?? "")
  };
}

export async function getProducts(): Promise<Product[]> {
  const payload = await getCMS();
  const result = await payload.find({ collection: "products", limit: 100, sort: "createdAt" });
  return sortBySlugOrder(
    result.docs.map((doc) => mapProduct(doc as ProductDoc)),
    productSeedOrder.map((product) => product.slug)
  );
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const payload = await getCMS();
  const result = await payload.find({
    collection: "products",
    limit: 1,
    where: {
      slug: {
        equals: slug
      }
    }
  });
  const doc = result.docs[0];
  return doc ? mapProduct(doc as ProductDoc) : null;
}

export async function getServices(): Promise<Service[]> {
  const payload = await getCMS();
  const result = await payload.find({ collection: "services", limit: 100, sort: "createdAt" });
  return sortBySlugOrder(
    result.docs.map((doc) => mapService(doc as ServiceDoc)),
    serviceSeedOrder.map((service) => service.slug)
  );
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const payload = await getCMS();
  const result = await payload.find({
    collection: "services",
    limit: 1,
    where: {
      slug: {
        equals: slug
      }
    }
  });
  const doc = result.docs[0];
  return doc ? mapService(doc as ServiceDoc) : null;
}

export async function getProjects(): Promise<Project[]> {
  const payload = await getCMS();
  const result = await payload.find({ collection: "projects", limit: 100, sort: "createdAt" });
  return result.docs.map((doc) => mapProject(doc as ProjectDoc));
}

export async function getNewsItems(): Promise<NewsItem[]> {
  const payload = await getCMS();
  const result = await payload.find({ collection: "news", limit: 100, sort: "-createdAt" });
  return result.docs.map((doc) => mapNews(doc as NewsDoc));
}

export async function getPartners(): Promise<Partner[]> {
  const payload = await getCMS();
  const result = await payload.find({ collection: "partners", limit: 100, sort: "createdAt" });
  return result.docs.map((doc) => mapPartner(doc as PartnerDoc));
}

export async function getTenderDocuments(): Promise<TenderDocument[]> {
  const payload = await getCMS();
  const result = await payload.find({ collection: "documents", limit: 100, sort: "createdAt" });
  return result.docs.map((doc) => mapDocument(doc as DocumentDoc));
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const payload = await getCMS();
  const settings = (await payload.findGlobal({ slug: "siteSettings" })) as SiteSettingsDoc;
  const company = settings.company ?? {};
  const profile = settings.companyProfile ?? {};

  return {
    company: {
      name: company.name ?? "",
      shortName: company.shortName ?? "",
      tagline: company.tagline ?? "",
      email: company.email ?? "",
      phone: company.phone ?? "",
      secondaryPhone: company.secondaryPhone ?? "",
      whatsapp: company.whatsapp ?? "",
      address: company.address ?? "",
      mapQuery: company.mapQuery ?? "",
      profileUrl: company.profileUrl ?? ""
    },
    stats: settings.stats?.map((stat) => ({ label: stat.label ?? "", value: stat.value ?? "" })) ?? [],
    values: arrayValues(settings.values),
    companyProfile: {
      legalName: profile.legalName ?? "",
      registrationPlace: profile.registrationPlace ?? "",
      office: profile.office ?? "",
      mission: profile.mission ?? "",
      vision: profile.vision ?? "",
      objective: profile.objective ?? "",
      management: arrayValues(profile.management),
      equipment: arrayValues(profile.equipment)
    }
  };
}
