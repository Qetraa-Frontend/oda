"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero({
    backgroundImageSrc,
    buttonLink,
    buttonText,
    description,
    otherData,
    title,
}) {
    const [currentTitle, setCurrentTitle] = useState(title);

    const [previousTitle, setPreviousTitle] = useState("");

    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(
        () => {
            if (currentTitle !== title) {
                setPreviousTitle(currentTitle);

                setCurrentTitle(title);

                setIsAnimating(true);

                const timeout = setTimeout(
                    () => {
                        setIsAnimating(false);
                    },
                    1000,
                );

                return () => clearTimeout(timeout);
            }
        },
        [title], // eslint-disable-line
    );

    return (
        <div
            className="relative bg-cover bg-no-repeat bg-center h-[600px] md:h-[1022px] w-[100vw] transition-all duration-1000"
            style={{ backgroundImage: `url(${backgroundImageSrc})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="relative z-40 container px-4 xl:px-0 mx-auto h-full w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
                <div className="col-span-1 lg:col-span-7 xl:col-span-6 mt-[139px] md:mt-[278px]">
                    <div className="h-[248px] md:h-[339px] relative">
                        <div className="h-[180px] md:h-[251px] overflow-hidden">
                            {previousTitle && isAnimating && (
                                <h1 className="font-medium uppercase text-6xl md:text-8xl text-white md:!leading-[.87] animate-slideOutToTop h-full">
                                    {previousTitle}
                                </h1>
                            )}
                            <h1 className={`font-medium uppercase text-6xl md:text-8xl text-white md:!leading-[.87] ${isAnimating ? "animate-slideInFromBottom" : ""} h-full`}>
                                {currentTitle}
                            </h1>
                        </div>
                        <p className="font-medium text-lg md:text-2xl text-white mt-3 md:mt-6 max-w-[468px]">{description}</p>
                    </div>
                    <Link
                        className="mt-12 md:mt-24 inline-block"
                        href={buttonLink}
                        prefetch={false}
                    >
                        <button className="font-medium text-lg md:text-2xl text-white hover:text-primary bg-black bg-opacity-20 bg-transparent border-r-[.5px] border-[1px] hover:border-primary transition-all duration-1000 rounded-lg py-1 md:py-2 px-4 md:px-8 hover:animate-heartBeat">{buttonText}</button>
                    </Link>
                </div>
                {otherData && <div className="col-span-1 lg:col-span-5 xl:col-span-6 hidden lg:block">{otherData}</div>}
            </div>
        </div>
    );
}
