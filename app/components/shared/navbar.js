"use client";

import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { navbarLinks } from "@/app/data/navbar";
import { Button } from "@/app/ui/button";
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

    return (
        <header className="absolute top-0 z-50 w-full h-[87px] md:h-[175px] border-none flex items-center">
            <div className="container px-4 xl:px-0 mx-auto flex justify-between">
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
                    />
                    <span className="sr-only">Oda Logo</span>
                </Link>
                <nav className="hidden items-center gap-3 md:gap-6 text-xs md:text-sm font-medium md:flex !font-albert-sans">
                    <Link
                        className="font-normal text-base md:text-xl text-white"
                        href="/"
                        prefetch={false}
                    >
                        Home
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-1 font-normal text-base md:text-xl text-white outline-none">
                            Services
                            <ChevronDownIcon className="h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
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
                        className="font-normal text-base md:text-xl text-white"
                        href="/about-us"
                        prefetch={false}
                    >
                        About Us
                    </Link>
                </nav>
                <div className="flex items-center gap-2 md:gap-4">
                    <div className="hidden items-center gap-1 md:gap-2 font-medium text-xs md:text-sm md:flex cursor-pointer">
                        <Image
                            alt="whatsapp"
                            height={25}
                            loading="eager"
                            src="/icons/whatsapp.svg"
                            width={25}
                        />
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                className="hover:bg-transparent cursor-pointer"
                                size="icon"
                                variant="ghost"
                            >
                                <Image
                                    alt="search"
                                    height={25}
                                    loading="eager"
                                    src="/icons/search.svg"
                                    width={26}
                                />
                                <span className="sr-only">Search</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[300px] p-4">
                            <div className="relative">
                                <Input
                                    className="w-full"
                                    placeholder="Search..."
                                    type="search"
                                />
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Sheet
                        open={isSheetOpen}
                        onOpenChange={setSheetOpen}
                    >
                        <SheetTrigger asChild>
                            <Button
                                className="hover:bg-transparent cursor-pointer"
                                size="icon"
                                variant="ghost"
                            >
                                <Image
                                    alt="burger_menu"
                                    height={8}
                                    loading="eager"
                                    src="/icons/burger-menu.svg"
                                    width={25}
                                />
                                <span className="sr-only">Toggle Navigation Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            className="bg-cover bg-no-repeat border-b-transparent p-0 min-h-[1021px]"
                            side="top"
                            style={{ backgroundImage: "url(/images/pages/home/hero/hero_1.webp)" }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-90" />
                            <div className="relative z-40 w-full min-h-[1021px]">
                                <div className="container px-4 xl:px-0 mx-auto flex items-center justify-between mt-[25px] md:mt-[51px] mb-[22px] md:mb-[45px]">
                                    <div>
                                        <Image
                                            alt="oda_logo"
                                            height={102}
                                            loading="eager"
                                            src="/images/logo_2.webp"
                                            width={299}
                                        />
                                        <span className="sr-only">Oda Logo</span>
                                    </div>
                                    <SheetClose>
                                        <Image
                                            alt="arrow_right"
                                            height={53}
                                            loading="eager"
                                            src="/icons/arrow-right.svg"
                                            width={53}
                                        />
                                        <span className="sr-only">Close</span>
                                    </SheetClose>
                                </div>
                                <div className="container px-4 xl:px-0 mx-auto !font-albert-sans">
                                    <h6 className="inline-block font-medium text-2xl md:text-4xl text-gray-500">Quick Links</h6>
                                    <div className="flex items-center justify-between mt-6 md:mt-12">
                                        <div>
                                            <ul className="flex flex-col gap-5 md:gap-10">
                                                {navbarLinks.leftColumn.map(({
                                                    text,
                                                    url,
                                                }) => (
                                                    <li>
                                                        <Link
                                                            className="font-medium text-lg md:text-2xl xl:text-5xl text-white hover:text-primary transition-all duration-1000"
                                                            href={url}
                                                            prefetch={false}
                                                            onClick={() => setSheetOpen(false)}
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
                                                    text,
                                                    url,
                                                }) => (
                                                    <li>
                                                        <Link
                                                            className="font-medium text-lg md:text-2xl xl:text-5xl text-white hover:text-primary transition-all duration-1000"
                                                            href={url}
                                                            prefetch={false}
                                                            onClick={() => setSheetOpen(false)}
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
                                                        text,
                                                        url,
                                                    }) => (
                                                        <li>
                                                            <Link
                                                                className="font-medium text-lg md:text-2xl xl:text-5xl text-white hover:text-primary transition-all duration-1000"
                                                                href={url}
                                                                prefetch={false}
                                                                onClick={() => setSheetOpen(false)}
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
