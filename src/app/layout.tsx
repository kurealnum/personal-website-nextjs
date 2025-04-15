import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import CustomNavBar from "@/components/CustomNavBar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oscar's Website",
  description: "Personal website of Oscar Gaske",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark animate-zoom-in">
      <body className={outfit.className}>
        <CustomNavBar />
        {children}
      </body>
    </html>
  );
}
