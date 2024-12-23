"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import navigationContent from "../../public/content/navigation.json";
import NavDrawer from "./nav-drawer";
import ThemeToggle from "./theme-toggle";

export default function NavBar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const pathname = usePathname();
    return (
        <header className="w-full py-4 relative">
            <nav className="container mx-auto px-4">
                {/* Burger Menu Button - Only visible on mobile */}
                <button
                    onClick={() => setIsDrawerOpen(true)}
                    className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 p-2 text-2xl"
                    aria-label="Open menu"
                >
                    ☰
                </button>

                {/* Desktop Navigation */}
                <div className="flex justify-between items-center">
                    <ul className="w-full hidden md:grid grid-cols-5 items-center text-xs md:text-base xl:text-lg">
                        <li className="text-center">
                            <Link href="/animals" className={`hover:opacity-80 ${pathname?.includes("/animals") ? "text-red-500" : ""}`}>
                                {navigationContent.menu.animals}
                            </Link>
                        </li>
                        <li className="text-center">
                            <Link href="/nature" className={`hover:opacity-80 ${pathname?.includes("/nature") ? "text-red-500" : ""}`}>
                                {navigationContent.menu.nature}
                            </Link>
                        </li>
                        <li className="text-center text-base md:text-xl xl:text-2xl font-bold">
                            <Link href="/" className="hover:opacity-80">
                                YOURI
                            </Link>
                        </li>
                        <li className="text-center">
                            <Link href="/matos" className={`hover:opacity-80 ${pathname?.includes("/matos") ? "text-red-500" : ""}`}>
                                {navigationContent.menu.equipment}
                            </Link>
                        </li>
                        <li className="text-center">
                            <Link href="/misc" className={`hover:opacity-80 ${pathname?.includes("/misc") ? "text-red-500" : ""}`}>
                                {navigationContent.menu.others}
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Title - Center aligned */}
                    <div className="md:hidden w-full text-center text-xl font-bold">
                        <Link href="/" className="hover:opacity-80">
                            YOURI
                        </Link>
                    </div>

                    {/* Theme Toggle - Always visible */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 p-2">
                        <ThemeToggle />
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <NavDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </header>
    );
}
