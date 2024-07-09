import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thead book",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <main>{children}</main>
      </body>
    </html>
  );
}
