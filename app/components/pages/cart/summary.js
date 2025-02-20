/* eslint-disable max-lines */
/* eslint-disable complexity */

"use client";

import {
    Check,
    Pencil,
    Trash,
    X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { questions } from "@/app/data/questions";
import { useLocateYourHomeStore } from "@/app/store/locate-your-home";
import { Button } from "@/app/ui/button";
import { Input } from "@/app/ui/input";

import Spinner from "../../shared/spinner";
import OrderConfirmed from "./order-confirmed";

export default function CartSummary({
    automation,
    order: initOrder,
    plans,
}) {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

    const [order, setOrder] = useState(initOrder);

    const [loading, setLoading] = useState(false);

    const [confirmLoading, setConfirmLoading] = useState(false);

    const [targetUpdatedItem, setTargetUpdatedItem] = useState({
        id: "",
        type: "",
    });

    const [responseMsg, setResponseMsg] = useState({
        text: "",
        type: null,
    });

    const [confirmResponseMsg, setConfirmResponseMsg] = useState({
        text: "",
        type: null,
    });

    const [orderConfirmed, setOrderConfirmed] = useState(false);

    const {
        isActive,
        plan,
        resetAll,
        setAddons,
        setAddonsPerRequest,
        setAirConditioningAddons,
        setAutomation,
        setBookingId,
        setDeveloper,
        setInfo,
        setIsActive,
        setMode,
        setPlan,
        setProject,
        setQuestions,
        setUnitArea,
    } = useLocateYourHomeStore();

    const airConditioningAddons = order.addons.filter(({ addongroup }) => addongroup === "AirConditioning");

    const otherAddons = order.addons.filter(({ addongroup }) => addongroup !== "AirConditioning");

    const suffixes = ["th", "st", "nd", "rd"];

    const updateCartHandler = async (type, id, quantity, isRemoved, oldValue) => {
        setResponseMsg({
            text: "",
            type: null,
        });

        setLoading(true);

        setTargetUpdatedItem({
            id,
            type,
        });

        let customizedAddonsPerRequest = order.addonPerRequests;

        let customizedAddons = order.addons;

        if (type === "addonPerRequest") {
            if (isRemoved) customizedAddonsPerRequest = customizedAddonsPerRequest.filter(({ addonPerRequestID }) => addonPerRequestID !== id);
        } else if (type === "addon" || type === "airConditioningAddon") {
            if (isRemoved) customizedAddons = customizedAddons.filter(({ addonID }) => addonID !== id);
            else {
                customizedAddons = customizedAddons.map((addon) => {
                    if (addon.addonID === id) {
                        return {
                            ...addon,
                            quantity,
                        };
                    }

                    return addon;
                });
            }
        }

        fetch(
            `${backendUrl}BookingDataIn/${order.bookingID}`,
            {
                body: JSON.stringify({
                    addonPerRequestIDs: customizedAddonsPerRequest.map(({ addonPerRequestID }) => addonPerRequestID),
                    addons: customizedAddons.map(({
                        addonID,
                        quantity: addonQuality,
                    }) => ({
                        addonID,
                        quantity: addonQuality,
                    })),
                    apartmentDTO: {
                        apartmentAddress: isActive && null,
                        apartmentId: order.newApartmentID,
                        apartmentSpace: order.apartmentSpace,
                        apartmentType: isActive ? 0 : 1,
                    },
                    automationID: type === "automation" && isRemoved ? null : order.automationID,
                    customerInfo: {
                        address: isActive && null,
                        email: order.customerInfo.email,
                        firstname: order.customerInfo.firstname,
                        phonenumber: order.customerInfo.phonenumber,
                    },
                    developerID: order.developerID,
                    paymentPlanID: order.paymentDTO.paymentplanid,
                    planID: order.planID,
                    projectID: order.projectID,
                    questions: order?.questions.map(({
                        answer,
                        questionsid,
                    }) => ({
                        answer,
                        name: questions[questionsid - 1]?.question,
                        questionsID: questionsid,
                    })),
                }),
                headers: { "Content-Type": "application/json" },
                method: "PUT",
            },
        ).then((response) => response.json()).then((response) => {
            setLoading(false);

            setTargetUpdatedItem({
                id: "",
                type: "",
            });

            setOrder(response);
        })["catch"](() => {
            setLoading(false);

            if (type === "addon" && !isRemoved) document.querySelector(`#addon_input_${id}`).value = oldValue; // eslint-disable-line

            setResponseMsg({
                text: "Failed to update your Order, please try again later!",
                type: "error",
            });
        });
    };

    const confirmOrderHandler = async () => {
        setConfirmResponseMsg({
            text: "",
            type: null,
        });

        setConfirmLoading(true);

        fetch(
            `${backendUrl}Booking/${order.bookingID}/confirm`,
            {
                headers: { "Content-Type": "application/json" },
                method: "PUT",
            },
        ).then((response) => response.json()).then(() => {
            setConfirmLoading(false);

            if (isActive) resetAll();

            setOrderConfirmed(true);
        })["catch"](() => {
            setConfirmLoading(false);

            setConfirmResponseMsg({
                text: "Failed to confirm your Order, please try again later!",
                type: "error",
            });
        });
    };

    useEffect(
        () => {
            if (!plan.id) localStorage.removeItem("unitAreaId"); // eslint-disable-line

            setMode("edit");

            setIsActive(order.apartmentType === 0);

            setBookingId(order.bookingID);

            setAddons(otherAddons.length > 0 ? otherAddons.map(({
                addonID,
                addonName,
                addongroup,
                price,
                quantity,
                unitormeter,
            }) => ({
                group: addongroup,
                id: addonID,
                name: addonName,
                price,
                quantity,
                unitOrMeter: unitormeter === 0 ? "Unit" : "Meter",
            })) : []);

            setAirConditioningAddons(airConditioningAddons.length > 0 ? airConditioningAddons.map(({
                addonID,
                addonName,
                addongroup,
                price,
                quantity,
            }) => ({
                group: addongroup,
                id: addonID,
                power: addonName,
                price,
                quantity,
            })) : []);

            setAddonsPerRequest(order.addonPerRequests.length > 0 ? order.addonPerRequests.map(({
                addonPerRequestID,
                addonPerRequestName,
            }) => ({
                id: addonPerRequestID,
                name: addonPerRequestName,
            })) : []);

            setAutomation(order.automationID ? { id: order.automationID } : {
                id: "",
                name: "",
            });

            setPlan({ id: order.planID });

            setDeveloper({ id: order.developerID });

            setProject({ id: order.projectID });

            setUnitArea({
                id: order.newApartmentID,
                space: order.apartmentSpace,
            });

            setQuestions(order.questions.reduce(
                (acc, question) => {
                    acc[question.questionsid] = {
                        answer: question.answer,
                        question: questions[question.questionsid - 1]?.question,
                    };
                    return acc;
                },
                {},
            ));

            setInfo({
                email: order.customerInfo.email,
                name: order.customerInfo.firstname,
                paymentPlan: {
                    id: order.paymentDTO.paymentplanid,
                    installmentMonths: order.paymentDTO.numberofinstallmentmonths,
                    name: order.paymentDTO.paymentplanname,
                },
                phoneNumber: order.customerInfo.phonenumber,
            });
        },
        [order], // eslint-disable-line
    );

    return orderConfirmed ? <OrderConfirmed /> : (
        <div className="container mx-auto pt-[40px] md:pt-[80px] pb-[100px] md:pb-[200px]">
            <div className="flex flex-wrap gap-2 justify-between border border-gray-300 rounded-3xl p-2 max-w-[996px] mx-auto mb-[50px] md:mb-[100px]">
                <Link
                    className="text-[22px] lg:text-[32px] font-medium py-2 md:py-4 text-black bg-primary flex gap-2 items-center justify-center rounded-2xl w-full lg:w-[49%]"
                    href={isActive ? "/locate-your-home" : "/build-your-kit"}
                    prefetch={false}
                >
                    Edit Addons
                    <Pencil size={30} />
                </Link>
                <Link
                    className="text-[22px] lg:text-[32px] font-medium py-2 md:py-4 text-black bg-primary flex gap-2 items-center justify-center rounded-2xl w-full lg:w-[49%]"
                    href="/checkout"
                    prefetch={false}
                >
                    Edit Info & Payment Method
                    <Pencil size={30} />
                </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-6">
                <div className="col-span-1 lg:col-span-8 relative">
                    <div className="absolute top-0 left-0 bg-primary rounded-2xl h-[330px] min-w-full lg:min-w-[592px] p-3 md:p-6 pt-1 md:pt-3">
                        <div className="relative z-50">
                            <h1 className="font-bold text-[40px] md:text-[64px] mb-0">Your Cart</h1>
                            <h5 className="font-normal text-2xl md:text-4xl">
                                Your Have
                                {" "}
                                {1 + (order.addons ? order.addons.length : 0) + (order.addonPerRequests ? order.addonPerRequests.length : 0) + (order.automationID ? 1 : 0)}
                                {" "}
                                Items
                            </h5>
                        </div>
                    </div>
                    <div className="mt-[110px] md:mt-[180px] flex justify-end">
                        <div className="max-w-[761px]">
                            <div className="overflow-visible relative">
                                <table className="table-fixed w-full rounded-t-xl overflow-hidden">
                                    <thead>
                                        <tr className="bg-white h-20">
                                            <th
                                                className="px-2 md:px-4"
                                                colSpan="3"
                                            />
                                        </tr>
                                    </thead>
                                    <thead>
                                        <tr className="bg-primary h-20">
                                            <th
                                                className="font-semibold text-[22px] md:text-[32px] text-left px-2 md:px-4"
                                                colSpan="3"
                                            >
                                                Foundation
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {plans[order.planID].foundation.map(({ plandetailsname }, index) => (
                                            <tr
                                                className={index % 2 === 0 ? "bg-[#E3E4E4] h-20 w-full" : "bg-white h-20 w-full"}
                                                key={index} // eslint-disable-line
                                            >
                                                <td
                                                    className="font-normal text-lg md:text-2xl px-2 md:px-4"
                                                    colSpan={3}
                                                >
                                                    <h5 className="max-w-[220px] sm:max-w-[320px] md:max-w-[484px] break-words block">{plandetailsname}</h5>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <thead>
                                        <tr className="bg-primary h-20">
                                            <th
                                                className="font-semibold text-[22px] md:text-[32px] text-left px-2 md:px-4"
                                                colSpan="3"
                                            >
                                                Decoration
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {plans[order.planID].decoration.map(({ plandetailsname }, index) => (
                                            <tr
                                                className={index % 2 === 0 ? "bg-[#E3E4E4] h-20 w-full" : "bg-white h-20 w-full"}
                                                key={index} // eslint-disable-line
                                            >
                                                <td
                                                    className="font-normal text-lg md:text-2xl px-2 md:px-4"
                                                    colSpan={3}
                                                >
                                                    <h5 className="max-w-[220px] sm:max-w-[320px] md:max-w-[484px] break-words block">{plandetailsname}</h5>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="flex flex-wrap gap-4 md:gap-8 justify-end absolute -top-0 right-0 w-full h-full">
                                    <div className="relative w-[140px] sm:w-[209px] h-full border border-black rounded-2xl text-center pt-8 px-4 md:px-8 hover:bg-primary transition-all duration-1000">
                                        <h5 className="font-semibold text-lg md:text-2xl uppercase">{plans[order.planID].details.planname}</h5>
                                        <div className="flex flex-col justify-center items-center relative top-24">
                                            {plans[order.planID].foundation.map(({
                                                description,
                                                stars,
                                            }, i) => (
                                                <div
                                                    className="flex items-center gap-1 h-20"
                                                    key={i} // eslint-disable-line
                                                >
                                                    {description ? <h6 className="font-medium text-xs md:text-base">{description}</h6> : Array.from(
                                                        { length: stars },
                                                        (_, index) => index + 1,
                                                    ).map((_, indx) => (
                                                        <Check
                                                            className="rounded-full border border-black p-1 md:p-2"
                                                            key={indx} // eslint-disable-line
                                                            size={35}
                                                        />
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex flex-col justify-center items-center relative top-44">
                                            {plans[order.planID].decoration.map(({
                                                description,
                                                stars,
                                            }, i) => (
                                                <div
                                                    className="flex items-center gap-1 h-20"
                                                    key={i} // eslint-disable-line
                                                >
                                                    {description ? <h6 className="font-medium text-xs md:text-base">{description}</h6> : Array.from(
                                                        { length: stars },
                                                        (_, index) => index + 1,
                                                    ).map((_, indx) => (
                                                        <Check
                                                            className="rounded-full border border-black p-1 md:p-2"
                                                            key={indx} // eslint-disable-line
                                                            size={35}
                                                        />
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end mt-5 md:mt-10">
                                <span className="font-medium text-xs md:text-base">
                                    {order.totalPlanPrice.toLocaleString()}
                                    {" "}
                                    EGP
                                </span>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-2 md:mt-4" />
                    {((order?.addons && order?.addons?.length > 0) || (order?.addonPerRequests && order?.addonPerRequests?.length > 0)) && (
                        <div className="relative mt-[48px] md:mt-[96px]">
                            <div className="absolute top-0 left-0 bg-primary rounded-2xl h-[192px] min-w-full lg:min-w-[592px] p-3 md:p-6">
                                <div className="relative z-50">
                                    <h2 className="font-semibold text-2xl md:text-4xl">Add-Ons</h2>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="bg-white border border-gray-300 lg:border-none flex justify-center xl:justify-start w-full xl:min-w-[761px] p-2 md:p-4 rounded-2xl mt-[60px] md:mt-[96px] relative z-50">
                                    <div className="w-full xl:min-w-[761px] ">
                                        {otherAddons.length > 0 && otherAddons.map(({
                                            addonID,
                                            addonName,
                                            description,
                                            price,
                                            quantity,
                                            unitormeter,
                                        }) => (
                                            <div
                                                className="w-full xl:min-w-[638px]"
                                                key={addonID}
                                            >
                                                <div className="flex items-center min-h-[96px] w-full p-2 md:p-4 border rounded-2xl">
                                                    <div className="flex flex-wrap gap-2 justify-between items-center w-full">
                                                        <h6 className="font-medium text-sm md:text-xl">{addonName}</h6>
                                                        <p className="font-normal text-xs md:text-base xl:max-w-[300px] text-center">{description}</p>
                                                    </div>
                                                </div>
                                                <div className="w-full py-2 md:py-4 mt-3 md:mt-6">
                                                    {unitormeter === 1 ? (
                                                        <>
                                                            <div className="flex flex-wrap gap-2 justify-between items-center">
                                                                <div className="flex flex-nowrap items-center gap-2">
                                                                    <Button
                                                                        className="font-medium text-xs md:text-base border border-gray-300 w-[106px] h-[33px] rounded-lg flex gap-1 items-center justify-center bg-transparent text-black hover:bg-primary hover:text-black transition-all duration-500"
                                                                        disabled={loading}
                                                                        onClick={() => updateCartHandler(
                                                                            "addon",
                                                                            addonID,
                                                                            0,
                                                                            true,
                                                                        )}
                                                                    >
                                                                        <Trash />
                                                                        Remove
                                                                    </Button>
                                                                    {targetUpdatedItem.id === addonID && targetUpdatedItem.type === "addon" && loading && (
                                                                        <Spinner
                                                                            className="!h-8 !w-8"
                                                                            fill="fill-black"
                                                                        />
                                                                    )}
                                                                </div>
                                                                <span className="font-medium text-xs md:text-base">
                                                                    {price.toLocaleString()}
                                                                    {" "}
                                                                    EGP
                                                                </span>
                                                            </div>
                                                            {responseMsg.text && targetUpdatedItem.id === addonID && targetUpdatedItem.type === "addon" && !loading && (
                                                                <span className={`font-bold text-xs md:text-base ${responseMsg.type === "error" ? "text-red-500" : "text-green-500"} block w-full mt-2 md:mt-4`}>{responseMsg.text}</span>
                                                            )}
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div className="flex flex-wrap gap-2 justify-between items-center">
                                                                <div className="flex gap-2">
                                                                    <Input
                                                                        className="w-[57px] h-[33px] rounded-lg border border-gray-300"
                                                                        defaultValue={quantity}
                                                                        disabled={loading}
                                                                        id={`addon_input_${addonID}`}
                                                                        type="number"
                                                                        onChange={(e) => {
                                                                            const { value } = e.target;

                                                                            if (value.startsWith("0")) {
                                                                                e.target.value = value.replace(
                                                                                    /^0+/,
                                                                                    "",
                                                                                );
                                                                            }

                                                                            if (value < 1) return;

                                                                            updateCartHandler(
                                                                                "addon",
                                                                                addonID,
                                                                                parseInt(value),
                                                                                false,
                                                                                quantity,
                                                                            );
                                                                        }}
                                                                        onKeyDown={(e) => {
                                                                            if (e.key === "-" || e.key === "e") e.preventDefault();
                                                                        }}
                                                                    />
                                                                    <div className="flex flex-nowrap items-center gap-2">
                                                                        <Button
                                                                            className="font-medium text-xs md:text-base border border-gray-300 w-[106px] h-[33px] rounded-lg flex gap-1 items-center justify-center bg-transparent text-black hover:bg-primary hover:text-black transition-all duration-500"
                                                                            disabled={loading}
                                                                            onClick={() => updateCartHandler(
                                                                                "addon",
                                                                                addonID,
                                                                                0,
                                                                                true,
                                                                            )}
                                                                        >
                                                                            <Trash />
                                                                            Remove
                                                                        </Button>
                                                                        {targetUpdatedItem.id === addonID && targetUpdatedItem.type === "addon" && loading && (
                                                                            <Spinner
                                                                                className="!h-8 !w-8"
                                                                                fill="fill-black"
                                                                            />
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <span className="font-medium text-xs md:text-base">
                                                                    {price.toLocaleString()}
                                                                    {" "}
                                                                    EGP
                                                                </span>
                                                            </div>
                                                            {responseMsg.text && targetUpdatedItem.id === addonID && targetUpdatedItem.type === "addon" && !loading && (
                                                                <span className={`font-bold text-xs md:text-base ${responseMsg.type === "error" ? "text-red-500" : "text-green-500"} block w-full mt-2 md:mt-4`}>{responseMsg.text}</span>
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                                <hr className="mb-4 md:mb-8" />
                                            </div>
                                        ))}
                                        {airConditioningAddons.length > 0 && (
                                            <div className="w-full xl:min-w-[638px]">
                                                <div>
                                                    <div className="flex items-center min-h-[96px] w-full p-2 md:p-4 border rounded-2xl">
                                                        <div className="flex flex-wrap gap-2 justify-between items-center w-full">
                                                            <h6 className="font-medium text-sm md:text-xl">Air Conditions</h6>
                                                            <p className="font-normal text-xs md:text-base xl:max-w-[300px] text-center">{airConditioningAddons[0]?.description}</p>
                                                        </div>
                                                    </div>
                                                    <div className="w-full py-2 md:py-4 mt-3 md:mt-6">
                                                        <div className="flex flex-wrap gap-2 justify-between items-center">
                                                            <div className="flex flex-wrap gap-2 items-center lg:w-[78%]">
                                                                {airConditioningAddons.map(({
                                                                    addonID,
                                                                    addonName,
                                                                    quantity,
                                                                }) => (
                                                                    <div
                                                                        className="flex flex-wrap gap-2"
                                                                        key={addonID}
                                                                    >
                                                                        <div>
                                                                            <span className="font-medium text-xs md:text-base border border-gray-300 min-w-[112px] rounded-lg flex gap-2 items-center justify-between">
                                                                                <span className="ml-1">{addonName}</span>
                                                                                <Input
                                                                                    className="w-[57px] h-[33px] rounded-lg border border-gray-300"
                                                                                    defaultValue={quantity}
                                                                                    disabled={loading}
                                                                                    id={`addon_input_${addonID}`}
                                                                                    type="number"
                                                                                    onChange={(e) => {
                                                                                        const { value } = e.target;

                                                                                        if (value.startsWith("0")) {
                                                                                            e.target.value = value.replace(
                                                                                                /^0+/,
                                                                                                "",
                                                                                            );
                                                                                        }

                                                                                        if (value < 1) return;

                                                                                        updateCartHandler(
                                                                                            "airConditioningAddon",
                                                                                            addonID,
                                                                                            parseInt(value),
                                                                                            false,
                                                                                            quantity,
                                                                                        );
                                                                                    }}
                                                                                    onKeyDown={(e) => {
                                                                                        if (e.key === "-" || e.key === "e") e.preventDefault();
                                                                                    }}
                                                                                />
                                                                            </span>
                                                                        </div>
                                                                        <Button
                                                                            className="font-medium text-xs md:text-base border border-gray-300 w-[106px] h-[33px] rounded-lg flex gap-1 items-center justify-center bg-transparent text-black hover:bg-primary hover:text-black transition-all duration-500"
                                                                            disabled={loading}
                                                                            onClick={() => updateCartHandler(
                                                                                "airConditioningAddon",
                                                                                addonID,
                                                                                0,
                                                                                true,
                                                                            )}
                                                                        >
                                                                            <Trash />
                                                                            Remove
                                                                        </Button>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <div className="flex flex-col justify-end items-center lg:w-[18%]">
                                                                <span className="font-medium text-xs md:text-base">
                                                                    {airConditioningAddons.reduce(
                                                                        (sum, item) => sum + (item.price * item.quantity),
                                                                        0,
                                                                    ).toLocaleString()}
                                                                    {" "}
                                                                    EGP
                                                                </span>
                                                                {targetUpdatedItem.type === "airConditioningAddon" && loading && (
                                                                    <Spinner
                                                                        className="!h-8 !w-8"
                                                                        fill="fill-black"
                                                                    />
                                                                )}
                                                            </div>
                                                        </div>
                                                        {responseMsg.text && targetUpdatedItem.type === "airConditioningAddon" && !loading && (
                                                            <span className={`font-bold text-xs md:text-base ${responseMsg.type === "error" ? "text-red-500" : "text-green-500"} block w-full mt-2 md:mt-4`}>{responseMsg.text}</span>
                                                        )}
                                                    </div>
                                                </div>
                                                <hr className="mb-4 md:mb-8" />
                                            </div>

                                        )}
                                        {order?.addonPerRequests.length > 0 && order?.addonPerRequests.map(({
                                            addonPerRequestDescription,
                                            addonPerRequestID,
                                            addonPerRequestName,
                                        }) => (
                                            <div
                                                className="w-full xl:min-w-[638px]"
                                                key={addonPerRequestID}
                                            >
                                                <div className="flex items-center min-h-[96px] p-2 md:p-4 border rounded-2xl">
                                                    <div className="flex flex-wrap gap-2 justify-between items-center w-full">
                                                        <h6 className="font-medium text-sm md:text-xl">{addonPerRequestName}</h6>
                                                        <p className="font-normal text-xs md:text-base xl:max-w-[300px] text-center">{addonPerRequestDescription}</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-nowrap items-center gap-2 w-full py-2 md:py-4 mt-3 md:mt-6">
                                                    <Button
                                                        className="font-medium text-xs md:text-base border border-gray-300 w-[106px] h-[33px] rounded-lg flex gap-1 items-center justify-center bg-transparent text-black hover:bg-primary hover:text-black transition-all duration-500"
                                                        disabled={loading}
                                                        onClick={() => updateCartHandler(
                                                            "addonPerRequest",
                                                            addonPerRequestID,
                                                            0,
                                                            true,
                                                        )}
                                                    >
                                                        <Trash />
                                                        Remove
                                                    </Button>
                                                    {targetUpdatedItem.id === addonPerRequestID && targetUpdatedItem.type === "addonPerRequest" && loading && (
                                                        <Spinner
                                                            className="!h-8 !w-8"
                                                            fill="fill-black"
                                                        />
                                                    )}
                                                </div>
                                                {responseMsg.text && targetUpdatedItem.id === addonPerRequestID && targetUpdatedItem.type === "addonPerRequest" && !loading && (
                                                    <span className={`font-bold text-xs md:text-base ${responseMsg.type === "error" ? "text-red-500" : "text-green-500"} block w-full mt-2 md:mt-4`}>{responseMsg.text}</span>
                                                )}
                                                <hr className="mb-4 md:mb-8" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {order.automationID && (
                        <div className="relative mt-[48px] md:mt-[96px]">
                            <div className="absolute top-0 left-0 bg-primary rounded-2xl h-[192px] min-w-full lg:min-w-[592px] p-3 md:p-6">
                                <div className="relative z-50">
                                    <h2 className="font-semibold text-2xl md:text-4xl">Automation Items</h2>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="max-w-[761px] mt-[60px] md:mt-[106px] ">
                                    <div className="justify-center relative">
                                        <div className="overflow-visible bg-white rounded-2xl pt-[48px] md:pt-[96px]">
                                            <table className="table-fixed w-full relative">
                                                <tbody>
                                                    {automation[order.automationID].map(({
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
                                            </table>
                                            <div className="flex flex-wrap gap-2 md:gap-4 justify-end absolute top-0 md:top-4 w-full h-full">
                                                <div className="relative w-[140px] sm:w-[161px] h-[100%] border border-gray-300 rounded-2xl text-center md:pt-4 px-2 md:px-4 hover:bg-primary transition-all duration-1000">
                                                    <div className="relative top-2 md:top-6">
                                                        <h5 className="font-semibold text-lg md:text-2xl relative md:bottom-4">{automation[order.automationID] === 1 ? "Basic" : "Advanced"}</h5>
                                                        <div className="flex flex-col justify-center items-center relative top-2">
                                                            {automation[order.automationID].map(({ description }, indx) => (
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-nowrap items-center gap-2 w-full py-2 md:py-4 mt-3 md:mt-6">
                                        <Button
                                            className="font-medium text-xs md:text-base border border-gray-300 w-[106px] h-[33px] rounded-lg flex gap-1 items-center justify-center bg-transparent text-black hover:bg-primary hover:text-black transition-all duration-500"
                                            disabled={loading}
                                            onClick={() => updateCartHandler(
                                                "automation",
                                                order.automationID,
                                                0,
                                                true,
                                            )}
                                        >
                                            <Trash />
                                            Remove
                                        </Button>
                                        {targetUpdatedItem.type === "automation" && loading && (
                                            <Spinner
                                                className="!h-8 !w-8"
                                                fill="fill-black"
                                            />
                                        )}
                                    </div>
                                    {responseMsg.text && targetUpdatedItem.type === "automation" && !loading && (
                                        <span className={`font-bold text-xs md:text-base ${responseMsg.type === "error" ? "text-red-500" : "text-green-500"} block w-full mt-2 md:mt-4`}>{responseMsg.text}</span>
                                    )}
                                    <hr />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="col-span-1 lg:col-span-4 relative">
                    <div className="rounded-2xl border border-gray-300 p-2 md:p-4 lg:sticky top-2">
                        <h5 className="font-semibold text-[22px] md:text-[32px]">Order Summary</h5>
                        <div className="mt-4 md:mt-8">
                            <div className="flex flex-wrap items-center gap-2 justify-between">
                                <span className="font-normal text-lg md:text-2xl">{plans[order.planID].details.planname}</span>
                                <span className="font-normal text-xs md:text-base">{`${order.totalPlanPrice.toLocaleString()} EGP`}</span>
                            </div>
                            <hr className="my-2 md:my-4" />
                            {(order?.addons?.length > 0 || order?.addonPerRequests?.length > 0) && (
                                <div>
                                    <h6 className="font-semibold text-lg md:text-2xl mb-2 md:mb-4">Add-Ons</h6>
                                    {airConditioningAddons?.length > 0 && (
                                        <ul className="p-0 m-0 flex flex-col gap-2 md:gap-4">
                                            {airConditioningAddons.map(({
                                                addonID,
                                                addonName,
                                                price,
                                            }) => (
                                                <li
                                                    className="flex gap-2 justify-between flex-wrap items-center border-b border-b-gray-300 pb-1"
                                                    key={addonID}
                                                >
                                                    <span className="font-normal text-lg md:text-2xl">{`Air Condition - ${addonName}`}</span>
                                                    <span className="font-normal text-xs md:text-base">{`${price.toLocaleString()} EGP`}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {otherAddons?.length > 0 && (
                                        <ul className="p-0 m-0 flex flex-col gap-2 md:gap-4 mt-2 md:mt-4">
                                            {otherAddons.map(({
                                                addonID,
                                                addonName,
                                                price,
                                            }) => (
                                                <li
                                                    className="flex gap-2 justify-between flex-wrap items-center border-b border-b-gray-300 pb-1"
                                                    key={addonID}
                                                >
                                                    <span className="font-normal text-lg md:text-2xl">{addonName}</span>
                                                    <span className="font-normal text-xs md:text-base">{`${price.toLocaleString()} EGP`}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {order?.addonPerRequests?.length > 0 && (
                                        <ul className="p-0 m-0 flex flex-col gap-2 md:gap-4 mt-2 md:mt-4">
                                            {order?.addonPerRequests.map(({
                                                addonPerRequestID,
                                                addonPerRequestName,
                                            }) => (
                                                <li
                                                    className="flex justify-between border-b border-b-gray-300 pb-1"
                                                    key={addonPerRequestID}
                                                >
                                                    <span className="font-normal text-lg md:text-2xl">{addonPerRequestName}</span>
                                                    <span className="font-normal text-xs md:text-base border border-gray-300 rounded-xl px-2 w-fit lg:w-[140px] text-center xl:w-fit h-fit">Upon Request</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                            {order.automationID && (
                                <div className="mt-2 md:mt-4">
                                    <h6 className="font-semibold text-lg md:text-2xl">Automation</h6>
                                    <div className="flex justify-between mt-2 md:mt-4">
                                        <span className="font-normal text-lg md:text-2xl">
                                            {order.automationID === 1 ? "Basic" : "Advanced"}
                                            {" "}
                                            Plan
                                        </span>
                                        <span className="font-normal text-xs md:text-base border border-gray-300 rounded-xl px-2 w-fit lg:w-[140px] text-center xl:w-fit h-fit">Upon Request</span>
                                    </div>
                                    <hr className="my-2 md:my-4" />
                                </div>
                            )}
                            <div className="mt-2 md:mt-4">
                                <h6 className="font-semibold text-lg md:text-2xl">Payment Programme</h6>
                                <div className="w-full min-h-[46px] bg-primary px-2 py-2 md:px-4 flex items-center justify-between flex-wrap gap-2 rounded-lg mt-2">
                                    <span className="font-normal text-base md:text-xl flex flex-wrap gap-2 md:gap-3">
                                        <span>{`Program ${order.paymentDTO.paymentplanname === "Oda" ? "A" : order.paymentDTO.paymentplanname === "SEVEN" ? "B" : "C"}`}</span> {/* eslint-disable-line */}
                                        <span className="font-medium">{order.paymentDTO.paymentplanname}</span>
                                    </span>
                                    <span className="font-normal text-base md:text-xl">{`${order.paymentDTO.numberofinstallmentmonths} Months`}</span>
                                </div>
                                <ul className="p-0 m-0 mt-0 md:mt-4 flex flex-col gap-2 md:gap-4">
                                    <li className="flex gap-2 justify-between flex-wrap items-center border-b border-b-gray-300 pb-1">
                                        <span className="font-normal text-base md:text-xl">
                                            Admin Fees:
                                            {" "}
                                            {order.paymentDTO.adminfees ? order.paymentDTO.adminfeespercentage : 0}
                                            %
                                        </span>
                                        <span className="font-normal text-xs md:text-base">
                                            {order.paymentDTO.adminfees ? order.paymentDTO?.adminfeesValue?.toLocaleString() : 0?.toLocaleString()}
                                            {" "}
                                            EGP
                                        </span>
                                    </li>
                                    <li className="flex gap-2 justify-between flex-wrap items-center border-b border-b-gray-300 pb-1">
                                        <span className="font-normal text-base md:text-xl">
                                            Interest Rate:
                                            {" "}
                                            {order.paymentDTO.interestrate ? order.paymentDTO.interestrateperyearpercentage : 0}
                                            %
                                        </span>
                                        <span className="font-normal text-xs md:text-base">
                                            {order.paymentDTO.interestrate ? order.paymentDTO?.interestrateValue?.toLocaleString() : 0?.toLocaleString()}
                                            {" "}
                                            EGP
                                        </span>
                                    </li>
                                    <li className="flex gap-2 justify-between flex-wrap items-center border-b border-b-gray-300 pb-1">
                                        <span className="font-normal text-base md:text-xl">
                                            Down Payment:
                                            {" "}
                                            {order.paymentDTO.downpayment ? "1st " : ""}
                                            {order.paymentDTO.downpayment ? order.paymentDTO.downpaymentpercentage : 0}
                                            %
                                        </span>
                                        <span className="font-normal text-xs md:text-base">
                                            {order.paymentDTO.downpayment ? order.paymentDTO?.dpValue?.toLocaleString() : 0?.toLocaleString()}
                                            {" "}
                                            EGP
                                        </span>
                                    </li>
                                    {order.paymentDTO.equalPayment ? (
                                        <li className="flex gap-2 justify-between flex-wrap items-center border-b border-b-gray-300 pb-1">
                                            <span className="font-normal text-base md:text-xl">
                                                Installments:
                                                {" "}
                                                {order.paymentDTO.installmentDTO[0]?.installmentpercentage}
                                                %
                                            </span>
                                            <span className="font-normal text-xs md:text-base">
                                                {order.paymentDTO.installmentDTO[0]?.installmentvalue.toLocaleString()}
                                                {" "}
                                                EGP/ Month
                                            </span>
                                        </li>
                                    ) : (
                                        <ul className="p-0 m-0 flex flex-col gap-2 md:gap-4">
                                            {order.paymentDTO.installmentDTO.map(({
                                                installmentmonth,
                                                installmentpercentage,
                                                installmentvalue,
                                            }) => (
                                                <li
                                                    className="flex gap-2 justify-between flex-wrap items-center border-b border-b-gray-300 pb-1"
                                                    key={installmentmonth} // eslint-disable-line
                                                >
                                                    <span className="font-normal text-base md:text-xl">
                                                        {installmentmonth === 1 ? "Installments:" : ""}
                                                        {" "}
                                                        {installmentmonth + (suffixes[((installmentmonth % 100) - 20) % 10] || suffixes[installmentmonth % 100] || suffixes[0])}
                                                        {" "}
                                                        {installmentpercentage}
                                                        %
                                                    </span>
                                                    <span className="font-normal text-xs md:text-base">
                                                        {installmentvalue.toLocaleString()}
                                                        {" "}
                                                        EGP
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </ul>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 justify-between mt-2 md:mt-4">
                                <h6 className="font-semibold text-[22px] md:text-[32px]">Sub Total</h6>
                                <span className="font-normal text-xs md:text-base">{`${order.totalAmount.toLocaleString()} EGP`}</span>
                            </div>
                        </div>
                        <div className="mt-5 md:mt-10 flex flex-col gap-2 justify-center">
                            <Button
                                className="font-semibold text-lg md:text-2xl !bg-primary text-black transition-all duration-1000 rounded-[32px] h-[60px] w-full hover:animate-heartBeat"
                                disabled={loading || confirmLoading}
                                onClick={confirmOrderHandler}
                            >
                                {confirmLoading ? <Spinner color="text-black" /> : "Confirm Order"}
                            </Button>
                            {confirmResponseMsg.text && (
                                <span className={`font-bold text-xs md:text-base ${confirmResponseMsg.type === "error" ? "text-red-500" : "text-green-500"} block w-full md:w-[371px] text-center`}>{responseMsg.text}</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
