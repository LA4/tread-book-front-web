import type { Metadata } from "next";
import "./globals.css";
import UserHeader from "@/components/header/userHeader";
import UserFooter from "@/components/footer/userFooter";

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
