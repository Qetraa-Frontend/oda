"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Hero from "@/app/components/shared/hero";
import { heroSlides } from "@/app/data/home";

export default function HomeHero() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const [isTabletSize, setIsTabletSize] = useState(false);

    useEffect(
        () => {
            const mediaQuery = window.matchMedia("(max-width: 1024px)"); // eslint-disable-line

            const handleChange = (e) => setIsTabletSize(e.matches);

            mediaQuery.addEventListener(
                "change",
                handleChange,
            );

            setIsTabletSize(mediaQuery.matches);

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

            if (isTabletSize) {
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
        [isTabletSize],
    );

    return (
        <Hero
            backgroundImageSrc={`/images/pages/home/hero/hero_${activeSlideIndex + 1}.webp`}
            buttonLink="/about-us"
            buttonText="Learn More"
            buttonTopSpace="mt-12 md:mt-24"
            description="To a beautifully finished home with Oda’s expertly crafted packages."
            heroHeight="h-[600px] md:h-[1022px]"
            otherData={(
                <Swiper
                    className="hero-slider"
                    modules={[Autoplay, Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={14}
                    speed={6000}
                    autoplay={{
                        delay: 2,
                        disableOnInteraction: true,
                    }}
                    breakpoints={{
                        1024: { slidesPerView: 3 },
                        768: { slidesPerView: 2 }, // eslint-disable-line
                    }}
                    loop
                    onSlideChange={(swiperInstance) => setActiveSlideIndex(swiperInstance.realIndex)}
                >
                    {heroSlides.map(({
                        alt,
                        id,
                        imageSrc,
                    }) => (
                        <SwiperSlide key={id}>
                            <Image
                                alt={alt}
                                height={196}
                                loading="eager"
                                src={imageSrc}
                                width={277}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
            title={(
                <span
                    dangerouslySetInnerHTML={{
                        __html: heroSlides[activeSlideIndex].title.replace(
                            /\\n/g,
                            "<br />",
                        ),
                    }}
                />
            )}
        />
    );
}
