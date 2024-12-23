import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const mainFont = localFont({
    src: [
        {
            path: "../fonts/childs-hand.ttf",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-main",
});

const italicFont = localFont({
    src: [
        {
            path: "../fonts/childs-hand-i.ttf",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-italic",
});

export const metadata: Metadata = {
    title: "Youri Art Gallery",
    description: "Art gallery showcase",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${mainFont.variable} ${italicFont.variable} antialiased`}>{children}</body>
        </html>
    );
}
