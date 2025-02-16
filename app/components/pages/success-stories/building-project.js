"use client";

import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { buildingProjectImages } from "@/app/data/success-stories";

export default function HomeBuildingProject() {
    return (
        <div className="pt-[54px] md:pt-[108px] pb-20 md:pb-40">
            <div className="container mx-auto">
                <h2 className="font-semibold text-[40px] md:text-[64px] uppercase text-center !leading-relaxed">
                    Building a Legacy, One
                    <br className="hidden lg:block" />
                    {" "}
                    Project at a Time
                </h2>
                <p className="font-medium text-lg md:text-2xl text-center my-[33px] md:my-[67px]">Whether you&apos;re an architect, designer, or simply someone with an interest in the built environment, our latest projects are sure to inspire and challenge you.</p>
            </div>
            <Swiper
                className="relative z-20"
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
        </div>
    );
}
