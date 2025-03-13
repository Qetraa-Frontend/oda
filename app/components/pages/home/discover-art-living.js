"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function HomeDiscoverArtLiving() {
    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    const [imagesSrcs, setImagesSrcs] = useState({
        art1: "/images/pages/home/discover-art-living/art_1.webp",
        art2: "/images/pages/home/discover-art-living/art_2.webp",
        art3: "/images/pages/home/discover-art-living/art_3.webp",
        art4: "/images/pages/home/discover-art-living/art_4.webp",
        art5: "/images/pages/home/discover-art-living/art_5.webp",
        art6: "/images/pages/home/discover-art-living/art_6.webp",
        art7: "/images/pages/home/discover-art-living/art_7.webp",
    });

    return (
        <div
            className="bg-[#222] min-h-[1012px] py-[22px] md:py-11 font-nanum-myeongjo overflow-hidden"
            ref={ref}
        >
            <motion.div
                className="container mx-auto"
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
                <div className="text-center text-white mb-[23px] md:mb-[46px]">
                    <h2 className="font-bold text-[40px] md:text-[64px] uppercase !leading-snug">
                        Discover the Art of Living
                        <br className="hidden xl:block" />
                        {" "}
                        with
                        {" "}
                        <span className="font-bold text-[40px] md:text-[64px] uppercase text-secondary">oda</span>
                    </h2>
                    <h3 className="font-normal text-[28px] md:text-[40px] mt-[11px] md:mt-[22px] mb-[24px] md:mb-[48px]">Where every room is tailored to your vision and style.</h3>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-8 sm:justify-items-center xl:justify-items-start relative left-6 sm:left-0">
                    <div className="col-span-1 flex flex-col gap-4 md:gap-8 xl:relative top-36">
                        <div className="w-20 h-20 bg-secondary xl:relative left-32" />
                        <span className="font-bold text-[28px] md:text-[40px] rounded-[100px] uppercase bg-secondary text-center w-fit px-[6px] md:px-3 rotate-[17deg] xl:hover:animate-wiggleBottom cursor-default xl:relative top-8 left-8 my-4 md:my-0">MINIMAL</span>
                        <div
                            className="relative xl:top-10 h-[150px] w-[150px] md:h-[207px] md:w-[207px]"
                            onMouseEnter={() => setImagesSrcs({
                                ...imagesSrcs,
                                art1: "/images/pages/home/discover-art-living/art_1_hover.webp",
                            })}
                            onMouseLeave={() => setImagesSrcs({
                                ...imagesSrcs,
                                art1: "/images/pages/home/discover-art-living/art_1.webp",
                            })}
                        >
                            <Image
                                alt="art_1"
                                className="rounded-full"
                                layout="fill"
                                loading="lazy"
                                objectFit="cover"
                                src={imagesSrcs.art1}
                            />
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-4 md:gap-8 xl:relative -top-5">
                        <div className="w-24 h-24 bg-secondary rounded-full xl:relative top-20 left-4" />
                        <div
                            className="relative xl:top-16 rotate-[-25deg] h-[145px] w-[145px] md:h-[200px] md:w-[200px]"
                            onMouseEnter={() => setImagesSrcs({
                                ...imagesSrcs,
                                art2: "/images/pages/home/discover-art-living/art_2_hover.webp",
                            })}
                            onMouseLeave={() => setImagesSrcs({
                                ...imagesSrcs,
                                art2: "/images/pages/home/discover-art-living/art_2.webp",
                            })}
                        >
                            <Image
                                alt="art_2"
                                layout="fill"
                                loading="lazy"
                                objectFit="cover"
                                src={imagesSrcs.art2}
                            />
                        </div>
                        <div className="w-36 h-36 bg-[#6F6458] rounded-full relative xl:left-20 xl:top-12 top-4" />
                        <div className="w-20 h-20 bg-secondary relative xl:-bottom-3 top-5 md:top-0" />
                    </div>
                    <div className="col-span-1 flex flex-col gap-4 md:gap-8 relative bottom-40 lg:bottom-0 xl:top-16 xl:right-12">
                        <div className="relative h-[150px] w-[150px] md:h-[207px] md:w-[207px] hover:opacity-60 transition-all duration-1000">
                            <Image
                                alt="art_3"
                                className="rounded-full"
                                layout="fill"
                                loading="lazy"
                                objectFit="cover"
                                src={imagesSrcs.art3}
                            />
                        </div>
                        <span className="font-extrabold text-3xl md:text-5xl rounded-[200px] px-[6px] md:px-3 uppercase bg-secondary text-center w-fit xl:hover:animate-wiggle cursor-default xl:relative left-32 bottom-6">BOHO</span>
                        <div
                            className="relative xl:left-12 xl:bottom-8 h-[100px] w-[100px] md:h-[159px] md:w-[159px]"
                            onMouseEnter={() => setImagesSrcs({
                                ...imagesSrcs,
                                art4: "/images/pages/home/discover-art-living/art_4_hover.webp",
                            })}
                            onMouseLeave={() => setImagesSrcs({
                                ...imagesSrcs,
                                art4: "/images/pages/home/discover-art-living/art_4.webp",
                            })}
                        >
                            <Image
                                alt="art_4"
                                layout="fill"
                                loading="lazy"
                                objectFit="cover"
                                src={imagesSrcs.art4}
                            />
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-4 md:gap-8 relative top-6 lg:-top-40 xl:top-6 lg:left-20 xl:left-0">
                        <div
                            className="relative xl:right-20 h-[70px] w-[70px] md:h-[86px] md:w-[86px]"
                            style={{ backgroundImage: `url(${imagesSrcs.art5})` }}
                            onMouseEnter={() => setImagesSrcs({
                                ...imagesSrcs,
                                art5: "/images/pages/home/discover-art-living/art_5_hover.webp",
                            })}
                            onMouseLeave={() => setImagesSrcs({
                                ...imagesSrcs,
                                art5: "/images/pages/home/discover-art-living/art_5.webp",
                            })}
                        >
                            <Image
                                alt="art_5"
                                layout="fill"
                                loading="lazy"
                                objectFit="cover"
                                src={imagesSrcs.art5}
                            />
                        </div>
                        <div
                            className="relative xl:right-6 top-4 md:top-0 h-[85px] w-[85px] md:h-[129px] md:w-[129px] rotate-[25deg]"
                            style={{ backgroundImage: `url(${imagesSrcs.art6})` }}
                            onMouseEnter={() => setImagesSrcs({
                                ...imagesSrcs,
                                art6: "/images/pages/home/discover-art-living/art_6_hover.webp",
                            })}
                            onMouseLeave={() => setImagesSrcs({
                                ...imagesSrcs,
                                art6: "/images/pages/home/discover-art-living/art_6.webp",
                            })}
                        >
                            <Image
                                alt="art_6"
                                layout="fill"
                                loading="lazy"
                                objectFit="cover"
                                src={imagesSrcs.art6}
                            />
                        </div>
                        <div className="w-20 h-20 bg-secondary relative top-8 md:top-0 xl:top-20 xl:left-12 rotate-[-17deg]" />
                        <span className="font-bold text-[28px] md:text-[40px] rounded-[100px] uppercase bg-secondary text-center w-fit px-[6px] md:px-3 rotate-[17deg] xl:hover:animate-wiggleBottom cursor-default relative xl:top-24 right-20 sm:right-0 xl:right-20 mt-10 sm:mt-16 xl:mt-0">SCANDINAVIAN</span>
                    </div>
                    <div className="col-span-1 flex flex-col gap-4 md:gap-8 relative sm:-top-32 lg:-top-2 xl:top-16">
                        <div
                            className="relative xl:right-24 h-[150px] w-[150px] md:h-[207px] md:w-[207px]"
                            onMouseEnter={() => setImagesSrcs({
                                ...imagesSrcs,
                                art7: "/images/pages/home/discover-art-living/art_7_hover.webp",
                            })}
                            onMouseLeave={() => setImagesSrcs({
                                ...imagesSrcs,
                                art7: "/images/pages/home/discover-art-living/art_7.webp",
                            })}
                        >
                            <Image
                                alt="art_7"
                                className="rounded-full"
                                layout="fill"
                                loading="lazy"
                                objectFit="cover"
                                src={imagesSrcs.art7}
                            />
                        </div>
                        <span className="font-bold text-[28px] md:text-[40px] rounded-[100px] uppercase bg-secondary text-center w-fit px-[6px] md:px-3 rotate-[-17deg] xl:hover:animate-wiggleTop cursor-default xl:relative right-16 top-6 my-4 md:my-0">MODERN</span>
                        <div className="w-44 h-44 bg-[#6F6458] flex align-center justify-center items-center xl:relative top-20 xl:top-12 xl:left-6 lg:ml-8 xl:ml-0">
                            <div className="w-36 h-36 bg-[#222] rounded-full" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
