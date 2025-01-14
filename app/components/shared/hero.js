"use client";

import { motion, useInView } from "framer-motion";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Hero({
    backgroundImageSrc,
    buttonLink,
    buttonText,
    buttonTopSpace,
    description,
    heroHeight,
    otherData,
    title,
    withSearchInput,
}) {
    const searchParams = useSearchParams();

    const [searchText, setSearchText] = useState(searchParams.get("search") || "");

    const [currentTitle, setCurrentTitle] = useState(title);

    const [previousTitle, setPreviousTitle] = useState("");

    const [isAnimating, setIsAnimating] = useState(false);

    const router = useRouter();

    const pathname = usePathname();

    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    const handleChangeSearchInputValue = (e) => {
        const { value } = e.target;

        setSearchText(value);

        if (value) {
            router.replace(
                `${pathname}?search=${value}`,
                { scroll: false },
            );
        } else router.replace(pathname);
    };

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
        <div className={`relative ${heroHeight} w-[100vw] transition-all duration-1000 overflow-hidden`}>
            <Image
                alt="hero_bg"
                layout="fill"
                loading="eager"
                objectFit="cover"
                src={backgroundImageSrc}
                priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="relative z-40 container px-4 xl:px-0 mx-auto h-full w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
                <div className={`col-span-1 lg:col-span-7 xl:col-span-6 ${otherData ? "mt-[139px] md:mt-[278px]" : "mt-[130px] md:mt-[261px]"}`}>
                    <div
                        className={`${otherData ? "h-[248px] md:h-[339px]" : "h-[186px] md:h-[255px]"} relative`}
                        ref={ref}
                    >
                        {otherData ? (
                            <>
                                <div className="h-[180px] md:h-[251px] overflow-hidden">
                                    {previousTitle && isAnimating && <h1 className="font-medium uppercase text-6xl md:text-8xl text-white md:!leading-[.87] animate-slideOutToTop h-full">{previousTitle}</h1>}
                                    <h1 className={`font-medium uppercase text-6xl md:text-8xl text-white md:!leading-[.87] ${isAnimating ? "animate-slideInFromBottom" : ""} h-full`}>{currentTitle}</h1>
                                </div>
                                <p className="font-medium text-lg md:text-2xl text-white mt-4 md:mt-8 max-w-[468px]">{description}</p>
                            </>
                        ) : (
                            <>
                                <div className="h-[115px] md:h-[160px] overflow-hidden">
                                    <motion.h1
                                        className="font-medium uppercase text-6xl md:text-8xl text-white md:!leading-[.87] h-full"
                                        animate={isInView && {
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        initial={{
                                            opacity: 0,
                                            y: "100vh",
                                        }}
                                        transition={{
                                            damping: 10,
                                            duration: 2,
                                            ease: "easeIn",
                                            stiffness: 33,
                                            type: "spring",
                                        }}
                                    >
                                        {currentTitle}
                                    </motion.h1>
                                </div>
                                {description && (
                                    <motion.p
                                        className="font-medium text-lg md:text-2xl text-white mt-4 md:mt-8 max-w-[468px]"
                                        animate={isInView && {
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        initial={{
                                            opacity: 0,
                                            y: "100vh",
                                        }}
                                        transition={{
                                            damping: 10,
                                            delay: 0.5,
                                            duration: 2,
                                            ease: "easeIn",
                                            stiffness: 33,
                                            type: "spring",
                                        }}
                                    >
                                        {description}
                                    </motion.p>
                                )}
                            </>
                        )}
                    </div>
                    {withSearchInput ? (
                        <div className="mt-[25px] md:mt-[50px] relative flex items-center w-full">
                            <Search
                                className="absolute left-3 text-black opacity-25 pointer-events-none"
                                size={35}
                            />
                            <input
                                className="font-normal text-lg md:text-2xl text-white w-full bg-white bg-opacity-55 border-[1px] py-1 md:py-2 pl-12 md:pl-14 pr-2 md:pr-4 rounded-2xl shadow-none focus:outline-none border-white transition-all duration-1000 placeholder:text-black placeholder:opacity-25"
                                placeholder="What are you looking for ?"
                                type="text"
                                value={searchText}
                                onChange={handleChangeSearchInputValue}
                            />
                        </div>
                    ) : (
                        <Link
                            className={`${buttonTopSpace} inline-block`}
                            href={buttonLink}
                            prefetch={false}
                        >
                            <button className="font-medium text-lg md:text-2xl text-white hover:text-primary bg-transparent border-r-[.5px] border-[1px] hover:border-primary transition-all duration-1000 rounded-lg py-1 md:py-2 px-4 md:px-8 hover:animate-heartBeat">{buttonText}</button>
                        </Link>
                    )}
                </div>
                {otherData && <div className="col-span-1 lg:col-span-5 xl:col-span-6 hidden lg:block">{otherData}</div>}
            </div>
        </div>
    );
}
