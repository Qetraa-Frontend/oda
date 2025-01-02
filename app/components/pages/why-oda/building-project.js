"use client";

import { useEffect, useRef } from "react";

export default function WhyOdaBuildingProject() {
    const videoRef = useRef(null);

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
        <div className="container px-4 xl:px-0 mx-auto pb-20 md:pb-44 pt-14 md:pt-28">
            <h2 className="font-semibold text-4xl md:text-6xl uppercase text-center !leading-relaxed mb-12 md:mb-24">
                Building a Legacy, One
                <br className="hidden lg:block" />
                {" "}
                Project at a Time
            </h2>
            <video
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
            </video>
        </div>
    );
}
