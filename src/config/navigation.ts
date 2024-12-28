import navigationContent from "../../public/content/navigation.json";

export type NavItem = {
    href: string;
    label: keyof typeof navigationContent.menu;
};

export const NAV_ITEMS: NavItem[] = [
    { href: "/animals", label: "animals" },
    { href: "/nature", label: "nature" },
    { href: "/misc", label: "others" },
    { href: "/matos", label: "equipment" },
];
