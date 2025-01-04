"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { teamMembers } from "@/app/data/about-us";

export default function AboutUsOurVision() {
    const ref1 = useRef(null);

    const ref2 = useRef(null);

    const isInView1 = useInView(
        ref1,
        { once: true },
    );

    const isInView2 = useInView(
        ref2,
        { once: true },
    );

    return (
        <div className="bg-[#222] pt-20 md:pt-44 pb-40 md:pb-80">
            <div className="container px-4 xl:px-0 mx-auto">
                <h2 className="font-bold text-3xl md:text-5xl text-white text-center">Meet The Team Behind The Works</h2>
                <div
                    className="pt-[71px] md:pt-[142px] pb-[69px] md:pb-[138px]"
                    ref={ref1}
                >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 mb-[112px] md:mb-[124px]">
                        <motion.div
                            animate={isInView1 && { x: 0 }}
                            className="col-span-1 md:col-span-6"
                            initial={{ x: "-100vw" }}
                            transition={{
                                delay: 0,
                                duration: 2,
                                ease: "easeIn",
                            }}
                        >
                            <Image
                                alt="ceo"
                                height={445}
                                loading="lazy"
                                src="/images/pages/about-us/team/ceo.webp"
                                width={573}
                            />
                        </motion.div>
                        <motion.div
                            animate={isInView1 && { x: 0 }}
                            className="col-span-1 md:col-span-6"
                            initial={{ x: "100vw" }}
                            transition={{
                                delay: 0,
                                duration: 2,
                                ease: "easeIn",
                            }}
                        >
                            <h5 className="font-light !font-nanum-myeongjo text-2xl md:text-4xl text-white uppercase mb-[6px] md:mb-[13px]">Amr Hayale</h5>
                            <h6 className="font-light !font-nanum-myeongjo text-[22px] md:text-[28px] text-white uppercase">Ceo @ Founder</h6>
                            <p className="font-light !font-nanum-myeongjo text-xl md:text-3xl text-white mt-5 md:mt-10">Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facili.</p>
                        </motion.div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10">
                        <motion.div
                            animate={isInView1 && { x: 0 }}
                            className="col-span-1 md:col-span-6"
                            initial={{ x: "-100vw" }}
                            transition={{
                                delay: 0,
                                duration: 2,
                                ease: "easeIn",
                            }}
                        >
                            <h5 className="font-light !font-nanum-myeongjo text-2xl md:text-4xl text-white uppercase mb-[6px] md:mb-[13px]">Amr Hayale</h5>
                            <h6 className="font-light !font-nanum-myeongjo text-[22px] md:text-[28px] text-white uppercase">Ceo @ Founder</h6>
                            <p className="font-light !font-nanum-myeongjo text-xl md:text-3xl text-white mt-5 md:mt-10">Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facili.</p>
                        </motion.div>
                        <motion.div
                            animate={isInView1 && { x: 0 }}
                            className="col-span-1 md:col-span-6"
                            initial={{ x: "100vw" }}
                            transition={{
                                delay: 0,
                                duration: 2,
                                ease: "easeIn",
                            }}
                        >
                            <Image
                                alt="ceo"
                                height={445}
                                loading="lazy"
                                src="/images/pages/about-us/team/ceo.webp"
                                width={573}
                            />
                        </motion.div>
                    </div>
                </div>
                <div
                    className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-12 gap-7 md:gap-14 pt-[71px] md:pt-[142px]"
                    ref={ref2}
                >
                    {teamMembers.map(({
                        alt,
                        id,
                        imageSrc,
                        name,
                        title,
                    }) => (
                        <motion.div
                            animate={isInView2 && { opacity: 1 }}
                            className="col-span-1 sm:col-span-3 md:col-span-4 text-center mx-auto"
                            initial={{ opacity: 0 }}
                            key={id}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                            }}
                        >
                            <Image
                                alt={alt}
                                className="h-[400px] md:h-[300px] lg:h-[400px] object-cover md:object-fill rounded-xl"
                                height={445}
                                loading="lazy"
                                src={imageSrc}
                                width={361}
                            />
                            <div className="mt-5 md:mt-10">
                                <h5 className="font-normal text-2xl md:text-4xl text-white mb-[8] md:mb-[17px]">{name}</h5>
                                <h6 className="font-normal text-lg md:text-2xl text-white">{title}</h6>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
