"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HomeSuccessfulStories() {
    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    const slides = [
        {
            alt: "story_1",
            id: 1,
            imageSrc: "/images/pages/home/successful-stories/story_1.png",
            title: "Marakez | District 1",
        },
        {
            alt: "story_2",
            id: 2,
            imageSrc: "/images/pages/home/successful-stories/story_2.png",
            title: "Marakez | District 2",
        },
        {
            alt: "story_3",
            id: 3,
            imageSrc: "/images/pages/home/successful-stories/story_3.png",
            title: "Marakez | District 3",
        },
        {
            alt: "story_4",
            id: 4,
            imageSrc: "/images/pages/home/successful-stories/story_4.png",
            title: "Marakez | District 4",
        },
        {
            alt: "story_5",
            id: 5,
            imageSrc: "/images/pages/home/successful-stories/story_5.png",
            title: "Marakez | District 5",
        },
        {
            alt: "story_6",
            id: 6,
            imageSrc: "/images/pages/home/successful-stories/story_6.png",
            title: "Marakez | District 6",
        },
    ];

    return (
        <div>
            <div className="mb-24">
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
                    {slides.map(({
                        alt,
                        id,
                        imageSrc,
                        title,
                    }) => (
                        <SwiperSlide key={id}>
                            <div className="rounded-lg border-white border-[1px] p-4 max:w-[395] h-[431px]">
                                <div className="group overflow-hidden rounded-lg">
                                    <Image
                                        alt={alt}
                                        className="rounded-lg object-cover w-full h-[317px] transition-transform duration-500 group-hover:scale-150"
                                        height={317}
                                        src={imageSrc}
                                        width={347}
                                    />
                                </div>
                                <h5 className="font-normal text-base md:text-xl text-white mt-4 !font-nanum-myeongjo">{title}</h5>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </div>
    );
}
