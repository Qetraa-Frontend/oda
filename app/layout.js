import "./globals.css";

import { Albert_Sans } from "next/font/google";

import Footer from "@/app/components/shared/footer";
import Main from "@/app/components/shared/main";
import Navbar from "@/app/components/shared/navbar";

const albertSans = Albert_Sans({
    subsets: ["latin", "latin-ext"],
    variable: "--font-albert-sans",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
    description: "To a beautifully finished home with Oda’s expertly crafted packages.",
    title: "Oda",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${albertSans.variable} antialiased overflow-x-hidden`}>
                <Navbar />
                <Main>{children}</Main>
                <Footer />
            </body>
        </html>
    );
}
