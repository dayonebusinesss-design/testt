import type { Metadata } from "next";
import { Playfair_Display, Inter, Syne } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Café Molière Dubai | The Theater of Gastronomy",
  description: "Experience ultra-premium coffee and French theatrical elegance in the heart of Al Jaddaf, Dubai. A world-class culinary stage.",
  keywords: ["Cafe Moliere Dubai", "Al Jaddaf coffee shop", "Luxury cafe Dubai", "Premium dining Al Jaddaf", "Makeen Residence Dubai"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${syne.variable} scroll-smooth`}>
      <body className="antialiased cursor-none">
        <CustomCursor />
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
