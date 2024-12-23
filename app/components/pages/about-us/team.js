"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

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

    const teamMembers = [
        {
            alt: "member_1",
            id: 1,
            imageSrc: "/images/pages/about-us/team/member_1.png",
            name: "Amr Hayale",
            title: "Ceo @ Founder",
        },
        {
            alt: "member_2",
            id: 2,
            imageSrc: "/images/pages/about-us/team/member_2.png",
            name: "Mohamed Yousry",
            title: "Designer",
        },
        {
            alt: "member_3",
            id: 3,
            imageSrc: "/images/pages/about-us/team/member_3.png",
            name: "Marko Samuel",
            title: "Developer",
        },
        {
            alt: "member_4",
            id: 4,
            imageSrc: "/images/pages/about-us/team/member_4.png",
            name: "Adel Ahmed",
            title: "Art Engineer",
        },
        {
            alt: "member_5",
            id: 5,
            imageSrc: "/images/pages/about-us/team/member_5.png",
            name: "Mohamed Sameh",
            title: "Civil Engineer",
        },
        {
            alt: "member_6",
            id: 6,
            imageSrc: "/images/pages/about-us/team/member_6.png",
            name: "Mohamed Sameh",
            title: "Civil Engineer",
        },
    ];

    return (
        <div className="bg-[#222] pt-20 md:pt-44 pb-40 md:pb-80">
            <h2 className="font-bold text-3xl md:text-5xl text-center px-4 md:px-6 text-white">Meet The Team Behind The Works</h2>
            <div
                className="container px-4 md:px-6 mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 my-16 md:my-36"
                ref={ref1}
            >
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
                        src="/images/pages/about-us/team/ceo.png"
                        width={573}
                    />
                </motion.div>
                <motion.div
                    animate={isInView1 && { x: 0 }}
                    className="col-span-1 md:col-span-6 text-white !font-nanum-myeongjo"
                    initial={{ x: "100vw" }}
                    transition={{
                        delay: 0,
                        duration: 2,
                        ease: "easeIn",
                    }}
                >
                    <h5 className="font-light text-2xl md:text-4xl uppercase mb-1 md:mb-2">Amr Hayale</h5>
                    <span className="font-light text-lg md:text-2xl uppercase">Ceo @ Founder</span>
                    <p className="font-light text-xl md:text-3xl mt-5 md:mt-10">Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facili.</p>
                </motion.div>
                <motion.div
                    animate={isInView1 && { x: 0 }}
                    className="col-span-1 md:col-span-6 text-white !font-nanum-myeongjo"
                    initial={{ x: "-100vw" }}
                    transition={{
                        delay: 0,
                        duration: 2,
                        ease: "easeIn",
                    }}
                >
                    <h5 className="font-light text-2xl md:text-4xl uppercase mb-1 md:mb-2">Amr Hayale</h5>
                    <span className="font-light text-lg md:text-2xl uppercase">Ceo @ Founder</span>
                    <p className="font-light text-xl md:text-3xl mt-5 md:mt-10">Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facili.</p>
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
                        src="/images/pages/about-us/team/ceo.png"
                        width={573}
                    />
                </motion.div>
            </div>
            <div
                className="container px-4 md:px-6 mx-auto grid grid-cols-1 sm:grid-cols-6 md:grid-cols-12 gap-8 md:gap-16 mt-20 md:mt-40"
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
                        className="col-span-1 sm:col-span-3 md:col-span-4 text-white text-center mx-auto"
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
                            src={imageSrc}
                            width={323}
                        />
                        <h5 className="font-normal text-2xl md:text-4xl text-white my-2 md:my-4">{name}</h5>
                        <span className="font-normal text-lg md:text-2xl">{title}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
