"use client";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HomeHero() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const [isMobileSize, setIsMobileSize] = useState(false);

    useEffect(
        () => {
            const mediaQuery = window.matchMedia("(max-width: 768px)"); // eslint-disable-line

            const handleChange = (e) => setIsMobileSize(e.matches);

            mediaQuery.addEventListener(
                "change",
                handleChange,
            );

            setIsMobileSize(mediaQuery.matches);

            return () => mediaQuery.removeEventListener(
                "change",
                handleChange,
            );
        },
        [],
    );

    useEffect(
        () => {
            let interval;

            if (isMobileSize) {
                interval = setInterval(
                    () => {
                        setActiveSlideIndex((prevIndex) => (prevIndex + 1) % 4);
                    },
                    3000,
                );
            } else {
                setActiveSlideIndex(0);

                if (interval) clearInterval(interval);
            }

            return () => clearInterval(interval);
        },
        [isMobileSize],
    );

    return (
        <div
            className="relative bg-cover bg-no-repeat bg-top h-[600px] md:h-[1024px] w-[100vw] transition-all"
            style={{ backgroundImage: `url(/images/pages/home/hero_${activeSlideIndex + 1}.png)` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="relative z-40 container px-4 md:px-6 flex flex-wrap justify-between items-center h-full w-full mx-auto">
                <div className="md:w-1/2">
                    <h1 className="capitalize font-medium text-6xl md:text-8xl text-white">
                        Simplify
                        <br />
                        {" "}
                        Your
                        <br />
                        {" "}
                        Journey
                    </h1>
                    <p className="font-medium text-lg md:text-2xl text-white mt-6 max-w-[468px]">To a beautifully finished home with Oda’s expertly crafted packages.</p>
                    <Link
                        className="text-lg md:text-2xl font-medium relative top-12 md:top-28"
                        href="/about-us"
                        prefetch={false}
                    >
                        <button className="bg-transparent hover:bg-white text-white hover:text-black py-2 px-8 border border-white hover:border-transparent rounded">Learn More</button>
                    </Link>
                </div>
                <div className="md:w-1/2 hidden md:block">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        pagination={{ clickable: true }}
                        slidesPerView={3}
                        spaceBetween={14}
                        speed={3000}
                        autoplay={{
                            delay: 2,
                            disableOnInteraction: true,
                        }}
                        loop
                        onSlideChange={(swiperInstance) => setActiveSlideIndex(swiperInstance.realIndex)}
                    >
                        <SwiperSlide>
                            <Image
                                alt="slide_1"
                                height={196}
                                src="/images/pages/home/hero_1.png"
                                width={277}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                alt="slide_2"
                                height={196}
                                src="/images/pages/home/hero_2.png"
                                width={277}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                alt="slide_3"
                                height={196}
                                src="/images/pages/home/hero_3.png"
                                width={277}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                alt="slide_4"
                                height={196}
                                src="/images/pages/home/hero_4.png"
                                width={277}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
