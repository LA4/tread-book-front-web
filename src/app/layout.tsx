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
      <body className="relative" >
        <UserHeader username="Ludovic" pages="300" />
        {children}
        <UserFooter />
      </body>
    </html>
  );
}
