"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { bankAccounts } from "@/app/data/why-oda";

export default function WhyOdaBankAccounts() {
    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    return (
        <div
            className="container px-4 xl:px-0 mx-auto pb-28 md:pb-60 pt-28 md:pt-52"
            ref={ref}
        >
            <motion.div
                animate={isInView && { y: 0 }}
                initial={{ y: "100vh" }}
                transition={{
                    damping: 10,
                    duration: 2,
                    ease: "easeInOut",
                    stiffness: 50,
                    type: "spring",
                }}
            >
                <div className="text-center mb-14 md:mb-28">
                    <h2 className="font-bold text-3xl md:text-5xl mb-2 md:mb-4">Give your Bank Account a Break</h2>
                    <span className="font-bold text-xl md:text-3xl opacity-70">Choose your desired payment plan</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-4 xl:gap-8 justify-items-center xl:justify-items-start">
                    {bankAccounts.map(({
                        alt,
                        alt1,
                        alt2,
                        bankInstallment,
                        id,
                        imageHeight,
                        imageHeight1,
                        imageHeight2,
                        imageSrc,
                        imageSrc1,
                        imageSrc2,
                        imageWidth,
                        imageWidth1,
                        imageWidth2,
                        monthlyInstallment,
                        paymentProgram,
                        paymentSchedule,
                        programId,
                    }) => (
                        <div
                            className="col-span-1 xl:col-span-3"
                            key={id}
                        >
                            <div className="pb-1 md:pb-2 pt-2 md:pt-4 px-2 md:px-4 rounded-xl border-[#C9C9BE] border-2 w-full max-w-[390px] min-h-[300px] md:min-h-[430px] relative bg-[#C9C9BE] bg-opacity-30">
                                <div>
                                    <Image
                                        alt={alt || alt1}
                                        className="absolute right-4 top-4"
                                        height={imageHeight || imageHeight1}
                                        loading="lazy"
                                        src={imageSrc || imageSrc1}
                                        width={imageWidth || imageWidth1}
                                    />
                                    {imageSrc2 && (
                                        <Image
                                            alt={alt2}
                                            className="absolute left-4 top-4"
                                            height={imageHeight2}
                                            loading="lazy"
                                            src={imageSrc2}
                                            width={imageWidth2}
                                        />
                                    )}
                                </div>
                                <div className="flex flex-col gap-3 md:gap-7 mt-12">
                                    <span className="font-bold text-base md:text-xl w-fit rounded-xl p-1 md:p-2 border border-black">{`Program ${programId}`}</span>
                                    {paymentProgram && (
                                        <div>
                                            <h6 className="font-medium text-base md:text-xl mb-2 md:mb-4">
                                                Payment Program
                                                <span className="relative bottom-2">*</span>
                                            </h6>
                                            <p className="font-normal text-xs md:text-base">{paymentProgram}</p>
                                        </div>
                                    )}
                                    {monthlyInstallment && (
                                        <div>
                                            <h6 className="font-medium text-base md:text-xl mb-2 md:mb-4">Monthly installment Plan</h6>
                                            <p className="font-normal text-xs md:text-base">Pay installments up to 5 years in  installments.</p>
                                        </div>
                                    )}
                                    {bankInstallment && (
                                        <div>
                                            <h6 className="font-medium text-base md:text-xl mb-2 md:mb-4">Installments with your Bank</h6>
                                            <p className="font-normal text-xs md:text-base">{bankInstallment}</p>
                                        </div>
                                    )}
                                    <div>
                                        <h6 className="font-medium text-base md:text-xl mb-2 md:mb-4">Payment Schedule:</h6>
                                        <ul className="m-0 p-0 list-none">
                                            {paymentSchedule.map((schedule) => (
                                                <li>
                                                    -
                                                    {" "}
                                                    {schedule}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
            <p className="font-semibold text-lg md:text-2xl mt-20 md:mt-40">*To guarantee defect-free installations, Payment plans with ODA enable you to complete the final 5% of the total payment up to 3 months after project delivery.</p>
        </div>
    );
}
