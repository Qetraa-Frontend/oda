"use client";

import { motion, useInView } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

import { departments, plans1 } from "@/app/data/why-oda";

export default function WhyOdaFeatures() {
    const [currentPlan, setCurrentPlan] = useState(null);

    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    useEffect(
        () => {
            const handleResize = () => {
                const isLg = window.matchMedia("(min-width: 1024px)").matches; // eslint-disable-line
                if (isLg) setCurrentPlan(null);
            };

            handleResize();

            window.addEventListener( // eslint-disable-line
                "resize",
                handleResize,
            );

            return () => {
                window.removeEventListener( // eslint-disable-line
                    "resize",
                    handleResize,
                );
            };
        },
        [],
    );

    return (
        <div
            className="container px-4 xl:px-0 mx-auto pb-24 md:pb-52 pt-10 md:pt-20"
            id="features"
        >
            <div className="mb-24 md:mb-48">
                <h2 className="font-bold text-4xl md:text-6xl">Compare All Features</h2>
            </div>
            <div
                className="overflow-visible relative"
                ref={ref}
            >
                <motion.table
                    animate={isInView && { x: 0 }}
                    className="table-fixed w-full"
                    initial={{ x: "-100vw" }}
                    transition={{
                        delay: 0,
                        duration: 1,
                        ease: "easeIn",
                    }}
                >
                    {departments.map(({
                        features,
                        id,
                        title,
                    }) => (
                        <React.Fragment key={id}>
                            <thead>
                                <tr className="bg-primary h-20">
                                    <th
                                        className="text-left font-semibold text-xl md:text-3xl px-2 md:px-4"
                                        colSpan="3"
                                    >
                                        {title}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {features.map((feature, index) => (
                                    <tr
                                        className={index % 2 === 0 ? "bg-[#E3E4E4] h-20 w-full" : "bg-white h-20 w-full"}
                                        key={index} // eslint-disable-line
                                    >
                                        <td
                                            className="font-normal text-lg md:text-2xl px-2 md:px-4"
                                            colSpan={3}
                                        >
                                            <div className="max-w-[220px] sm:max-w-[320px] md:max-w-[484px] break-words">{feature}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </React.Fragment>
                    ))}
                </motion.table>
                <motion.div
                    animate={isInView && { x: 0 }}
                    className="flex flex-wrap gap-4 md:gap-8 justify-end absolute -top-20 right-0 w-full h-[1090px]"
                    initial={{ x: "100vw" }}
                    transition={{
                        delay: 0,
                        duration: 1,
                        ease: "easeIn",
                    }}
                >
                    {plans1.map(({
                        departments: planDepartments,
                        id,
                        title,
                    }) => {
                        let currentPlanDepartments = planDepartments;

                        if (currentPlan?.departments) currentPlanDepartments = currentPlan.departments;

                        return (
                            (
                                <div
                                    className={`${id !== 1 ? "hidden xl:block" : ""} relative w-[140px] sm:w-[209px] h-full border border-black rounded-xl text-center pt-8 px-2 hover:bg-primary transition-all duration-1000`}
                                    key={id}
                                >
                                    <div className="xl:hidden absolute top-8 right-[2px] w-full flex justify-between">
                                        <ChevronLeft
                                            className={`${currentPlan?.id === 1 || !currentPlan?.id ? "opacity-50 cursor-default" : "cursor-pointer opacity-100"}`}
                                            size={30}
                                            onClick={() => (currentPlan?.id !== 1 || !currentPlan?.id === 1) && setCurrentPlan(plans1.find(({ id: planId }) => planId === (currentPlan?.id || 1) - 1))}
                                        />
                                        <ChevronRight
                                            className={`${currentPlan?.id === plans1.length ? "opacity-50 cursor-default" : "cursor-pointer opacity-100"}`}
                                            size={30}
                                            onClick={() => currentPlan?.id !== plans1.length && setCurrentPlan(plans1.find(({ id: planId }) => planId === (currentPlan?.id || 1) + 1))}
                                        />
                                    </div>
                                    <span className="uppercase font-semibold text-lg md:text-2xl">{currentPlan?.title || title}</span>
                                    <div className="flex flex-col justify-center items-center relative top-24">
                                        {currentPlanDepartments[0].features.map(({
                                            checksCount,
                                            name,
                                            note,
                                        }, i) => (
                                            <div
                                                className={`flex items-center ${i === 1 ? "h-[114px] sm:h-20" : "h-20"}`}
                                                key={name}
                                            >
                                                {!note && (
                                                    <span className="flex gap-1 md:gap-2">
                                                        {Array.from(
                                                            { length: checksCount },
                                                            (_, index) => index + 1,
                                                        ).map(() => (
                                                            <Check
                                                                className="rounded-full border border-black p-1 md:p-2"
                                                                key={Math.random()}
                                                                size={35}
                                                            />
                                                        ))}
                                                    </span>
                                                )}
                                                {note && <span className="font-medium text-xs md:text-base">{note}</span>}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-col justify-center items-center relative top-44">
                                        {currentPlanDepartments[1].features.map(({
                                            checksCount,
                                            name,
                                            note,
                                        }) => (
                                            <div
                                                className="flex items-center h-20"
                                                key={name}
                                            >
                                                {!note && (
                                                    <span className="flex gap-1 md:gap-2">
                                                        {Array.from(
                                                            { length: checksCount },
                                                            (_, index) => index + 1,
                                                        ).map(() => (
                                                            <Check
                                                                className="rounded-full border border-black p-1 md:p-2"
                                                                key={Math.random()}
                                                                size={35}
                                                            />
                                                        ))}
                                                    </span>
                                                )}
                                                {note && <span className="font-medium text-xs md:text-base">{note}</span>}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}
