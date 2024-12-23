"use client";

import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    return (
        <header className="absolute top-0 z-50 w-full border-none">
            <div className="container mx-auto flex h-40 items-center justify-between px-4 md:px-6">
                <Link
                    className="flex items-center gap-1 md:gap-2"
                    href="/"
                    prefetch={false}
                >
                    <Image
                        alt="oda_logo"
                        height={63}
                        src="/images/logo.png"
                        width={183}
                        priority
                    />
                    <span className="sr-only">Oda Logo</span>
                </Link>
                <nav className="hidden items-center gap-3 md:gap-6 text-xs md:text-sm font-medium md:flex font-albert-sans">
                    <Link
                        className="text-base md:text-xl font-normal text-white"
                        href="/"
                        prefetch={false}
                    >
                        Home
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-1 text-base md:text-xl font-normal text-white outline-none">
                            Services
                            <ChevronDownIcon className="h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                <Link
                                    className="text-sm md:text-lg font-normal"
                                    href="/locate-your-home"
                                    prefetch={false}
                                >
                                    Locate Your Home
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link
                                    className="text-sm md:text-lg font-normal"
                                    href="/book-your-kit"
                                    prefetch={false}
                                >
                                    Build Your Kit
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link
                                    className="text-sm md:text-lg font-normal"
                                    href="/need-facelift"
                                    prefetch={false}
                                >
                                    Need a Facelift
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Link
                        className="text-base md:text-xl font-normal text-white"
                        href="/about-us"
                        prefetch={false}
                    >
                        About Us
                    </Link>
                </nav>
                <div className="flex items-center gap-2 md:gap-4">
                    <div className="hidden items-center gap-1 md:gap-2 text-xs md:text-sm font-medium md:flex cursor-pointer">
                        <Image
                            alt="whatsapp"
                            height={25}
                            src="/icons/whatsapp.svg"
                            width={25}
                            priority
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
                                    src="/icons/search.svg"
                                    width={25}
                                    priority
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
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                className="hover:bg-transparent cursor-pointer"
                                size="icon"
                                variant="ghost"
                            >
                                <Image
                                    alt="burger-menu"
                                    height={25}
                                    src="/icons/burger-menu.svg"
                                    width={25}
                                    priority
                                />
                                <span className="sr-only">Toggle Navigation Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            className="bg-cover bg-no-repeat border-b-transparent"
                            side="top"
                            style={{
                                backgroundImage: "url(/images/pages/home/hero/hero_1.png)",
                                minHeight: 1021,
                            }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-70" />
                            <div className="relative z-40">
                                <SheetClose className="absolute top-4 right-4">
                                    <Image
                                        alt="arrow-right"
                                        height={25}
                                        src="/icons/arrow-right.svg"
                                        width={25}
                                        priority
                                    />
                                    <span className="sr-only">Close</span>
                                </SheetClose>
                                <div className="container mx-auto flex items-center justify-between px-4 md:px-6 mt-3 md:mt-6 mb-4 md:mb-8">
                                    <Image
                                        alt="oda_logo"
                                        className="mt-3 md:mt-6"
                                        height={63}
                                        src="/images/logo_2.png"
                                        width={183}
                                        priority
                                    />
                                    <span className="sr-only">Oda Logo</span>
                                </div>
                                <div className="container mx-auto md:flex items-center justify-between px-4 md:px-6">
                                    <div>
                                        <span className="text-gray-500 mb-4 md:mb-8 inline-block text-2xl md:text-4xl font-medium">Quick Links</span>
                                        <ul className="flex flex-col gap-4 md:gap-8 mt-1 md:mt-2">
                                            <li>
                                                <Link
                                                    className="text-3xl md:text-5xl hover:text-primary transition-all duration-1000 font-medium text-white"
                                                    href="/"
                                                    prefetch={false}
                                                >
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="text-3xl md:text-5xl hover:text-primary transition-all duration-1000 font-medium text-white"
                                                    href="/about-us"
                                                    prefetch={false}
                                                >
                                                    About Us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="text-3xl md:text-5xl hover:text-primary transition-all duration-1000 font-medium text-white"
                                                    href="/why-oda"
                                                    prefetch={false}
                                                >
                                                    Why Oda
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="text-3xl md:text-5xl hover:text-primary transition-all duration-1000 font-medium text-white"
                                                    href="contact-us"
                                                    prefetch={false}
                                                >
                                                    Contact Us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="text-3xl md:text-5xl hover:text-primary transition-all duration-1000 font-medium text-white"
                                                    href="/successful-stories"
                                                    prefetch={false}
                                                >
                                                    Successful Stories
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="text-3xl md:text-5xl hover:text-primary transition-all duration-1000 font-medium text-white"
                                                    href="/oda-ambassador"
                                                    prefetch={false}
                                                >
                                                    Oda Ambassador
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    className="text-3xl md:text-5xl hover:text-primary transition-all duration-1000 font-medium text-white"
                                                    href="/news-and-events"
                                                    prefetch={false}
                                                >
                                                    News & Events
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="flex flex-col gap-4 md:gap-8 mt-10 md:mt-20">
                                            <li>
                                                <Link
                                                    className="text-3xl md:text-5xl hover:text-primary transition-all duration-1000 font-medium text-white"
                                                    href="/our-merchants"
                                                    prefetch={false}
                                                >
                                                    Our Merchants
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="text-3xl md:text-5xl hover:text-primary transition-all duration-1000 font-medium text-white"
                                                    href="/our-partners"
                                                    prefetch={false}
                                                >
                                                    Our Partners
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="text-3xl md:text-5xl hover:text-primary transition-all duration-1000 font-medium text-white"
                                                    href="/faqs"
                                                    prefetch={false}
                                                >
                                                    FAQs
                                                </Link>
                                            </li>
                                            <div>
                                                <span className="text-gray-500 mb-1 md:mb-2 mt-4 md:mt-8 inline-block text-2xl md:text-4xl font-medium">Our Services</span>
                                                <ul className="flex flex-col gap-4 md:gap-8 mt-2 md:mt-4">
                                                    <li>
                                                        <Link
                                                            className="text-3xl md:text-5xl hover:text-primary transition-all duration-1000 font-medium text-white"
                                                            href="/locate-your-home"
                                                            prefetch={false}
                                                        >
                                                            Locate Your Home
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            className="text-3xl md:text-5xl hover:text-primary transition-all duration-1000 font-medium text-white"
                                                            href="/build-your-kit"
                                                            prefetch={false}
                                                        >
                                                            Build Your Kit
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            className="text-3xl md:text-5xl hover:text-primary transition-all duration-1000 font-medium text-white"
                                                            href="/need-facelift"
                                                            prefetch={false}
                                                        >
                                                            Need a Facelift
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </ul>
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
