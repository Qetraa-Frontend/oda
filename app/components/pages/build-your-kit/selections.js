"use client";

import Image from "next/image";

import { handleNumberInputLogic } from "@/app/lib/utils";
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
            <div className="relative max-w-[1206px] h-[252px] mx-auto px-5 lg:px-0 mb-3 md:mb-6">
                <Image
                    alt="selections_bg"
                    className="rounded-2xl"
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    src="/images/pages/build-your-kit/selections.webp"
                />
                <div className="flex justify-end flex-col max-w-[846px] h-[90%] mx-auto relative z-50">
                    <div className="bg-primary rounded-2xl h-40 py-[15px] md:py-[30px] px-1 md:px-2">
                        <h5 className="font-medium text-lg md:text-2xl mb-2 md:mb-4">Unit Area</h5>
                        <Input
                            className="rounded-lg bg-white bg-opacity-60 h-14"
                            defaultValue={unitArea}
                            inputMode="numeric"
                            pattern="[0-9]*"
                            type="number"
                            value={unitArea}
                            onChange={(e) => {
                                const { value } = e.target;

                                if (!handleNumberInputLogic(e)) return;

                                setUnitArea(value);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "-" || e.key === "e") e.preventDefault();
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="relative max-w-[1206px] h-[252px] mx-auto px-5 lg:px-0">
                <Image
                    alt="selections_bg"
                    className="rounded-2xl"
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    src="/images/pages/build-your-kit/selections.webp"
                />
                <div className="flex justify-end flex-col max-w-[846px] h-[90%] mx-auto relative z-50">
                    <div className="bg-primary rounded-2xl h-40 py-[15px] md:py-[30px] px-1 md:px-2">
                        <h5 className="font-medium text-lg md:text-2xl mb-2 md:mb-4">Address</h5>
                        <Input
                            className="rounded-lg bg-white bg-opacity-60 h-14"
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
