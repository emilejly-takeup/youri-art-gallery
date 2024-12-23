import Link from "next/link";
import footerContent from "../../public/content/footer.json";

export default function Footer() {
    return (
        <footer className="w-full pt-12 gap-1 flex flex-col items-center text-xs lg:text-sm">
            <Link href="/" className="text-sm lg:text-base font-bold hover:opacity-80">
                {footerContent.brand}
            </Link>
            <Link href={`tel:${footerContent.phone}`} className="hover:opacity-80">
                {footerContent.phone}
            </Link>
            <Link href={`mailto:${footerContent.email}`} className="hover:opacity-80">
                {footerContent.email}
            </Link>
        </footer>
    );
}
