"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { questions } from "@/app/data/questions";
import { useLocateYourHomeStore } from "@/app/store/locate-your-home";

export default function CheckoutQuestions() {
    const {
        questions: selectedQuestions,
        setQuestion,
    } = useLocateYourHomeStore();

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
        <div
            className="overflow-hidden"
            ref={ref1}
        >
            <motion.div
                className="container mx-auto py-[42px] md:py-[85px] overflow-hidden"
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
                <h2 className="font-bold text-3xl md:text-5xl text-center uppercase">Let&apos;s Discover More</h2>
            </motion.div>
            <div
                className="bg-[#222] min-h-[1000px] py-10 md:py-20 overflow-hidden"
                ref={ref2}
            >
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-x-4 md:gap-x-8 gap-y-20 md:gap-y-40">
                    {questions.map(({
                        alt1,
                        alt2,
                        id,
                        imageSrc1,
                        imageSrc2,
                        question,
                    }) => (
                        <div
                            className="col-span-1 md:col-span-6 xl:col-span-4 mx-auto xl:mx-0"
                            key={id}
                        >
                            <motion.div
                                className={`py-3 md:py-6 px-2 md:px-4 border ${selectedQuestions[id] ? "border-primary" : "border-white"} hover:border-primary rounded-lg w-fit transition-all duration-1000`}
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
                                <h5 className="font-bold font-nanum-myeongjo text-base md:text-xl text-white mb-5 md:mb-10">{question}</h5>
                                <div className="flex justify-center gap-4 lg:gap-8">
                                    <Image
                                        alt={alt1}
                                        className={`rounded-lg h-[199px] cursor-pointer border-[3px] ${selectedQuestions[id]?.answer === 1 ? "border-primary" : "border-transparent"}`}
                                        height={199}
                                        loading="lazy"
                                        src={imageSrc1}
                                        width={163}
                                        onClick={() => {
                                            setQuestion({
                                                answer: 1,
                                                id,
                                                question,
                                            });
                                        }}
                                    />
                                    <Image
                                        alt={alt2}
                                        className={`rounded-lg h-[199px] cursor-pointer border-[3px] ${selectedQuestions[id]?.answer === 2 ? "border-primary" : "border-transparent"}`}
                                        height={199}
                                        loading="lazy"
                                        src={imageSrc2}
                                        width={163}
                                        onClick={() => {
                                            setQuestion({
                                                answer: 2,
                                                id,
                                                question,
                                            });
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
