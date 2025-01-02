"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { plansContent } from "@/app/data/why-oda";

export default function WhyOdaPlansContent() {
    const [isLg, setIsLg] = useState(window.innerWidth < 1279); // eslint-disable-line

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
        <div className="bg-[#222] pt-16 md:pt-32 pb-7 lg:pb-14">
            <div
                className="container px-4 xl:px-0 mx-auto"
                ref={ref}
            >
                <div>
                    <motion.div
                        animate={isInView && { y: 0 }}
                        className="mb-16 md:mb-32 text-white"
                        initial={{ y: "100vh" }}
                        transition={{
                            damping: 10,
                            duration: 2,
                            ease: "easeInOut",
                            stiffness: 50,
                            type: "spring",
                        }}
                    >
                        <h2 className="font-semibold text-3xl md:text-5xl text-center !leading-relaxed">
                            <span className="font-bold text-lg md:text-2xl">What You Get With Oda</span>
                            <br />
                            {" "}
                            All Our Plans Include
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-2 md:gap-4 justify-items-center xl:justify-items-start">
                        {plansContent.map(({
                            description,
                            id,
                            title,
                        }) => (
                            <motion.div
                                animate={isInView && { x: 0 }}
                                className="col-span-1 xl:col-span-4 w-full min-h-[263px] p-2 md:p-4 relative"
                                initial={{ x: isLg ? id === 1 || id === 2 || id === 5 || id === 6 ? "100vw" : "-100vw" : id === 1 || id === 2 || id === 3 ? "100vw" : "-100vw" }} // eslint-disable-line
                                key={id}
                                transition={{
                                    delay: 0,
                                    duration: 2,
                                    ease: "easeIn",
                                }}
                            >
                                <div className="absolute left-4 top-4">
                                    <span className="!font-nanum-myeongjo font-light text-lg md:text-2xl p-2 rounded-full bg-primary">
                                        0
                                        {id}
                                    </span>
                                </div>
                                <div className="relative top-12">
                                    <h3 className="!font-nanum-myeongjo font-medium text-lg md:text-2xl text-white mb-1 md:mb-2">{title}</h3>
                                    <p className="!font-nanum-myeongjo font-light text-xs md:text-sm text-white py-7 md:py-12">{description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
