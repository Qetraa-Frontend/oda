"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { workScopes } from "@/app/data/home";

export default function WorkScopes() {
    const [currentScope, setCurrentScope] = useState(1);

    const [previousScopeIndex, setPreviousScopeIndex] = useState(0);

    const currentIndex = workScopes.findIndex((scope) => scope.id === currentScope);

    const animationDirection = currentIndex >= previousScopeIndex ? 300 : -300;

    const handleScopeChange = (nextScopeIndex) => {
        setPreviousScopeIndex(currentIndex);

        setCurrentScope(workScopes[nextScopeIndex].id);
    };

    return (
        <div className="py-20 lg:py-40">
            <div className="gradient-container">
                <div className="container px-4 xl:px-0 mx-auto grid grid-cols-1 lg:grid-cols-3">
                    <div className="col-span-1 bg-primary lg:bg-transparent">
                        <div className="py-[31px] lg:py-[62px] px-3 lg:px-6">
                            <h2 className="font-medium text-[40px] lg:text-[64px] text-black leading-tight">Scope of Work</h2>
                            <ul className="list-none p-0 max-w-44 flex flex-col gap-1 lg:gap-2 mt-3 lg:mt-6">
                                {workScopes.map(({
                                    id,
                                    title,
                                }, index) => (
                                    <li // eslint-disable-line
                                        className={id === currentScope ? "active cursor-pointer py-1 lg:py-2 font-medium text-[18px] sm:text-[22px] lg:text-[32px] lg:leading-tight text-black transition-all duration-1000 !font-nanum-myeongjo" : "cursor-pointer py-1 lg:py-2 font-normal text-[18px] sm:text-[22px] lg:text-[32px] lg:leading-tight text-black opacity-50 transition-all duration-1000 !font-nanum-myeongjo"}
                                        key={id}
                                        onClick={() => handleScopeChange(index)}
                                    >
                                        {title}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                className="text-lg lg:text-2xl font-medium inline-block mt-3 lg:mt-6 py-[6px] lg:py-3 text-white underline"
                                href="/our-services"
                                prefetch={false}
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="relative col-span-1 lg:col-span-2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                className="flex flex-wrap lg:flex-nowrap gap-[23px] lg:gap-[47px]"
                                key={currentScope}
                                transition={{ duration: 0.5 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    x: -animationDirection,
                                }}
                                initial={{
                                    opacity: 0,
                                    x: animationDirection,
                                }}
                            >
                                <Image
                                    alt={workScopes[currentIndex].alt}
                                    className="h-[466px] lg:h-[932px] w-full lg:w-1/2 object-cover"
                                    height={932}
                                    loading="lazy"
                                    src={workScopes[currentIndex].imageSrc}
                                    width={485}
                                />
                                <div className="flex flex-col">
                                    <div className="lg:mt-[124px] lg:mb-[188px]">
                                        <h3 className="font-medium text-[40px] lg:text-[64px]">{workScopes[currentIndex].title}</h3>
                                        <p className="font-normal text-[22px] lg:text-[32px] text-gray-500 mt-3 lg:mt-6 mb-[30px] lg:mb-[60px]">{workScopes[currentIndex].description}</p>
                                    </div>
                                    <div className="flex justify-between items-center gap-4 lg:gap-8 flex-wrap">
                                        <div className="flex items-center gap-2 lg:gap-4">
                                            <Image
                                                alt="arrow_left"
                                                className={currentScope === 1 ? "opacity-50" : "cursor-pointer"}
                                                height={5}
                                                loading="lazy"
                                                src="/icons/long_arrow_left.svg"
                                                width={78}
                                                onClick={() => (currentScope === 0 ? {} : handleScopeChange(currentIndex - 1))}
                                            />
                                            <span className="font-normal !font-nanum-myeongjo text-base lg:text-xl">Swipe</span>
                                            <Image
                                                alt="arrow_right"
                                                className={currentScope === 8 ? "opacity-50" : "cursor-pointer"}
                                                height={5}
                                                loading="lazy"
                                                src="/icons/long_arrow_right.svg"
                                                width={78}
                                                onClick={() => (currentScope === 8 ? {} : handleScopeChange(currentIndex + 1))}
                                            />
                                        </div>
                                        <span className="font-medium text-2xl lg:text-4xl transition-all duration-1000">
                                            0
                                            {currentScope}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
