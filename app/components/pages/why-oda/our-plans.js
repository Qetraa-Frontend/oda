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
        <div className="container mx-auto pb-10 md:pb-20 pt-[120px] md:pt-60 relative">
            <Image
                alt="our_plans_bg"
                layout="fill"
                loading="lazy"
                objectFit="cover"
                src="/images/pages/why-oda/our-plans/plans_bg.webp"
            />
            <div className="mb-12 md:mb-24">
                <h2 className="font-bold text-[32px] md:text-[64px] mb-5 md:mb-10">Our Plans</h2>
                <h3 className="font-medium text-2xl md:text-4xl">Choose your desired pricing plan</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-4 xl:gap-8 justify-items-center xl:justify-items-start mb-5 md:mb-10">
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
                        <div className={`${id === 2 ? "bg-primary" : "bg-white"} px-4 md:px-8 pt-[37px] md:pt-[74px] rounded-lg text-center border-black border-2 min-h-[695px] relative transition-all duration-1000`}>
                            <span
                                className={`absolute bottom-6 right-6 bg-black p-2 rounded-full cursor-pointer transition-all duration-1000 ${
                                    showFeatures[`plan${id}`] ? "rotate-180 opacity-45" : "rotate-0"
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
                            <Image
                                alt={alt}
                                className="rounded-full mx-auto hover:opacity-70"
                                height={134}
                                loading="lazy"
                                src={imageSrc}
                                width={134}
                            />
                            <div className="mt-3 md:mt-6">
                                <h4 className="font-medium text-lg md:text-2xl">{title}</h4>
                                <div className="my-6 md:my-12">
                                    <h5 className="font-medium text-base md:text-xl mb-3 md:mb-6">Start From</h5>
                                    <span className="font-normal text-lg md:text-2xl">
                                        {price}
                                        {" "}
                                        | M2
                                    </span>
                                </div>
                                <p className="font-medium text-base md:text-xl !leading-loose">{description}</p>
                            </div>
                            <div className={`mt-6 md:mt-12 overflow-hidden transition-[max-height] duration-1000 ${showFeatures[`plan${id}`] ? "max-h-[1000px]" : "max-h-0"}`}>
                                <ul className="m-0 p-0 list-none !text-left">
                                    {features.map(({
                                        checksCount,
                                        name,
                                        note,
                                    }, i) => (
                                        <li
                                            className="flex justify-between items-center gap-1 md:gap-2 mb-2 md:mb-4 py-2 md:py-4"
                                            key={i} // eslint-disable-line
                                        >
                                            <span className="font-normal text-base md:text-xl">{name}</span>
                                            {!note && (
                                                <span className="flex gap-[2px] md:gap-1 !text-right">
                                                    {Array.from(
                                                        { length: checksCount },
                                                        (_, index) => index + 1,
                                                    ).map((_, indx) => <Check key={indx} />)} {/* eslint-disable-line */}
                                                </span>
                                            )}
                                            {note && <span className="font-medium text-xs md:text-base !text-right">{note}</span>}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {id === 1 && (
                            <div
                                className={`${id === 2 ? "bg-primary" : "bg-white"} hidden sm:block xl:hidden mt-8 px-4 md:px-8 pt-[37px] md:pt-[74px] rounded-lg text-center border-black border-2 min-h-[695px] relative transition-all duration-1000`}
                                key={3}
                            >
                                <span
                                    className={`absolute bottom-6 right-6 bg-black p-2 rounded-full cursor-pointer transition-all duration-1000 ${
                                        showFeatures[`plan${id}`] ? "rotate-180 opacity-45" : "rotate-0"
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
                                <Image
                                    alt={plans2[2].alt}
                                    className="rounded-full mx-auto hover:opacity-70"
                                    height={134}
                                    loading="lazy"
                                    src={plans2[2].imageSrc}
                                    width={134}
                                />
                                <div className="mt-3 md:mt-6">
                                    <h3 className="font-medium text-lg md:text-2xl">{title}</h3>
                                    <div className="my-6 md:my-12">
                                        <h6 className="font-medium text-base md:text-xl mb-3 md:mb-6">Start From</h6>
                                        <span className="font-normal text-lg md:text-2xl">
                                            {price}
                                            {" "}
                                            | M2
                                        </span>
                                    </div>
                                    <p className="font-medium text-base md:text-xl !leading-loose">{description}</p>
                                </div>
                                <div className={`mt-6 md:mt-12 overflow-hidden transition-[max-height] duration-1000 ${showFeatures.plan3 ? "max-h-[1000px]" : "max-h-0"}`}>
                                    <ul className="m-0 p-0 list-none !text-left">
                                        {plans2[2].features.map(({
                                            checksCount,
                                            name,
                                            note,
                                        }, i) => (
                                            <li
                                                className="flex justify-between items-center gap-1 md:gap-2 mb-2 md:mb-4 py-2 md:py-4"
                                                key={i} // eslint-disable-line
                                            >
                                                <span className="font-normal text-base md:text-xl">{name}</span>
                                                {!note && (
                                                    <span className="flex gap-[2px] md:gap-1 !text-right">
                                                        {Array.from(
                                                            { length: checksCount },
                                                            (_, index) => index + 1,
                                                        ).map((_, indx) => <Check key={indx} />)} {/* eslint-disable-line */}
                                                    </span>
                                                )}
                                                {note && <span className="font-medium text-xs md:text-base !text-right">{note}</span>}
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
                className="font-normal text-lg md:text-2xl underline float-right"
                href="#features"
                prefetch={false}
            >
                See Full Features List
            </Link>
        </div>
    );
}
