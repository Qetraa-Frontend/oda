"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { plansContent } from "@/app/data/why-oda";

export default function WhyOdaPlansContent() {
    const [isLg, setIsLg] = useState(false); // eslint-disable-line

    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    useEffect(
        () => {
            const handleResize = () => setIsLg(window.innerWidth < 1279); // eslint-disable-line

            window.addEventListener( // eslint-disable-line
                "resize",
                handleResize,
            );

            return () => {
                window.removeEventListener( // eslint-disable-line
                    "resize",
                    handleResize,
                );
            };
        },
        [],
    );

    return (
        <div className="bg-[#222] py-12 md:py-24 overflow-hidden">
            <div
                className="container mx-auto"
                ref={ref}
            >
                <div>
                    <motion.h2
                        className="font-semibold text-2xl sm:text-3xl md:text-5xl text-white text-center !leading-relaxed mb-6 md:mb-12"
                        animate={isInView && {
                            opacity: 1,
                            y: 0,
                        }}
                        initial={{
                            opacity: 0,
                            y: "100vh",
                        }}
                        transition={{
                            damping: 10,
                            duration: 2,
                            ease: "easeIn",
                            stiffness: 33,
                            type: "spring",
                        }}
                    >
                        <span className="font-bold text-base sm:text-lg md:text-2xl">We design & built hassle-free finishing packages</span>
                        <br />
                        {" "}
                        All Our Plans Include
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-2 md:gap-4 justify-items-center xl:justify-items-start">
                        {plansContent.map(({
                            description,
                            id,
                            title,
                        }) => (
                            <motion.div
                                animate={isInView && { x: 0 }}
                                className={`col-span-1 xl:col-span-4 w-full min-h-[100px] md:min-h-[200px] p-2 md:p-4 relative ${id === 1 || id === 2 || id === 3 ? "xl:mb-14" : ""}`}
                                initial={{ x: isLg ? id === 1 || id === 2 || id === 5 || id === 6 ? "100vw" : "-100vw" : id === 1 || id === 2 || id === 3 ? "100vw" : "-100vw" }} // eslint-disable-line
                                key={id}
                                transition={{
                                    damping: 10,
                                    delay: 0.5,
                                    duration: 2,
                                    ease: "easeIn",
                                    stiffness: 40,
                                    type: "spring",
                                }}
                            >
                                <span className="font-normal font-nanum-myeongjo text-lg md:text-2xl py-2 px-3 rounded-full bg-primary absolute left-4 top-4">
                                    0
                                    {id}
                                </span>
                                <div className="mt-16">
                                    <h5 className="font-extrabold font-nanum-myeongjo text-lg md:text-2xl text-white sm:min-h-16">{title}</h5>
                                    <p className="font-bold font-nanum-myeongjo text-sm md:text-lg text-white mt-3 md:mt-6">{description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
