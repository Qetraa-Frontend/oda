"use client";

import {
    Facebook,
    Instagram,
    Mail,
    Phone,
    Twitter,
    Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { footerLinks } from "@/app/data/footer";

export default function Footer() {
    const pathname = usePathname();

    const isPageWithoutBottomImage = pathname === "/why-oda" || pathname === "/services" || pathname === "/success-stories" || pathname === "/faqs";

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
                    <p className="mt-[7px] md:mt-[14px] font-medium text-white text-base md:text-xl max-w-[400px]">
                        We aim to change the concept of the finishing home by listening to
                        our customers who inspire us to stay ahead with innovative finishing
                        solutions & designs.
                    </p>
                    <div className="mt-[19px] md:mt-[38px] flex flex-col gap-[9px] md:gap-[18px]">
                        <div className="flex items-center gap-1 md:gap-2 text-white hover:text-primary transition-all duration-1000">
                            <Mail size={20} />
                            <Link
                                className="font-normal text-xs md:text-base"
                                href="mailto:shopcart_5@gmail.com"
                                prefetch={false}
                                target="_blank"
                            >
                                oda-info@gmail.com
                            </Link>
                        </div>
                        <div className="flex items-center gap-1 md:gap-2 text-white hover:text-primary transition-all duration-1000">
                            <Phone size={20} />
                            <Link
                                className="font-normal text-xs md:text-base"
                                href="tel:+20 111 2748 557"
                                prefetch={false}
                                target="_blank"
                            >
                                +20 111 2748 557
                            </Link>
                        </div>
                        <div className="flex items-center gap-1 md:gap-2">
                            <Link
                                className="font-normal text-xs md:text-base text-white hover:text-primary transition-all duration-1000"
                                href="#"
                                prefetch={false}
                                target="_blank"
                            >
                                <Youtube size={24} />
                            </Link>
                            <Link
                                className="font-normal text-xs md:text-base text-white hover:text-primary transition-all duration-1000"
                                href="#"
                                prefetch={false}
                                target="_blank"
                            >
                                <Instagram size={24} />
                            </Link>
                            <Link
                                className="font-normal text-xs md:text-base text-white hover:text-primary transition-all duration-1000"
                                href="#"
                                prefetch={false}
                                target="_blank"
                            >
                                <Facebook size={24} />
                            </Link>
                            <Link
                                className="font-normal text-xs md:text-base text-white hover:text-primary transition-all duration-1000"
                                href="#"
                                prefetch={false}
                                target="_blank"
                            >
                                <Twitter size={24} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <h6 className="font-medium text-2xl md:text-4xl text-white">Quick Links</h6>
                    <ul className="p-0 mt-[19px] md:mt-[38px] flex flex-col gap-1 md:gap-2">
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
                <div className="col-span-3 mt-[35px] md:mt-[70px]">
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
                            <Link
                                href="#"
                                prefetch={false}
                            >
                                <Image
                                    alt="google_play"
                                    height={65}
                                    loading="lazy"
                                    src="/images/google_play.webp"
                                    width={180}
                                />
                            </Link>
                            <Link
                                href="#"
                                prefetch={false}
                            >
                                <Image
                                    alt="apple_store"
                                    height={65}
                                    loading="lazy"
                                    src="/images/apple_store.webp"
                                    width={180}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
