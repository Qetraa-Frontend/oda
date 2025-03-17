"use client";

import { ChevronDownIcon, ChevronRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { navbarLinks } from "@/app/data/navbar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/app/ui/dropdown-menu";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/app/ui/sheet";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const [activeLinkId, setActiveLinkId] = useState({
        leftColumn: null,
        rightColumn: {
            services: null,
            top: null,
        },
    });

    useEffect(
        () => {
            if (!isSheetOpen) {
                setTimeout(
                    () => {
                        setActiveLinkId({
                            leftColumn: null,
                            rightColumn: {
                                services: null,
                                top: null,
                            },
                        });
                    },
                    400,
                );
            }
        },
        [isSheetOpen],
    );

    return (
        <header className="absolute top-0 z-50 w-full h-[87px] md:h-[175px] border-none flex items-center">
            <Image
                alt="navbar_bg"
                layout="fill"
                loading="eager"
                objectFit="cover"
                src="/images/navbar_bg.webp"
                priority
            />
            <div className="container mx-auto flex justify-between relative z-20">
                <Link
                    className="flex items-center gap-1 md:gap-2"
                    href="/"
                    prefetch={false}
                >
                    <Image
                        alt="oda_logo"
                        height={63}
                        loading="eager"
                        src="/images/logo.webp"
                        width={183}
                        priority
                    />
                    <span className="sr-only">Oda Logo</span>
                </Link>
                <nav className="hidden items-center gap-3 md:gap-6 text-xs md:text-sm font-medium md:flex !font-albert-sans">
                    <Link
                        className="font-normal text-base md:text-xl text-white hover:text-primary transition-all duration-1000"
                        href="/"
                        prefetch={false}
                    >
                        Home
                    </Link>
                    <DropdownMenu
                        open={openMenu}
                        onOpenChange={setOpenMenu}
                    >
                        <Link
                            className="font-normal text-base md:text-xl text-white hover:text-primary transition-all duration-1000 ml-4"
                            href="/services"
                            prefetch={false}
                        >
                            Our Services
                        </Link>
                        <DropdownMenuTrigger className="font-normal text-base md:text-xl text-white hover:text-primary transition-all duration-1000 outline-none relative right-4">
                            <ChevronDownIcon className="h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setOpenMenu(false)}>
                                <Link
                                    className="font-normal text-sm md:text-lg"
                                    href="/locate-your-home"
                                    prefetch={false}
                                >
                                    Locate Your Home
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setOpenMenu(false)}>
                                <Link
                                    className="font-normal text-sm md:text-lg"
                                    href="/build-your-kit"
                                    prefetch={false}
                                >
                                    Build Your Kit
                                </Link>
                            </DropdownMenuItem>
                            {/*
                                <DropdownMenuItem onClick={() => setOpenMenu(false)}>
                                    <Link
                                        className="font-normal text-sm md:text-lg"
                                        href="/need-facelift"
                                        prefetch={false}
                                    >
                                        Need a Facelift
                                    </Link>
                                </DropdownMenuItem>
                            */}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Link
                        className="font-normal text-base md:text-xl text-white hover:text-primary transition-all duration-1000"
                        href="/about-us"
                        prefetch={false}
                    >
                        About Us
                    </Link>
                </nav>
                <div className="flex items-center gap-2 md:gap-4">
                    <Link
                        className="text-white hover:text-primary cursor-pointer"
                        href="https://wa.me/1080555597"
                        prefetch={false}
                        target="_blank"
                    >
                        <svg
                            className="hover:text-primary"
                            height="35"
                            viewBox="0 0 24 24"
                            width="35"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16.6 14c-.2-.1-1.5-.7-1.7-.8c-.2-.1-.4-.1-.6.1c-.2.2-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5c.1-.1.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4c-.1-.1-.6-1.3-.8-1.8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3c-.6.6-.9 1.3-.9 2.1c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"
                                fill="currentColor"
                            />
                        </svg>
                    </Link>
                    <Sheet
                        open={isSheetOpen}
                        onOpenChange={setIsSheetOpen}
                    >
                        <SheetTrigger asChild>
                            <Menu
                                className="text-white hover:text-primary cursor-pointer"
                                size={30}
                            />
                        </SheetTrigger>
                        <SheetContent
                            className="border-b-transparent p-0"
                            side="top"
                        >
                            <Image
                                alt="burger_menu_bg"
                                layout="fill"
                                loading="eager"
                                objectFit="cover"
                                src="/images/pages/home/hero/hero_1.webp"
                                priority
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-90" />
                            <div className="relative z-40 w-full min-h-[1021px]">
                                <div className="container mx-auto flex items-center justify-between mt-[25px] md:mt-[51px] mb-[22px] md:mb-[45px]">
                                    <div>
                                        <Image
                                            alt="oda_logo"
                                            className="w-[149px] md:w-[299px] h-[51px] md:h-[102px]"
                                            height={102}
                                            loading="eager"
                                            src="/images/logo_2.webp"
                                            width={299}
                                            priority
                                        />
                                        <span className="sr-only">Oda Logo</span>
                                    </div>
                                    <SheetClose className="outline-0 border-0 shadow-none">
                                        <ChevronRight
                                            className="text-white hover:text-primary cursor-pointer outline-0 border-0"
                                            size={50}
                                        />
                                    </SheetClose>
                                </div>
                                <div className="container mx-auto !font-albert-sans overflow-y-auto sm:h-[126vh]">
                                    <h6 className="inline-block font-medium text-2xl md:text-4xl text-gray-500">Quick Links</h6>
                                    <div className="flex justify-between mt-6 md:mt-12">
                                        <div>
                                            <ul className="flex flex-col gap-5 md:gap-10">
                                                {navbarLinks.leftColumn.map(({
                                                    id,
                                                    text,
                                                    url,
                                                }) => (
                                                    <li key={id}>
                                                        <Link
                                                            className={`font-medium text-lg md:text-2xl xl:text-5xl ${id === activeLinkId.leftColumn || activeLinkId.leftColumn === null ? "text-white" : "text-white opacity-50"} transition-all duration-500`}
                                                            href={url}
                                                            prefetch={false}
                                                            onClick={() => setIsSheetOpen(false)}
                                                            onMouseEnter={() => setActiveLinkId({
                                                                leftColumn: id,
                                                                rightColumn: {
                                                                    services: null,
                                                                    top: null,
                                                                },
                                                            })}
                                                            onMouseLeave={() => setActiveLinkId({
                                                                leftColumn: null,
                                                                rightColumn: {
                                                                    services: null,
                                                                    top: null,
                                                                },
                                                            })}
                                                        >
                                                            {text}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className="flex flex-col gap-5 md:gap-10 mb-[33px] md:mb-[67px]">
                                                {navbarLinks.rightColumn.top.map(({
                                                    id,
                                                    text,
                                                    url,
                                                }) => (
                                                    <li key={id}>
                                                        <Link
                                                            className={`font-medium text-lg md:text-2xl xl:text-5xl ${id === activeLinkId.rightColumn.top || activeLinkId.rightColumn.top === null ? "text-white" : "text-white opacity-50"} transition-all duration-500`}
                                                            href={url}
                                                            prefetch={false}
                                                            onClick={() => setIsSheetOpen(false)}
                                                            onMouseEnter={() => setActiveLinkId({
                                                                leftColumn: null,
                                                                rightColumn: {
                                                                    services: null,
                                                                    top: id,
                                                                },
                                                            })}
                                                            onMouseLeave={() => setActiveLinkId({
                                                                leftColumn: null,
                                                                rightColumn: {
                                                                    services: null,
                                                                    top: null,
                                                                },
                                                            })}
                                                        >
                                                            {text}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div>
                                                <ul className="flex flex-col gap-5 md:gap-10 mt-5 md:mt-10">
                                                    {navbarLinks.rightColumn.services.map(({
                                                        id,
                                                        text,
                                                        url,
                                                    }) => (
                                                        <li key={id}>
                                                            <Link
                                                                className={`font-medium text-lg md:text-2xl xl:text-5xl ${id === activeLinkId.rightColumn.services || activeLinkId.rightColumn.services === null ? "text-white" : "text-white opacity-50"} transition-all duration-500`}
                                                                href={url}
                                                                prefetch={false}
                                                                onClick={() => setIsSheetOpen(false)}
                                                                onMouseEnter={() => setActiveLinkId({
                                                                    leftColumn: null,
                                                                    rightColumn: {
                                                                        services: id,
                                                                        top: null,
                                                                    },
                                                                })}
                                                                onMouseLeave={() => setActiveLinkId({
                                                                    leftColumn: null,
                                                                    rightColumn: {
                                                                        services: null,
                                                                        top: null,
                                                                    },
                                                                })}
                                                            >
                                                                {text}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
