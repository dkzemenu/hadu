import type { Metadata } from "next";
import "../globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: {
    default: "Hadu Engineering | Electromechanical Solutions in Ethiopia",
    template: "%s | Hadu Engineering"
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg"
  },
  description:
    "Hadu Engineering provides electromechanical supply, installation, project delivery, tender support, and technical products in Ethiopia."
};

export const dynamic = "force-dynamic";

export default function FrontendLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="brown" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
