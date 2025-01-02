"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { testimonials } from "@/app/data/home";

export default function HomeTestimonials() {
    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    return (
        <div className="pt-28 md:pt-60">
            <div className="mb-12 md:mb-24 text-center">
                <h2 className="font-semibold text-3xl md:text-5xl text-white text-center mb-3 md:mb-6">Testimonials</h2>
                <span className="font-normal text-lg md:text-2xl text-white">What they say about us</span>
            </div>
            <motion.div
                animate={isInView && { opacity: 1 }}
                initial={{ opacity: 0 }}
                ref={ref}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                }}
            >
                <Swiper
                    className="testimonials-slider"
                    modules={[Navigation]}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    spaceBetween={20}
                    navigation
                >
                    {testimonials.map(({
                        alt,
                        description,
                        id,
                        imageSrc,
                        name,
                        title,
                    }) => (
                        <SwiperSlide key={id}>
                            <div className="rounded-xl border-white border-[1px] p-4 max-w-[898px] h-[344px] text-center mx-auto">
                                <div>
                                    <Image
                                        alt={alt}
                                        className="mx-auto w-[100px] h-[100px] rounded-full"
                                        height={100}
                                        src={imageSrc}
                                        width={100}
                                    />
                                    <h5 className="font-medium text-xl md:text-3xl text-white my-2 md:my-4">{name}</h5>
                                    <span className="font-medium text-lg md:text-2xl text-gray-400">{title}</span>
                                </div>
                                <div className="mt-5 md:mt-10">
                                    <p className="font-normal text-lg md:text-2xl text-white">{description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </div>
    );
}
