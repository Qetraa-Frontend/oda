"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { odaAmbassadorForm } from "@/app/data/oda-ambassador";
import { odaAmbassadorFormSchema } from "@/app/schemas/oda-ambassador";
import { Input } from "@/app/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/ui/select";

export default function OdaAmbassadorForm() {
    const {
        control,
        formState: { errors },
        handleSubmit,
    } = useForm({ resolver: zodResolver(odaAmbassadorFormSchema) });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="container mx-auto pt-[75px] md:pt-[150px] pb-[143px] md:pb-[287px]">
            <form
                className="max-w-[1034px] mx-auto"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-[70px] md:mb-[141px]">
                    <div className="mb-[76px] md:mb-[153px]">
                        <h2 className="font-semibold text-[40px] md:text-[64px] text-center mb-[44px] md:mb-[88px]">Owner Details</h2>
                        <div className="p-3 md:p-6 border border-black border-opacity-35 rounded-lg">
                            {odaAmbassadorForm.ownerDetails.map(({
                                data,
                                id,
                                label,
                                name,
                                type,
                            }) => (
                                <div
                                    className="flex flex-col gap-3 md:gap-6 h-[76px] md:h-[153px]"
                                    key={id}
                                >
                                    <label className="font-medium text-[22px] md:text-[32px]">
                                        {label}
                                        <span className="text-red-500 relative left-2 bottom-2">*</span>
                                    </label>
                                    {type === "text" ? (
                                        <Controller
                                            control={control}
                                            name={name}
                                            render={({ field: inputProps }) => (
                                                <Input
                                                    {...inputProps}
                                                    className="border-b border-gray-300 focus:ring focus:ring-blue-500 px-2 py-1"
                                                    placeholder={label}
                                                />
                                            )}
                                        />
                                    ) : (
                                        <Controller
                                            control={control}
                                            name={name}
                                            render={({ field: selectProps }) => (
                                                <Select
                                                    value={selectProps.value}
                                                    onValueChange={selectProps.onChange}
                                                >
                                                    <SelectTrigger className="border-b border-gray-300 focus:ring focus:ring-blue-500 px-2 py-1">
                                                        <SelectValue placeholder={label} />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {data.map((option) => (
                                                            <SelectItem
                                                                key={option}
                                                                value={option}
                                                            >
                                                                {option}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                    )}
                                    {errors[name] && <span className="text-red-500 text-xs mt-1">{errors[name]?.message}</span>}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold text-[40px] md:text-[64px] text-center mb-[44px] md:mb-[88px]">Referral Details</h2>
                        <div className="p-3 md:p-6 border border-black border-opacity-35 rounded-lg">
                            {odaAmbassadorForm.referralDetails.map(({
                                data,
                                id,
                                label,
                                name,
                                type,
                            }) => (
                                <div
                                    className="flex flex-col gap-3 md:gap-6 h-[76px] md:h-[153px]"
                                    key={id}
                                >
                                    <label className="font-medium text-[22px] md:text-[32px]">
                                        {label}
                                        <span className="text-red-500 relative left-2 bottom-2">*</span>
                                    </label>
                                    {type === "text" ? (
                                        <Controller
                                            control={control}
                                            name={name}
                                            render={({ field: inputProps }) => (
                                                <Input
                                                    {...inputProps}
                                                    className="border-b border-gray-300 focus:ring focus:ring-blue-500 px-2 py-1"
                                                    placeholder={label}
                                                />
                                            )}
                                        />
                                    ) : (
                                        <Controller
                                            control={control}
                                            name={name}
                                            render={({ field: selectProps }) => (
                                                <Select
                                                    value={selectProps.value}
                                                    onValueChange={selectProps.onChange}
                                                >
                                                    <SelectTrigger className="border-b border-gray-300 focus:ring focus:ring-blue-500 px-2 py-1">
                                                        <SelectValue placeholder={label} />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {data.map((option) => (
                                                            <SelectItem
                                                                key={option}
                                                                value={option}
                                                            >
                                                                {option}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                    )}
                                    {errors[name] && <span className="text-red-500 text-xs mt-1">{errors[name]?.message}</span>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <button
                    className="bg-primary text-white px-4 py-2 rounded mt-4"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
