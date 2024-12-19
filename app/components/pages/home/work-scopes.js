"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function WorkScopes() {
    const [currentScope, setCurrentScope] = useState(1);

    const [previousScopeIndex, setPreviousScopeIndex] = useState(null);

    const scopes = [
        {
            description: "Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.",
            id: 1,
            image: "/images/pages/home/work-scopes/planning.png",
            title: "Planning",
        },
        {
            description: "Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.",
            id: 2,
            image: "/images/pages/home/work-scopes/design.png",
            title: "Design",
        },
        {
            description: "Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.",
            id: 3,
            image: "/images/pages/home/work-scopes/visualize.png",
            title: "Visualize",
        },
        {
            description: "Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.",
            id: 4,
            image: "/images/pages/home/work-scopes/workforce_management.png",
            title: "Workforce Management",
        },
        {
            description: "Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.",
            id: 5,
            image: "/images/pages/home/work-scopes/foundation.png",
            title: "Foundation",
        },
        {
            description: "Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.",
            id: 6,
            image: "/images/pages/home/work-scopes/furnishing.png",
            title: "Furnishing",
        },
        {
            description: "Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.",
            id: 7,
            image: "/images/pages/home/work-scopes/decoration.png",
            title: "Decoration",
        },
        {
            description: "Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.",
            id: 8,
            image: "/images/pages/home/work-scopes/consultation.png",
            title: "Consultation",
        },
    ];

    const currentIndex = scopes.findIndex((scope) => scope.id === currentScope);

    const animationDirection = currentIndex > previousScopeIndex ? 300 : -300;

    const handleScopeChange = (nextScopeIndex) => {
        setPreviousScopeIndex(currentIndex);

        setCurrentScope(scopes[nextScopeIndex].id);
    };

    return (
        <div className="py-20 md:py-40">
            <div className="gradient-container">
                <div className="container px-4 md:px-6 mx-auto grid grid-cols-1 md:grid-cols-3">
                    <div className="col-span-1 bg-primary md:bg-transparent">
                        <div className="py-8 md:py-16 px-3 md:px-6">
                            <h3 className="font-medium text-4xl md:text-6xl text-black mb-3 md:mb-6">Scope of Work</h3>
                            <ul className="list-none p-0">
                                {scopes.map((scope, index) => (
                                    <li // eslint-disable-line
                                        className={scope.id === currentScope ? "active mx-0 my-2 p-1 cursor-pointer font-bold text-3xl text-black max-w-44" : "mx-0 my-2 p-1 cursor-pointer font-normal text-3xl text-black opacity-50 max-w-44"}
                                        key={scope.id}
                                        onClick={() => handleScopeChange(index)}
                                    >
                                        {scope.title}
                                    </li>
                                ))}
                            </ul>
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
                                    alt={scopes[currentIndex].title}
                                    className="h-[854] md:w-1/2 object-cover"
                                    height={854}
                                    src={scopes[currentIndex].image}
                                    width={485}
                                />
                                <div className="w-full md:w-1/2 flex flex-col gap-3 md:gap-6">
                                    <h4 className="font-medium text-4xl md:text-6xl">{scopes[currentIndex].title}</h4>
                                    <p className="font-normal text-xl md:text-3xl text-gray-500">{scopes[currentIndex].description}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
