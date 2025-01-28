"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function AboutUsIntro() {
    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    return (
        <div
            className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[31px] md:gap-[62px] pt-20 md:pt-40 pb-[72px] md:pb-36 overflow-hidden"
            ref={ref}
        >
            <motion.div
                animate={isInView && { x: 0 }}
                className="col-span-1 lg:col-span-6"
                initial={{ x: "-100vw" }}
                transition={{
                    damping: 10,
                    duration: 2,
                    ease: "easeIn",
                    stiffness: 40,
                    type: "spring",
                }}
            >
                <Image
                    alt="intro"
                    height={820}
                    loading="lazy"
                    src="/images/pages/about-us/intro.webp"
                    width={650}
                />
            </motion.div>
            <motion.div
                animate={isInView && { x: 0 }}
                className="col-span-1 lg:col-span-6"
                initial={{ x: "100vw" }}
                transition={{
                    damping: 10,
                    duration: 2,
                    ease: "easeIn",
                    stiffness: 40,
                    type: "spring",
                }}
            >
                <p className="font-normal text-xl md:text-3xl">Established in 2014, Oda is Home to universal design and build finishing kits where infinite elevating menu follow you wherever you desire, Oda is the leading tech enabled platform, delivering an end to end, pre-designed packages, from foundation decoration and addons menu, up to refined facelift services.</p>
                <p className="font-normal text-xl md:text-3xl mt-10">ODA is the beginning of incomparable experiences, deeply drawing from streamlined big data and subject matter associates. Founded in the state of Delaware USA, headquartered in Egypt with a liaison office in Riyadh, KSA, we have built strong regional partnerships to efficiently meet our clients’ needs across Mena and GCC region. Oda has successfully delivered standout projects across diverse industries, committed to providing top-tier quality and efficiency in greenfield projects, renovations, and property transformations.</p>
            </motion.div>
        </div>
    );
}
