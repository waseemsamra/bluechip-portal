import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "BlueChip Tech | Enterprise & High-Growth SMB Solutions",
  description:
    "BlueChip Tech is an enterprise-grade software engineering agency. We architect & build high-performance web apps, EdTech engines, and SaaS products with transparency and security guarantees.",
  keywords:
    "BlueChip Tech, Software Engineering, EdTech, Next.js, React, Node.js, Cloud Infrastructure, UAE VAT ERP, Shopify Plus, Data Warehousing, Managed Hosting, Paid Social CAPI",
  openGraph: {
    title:
      "BlueChip Tech | Enterprise & High-Growth SMB Solutions",
    description:
      "End-to-end software engineering & scalable infrastructure for high-growth SMBs and enterprises.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${hankenGrotesk.variable}`}
    >
      <body className="bg-background text-on-surface font-body-md antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
