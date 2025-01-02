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
        <div className="py-20 md:py-40">
            <div className="gradient-container">
                <div className="container px-4 md:px-6 mx-auto grid grid-cols-1 md:grid-cols-3">
                    <div className="col-span-1 bg-primary md:bg-transparent">
                        <div className="py-8 md:py-16 px-3 md:px-6">
                            <h2 className="font-medium text-4xl md:text-6xl text-black mb-3 md:mb-6">Scope of Work</h2>
                            <ul className="list-none p-0">
                                {workScopes.map(({
                                    id,
                                    title,
                                }, index) => (
                                    <li // eslint-disable-line
                                        className={id === currentScope ? "active mx-0 my-2 p-1 cursor-pointer font-bold text-3xl text-black max-w-44 transition-all duration-1000 !font-nanum-myeongjo" : "mx-0 my-2 p-1 cursor-pointer font-normal text-3xl text-black opacity-50 max-w-44 transition-all duration-1000 !font-nanum-myeongjo"}
                                        key={id}
                                        onClick={() => handleScopeChange(index)}
                                    >
                                        {title}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                className="text-lg md:text-2xl font-medium inline-block mt-4 md:mt-8 text-white underline"
                                href="/our-services"
                                prefetch={false}
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="relative col-span-1 md:col-span-2 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                className="flex justify-center items-center gap-4 flex-wrap md:flex-nowrap"
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
                                    className="h-[854px] md:w-1/2 object-cover"
                                    height={854}
                                    src={workScopes[currentIndex].imageSrc}
                                    width={485}
                                />
                                <div className="w-full md:w-1/2 flex flex-col">
                                    <div>
                                        <h3 className="font-medium text-4xl md:text-6xl">{workScopes[currentIndex].title}</h3>
                                        <p className="font-normal text-xl md:text-3xl text-gray-500 mt-3 md:mt-6">{workScopes[currentIndex].description}</p>
                                    </div>
                                    <div className="flex justify-between items-center gap-4 md:gap-8 mt-24 md:mt-48 flex-wrap">
                                        <div className="flex items-center gap-2 md:gap-4">
                                            <Image
                                                alt="arrow_left"
                                                className={currentScope === 1 ? "opacity-50" : "cursor-pointer"}
                                                height={5}
                                                src="/icons/long_arrow_left.svg"
                                                width={78}
                                                onClick={() => (currentScope === 0 ? {} : handleScopeChange(currentIndex - 1))}
                                            />
                                            <span>Swipe</span>
                                            <Image
                                                alt="arrow_right"
                                                className={currentScope === 8 ? "opacity-50" : "cursor-pointer"}
                                                height={5}
                                                src="/icons/long_arrow_right.svg"
                                                width={78}
                                                onClick={() => (currentScope === 8 ? {} : handleScopeChange(currentIndex + 1))}
                                            />
                                        </div>
                                        <span className="font-bold text-2xl md:text-4xl transition-all duration-1000">{currentScope}</span>
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
