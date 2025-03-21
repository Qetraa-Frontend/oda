"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function LocateYourHomePlans({ plans }) {
    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    return (
        <div
            className="pb-20 md:pb-40 relative"
            ref={ref}
        >
            <Image
                alt="plans_bg"
                layout="fill"
                loading="lazy"
                objectFit="cover"
                src="/images/pages/locate-your-home/plans/plans_bg.webp"
            />
            <div className="container mx-auto">
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
                    <h2 className="font-bold text-[32px] md:text-[64px] mb-12 md:mb-24 relative z-50">Our Plans</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-4 xl:gap-8 justify-items-center xl:justify-items-start">
                        {plans?.map(({
                            description,
                            planBase64,
                            planid,
                            planname,
                            pricepermeter,
                        }) => (
                            <div
                                className="w-full col-span-1 xl:col-span-4"
                                key={planid}
                            >
                                <div className="bg-transparent px-4 md:px-8 pt-[13px] md:pt-[31px] pb-[13px] md:pb-[27px] rounded-2xl text-center border-black border-2 h-fit md:h-full relative transition-all duration-1000">
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
                                        <div className="my-5 md:my-10">
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
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
