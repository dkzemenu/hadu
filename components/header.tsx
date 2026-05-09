import { HeaderClient } from "@/components/header/header-client";
import { getProducts, getServices, getSiteSettings } from "@/lib/cms";

export async function Header() {
  const [{ company }, products, services] = await Promise.all([getSiteSettings(), getProducts(), getServices()]);

  return <HeaderClient company={company} products={products} services={services} />;
}
