"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { buildingProjectImages } from "@/app/data/home";

export default function HomeBuildingProject() {
    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    return (
        <div
            className="container mx-auto pt-[28px] md:pt-[56px]"
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
                <h2 className="font-semibold text-[40px] md:text-[64px] uppercase text-center !leading-relaxed">
                    Building a Legacy, One
                    <br className="hidden lg:block" />
                    {" "}
                    Project at a Time
                </h2>
                <Swiper
                    className="relative top-[72px] md:top-36 z-20"
                    effect="fade"
                    modules={[Autoplay, EffectFade]}
                    slidesPerView={1}
                    spaceBetween={30}
                    speed={3000}
                    autoplay={{
                        delay: 2,
                        disableOnInteraction: true,
                    }}
                    loop
                >
                    {buildingProjectImages.map(({
                        alt,
                        id,
                        imageSrc,
                        title,
                    }) => (
                        <SwiperSlide
                            className="min-h-[300px] md:min-h-[560px]"
                            key={id}
                            style={{
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                            }}
                        >
                            <Image
                                alt={alt}
                                className="rounded-lg"
                                layout="fill"
                                loading="lazy"
                                objectFit="cover"
                                src={imageSrc}
                            />
                            <div className="absolute inset-0 w-full h-full bg-black bg-opacity-40 rounded-lg" />
                            <div className="flex items-center justify-center absolute w-full h-full z-30">
                                <h4 className="text-white font-bold text-3xl md:text-5xl text-center font-nanum-myeongjo">{title}</h4>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </div>
    );
}
