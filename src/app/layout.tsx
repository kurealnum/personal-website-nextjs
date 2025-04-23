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
  description: "Personal website of Oscar Gaske (Oscar CS)",
  keywords: ["oscargaske", "oscarcs", "oscarg", "gaske", "oscar", "oscarcs"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark animate-zoom-in [&_h2]:text-2xl [&_h3]:text-lg [&_p]:max-w-[500px] [&_p]:font-light"
    >
      <body className={outfit.className}>
        <CustomNavBar />
        {children}
      </body>
    </html>
  );
}
