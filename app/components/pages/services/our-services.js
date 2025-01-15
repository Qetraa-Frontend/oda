import Image from "next/image";
import Link from "next/link";

export default function OurServices() {
    return (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[0px] pt-[120px] lg:pt-60 pb-[65px] lg:pb-[131px]">
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
                        <p className="font-medium opacity-60 text-xs lg:text-sm mb-[17px] lg:mb-[34px] mt-1 lg:mt-2">Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.</p>
                        <Link
                            className="float-right"
                            href="/locate-your-home"
                            prefetch={false}
                        >
                            <button className="font-semibold text-[13px] lg:text-[15px] bg-primary transition-all duration-1000 rounded-3xl py-1 md:py-2 px-4 md:px-8 hover:animate-heartBeat">Get Started</button>
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
                            <p className="font-medium opacity-60 text-xs lg:text-sm mb-[17px] lg:mb-[34px] mt-1 lg:mt-2">Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.</p>
                            <Link
                                className="float-right"
                                href="/build-your-kit"
                                prefetch={false}
                            >
                                <button className="font-semibold text-[13px] lg:text-[15px] bg-primary transition-all duration-1000 rounded-3xl py-1 md:py-2 px-4 md:px-8 hover:animate-heartBeat">Get Started</button>
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
                        <p className="font-medium opacity-60 text-xs lg:text-sm mb-[17px] lg:mb-[34px] mt-1 lg:mt-2">Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.</p>
                        <Link
                            className="float-right"
                            href="/need-facelift"
                            prefetch={false}
                        >
                            <button className="font-semibold text-[13px] lg:text-[15px] bg-primary transition-all duration-1000 rounded-3xl py-1 md:py-2 px-4 md:px-8 hover:animate-heartBeat">Get Started</button>
                        </Link>
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
