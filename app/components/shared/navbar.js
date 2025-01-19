"use client";

import {
    ChevronDownIcon,
    ChevronRight,
    Menu,
    MessageCircleQuestion,
    Search,
} from "lucide-react";
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
import { Input } from "@/app/ui/input";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/app/ui/sheet";

export default function Navbar() {
    const [isSheetOpen, setSheetOpen] = useState(false);

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
                setActiveLinkId({
                    leftColumn: null,
                    rightColumn: {
                        services: null,
                        top: null,
                    },
                });
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
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-1 font-normal text-base md:text-xl text-white hover:text-primary transition-all duration-1000 outline-none">
                            Services
                            <ChevronDownIcon className="h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                <Link
                                    className="font-normal text-sm md:text-lg"
                                    href="/services"
                                    prefetch={false}
                                >
                                    Our Services
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link
                                    className="font-normal text-sm md:text-lg"
                                    href="/locate-your-home"
                                    prefetch={false}
                                >
                                    Locate Your Home
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link
                                    className="font-normal text-sm md:text-lg"
                                    href="/book-your-kit"
                                    prefetch={false}
                                >
                                    Build Your Kit
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link
                                    className="font-normal text-sm md:text-lg"
                                    href="/need-facelift"
                                    prefetch={false}
                                >
                                    Need a Facelift
                                </Link>
                            </DropdownMenuItem>
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
                    <MessageCircleQuestion
                        className="text-white hover:text-primary cursor-pointer"
                        size={30}
                    />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Search
                                className="text-white hover:text-primary cursor-pointer"
                                size={30}
                            />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[300px] p-4">
                            <div className="relative">
                                <Input
                                    className="w-full"
                                    placeholder="Search..."
                                    type="text"
                                />
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Sheet
                        open={isSheetOpen}
                        onOpenChange={setSheetOpen}
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
                                    <div className="flex items-center justify-between mt-6 md:mt-12">
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
                                                            onClick={() => setSheetOpen(false)}
                                                            onMouseEnter={() => setActiveLinkId(
                                                                (prevState) => ({
                                                                    ...prevState,
                                                                    leftColumn: id,
                                                                }),
                                                            )}
                                                            onMouseLeave={() => setActiveLinkId(
                                                                (prevState) => ({
                                                                    ...prevState,
                                                                    leftColumn: null,
                                                                }),
                                                            )}
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
                                                            onClick={() => setSheetOpen(false)}
                                                            onMouseEnter={() => setActiveLinkId(
                                                                (prevState) => ({
                                                                    ...prevState,
                                                                    rightColumn: {
                                                                        ...prevState.rightColumn,
                                                                        top: id,
                                                                    },
                                                                }),
                                                            )}
                                                            onMouseLeave={() => setActiveLinkId(
                                                                (prevState) => ({
                                                                    ...prevState,
                                                                    rightColumn: {
                                                                        ...prevState.rightColumn,
                                                                        top: null,
                                                                    },
                                                                }),
                                                            )}
                                                        >
                                                            {text}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div>
                                                <h6 className="inline-block font-medium text-2xl md:text-4xl text-gray-500">Our Services</h6>
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
                                                                onClick={() => setSheetOpen(false)}
                                                                onMouseEnter={() => setActiveLinkId(
                                                                    (prevState) => ({
                                                                        ...prevState,
                                                                        rightColumn: {
                                                                            ...prevState.rightColumn,
                                                                            services: id,
                                                                        },
                                                                    }),
                                                                )}
                                                                onMouseLeave={() => setActiveLinkId(
                                                                    (prevState) => ({
                                                                        ...prevState,
                                                                        rightColumn: {
                                                                            ...prevState.rightColumn,
                                                                            services: null,
                                                                        },
                                                                    }),
                                                                )}
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
