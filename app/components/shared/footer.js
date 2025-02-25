"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { footerLinks } from "@/app/data/footer";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/app/ui/tooltip";

import Social from "./social";

export default function Footer() {
    const pathname = usePathname();

    const isPageWithoutBottomImage = pathname === "/why-oda"
        || pathname === "/services"
        || pathname === "/success-stories"
        || pathname === "/faqs"
        || pathname === "/oda-ambassador"
        || pathname === "/our-merchants"
        || pathname === "/our-partners"
        || pathname === "/locate-your-home"
        || pathname === "/cart";

    return (
        <footer className={`${isPageWithoutBottomImage ? "pt-[58px] md:pt-[116px]" : "pt-[133px] md:pt-[267px]"} pb-[39px] md:pb-[79px] relative`}>
            <Image
                alt="footer_bg"
                layout="fill"
                loading="lazy"
                objectFit="cover"
                src="/images/footer_bg.webp"
            />
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 relative z-20">
                <div className="col-span-6">
                    <div>
                        <Image
                            alt="oda_logo"
                            height={108}
                            loading="lazy"
                            src="/images/logo_2.webp"
                            width={283}
                        />
                        <span className="sr-only">Oda Logo</span>
                    </div>
                    <Social color="white" />
                </div>
                <div className="col-span-6">
                    <h6 className="font-medium text-2xl md:text-4xl text-white">Quick Links</h6>
                    <div className="flex flex-nowrap justify-between gap-2 mt-5 md:mt-10">
                        <div className="w-[49%]">
                            <ul className="p-0 flex flex-col gap-1 md:gap-2">
                                {footerLinks.leftColumn.map(({
                                    id,
                                    text,
                                    url,
                                }) => (
                                    <li key={id}>
                                        <Link
                                            className="font-medium text-base md:text-xl text-white hover:text-primary transition-all duration-1000"
                                            href={url}
                                            prefetch={false}
                                        >
                                            {text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-[49%]">
                            <ul className="p-0 m-0 flex flex-col gap-1 md:gap-2">
                                {footerLinks.rightColumn.map(({
                                    id,
                                    text,
                                    url,
                                }) => (
                                    <li key={id}>
                                        <Link
                                            className="font-medium text-base md:text-xl text-white hover:text-primary transition-all duration-1000"
                                            href={url}
                                            prefetch={false}
                                        >
                                            {text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-[21px] md:mt-[43px]">
                                <span className="mb-2 md:mb-4 inline-block font-medium text-xs md:text-base text-white">Download App</span>
                                <div className="flex gap-1 md:gap-2 flex-col">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Image
                                                    alt="google_play"
                                                    className="cursor-pointer"
                                                    height={65}
                                                    loading="lazy"
                                                    src="/images/google_play.webp"
                                                    width={180}
                                                />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <span className="text-black">Coming Soon</span>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Image
                                                    alt="apple_store"
                                                    className="cursor-pointer"
                                                    height={65}
                                                    loading="lazy"
                                                    src="/images/apple_store.webp"
                                                    width={180}
                                                />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <span className="text-black">Coming Soon</span>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
