"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

import { steps } from "@/app/data/home";

export default function HomeHowItWorks() {
    const [showDescriptions, setShowDescriptions] = useState({
        description1: false,
        description2: false,
        description3: false,
        description4: false,
    });

    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    return (
        <div className="bg-[#222] pt-[42px] md:pt-[85px] pb-[60px] lg:pb-[120px]">
            <div
                className="container mx-auto"
                ref={ref}
            >
                <motion.div
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
                    <h2 className="font-medium text-3xl md:text-5xl text-white text-center mb-[53px] md:mb-[107px] !leading-snug">
                        <span className="opacity-80">How it works?</span>
                        <br />
                        {" "}
                        <span className="font-medium text-[40px] md:text-[64px] uppercase">The 4 Steps</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-4 md:gap-8 justify-items-center xl:justify-items-start">
                        {steps.map(({
                            description,
                            id,
                            imageSrc,
                            title,
                        }) => (
                            <div
                                className="col-span-1 xl:col-span-3 w-full max-w-[288px] h-[390px] relative overflow-hidden"
                                key={id}
                                onMouseEnter={() => setShowDescriptions((prevState) => ({
                                    ...prevState,
                                    [`description${id}`]: true,
                                }))}
                                onMouseLeave={() => setShowDescriptions((prevState) => ({
                                    ...prevState,
                                    [`description${id}`]: false,
                                }))}
                            >
                                <Image
                                    alt={`step_${id}`}
                                    className="rounded-lg overflow-hidden"
                                    layout="fill"
                                    loading="lazy"
                                    objectFit="cover"
                                    src={imageSrc}
                                />
                                <div className={`absolute inset-0 bg-black ${showDescriptions?.[`description${id}`] ? "bg-opacity-60" : "bg-opacity-20"} overflow-hidden rounded-lg`} />
                                <div className="relative px-2 md:px-4 pb-3 md:pb-6 h-full flex flex-col justify-end">
                                    <div className={`${showDescriptions?.[`description${id}`] ? "" : "flex flex-col justify-end absolute h-full w-[88%]"}`}>
                                        <span className="font-bold font-nanum-myeongjo text-lg md:text-2xl text-white">
                                            0
                                            {id}
                                        </span>
                                        <h5 className="font-normal text-lg md:text-2xl text-white">{title}</h5>
                                    </div>
                                    <p className={`font-normal text-sm md:text-lg text-white mt-2 md:mt-4 transform ${showDescriptions?.[`description${id}`] ? "translate-y-0" : "translate-y-[200%]"} transition-all duration-500`}>{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
