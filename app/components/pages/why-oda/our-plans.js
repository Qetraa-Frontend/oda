"use client";

import { Check, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function WhyOdaOurPlans() {
    const [showFeatures, setShowFeatures] = useState({
        plan1: false,
        plan2: false,
        plan3: false,
    });

    const plans = [
        {
            alt: "plan_1",
            description: "The most affordable kit. This kit includes  everything you need to get things up  and running.",
            features: [
                {
                    checksCount: 1,
                    name: "Interior Walls",
                },
                {
                    checksCount: 1,
                    name: "Electricity, Internet, Network, Satellite AC, Heating & Shutters Infrastructure",
                },
                {
                    checksCount: 1,
                    name: "Interior Plumbing & Insulation",
                },
                {
                    checksCount: 1,
                    name: "Floating (Reception | Hallway)",
                },
                {
                    checksCount: 1,
                    name: "Gypsom Board",
                },
                {
                    name: "Interior Wall Paint & Cladding",
                    note: "Ceramic",
                },
                {
                    name: "Flooring (Rooms)",
                    note: "Ceramic",
                },
                {
                    name: "Flooring (Bathrooms/Kitchen)",
                    note: "Ceramic",
                },
                {
                    name: "Stairs (including handrail & tempered glass)",
                    note: "Local Marble",
                },
                {
                    name: "Interior Doors",
                    note: "Basic filling density",
                },
            ],
            id: 1,
            imageSrc: "/images/pages/why-oda/our-plans/plan_1.png",
            price: 7500,
            title: "Grand Design & Build Kit",
        },
        {
            alt: "plan_2",
            description: "A more elevated plan. This kit includes  everything you need to get things up.",
            features: [
                {
                    checksCount: 1,
                    name: "Interior Walls",
                },
                {
                    checksCount: 2,
                    name: "Electricity, Internet, Network, Satellite AC, Heating & Shutters Infrastructure",
                },
                {
                    checksCount: 1,
                    name: "Interior Plumbing & Insulation",
                },
                {
                    checksCount: 1,
                    name: "Floating (Reception | Hallway)",
                },
                {
                    checksCount: 2,
                    name: "Gypsom Board",
                },
                {
                    name: "Interior Wall Paint & Cladding",
                    note: "Porcelain",
                },
                {
                    name: "Flooring (Rooms)",
                    note: "Porcelain",
                },
                {
                    name: "Flooring (Bathrooms/Kitchen)",
                    note: "Ceramic",
                },
                {
                    name: "Stairs (including handrail & tempered glass)",
                    note: "Local Marble",
                },
                {
                    name: "Interior Doors",
                    note: "Medium filling density",
                },
            ],
            id: 2,
            imageSrc: "/images/pages/why-oda/our-plans/plan_2.png",
            price: 9500,
            title: "Prime Design & Build Kit",
        },
        {
            alt: "plan_2",
            description: "The most affordable kit. This kit includes  everything you need to get things up  and running.",
            features: [
                {
                    checksCount: 1,
                    name: "Interior Walls",
                },
                {
                    checksCount: 3,
                    name: "Electricity, Internet, Network, Satellite AC, Heating & Shutters Infrastructure",
                },
                {
                    checksCount: 1,
                    name: "Interior Plumbing & Insulation",
                },
                {
                    checksCount: 2,
                    name: "Floating (Reception | Hallway)",
                },
                {
                    checksCount: 3,
                    name: "Gypsom Board",
                },
                {
                    name: "Interior Wall Paint & Cladding",
                    note: "Imported Marble",
                },
                {
                    name: "Flooring (Rooms)",
                    note: "Local Marble",
                },
                {
                    name: "Flooring (Bathrooms/Kitchen)",
                    note: "Local Marble",
                },
                {
                    name: "Stairs (including handrail & tempered glass)",
                    note: "Local Marble",
                },
                {
                    name: "Interior Doors",
                    note: "Highest filling density",
                },
            ],
            id: 3,
            imageSrc: "/images/pages/why-oda/our-plans/plan_3.png",
            price: 11500,
            title: "Signature Design & Build Kit",
        },
    ];

    return (
        <div
            className="container px-4 md:px-6 mx-auto pb-20 md:pb-40 pt-32 md:pt-60 bg-cover bg-no-repeat bg-top"
            style={{ backgroundImage: "url(/images/pages/why-oda/our-plans/plans_bg.png)" }}
        >
            <div className="mb-12 md:mb-24">
                <h2 className="font-bold text-4xl md:text-6xl mb-5 md:mb-10">Our Plans</h2>
                <span className="font-medium text-2xl md:text-4xl">Choose your desired pricing plan</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-8 xl:gap-16 justify-items-center xl:justify-items-start">
                {plans.map(({
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
                    >
                        <div className={`${id === 2 ? "bg-primary" : "bg-white"} p-6 md:p-10 rounded-xl text-center border-black border-2 min-h-[695px] relative transition-all duration-1000`}>
                            <span
                                className={`absolute bottom-6 right-6 bg-black p-2 rounded-full opacity-60 cursor-pointer transition-transform duration-500 ${showFeatures[`plan${id}`] ? "rotate-180" : "rotate-0"}`}
                                onClick={() => setShowFeatures({
                                    ...showFeatures,
                                    [`plan${id}`]: !showFeatures[`plan${id}`],
                                })}
                            >
                                <ChevronDown color="white" />
                            </span>
                            <div>
                                <img
                                    alt={alt}
                                    className="rounded-full mx-auto"
                                    height="134"
                                    src={imageSrc}
                                    width="134"
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
                                    className={`absolute bottom-6 right-6 bg-black p-2 rounded-full opacity-60 cursor-pointer transition-transform duration-500 ${showFeatures.plan3 ? "rotate-180" : "rotate-0"}`}
                                    onClick={() => setShowFeatures({
                                        ...showFeatures,
                                        plan3: !showFeatures.plan3,
                                    })}
                                >
                                    <ChevronDown color="white" />
                                </span>
                                <div>
                                    <img
                                        alt={plans[2].alt}
                                        className="rounded-full mx-auto"
                                        height="134"
                                        src={plans[2].imageSrc}
                                        width="134"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg md:text-2xl mt-3 md:mt-6 mb-6 md:mb-12">{plans[2].title}</h3>
                                    <div className="mb-6 md:mb-12">
                                        <span className="font-medium text-base md:text-xl mb-3 md:mb-6 block">Start From</span>
                                        <span className="font-normal text-lg md:text-2xl">
                                            {plans[2].price}
                                            {" "}
                                            | M2
                                        </span>
                                    </div>
                                    <p className="font-medium text-base md:text-xl !leading-loose">{plans[2].description}</p>
                                </div>
                                <div className={`overflow-hidden transition-[max-height] duration-1000 ${showFeatures.plan3 ? "max-h-[1000px]" : "max-h-0"}`}>
                                    <ul className="mt-5 md:mt-10 mb-0 p-0 list-none !text-left">
                                        {plans[2].features.map(({
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
