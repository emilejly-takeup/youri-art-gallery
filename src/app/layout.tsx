import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: [
        {
            path: "../fonts/childs-hand.ttf",
            weight: "400",
            style: "normal",
        },
        // Add other weights as needed
    ],
    variable: "--font-geist-sans",
});

const geistMono = localFont({
    src: [
        {
            path: "../fonts/childs-hand-i.ttf",
            weight: "400",
            style: "normal",
        },
        // Add other weights as needed
    ],
    variable: "--font-geist-mono",
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
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
        </html>
    );
}
