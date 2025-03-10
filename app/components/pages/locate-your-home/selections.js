"use client";

import Image from "next/image";
import Link from "next/link";

import { handleNumberInputLogic } from "@/app/lib/utils";
import { useLocateYourHomeStore } from "@/app/store/locate-your-home";
import { Input } from "@/app/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/ui/select";

export default function LocateYourHomeSelections({
    developers,
    unitTypes,
}) {
    const {
        developer,
        setDeveloper,
        setUnitArea,
        setUnitType,
        unitArea,
        unitType,
    } = useLocateYourHomeStore();

    return (
        <div className="container mx-auto pt-[47px] md:pt-[94px] pb-[50px] md:pb-[100px]">
            <div className="relative max-w-[1018px] h-[834px] mx-auto px-5 lg:px-0">
                <Image
                    alt="selections_bg"
                    className="rounded-2xl"
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    src="/images/pages/locate-your-home/selections.webp"
                />
                <div className="flex justify-end flex-col max-w-[735px] h-[90%] mx-auto">
                    <div className="relative z-50 flex flex-col gap-5 md:gap-10">
                        <Select
                            defaultValue={developer.id}
                            value={developer.id}
                            onValueChange={(value) => setDeveloper({
                                id: value,
                                name: developers.find(({ developerid }) => developerid === value).developername,
                            })}
                        >
                            <SelectTrigger className="text-[500] text-[22px] md:text-[32px] border-0 bg-primary rounded-2xl outline-none shadow-none px-3 h-20 w-full cursor-pointer primary-select">
                                <SelectValue placeholder="Developer" />
                            </SelectTrigger>
                            <SelectContent>
                                {developers.map(({
                                    developerid,
                                    developername,
                                }) => (
                                    <SelectItem
                                        key={developerid}
                                        value={developerid}
                                    >
                                        {developername}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Select
                            defaultValue={unitType.id}
                            value={unitType.id}
                            onValueChange={(value) => setUnitType({
                                id: value,
                                name: unitTypes.find(({ unittypeid }) => unittypeid === value).unittypeName,
                            })}
                        >
                            <SelectTrigger className="text-[500] text-[22px] md:text-[32px] border-0 bg-primary rounded-2xl outline-none shadow-none px-3 h-20 w-full cursor-pointer primary-select">
                                <SelectValue placeholder="Unit Type" />
                            </SelectTrigger>
                            <SelectContent>
                                {unitTypes.map(({
                                    unittypeName,
                                    unittypeid,
                                }) => (
                                    <SelectItem
                                        key={unittypeid}
                                        value={unittypeid}
                                    >
                                        {unittypeName}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <div>
                            <Input
                                className="text-[500] text-[22px] md:text-[32px] !placeholder-black border-0 bg-primary rounded-2xl outline-none shadow-none px-3 h-20 w-full"
                                inputMode="numeric"
                                max={1500}
                                min={50}
                                pattern="[0-9]*"
                                placeholder="Unit Area"
                                type="number"
                                value={unitArea}
                                onBlur={(e) => {
                                    const { value } = e.target;

                                    if (Number(value) < 50) {
                                        e.target.value == 50; // eslint-disable-line

                                        setUnitArea(50);
                                } else if (Number(value) > 1500) { // eslint-disable-line
                                    e.target.value == 1500; // eslint-disable-line

                                        setUnitArea(1500);
                                    }
                                }}
                                onChange={(e) => {
                                    const { value } = e.target;

                                    if (!handleNumberInputLogic(e)) return;

                                    setUnitArea(value);
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "-" || e.key === "e") e.preventDefault();
                                }}
                            />
                            {((Number(unitArea) < 50 || Number(unitArea) > 1500) && unitArea) && <span className="font-bold text-xs md:text-base text-red-500 block w-full md:w-fit mt-2">Unit Area Must be between 50 & 1500 M2</span>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4 md:mt-8 flex justify-end">
                <Link
                    className="font-normal text-lg md:text-2xl underline float-right"
                    href="/build-your-kit"
                    prefetch={false}
                >
                    Can&apos;t find your Unit?
                </Link>
            </div>
        </div>
    );
}
