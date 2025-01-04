"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function AboutUsIntro() {
    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    return (
        <div
            className="container px-4 xl:px-0 mx-auto grid grid-cols-1 md:grid-cols-12 gap-[31px] md:gap-[62px] pt-20 md:pt-40 pb-[72px] md:pb-36"
            ref={ref}
        >
            <motion.div
                animate={isInView && { x: 0 }}
                className="col-span-1 md:col-span-6"
                initial={{ x: "-100vw" }}
                transition={{
                    delay: 0,
                    duration: 2,
                    ease: "easeIn",
                }}
            >
                <Image
                    alt="intro"
                    height={820}
                    loading="lazy"
                    src="/images/pages/about-us/intro.webp"
                    width={650}
                />
            </motion.div>
            <motion.div
                animate={isInView && { x: 0 }}
                className="col-span-1 md:col-span-6"
                initial={{ x: "100vw" }}
                transition={{
                    delay: 0,
                    duration: 2,
                    ease: "easeIn",
                }}
            >
                <p className="font-normal text-[28px] md:text-[40px]">Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convalli`s vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.</p>
            </motion.div>
        </div>
    );
}
