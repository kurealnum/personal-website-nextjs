import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
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
      <body
        className={
          outfit.className +
          " bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#1d4ed8] via-[#1e40af] to-[#111827]"
        }
      >
        <CustomNavBar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
