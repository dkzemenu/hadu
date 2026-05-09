import path from "node:path";
import { fileURLToPath } from "node:url";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";
import { buildConfig } from "payload";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const databaseUrl =
  process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.POSTGRES_URL_NON_POOLING;

if (!databaseUrl) {
  throw new Error("Missing DATABASE_URL, POSTGRES_URL, or POSTGRES_URL_NON_POOLING for Payload.");
}

const parsedDatabaseUrl = new URL(databaseUrl);
parsedDatabaseUrl.searchParams.delete("sslmode");

const textArrayField = (name, label) => ({
  name,
  label,
  type: "array",
  fields: [
    {
      name: "value",
      type: "text",
      required: true
    }
  ]
});

const imageFields = [
  {
    name: "image",
    type: "upload",
    relationTo: "media",
    admin: {
      description: "Optional uploaded image. If empty, the external image URL is used."
    }
  },
  {
    name: "externalImageUrl",
    type: "text",
    label: "External image URL"
  }
];

const Users = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email"
  },
  fields: []
};

const Media = {
  slug: "media",
  upload: {
    staticDir: path.resolve(dirname, "public/media")
  },
  admin: {
    useAsTitle: "filename"
  },
  fields: [
    {
      name: "alt",
      type: "text"
    }
  ]
};

const Products = {
  slug: "products",
  admin: {
    defaultColumns: ["title", "category", "slug"],
    useAsTitle: "title"
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true, index: true },
    { name: "category", type: "text", required: true },
    { name: "summary", type: "textarea", required: true },
    ...imageFields,
    {
      name: "specs",
      type: "array",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "value", type: "text", required: true }
      ]
    },
    textArrayField("applications"),
    {
      name: "datasheet",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Optional uploaded datasheet. If empty, the static datasheet URL is used."
      }
    },
    {
      name: "datasheetUrl",
      type: "text",
      label: "Static datasheet URL"
    }
  ]
};

const Services = {
  slug: "services",
  admin: {
    defaultColumns: ["title", "slug"],
    useAsTitle: "title"
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true, index: true },
    { name: "summary", type: "textarea", required: true },
    ...imageFields,
    textArrayField("scope", "Technical scope"),
    textArrayField("standards", "Standards followed"),
    textArrayField("relatedProducts", "Related products")
  ]
};

const Projects = {
  slug: "projects",
  admin: {
    defaultColumns: ["title", "status", "client"],
    useAsTitle: "title"
  },
  fields: [
    { name: "title", type: "text", required: true },
    {
      name: "status",
      type: "select",
      required: true,
      options: ["Completed", "Ongoing"]
    },
    { name: "client", type: "text", required: true },
    { name: "location", type: "text", required: true },
    { name: "scope", type: "textarea", required: true },
    { name: "category", type: "text", required: true },
    ...imageFields
  ]
};

const News = {
  slug: "news",
  admin: {
    defaultColumns: ["title", "date"],
    useAsTitle: "title"
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "date", type: "text", required: true },
    { name: "summary", type: "textarea", required: true }
  ]
};

const Partners = {
  slug: "partners",
  admin: {
    defaultColumns: ["name", "category"],
    useAsTitle: "name"
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "category", type: "text", required: true },
    { name: "summary", type: "textarea", required: true },
    { name: "url", type: "text" }
  ]
};

const Documents = {
  slug: "documents",
  admin: {
    defaultColumns: ["title", "type"],
    useAsTitle: "title"
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "type", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "file",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Optional uploaded file. If empty, the static URL is used."
      }
    },
    {
      name: "href",
      type: "text",
      label: "Static document URL"
    }
  ]
};

const SiteSettings = {
  slug: "siteSettings",
  label: "Site settings",
  fields: [
    {
      name: "company",
      type: "group",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "shortName", type: "text", required: true },
        { name: "tagline", type: "text", required: true },
        { name: "email", type: "email", required: true },
        { name: "phone", type: "text", required: true },
        { name: "secondaryPhone", type: "text", required: true },
        { name: "whatsapp", type: "text", required: true },
        { name: "address", type: "textarea", required: true },
        { name: "mapQuery", type: "text", required: true },
        { name: "profileUrl", type: "text", required: true }
      ]
    },
    {
      name: "stats",
      type: "array",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "value", type: "text", required: true }
      ]
    },
    textArrayField("values"),
    {
      name: "companyProfile",
      type: "group",
      fields: [
        { name: "legalName", type: "text", required: true },
        { name: "registrationPlace", type: "text", required: true },
        { name: "office", type: "textarea", required: true },
        { name: "mission", type: "textarea", required: true },
        { name: "vision", type: "textarea", required: true },
        { name: "objective", type: "textarea", required: true },
        textArrayField("management"),
        textArrayField("equipment")
      ]
    }
  ]
};

export default buildConfig({
  admin: {
    suppressHydrationWarning: true,
    user: Users.slug
  },
  collections: [Users, Media, Products, Services, Projects, News, Partners, Documents],
  db: postgresAdapter({
    pool: {
      connectionString: parsedDatabaseUrl.toString(),
      ssl: {
        rejectUnauthorized: false
      }
    },
    push: process.env.NODE_ENV !== "production"
  }),
  editor: lexicalEditor(),
  globals: [SiteSettings],
  secret: process.env.PAYLOAD_SECRET || "local-payload-secret-change-before-production",
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts")
  }
});
