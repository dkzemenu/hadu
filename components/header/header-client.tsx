"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { themes, useTheme } from "@/components/theme-provider";
import { LogoMark } from "@/components/logo-mark";
import type { Company, Product, Service } from "@/lib/content-types";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Tenders", href: "/tenders" },
  { label: "HSE", href: "/hse" },
  { label: "Partners", href: "/partners" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" }
];

export function HeaderClient({ company, products, services }: { company: Company; products: Product[]; services: Service[] }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="bg-navy px-4 py-2 text-sm text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-amber" aria-hidden="true" />
            <span>{company.phone}</span>
          </div>
          <div className="flex gap-4 font-semibold">
            <Link href="/tenders" className="hover:text-amber">
              Bid Specs
            </Link>
            <Link href="/contact" className="hover:text-amber">
              Request Quotation
            </Link>
          </div>
        </div>
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-md">
          <LogoMark />
          <span>
            <span className="block text-lg font-black text-navy">{company.name}</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Engineering & Supply</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <MegaMenu label="Services" href="/services">
            <div className="grid w-[720px] grid-cols-2 gap-3 p-4">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-md p-3 hover:bg-cloud">
                  <span className="block font-semibold text-navy">{service.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-slate-600">{service.summary}</span>
                </Link>
              ))}
            </div>
          </MegaMenu>
          <MegaMenu label="Products" href="/products">
            <div className="grid w-[680px] grid-cols-2 gap-3 p-4">
              {products.map((product) => (
                <Link key={product.slug} href={`/products/${product.slug}`} className="rounded-md p-3 hover:bg-cloud">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-teal">{product.category}</span>
                  <span className="mt-1 block font-semibold text-navy">{product.title}</span>
                </Link>
              ))}
            </div>
          </MegaMenu>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring rounded-md px-3 py-2 text-sm font-semibold text-slate-700 hover:text-teal">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          <button
            type="button"
            className="focus-ring rounded-md border border-slate-300 p-2 text-navy lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            <MobileLink href="/services" label="Services" onClick={() => setOpen(false)} />
            <MobileLink href="/products" label="Products" onClick={() => setOpen(false)} />
            {navItems.map((item) => (
              <MobileLink key={item.href} href={item.href} label={item.label} onClick={() => setOpen(false)} />
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

function ThemeSwitcher() {
  const { theme: activeTheme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 rounded-md border border-slate-200 bg-white p-1 shadow-sm" aria-label="Theme selector">
      {themes.map((theme) => (
        <button
          key={theme.id}
          type="button"
          onClick={() => setTheme(theme.id)}
          className={`focus-ring grid h-8 w-8 place-items-center rounded-md transition ${
            activeTheme === theme.id ? "bg-cloud ring-2 ring-teal ring-offset-1" : "hover:bg-cloud"
          }`}
          aria-label={`Use ${theme.label} theme`}
          aria-pressed={activeTheme === theme.id}
          title={theme.label}
        >
          <span className={`h-4 w-4 rounded-full ${theme.swatch}`} aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}

function MegaMenu({ label, href, children }: { label: string; href: string; children: React.ReactNode }) {
  return (
    <div className="group relative">
      <Link href={href} className="focus-ring rounded-md px-3 py-2 text-sm font-semibold text-slate-700 hover:text-teal">
        {label}
      </Link>
      <div className="invisible absolute left-0 top-9 rounded-lg border border-slate-200 bg-white opacity-0 shadow-soft transition group-hover:visible group-hover:opacity-100">
        {children}
      </div>
    </div>
  );
}

function MobileLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="rounded-md px-3 py-3 font-semibold text-navy hover:bg-cloud">
      {label}
    </Link>
  );
}
