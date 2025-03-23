"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// import { teamMembers } from "@/app/data/about-us";

export default function AboutUsOurVision() {
    const ref1 = useRef(null);

    // const ref2 = useRef(null);

    const isInView1 = useInView(
        ref1,
        { once: true },
    );

    /* const isInView2 = useInView(
        ref2,
        { once: true },
    ); */

    return (
        <div className="bg-[#222] py-16 md:py-32 overflow-hidden">
            <div
                className="container mx-auto"
                ref={ref1}
            >
                <motion.h2
                    className="font-bold text-3xl md:text-5xl text-white text-center"
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
                    Behind the Scenes
                </motion.h2>
                <div className="pt-5 md:pt-10">
                    <motion.div
                        animate={isInView1 && { x: 0 }}
                        initial={{ x: "-100vw" }}
                        transition={{
                            damping: 10,
                            delay: 0.5,
                            duration: 2,
                            ease: "easeIn",
                            stiffness: 40,
                            type: "spring",
                        }}
                    >
                        <Image
                            alt="ceo"
                            className="rounded-lg mx-auto"
                            height={445}
                            loading="lazy"
                            src="/images/pages/about-us/team/ceo.webp"
                            width={573}
                        />
                    </motion.div>
                    <motion.div
                        animate={isInView1 && { x: 0 }}
                        className="mt-5 md:mt-10"
                        initial={{ x: "100vw" }}
                        transition={{
                            damping: 10,
                            delay: 0.5,
                            duration: 2,
                            ease: "easeIn",
                            stiffness: 40,
                            type: "spring",
                        }}
                    >
                        <h5 className="font-normal font-nanum-myeongjo text-2xl md:text-4xl text-white uppercase mb-[6px] md:mb-[13px] text-center">Amr Hayaly</h5>
                        <h6 className="font-normal font-nanum-myeongjo text-[22px] md:text-[28px] text-white uppercase text-center">CEO & Founder</h6>
                        <p className="font-normal font-nanum-myeongjo text-xl md:text-3xl text-white mt-5 md:mt-10">
                            Amr Hayaly is the founder and CEO of Oda. With the vision of providing high-quality, innovative solutions in the prop tech field and years of experience, Amr Hayaly built Oda from the ground up, focusing on delivering scalable top-tier Design-Build & Manage services. The company quickly gained recognition for its ability to successfully complete complex projects across various industries.
                            <br />
                            {" "}
                            Hayaly has grown Oda into a regional player with a strong credibility in the region and partnerships with key industry players. Hayaly is an MBA graduate from Sorbonne et Dauphine University. Business strategist and serial entrepreneur with +25 years of experience in multiple industries and disciplines.
                        </p>
                        <p className="font-normal font-nanum-myeongjo text-xl md:text-3xl text-white mt-5 md:mt-10">Amr’s true craving lies in mentoring disruptive tech start-ups and entrepreneurs across the GCC who specialize in real estate, oil & gas, sports & entertainment and food safety. Skilled in data driven strategy development, commercial business modeling and transformation, platform business operation and excellence - Amr has worked at various multinationals in the region, namely Shell, Samsung, Xerox & Sela Sports, to name but a few. Exposure to a diverse set of technical and commercial roles has enabled Amr to become a growth guru in multiple industries.</p>
                    </motion.div>
                </div>
                {/* <div
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
                            className="col-span-1 sm:col-span-3 md:col-span-4 text-center mx-auto"
                            key={id}
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
                            <Image
                                alt={alt}
                                className="h-[350px] md:h-[250px] lg:h-[400px] object-cover md:object-fill rounded-lg"
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
                </div> */}
            </div>
        </div>
    );
}
