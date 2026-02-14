
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex gap-6 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/papers">Papers</Link>
            <Link href="/cv">CV</Link>
        </nav>
    );
}
