import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "@/components/provider/reduxProvider";

export const metadata: Metadata = {
  title: "Thead book",
  description: "",
  icons: {
    icon: "/public/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-center ">
        <ReduxProvider>
          <>{children}</>
        </ReduxProvider>
      </body>
    </html>
  );
}
