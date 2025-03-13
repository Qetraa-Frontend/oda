import Image from "next/image";
import Link from "next/link";

import { Button } from "@/app/ui/button";

export default function OurServices() {
    return (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[0px] py-[65px] lg:py-[130px]">
            <div className="col-span-1 lg:col-span-6">
                <Image
                    alt="service_1"
                    className="w-full h-[150px] md:h-[274px] lg:h-[552px] object-cover"
                    height={552}
                    loading="lazy"
                    src="/images/pages/services/our-services/service_1.webp"
                    width={608}
                />
            </div>
            <div className="col-span-1 lg:col-span-6 flex gap-[0px]">
                <div className="w-full lg:w-1/2">
                    <div className="px-4 lg:px-8 pt-[14px] lg:pt-7 h-[220px] lg:h-[278px]">
                        <h3 className="font-medium text-[22px] lg:text-[32px] leading-6 lg:leading-9">Locate Your Home</h3>
                        <p className="font-medium opacity-60 text-xs lg:text-sm mb-[17px] lg:mb-[34px] mt-1 lg:mt-2">Select from Oda Real Estate partners, pick your Unit Type & Size, and choose one of Oda universal finishing packages.</p>
                        <Link
                            className="float-right"
                            href="/locate-your-home"
                            prefetch={false}
                        >
                            <Button className="font-semibold text-[13px] lg:text-[15px] !bg-primary text-black transition-all duration-1000 rounded-3xl py-1 lg:py-2 px-4 lg:px-8 hover:animate-heartBeat">Get Started</Button>
                        </Link>
                    </div>
                    <Image
                        alt="service_2"
                        className="w-full h-[220px] lg:h-[274px] object-cover"
                        height={274}
                        loading="lazy"
                        src="/images/pages/services/our-services/service_2.webp"
                        width={320}
                    />
                </div>
                <div className="w-full lg:w-1/2">
                    <Image
                        alt="service_3"
                        className="w-full h-[220px] lg:h-[278px] object-cover"
                        height={278}
                        loading="lazy"
                        src="/images/pages/services/our-services/service_3.webp"
                        width={320}
                    />
                    <div>
                        <div className="px-4 lg:px-8 pt-5 lg:pt-10 h-[220px] lg:h-[274px]">
                            <h3 className="font-medium text-[22px] lg:text-[32px] leading-6 lg:leading-9">Build Your Kit</h3>
                            <p className="font-medium opacity-60 text-xs lg:text-sm mb-[17px] lg:mb-[34px] mt-1 lg:mt-2">Can’t find your Home?. Pick your Unit Location & Size, and choose one of Oda universal finishing packages.</p>
                            <Link
                                className="float-right"
                                href="/build-your-kit"
                                prefetch={false}
                            >
                                <Button className="font-semibold text-[13px] lg:text-[15px] !bg-primary text-black transition-all duration-1000 rounded-3xl py-1 md:py-2 px-4 md:px-8 hover:animate-heartBeat">Get Started</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 lg:col-span-6 flex gap-[0px]">
                <div className="w-full lg:w-1/2">
                    <Image
                        alt="service_4"
                        className="w-full h-[220px] lg:h-[274px] object-cover"
                        height={274}
                        loading="lazy"
                        src="/images/pages/services/our-services/service_4.webp"
                        width={308}
                    />
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="px-4 lg:px-8 pt-[22px] lg:pt-[45px] h-[220px] lg:h-[274px]">
                        <h3 className="font-medium text-[22px] lg:text-[32px] leading-6 lg:leading-9">Need a Facelift</h3>
                        <p className="font-medium opacity-60 text-xs lg:text-sm mb-[17px] lg:mb-[34px] mt-1 lg:mt-2">Looking for Home Renovations or Add-ons?. Customize your Unit rooms separately from Oda design & build kit Menu.</p>
                        <Button
                            className="font-semibold text-[13px] lg:text-[15px] !bg-primary text-black transition-all duration-1000 rounded-3xl py-1 md:py-2 px-4 md:px-8 hover:animate-heartBeat"
                            disabled
                        >
                            Stay Tuned
                        </Button>
                    </div>
                </div>
            </div>
            <div className="col-span-1 lg:col-span-6">
                <Image
                    alt="service_5"
                    className="w-full h-[150px] md:h-[274px] object-cover"
                    height={274}
                    loading="lazy"
                    src="/images/pages/services/our-services/service_5.webp"
                    width={620}
                />
            </div>
        </div>
    );
}
