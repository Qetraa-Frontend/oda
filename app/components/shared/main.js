"use client";

import { MoveUp } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/app/ui/button";

import Loader from "./loader";

export default function Main({ children }) {
    const [showLoader, setShowLoader] = useState(true);

    const [showToTopButton, setShowToTopButton] = useState(false);

    const handleScrollToTop = () => {
        window.scrollTo({ // eslint-disable-line
            behavior: "smooth",
            top: 0,
        });
    };

    useEffect(
        () => {
            const handleScroll = () => {
                if (window.scrollY > window.innerHeight * 0.75) setShowToTopButton(true); // eslint-disable-line
                else setShowToTopButton(false);
            };

            window.addEventListener( // eslint-disable-line
                "scroll",
                handleScroll,
            );

            return () => {
                window.removeEventListener( // eslint-disable-line
                    "scroll",
                    handleScroll,
                );
            };
        },
        [],
    );

    useEffect(
        () => {
            if (typeof window !== "undefined") setShowLoader(false);
            else setShowLoader(true);
        },
        [],
    );

    return showLoader ? <Loader /> : (
        <main className="min-h-screen font-albert-sans">
            {children}
            <Button
                className={`fixed bottom-5 right-5 z-30 cursor-pointer bg-white hover:bg-primary text-black p-3 w-12 h-12 bg-opacity-80 rounded-full shadow-lg hover:bg-opacity-100 hover:animate-heartBeat transition-all duration-300 ${
                    showToTopButton
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-0 pointer-events-none"
                }`}
                onClick={handleScrollToTop}
            >
                <MoveUp color="black" />
            </Button>
        </main>
    );
}
