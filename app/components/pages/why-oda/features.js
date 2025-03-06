"use client";

import { motion, useInView } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export default function WhyOdaFeatures({ plans }) {
    const [currentPlan, setCurrentPlan] = useState(null);

    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    const formattedPlans = Object.values(plans);

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
            className="container mx-auto pb-[96px] md:pb-[193px] pt-[42px] md:pt-[84px] overflow-hidden"
            id="features"
        >
            <h2 className="font-bold text-[40px] md:text-[64px] mb-[98px] md:mb-[197px]">Compare All Features</h2>
            <div
                className="overflow-visible relative"
                ref={ref}
            >
                <motion.table
                    animate={isInView && { x: 0 }}
                    className="table-fixed w-full"
                    initial={{ x: "-100vw" }}
                    transition={{
                        damping: 10,
                        duration: 2,
                        ease: "easeIn",
                        stiffness: 40,
                        type: "spring",
                    }}
                >
                    <thead>
                        <tr className="bg-white h-20">
                            <th
                                className="px-2 md:px-4"
                                colSpan="3"
                            />
                        </tr>
                    </thead>
                    <>
                        <thead>
                            <tr className="bg-primary h-20">
                                <th
                                    className="font-semibold text-[22px] md:text-[32px] text-left px-2 md:px-4 relative z-50"
                                    colSpan="3"
                                >
                                    Foundation
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {formattedPlans[0]?.foundation.map(({ plandetailsname }, index) => (
                                <tr
                                    className={index % 2 === 0 ? "bg-[#E3E4E4] h-20 w-full" : "bg-white h-20 w-full"}
                                                        key={index} // eslint-disable-line
                                >
                                    <td
                                        className="font-normal text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-2 md:px-4"
                                        colSpan={3}
                                    >
                                        <h5 className="max-w-[220px] sm:max-w-[320px] md:max-w-[484px] break-words block relative z-50">{plandetailsname}</h5>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </>
                    <>
                        <thead>
                            <tr className="bg-primary h-20">
                                <th
                                    className="font-semibold text-[22px] md:text-[32px] text-left px-2 md:px-4 relative z-50"
                                    colSpan="3"
                                >
                                    Decoration
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {formattedPlans[0]?.decoration.map(({ plandetailsname }, index) => (
                                <tr
                                    className={index % 2 === 0 ? "bg-[#E3E4E4] h-20 w-full" : "bg-white h-20 w-full"}
                                    key={index} // eslint-disable-line
                                >
                                    <td
                                        className={`font-normal text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-2 md:px-4 ${index === formattedPlans[0].decoration.length - 1 ? "rounded-br-xl" : ""}`}
                                        colSpan={3}
                                    >
                                        <h5 className="max-w-[220px] sm:max-w-[320px] md:max-w-[484px] break-words block relative z-50">{plandetailsname}</h5>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </>
                </motion.table>
                <motion.div
                    animate={isInView && { x: 0 }}
                    className="flex flex-wrap gap-4 md:gap-8 justify-end absolute -top-0 right-0 w-full h-full"
                    initial={{ x: "100vw" }}
                    transition={{
                        damping: 10,
                        duration: 2,
                        ease: "easeIn",
                        stiffness: 40,
                        type: "spring",
                    }}
                >
                    {formattedPlans.map(({
                        decoration,
                        details: formattedPlanDetails,
                        foundation,
                    }) => {
                        let currentPlanDepartments = [
                            {
                                features: foundation,
                                title: "Foundation",
                            },
                            {
                                features: decoration,
                                title: "Decoration",
                            },
                        ];

                        if (currentPlan?.departments) currentPlanDepartments = currentPlan.departments;

                        return (
                            (
                                <div
                                    className={`${formattedPlanDetails.planid !== 1 ? "hidden xl:block" : ""} relative w-[140px] sm:w-[209px] h-full border border-black rounded-2xl text-center px-2 md:px-4 hover:bg-primary transition-all duration-1000`}
                                    key={formattedPlanDetails.planid}
                                >
                                    <div className="xl:hidden absolute h-20 right-[2px] w-full flex items-center">
                                        <div className="flex justify-between w-full">
                                            <ChevronLeft
                                                className={`${currentPlan?.details.planid === 4 || !currentPlan?.details?.planid ? "opacity-50 cursor-default" : "cursor-pointer opacity-100"} relative right-1`}
                                                size={30}
                                                onClick={() => (currentPlan?.details.planid > 4) && setCurrentPlan({
                                                    departments: [
                                                        {
                                                            features: formattedPlans.find(({ details }) => details.planid === (currentPlan?.details.planid || 4) - 1).foundation,
                                                            title: "Foundation",
                                                        },
                                                        {
                                                            features: formattedPlans.find(({ details }) => details.planid === (currentPlan?.details.planid || 4) - 1).decoration,
                                                            title: "Decoration",
                                                        },
                                                    ],
                                                    details: formattedPlans.find(({ details }) => details.planid === (currentPlan?.details.planid || 4) - 1).details,
                                                })}
                                            />
                                            <ChevronRight
                                                className={`${currentPlan?.details.planid === formattedPlans.length + 3 ? "opacity-50 cursor-default" : "cursor-pointer opacity-100"} relative left-1`}
                                                size={30}
                                                onClick={() => currentPlan?.details.planid !== formattedPlans.length + 3 && setCurrentPlan({
                                                    departments: [
                                                        {
                                                            features: formattedPlans.find(({ details }) => details.planid === (currentPlan?.details.planid || 4) + 1).foundation,
                                                            title: "Foundation",
                                                        },
                                                        {
                                                            features: formattedPlans.find(({ details }) => details.planid === (currentPlan?.details.planid || 4) + 1).decoration,
                                                            title: "Decoration",
                                                        },
                                                    ],
                                                    details: formattedPlans.find(({ details }) => details.planid === (currentPlan?.details.planid || 4) + 1).details,
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <h5 className="font-semibold text-base md:text-xl uppercase h-20 flex items-center justify-center">{currentPlan?.details?.planname || formattedPlanDetails?.planname}</h5>
                                    <div className="flex flex-col justify-center items-center relative top-[78px]">
                                        {currentPlanDepartments[0].features.map(({
                                            description,
                                            stars,
                                        }, i) => (
                                            <div
                                                className="flex items-center gap-1 h-20"
                                                key={i} // eslint-disable-line
                                            >
                                                {description ? <h6 className="font-medium text-xs sm:text-sm md:text-base">{description}</h6> : Array.from(
                                                    { length: stars },
                                                    (_, index) => index + 1,
                                                ).map((_, indx) => (
                                                    <Check
                                                        className="rounded-full border border-black p-1 md:p-2"
                                                        key={indx} // eslint-disable-line
                                                        size={35}
                                                    />
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-col justify-center items-center relative top-[157px]">
                                        {currentPlanDepartments[1].features.map(({
                                            description,
                                            stars,
                                        }, i) => (
                                            <div
                                                className="flex items-center gap-1 h-20"
                                                key={i} // eslint-disable-line
                                            >
                                                {description ? <h6 className="font-medium text-xs sm:text-sm md:text-base">{description}</h6> : Array.from(
                                                    { length: stars },
                                                    (_, index) => index + 1,
                                                ).map((_, indx) => (
                                                    <Check
                                                        className="rounded-full border border-black p-1 md:p-2"
                                                        key={indx} // eslint-disable-line
                                                        size={35}
                                                    />
                                                ))}
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
