import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full py-4 md:py-8 gap-1 flex flex-col items-center text-xs md:text-sm">
            <Link href="/" className="text-sm md:text-base font-bold hover:opacity-80">
                YOURI
            </Link>
            <Link href="tel:+33612345678" className="hover:opacity-80">
                +1 717 615 4386
            </Link>
            <Link href="mailto:yboggiopola@gmail.com" className="hover:opacity-80">
                yboggiopola@gmail.com
            </Link>
        </footer>
    );
}
