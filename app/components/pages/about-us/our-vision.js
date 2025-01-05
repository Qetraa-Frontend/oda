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
        <div className="bg-[#222] pt-[36px] md:pt-[72px] pb-[37px] md:pb-[74px]">
            <div
                className="container px-4 xl:px-0 mx-auto grid grid-cols-1 md:grid-cols-12 gap-[47px] md:gap-[94px]"
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
                        alt="our_vision"
                        height={627}
                        loading="lazy"
                        src="/images/pages/about-us/our_vision.webp"
                        width={683}
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
                    <h2 className="font-bold text-3xl md:text-5xl text-white uppercase">Our Vision</h2>
                    <p className="font-normal text-[22px] md:text-[32px] text-white mt-6 md:mt-12">Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convalli`s vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.</p>
                </motion.div>
            </div>
        </div>
    );
}
