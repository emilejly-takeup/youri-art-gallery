import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
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
    const basePath = process.env.NODE_ENV === "production" ? "/youri-art-gallery" : "";

    return (
        <html lang="fr">
            <body
                className={`${mainFont.variable} ${italicFont.variable} antialiased min-h-screen flex flex-col`}
                style={{ "--bg-image-url": `url("${basePath}/assets/bg.jpg")` } as React.CSSProperties}
            >
                <div className="min-h-screen flex flex-col backdrop-blur-xl bg-white/30">
                    <NavBar />
                    <main className="flex items-center justify-center lg:max-h-[calc(100vh-theme(spacing.52))] overflow-y-auto">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
