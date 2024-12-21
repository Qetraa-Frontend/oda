"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HomeSuccessfulStories() {
    const slides = [
        {
            id: 1,
            imageUrl: "/images/pages/home/successful-stories/story_1.png",
            title: "MARAKEZ | DISTRICT 1",
        },
        {
            id: 2,
            imageUrl: "/images/pages/home/successful-stories/story_2.png",
            title: "MARAKEZ | DISTRICT 2",
        },
        {
            id: 3,
            imageUrl: "/images/pages/home/successful-stories/story_3.png",
            title: "MARAKEZ | DISTRICT 3",
        },
        {
            id: 4,
            imageUrl: "/images/pages/home/successful-stories/story_4.png",
            title: "MARAKEZ | DISTRICT 4",
        },
        {
            id: 5,
            imageUrl: "/images/pages/home/successful-stories/story_5.png",
            title: "MARAKEZ | DISTRICT 5",
        },
        {
            id: 6,
            imageUrl: "/images/pages/home/successful-stories/story_6.png",
            title: "MARAKEZ | DISTRICT 6",
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
            <Swiper
                className="stories-slider"
                modules={[Navigation]}
                pagination={{ clickable: true }}
                slidesPerView={3}
                spaceBetween={20}
                navigation
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="rounded-lg border-white border-[1px] p-4 w-[395] h-[431px]">
                            <img
                                alt={slide.title}
                                className="rounded-lg object-cover w-full h-[317px]"
                                src={slide.imageUrl}
                            />
                            <div className="text-white mt-4">
                                <h3>{slide.title}</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
