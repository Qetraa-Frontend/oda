"use client";

import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { slideshowImages } from "@/app/data/news";

export default function NewsSlideshow() {
    return (
        <div className="pt-[55px] md:pt-[110px]">
            <div>
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
                    {slideshowImages.map(({
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
                            <div className="absolute inset-0 w-full h-full bg-black bg-opacity-40" />
                            <div className="flex items-center justify-center absolute w-full h-full z-30">
                                <h4 className="text-white font-bold text-3xl md:text-5xl text-center font-nanum-myeongjo">{title}</h4>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
