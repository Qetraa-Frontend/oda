"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function AboutUsBlocks() {
    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    return (
        <div
            className="container px-4 xl:px-0 mx-auto min-h-[990px]"
            ref={ref}
        >
            <motion.div
                animate={isInView && { y: 0 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 relative top-[71px] md:top-[142px]"
                initial={{ y: "100vh" }}
                transition={{
                    damping: 10,
                    duration: 2,
                    ease: "easeIn",
                    stiffness: 50,
                    type: "spring",
                }}
            >
                <div
                    className="bg-cover bg-no-repeat bg-top col-span-1 md:col-span-8 min-h-[990px] rounded-xl"
                    style={{ backgroundImage: "url(/images/pages/about-us/blocks/block_1.webp)" }}
                >
                    <div className="pt-[75px] xl:pt-[151px] pl-[46px] xl:pl-[92px] pr-[19px] xl:pr-[39px]">
                        <p className="font-normal !font-nanum-myeongjo text-[28px] xl:text-[40px] text-white mb-10 md:mb-20 !leading-none">Innovative concepts, unique designs, refined solutions inspired by you</p>
                        <Link
                            className="float-right"
                            href="/read-brochure"
                            prefetch={false}
                        >
                            <button className="font-medium text-lg xl:text-2xl py-1 md:py-2 px-4 md:px-8 bg-transparent hover:bg-white text-white hover:text-black border border-white hover:border-transparent rounded transition-all duration-1000">Read Brochure</button>
                        </Link>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-4 min-h-[990px]">
                    <div
                        className="bg-cover bg-no-repeat bg-top min-h-[567px] rounded-xl"
                        style={{ backgroundImage: "url(/images/pages/about-us/blocks/block_2.webp)" }}
                    >
                        <div className="pt-[41px] xl:pt-[83px] px-[26px] xl:px-[52px]">
                            <h4 className="font-normal !font-nanum-myeongjo text-[28px] xl:text-[40px] text-white uppercase leading-tight">Get our Newsletter</h4>
                            <p className="font-light !font-nanum-myeongjo text-2xl xl:text-4xl text-white my-4 md:my-8">Get a front row seat to our Oda launches and trends - directly to your inbox.</p>
                            <Link
                                href="/sign-up"
                                prefetch={false}
                            >
                                <button className="font-medium text-lg xl:text-2xl py-1 md:py-2 px-4 md:px-8 bg-transparent hover:bg-white text-white hover:text-black border border-white hover:border-transparent rounded transition-all duration-1000">Sign Up</button>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="bg-cover bg-no-repeat bg-top min-h-[415px] rounded-xl mt-1 md:mt-2"
                        style={{ backgroundImage: "url(/images/pages/about-us/blocks/block_3.webp)" }}
                    >
                        <div className="pt-[58px] xl:pt-[117px] px-[19px] xl:px-[39px]">
                            <h4 className="font-normal !font-nanum-myeongjo text-[22px] xl:text-[34px] text-white mb-8 md:mb-16">Can&apos;t Find Your Unit?</h4>
                            <Link
                                href="#"
                                prefetch={false}
                            >
                                <button className="font-medium text-lg xl:text-2xl py-1 md:py-2 px-4 md:px-8 bg-transparent hover:bg-white text-white hover:text-black border border-white hover:border-transparent rounded transition-all duration-1000">Download App</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
