"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function WhyOdaBuildingProject() {
    const videoRef = useRef(null);

    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    useEffect(
        () => {
            const video = videoRef.current;

            if (video) {
                const playVideo = async () => await video.play(); // eslint-disable-line

                playVideo();
            }
        },
        [],
    );

    return (
        <div
            className="container mx-auto py-12 md:py-24"
            ref={ref}
        >
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
                <h2 className="font-semibold text-[32px] md:text-[56px] uppercase text-center !leading-normal">
                    Building a Legacy, One
                    <br className="hidden lg:block" />
                    {" "}
                    Project at a Time
                </h2>
                {/* <video
                    className="w-full max-w-full xl:min-h-[563px]"
                    height="563"
                    ref={videoRef}
                    width="1061"
                    autoPlay
                    loop
                    muted
                >
                    <source
                        src="/videos/why_oda.mp4"
                        type="video/mp4"
                    />
                    <track
                        kind="subtitles"
                        label="English"
                        src="/videos/why_oda.mp4"
                        srcLang="en"
                    />
                    Your browser does not support the video tag.
                </video> */}
            </motion.div>
        </div>
    );
}
