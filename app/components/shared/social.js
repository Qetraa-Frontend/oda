import {
    Facebook,
    Instagram,
    Mail,
    Phone,
    Twitter,
    Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Social({ color }) {
    return (
        <div className={`${color} mt-[19px] md:mt-[38px] flex flex-col gap-[9px] md:gap-[18px]`}>
            <div className="flex items-center gap-1 md:gap-2 hover:text-primary transition-all duration-1000">
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
            <div className="flex items-center gap-1 md:gap-2 hover:text-primary transition-all duration-1000">
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
                    className="font-normal text-xs md:text-base hover:text-primary transition-all duration-1000"
                    href="#"
                    prefetch={false}
                    target="_blank"
                >
                    <Youtube size={24} />
                </Link>
                <Link
                    className="font-normal text-xs md:text-base hover:text-primary transition-all duration-1000"
                    href="#"
                    prefetch={false}
                    target="_blank"
                >
                    <Instagram size={24} />
                </Link>
                <Link
                    className="font-normal text-xs md:text-base hover:text-primary transition-all duration-1000"
                    href="#"
                    prefetch={false}
                    target="_blank"
                >
                    <Facebook size={24} />
                </Link>
                <Link
                    className="font-normal text-xs md:text-base hover:text-primary transition-all duration-1000"
                    href="#"
                    prefetch={false}
                    target="_blank"
                >
                    <Twitter size={24} />
                </Link>
            </div>
        </div>
    );
}
