"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Asterisk } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import Spinner from "@/app/components/shared/spinner";
import { odaAmbassadorFormData } from "@/app/data/forms/oda-ambassador";
import { handleNumberInputLogic } from "@/app/lib/utils";
import { odaAmbassadorFormSchema } from "@/app/schemas/oda-ambassador";
import { Button } from "@/app/ui/button";
import { Input } from "@/app/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/ui/select";

export default function OdaAmbassadorForm({ developers }) {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

    const [loading, setLoading] = useState(false);

    const [unitArea, setUnitArea] = useState("");

    const [budget, setBudget] = useState("");

    const [responseMsg, setResponseMsg] = useState({
        text: "",
        type: null,
    });

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        defaultValues: {
            budget: "",
            clientStatus: "",
            developer: "",
            ownerName: "",
            ownerPhoneNumber: "",
            referralEmail: "",
            referralName: "",
            referralPhoneNumber: "",
            unitArea: "",
            unitLocation: "",
        },
        resolver: zodResolver(odaAmbassadorFormSchema),
    });

    const onSubmit = ({
        clientStatus,
        developer,
        ownerName,
        ownerPhoneNumber,
        referralEmail,
        referralName,
        referralPhoneNumber,
        unitLocation,
    }) => {
        setResponseMsg({
            text: "",
            type: null,
        });

        setLoading(true);

        fetch(
            `${backendUrl}Odaambassador`,
            {
                body: JSON.stringify({
                    ownerdeveloper: developer,
                    ownername: ownerName,
                    ownerphonenumber: ownerPhoneNumber,
                    ownerselectbudget: parseInt(budget),
                    ownerunitarea: unitArea < 50 ? 50 : unitArea > 1500 ? 1500 : parseInt(unitArea), // eslint-disable-line
                    ownerunitlocation: unitLocation,
                    referralclientstatue: clientStatus,
                    referralemail: referralEmail,
                    referralname: referralName,
                    referralphonenumber: referralPhoneNumber,
                }),
                headers: { "Content-Type": "application/json" },
                method: "POST",
            },
        ).then((response) => response.json()).then(() => {
            setLoading(false);

            setResponseMsg({
                text: "Form submitted successfully!",
                type: "success",
            });

            reset({
                budget: "",
                clientStatus: "",
                developer: "",
                ownerName: "",
                ownerPhoneNumber: "",
                referralEmail: "",
                referralName: "",
                referralPhoneNumber: "",
                unitArea: "",
                unitLocation: "",
            });

            setUnitArea("");

            setBudget("");
        })["catch"](() => {
            setLoading(false);

            setResponseMsg({
                text: "Failed to submit the form!",
                type: "error",
            });
        });
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
                        <div className="flex flex-col gap-3 md:gap-6 p-3 md:p-6 border border-black border-opacity-35 rounded-lg">
                            {odaAmbassadorFormData.ownerDetails.map(({
                                data,
                                id,
                                isAsync,
                                label,
                                name,
                                type,
                            }) => (
                                <div
                                    className="flex flex-col gap-2 md:gap-4 py-3 md:py-6"
                                    key={id}
                                >
                                    <label className="font-medium text-[22px] md:text-[32px]">
                                        {label}
                                        <Asterisk
                                            className="text-red-500 relative left-2 bottom-2 inline"
                                            size={15}
                                        />
                                    </label>
                                    <div>
                                        {type !== "select" ? (
                                            <Controller
                                                control={control}
                                                name={name}
                                                render={({ field: inputProps }) => (type === "number" ? (
                                                    <Input
                                                        inputMode="numeric"
                                                        max={name === "unitArea" ? 1500 : Infinity}
                                                        min={name === "unitArea" ? 50 : 0}
                                                        pattern="[0-9]*"
                                                        type="number"
                                                        value={name === "unitArea" ? unitArea : budget}
                                                        onBlur={(e) => {
                                                            const { value } = e.target;

                                                            if (name === "unitArea") {
                                                                if (Number(value) < 50) {
                                                                    e.target.value == 50; // eslint-disable-line

                                                                    setUnitArea(50);
                                                                } else if (Number(value) > 1500) { // eslint-disable-line
                                                                    e.target.value == 1500; // eslint-disable-line

                                                                    setUnitArea(1500);
                                                                }
                                                            }
                                                        }}
                                                        onChange={(e) => {
                                                            const { value } = e.target;

                                                            if (!handleNumberInputLogic(e)) return;

                                                            inputProps.onChange(e);

                                                            if (name === "unitArea") setUnitArea(value);
                                                            else setBudget(value);
                                                        }}
                                                        onKeyDown={(e) => {
                                                            if (e.key === "-" || e.key === "e") e.preventDefault();
                                                        }}
                                                    />
                                                ) : (
                                                    <Input
                                                        {...inputProps}
                                                        type={type}
                                                    />
                                                ))}
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
                                                        <SelectTrigger className="border-0 border-b-2 border-input rounded-none outline-none shadow-none px-3 py-1">
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {isAsync ? developers.map(({ developername }) => (
                                                                <SelectItem
                                                                    key={developername}
                                                                    value={developername}
                                                                >
                                                                    {developername}
                                                                </SelectItem>
                                                            )) : data.map((option) => (
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
                                        {errors[name] && <span className="text-red-500 text-xs mt-1 block">{errors[name]?.message}</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold text-[40px] md:text-[64px] text-center mb-[44px] md:mb-[88px]">Referral Details</h2>
                        <div className="flex flex-col gap-3 md:gap-6 p-3 md:p-6 border border-black border-opacity-35 rounded-lg">
                            {odaAmbassadorFormData.referralDetails.map(({
                                data,
                                id,
                                label,
                                name,
                                type,
                            }) => (
                                <div
                                    className="flex flex-col gap-2 md:gap-4 py-3 md:py-6"
                                    key={id}
                                >
                                    <label className="font-medium text-[22px] md:text-[32px]">
                                        {label}
                                        <Asterisk
                                            className="text-red-500 relative left-2 bottom-2 inline"
                                            size={15}
                                        />
                                    </label>
                                    <div>
                                        {type !== "select" ? (
                                            <Controller
                                                control={control}
                                                name={name}
                                                render={({ field: inputProps }) => (
                                                    <Input
                                                        {...inputProps}
                                                        type={type}
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
                                                        <SelectTrigger className="border-0 border-b-2 border-input rounded-none outline-none shadow-none px-3 py-1">
                                                            <SelectValue />
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
                                        {errors[name] && <span className="text-red-500 text-xs mt-1 block">{errors[name]?.message}</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 md:gap-4 items-end">
                    <Button
                        className="font-semibold text-[22px] md:text-[32px] !bg-primary text-black transition-all duration-1000 rounded-3xl h-20 w-full sm:w-[370px] hover:animate-heartBeat"
                        disabled={loading}
                    >
                        {loading ? <Spinner color="text-black" /> : "Submit"}
                    </Button>
                    {responseMsg.text && (
                        <span className={`font-bold text-[10px] md:text-sm ${responseMsg.type === "error" ? "text-red-500" : "text-green-500"} block w-full md:w-[371px] text-center`}>{responseMsg.text}</span>
                    )}
                </div>
            </form>
        </div>
    );
}
