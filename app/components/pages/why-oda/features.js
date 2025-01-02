"use client";

import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import React, { useRef } from "react";

export default function WhyOdaFeatures() {
    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    const plans = [
        {
            departments: [
                {
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
                    ],
                    title: "Foundation",
                },
                {
                    features: [
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
                    title: "Decoration",
                },
            ],
            id: 1,
            title: "Grand",
        },
        {
            departments: [
                {
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
                    ],
                    title: "Foundation",
                },
                {
                    features: [
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
                    title: "Decoration",
                },
            ],
            id: 2,
            title: "Prime",
        },
        {
            departments: [
                {
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
                    ],
                    title: "Foundation",
                },
                {
                    features: [
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
                    title: "Decoration",
                },
            ],
            id: 3,
            title: "Signature",
        },
    ];

    const departments = [
        {
            features: [
                "Interior Walls",
                "Electricity, Internet, Network, Satellite AC, Heating & Shutters Infrastructure",
                "Interior Plumbing & Insulation",
            ],
            id: 1,
            title: "Foundation",
        },
        {
            features: [
                "Floating (Reception | Hallway)",
                "Gypsom Board",
                "Interior Wall Paint & Cladding",
                "Flooring (Rooms)",
                "Flooring (Bathrooms/Kitchen)",
                "Stairs (including handrail & tempered glass)",
                "Interior Doors",
            ],
            id: 2,
            title: "Decoration",
        },
    ];

    return (
        <div className="container px-4 md:px-6 mx-auto pb-24 md:pb-52 pt-10 md:pt-20">
            <div className="mb-24 md:mb-48">
                <h2 className="font-bold text-4xl md:text-6xl">Compare All Feature</h2>
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
                                            <div className="max-w-[484px] break-words">{feature}</div>
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
                    {plans.map(({
                        departments: plansDepartments,
                        id,
                        title,
                    }) => (
                        <div
                            className="w-[209px] h-[1090px] border border-black rounded-xl text-center pt-4 md:pt-8"
                            key={id}
                        >
                            <span className="uppercase font-semibold text-lg md:text-2xl">{title}</span>
                            <div className="flex flex-col justify-center items-center relative top-14 md:top-28 gap-7 md:gap-14">
                                {plansDepartments[0].features.map(({
                                    checksCount,
                                    name,
                                    note,
                                }) => (
                                    <div
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
                                                        size={30}
                                                    />
                                                ))}
                                            </span>
                                        )}
                                        {note && <span className="font-medium text-lg md:text-xl">{note}</span>}
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col justify-center items-center relative top-28 md:top-60 gap-6 md:gap-[52px]">
                                {plansDepartments[1].features.map(({
                                    checksCount,
                                    name,
                                    note,
                                }) => (
                                    <div key={name}>
                                        {!note && (
                                            <span className="flex gap-1 md:gap-2">
                                                {Array.from(
                                                    { length: checksCount },
                                                    (_, index) => index + 1,
                                                ).map(() => (
                                                    <Check
                                                        className="rounded-full border border-black p-1 md:p-2"
                                                        key={Math.random()}
                                                        size={30}
                                                    />
                                                ))}
                                            </span>
                                        )}
                                        {note && <span className="font-medium text-lg md:text-xl">{note}</span>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
