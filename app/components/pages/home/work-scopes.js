"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

import { workScopes } from "@/app/data/home";

export default function HomeWorkScopes() {
    const [currentScope, setCurrentScope] = useState(1);

    const [previousScopeIndex, setPreviousScopeIndex] = useState(0);

    const [startX, setStartX] = useState(null);

    const [isTouch, setIsTouch] = useState(false);

    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    const currentIndex = workScopes.findIndex((scope) => scope.id === currentScope);

    const animationDirection = currentIndex >= previousScopeIndex ? 485 : -485;

    const counterAnimationDirection = currentIndex >= previousScopeIndex ? 50 : -50;

    const handleScopeChange = (nextScopeIndex) => {
        setPreviousScopeIndex(currentIndex);

        setCurrentScope(workScopes[nextScopeIndex].id);
    };

    const handleSwipeStart = (x, isTouchEvent) => {
        setStartX(x);

        setIsTouch(isTouchEvent);
    };

    const handleSwipeEnd = (x) => {
        if (startX === null) return;

        const diffX = startX - x;

        if (diffX > 50) {
            if (currentScope !== 8) handleScopeChange(currentIndex + 1);
        } else if (diffX < -50) if (currentScope !== 0) handleScopeChange(currentIndex - 1);

        setStartX(null);
    };

    return (
        <div className="py-20 lg:py-40 overflow-hidden">
            <div
                className="gradient-container"
                ref={ref}
            >
                <motion.div
                    animate={isInView && { x: 0 }}
                    className="container px-4 xl:px-0 mx-auto grid grid-cols-1 lg:grid-cols-3"
                    initial={{ x: "100vw" }}
                    transition={{
                        damping: 10,
                        duration: 2,
                        ease: "easeIn",
                        stiffness: 40,
                        type: "spring",
                    }}
                >
                    <div className="col-span-1 bg-primary lg:bg-transparent">
                        <div className="py-[31px] lg:py-[62px] px-3 lg:px-6">
                            <h2 className="font-medium text-[40px] lg:text-[64px] text-black leading-tight">Scope of Work</h2>
                            <ul className="list-none p-0 max-w-44 flex flex-col gap-1 lg:gap-2 mt-3 lg:mt-6">
                                {workScopes.map(({
                                    id,
                                    title,
                                }, index) => (
                                    <li // eslint-disable-line
                                        className={id === currentScope ? "active cursor-pointer py-1 lg:py-2 font-[700] text-[18px] sm:text-[22px] lg:text-[32px] lg:leading-tight text-black transition-all duration-1000 font-nanum-myeongjo" : "cursor-pointer py-1 lg:py-2 font-[400] text-[18px] sm:text-[22px] lg:text-[32px] lg:leading-tight text-black opacity-50 transition-all duration-1000 font-nanum-myeongjo"}
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
                        <div className="flex flex-wrap sm:flex-nowrap gap-[23px] lg:gap-[47px]">
                            <div className="cursor-pointer w-full lg:w-1/2 overflow-hidden relative h-[466px] lg:h-[932px]">
                                <AnimatePresence mode="sync">
                                    <motion.div
                                        animate={{ x: 0 }}
                                        className="absolute w-full h-full top-0 left-0"
                                        exit={{ x: -animationDirection }}
                                        initial={{ x: animationDirection }}
                                        key={currentScope}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeIn",
                                        }}
                                    >
                                        <Image
                                            alt={workScopes[currentIndex].alt}
                                            className="h-full w-full object-cover"
                                            height={932}
                                            loading="lazy"
                                            src={workScopes[currentIndex].imageSrc}
                                            width={485}
                                            onMouseLeave={(e) => { if (!isTouch) handleSwipeEnd(e.clientX); }}
                                            onMouseUp={(e) => handleSwipeEnd(e.clientX)}
                                            onTouchEnd={(e) => handleSwipeEnd(e.changedTouches[0].clientX)}
                                            onMouseDown={(e) => handleSwipeStart(
                                                e.clientX,
                                                false,
                                            )}
                                            onTouchStart={(e) => handleSwipeStart(
                                                e.touches[0].clientX,
                                                true,
                                            )}
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            <div className="w-full lg:w-1/2 overflow-hidden relative h-[350px] sm:h-[466px] lg:h-[932px]">
                                <AnimatePresence mode="sync">
                                    <motion.div
                                        animate={{ x: 0 }}
                                        className="absolute w-full h-full top-0 left-0"
                                        exit={{ x: -animationDirection }}
                                        initial={{ x: animationDirection }}
                                        key={currentScope}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeIn",
                                        }}
                                    >
                                        <div className="flex flex-col relative">
                                            <div className="lg:mt-[124px] lg:mb-[188px]">
                                                <h3 className="font-medium text-[40px] lg:text-[45px] xl:text-[64px]">{workScopes[currentIndex].title}</h3>
                                                <p className="font-normal text-[22px] lg:text-[28px] xl:text-[32px] text-gray-500 mt-3 lg:mt-6">{workScopes[currentIndex].description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                        <div className="flex justify-between items-center gap-4 lg:gap-8 flex-wrap absolute bottom-0 right-0 w-full sm:w-[50%] xl:w-[47%] overflow-hidden">
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
                                <span className="font-[400] font-nanum-myeongjo text-base lg:text-xl">Swipe</span>
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
                            <AnimatePresence mode="sync">
                                <motion.div
                                    animate={{ y: 0 }}
                                    className="font-medium text-2xl lg:text-4xl absolute right-0"
                                    exit={{ y: -counterAnimationDirection }}
                                    initial={{ y: counterAnimationDirection }}
                                    key={currentScope}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeIn",
                                    }}
                                >
                                    0
                                    {currentScope}
                                </motion.div>
                            </AnimatePresence>

                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
