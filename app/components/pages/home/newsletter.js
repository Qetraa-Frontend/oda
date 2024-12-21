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
            className="container px-4 md:px-6 mx-auto max-h-[536px]"
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
                        src="/images/pages/home/news_letter.png"
                        width={633}
                    />
                </div>
                <div className="w-full md:w-1/2 bg-[#d9d9d9] !font-nanum-myeongjo flex flex-col justify-center items-center p-5 md:p-10">
                    <h4 className="font-medium text-3xl md:text-[40px] uppercase mb-4 md:mb-8 lea">Get our Newsletter</h4>
                    <p className="font-normal text-2xl md:text-4xl px-1 xl:px-12">Get afront row seat to our Oda launches and trends - directly to your inbox . </p>
                    <Link
                        className="text-xl md:text-3xl font-medium relative top-4 md:top-8"
                        href="/newsletter"
                        prefetch={false}
                    >
                        <button className="bg-transparent hover:bg-black text-black hover:text-white py-2 px-8 border border-black hover:border-transparent rounded transition-all duration-1000 mb-4 xl:mb-0">Sign Up</button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
