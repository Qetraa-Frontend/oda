"use client";

import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function WhyOdaOurPlans({
    features,
    plans,
}) {
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
        <div className="pb-10 md:pb-20 pt-[110px] md:pt-[220px] relative">
            <Image
                alt="our_plans_bg"
                layout="fill"
                loading="lazy"
                objectFit="cover"
                src="/images/pages/why-oda/our-plans/plans_bg.webp"
            />
            <div className="container mx-auto">
                <div className="mb-12 md:mb-24 relative z-50">
                    <h2 className="font-bold text-[32px] md:text-[64px] mb-s md:mb-5">Our Plans</h2>
                    <h3 className="font-medium text-2xl md:text-4xl">Choose your desired pricing plan</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-4 xl:gap-8 justify-items-center xl:justify-items-start mb-5 md:mb-10">
                    {plans.map(({
                        description,
                        planBase64,
                        planid,
                        planname,
                    }) => (
                        <div
                            className={`w-full col-span-1 xl:col-span-4 ${planid === 3 ? "block sm:hidden xl:block" : ""}`}
                            key={planid}
                            onMouseEnter={() => setShowChevron({
                                ...showChevron,
                                [`plan${planid}`]: true,
                            })}
                            onMouseLeave={() => setShowChevron({
                                ...showChevron,
                                [`plan${planid}`]: false,
                            })}
                        >
                            <div className={`${planid === 2 ? "bg-primary" : "bg-transparent"} px-4 md:px-8 pt-[15px] md:pt-[31px] md:pb-[13px] lg:pb-[27px] rounded-2xl text-center border-black border-2 min-h-[500px] lg:min-h-[546px] relative transition-all duration-1000`}>
                                <span
                                    style={{ visibility: showChevron[`plan${planid}`] ? "visible" : "xl:hidden" }}
                                    className={`absolute bottom-6 right-6 bg-black p-2 rounded-full cursor-pointer transition-all duration-1000 ${
                                        showFeatures[`plan${planid}`] ? "rotate-180 opacity-45" : "rotate-0"
                                    } ${
                                        showChevron[`plan${planid}`]
                                            ? "opacity-100"
                                            : "xl:opacity-0 pointer-events-none"
                                    }`}
                                    onClick={() => setShowFeatures({
                                        ...showFeatures,
                                        [`plan${planid}`]: !showFeatures[`plan${planid}`],
                                    })}
                                >
                                    <ChevronDown color="white" />
                                </span>
                                <Image
                                    alt={`plan_${planid}`}
                                    className="rounded-full mx-auto hover:opacity-70"
                                    height={134}
                                    loading="lazy"
                                    src={`data:image/png;base64, ${planBase64}`}
                                    width={134}
                                />
                                <div className="mt-3 md:mt-6">
                                    <h4 className="font-medium text-lg md:text-2xl mb-3 md:mb-6">{planname}</h4>
                                    <p className="font-medium text-base md:text-xl !leading-loose">{description}</p>
                                </div>
                                <div className={`mt-6 md:mt-12 overflow-hidden transition-[max-height] duration-1000 ${showFeatures[`plan${planid}`] ? "max-h-[1000px]" : "max-h-0"}`}>
                                    <ul className="m-0 p-0 list-none !text-left">
                                        {features[planid].foundation.map(({
                                            description: planDetailsDescription,
                                            plandetailsid,
                                            plandetailsname,
                                            stars,
                                        }) => (
                                            <li
                                                className="flex justify-between items-center gap-1 md:gap-2 mb-2 md:mb-4 py-2 md:py-4"
                                                key={plandetailsid} // eslint-disable-line
                                            >
                                                <h5 className="font-normal text-base md:text-xl">{plandetailsname}</h5>
                                                {planDetailsDescription ? <h6 className="font-medium text-xs md:text-base">{planDetailsDescription}</h6> : (
                                                    <div className="flex gap-1 md:gap-2">
                                                        {Array.from(
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
                                                )}
                                            </li>
                                        ))}
                                        {features[planid].decoration.map(({
                                            description: planDetailsDescription,
                                            plandetailsid,
                                            plandetailsname,
                                            stars,
                                        }) => (
                                            <li
                                                className="flex justify-between items-center gap-1 md:gap-2 mb-2 md:mb-4 py-2 md:py-4"
                                                key={plandetailsid} // eslint-disable-line
                                            >
                                                <h5 className="font-normal text-base md:text-xl">{plandetailsname}</h5>
                                                {planDetailsDescription ? <h6 className="font-medium text-xs md:text-base">{planDetailsDescription}</h6> : (
                                                    <div className="flex gap-1 md:gap-2">
                                                        {Array.from(
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
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {planid === 1 && (
                                <div
                                    className={`${planid === 2 ? "bg-primary" : "bg-transparent"} hidden sm:block xl:hidden mt-4 xl:mt-8 px-4 md:px-8 pt-[28px] md:pt-[56px] md:pb-[20px] lg:pb-[27px] rounded-2xl text-center border-black border-2 min-h-[500px] lg:min-h-[546px] relative transition-all duration-1000`}
                                    key={3}
                                >
                                    <span
                                        style={{ visibility: showChevron[`plan${planid}`] ? "visible" : "xl:hidden" }}
                                        className={`absolute bottom-6 right-6 bg-black p-2 rounded-full cursor-pointer transition-all duration-1000 ${
                                            showFeatures[`plan${planid}`] ? "rotate-180 opacity-45" : "rotate-0"
                                        } ${
                                            showChevron[`plan${planid}`]
                                                ? "opacity-100"
                                                : "xl:opacity-0 pointer-events-none"
                                        }`}
                                        onClick={() => setShowFeatures({
                                            ...showFeatures,
                                            plan3: !showFeatures.plan3,
                                        })}
                                    >
                                        <ChevronDown color="white" />
                                    </span>
                                    <Image
                                        alt="plan_3"
                                        className="rounded-full mx-auto hover:opacity-70"
                                        height={134}
                                        loading="lazy"
                                        src={`data:image/png;base64, ${plans[2].planBase64}`}
                                        width={134}
                                    />
                                    <div className="mt-3 md:mt-6">
                                        <h4 className="font-medium text-lg md:text-2xl mb-3 md:mb-6">{plans[2].planname}</h4>
                                        <p className="font-medium text-base md:text-xl !leading-loose">{plans[2].description}</p>
                                    </div>
                                    <div className={`mt-6 md:mt-12 overflow-hidden transition-[max-height] duration-1000 ${showFeatures.plan3 ? "max-h-[1000px]" : "max-h-0"}`}>
                                        <ul className="m-0 p-0 list-none !text-left">
                                            {features[3].foundation.map(({
                                                description: planDetailsDescription,
                                                plandetailsid,
                                                plandetailsname,
                                                stars,
                                            }) => (
                                                <li
                                                    className="flex justify-between items-center gap-1 md:gap-2 mb-2 md:mb-4 py-2 md:py-4"
                                                key={plandetailsid} // eslint-disable-line
                                                >
                                                    <h5 className="font-normal text-base md:text-xl">{plandetailsname}</h5>
                                                    {planDetailsDescription ? <h6 className="font-medium text-xs md:text-base">{planDetailsDescription}</h6> : (
                                                        <div className="flex gap-1 md:gap-2">
                                                            {Array.from(
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
                                                    )}
                                                </li>
                                            ))}
                                            {features[3].decoration.map(({
                                                description: planDetailsDescription,
                                                plandetailsid,
                                                plandetailsname,
                                                stars,
                                            }) => (
                                                <li
                                                    className="flex justify-between items-center gap-1 md:gap-2 mb-2 md:mb-4 py-2 md:py-4"
                                                    key={plandetailsid} // eslint-disable-line
                                                >
                                                    <h5 className="font-normal text-base md:text-xl">{plandetailsname}</h5>
                                                    {planDetailsDescription ? <h6 className="font-medium text-xs md:text-base">{planDetailsDescription}</h6> : (
                                                        <div className="flex gap-1 md:gap-2">
                                                            {Array.from(
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
                                                    )}
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
        </div>
    );
}
