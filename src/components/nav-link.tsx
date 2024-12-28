import { NavItem } from "@/config/navigation";
import Link from "next/link";
import navigationContent from "../../public/content/navigation.json";

type NavLinkProps = {
    item: NavItem;
    pathname: string | null;
    onClick?: () => void;
    className?: string;
    activeClassName?: string;
};

export default function NavLink({ item, pathname, onClick, className = "", activeClassName }: NavLinkProps) {
    return (
        <Link
            href={item.href}
            className={`hover:opacity-80 ${pathname?.includes(item.href) ? `${activeClassName || "text-white"} font-bold` : ""} ${className}`}
            onClick={onClick}
        >
            {navigationContent.menu[item.label]}
        </Link>
    );
}
