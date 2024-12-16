import "./globals.css";

import { Albert_Sans } from "next/font/google";

import Footer from "@/app/components/shared/footer";
import Navbar from "@/app/components/shared/navbar";

const albertSans = Albert_Sans({
    subsets: ["latin"],
    variable: "--font-albert-sans",
});

export const metadata = {
    description: "To a beautifully finished home with Oda’s expertly crafted packages.",
    title: "Oda",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${albertSans.variable} ${albertSans.variable} antialiased overflow-x-hidden`}>
                <Navbar />
                <main className="min-h-screen font-[family-name:var(--font-albert-sans)]">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
