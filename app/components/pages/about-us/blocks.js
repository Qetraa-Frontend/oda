"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/app/ui/button";

export default function AboutUsBlocks() {
    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    return (
        <div
            className="container mx-auto min-h-[990px]"
            ref={ref}
        >
            <motion.div
                className="grid grid-cols-1 lg:grid-cols-12 gap-2 md:gap-4 relative top-[90px] md:top-[180px]"
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
                <div className="relative col-span-1 lg:col-span-8 min-h-[567px] lg:min-h-[990px] rounded-lg z-10 overflow-hidden">
                    <Image
                        alt="block_1"
                        layout="fill"
                        loading="lazy"
                        objectFit="cover"
                        src="/images/pages/about-us/blocks/block_1.webp"
                    />
                    <div className="absolute inset-0 pt-[75px] xl:pt-[151px] pl-[46px] xl:pl-[92px] pr-[19px] xl:pr-[39px]">
                        <h4 className="font-bold font-nanum-myeongjo text-[28px] xl:text-[40px] text-white mb-10 md:mb-20 !leading-none">Innovative concepts, unique designs, refined solutions inspired by you.</h4>
                        <Link
                            className="float-right"
                            href="/why-oda"
                            prefetch={false}
                        >
                            <Button className="font-medium text-lg md:text-2xl text-white hover:text-primary bg-transparent border-r-[.5px] border-[1px] hover:border-primary transition-all duration-1000 rounded-lg py-1 md:py-2 px-4 md:px-8 h-12 hover:animate-heartBeat">Discover Why Oda</Button>
                        </Link>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-4 min-h-[990px]">
                    <div className="relative min-h-[567px] rounded-lg overflow-hidden">
                        <Image
                            alt="block_2"
                            layout="fill"
                            loading="lazy"
                            objectFit="cover"
                            src="/images/pages/about-us/blocks/block_2.webp"
                        />
                        <div className="absolute inset-0 pt-[41px] xl:pt-[83px] px-[26px] xl:px-[52px]">
                            <h4 className="font-bold font-nanum-myeongjo text-[28px] xl:text-[40px] text-white uppercase leading-tight">Contact Us</h4>
                            <p className="font-normal font-nanum-myeongjo text-2xl xl:text-4xl text-white my-4 md:my-8">Have any questions or need more information? We&apos;re here to help.</p>
                            <Link
                                href="/contact-us"
                                prefetch={false}
                            >
                                <Button className="font-medium text-lg md:text-2xl text-white hover:text-primary bg-transparent border-r-[.5px] border-[1px] hover:border-primary transition-all duration-1000 rounded-lg py-1 md:py-2 px-4 md:px-8 h-12 hover:animate-heartBeat">Get in Touch</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative min-h-[415px] rounded-lg mt-1 md:mt-2 z-10 overflow-hidden">
                        <Image
                            alt="block_3"
                            layout="fill"
                            loading="lazy"
                            objectFit="cover"
                            src="/images/pages/about-us/blocks/block_3.webp"
                        />
                        <div className="absolute inset-0 pt-[58px] xl:pt-[117px] px-[19px] xl:px-[39px]">
                            <h4 className="font-bold font-nanum-myeongjo text-[22px] xl:text-[34px] text-white mb-8 md:mb-16">Explore our services and offerings in detail.</h4>
                            <Link
                                href="https://drive.google.com/file/d/1ucl5zW5MIvSMg7byJss_-ZRV-441Dzjf/view"
                                prefetch={false}
                                target="_blank"
                            >
                                <Button className="font-medium text-lg md:text-2xl text-white hover:text-primary bg-transparent border-r-[.5px] border-[1px] hover:border-primary transition-all duration-1000 rounded-lg py-1 md:py-2 px-4 md:px-8 h-12 hover:animate-heartBeat">Read Brochure</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
