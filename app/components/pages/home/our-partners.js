"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { partners } from "@/app/data/home";

export default function HomeOurPartners() {
    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    return (
        <div className="pb-[120px] md:pb-60">
            <h2 className="font-semibold text-[41px] md:text-[65px] text-white !leading-normal mb-12 md:mb-24">
                Our
                <br className="hidden xl:block" />
                {" "}
                Partners
            </h2>
            <motion.div
                animate={isInView && { opacity: 1 }}
                initial={{ opacity: 0 }}
                ref={ref}
                transition={{
                    damping: 10,
                    duration: 2,
                    ease: "easeIn",
                    stiffness: 40,
                    type: "spring",
                }}
            >
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={14}
                    speed={3000}
                    autoplay={{
                        delay: 2,
                        disableOnInteraction: true,
                    }}
                    breakpoints={{
                        1024: { slidesPerView: 3 },
                        480: { slidesPerView: 2 }, // eslint-disable-line
                        768: { slidesPerView: 2 },
                    }}
                    loop
                >
                    {partners.map(({
                        alt,
                        id,
                        imageSrc,
                    }) => (
                        <SwiperSlide
                            className="bg-white !h-[235px] px-1 py-1"
                            key={id}
                        >
                            <Image
                                alt={alt}
                                className="w-full h-full object-contain px-1"
                                height={235}
                                loading="lazy"
                                src={imageSrc}
                                width={400}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </div>
    );
}
