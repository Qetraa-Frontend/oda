"use client";

import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
    Sheet, SheetClose, SheetContent, SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
    const [hiddenNavbar, setHiddenNavbar] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-none">
            <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
                {!hiddenNavbar && (
                    <>
                        <Link
                            className="flex items-center gap-2"
                            href="#"
                            prefetch={false}
                        >
                            <Image
                                alt="oda_logo"
                                className="mt-5"
                                height={63}
                                src="/logo.png"
                                width={183}
                                priority
                            />
                            <span className="sr-only">Oda Logo</span>
                        </Link>
                        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
                            <Link
                                className="text-xl font-normal text-white"
                                href="/"
                                prefetch={false}
                            >
                                Home
                            </Link>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center gap-1 text-xl font-normal text-white outline-none">
                                    Services
                                    <ChevronDownIcon className="h-4 w-4" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>
                                        <Link
                                            className="text-lg font-normal"
                                            href="/locate-your-home"
                                            prefetch={false}
                                        >
                                            Locate Your Home
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link
                                            className="text-lg font-normal"
                                            href="/book-your-kit"
                                            prefetch={false}
                                        >
                                            Build Your Kit
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link
                                            className="text-lg font-normal"
                                            href="/need-facelift"
                                            prefetch={false}
                                        >
                                            Need a Facelift
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Link
                                className="text-xl font-normal text-white"
                                href="/about-us"
                                prefetch={false}
                            >
                                About Us
                            </Link>
                        </nav>
                    </>
                )}
                <div className="flex items-center gap-4">
                    {!hiddenNavbar && (
                        <>
                            <div className="hidden items-center gap-2 text-sm font-medium md:flex cursor-pointer">
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
                                        {" "}
                                        <span className="sr-only">Search</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-[300px] p-4">
                                    <div className="relative">
                                        <Image
                                            alt="search"
                                            height={25}
                                            src="/icons/search.svg"
                                            width={25}
                                            priority
                                        />
                                        {" "}
                                        <Input
                                            className="pl-8 w-full"
                                            placeholder="Search..."
                                            type="search"
                                        />
                                    </div>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>
                    )}
                    <Sheet onOpenChange={() => setHiddenNavbar(!hiddenNavbar)}>
                        {!hiddenNavbar && (
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
                                    {" "}
                                    <span className="sr-only">Toggle Navigation Menu</span>
                                </Button>
                            </SheetTrigger>
                        )}
                        <SheetContent
                            className="bg-transparent border-b-transparent"
                            side="top"
                            style={{
                                borderRadius: "0 0 70px 70px",
                                height: 1021,
                            }}
                        >
                            <SheetClose className="absolute top-4 right-4">
                                <Image
                                    alt="arrow-right"
                                    height={25}
                                    src="/icons/arrow-right.svg"
                                    width={25}
                                    priority
                                />
                                {" "}
                                <span className="sr-only">Close</span>
                            </SheetClose>
                            <div className="container mx-auto flex items-center justify-between px-4 md:px-6 mt-6 mb-8">
                                <Image
                                    alt="oda_logo"
                                    className="mt-5"
                                    height={63}
                                    src="/logo_2.png"
                                    width={183}
                                    priority
                                />
                                <span className="sr-only">Oda Logo</span>
                            </div>
                            <div className="container mx-auto md:flex items-center justify-between px-4 md:px-6">
                                <div>
                                    <span className="text-gray-500 mb-8 inline-block text-4xl font-medium">Quick Links</span>
                                    <div className="flex flex-col gap-8 mt-2">
                                        <Link
                                            className="text-xl md:text-5xl hover:text-primary transition-all duration-500 font-medium text-white"
                                            href="/"
                                            prefetch={false}
                                        >
                                            Home
                                        </Link>
                                        <Link
                                            className="text-xl md:text-5xl hover:text-primary transition-all duration-500 font-medium text-white"
                                            href="/about-us"
                                            prefetch={false}
                                        >
                                            About Us
                                        </Link>
                                        <Link
                                            className="text-xl md:text-5xl hover:text-primary transition-all duration-500 font-medium text-white"
                                            href="/why-oda"
                                            prefetch={false}
                                        >
                                            Why Oda
                                        </Link>
                                        <Link
                                            className="text-xl md:text-5xl hover:text-primary transition-all duration-500 font-medium text-white"
                                            href="contact-us"
                                            prefetch={false}
                                        >
                                            Contact Us
                                        </Link>
                                        <Link
                                            className="text-xl md:text-5xl hover:text-primary transition-all duration-500 font-medium text-white"
                                            href="/successful-stories"
                                            prefetch={false}
                                        >
                                            Successful Stories
                                        </Link>
                                        <Link
                                            className="text-xl md:text-5xl hover:text-primary transition-all duration-500 font-medium text-white"
                                            href="/oda-ambassador"
                                            prefetch={false}
                                        >
                                            Oda Ambassador
                                        </Link>
                                        <Link
                                            className="text-xl md:text-5xl hover:text-primary transition-all duration-500 font-medium text-white"
                                            href="/news-and-events"
                                            prefetch={false}
                                        >
                                            News & Events
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col gap-8 mt-8 md:mt-20">
                                        <Link
                                            className="text-xl md:text-5xl hover:text-primary transition-all duration-500 font-medium text-white"
                                            href="/our-merchants"
                                            prefetch={false}
                                        >
                                            Our Merchants
                                        </Link>
                                        <Link
                                            className="text-xl md:text-5xl hover:text-primary transition-all duration-500 font-medium text-white"
                                            href="/our-partners"
                                            prefetch={false}
                                        >
                                            Our Partners
                                        </Link>
                                        <Link
                                            className="text-xl md:text-5xl hover:text-primary transition-all duration-500 font-medium text-white"
                                            href="/faqs"
                                            prefetch={false}
                                        >
                                            FAQs
                                        </Link>
                                        <div>
                                            <span className="text-gray-500 mb-2 mt-8 inline-block text-4xl font-medium">Our Services</span>
                                            <div className="flex flex-col gap-8 mt-4">
                                                <Link
                                                    className="text-xl md:text-5xl hover:text-primary transition-all duration-500 font-medium text-white"
                                                    href="/locate-your-home"
                                                    prefetch={false}
                                                >
                                                    Locate Your Home
                                                </Link>
                                                <Link
                                                    className="text-xl md:text-5xl hover:text-primary transition-all duration-500 font-medium text-white"
                                                    href="/build-your-kit"
                                                    prefetch={false}
                                                >
                                                    Build Your Kit
                                                </Link>
                                                <Link
                                                    className="text-xl md:text-5xl hover:text-primary transition-all duration-500 font-medium text-white"
                                                    href="/need-facelift"
                                                    prefetch={false}
                                                >
                                                    Need a Facelift
                                                </Link>
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
