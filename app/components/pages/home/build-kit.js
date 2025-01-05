"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function HomeBuildKit() {
    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    return (
        <div
            className="container px-4 xl:px-0 mx-auto grid grid-cols-1 md:grid-cols-12 gap-[36px] md:gap-[72px] pt-[73px] md:pt-[146px] pb-[75px] md:pb-[150px]"
            ref={ref}
        >
            <motion.div
                animate={isInView && { x: 0 }}
                className="col-span-1 md:col-span-6"
                initial={{ x: "-100vw" }}
                transition={{
                    damping: 10,
                    duration: 2,
                    ease: "easeIn",
                    stiffness: 50,
                    type: "spring",
                }}
            >
                <Image
                    alt="build_kit"
                    height={677}
                    loading="lazy"
                    src="/images/pages/home/build_kit.webp"
                    width={564}
                />
            </motion.div>
            <motion.div
                animate={isInView && { x: 0 }}
                className="col-span-1 md:col-span-6"
                initial={{ x: "100vw" }}
                transition={{
                    damping: 10,
                    duration: 2,
                    ease: "easeIn",
                    stiffness: 50,
                    type: "spring",
                }}
            >
                <h2 className="font-bold text-3xl md:text-5xl uppercase md:!leading-relaxed h-20 md:h-40">
                    Build your Kit
                    {" "}
                    <span className="normal-case">With</span>
                    <br className="hidden xl:block" />
                    {" "}
                    <span className="font-bold text-3xl md:text-5xl uppercase text-primary">oda</span>
                </h2>
                <p className="font-normal opacity-65 text-[22px] md:text-[32px] md:leading-[1.4] my-4 md:my-8 py-4 md:py-8">Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.</p>
                <Link
                    className="font-medium text-lg md:text-2xl inline-block"
                    href="/why-oda"
                    prefetch={false}
                >
                    <button className="bg-gray-200 bg-opacity-60 text-[#222] py-1 md:py-2 px-4 md:px-8 border border-[#222] rounded hover:bg-[#222] hover:text-white transition-all duration-1000">Learn More</button>
                </Link>
            </motion.div>
        </div>
    );
}
