"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function NewsBlocks() {
    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    return (
        <div className="container mx-auto max-h-[741px]">
            <div
                className="flex relative top-[90px] md:top-[180px] max-h-[741px] z-40"
                ref={ref}
            >
                <motion.div
                    animate={isInView && { x: 0 }}
                    className="w-1/2 hidden md:block"
                    initial={{ x: "-100vw" }}
                    transition={{
                        damping: 10,
                        duration: 2,
                        ease: "easeIn",
                        stiffness: 40,
                        type: "spring",
                    }}
                >
                    <Image
                        alt="news_letter"
                        className="h-full object-cover xl:object-fill w-full rounded-tl-lg rounded-bl-lg"
                        height={741}
                        loading="lazy"
                        src="/images/pages/news/blocks.webp"
                        width={821}
                    />
                </motion.div>
                <motion.div
                    animate={isInView && { x: 0 }}
                    className="w-full md:w-1/2 bg-primary pt-[43px] md:pt-[86px] pb-[63px] md:pb-[127px] pr-[16px] md:pr-[32px] pl-[17px] md:pl-[35px] rounded-lg md:rounded-tl-[0px] md:rounded-bl-[0px] md:rounded-tr-xl md:rounded-br-xl"
                    initial={{ x: "100vw" }}
                    transition={{
                        damping: 10,
                        duration: 2,
                        ease: "easeIn",
                        stiffness: 40,
                        type: "spring",
                    }}
                >
                    <p className="font-medium text-lg md:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Link
                        className="mt-[44px] md:mt-[88px] block"
                        href="/about-us"
                        prefetch={false}
                    >
                        <button className="font-medium text-lg md:text-2xl text-black hover:text-white bg-transparent border-black border-r-[.5px] border-[1px] hover:border-white transition-all duration-1000 rounded-lg py-1 md:py-2 px-4 md:px-8">Learn More</button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
