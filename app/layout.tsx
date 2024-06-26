import type { Metadata } from "next";
import { Cabin as Inter } from "next/font/google";
import "./globals.css";

import ToasterContext from "./context/ToasterContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hola Amigo!",
  description: "A friendly messaging app for you and your friends.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterContext />
        {children}
      </body>
    </html>
  );
}
