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
                className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-2 relative top-16 md:top-32"
                initial={{ y: "100vh" }}
                transition={{
                    damping: 10,
                    duration: 2,
                    ease: "easeInOut",
                    stiffness: 50,
                    type: "spring",
                }}
            >
                <div
                    className="bg-cover bg-no-repeat bg-top col-span-1 md:col-span-8 min-h-[990px] rounded-xl"
                    style={{ backgroundImage: "url(/images/pages/about-us/blocks/block_1.webp)" }}
                >
                    <div className="text-white pt-16 xl:pt-36 pl-12 xl:pl-24 pr-5 xl:pr-10 !font-nanum-myeongjo">
                        <p className="font-light text-2xl xl:text-4xl">Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convalli`s vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.</p>
                        <Link
                            className="text-lg xl:text-2xl font-light mt-10 md:mt-20 inline-block float-right"
                            href="/read-brochure"
                            prefetch={false}
                        >
                            <button className="bg-transparent hover:bg-white text-white hover:text-black py-1 md:py-2 px-4 md:px-8 border border-white hover:border-transparent rounded transition-all duration-1000">Read Brochure</button>
                        </Link>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-4 min-h-[990px]">
                    <div
                        className="bg-cover bg-no-repeat bg-top min-h-[567px] rounded-xl"
                        style={{ backgroundImage: "url(/images/pages/about-us/blocks/block_2.webp)" }}
                    >
                        <div className="text-white pt-10 xl:pt-20 px-4 xl:px-12 !font-nanum-myeongjo">
                            <h4 className="font-normal text-3xl xl:text-[40px] uppercase leading-tight">Get our Newsletter</h4>
                            <p className="font-light text-2xl xl:text-4xl mt-4 md:mt-8">Get a front row seat to our Oda launches and trends - directly to your inbox.</p>
                            <Link
                                className="text-lg xl:text-2xl font-light mt-4 md:mt-8 inline-block"
                                href="/sign-up"
                                prefetch={false}
                            >
                                <button className="bg-transparent hover:bg-white text-white hover:text-black py-1 md:py-2 px-4 md:px-8 border border-white hover:border-transparent rounded transition-all duration-1000">Sign Up</button>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="bg-cover bg-no-repeat bg-top min-h-[415px] rounded-xl mt-1 md:mt-2"
                        style={{ backgroundImage: "url(/images/pages/about-us/blocks/block_3.webp)" }}
                    >
                        <div className="text-white pt-10 xl:pt-20 px-4 xl:px-12 !font-nanum-myeongjo">
                            <h4 className="font-normal text-3xl xl:text-[40px] leading-tight">Can&apos;t Find Your Unit?</h4>
                            <Link
                                className="text-lg xl:text-2xl font-light mt-8 md:mt-16 inline-block"
                                href="#"
                                prefetch={false}
                            >
                                <button className="bg-transparent hover:bg-white text-white hover:text-black py-1 md:py-2 px-4 md:px-8 border border-white hover:border-transparent rounded transition-all duration-1000">Download App</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
