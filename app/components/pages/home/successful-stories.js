"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { stories } from "@/app/data/home";

export default function HomeSuccessfulStories() {
    const [showDescriptions, setShowDescriptions] = useState({
        description1: false,
        description2: false,
        description3: false,
        description4: false,
    });

    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    return (
        <div ref={ref}>
            <motion.div
                animate={isInView && {
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
                <h2 className="font-semibold text-[41px] md:text-[65px] text-white !leading-normal mb-12 md:mb-24">
                    Successful
                    <br className="hidden xl:block" />
                    {" "}
                    Stories
                </h2>
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
                    {stories.map(({
                        alt,
                        description,
                        id,
                        imageSrc,
                        title,
                    }) => (
                        <SwiperSlide key={id}>
                            <div
                                className="rounded-lg border-white border-[1px] hover:border-primary hover:border-[2px] p-4 max:w-[395] h-[431px] overflow-hidden"
                                onMouseEnter={() => setShowDescriptions((prevState) => ({
                                    ...prevState,
                                    [`description${id}`]: true,
                                }))}
                                onMouseLeave={() => setShowDescriptions((prevState) => ({
                                    ...prevState,
                                    [`description${id}`]: false,
                                }))}
                            >
                                <Image
                                    alt={alt}
                                    className={`rounded-lg object-cover w-full ${showDescriptions?.[`description${id}`] ? "h-[68%] sm:h-[55%]" : "h-[317px]"}`}
                                    height={317}
                                    loading="lazy"
                                    src={imageSrc}
                                    width={347}
                                />
                                <div className={`${showDescriptions?.[`description${id}`] ? "h-[32%] sm:h-[45%]" : "block"}`}>
                                    <div className={`${showDescriptions?.[`description${id}`] ? "flex justify-between mt-[14px] xl:mt-7 items-center" : "flex justify-between items-center place-items-center h-[80px]"}`}>
                                        <h5 className="font-[700] text-base md:text-xl text-white !font-nanum-myeongjo">{title}</h5>
                                        <Link
                                            className="rounded-full bg-black p-2 h-10 w-10"
                                            href="/successfull-stories"
                                            prefetch={false}
                                        >
                                            <ArrowRight color="white" />
                                        </Link>
                                    </div>
                                    <p className={`font-normal text-sm md:text-lg text-white mt-2 md:mt-4 transform ${showDescriptions?.[`description${id}`] ? "translate-y-0" : "translate-y-[200%]"} transition-all duration-500`}>{description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </div>
    );
}
