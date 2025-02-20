"use client";

import Image from "next/image";

import { useBuildYourKitStore } from "@/app/store/build-your-kit";
import { Input } from "@/app/ui/input";

export default function BuildYourKitSelections() {
    const {
        address,
        setAddress,
        setUnitArea,
        unitArea,
    } = useBuildYourKitStore();

    return (
        <div className="container mx-auto pt-[47px] md:pt-[94px] pb-[50px] md:pb-[100px]">
            <div className="relative max-w-[1018px] h-[834px] mx-auto px-5 lg:px-0">
                <Image
                    alt="selections_bg"
                    className="rounded-2xl"
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    src="/images/pages/build-your-kit/selections.webp"
                />
                <div className="flex justify-end flex-col max-w-[735px] h-[90%] mx-auto">
                    <div className="relative z-50 flex flex-col gap-5 md:gap-10">
                        <Input
                            defaultValue={unitArea}
                            type="text"
                            value={unitArea}
                            onChange={(e) => setUnitArea(e.target.value)}
                        />
                        <Input
                            defaultValue={address}
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
