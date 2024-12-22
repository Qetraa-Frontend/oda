"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Hero from "@/app/components/shared/hero";

export default function HomeHero() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const [isMobileSize, setIsMobileSize] = useState(false);

    const heroSlides = [
        {
            alt: "slide_1",
            id: 1,
            imageSrc: "/images/pages/home/hero/hero_1.png",
        },
        {
            alt: "slide_2",
            id: 2,
            imageSrc: "/images/pages/home/hero/hero_2.png",
        },
        {
            alt: "slide_3",
            id: 3,
            imageSrc: "/images/pages/home/hero/hero_3.png",
        },
        {
            alt: "slide_4",
            id: 4,
            imageSrc: "/images/pages/home/hero/hero_4.png",
        },
    ];

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
        <Hero
            backgroundImageSrc={`/images/pages/home/hero/hero_${activeSlideIndex + 1}.png`}
            buttonLink="/about-us"
            buttonText="Learn More"
            description="To a beautifully finished home with Oda’s expertly crafted packages."
            otherData={(
                <Swiper
                    className="hero-slider"
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
                    {heroSlides.map(({
                        alt,
                        id,
                        imageSrc,
                    }) => (
                        <SwiperSlide key={id}>
                            <Image
                                alt={alt}
                                height={196}
                                src={imageSrc}
                                width={277}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
            title={(
                <>
                    Simplify
                    <br />
                    {" "}
                    Your
                    <br />
                    {" "}
                    Journey
                </>
            )}
        />
    );
}
