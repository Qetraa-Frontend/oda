"use client";

import CountUp from "react-countup";

export default function HomeStatics() {
    return (
        <div
            className="bg-cover bg-no-repeat bg-top grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 min-h-80 py-20 md:py-0"
            style={{ backgroundImage: "url(/images/pages/home/statics.png)" }}
        >
            <div className="col-span-1 md:col-span-3 flex flex-col justify-center items-center gap-8 md:gap-16">
                <span className="text-xl md:text-3xl font-normal text-white text-center">Developers</span>
                <CountUp
                    duration={3}
                    end={11}
                    start={0}
                    style={{
                        color: "#fff",
                        fontSize: 64,
                    }}
                    redraw
                />
            </div>
            <div className="col-span-1 md:col-span-3 flex flex-col justify-center items-center gap-8 md:gap-16">
                <span className="text-xl md:text-3xl font-normal text-white text-center">Clients</span>
                <CountUp
                    duration={3}
                    end={20}
                    start={0}
                    style={{
                        color: "#fff",
                        fontSize: 64,
                    }}
                    redraw
                />
            </div>
            <div className="col-span-1 md:col-span-3 flex flex-col justify-center items-center gap-8 md:gap-16">
                <span className="text-xl md:text-3xl font-normal text-white text-center">Completed Unites</span>
                <CountUp
                    duration={3}
                    end={100}
                    start={0}
                    style={{
                        color: "#fff",
                        fontSize: 64,
                    }}
                    redraw
                />
            </div>
            <div className="col-span-1 md:col-span-3 flex flex-col justify-center items-center gap-8 md:gap-16">
                <span className="text-xl md:text-3xl font-normal text-white text-center">Employee</span>
                <CountUp
                    duration={3}
                    end={10}
                    start={0}
                    style={{
                        color: "#fff",
                        fontSize: 64,
                    }}
                    redraw
                />
            </div>
        </div>
    );
}
