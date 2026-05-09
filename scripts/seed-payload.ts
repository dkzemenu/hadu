import config from "@payload-config";
import { tenderDocuments } from "../data/documents.ts";
import { newsItems } from "../data/news.ts";
import { partners } from "../data/partners.ts";
import { products } from "../data/products.ts";
import { projects } from "../data/projects.ts";
import { services } from "../data/services.ts";
import { company, companyProfile, stats, values } from "../data/site.ts";
import { getPayload, type Payload } from "payload";

type Collection = "documents" | "news" | "partners" | "products" | "projects" | "services";
type PayloadWithLooseData = Payload & {
  create: (args: { collection: Collection; data: Record<string, unknown> }) => Promise<unknown>;
  update: (args: { collection: Collection; data: Record<string, unknown>; id: number | string }) => Promise<unknown>;
};

function valuesToRows(items: string[]) {
  return items.map((value) => ({ value }));
}

async function upsertByField(payload: Payload, collection: Collection, field: string, value: string, data: Record<string, unknown>) {
  const cms = payload as PayloadWithLooseData;
  const existing = await payload.find({
    collection,
    limit: 1,
    where: {
      [field]: {
        equals: value
      }
    }
  });
  const doc = existing.docs[0];

  if (doc) {
    await cms.update({
      collection,
      id: doc.id,
      data
    });
    return;
  }

  await cms.create({
    collection,
    data
  });
}

async function seed() {
  const payload = await getPayload({ config });

  await payload.updateGlobal({
    slug: "siteSettings",
    data: {
      company,
      stats,
      values: valuesToRows(values),
      companyProfile: {
        ...companyProfile,
        management: valuesToRows(companyProfile.management),
        equipment: valuesToRows(companyProfile.equipment)
      }
    }
  });

  for (const product of products) {
    await upsertByField(payload, "products", "slug", product.slug, {
      title: product.title,
      slug: product.slug,
      category: product.category,
      summary: product.summary,
      externalImageUrl: product.image,
      specs: Object.entries(product.specs).map(([label, value]) => ({ label, value })),
      applications: valuesToRows(product.applications),
      datasheetUrl: product.datasheet
    });
  }

  for (const service of services) {
    await upsertByField(payload, "services", "slug", service.slug, {
      title: service.title,
      slug: service.slug,
      summary: service.summary,
      externalImageUrl: service.image,
      scope: valuesToRows(service.scope),
      standards: valuesToRows(service.standards),
      relatedProducts: valuesToRows(service.relatedProducts)
    });
  }

  for (const project of projects) {
    await upsertByField(payload, "projects", "title", project.title, {
      title: project.title,
      status: project.status,
      client: project.client,
      location: project.location,
      scope: project.scope,
      category: project.category,
      externalImageUrl: project.image
    });
  }

  for (const item of newsItems) {
    await upsertByField(payload, "news", "title", item.title, item);
  }

  for (const partner of partners) {
    await upsertByField(payload, "partners", "name", partner.name, partner);
  }

  for (const document of tenderDocuments) {
    await upsertByField(payload, "documents", "title", document.title, document);
  }

  await payload.destroy();
}

await seed();
