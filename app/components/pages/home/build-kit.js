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
            className="container px-4 md:px-6 mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-20 md:pt-44 md:pb-36"
            ref={ref}
        >
            <motion.div
                animate={isInView && { x: 0 }}
                className="col-span-1 md:col-span-6"
                initial={{ x: "-100vw" }}
                transition={{
                    delay: 0,
                    duration: 1.5,
                    ease: "easeIn",
                }}
            >
                <Image
                    alt="Build Kit"
                    height={677}
                    layout="responsive"
                    src="/images/pages/home/build_kit.png"
                    width={564}
                />
            </motion.div>
            <motion.div
                animate={isInView && { x: 0 }}
                className="col-span-1 md:col-span-6"
                initial={{ x: "100vw" }}
                transition={{
                    delay: 0,
                    duration: 1.5,
                    ease: "easeIn",
                }}
            >
                <h3 className="font-bold text-3xl md:text-5xl uppercase !leading-relaxed h-20 md:h-40">
                    Build your Kit with
                    <br className="hidden xl:block" />
                    {" "}
                    <span className="font-bold text-3xl md:text-5xl uppercase text-primary">oda</span>
                </h3>
                <p className="font-normal text-xl md:text-3xl py-8 md:py-16">Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.</p>
                <Link
                    className="text-lg md:text-2xl font-medium relative top-6 md:top-12"
                    href="/why-oda"
                    prefetch={false}
                >
                    <button className="bg-gray-200 text-black py-2 px-8 border border-black rounded">Learn More</button>
                </Link>
            </motion.div>
        </div>
    );
}
