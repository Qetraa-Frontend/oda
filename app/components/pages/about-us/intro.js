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
            className="container px-4 md:px-6 mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-16 md:py-36"
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
                    src="/images/pages/about-us/intro.png"
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
                <p className="font-normal text-2xl md:text-4xl">Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convalli`s vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.</p>
            </motion.div>
        </div>
    );
}
