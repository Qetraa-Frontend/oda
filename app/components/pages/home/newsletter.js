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
                animate={isInView && { y: 0 }}
                className="flex relative top-16 md:top-32"
                initial={{ y: "100vh" }}
                transition={{
                    damping: 10,
                    duration: 2,
                    ease: "easeInOut",
                    stiffness: 50,
                    type: "spring",
                }}
            >
                <div className="w-1/2 hidden md:block">
                    <Image
                        alt="news_letter"
                        className="h-full object-cover xl:object-fill"
                        height={536}
                        loading="lazy"
                        src="/images/pages/home/news_letter.webp"
                        width={633}
                    />
                </div>
                <div className="w-full md:w-1/2 bg-[#d9d9d9] !font-nanum-myeongjo flex flex-col justify-center items-center gap-4 md:gap-8 p-5 md:p-10">
                    <h4 className="font-normal text-3xl md:text-[40px] uppercase">Get our Newsletter</h4>
                    <p className="font-light text-2xl md:text-4xl px-1 xl:px-12">Get afront row seat to our Oda launches and trends - directly to your inbox . </p>
                    <Link
                        className="text-xl md:text-3xl font-light"
                        href="/newsletter"
                        prefetch={false}
                    >
                        <button className="bg-transparent hover:bg-black text-black hover:text-white py-1 md:py-2 px-4 md:px-8 border border-black hover:border-transparent rounded transition-all duration-1000">Sign Up</button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
