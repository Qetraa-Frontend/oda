"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function WhyOdaPaymentPlans({ paymentPlans }) {
    const [showDescriptions, setShowDescriptions] = useState({
        Oda: { ...paymentPlans[0].installemntPlans[0] },
    });

    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    return (
        <div
            className="container mx-auto py-12 md:py-24"
            ref={ref}
        >
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
                <div className="text-center mb-[36px] md:mb-[72px]">
                    <h2 className="font-bold text-3xl md:text-5xl mb-2 md:mb-4">Give your Bank Account a Break</h2>
                    <h3 className="font-bold text-[22px] md:text-[32px] opacity-70">Take a look at the desired payment plans</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                    {paymentPlans.map(({
                        description,
                        iconBase64,
                        installemntPlans,
                        paymentplanname,
                    }) => (
                        <div
                            className="col-span-1 md:col-span-6 xl:col-span-4"
                            key={paymentplanname}
                        >
                            <div className={`py-2 md:py-4 px-2 md:px-4 border border-gray-300 rounded-2xl min-w-full ${showDescriptions[paymentplanname] ? "" : "max-h-[246px]"} h-full overflow-hidden`}>
                                <div className="w-full bg-primary py-[10px] md:py-5 px-2 md:px-4 flex justify-between rounded-lg">
                                    <h5 className="font-medium text-lg md:text-2xl">Program</h5>
                                    <Image
                                        alt="program"
                                        className="object-contain"
                                        height={35}
                                        loading="lazy"
                                        src={`data:image/png;base64, ${iconBase64}`}
                                        width={102}
                                    />
                                </div>
                                <div>
                                    <h6 className="font-normal text-xs md:text-sm my-2 md:my-4">{description}</h6>
                                    <div className="flex flex-wrap gap-1 md:gap-2 overflow-hidden">
                                        {installemntPlans.sort((a, b) => a.paymentplanid - b.paymentplanid).map(({
                                            adminfees,
                                            adminfeespercentage,
                                            downpayment,
                                            downpaymentpercentage,
                                            interestrate,
                                            interestrateperyearpercentage,
                                            numberofinstallmentmonths,
                                            paymentplanid,
                                        }) => (
                                            <span
                                                className={`font-medium text-xs md:text-base rounded-lg w-fit border ${showDescriptions[paymentplanname]?.numberofinstallmentmonths === numberofinstallmentmonths ? "border-primary text-black bg-primary" : "border-gray-300 hover:border-primary hover:text-black hover:bg-primary"} p-2 cursor-pointer transition-all duration-1000`}
                                                key={numberofinstallmentmonths}
                                                onClick={() => {
                                                    if (showDescriptions[paymentplanname]?.numberofinstallmentmonths === numberofinstallmentmonths) setShowDescriptions({});
                                                    else {
                                                        setShowDescriptions(() => ({
                                                            [paymentplanname]: {
                                                                adminfees,
                                                                adminfeespercentage,
                                                                downpayment,
                                                                downpaymentpercentage,
                                                                interestrate,
                                                                interestrateperyearpercentage,
                                                                numberofinstallmentmonths,
                                                                paymentplanid,
                                                            },
                                                        }));
                                                    }
                                                }}
                                            >
                                                {numberofinstallmentmonths}
                                                {" "}
                                                Months
                                            </span>
                                        ))}
                                    </div>
                                    <ul className={`transform ${showDescriptions[paymentplanname] ? "translate-y-0 border border-gray-300 p-2 mt-2 md:mt-4 rounded-lg" : "translate-y-[1000%]"} transition-all duration-500`}>
                                        {showDescriptions[paymentplanname] && (
                                            <li className="font-normal text-sm md:text-lg text-black">
                                                Down Payment:
                                                {" "}
                                                <span className="font-semibold">{showDescriptions[paymentplanname]?.downpayment ? `${showDescriptions[paymentplanname].downpaymentpercentage}%` : `${0}%`}</span>
                                            </li>
                                        )}
                                        {showDescriptions[paymentplanname] && (
                                            <li className="font-normal text-sm md:text-lg text-black">
                                                Admin Fees:
                                                {" "}
                                                <span className="font-semibold">{showDescriptions[paymentplanname]?.adminfees ? `${showDescriptions[paymentplanname].adminfeespercentage}%` : `${0}%`}</span>
                                            </li>
                                        )}
                                        {showDescriptions[paymentplanname] && (
                                            <li className="font-normal text-sm md:text-lg text-black">
                                                Interest Rate:
                                                {" "}
                                                <span className="font-semibold">{showDescriptions[paymentplanname]?.interestrate ? `${showDescriptions[paymentplanname].interestrateperyearpercentage}%` : `${0}%`}</span>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
            <p className="font-semibold text-lg md:text-2xl mt-8 md:mt-16">*To guarantee defect-free installations, Payment plans with ODA enable you to complete the final 5% of the total payment up to 1 month after project delivery.</p>
        </div>
    );
}
