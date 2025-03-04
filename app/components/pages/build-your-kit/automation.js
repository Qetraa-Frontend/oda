"use client";

import { motion, useInView } from "framer-motion";
import {
    Check,
    ChevronLeft,
    ChevronRight,
    Plus,
    X,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import Spinner from "@/app/components/shared/spinner";
import { useBuildYourKitStore } from "@/app/store/build-your-kit";
import { useLocateYourHomeStore } from "@/app/store/locate-your-home";
import { Button } from "@/app/ui/button";
import { Checkbox } from "@/app/ui/checkbox";

export default function BuildYourKitAutomation({ automation }) {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

    const [loading, setLoading] = useState(false);

    const [responseMsg, setResponseMsg] = useState({
        text: "",
        type: null,
    });

    const [currentAutomation, setCurrentAutomation] = useState(null);

    const router = useRouter();

    const {
        addons,
        addonsPerRequest,
        address,
        airConditioningAddons,
        automation: selectedAutomation,
        bookingId,
        info,
        mode,
        plan,
        questions,
        setAutomation,
        setIsActive: setBuildYourKitIsActive,
        unitArea,
    } = useBuildYourKitStore();

    const { setIsActive: setLocateYourHomeIsActive } = useLocateYourHomeStore();

    const ref = useRef(null);

    const isInView = useInView(
        ref,
        { once: true },
    );

    const formattedAutomation = Object.values({
        basic: {
            details: {
                automationid: automation.basic[0].automationid,
                automationname: "Basic",
            },
            features: [...automation.basic],
        },
        advanced: { // eslint-disable-line
            details: {
                automationid: automation.advanced[0].automationid,
                automationname: "Advanced",
            },
            features: [...automation.advanced],
        },
    });

    const saveOrderHandler = () => {
        setResponseMsg({
            text: "",
            type: null,
        });

        setLoading(true);

        fetch(
            `${backendUrl}BookingDataIn/${bookingId}`,
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
                        apartmentAddress: address,
                        apartmentId: null,
                        apartmentSpace: parseInt(unitArea),
                        apartmentType: 1,
                        unittypeid: null,
                    },
                    automationID: selectedAutomation.id || null,
                    customerInfo: {
                        address,
                        email: info.email,
                        firstname: info.name,
                        phonenumber: info.phoneNumber,
                    },
                    developerID: null,
                    paymentPlanID: info.paymentPlan.id,
                    planID: plan.id,
                    projectID: null,
                    questions: Object.keys(questions).length > 0 ? Object.values(questions).map(({
                        answer,
                        question,
                    }, index) => ({
                        answer,
                        name: question,
                        questionsID: index + 1,
                    })) : {},
                }),
                headers: { "Content-Type": "application/json" },
                method: "PUT",
            },
        ).then((response) => response.json()).then((response) => {
            setLoading(false);

            router.push(`/cart?orderId=${response?.bookingID}`);
        })["catch"](() => {
            setLoading(false);

            setResponseMsg({
                text: "Failed to updating your Order, please try again later!",
                type: "error",
            });
        });
    };

    useEffect(
        () => {
            const handleResize = () => {
                    const isLg = window.matchMedia("(min-width: 1024px)").matches; // eslint-disable-line
                if (isLg) setCurrentAutomation(null);
            };

            handleResize();

                window.addEventListener( // eslint-disable-line
                "resize",
                handleResize,
            );

            return () => {
                    window.removeEventListener( // eslint-disable-line
                    "resize",
                    handleResize,
                );
            };
        },
        [],
    );

    return (
        <div className="md:min-h-[1312px] bg-[#D9D9D969]">
            <div
                className="container mx-auto flex"
                ref={ref}
            >
                <motion.div
                    animate={isInView && { x: 0 }}
                    className="w-full xl:w-[838px] min-h-[300px] md:h-[495px] bg-primary py-[20px] md:py-[41px] px-4 md:px-8 rounded-2xl xl:rounded-r-none"
                    initial={{ x: "-100vw" }}
                    transition={{
                        damping: 10,
                        duration: 2,
                        ease: "easeIn",
                        stiffness: 40,
                        type: "spring",
                    }}
                >
                    <div>
                        <span className="font-medium text-base md:text-[20px] mb-2 md:mb-4 inline-block ml-2 md:ml-4">Add-on</span>
                        <div className="flex items-center mb-2">
                            <Plus
                                className="opacity-60 w-[30px] h-[30px] md:w-[60px] md:h-[60px]"
                                size={96}
                            />
                            <h2 className="font-semibold text-[22px] md:text-[32px] !uppercase">Automation</h2>
                        </div>
                        <p className="font-semibold text-base md:text-[20px] !leading-loose lg:w-3/4">
                            Enhance what you love most about your home
                            with a seamless automation experience using
                            world class automation technology & brands
                        </p>
                        <p className="font-semibold text-base md:text-[20px] !leading-loose mt-2 md:mt-4 lg:w-3/4">
                            Whether you’re looking to give your home an edgy
                            modern feel with some automation or make turn
                            your home into a fully smart home. We have a
                            reliable plan that suits your needs.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    animate={isInView && { x: 0 }}
                    className="w-[455px] h-[673px] hidden xl:block relative"
                    initial={{ x: "100vw" }}
                    transition={{
                        damping: 10,
                        duration: 2,
                        ease: "easeIn",
                        stiffness: 40,
                        type: "spring",
                    }}
                >
                    <span className="absolute top-0 left-0 bg-primary w-6 h-6 block" />
                    <Image
                        alt="automation"
                        className="h-full object-cover xl:object-fill w-[455px] rounded-tr-lg relative z-50"
                        height={673}
                        loading="lazy"
                        src="/images/pages/build-your-kit/automation.webp"
                        width={455}
                    />
                </motion.div>
            </div>
            <div className="container mx-auto flex justify-center relative">
                <motion.div
                    animate={isInView && { x: 0 }}
                    className="overflow-visible md:max-w-[718px] min-h-[480px] bg-white rounded-2xl py-2 md:py-4 px-2 md:px-4 my-8 md:my-0 md:absolute -top-20 xl:-top-56 z-50"
                    initial={{ x: "-100vw" }}
                    transition={{
                        damping: 10,
                        duration: 2,
                        ease: "easeIn",
                        stiffness: 40,
                        type: "spring",
                    }}
                >
                    <table className="table-fixed w-full relative">
                        <tbody>
                            {automation.advanced.map(({
                                automationdetailsname,
                                iconBase64,
                            }, index) => (
                                <tr
                                    className={`${index % 2 === 0 ? "bg-[#E3E4E4] h-[55px] w-full" : "bg-white h-[55px] w-full"} flex flex-col justify-center w-full`}
                                    key={index} // eslint-disable-line
                                >
                                    <td
                                        className="font-normal text-lg md:text-2xl px-2 md:px-4 flex gap-2 items-center max-w-[220px] sm:max-w-[320px] md:max-w-[363px]"
                                        colSpan={3}
                                    >
                                        <Image
                                            alt="automation_icon"
                                            className="relative z-50"
                                            height={41}
                                            loading="lazy"
                                            src={`data:image/png;base64, ${iconBase64}`}
                                            width={41}
                                        />
                                        <h5 className="break-words block relative z-50">{automationdetailsname}</h5>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <thead>
                            <tr className="h-[55px]">
                                <th
                                    className="font-extrabold text-[22px] md:text-[32px] text-left px-2 md:px-4 absolute z-50 -bottom-[50px] md:-bottom-[60px]"
                                    colSpan="1"
                                >
                                    Choose Plan
                                </th>
                            </tr>
                        </thead>
                    </table>
                    <div className="flex flex-wrap gap-2 md:gap-4 justify-end absolute top-4 right-3 w-full h-full">
                        {formattedAutomation.map(({
                            details: formattedAutomationDetails,
                            features,
                        }) => {
                            let currentAutomationFeatures = [
                                {
                                    features,
                                    title: "Features",
                                },
                            ];

                            if (currentAutomation?.features) currentAutomationFeatures = currentAutomation.features;

                            return (
                                (
                                    <div
                                        className={`${formattedAutomationDetails.automationid !== 1 ? "hidden xl:block" : ""} relative w-[140px] sm:w-[161px] h-[94%] border border-gray-300 rounded-2xl text-center pt-2 md:pt-4 px-2 md:px-4 hover:bg-primary transition-all duration-1000`}
                                        key={formattedAutomationDetails.automationid}
                                    >
                                        <div className="relative top-8 md:top-0">
                                            <div className="xl:hidden absolute right-[2px] w-full flex justify-between">
                                                <ChevronLeft
                                                    className={`${currentAutomation?.details.automationid === 1 || !currentAutomation?.details?.automationid ? "opacity-50 cursor-default" : "cursor-pointer opacity-100"}`}
                                                    size={30}
                                                    onClick={() => (currentAutomation?.details.automationid > 1) && setCurrentAutomation({
                                                        details: formattedAutomation.find(({ details }) => details.automationid === (currentAutomation?.details.automationid || 1) - 1).details,
                                                        features: [
                                                            {
                                                                features: formattedAutomation.find(({ details }) => details.automationid === (currentAutomation?.details.automationid || 1) - 1).features,
                                                                title: "Features",
                                                            },
                                                        ],
                                                    })}
                                                />
                                                <ChevronRight
                                                    className={`${currentAutomation?.details.automationid === formattedAutomation.length ? "opacity-50 cursor-default" : "cursor-pointer opacity-100"}`}
                                                    size={30}
                                                    onClick={() => currentAutomation?.details.automationid !== formattedAutomation.length && setCurrentAutomation({
                                                        details: formattedAutomation.find(({ details }) => details.automationid === (currentAutomation?.details.automationid || 1) + 1).details,
                                                        features: [
                                                            {
                                                                features: formattedAutomation.find(({ details }) => details.automationid === (currentAutomation?.details.automationid || 1) + 1).features,
                                                                title: "Features",
                                                            },
                                                        ],
                                                    })}
                                                />
                                            </div>
                                            <h5 className="font-semibold text-lg md:text-2xl">{currentAutomation?.details?.automationname || formattedAutomationDetails?.automationname}</h5>
                                            <div className="flex flex-col justify-center items-center relative top-2">
                                                {currentAutomationFeatures[0].features.map(({ description }, indx) => (
                                                    <div
                                                        className="flex items-center gap-1 h-[55px]"
                                                    key={indx} // eslint-disable-line
                                                    >
                                                        {description ? (
                                                            <Check
                                                                className="rounded-full border border-black p-1 md:p-2"
                                                                size={35}
                                                            />
                                                        ) : (
                                                            <X
                                                                className="rounded-full border border-destructive text-destructive p-1 md:p-2"
                                                                size={35}
                                                            />
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="relative top-6">
                                                <Checkbox
                                                    checked={selectedAutomation.id === formattedAutomationDetails.automationid}
                                                    className="w-8 h-8 border border-black"
                                                    onCheckedChange={(value) => {
                                                        if (value) {
                                                            setAutomation({
                                                                id: formattedAutomationDetails.automationid,
                                                                name: formattedAutomationDetails.automationname,
                                                            });
                                                        } else {
                                                            setAutomation({
                                                                id: "",
                                                                name: "",
                                                            });
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )
                            );
                        })}
                    </div>
                </motion.div>
            </div>
            <div className="container mt-10 md:mt-[550px] xl:mt-[430px] flex justify-end">
                <div className="flex flex-col gap-2">
                    <Button
                        className="font-semibold text-[22px] md:text-[32px] !bg-primary text-black transition-all duration-1000 rounded-3xl h-20 w-full sm:w-[370px]  hover:animate-heartBeat mb-10 md:mb-0"
                        disabled={!plan.id || !address || !unitArea}
                        onClick={() => {
                            if (mode === "edit") saveOrderHandler();
                            else {
                                router.push("/checkout");

                                setBuildYourKitIsActive(true);

                                setLocateYourHomeIsActive(false);
                            }
                        }}
                    >
                        {mode === "edit" ? loading ? <Spinner color="text-black" /> : "Save" : "Add to Cart"} {/* eslint-disable-line */}
                    </Button>
                    {responseMsg.text && (
                        <span className={`font-bold text-xs md:text-base ${responseMsg.type === "error" ? "text-red-500" : "text-green-500"} block w-full md:w-[371px] text-center`}>{responseMsg.text}</span>
                    )}
                </div>
            </div>
        </div>
    );
}
