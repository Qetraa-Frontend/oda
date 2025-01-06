"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { buildingProjectImages } from "@/app/data/home";

export default function HomeBuildingProject() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    useEffect(
        () => {
            const interval = setInterval(
                () => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % buildingProjectImages.length);
                },
                3000,
            );

            return () => clearInterval(interval);
        },
        [],
    );

    return (
        <div
            className="container px-4 xl:px-0 mx-auto pt-[28px] md:pt-[56px]"
            ref={ref}
        >
            <motion.div
                animate={isInView && { y: 0 }}
                initial={{ y: "2000vh" }}
                transition={{
                    damping: 10,
                    duration: 2,
                    ease: "easeIn",
                    stiffness: 33,
                    type: "spring",
                }}
            >
                <h2 className="font-semibold text-4xl md:text-6xl uppercase text-center !leading-relaxed mb-20 md:mb-40">
                    Building a Legacy, One
                    <br className="hidden lg:block" />
                    {" "}
                    Project at a Time
                </h2>
                <div
                    className="bg-cover bg-no-repeat bg-center rounded-lg min-h-[300px] md:min-h-[560px] flex items-center justify-center relative overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ backgroundImage: `url(${buildingProjectImages[currentIndex].imageSrc})` }}
                >
                    <div className="absolute inset-0 w-full h-full bg-black bg-opacity-40" />
                    <h4 className="text-white font-[700] text-3xl md:text-5xl text-center !font-nanum-myeongjo relative z-10">{buildingProjectImages[currentIndex].title}</h4>
                </div>
            </motion.div>
        </div>
    );
}
