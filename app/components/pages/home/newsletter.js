"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function HomeNewsletter() {
    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    return (
        <div
            className="container px-4 xl:px-0 mx-auto max-h-[536px]"
            ref={ref}
        >
            <motion.div
                className="flex relative top-[90px] md:top-[180px] max-h-[536px] z-40"
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
                <div className="w-1/2 hidden md:block">
                    <Image
                        alt="news_letter"
                        className="h-full object-cover xl:object-fill w-full"
                        height={536}
                        loading="lazy"
                        src="/images/pages/home/news_letter.webp"
                        width={633}
                    />
                </div>
                <div className="w-full md:w-1/2 bg-[#d9d9d9] flex flex-col justify-center items-center gap-4 md:gap-8 pt-[44px] md:pt-[88px] pb-[49px] md:pb-[98px] pr-[35px] md:pr-[71px] pl-[34px] md:pl-[69px] rounded-lg md:rounded-tl-[0px] md:rounded-bl-[0px] md:rounded-tr-xl md:rounded-br-xl">
                    <h4 className="font-[700] text-3xl md:text-[40px] !font-nanum-myeongjo uppercase">Get our Newsletter</h4>
                    <p className="font-[400] text-2xl md:text-4xl !font-nanum-myeongjo px-1 xl:px-12">Get afront row seat to our Oda launches and trends - directly to your inbox . </p>
                    <Link
                        className="text-xl md:text-3xl font-light"
                        href="/newsletter"
                        prefetch={false}
                    >
                        <button className="bg-transparent hover:bg-black text-black hover:text-white py-1 md:py-2 px-4 md:px-8 border border-black hover:border-transparent rounded-lg transition-all duration-1000">Sign Up</button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
