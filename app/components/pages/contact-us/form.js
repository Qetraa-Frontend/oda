"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useInView } from "framer-motion";
import { Asterisk } from "lucide-react";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import Social from "@/app/components/shared/social";
import Spinner from "@/app/components/shared/spinner";
import { contactUsForm } from "@/app/data/forms/contact-us";
import { contactUsFormSchema } from "@/app/schemas/contact-us";
import { Input } from "@/app/ui/input";
import { Textarea } from "@/app/ui/textarea";

export default function ContactUsForm() {
    const [loading, setLoading] = useState(false);

    const [responseMsg, setResponseMsg] = useState({
        text: "",
        type: null,
    });

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
            comment: "",
            email: "",
            name: "",
            phoneNumber: "",
        },
        resolver: zodResolver(contactUsFormSchema),
    });

    const onSubmit = (data) => {
        setResponseMsg({
            text: "",
            type: null,
        });

        setLoading(true);

        console.log(data);

        setTimeout(
            () => {
                setLoading(false);

                setResponseMsg({
                    text: "Form submitted successfully!",
                    type: "success",
                });

                reset();
            },
            4000,
        );
    };

    return (
        <div className="container mx-auto pt-[59px] md:pt-[119px] pb-[47px] md:pb-[95px]">
            <div
                className="grid grid-cols-1 md:grid-cols-12 gap-[30px] md:gap-[60px]"
                ref={ref}
            >
                <motion.div
                    animate={isInView && { x: 0 }}
                    className="col-span-1 md:col-span-6"
                    initial={{ x: "-100vw" }}
                    transition={{
                        damping: 10,
                        duration: 2,
                        ease: "easeIn",
                        stiffness: 40,
                        type: "spring",
                    }}
                >
                    <h2 className="font-[800] font-nanum-myeongjo text-6xl lg:text-8xl">
                        Let&apos;s Talk
                    </h2>
                    <p className="font-[700] font-nanum-myeongjo opacity-65 text-[22px] lg:text-[32px] lg:leading-[40px] mt-5 lg:mt-10">Got a unit on your mind ? Let’s discuss about the details.</p>
                    <div className="mt-10 lg:mt-20">
                        <span className="font-[800] font-nanum-myeongjo text-[22px] lg:text-[32px]">Call Us</span>
                        <Social />
                    </div>
                </motion.div>
                <motion.div
                    animate={isInView && { x: 0 }}
                    className="col-span-1 md:col-span-6"
                    initial={{ x: "100vw" }}
                    transition={{
                        damping: 10,
                        duration: 2,
                        ease: "easeIn",
                        stiffness: 40,
                        type: "spring",
                    }}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="p-1 md:p-3 border border-black border-opacity-35 rounded-lg">
                            <div className="flex flex-col gap-3 md:gap-6">
                                {contactUsForm.map(({
                                    id,
                                    isOptional,
                                    label,
                                    name,
                                    type,
                                }) => (
                                    <div
                                        className="flex flex-col gap-2 md:gap-4 py-3 md:py-6"
                                        key={id}
                                    >
                                        <label className="font-[800] font-nanum-myeongjo text-lg md:text-2xl">
                                            {label}
                                            {!isOptional && (
                                                <Asterisk
                                                    className="text-red-500 relative left-2 bottom-2 inline"
                                                    size={15}
                                                />
                                            )}
                                        </label>
                                        <div>
                                            <Controller
                                                control={control}
                                                name={name}
                                                render={({ field: inputProps }) => (type !== "text-area" ? (
                                                    <Input
                                                        {...inputProps}
                                                        type={type}
                                                    />
                                                ) : (
                                                    <Textarea
                                                        {...inputProps}
                                                        type={type}
                                                    />
                                                ))}
                                            />
                                            {errors[name] && <span className="text-red-500 text-xs mt-1 block">{errors[name]?.message}</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col gap-2 md:gap-4">
                                <button
                                    className="font-[800] font-nanum-myeongjo text-lg md:text-2xl bg-primary transition-all duration-1000 rounded-[29px] w-full md:w-[227px] py-1 md:py-2 hover:animate-heartBeat disabled:opacity-60"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <Spinner
                                            color="text-black"
                                            height="h-[40px]"
                                        />
                                    ) : "Submit"}
                                </button>
                                {responseMsg.text && (
                                    <span className={`font-bold text-xs md:text-base ${responseMsg.type === "error" ? "text-red-500" : "text-green-500"} block w-full md:w-[371px] text-center md:text-left`}>{responseMsg.text}</span>
                                )}
                            </div>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
