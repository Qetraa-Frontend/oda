"use client";

import { motion, useInView } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { useBuildYourKitStore } from "@/app/store/build-your-kit";
import { Checkbox } from "@/app/ui/checkbox";

export default function BuildYourKitFeatures({ plans }) {
    const [currentPlan, setCurrentPlan] = useState(null);

    const {
        plan,
        setPlan,
    } = useBuildYourKitStore();

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
        <div className="container mx-auto pb-20 md:pb-40 overflow-hidden relative">
            <div className="absolute top-0 left-3 sm:left-0 bg-primary rounded-2xl h-[871px] w-[94%] sm:w-full" />
            <div className="relative pl-5 md:pl-10 w-full mt-10 md:mt-20">
                <div className="flex gap-4 md:gap-8 items-center mb-[52px] md:mb-[105px] w-[94%]">
                    <Image
                        alt="choose"
                        height={116}
                        loading="lazy"
                        src="/icons/choose.svg"
                        width={116}
                    />
                    <div className="relative z-50 pl-2 md:pl-4">
                        <h2 className="font-bold text-3xl md:text-5xl mb-5 md:mb-10">Choose Plan</h2>
                        <h3 className="font-medium text-2xl md:text-4xl">Choose your desired pricing plan</h3>
                    </div>
                </div>
                <div
                    className="overflow-visible relative"
                    ref={ref}
                >
                    <motion.table
                        animate={isInView && { x: 0 }}
                        className="table-fixed w-full rounded-tr-xl overflow-hidden"
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
                                            <h5 className="max-w-[230px] sm:max-w-[320px] md:max-w-[484px] break-words block relative z-50 plan-details-name">{plandetailsname}</h5>
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
                                            className="font-normal text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-2 md:px-4"
                                            colSpan={3}
                                        >
                                            <h5 className="max-w-[230px] sm:max-w-[320px] md:max-w-[484px] break-words block relative z-50 plan-details-name">{plandetailsname}</h5>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </>
                        <thead>
                            <tr className="h-20">
                                <th
                                    className="font-semibold text-[22px] md:text-[32px] text-left px-2 md:px-4"
                                    colSpan="3"
                                >
                                    Choose Plan
                                </th>
                            </tr>
                        </thead>
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
                                <div
                                    className={`${formattedPlanDetails.planid !== 4 ? "hidden xl:block" : ""} relative w-[140px] sm:w-[209px] h-full border border-black rounded-2xl text-center px-2 md:px-4 hover:bg-primary ${plan.id === (currentPlan?.details.planid || formattedPlanDetails.planid) ? "bg-primary" : ""} transition-all duration-1000`}
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
                                    <h5 className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl uppercase h-20 flex items-center justify-center">{currentPlan?.details?.planname || formattedPlanDetails?.planname}</h5>
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
                                    <div className="relative top-[195px]">
                                        <Checkbox
                                            checked={plan.id === (currentPlan?.details.planid || formattedPlanDetails.planid)}
                                            className="w-8 h-8 border border-black"
                                            onCheckedChange={(value) => {
                                                if (value) {
                                                    setPlan({
                                                        id: currentPlan?.details.planid || formattedPlanDetails.planid,
                                                        name: currentPlan?.details.planname || formattedPlanDetails.planname,
                                                    });
                                                } else {
                                                    setPlan({
                                                        id: "",
                                                        name: "",
                                                    });
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
