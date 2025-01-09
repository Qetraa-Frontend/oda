"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { buildingProjectImages } from "@/app/data/success-stories";

export default function HomeBuildingProject() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(
        () => {
            const interval = setInterval(
                () => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % buildingProjectImages.length);
                },
                3000,
            );

            return () => clearInterval(interval);
        },
        [],
    );

    return (
        <div className="pt-[54px] md:pt-[108px] pb-20 md:pb-40">
            <div className="container px-4 xl:px-0 mx-auto">
                <h2 className="font-semibold text-[40px] md:text-[64px] uppercase text-center !leading-relaxed">
                    Building a Legacy, One
                    <br className="hidden lg:block" />
                    {" "}
                    Project at a Time
                </h2>
                <p className="font-medium text-lg md:text-2xl text-center my-[33px] md:my-[67px]">Whether you&apos;re an architect, designer, or simply someone with an interest in the built environment, our latest projects are sure to inspire and challenge you.</p>
            </div>
            <div className="relative min-h-[300px] md:min-h-[560px] flex items-center justify-center transition-all duration-500 z-20 overflow-hidden">
                <Image
                    alt={`building_project_${currentIndex}`}
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    src={buildingProjectImages[currentIndex].imageSrc}
                />
                <div className="absolute inset-0 w-full h-full bg-black bg-opacity-40" />
                <h4 className="text-white font-[700] text-3xl md:text-5xl text-center font-nanum-myeongjo relative z-10">{buildingProjectImages[currentIndex].title}</h4>
            </div>
        </div>
    );
}
