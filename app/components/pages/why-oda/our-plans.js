"use client";

import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { plans2 } from "@/app/data/why-oda";

export default function WhyOdaOurPlans() {
    const [showFeatures, setShowFeatures] = useState({
        plan1: false,
        plan2: false,
        plan3: false,
    });

    const [showChevron, setShowChevron] = useState({
        plan1: false,
        plan2: false,
        plan3: false,
    });

    return (
        <div
            className="container px-4 md:px-6 mx-auto pb-10 md:pb-20 pt-32 md:pt-60 bg-cover bg-no-repeat bg-top"
            style={{ backgroundImage: "url(/images/pages/why-oda/our-plans/plans_bg.png)" }}
        >
            <div className="mb-12 md:mb-24">
                <h2 className="font-bold text-4xl md:text-6xl mb-5 md:mb-10">Our Plans</h2>
                <span className="font-medium text-2xl md:text-4xl">Choose your desired pricing plan</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-8 xl:gap-16 justify-items-center xl:justify-items-start">
                {plans2.map(({
                    alt,
                    description,
                    features,
                    id,
                    imageSrc,
                    price,
                    title,
                }) => (
                    <div
                        className={`col-span-1 xl:col-span-4 ${id === 3 ? "block sm:hidden xl:block" : ""}`}
                        key={id}
                        onMouseEnter={() => setShowChevron({
                            ...showChevron,
                            [`plan${id}`]: true,
                        })}
                        onMouseLeave={() => setShowChevron({
                            ...showChevron,
                            [`plan${id}`]: false,
                        })}
                    >
                        <div className={`${id === 2 ? "bg-primary" : "bg-white"} p-6 md:p-10 rounded-xl text-center border-black border-2 min-h-[695px] relative transition-all duration-1000`}>
                            <span
                                className={`absolute bottom-6 right-6 bg-black p-2 rounded-full cursor-pointer transition-all duration-1000 ${
                                    showFeatures[`plan${id}`] ? "rotate-180" : "rotate-0"
                                } ${
                                    showChevron[`plan${id}`]
                                        ? "opacity-100"
                                        : "xl:opacity-0 pointer-events-none"
                                }`}
                                style={{
                                    visibility: showChevron[`plan${id}`] ? "visible" : "xl:hidden",
                                }}
                                onClick={() => setShowFeatures({
                                    ...showFeatures,
                                    [`plan${id}`]: !showFeatures[`plan${id}`],
                                })}
                            >
                                <ChevronDown color="white" />
                            </span>
                            <div>
                                <Image
                                    alt={alt}
                                    className="rounded-full mx-auto"
                                    height={134}
                                    src={imageSrc}
                                    width={134}
                                />
                            </div>
                            <div>
                                <h3 className="font-medium text-lg md:text-2xl mt-3 md:mt-6 mb-6 md:mb-12">{title}</h3>
                                <div className="mb-6 md:mb-12">
                                    <span className="font-medium text-base md:text-xl mb-3 md:mb-6 block">Start From</span>
                                    <span className="font-normal text-lg md:text-2xl">
                                        {price}
                                        {" "}
                                        | M2
                                    </span>
                                </div>
                                <p className="font-medium text-base md:text-xl !leading-loose">{description}</p>
                            </div>
                            <div className={`overflow-hidden transition-[max-height] duration-1000 ${showFeatures[`plan${id}`] ? "max-h-[1000px]" : "max-h-0"}`}>
                                <ul className="mt-5 md:mt-10 mb-0 p-0 list-none !text-left">
                                    {features.map(({
                                        checksCount,
                                        name,
                                        note,
                                    }) => (
                                        <li
                                            className="flex justify-between items-center gap-1 md:gap-2 mb-5 md:mb-10"
                                            key={name}
                                        >
                                            <span className="font-normal text-sm md:text-lg">{name}</span>
                                            {!note && (
                                                <span className="flex gap-1 md:gap-2 !text-right">
                                                    {Array.from(
                                                        { length: checksCount },
                                                        (_, index) => index + 1,
                                                    ).map(() => <Check key={Math.random()} />)}
                                                </span>
                                            )}
                                            {note && <span className="font-medium text-lg md:text-xl ml-2 !text-right">{note}</span>}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {id === 1 && (
                            <div
                                className={`${id === 2 ? "bg-primary" : "bg-white"} hidden sm:block xl:hidden mt-8 p-6 md:p-10 rounded-xl text-center border-black border-2 min-h-[695px] relative transition-all duration-1000`}
                                key={3}
                            >
                                <span
                                    className={`absolute bottom-6 right-6 bg-black p-2 rounded-full cursor-pointer transition-all duration-1000 ${
                                        showFeatures[`plan${id}`] ? "rotate-180" : "rotate-0"
                                    } ${
                                        showChevron[`plan${id}`]
                                            ? "opacity-100"
                                            : "xl:opacity-0 pointer-events-none"
                                    }`}
                                    style={{
                                        visibility: showChevron[`plan${id}`] ? "visible" : "xl:hidden",
                                    }}
                                    onClick={() => setShowFeatures({
                                        ...showFeatures,
                                        [`plan${id}`]: !showFeatures[`plan${id}`],
                                    })}
                                >
                                    <ChevronDown color="white" />
                                </span>

                                <div>
                                    <Image
                                        alt={plans2[2].alt}
                                        className="rounded-full mx-auto"
                                        height={134}
                                        src={plans2[2].imageSrc}
                                        width={134}
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg md:text-2xl mt-3 md:mt-6 mb-6 md:mb-12">{plans2[2].title}</h3>
                                    <div className="mb-6 md:mb-12">
                                        <span className="font-medium text-base md:text-xl mb-3 md:mb-6 block">Start From</span>
                                        <span className="font-normal text-lg md:text-2xl">
                                            {plans2[2].price}
                                            {" "}
                                            | M2
                                        </span>
                                    </div>
                                    <p className="font-medium text-base md:text-xl !leading-loose">{plans2[2].description}</p>
                                </div>
                                <div className={`overflow-hidden transition-[max-height] duration-1000 ${showFeatures.plan3 ? "max-h-[1000px]" : "max-h-0"}`}>
                                    <ul className="mt-5 md:mt-10 mb-0 p-0 list-none !text-left">
                                        {plans2[2].features.map(({
                                            checksCount,
                                            name,
                                            note,
                                        }) => (
                                            <li
                                                className="flex justify-between items-center gap-1 md:gap-2 mb-5 md:mb-10"
                                                key={name}
                                            >
                                                <span className="font-normal text-sm md:text-lg">{name}</span>
                                                {!note && (
                                                    <span className="flex gap-1 md:gap-2 !text-right">
                                                        {Array.from(
                                                            { length: checksCount },
                                                            (_, index) => index + 1,
                                                        ).map(() => <Check key={Math.random()} />)}
                                                    </span>
                                                )}
                                                {note && <span className="font-medium text-lg md:text-xl ml-2 !text-right">{note}</span>}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Link
                className="text-lg md:text-2xl font-normal inline-block underline float-right mt-5 md:mt-10"
                href="#features"
                prefetch={false}
            >
                See Full Features List
            </Link>
        </div>
    );
}
