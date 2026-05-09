import type { Metadata } from "next";
import "../globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

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

export default function FrontendLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans text-ink antialiased">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
