"use client";

import { motion, useInView } from "framer-motion";
import { Check, Plus } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

import { handleNumberInputLogic } from "@/app/lib/utils";
import { useBuildYourKitStore } from "@/app/store/build-your-kit";
import { Input } from "@/app/ui/input";

export default function BuildYourKitAddons({
    addons,
    addonsPerRequest,
    airConditioningAddons,
}) {
    const {
        addons: selectedAddons,
        addonsPerRequest: selectedAddonsPerRequest,
        airConditioningAddons: selectedAirConditioningAddons,
        removeAddon,
        removeAddonPerRequest,
        removeAirConditioningAddon,
        resetAirConditioningAddons,
        setAddon,
        setAddonPerRequest,
        setAddonQuantity,
        setAirConditioningAddon,
        setAirConditioningAddonQuantity,
    } = useBuildYourKitStore();

    const ref1 = useRef(null);

    const ref2 = useRef(null);

    const ref3 = useRef(null);

    const ref4 = useRef(null);

    const ref5 = useRef(null);

    const isInView1 = useInView(
        ref1,
        { once: true },
    );

    const isInView2 = useInView(
        ref2,
        { once: true },
    );

    const isInView3 = useInView(
        ref3,
        { once: true },
    );

    const isInView4 = useInView(
        ref4,
        { once: true },
    );

    const isInView5 = useInView(
        ref5,
        { once: true },
    );

    const checkBoilerAndHeaterAvailability = (addonGroup) => {
        if (addonGroup === "Boilers") return !!selectedAddons.find(({ group }) => group === "Heaters");

        if (addonGroup === "Heaters") return !!selectedAddons.find(({ group }) => group === "Boilers");
    };

    return (
        <div className="container mx-auto pb-[40px] md:pb-[80px] mb-[60px] md:mb-[120px] overflow-hidden relative rounded-2xl">
            <Image
                alt="plans_bg"
                layout="fill"
                loading="lazy"
                objectFit="cover"
                src="/images/pages/build-your-kit/addons_bg.webp"
            />
            <div>
                {(addons.length > 0 || airConditioningAddons.length > 0) && (
                    <div
                        className="relative"
                        ref={ref1}
                    >
                        {addons.length > 0 && (
                            <div>
                                <motion.div
                                    animate={isInView1 && { x: 0 }}
                                    className="absolute top-0 left-0 rounded-2xl h-[438px] w-full"
                                    initial={{ x: "-100vw" }}
                                    transition={{
                                        damping: 10,
                                        duration: 2,
                                        ease: "easeIn",
                                        stiffness: 40,
                                        type: "spring",
                                    }}
                                >
                                    <div className="flex items-center pl-5 md:pl-10">
                                        <div className="relative z-50 mt-10 md:mt-20">
                                            <h2 className="font-bold text-3xl md:text-5xl mb-5 md:mb-10 !uppercase">Add-ons</h2>
                                            <p className="font-medium text-base md:text-xl !leading-loose">
                                                Foundation to Automation: Off-the-Shelf
                                                {" "}
                                                <br className="hidden lg:block" />
                                                Finishing Packages Built Just For You
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    animate={isInView1 && { x: 0 }}
                                    className="absolute top-[500px] left-0 rounded-2xl h-[301px] hidden sm:block"
                                    initial={{ x: "-100vw" }}
                                    transition={{
                                        damping: 10,
                                        duration: 2,
                                        ease: "easeIn",
                                        stiffness: 40,
                                        type: "spring",
                                    }}
                                >
                                    <Image
                                        alt="addon_per_request"
                                        height={301}
                                        loading="lazy"
                                        src="/images/pages/build-your-kit/addon.webp"
                                        width={819}
                                    />
                                </motion.div>
                                <div className="relative w-full overflow-visible h-fit pt-[200px] sm:pt-[170px] md:pt-[300px]">
                                    <motion.div
                                        animate={isInView1 && { x: 0 }}
                                        className="flex justify-end"
                                        initial={{ x: "100vw" }}
                                        transition={{
                                            damping: 10,
                                            duration: 2,
                                            ease: "easeIn",
                                            stiffness: 40,
                                            type: "spring",
                                        }}
                                    >
                                        <div className={`min-h-[269px] w-full max-w-[931px] py-4 md:py-[25] xl:py-[33px] px-3 md:px-4 xl:px-6 flex flex-wrap lg:flex-nowrap lg:gap-2 justify-between shadow-xl border border-gray-300 rounded-2xl ${selectedAddons.find(({ id }) => id === addons[0]?.addonid) ? "bg-primary" : "bg-white"}`}>
                                            <div className="flex items-center">
                                                <div className="flex-1">
                                                    {selectedAddons.find(({ id }) => id === addons[0]?.addonid) ? (
                                                        <Check
                                                            className="opacity-70 cursor-pointer w-[30px] h-[30px] md:w-[60px] md:h-[60px]"
                                                            size={60}
                                                            onClick={() => removeAddon(addons[0]?.addonid)}
                                                        />
                                                    ) : (
                                                        <Plus
                                                            className={`${!checkBoilerAndHeaterAvailability(addons[0]?.addongroup) ? "opacity-70 cursor-pointer" : "opacity-50 cursor-not-allowed"} w-[30px] h-[30px] md:w-[60px] md:h-[60px]`}
                                                            size={60}
                                                            onClick={() => {
                                                                if (!checkBoilerAndHeaterAvailability(addons[0]?.addongroup)) {
                                                                    setAddon({
                                                                        group: addons[0]?.addongroup,
                                                                        id: addons[0]?.addonid,
                                                                        name: addons[0]?.addonname,
                                                                        price: addons[0]?.price,
                                                                        ...addons[0]?.unitormeter === 0 && { quantity: 1 },
                                                                        unitOrMeter: addons[0]?.unitormeter === 0 ? "Unit" : "Meter",
                                                                    });
                                                                }
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                                <div className="lg:max-w-[370px]">
                                                    <h6 className="font-medium text-[22px] md:text-[32px] mb-1 md:mb-2">{addons[0]?.addonname}</h6>
                                                    <p className="font-medium text-[22px] md:text-[32px] opacity-55">{addons[0]?.description}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center">
                                                {addons[0]?.unitormeter === 1 ? (
                                                    <span className="font-normal text-base md:text-xl">
                                                        +
                                                        {addons[0]?.price?.toLocaleString()}
                                                        {" "}
                                                        EGP \m2
                                                    </span>
                                                ) : (
                                                    <span className="font-normal text-base md:text-xl flex gap-2 items-center">
                                                        +
                                                        {addons[0]?.price?.toLocaleString()}
                                                        {" "}
                                                        EGP
                                                        {addons[0]?.addongroup !== "Boilers" && (
                                                            <Input
                                                                className="w-[57px] h-[33px] rounded-lg border border-gray-300"
                                                                disabled={addons[0]?.addongroup === "Boilers" || (addons[0]?.addongroup === "Heaters" && checkBoilerAndHeaterAvailability(addons[0]?.addongroup))}
                                                                inputMode="numeric"
                                                                pattern="[0-9]*"
                                                                type="number"
                                                                value={selectedAddons.find(({ id }) => id === addons[0]?.addonid)?.quantity || 0}
                                                                onChange={(e) => {
                                                                    const { value } = e.target;

                                                                    if (!handleNumberInputLogic(e)) return;

                                                                    if (value === "") {
                                                                        removeAddon(addons[0]?.addonid);

                                                                        setTimeout(
                                                                            () => {
                                                                                e.target.value = "";
                                                                            },
                                                                            [50],
                                                                        );

                                                                        return;
                                                                    }

                                                                    if (!selectedAddons.find(({ id }) => id === addons[0]?.addonid)) {
                                                                        setAddon({
                                                                            group: addons[0]?.addongroup,
                                                                            id: addons[0]?.addonid,
                                                                            name: addons[0]?.addonname,
                                                                            price: addons[0].price * parseInt(value),
                                                                            quantity: parseInt(value),
                                                                            unitOrMeter: "Unit",
                                                                        });
                                                                    } else {
                                                                        setAddonQuantity(
                                                                            parseInt(value),
                                                                            addons[0].price * parseInt(value),
                                                                            addons[0]?.addonid,
                                                                        );
                                                                    }
                                                                }}
                                                                onKeyDown={(e) => {
                                                                    if (e.key === "-" || e.key === "e") e.preventDefault();
                                                                }}
                                                            />
                                                        )}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                    <div
                                        className="grid grid-cols-1 lg:grid-cols-12 justify-center items-center gap-4 md:gap-8 mt-[20px] sm:mt-[356px] md:mt-[280px]"
                                        ref={ref2}
                                    >
                                        {addons.slice(1).map(({
                                            addongroup,
                                            addonid,
                                            addonname,
                                            description,
                                            price,
                                            unitormeter,
                                        }, index) => (
                                            <motion.div
                                                animate={isInView2 && { x: 0 }}
                                                className="col-span-1 lg:col-span-6 flex justify-center"
                                                initial={{ x: index % 2 === 0 ? "-100vw" : "100vw" }}
                                                key={addonid}
                                                transition={{
                                                    damping: 10,
                                                    duration: 2,
                                                    ease: "easeIn",
                                                    stiffness: 40,
                                                    type: "spring",
                                                }}
                                            >
                                                <div className={`min-h-[185px] w-full max-w-[605px] py-4 md:py-[25] xl:py-[28px] px-3 md:px-4 xl:px-6 flex flex-wrap lg:flex-nowrap lg:gap-2 justify-between border border-gray-300 rounded-2xl ${selectedAddons.find(({ id }) => id === addonid) ? "bg-primary" : "bg-white"}`}>
                                                    <div className="flex items-center">
                                                        {selectedAddons.find(({ id }) => id === addonid) ? (
                                                            <Check
                                                                className="opacity-70 cursor-pointer w-[30px] h-[30px] md:w-[60px] md:h-[60px]"
                                                                size={60}
                                                                onClick={() => removeAddon(addonid)}
                                                            />
                                                        ) : (
                                                            <Plus
                                                                className={`${!checkBoilerAndHeaterAvailability(addongroup) ? "opacity-70 cursor-pointer" : "opacity-50 cursor-not-allowed"} w-[30px] h-[30px] md:w-[60px] md:h-[60px]`}
                                                                size={60}
                                                                onClick={() => {
                                                                    if (!checkBoilerAndHeaterAvailability(addongroup)) {
                                                                        setAddon({
                                                                            group: addongroup,
                                                                            id: addonid,
                                                                            name: addonname,
                                                                            price,
                                                                            ...unitormeter === 0 && { quantity: 1 },
                                                                            unitOrMeter: unitormeter === 0 ? "Unit" : "Meter",
                                                                        });
                                                                    }
                                                                }}
                                                            />
                                                        )}
                                                        <h6 className="font-medium text-[16px] md:text-[20px] lg:max-w-[184px]">{addonname}</h6>
                                                    </div>
                                                    <div className="flex flex-col items-center justify-center lg:max-w-[272px]">
                                                        <p className="font-normal text-xs md:text-base mb-3 md:mb-6 text-center">{description}</p>
                                                        {unitormeter === 1 ? (
                                                            <span className="font-normal text-base md:text-xl">
                                                                +
                                                                {price?.toLocaleString()}
                                                                {" "}
                                                                EGP \m2
                                                            </span>
                                                        ) : (
                                                            <span className="font-normal text-base md:text-xl flex gap-2 items-center">
                                                                +
                                                                {price?.toLocaleString()}
                                                                {" "}
                                                                EGP
                                                                {addongroup !== "Boilers" && (
                                                                    <Input
                                                                        className="w-[57px] h-[33px] rounded-lg border border-gray-300"
                                                                        disabled={addongroup === "Boilers" || (addongroup === "Heaters" && checkBoilerAndHeaterAvailability(addongroup))}
                                                                        inputMode="numeric"
                                                                        pattern="[0-9]*"
                                                                        type="number"
                                                                        value={selectedAddons.find(({ id }) => id === addonid)?.quantity || 0}
                                                                        onChange={(e) => {
                                                                            const { value } = e.target;

                                                                            if (!handleNumberInputLogic(e)) return;

                                                                            if (value === "") {
                                                                                removeAddon(addonid);

                                                                                setTimeout(
                                                                                    () => {
                                                                                        e.target.value = "";
                                                                                    },
                                                                                    [50],
                                                                                );

                                                                                return;
                                                                            }

                                                                            if (!selectedAddons.find(({ id }) => id === addonid)) {
                                                                                setAddon({
                                                                                    group: addongroup,
                                                                                    id: addonid,
                                                                                    name: addonname,
                                                                                    price: price * parseInt(value),
                                                                                    quantity: parseInt(value),
                                                                                    unitOrMeter: "Unit",
                                                                                });
                                                                            } else {
                                                                                setAddonQuantity(
                                                                                    parseInt(value),
                                                                                    price * parseInt(value),
                                                                                    addonid,
                                                                                );
                                                                            }
                                                                        }}
                                                                        onKeyDown={(e) => {
                                                                            if (e.key === "-" || e.key === "e") e.preventDefault();
                                                                        }}
                                                                    />
                                                                )}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                        {airConditioningAddons.length > 0 && (
                            <div
                                className="flex justify-center mt-4 md:mt-8"
                                ref={ref3}
                            >
                                <motion.div
                                    animate={isInView3 && { x: 0 }}
                                    className={`min-h-[185px] w-full max-w-[831px] py-4 md:py-[25] xl:py-[28px] px-2 md:px-3 xl:px-4 flex flex-wrap lg:flex-nowrap lg:gap-2 justify-between shadow-xl border border-gray-300 rounded-2xl ${selectedAirConditioningAddons.length > 0 ? "bg-primary" : "bg-white"}`}
                                    initial={{ x: "100vw" }}
                                    transition={{
                                        damping: 10,
                                        duration: 2,
                                        ease: "easeIn",
                                        stiffness: 40,
                                        type: "spring",
                                    }}
                                >
                                    <div className="flex items-center lg:w-1/3">
                                        {selectedAirConditioningAddons.length > 0 ? (
                                            <Check
                                                className="opacity-70 cursor-pointer w-[30px] h-[30px] md:w-[60px] md:h-[60px]"
                                                size={60}
                                                onClick={() => resetAirConditioningAddons()}
                                            />
                                        ) : (
                                            <Plus
                                                className="opacity-70 cursor-pointer"
                                                size={60}
                                                onClick={() => {
                                                    setAirConditioningAddon({
                                                        id: airConditioningAddons[0]?.addonid,
                                                        power: airConditioningAddons[0]?.addonname,
                                                        price: airConditioningAddons[0]?.price,
                                                        quantity: 1,
                                                    });
                                                }}
                                            />
                                        )}
                                        <div className="lg:w-[150px]">
                                            <h6 className="font-semibold text-base md:text-[20px] mb-1 md:mb-2">Air Conditions</h6>
                                            <p className="font-normal text-xs md:text-base">{airConditioningAddons[0]?.description}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-center mt-2 md:mt-4">
                                        {airConditioningAddons.map(({
                                            addongroup,
                                            addonid,
                                            addonname,
                                            price,
                                        }) => (
                                            <div
                                                className="flex gap-1"
                                                key={addonid}
                                            >
                                                <span className="font-normal text-xs md:text-base border border-gray-300 w-fit px-2 rounded-2xl flex items-center justify-center">{addonname}</span>
                                                <span className="font-normal text-xs md:text-base border border-gray-300 w-fit px-2 rounded-2xl flex items-center justify-center">
                                                    +
                                                    {price?.toLocaleString()}
                                                    {" "}
                                                    EGP
                                                    \Unit
                                                </span>
                                                <Input
                                                    className="w-[57px] h-[33px] rounded-lg border border-gray-300"
                                                    inputMode="numeric"
                                                    pattern="[0-9]*"
                                                    type="number"
                                                    value={selectedAirConditioningAddons.find(({ id }) => id === addonid)?.quantity || 0}
                                                    onChange={(e) => {
                                                        const { value } = e.target;

                                                        if (!handleNumberInputLogic(e)) return;

                                                        if (value < 1 || value === "") {
                                                            removeAirConditioningAddon(addonid);

                                                            setTimeout(
                                                                () => {
                                                                    e.target.value = "";
                                                                },
                                                                [50],
                                                            );

                                                            return;
                                                        }

                                                        if (!selectedAirConditioningAddons.find(({ id }) => id === addonid)) {
                                                            setAirConditioningAddon({
                                                                group: addongroup,
                                                                id: addonid,
                                                                power: addonname,
                                                                price: price * parseInt(value),
                                                                quantity: parseInt(value),
                                                            });
                                                        } else {
                                                            setAirConditioningAddonQuantity(
                                                                parseInt(value),
                                                                price * parseInt(value),
                                                                addonid,
                                                            );
                                                        }
                                                    }}
                                                    onKeyDown={(e) => {
                                                        if (e.key === "-" || e.key === "e") e.preventDefault();
                                                    }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </div>
                )}
                {addonsPerRequest.length > 0 && (
                    <div
                        className="relative mt-[48px] md:mt-[96px]"
                        ref={ref4}
                    >
                        <motion.div
                            animate={isInView4 && { x: 0 }}
                            className="absolute top-0 left-0 bg-primary rounded-2xl h-[270px] w-full max-w-[962px]"
                            initial={{ x: "-100vw" }}
                            transition={{
                                damping: 10,
                                duration: 2,
                                ease: "easeIn",
                                stiffness: 40,
                                type: "spring",
                            }}
                        >
                            <Image
                                alt="addon_per_request"
                                height={270}
                                loading="lazy"
                                src="/images/pages/build-your-kit/addon_per_request.webp"
                                width={962}
                            />
                        </motion.div>
                        <div className="relative w-full overflow-visible h-fit pt-[87px] md:pt-[175px]">
                            <motion.div
                                animate={isInView4 && { x: 0 }}
                                className="flex justify-end"
                                initial={{ x: "100vw" }}
                                transition={{
                                    damping: 10,
                                    duration: 2,
                                    ease: "easeIn",
                                    stiffness: 40,
                                    type: "spring",
                                }}
                            >
                                <div className={`min-h-[225px] w-full max-w-[716px] py-4 md:py-[25] xl:py-[36px] px-2 md:px-3 xl:px-4 flex flex-wrap lg:flex-nowrap lg:gap-2 justify-between shadow-xl border border-gray-300 rounded-2xl ${selectedAddonsPerRequest.find(({ id }) => id === addonsPerRequest[0]?.addperrequestid) ? "bg-primary" : "bg-white"}`}>
                                    <div className="flex items-center">
                                        {selectedAddonsPerRequest.find(({ id }) => id === addonsPerRequest[0]?.addperrequestid) ? (
                                            <Check
                                                className="opacity-70 cursor-pointer w-[30px] h-[30px] md:w-[60px] md:h-[60px]"
                                                size={60}
                                                onClick={() => removeAddonPerRequest(addonsPerRequest[0]?.addperrequestid)}
                                            />
                                        ) : (
                                            <Plus
                                                className="opacity-70 cursor-pointer w-[30px] h-[30px] md:w-[60px] md:h-[60px]"
                                                size={60}
                                                onClick={() => {
                                                    setAddonPerRequest({
                                                        id: addonsPerRequest[0]?.addperrequestid,
                                                        name: addonsPerRequest[0]?.addperrequestname,
                                                    });
                                                }}
                                            />
                                        )}
                                        <div className="lg:max-w-[276px]">
                                            <h6 className="font-semibold text-[22px] md:text-[32px]">{addonsPerRequest[0]?.addperrequestname}</h6>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center lg:max-w-[286px]">
                                        <p className="font-normal text-xs md:text-base mb-3 md:mb-6 text-center">{addonsPerRequest[0]?.description}</p>
                                        <span className="font-normal text-xs md:text-base border border-gray-300 w-[174px] rounded-2xl flex items-center justify-center">Price Upon Request</span>
                                    </div>
                                </div>
                            </motion.div>
                            <div
                                className="grid grid-cols-1 lg:grid-cols-12 justify-center items-center gap-4 md:gap-8 mt-[36px] md:mt-[72px]"
                                ref={ref5}
                            >
                                {addonsPerRequest.slice(1).map(({
                                    addperrequestid,
                                    addperrequestname,
                                    description,
                                }, index) => (
                                    <motion.div
                                        animate={isInView5 && { x: 0 }}
                                        className={`col-span-1 lg:col-span-5 ${index % 2 === 0 ? "lg:col-start-2" : "lg:col-start-7"} flex justify-center`}
                                        initial={{ x: index % 2 === 0 ? "-100vw" : "100vw" }}
                                        key={addperrequestid}
                                        transition={{
                                            damping: 10,
                                            duration: 2,
                                            ease: "easeIn",
                                            stiffness: 40,
                                            type: "spring",
                                        }}
                                    >
                                        <div className={`min-h-[180px] w-full max-w-[500px] py-4 md:py-[25] xl:py-[28px] px-3 md:px-4 xl:px-6 flex flex-wrap lg:flex-nowrap lg:gap-2 justify-between border border-gray-300 rounded-2xl ${selectedAddonsPerRequest.find(({ id }) => id === addperrequestid) ? "bg-primary" : "bg-white"}`}>
                                            <div className="flex items-center">
                                                {selectedAddonsPerRequest.find(({ id }) => id === addperrequestid) ? (
                                                    <Check
                                                        className="opacity-70 cursor-pointer w-[30px] h-[30px] md:w-[60px] md:h-[60px]"
                                                        size={60}
                                                        onClick={() => removeAddonPerRequest(addperrequestid)}
                                                    />
                                                ) : (
                                                    <Plus
                                                        className="opacity-70 cursor-pointer w-[30px] h-[30px] md:w-[60px] md:h-[60px]"
                                                        size={60}
                                                        onClick={() => {
                                                            setAddonPerRequest({
                                                                id: addperrequestid,
                                                                name: addperrequestname,
                                                            });
                                                        }}
                                                    />
                                                )}
                                                <h6 className="font-semibold text-[16px] md:text-[20px] lg:max-w-[184px]">{addperrequestname}</h6>
                                            </div>
                                            <div className="flex flex-col items-center justify-center lg:max-w-[168px]">
                                                <p className="font-normal text-xs md:text-base mb-3 md:mb-6 text-center">{description}</p>
                                                <span className="font-normal text-xs md:text-base border border-gray-300 w-[174px] rounded-2xl flex items-center justify-center">Price Upon Request</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
