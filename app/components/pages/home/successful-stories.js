"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { stories } from "@/app/data/home";

export default function HomeSuccessfulStories() {
    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    return (
        <div>
            <div className="mb-12 md:mb-24">
                <h2 className="font-semibold text-4xl md:text-6xl text-white !leading-normal">
                    Successful
                    <br className="hidden xl:block" />
                    {" "}
                    Stories
                </h2>
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
                    className="stories-slider"
                    modules={[Navigation]}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    breakpoints={{
                        1024: { slidesPerView: 3 },
                        480: { slidesPerView: 1 }, // eslint-disable-line
                        768: { slidesPerView: 2 },
                    }}
                    navigation
                >
                    {stories.map(({
                        alt,
                        id,
                        imageSrc,
                        title,
                    }) => (
                        <SwiperSlide key={id}>
                            <div className="rounded-xl border-white border-[1px] p-4 max:w-[395] h-[431px]">
                                <div className="group overflow-hidden rounded-xl">
                                    <Image
                                        alt={alt}
                                        className="rounded-xl object-cover w-full h-[317px] transition-transform duration-1000 group-hover:scale-150"
                                        height={317}
                                        loading="lazy"
                                        src={imageSrc}
                                        width={347}
                                    />
                                </div>
                                <h5 className="font-normal text-base md:text-xl text-white mt-2 md:mt-4 !font-nanum-myeongjo">{title}</h5>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </div>
    );
}
