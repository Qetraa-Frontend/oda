"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function AboutUsOurVision() {
    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    return (
        <div className="bg-[#222] pt-[36px] md:pt-[72px] pb-[37px] md:pb-[74px] overflow-hidden">
            <div
                className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[47px] md:gap-[94px]"
                ref={ref}
            >
                <motion.div
                    animate={isInView && { x: 0 }}
                    className="col-span-1 lg:col-span-6"
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
                        alt="our_vision"
                        height={627}
                        loading="lazy"
                        src="/images/pages/about-us/our_vision.webp"
                        width={683}
                    />
                </motion.div>
                <motion.div
                    animate={isInView && { x: 0 }}
                    className="col-span-1 lg:col-span-6"
                    initial={{ x: "100vw" }}
                    transition={{
                        damping: 10,
                        duration: 2,
                        ease: "easeIn",
                        stiffness: 40,
                        type: "spring",
                    }}
                >
                    <h2 className="font-bold text-3xl md:text-5xl text-white uppercase">Our Vision</h2>
                    <p className="font-normal text-[22px] md:text-[32px] text-white mt-6 md:mt-12">To passionately inspire and be known as the innovative go-to design and build platform hub in Egypt and beyond.</p>
                </motion.div>
            </div>
        </div>
    );
}
