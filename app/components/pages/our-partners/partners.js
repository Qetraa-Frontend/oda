import Image from "next/image";

import { ourPartners } from "@/app/data/our-partners";

export default function Partners() {
    return (
        <div className="container mx-auto pt-[59px] md:pt-[119px] pb-[267px] md:pb-[534px]">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-5 md:gap-x-10 gap-y-10 md:gap-y-20">
                {ourPartners.map(({
                    alt,
                    id,
                    imageSrc,
                }) => (
                    <div
                        className="col-span-1 sm:col-span-6 md:col-span-4 flex justify-center md:justify-start"
                        key={id}
                    >
                        <div className="flex flex-col justify-center max-w-[367px] min-h-[328px] bg-muted shadow-lg">
                            <Image
                                alt={alt}
                                className="min-h-[176px] mx-auto object-contain"
                                height={176}
                                loading="lazy"
                                src={imageSrc}
                                width={358}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
