import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Technical Task",
  description: "Create a list of products and basket",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
      
    </html>
  );
}
