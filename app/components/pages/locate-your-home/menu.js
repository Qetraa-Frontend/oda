"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function LocateYourHomeMenu({ plans }) {
    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    return (
        <div
            className="container mx-auto pb-20 md:pb-40 relative"
            ref={ref}
        >
            <Image
                alt="plans_bg"
                layout="fill"
                loading="lazy"
                objectFit="cover"
                src="/images/pages/locate-your-home/our-plans/plans_bg.webp"
            />
            <motion.div
                animate={isInView && {
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
                <div className="mb-12 md:mb-24 relative z-50">
                    <h2 className="font-bold text-[32px] md:text-[64px] mb-s md:mb-5">Our Menu</h2>
                    <h3 className="font-medium text-2xl md:text-4xl">Choose your Plan that&apos;s right for you</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-4 xl:gap-8 justify-items-center xl:justify-items-start">
                    {plans?.map(({
                        description,
                        planBase64,
                        planid,
                        planname,
                        pricepermeter,
                    }) => (
                        <div
                            className={`w-full col-span-1 xl:col-span-4 ${planid === 3 ? "block sm:hidden xl:block" : ""}`}
                            key={planid}
                        >
                            <div className="bg-transparent px-4 md:px-8 pt-[15px] md:pt-[31px] md:pb-[13px] lg:pb-[27px] rounded-lg text-center border-black border-2 min-h-[500px] lg:min-h-[546px] relative transition-all duration-1000">
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
                                    <div className="my-6 md:my-12">
                                        <h5 className="font-medium text-base md:text-xl mb-3 md:mb-6">Starting From</h5>
                                        <span className="font-normal text-lg md:text-2xl">
                                            {pricepermeter}
                                            {" "}
                                            | M2
                                        </span>
                                    </div>
                                    <p className="font-medium text-base md:text-xl !leading-loose">{description}</p>
                                </div>
                            </div>
                            {planid === 1 && (
                                <div
                                    className="bg-transparent hidden sm:block xl:hidden mt-4 xl:mt-8 px-4 md:px-8 pt-[28px] md:pt-[56px] md:pb-[20px] lg:pb-[27px] rounded-lg text-center border-black border-2 min-h-[500px] lg:min-h-[546px] relative transition-all duration-1000"
                                    key={3}
                                >
                                    <Image
                                        alt="plan_3"
                                        className="rounded-full mx-auto hover:opacity-70"
                                        height={134}
                                        loading="lazy"
                                        src="/images/pages/locate-your-home/our-plans/plan_3.webp"
                                        width={134}
                                    />
                                    <div className="mt-3 md:mt-6">
                                        <h4 className="font-medium text-lg md:text-2xl mb-3 md:mb-6">{plans[2].planname}</h4>
                                        <div className="my-6 md:my-12">
                                            <h5 className="font-medium text-base md:text-xl mb-3 md:mb-6">Starting From</h5>
                                            <span className="font-normal text-lg md:text-2xl">
                                                {plans[2].pricepermeter}
                                                {" "}
                                                | M2
                                            </span>
                                        </div>
                                        <p className="font-medium text-base md:text-xl !leading-loose">{plans[2].description}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
