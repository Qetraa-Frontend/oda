import SlotCounter from "react-slot-counter";

import { statics } from "@/app/data/home";

export default function HomeStatics() {
    return (
        <div
            className="bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: "url(/images/pages/home/statics.webp)" }}
        >
            <div className="container px-4 xl:px-0 mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 min-h-80 py-[38px] md:py-[76px]">
                {statics.map(({
                    id,
                    title,
                    value,
                }) => (
                    <div
                        className="col-span-1 md:col-span-3 flex flex-col justify-center items-center gap-8 md:gap-16"
                        key={id}
                    >
                        <h6 className="font-normal text-[22px] md:text-[32px] text-white text-center">{title}</h6>
                        <SlotCounter
                            animateOnVisible={{ triggerOnce: true }}
                            debounceDelay={300}
                            duration={3}
                            numberSlotClassName="font-normal text-[40px] md:text-[64px] text-white text-center h-full"
                            value={value}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
