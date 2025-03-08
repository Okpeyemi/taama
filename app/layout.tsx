import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Kablammo = localFont({
  src: "./fonts/Kablammo-Regular.ttf",
  variable: "--font-kablammo",
  weight: "100 900",
});

const Montserrat = localFont({
  src: "./fonts/Montserrat-Regular.ttf",
  variable: "--font-montserrat",
  weight: "100 900",
});

const Poppins = localFont({
  src: "./fonts/Poppins-Bold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Taama",
  description: "Recueil Bd Africain 🧡💙",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${Kablammo.variable} ${Montserrat.variable} ${Poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
