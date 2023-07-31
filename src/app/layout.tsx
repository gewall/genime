import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./_components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genime",
  description: "Find your favorite anime",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar
          title="Genimw"
          menus={[
            { menu: "Home", link: "/" },
            { menu: "Animes", link: "/anime/list" },
          ]}
        />
        <main className=" min-h-screen flex-col mx-4 md:mx-8">{children}</main>
      </body>
    </html>
  );
}

