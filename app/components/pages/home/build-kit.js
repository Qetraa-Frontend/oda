"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function HomeBuildKit() {
    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    return (
        <div
            className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[36px] lg:gap-[72px] pt-[73px] lg:pt-[146px] pb-[75px] lg:pb-[150px] overflow-hidden"
            ref={ref}
        >
            <div className="col-span-1 lg:col-span-6">
                <div className="group overflow-hidden">
                    <Image
                        alt="build_kit"
                        className="transition-all duration-1000 scale-125 group-hover:scale-100"
                        height={677}
                        loading="lazy"
                        src="/images/pages/home/build_kit.webp"
                        width={608}
                    />
                </div>
            </div>
            <motion.div
                animate={isInView && { x: 0 }}
                className="col-span-1 lg:col-span-6"
                initial={{ x: "100vw" }}
                transition={{
                    damping: 10,
                    duration: 2,
                    ease: "easeIn",
                    stiffness: 40,
                    type: "spring",
                }}
            >
                <h2 className="font-bold text-3xl lg:text-5xl uppercase lg:!leading-relaxed h-20 lg:h-40">
                    Build your Kit
                    {" "}
                    <span className="normal-case">With</span>
                    <br className="hidden xl:block" />
                    {" "}
                    <span className="font-bold text-3xl lg:text-5xl uppercase text-primary">oda</span>
                </h2>
                <p className="font-normal opacity-65 text-[22px] lg:text-[32px] lg:leading-[1.4] my-4 lg:my-8 py-4 lg:py-8">Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.</p>
                <Link
                    href="/why-oda"
                    prefetch={false}
                >
                    <div className="relative inline-block">
                        <button
                            className="font-medium text-lg lg:text-2xl py-1 lg:py-2 px-4 lg:px-8 text-black bg-gray-400 bg-opacity-20 hover:bg-transparent hover:text-primary rounded-lg border border-transparent"
                            onMouseEnter={(e) => {
                                const borderDiv = e.currentTarget.nextSibling;

                                borderDiv.style.borderImage = "linear-gradient(90deg, hsl(var(--primary)) 0%, black 100%) 1";
                            }}
                            onMouseLeave={(e) => {
                                const borderDiv = e.currentTarget.nextSibling;

                                borderDiv.style.borderImage = "none";

                                borderDiv.style.borderColor = "black";
                            }}
                        >
                            Learn More
                        </button>
                        <div
                            className="absolute inset-0 pointer-events-none rounded-md border-[1px] border-transparent transition-all duration-1000"
                            style={{
                                WebkitMaskImage: "linear-gradient(90deg, black 70%, transparent 100%)",
                                borderColor: "black",
                                borderWidth: "1px",
                                maskImage: "linear-gradient(90deg, black 70%, transparent 100%)",
                            }}
                        />
                    </div>
                </Link>
            </motion.div>
        </div>
    );
}
