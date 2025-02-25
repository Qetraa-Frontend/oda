import Image from "next/image";
import SlotCounter from "react-slot-counter";

import { statics } from "@/app/data/home";

export default function HomeStatics() {
    return (
        <div className="relative">
            <Image
                alt="statics_bg"
                layout="fill"
                loading="lazy"
                objectFit="cover"
                src="/images/pages/home/statics.webp"
            />
            <div className="container mx-auto flex flex-wrap gap-8 sm:gap-0 lg:gap-0 min-h-80 py-[38px] lg:py-[76px]">
                {statics.map(({
                    id,
                    title,
                    value,
                }, index) => (
                    <div
                        key={id}
                        className={`w-full sm:w-[33.33%] lg:w-[20%] flex flex-col justify-center items-center gap-2 sm:gap-8 lg:gap-16 ${
                            index !== statics.length - 2 && index !== statics.length - 1 ? "sm:mb-8 lg:mb-0" : ""
                        } ${index >= statics.length - 2 ? "sm:w-1/2 sm:flex sm:justify-center" : ""}`}
                    >
                        <h6 className="font-normal text-[22px] lg:text-[32px] text-white text-center z-20 sm:min-h-[96px] flex items-center">{title}</h6>
                        <SlotCounter
                            animateOnVisible={{ triggerOnce: true }}
                            debounceDelay={300}
                            duration={3}
                            numberSlotClassName="font-normal text-[40px] lg:text-[64px] text-white text-center h-full"
                            value={value}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
