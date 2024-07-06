import UserFooter from "@/components/footer/userFooter";
import UserHeader from "@/components/header/userHeader";
import type { Metadata } from "next";

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
        <>

            {children}
        </>
    );
}
