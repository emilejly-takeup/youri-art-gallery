"use client";

import { NAV_ITEMS } from "@/config/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavDrawer from "./nav-drawer";
import NavLink from "./nav-link";

export default function NavBar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="w-full py-4 relative">
            <nav className="container mx-auto px-4">
                <button
                    onClick={() => setIsDrawerOpen(true)}
                    className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 p-2 text-2xl"
                    aria-label="Open menu"
                >
                    ☰
                </button>

                <div className="flex justify-between items-center">
                    <ul className="w-full hidden md:grid grid-cols-5 items-center text-xs md:text-base xl:text-lg">
                        {NAV_ITEMS.slice(0, 2).map((item) => (
                            <li key={item.href} className="text-center">
                                <NavLink item={item} pathname={pathname} />
                            </li>
                        ))}
                        <li className="text-center text-base md:text-xl xl:text-2xl font-bold">
                            <Link href="/" className="hover:opacity-80">
                                YOURI
                            </Link>
                        </li>
                        {NAV_ITEMS.slice(2).map((item) => (
                            <li key={item.href} className="text-center">
                                <NavLink item={item} pathname={pathname} />
                            </li>
                        ))}
                    </ul>

                    <div className="md:hidden w-full text-center text-xl font-bold">
                        <Link href="/" className="hover:opacity-80">
                            YOURI
                        </Link>
                    </div>
                </div>
            </nav>

            <NavDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </header>
    );
}
