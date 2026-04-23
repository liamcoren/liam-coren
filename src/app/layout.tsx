import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import PlausibleProvider from "next-plausible";
import { InspectGuard } from "@/components/inspect-guard";
import { PersonJsonLd, WebsiteJsonLd } from "@/components/seo/json-ld";
import { SiteChrome } from "@/components/site-chrome";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const themeClassScript = `(function(){
  try {
    var t = localStorage.getItem('theme');
    var dark = false;
    if (t === 'dark') dark = true;
    else if (t === 'light') dark = false;
    else dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {}
})();`;

const title = "Liam Coren — Liferay Expert and Tinker";
const description =
  "Liam Coren is a Liferay Expert and Tinker. About, work, and contact.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title,
  description,
  authors: [{ name: "Liam Coren", url: getSiteUrl() }],
  creator: "Liam Coren",
  keywords: [
    "Liferay",
    "Liam Coren",
    "Liferay Expert",
    "Tinker",
    "portfolio",
  ],
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Liam Coren",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: getSiteUrl(),
    images: [
      {
        url: "/liamcoren-profile-pic.png",
        width: 512,
        height: 512,
        alt: "Liam Coren",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/liamcoren-profile-pic.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  const inner = (
    <ThemeProvider>
      {plausibleDomain ? (
        <PlausibleProvider domain={plausibleDomain}>{children}</PlausibleProvider>
      ) : (
        children
      )}
      <ThemeToggle />
      <SiteChrome />
      <InspectGuard />
    </ThemeProvider>
  );

  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeClassScript }} />
      </head>
      <body
        className={`${GeistSans.className} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <PersonJsonLd />
        <WebsiteJsonLd />
        {inner}
      </body>
    </html>
  );
}
