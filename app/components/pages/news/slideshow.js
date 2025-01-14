"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { slideshowImages } from "@/app/data/news";

export default function NewsSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(
        () => {
            const interval = setInterval(
                () => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
                },
                3000,
            );

            return () => clearInterval(interval);
        },
        [],
    );

    return (
        <div className="pt-[55px] md:pt-[110px]">
            <div>
                <div className="min-h-[300px] md:min-h-[560px] flex items-center justify-center relative transition-all duration-500 z-20 overflow-hidden">
                    <Image
                        alt={slideshowImages[currentIndex].alt}
                        layout="fill"
                        loading="lazy"
                        objectFit="cover"
                        src={slideshowImages[currentIndex].imageSrc}
                    />
                    <div className="absolute inset-0 w-full h-full bg-black bg-opacity-40" />
                    <h4 className="text-white font-[700] text-3xl md:text-5xl text-center font-nanum-myeongjo relative z-10">{slideshowImages[currentIndex].title}</h4>
                </div>
            </div>
        </div>
    );
}
