"use client";

import { NAV_ITEMS } from "@/config/navigation";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import NavLink from "./nav-link";

type DrawerProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function NavDrawer({ isOpen, onClose }: DrawerProps) {
    const pathname = usePathname();

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
            <div
                className={`fixed inset-0 backdrop-blur-sm bg-white/70 transition-opacity z-40 md:hidden ${
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={onClose}
            />

            <div
                className={`fixed top-0 left-0 h-full w-full bg-background/95 backdrop-blur-sm z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <button onClick={onClose} className="absolute top-4 right-4 p-2" aria-label="Close menu">
                    ✕
                </button>

                <nav className="p-4 pt-16 mt-4">
                    <ul className="flex flex-col text-left gap-4 text-2xl">
                        <div className="flex flex-col gap-4 mx-auto">
                            {NAV_ITEMS.map((item) => (
                                <li key={item.href}>
                                    <NavLink item={item} pathname={pathname} onClick={onClose} activeClassName="text-red-500" />
                                </li>
                            ))}
                        </div>
                    </ul>
                </nav>
            </div>
        </>
    );
}
