import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { LogoMark } from "@/components/logo-mark";
import { getProducts, getServices, getSiteSettings } from "@/lib/cms";

export async function Footer() {
  const [{ company }, products, services] = await Promise.all([getSiteSettings(), getProducts(), getServices()]);

  return (
    <footer className="bg-navy px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="h-12 w-12" variant="inverse" />
            <div className="text-2xl font-black">{company.name}</div>
          </div>
          <p className="mt-4 max-w-sm leading-7 text-blue-100">
            Tender-ready electromechanical supply, installation, documentation, and project support for public and private clients.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-blue-50">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-amber" /> {company.address}
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-amber" /> {company.phone}
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-amber" /> {company.secondaryPhone}
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-amber" /> {company.email}
            </span>
          </div>
        </div>
        <FooterList title="Services" items={services.slice(0, 5).map((service) => ({ label: service.title, href: `/services/${service.slug}` }))} />
        <FooterList title="Products" items={products.slice(0, 5).map((product) => ({ label: product.title, href: `/products/${product.slug}` }))} />
        <FooterList
          title="Company"
          items={[
            { label: "About Us", href: "/about" },
            { label: "Projects", href: "/projects" },
            { label: "Tenders & Experience", href: "/tenders" },
            { label: "HSE / Quality", href: "/hse" },
            { label: "Contact", href: "/contact" }
          ]}
        />
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-between gap-4 border-t border-white/15 pt-6 text-sm text-blue-100">
        <span>Copyright © 2026 Hadu Engineering. All rights reserved.</span>
        <span>@copyright dkz solutions</span>
      </div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-bold text-white">{title}</h2>
      <div className="mt-4 grid gap-3 text-sm text-blue-100">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-amber">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
