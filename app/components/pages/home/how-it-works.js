"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { steps } from "@/app/data/home";

export default function HomeHowItWorks() {
    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    return (
        <div
            className="container px-4 xl:px-0 mx-auto pt-20 md:pt-40 pb-[276px] lg:pb-[553px]"
            ref={ref}
        >
            <motion.div
                animate={isInView && { y: 0 }}
                initial={{ y: "100vh" }}
                transition={{
                    damping: 10,
                    duration: 2,
                    ease: "easeIn",
                    stiffness: 50,
                    type: "spring",
                }}
            >
                <h2 className="font-medium text-3xl md:text-5xl text-center mb-[53px] md:mb-[107px] !leading-snug">
                    <span className="opacity-80">How it works?</span>
                    <br />
                    {" "}
                    <span className="font-medium text-[40px] md:text-[64px] uppercase">The 4 Steps</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-4 md:gap-8 justify-items-center xl:justify-items-start">
                    {steps.map(({
                        id,
                        imageSrc,
                        title,
                    }) => (
                        <div
                            className="col-span-1 xl:col-span-3 transform transition-transform duration-1000 hover:scale-110 w-full max-w-[288px] h-[390px] relative bg-cover bg-no-repeat bg-top rounded-xl overflow-hidden"
                            key={id}
                            style={{ backgroundImage: `url(${imageSrc})` }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-20" />
                            <div className="relative z-10 px-2 md:px-4 pb-3 md:pb-6 h-full flex flex-col justify-end">
                                <span className="font-normal !font-nanum-myeongjo text-lg md:text-2xl text-white">
                                    0
                                    {id}
                                </span>
                                <h5 className="font-semibold text-lg md:text-2xl text-white">{title}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
            <div className="mt-20 md:mt-40">
                <h3 className="font-semibold text-4xl md:text-6xl uppercase text-center !leading-relaxed">
                    Building a Legacy, One
                    <br className="hidden lg:block" />
                    {" "}
                    Project at a Time
                </h3>
            </div>
        </div>
    );
}
