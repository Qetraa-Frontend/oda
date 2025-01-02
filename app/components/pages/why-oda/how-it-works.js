"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { steps } from "@/app/data/why-oda";

export default function WhyOdaHowItWorks() {
    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    return (
        <div className="bg-[#222] pt-10 md:pt-20 pb-16 lg:pb-32">
            <div
                className="container px-4 xl:px-0 mx-auto"
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
                    <div className="mb-14 md:mb-28 text-white">
                        <h2 className="font-normal text-3xl md:text-5xl text-center !leading-relaxed">
                            How it works?
                            <br />
                            {" "}
                            <span className="font-medium text-4xl md:text-6xl uppercase">The 4 Steps</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-4 md:gap-8 justify-items-center xl:justify-items-start">
                        {steps.map(({
                            description,
                            id,
                            imageSrc,
                        }) => (
                            <div
                                className="col-span-1 xl:col-span-3 transform transition-transform duration-1000 hover:scale-110 w-full max-w-[288px] h-[390px] relative bg-cover bg-no-repeat bg-top rounded-xl overflow-hidden"
                                key={id}
                                style={{ backgroundImage: `url(${imageSrc})` }}
                            >
                                <div className="absolute inset-0 bg-black bg-opacity-20" />
                                <div className="text-white relative z-10 px-2 md:px-4 pb-3 md:pb-6 h-full flex flex-col justify-end">
                                    <span className="!font-nanum-myeongjo font-normal text-lg md:text-2xl">
                                        0
                                        {id}
                                    </span>
                                    <h6 className="font-semibold text-lg md:text-2xl">{description}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
