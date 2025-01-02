"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { partners } from "@/app/data/home";

export default function HomeOurPartners() {
    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    return (
        <div className="pt-5 md:pt-11">
            <div className="mb-12 md:mb-24">
                <h2 className="font-semibold text-4xl md:text-6xl text-white !leading-normal">
                    Our
                    <br className="hidden xl:block" />
                    {" "}
                    Partners
                </h2>
            </div>
            <motion.div
                animate={isInView && { opacity: 1 }}
                initial={{ opacity: 0 }}
                ref={ref}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                }}
            >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 justify-items-center md:justify-items-start">
                    {partners.map(({
                        alt,
                        id,
                        imageSrc,
                    }) => (
                        <div
                            className="col-span-1 md:col-span-4"
                            key={id}
                        >
                            <Image
                                alt={alt}
                                height={235}
                                src={imageSrc}
                                width={400}
                            />
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
