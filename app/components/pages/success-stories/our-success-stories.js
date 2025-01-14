"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

import { stories } from "@/app/data/success-stories";

export default function OurSuccessStories() {
    const [showDescriptions, setShowDescriptions] = useState({
        stories1: {
            description1: false,
            description2: false,
            description3: false,
            description4: false,
        },
        stories2: {
            description1: false,
            description2: false,
            description3: false,
            description4: false,
        },
        stories3: {
            description1: false,
            description2: false,
            description3: false,
            description4: false,
        },
        stories4: {
            description1: false,
            description2: false,
            description3: false,
            description4: false,
        },
    });

    const ref1 = useRef(null);

    const ref2 = useRef(null);

    const ref3 = useRef(null);

    const ref4 = useRef(null);

    const isInView1 = useInView(
        ref1,
        { once: true },
    );

    const isInView2 = useInView(
        ref1,
        { once: true },
    );

    const isInView3 = useInView(
        ref1,
        { once: true },
    );

    const isInView4 = useInView(
        ref1,
        { once: true },
    );

    return (
        <div>
            <div
                className="bg-[#222] py-[60px] lg:py-[120px]"
                ref={ref1}
            >
                <div className="container px-4 xl:px-0 mx-auto">
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-4 xl:gap-8 justify-items-center xl:justify-items-start"
                        animate={isInView1 && {
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
                        {stories.stories1.map(({
                            alt,
                            description,
                            id,
                            imageSrc,
                            title,
                        }) => (
                            <div
                                className="col-span-1 xl:col-span-4"
                                key={id}
                            >
                                <div
                                    className={`rounded-lg ${showDescriptions.stories1?.[`description${id}`] ? "bg-primary" : "bg-white"} border-black border-[1px] hover:border-primary hover:border-[2px] p-4 max:w-[395px] h-[431px] overflow-hidden`}
                                    onMouseEnter={() => setShowDescriptions((prevState) => ({
                                        ...prevState,
                                        stories1: {
                                            ...prevState.stories1,
                                            [`description${id}`]: true,
                                        },
                                    }))}
                                    onMouseLeave={() => setShowDescriptions((prevState) => ({
                                        ...prevState,
                                        stories1: {
                                            ...prevState.stories1,
                                            [`description${id}`]: false,
                                        },
                                    }))}
                                >
                                    <Image
                                        alt={alt}
                                        className={`rounded-lg object-cover w-full ${showDescriptions.stories1?.[`description${id}`] ? "h-[68%] sm:h-[55%]" : "h-[317px]"}`}
                                        height={317}
                                        loading="lazy"
                                        src={imageSrc}
                                        width={347}
                                    />
                                    <div className={`${showDescriptions.stories1?.[`description${id}`] ? "h-[32%] sm:h-[45%]" : "block"}`}>
                                        <div className={`${showDescriptions.stories1?.[`description${id}`] ? "flex justify-between mt-[14px] xl:mt-7 items-center" : "flex justify-between items-center place-items-center h-[80px]"}`}>
                                            <h5 className="font-[700] text-base md:text-xl text-black font-nanum-myeongjo">{title}</h5>
                                        </div>
                                        <p className={`font-normal text-sm md:text-lg text-black mt-2 md:mt-4 transform ${showDescriptions.stories1?.[`description${id}`] ? "translate-y-0" : "translate-y-[200%]"} transition-all duration-500`}>{description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div
                className="py-20 lg:py-40"
                ref={ref2}
            >
                <div className="container px-4 xl:px-0 mx-auto">
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-4 xl:gap-8 justify-items-center xl:justify-items-start"
                        animate={isInView2 && {
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
                        {stories.stories2.map(({
                            alt,
                            description,
                            id,
                            imageSrc,
                            title,
                        }) => (
                            <div
                                className="col-span-1 xl:col-span-4"
                                key={id}
                            >
                                <div
                                    className="rounded-lg border-black border-[1px] hover:border-primary hover:border-[2px] p-4 max:w-[395px] h-[431px] overflow-hidden"
                                    onMouseEnter={() => setShowDescriptions((prevState) => ({
                                        ...prevState,
                                        stories2: {
                                            ...prevState.stories2,
                                            [`description${id}`]: true,
                                        },
                                    }))}
                                    onMouseLeave={() => setShowDescriptions((prevState) => ({
                                        ...prevState,
                                        stories2: {
                                            ...prevState.stories2,
                                            [`description${id}`]: false,
                                        },
                                    }))}
                                >
                                    <Image
                                        alt={alt}
                                        className={`rounded-lg object-cover w-full ${showDescriptions.stories2?.[`description${id}`] ? "h-[68%] sm:h-[55%]" : "h-[317px]"}`}
                                        height={317}
                                        loading="lazy"
                                        src={imageSrc}
                                        width={347}
                                    />
                                    <div className={`${showDescriptions.stories2?.[`description${id}`] ? "h-[32%] sm:h-[45%]" : "block"}`}>
                                        <div className={`${showDescriptions.stories2?.[`description${id}`] ? "flex justify-between mt-[14px] xl:mt-7 items-center" : "flex justify-between items-center place-items-center h-[80px]"}`}>
                                            <h5 className="font-[700] text-base md:text-xl text-black font-nanum-myeongjo">{title}</h5>
                                        </div>
                                        <p className={`font-normal text-sm md:text-lg text-black mt-2 md:mt-4 transform ${showDescriptions.stories2?.[`description${id}`] ? "translate-y-0" : "translate-y-[200%]"} transition-all duration-500`}>{description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div
                className="bg-[#222] py-[54px] lg:py-[108px]"
                ref={ref3}
            >
                <div className="container px-4 xl:px-0 mx-auto">
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-4 xl:gap-8 justify-items-center xl:justify-items-start"
                        animate={isInView3 && {
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
                        {stories.stories3.map(({
                            alt,
                            description,
                            id,
                            imageSrc,
                            title,
                        }) => (
                            <div
                                className="col-span-1 xl:col-span-4"
                                key={id}
                            >
                                <div
                                    className={`rounded-lg ${showDescriptions.stories3?.[`description${id}`] ? "bg-primary" : "bg-white"} border-black border-[1px] hover:border-primary hover:border-[2px] p-4 max:w-[395px] h-[431px] overflow-hidden`}
                                    onMouseEnter={() => setShowDescriptions((prevState) => ({
                                        ...prevState,
                                        stories3: {
                                            ...prevState.stories3,
                                            [`description${id}`]: true,
                                        },
                                    }))}
                                    onMouseLeave={() => setShowDescriptions((prevState) => ({
                                        ...prevState,
                                        stories3: {
                                            ...prevState.stories3,
                                            [`description${id}`]: false,
                                        },
                                    }))}
                                >
                                    <Image
                                        alt={alt}
                                        className={`rounded-lg object-cover w-full ${showDescriptions.stories3?.[`description${id}`] ? "h-[68%] sm:h-[55%]" : "h-[317px]"}`}
                                        height={317}
                                        loading="lazy"
                                        src={imageSrc}
                                        width={347}
                                    />
                                    <div className={`${showDescriptions.stories3?.[`description${id}`] ? "h-[32%] sm:h-[45%]" : "block"}`}>
                                        <div className={`${showDescriptions.stories3?.[`description${id}`] ? "flex justify-between mt-[14px] xl:mt-7 items-center" : "flex justify-between items-center place-items-center h-[80px]"}`}>
                                            <h5 className="font-[700] text-base md:text-xl text-black font-nanum-myeongjo">{title}</h5>
                                        </div>
                                        <p className={`font-normal text-sm md:text-lg text-black mt-2 md:mt-4 transform ${showDescriptions.stories3?.[`description${id}`] ? "translate-y-0" : "translate-y-[200%]"} transition-all duration-500`}>{description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div
                className="pt-20 lg:pt-40 pb-[122px] lg:pb-[244px]"
                ref={ref4}
            >
                <div className="container px-4 xl:px-0 mx-auto">
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-4 xl:gap-8 justify-items-center xl:justify-items-start"
                        animate={isInView4 && {
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
                        {stories.stories4.map(({
                            alt,
                            description,
                            id,
                            imageSrc,
                            title,
                        }) => (
                            <div
                                className="col-span-1 xl:col-span-4"
                                key={id}
                            >
                                <div
                                    className="rounded-lg border-black border-[1px] hover:border-primary hover:border-[2px] p-4 max:w-[395px] h-[431px] overflow-hidden"
                                    onMouseEnter={() => setShowDescriptions((prevState) => ({
                                        ...prevState,
                                        stories4: {
                                            ...prevState.stories4,
                                            [`description${id}`]: true,
                                        },
                                    }))}
                                    onMouseLeave={() => setShowDescriptions((prevState) => ({
                                        ...prevState,
                                        stories4: {
                                            ...prevState.stories4,
                                            [`description${id}`]: false,
                                        },
                                    }))}
                                >
                                    <Image
                                        alt={alt}
                                        className={`rounded-lg object-cover w-full ${showDescriptions.stories4?.[`description${id}`] ? "h-[68%] sm:h-[55%]" : "h-[317px]"}`}
                                        height={317}
                                        loading="lazy"
                                        src={imageSrc}
                                        width={347}
                                    />
                                    <div className={`${showDescriptions.stories4?.[`description${id}`] ? "h-[32%] sm:h-[45%]" : "block"}`}>
                                        <div className={`${showDescriptions.stories4?.[`description${id}`] ? "flex justify-between mt-[14px] xl:mt-7 items-center" : "flex justify-between items-center place-items-center h-[80px]"}`}>
                                            <h5 className="font-[700] text-base md:text-xl text-black font-nanum-myeongjo">{title}</h5>
                                        </div>
                                        <p className={`font-normal text-sm md:text-lg text-black mt-2 md:mt-4 transform ${showDescriptions.stories4?.[`description${id}`] ? "translate-y-0" : "translate-y-[200%]"} transition-all duration-500`}>{description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
