import "@dannymichel/proxima-nova";
import "./globals.css";
import Navbar from "../components/navbar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-white text-neutral-900 max-w-3xl mx-auto px-6 py-12">
                <Navbar />
                <main className="mt-12">{children}</main>
            </body>
        </html>
    );
}

