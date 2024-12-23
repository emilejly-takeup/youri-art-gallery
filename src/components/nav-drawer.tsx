"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import navigationContent from "../../public/content/navigation.json";

type DrawerProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function NavDrawer({ isOpen, onClose }: DrawerProps) {
    const pathname = usePathname();

    // Prevent scroll when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40 md:hidden ${
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={onClose}
            />

            {/* Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-52 bg-background z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <button onClick={onClose} className="absolute top-4 right-4 p-2" aria-label="Close menu">
                    ✕
                </button>

                <nav className="p-4 pt-16 mt-4">
                    <ul className="flex flex-col text-left gap-4 text-2xl">
                        <div className="flex flex-col gap-4 mx-auto">
                            <li className="pb-4">
                                <Link href="/" className={`hover:opacity-80 ${pathname === "/" ? "text-red-500" : ""}`} onClick={onClose}>
                                    {navigationContent.menu.home}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/animals"
                                    className={`hover:opacity-80 ${pathname?.includes("/animals") ? "text-red-500" : ""}`}
                                    onClick={onClose}
                                >
                                    {navigationContent.menu.animals}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/nature"
                                    className={`hover:opacity-80 ${pathname?.includes("/nature") ? "text-red-500" : ""}`}
                                    onClick={onClose}
                                >
                                    {navigationContent.menu.nature}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/matos"
                                    className={`hover:opacity-80 ${pathname?.includes("/matos") ? "text-red-500" : ""}`}
                                    onClick={onClose}
                                >
                                    {navigationContent.menu.equipment}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/misc"
                                    className={`hover:opacity-80 ${pathname?.includes("/misc") ? "text-red-500" : ""}`}
                                    onClick={onClose}
                                >
                                    {navigationContent.menu.others}
                                </Link>
                            </li>
                        </div>
                    </ul>
                </nav>
            </div>
        </>
    );
}
