"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useInView } from "framer-motion";
import { Asterisk } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import Spinner from "@/app/components/shared/spinner";
import { checkoutFormData } from "@/app/data/forms/checkout";
import { checkoutFormSchema } from "@/app/schemas/checkout";
import { useLocateYourHomeStore } from "@/app/store/locate-your-home";
import { Button } from "@/app/ui/button";
import { Input } from "@/app/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/ui/select";

export default function CheckoutForm({ paymentPlans }) {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

    const [loading, setLoading] = useState(false);

    const [responseMsg, setResponseMsg] = useState({
        text: "",
        type: null,
    });

    const router = useRouter();

    const {
        addons,
        addonsPerRequest,
        airConditioningAddons,
        automation,
        bookingId,
        developer,
        info,
        isActive,
        mode,
        plan,
        project,
        questions,
        setBookingId,
        setInfo,
        unitArea,
    } = useLocateYourHomeStore();

    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        defaultValues: {
            email: "",
            name: "",
            paymentPlan: "",
            phoneNumber: "",
        },
        resolver: zodResolver(checkoutFormSchema),
    });

    const onSubmit = ({
        email,
        name,
        paymentPlan,
        phoneNumber,
    }) => {
        setResponseMsg({
            text: "",
            type: null,
        });

        setLoading(true);

        setInfo({
            email,
            name,
            paymentPlan: {
                id: parseInt(paymentPlan),
                installmentMonths: paymentPlans.find(({ paymentplanid }) => paymentplanid === parseInt(paymentPlan))?.numberofinstallmentmonths,
                name: paymentPlans.find(({ paymentplanid }) => paymentplanid === parseInt(paymentPlan))?.paymentplanname,
            },
            phoneNumber,
        });

        fetch(
            `${backendUrl}BookingDataIn${mode === "edit" ? `/${bookingId}` : ""}`,
            {
                body: JSON.stringify({
                    addonPerRequestIDs: addonsPerRequest.map(({ id }) => id),
                    addons: addons.map(({
                        id,
                        quantity,
                    }) => ({
                        addonID: id,
                        quantity: quantity || 1,
                    })).concat(airConditioningAddons.map(({
                        id,
                        quantity,
                    }) => ({
                        addonID: id,
                        quantity: quantity || 1,
                    }))),
                    apartmentDTO: {
                        apartmentAddress: isActive && null,
                        apartmentId: unitArea.id,
                        apartmentSpace: unitArea.space,
                        apartmentType: isActive ? 0 : 1,
                    },
                    automationID: automation.id || null,
                    customerInfo: {
                        address: isActive && null,
                        email,
                        firstname: name,
                        phonenumber: phoneNumber,
                    },
                    developerID: developer.id,
                    paymentPlanID: parseInt(paymentPlan),
                    planID: plan.id,
                    projectID: project.id,
                    questions: Object.values(questions).map(({
                        answer,
                        question,
                    }, index) => ({
                        answer,
                        name: question,
                        questionsID: index + 1,
                    })),
                }),
                headers: { "Content-Type": "application/json" },
                method: mode === "edit" ? "PUT" : "POST",
            },
        ).then((response) => response.json()).then((response) => {
            setLoading(false);

            reset();

            if (mode !== "edit") {
                setBookingId(response?.bookingID);

                localStorage.setItem( // eslint-disable-line
                    "unitAreaId",
                    unitArea.id,
                );
            }

            router.push(`/cart?orderId=${response?.bookingID}`);
        })["catch"](() => {
            setLoading(false);

            setResponseMsg({
                text: "Failed to booking your Order, please try again later!",
                type: "error",
            });
        });
    };

    return (
        <div
            className="container mx-auto"
            ref={ref}
        >
            <motion.div
                className="flex relative top-[90px] md:top-[180px] md:min-h-[814px] z-40"
                animate={isInView && {
                    opacity: 1,
                    y: 0,
                }}
                initial={{
                    opacity: 0,
                    y: "100vh",
                }}
                transition={{
                    damping: 10,
                    duration: 2,
                    ease: "easeIn",
                    stiffness: 33,
                    type: "spring",
                }}
            >
                <div className="w-full md:w-[60%] bg-white border-gray-300 border-[2px] md:border-r-0 rounded-2xl md:rounded-r-none p-4 md:p-8">
                    <h4 className="font-semibold text-3xl md:text-[40px]">Enter your Info</h4>
                    <form
                        className="mt-4 md:mt-8"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="flex flex-col gap-2 md:gap-3">
                            {checkoutFormData.map(({
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
                                                        defaultValue={info?.[name]}
                                                        type={type}
                                                        value={inputProps.value || info?.[name]}
                                                    />
                                                )}
                                            />
                                        ) : (
                                            <Controller
                                                control={control}
                                                name={name}
                                                render={({ field: selectProps }) => (
                                                    <Select
                                                        defaultValue={info.paymentPlan.id}
                                                        value={selectProps.value || info.paymentPlan.id}
                                                        onValueChange={selectProps.onChange}
                                                    >
                                                        <SelectTrigger className="border-0 border-b-2 border-input rounded-none outline-none shadow-none px-3 py-1">
                                                            {selectProps.value ? (
                                                                <span>
                                                                    {`${paymentPlans.find(({ paymentplanid }) => paymentplanid === parseInt(selectProps.value))?.paymentplanname} - ${paymentPlans.find(({ paymentplanid }) => paymentplanid === parseInt(selectProps.value))?.numberofinstallmentmonths} Months`}
                                                                </span>
                                                            ) : <SelectValue />}
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {paymentPlans.map(({
                                                                numberofinstallmentmonths,
                                                                paymentplanid,
                                                                paymentplanname,
                                                            }) => (
                                                                <SelectItem
                                                                    key={paymentplanid}
                                                                    value={paymentplanid}
                                                                >
                                                                    {`${paymentplanname} - ${numberofinstallmentmonths} Months`}
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
                        <div className="flex flex-col gap-2 justify-center">
                            <Button
                                className="font-semibold text-[22px] md:text-[32px] !bg-primary text-black transition-all duration-1000 rounded-3xl h-20 w-full md:w-[370px] hover:animate-heartBeat"
                                disabled={loading || Object.values(questions).length !== 8}
                            >
                                {loading ? <Spinner color="text-black" /> : mode === "edit" ? "Save" : "Submit"} {/* eslint-disable-line */}
                            </Button>
                            {responseMsg.text && (
                                <span className={`font-bold text-xs md:text-base ${responseMsg.type === "error" ? "text-red-500" : "text-green-500"} block w-full md:w-[371px] text-center`}>{responseMsg.text}</span>
                            )}
                        </div>
                    </form>
                </div>
                <div className="hidden md:block w-[40%]">
                    <Image
                        alt="checkout"
                        className="object-cover xl:object-fill w-full h-full rounded-r-2xl"
                        height={814}
                        loading="lazy"
                        src="/images/pages/checkout/form.webp"
                        width={519}
                    />
                </div>
            </motion.div>
        </div>
    );
}
