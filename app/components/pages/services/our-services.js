import Image from "next/image";
import Link from "next/link";

export default function OurServices() {
    return (
        <div className="container px-4 xl:px-0 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[0px] pt-[120px] lg:pt-60 pb-[65px] lg:pb-[131px]">
            <div className="col-span-1 lg:col-span-6">
                <Image
                    alt="service_1"
                    className="w-full h-[158px] sm:h-[274px] lg:h-full"
                    height={552}
                    loading="lazy"
                    src="/images/pages/services/our-services/service_1.webp"
                    width={608}
                />
            </div>
            <div className="col-span-1 lg:col-span-6 flex gap-[0px]">
                <div className="flex flex-col justify-center h-full gap-[0px] w-full lg:w-1/2">
                    <div className="px-4 lg:px-8 py-[14px] lg:py-7">
                        <h3 className="font-medium text-[22px] lg:text-[32px]">Locate Your Home</h3>
                        <p className="font-medium opacity-60 text-xs lg:text-sm mb-[17px] lg:mb-[34px] mt-1 lg:mt-2">Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.</p>
                        <Link
                            href="/locate-your-home"
                            prefetch={false}
                        >
                            <button className="font-semibold text-[13px] lg:text-[15px] bg-primary transition-all duration-1000 rounded-3xl py-1 md:py-2 px-4 md:px-8 hover:animate-heartBeat">Get Started</button>
                        </Link>
                    </div>
                    <Image
                        alt="service_2"
                        className="h-full w-[95%] sm:w-[97%] md:w-[98%] lg:w-full"
                        height={274}
                        loading="lazy"
                        src="/images/pages/services/our-services/service_2.webp"
                        width={320}
                    />
                </div>
                <div className="flex flex-col justify-center h-full gap-[0px] w-full lg:w-1/2">
                    <Image
                        alt="service_3"
                        className="w-full"
                        height={278}
                        loading="lazy"
                        src="/images/pages/services/our-services/service_3.webp"
                        width={320}
                    />
                    <div className="px-4 lg:px-8 py-[14px] lg:py-7">
                        <h3 className="font-medium text-[22px] lg:text-[32px]">Build Your Kit</h3>
                        <p className="font-medium opacity-60 text-xs lg:text-sm mb-[17px] lg:mb-[34px] mt-1 lg:mt-2">Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.</p>
                        <Link
                            href="/build-your-kit"
                            prefetch={false}
                        >
                            <button className="font-semibold text-[13px] lg:text-[15px] bg-primary transition-all duration-1000 rounded-3xl py-1 md:py-2 px-4 md:px-8 hover:animate-heartBeat">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-span-1 lg:col-span-6 flex gap-[0px]">
                <div className="w-full lg:w-1/2">
                    <Image
                        alt="service_4"
                        className="w-full"
                        height={274}
                        loading="lazy"
                        src="/images/pages/services/our-services/service_4.webp"
                        width={308}
                    />
                </div>
                <div className="w-full lg:w-1/2 px-4 lg:px-8 py-[14px] lg:py-7">
                    <h3 className="font-medium text-[22px] lg:text-[32px]">Need a Facelift</h3>
                    <p className="font-medium opacity-60 text-xs lg:text-sm mb-[17px] lg:mb-[34px] mt-1 lg:mt-2">Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.</p>
                    <Link
                        href="/need-facelift"
                        prefetch={false}
                    >
                        <button className="font-semibold text-[13px] lg:text-[15px] bg-primary transition-all duration-1000 rounded-3xl py-1 md:py-2 px-4 md:px-8 hover:animate-heartBeat">Get Started</button>
                    </Link>
                </div>
            </div>
            <div className="col-span-1 lg:col-span-6">
                <Image
                    alt="service_5"
                    className="w-full"
                    height={274}
                    loading="lazy"
                    src="/images/pages/services/our-services/service_5.webp"
                    width={620}
                />
            </div>
        </div>
    );
}
