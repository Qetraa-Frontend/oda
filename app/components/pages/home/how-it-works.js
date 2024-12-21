"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function HomeHowItWorks() {
    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    const steps = [
        {
            alt: "step_1",
            id: 1,
            imageSrc: "/images/pages/home/how-it-works/step_1.png",
        },
        {
            alt: "step_2",
            id: 2,
            imageSrc: "/images/pages/home/how-it-works/step_2.png",
        },
        {
            alt: "step_3",
            id: 3,
            imageSrc: "/images/pages/home/how-it-works/step_3.png",
        },
        {
            alt: "step_4",
            id: 4,
            imageSrc: "/images/pages/home/how-it-works/step_4.png",
        },
    ];

    return (
        <div
            className="container px-4 md:px-6 mx-auto pt-20 md:pt-40 pb-[260px] lg:pb-[520px]"
            ref={ref}
        >
            <motion.div
                animate={isInView && { y: 0 }}
                initial={{ y: "100vh" }}
                transition={{
                    damping: 10,
                    duration: 2,
                    ease: "easeInOut",
                    stiffness: 50,
                    type: "spring",
                }}
            >
                <div className="mb-14 md:mb-28">
                    <h2 className="font-normal text-3xl md:text-5xl text-center leading-relaxed">
                        How it works?
                        <br />
                        {" "}
                        <span className="font-medium text-4xl md:text-6xl uppercase">The 4 Steps</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 md:gap-8 justify-items-center md:justify-items-start">
                    {steps.map(({
                        alt,
                        id,
                        imageSrc,
                    }) => (
                        <div
                            className="col-span-1 md:col-span-3 transform transition-transform duration-1000 hover:scale-110"
                            key={id}
                        >
                            <Image
                                alt={alt}
                                height={390}
                                src={imageSrc}
                                width={288}
                            />
                        </div>
                    ))}
                </div>
            </motion.div>
            <div className="pt-20 md:pt-40">
                <h2 className="font-semibold text-4xl md:text-6xl uppercase text-center !leading-relaxed">
                    Building a Legacy, One
                    <br className="hidden lg:block" />
                    {" "}
                    Project at a Time
                </h2>
            </div>
        </div>
    );
}
