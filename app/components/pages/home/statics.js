"use client";

import CountUp from "react-countup";

import { statics } from "@/app/data/home";

export default function HomeStatics() {
    return (
        <div
            className="bg-cover bg-no-repeat bg-top"
            style={{ backgroundImage: "url(/images/pages/home/statics.png)" }}
        >
            <div className="container px-4 md:px-6 mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 min-h-80 py-20 md:py-0">
                {statics.map(({
                    id,
                    title,
                    value,
                }) => (
                    <div
                        className="col-span-1 md:col-span-3 flex flex-col justify-center items-center gap-8 md:gap-16"
                        key={id}
                    >
                        <span className="text-xl md:text-3xl font-normal text-white text-center">{title}</span>
                        <CountUp
                            duration={3}
                            end={value}
                            start={0}
                            style={{
                                color: "#fff",
                                fontSize: 64,
                                textAlign: "center",
                            }}
                            redraw
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
