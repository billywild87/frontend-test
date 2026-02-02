import { Merriweather, Source_Sans_3 } from "next/font/google";

import { css } from "@/styled-system/css";
import { Metadata } from "next";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Les Échos — Newsletters économiques",
  description:
    "Toute l'actualité économique et financière des Échos, sélectionnée et analysée par la rédaction, directement dans votre boîte mail.",
  icons: {
    icon: [
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/favicons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: "/favicons/apple-touch-icon.png",
  },
};

const main = css({
  maxWidth: "1200px",
  marginInline: "auto",
  padding: "4",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${sourceSans.className} ${merriweather.variable}`}>
        <main className={main}>{children}</main>
      </body>
    </html>
  );
}
