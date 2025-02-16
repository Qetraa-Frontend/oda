"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { events, eventsSlider } from "@/app/data/news";
import { Button } from "@/app/ui/button";

export default function NewsEvents() {
    const ref1 = useRef(null);

    const isInView1 = useInView(
        ref1,
        { once: true },
    );

    const ref2 = useRef(null);

    const isInView2 = useInView(
        ref1,
        { once: true },
    );

    return (
        <div>
            <Swiper
                className="events-slider bottom-[40px] md:bottom-[80px] h-[155px] md:h-[215px] !z-30 !ml-4 sm:!ml-8 md:!ml-16"
                modules={[Autoplay]}
                slidesPerView="auto"
                spaceBetween={16}
                speed={5000}
                autoplay={{
                    delay: 2,
                    disableOnInteraction: true,
                }}
                loop
            >
                {eventsSlider.map(({
                    buttonLink,
                    buttonText,
                    description,
                    id,
                }) => {
                    const [firstWord, ...rest] = description.split(" ");

                    return (
                        <SwiperSlide
                            className="shadow-lg max-w-[608px] !h-[150px] md:!h-[211px] bg-white pl-4 md:pl-8 pr-2 md:pr-4 py-[12px] md:py-[25px]"
                            key={id}
                        >
                            <div className="flex items-center gap-7 md:gap-14">
                                <Image
                                    alt="logo"
                                    height={106}
                                    loading="lazy"
                                    src="/images/logo_4.webp"
                                    width={113}
                                />
                                <div>
                                    <p className="font-normal text-lg md:text-2xl">
                                        <span className="text-primary font-bold">{firstWord}</span>
                                        {" "}
                                        {rest.join(" ")}
                                    </p>
                                    <Link
                                        className="mt-3 md:mt-6 block"
                                        href={buttonLink}
                                        prefetch={false}
                                    >
                                        <Button className="font-medium text-xs md:text-base text-black hover:text-primary bg-transparent border-r-[.5px] border-[1px] hover:border-primary transition-all duration-1000 rounded-lg py-1 md:py-2 px-4 md:px-8 hover:animate-heartBeat">{buttonText}</Button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div
                className="container mx-auto mb-[74px] md:mb-[148px] mt-[22px] md:mt-[45px]"
                ref={ref1}
            >
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
                    animate={isInView1 && {
                        opacity: 1,
                        y: 0,
                    }}
                    initial={{
                        opacity: 0,
                        y: "100vh",
                    }}
                    transition={{
                        damping: 10,
                        duration: 2,
                        ease: "easeIn",
                        stiffness: 33,
                        type: "spring",
                    }}
                >
                    {events.top.map(({
                        alt,
                        date,
                        description,
                        id,
                        imageSrc,
                    }) => (
                        <div
                            className="col-span-1 md:col-span-6 rounded-lg border-black border-[1px] hover:border-primary p-4 max:w-[608px] h-fit"
                            key={id}
                        >
                            <Image
                                alt={alt}
                                className="rounded-lg object-cover w-full h-[317px]"
                                height={317}
                                loading="lazy"
                                src={imageSrc}
                                width={560}
                            />
                            <div>
                                <div className="mt-3 md:mt-6">
                                    <time className="font-bold text-base md:text-xl text-[#222] opacity-40 font-nanum-myeongjo">{date.split("-").reverse().join(".")}</time>
                                    <p className="font-normal text-base md:text-xl text-black mt-3 md:mt-6">{description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
            <div
                className="pt-[58px] md:pt-[116px] pb-[69px] md:pb-[138px] bg-[#222]"
                ref={ref2}
            >
                <motion.div
                    className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
                    animate={isInView2 && {
                        opacity: 1,
                        y: 0,
                    }}
                    initial={{
                        opacity: 0,
                        y: "100vh",
                    }}
                    transition={{
                        damping: 10,
                        duration: 2,
                        ease: "easeIn",
                        stiffness: 33,
                        type: "spring",
                    }}
                >
                    {events.bottom.map(({
                        alt,
                        date,
                        description,
                        id,
                        imageSrc,
                    }) => (
                        <div
                            className="col-span-1 md:col-span-6 rounded-lg border-white border-[1px] hover:border-primary p-4 max:w-[608px] h-fit"
                            key={id}
                        >
                            <Image
                                alt={alt}
                                className="rounded-lg object-cover w-full h-[317px]"
                                height={317}
                                loading="lazy"
                                src={imageSrc}
                                width={560}
                            />
                            <div>
                                <div className="mt-3 md:mt-6">
                                    <time className="font-bold text-base md:text-xl text-white font-nanum-myeongjo">{date.split("-").reverse().join(".")}</time>
                                    <p className="font-normal text-base md:text-xl text-white mt-3 md:mt-6">{description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
