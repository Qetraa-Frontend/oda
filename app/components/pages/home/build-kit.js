"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomeBuildKit() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 pt-22 md:pt-44 pb-18 md:pb-36">
            <div className="col-span-1 md:col-span-6">
                <Image
                    alt="Build Kit"
                    height={677}
                    layout="responsive"
                    src="/images/pages/home/build_kit.png"
                    width={564}
                />
            </div>
            <div className="col-span-1 md:col-span-6">
                <h3 className="font-bold text-3xl md:text-5xl uppercase !leading-relaxed h-20 md:h-40">
                    Build your Kit with
                    <br className="hidden xl:block" />
                    {" "}
                    <span className="font-bold text-3xl md:text-5xl uppercase text-primary">oda</span>
                </h3>
                <p className="font-normal text-xl md:text-3xl py-8 md:py-16">Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.Lorem ipsum dolor sit amet consectetur. Id facilisi fringilla convallis vel nisl.</p>
                <Link
                    className="text-lg md:text-2xl font-medium relative top-6 md:top-12"
                    href="/why-oda"
                    prefetch={false}
                >
                    <button className="bg-gray-300 text-black py-2 px-8 border border-black rounded">Learn More</button>
                </Link>
            </div>
        </div>
    );
}
