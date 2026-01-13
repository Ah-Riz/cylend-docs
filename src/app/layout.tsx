import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/main-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cylend Documentation",
    template: "%s | Cylend Docs",
  },
  description: "Privacy-preserving credit infrastructure built on Mantle and Sapphire networks. Complete documentation for developers.",
  keywords: ["Cylend", "DeFi", "Privacy", "Mantle", "Sapphire", "Lending", "Blockchain"],
  authors: [{ name: "Cylend Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://docs.cylend.io",
    title: "Cylend Documentation",
    description: "Privacy-preserving credit infrastructure documentation",
    siteName: "Cylend Docs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cylend Documentation",
    description: "Privacy-preserving credit infrastructure documentation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center px-6">
              <MainNav />
            </div>
          </header>
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
