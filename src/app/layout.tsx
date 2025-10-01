import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import Header from './components/header'
import Footer from './components/footer'
import { SITE_TITLE, SITE_SUB_TITLE, SITE_DESCRIPTION } from "@/app/config/meta";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${SITE_TITLE} - ${SITE_SUB_TITLE}`,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="container mx-auto p-4">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
