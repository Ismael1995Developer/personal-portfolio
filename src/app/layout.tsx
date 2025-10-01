import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { baseMetadata } from "@/lib/seo";
import { GA_TRACKING_ID } from "@/lib/analytics";
import { StructuredData } from "@/components/common/StructuredData";
import { CookieBanner } from "@/components/common/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* Favicon e ícones */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/faicon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/faicon192.png" sizes="192x192" />
        <link rel="manifest" href="/manifest.json" />

        {/* Meta tags adicionais para SEO */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/faicon192.png" />
        <link rel="author" href="/humans.txt" />
        <link rel="security" href="/.well-known/security.txt" />
      </head>
      <body className="font-sans antialiased">
        <StructuredData />
        {children}
        <GoogleAnalytics gaId={GA_TRACKING_ID} />
        <CookieBanner />
      </body>
    </html>
  );
}
