"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function AboutUsOurMission() {
    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    return (
        <div className="bg-secondary-foreground py-8 md:py-16">
            <div
                className="container px-4 md:px-6 mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16"
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
                    <h2 className="font-bold text-3xl md:text-5xl uppercase">Our Mission</h2>
                    <p className="font-normal text-xl md:text-3xl mt-6 md:mt-12">Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convalli`s vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.</p>
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
                    <Image
                        alt="our_vision"
                        height={627}
                        src="/images/pages/about-us/our_mission.png"
                        width={683}
                    />
                </motion.div>
            </div>
        </div>
    );
}
