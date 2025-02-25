import {
    Mail,
    Phone,
} from "lucide-react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export default function Social({ color }) {
    return (
        <div className={`${color === "white" ? "text-white" : "text-black"} mt-[19px] md:mt-[38px] flex flex-col gap-[9px] md:gap-[18px]`}>
            <div className="flex items-center gap-1 md:gap-2 w-fit hover:text-primary transition-all duration-1000">
                <Mail size={20} />
                <Link
                    className="font-normal text-xs md:text-base"
                    href="info@oda-me.com"
                    prefetch={false}
                    target="_blank"
                >
                    info@oda-me.com
                </Link>
            </div>
            <div className="flex items-center gap-1 md:gap-2 w-fit hover:text-primary transition-all duration-1000">
                <Phone size={20} />
                <Link
                    className="font-normal text-xs md:text-base"
                    href="tel:+201080555597"
                    prefetch={false}
                    target="_blank"
                >
                    +20 108 0555597
                </Link>
            </div>
            <div className="flex items-center gap-1 md:gap-2 -ml-2">
                <SocialIcon
                    bgColor="transparent"
                    fgColor={color || "black"}
                    target="_blank"
                    url="https://www.facebook.com/theodahome"
                    style={{
                        height: 35,
                        width: 35,
                    }}
                />
                <SocialIcon
                    bgColor="transparent"
                    className="font-normal text-xs md:text-base hover:text-primary transition-all duration-1000"
                    fgColor={color || "black"}
                    target="_blank"
                    url="https://x.com/odahomesolution"
                    style={{
                        height: 35,
                        width: 35,
                    }}
                />
                <SocialIcon
                    bgColor="transparent"
                    className="font-normal text-xs md:text-base hover:text-primary transition-all duration-1000"
                    fgColor={color || "black"}
                    target="_blank"
                    url="https://www.youtube.com/@odahomesolution"
                    style={{
                        height: 35,
                        width: 35,
                    }}
                />
                <SocialIcon
                    bgColor="transparent"
                    className="font-normal text-xs md:text-base hover:text-primary transition-all duration-1000"
                    fgColor={color || "black"}
                    target="_blank"
                    url="https://www.tiktok.com/@odahomesolution"
                    style={{
                        height: 35,
                        width: 35,
                    }}
                />
                <SocialIcon
                    bgColor="transparent"
                    className="font-normal text-xs md:text-base hover:text-primary transition-all duration-1000"
                    fgColor={color || "black"}
                    target="_blank"
                    url="https://www.instagram.com/theodahome?igsh=MTc2ZjY2M2VnM3U5OA=="
                    style={{
                        height: 35,
                        width: 35,
                    }}
                />
                <SocialIcon
                    bgColor="transparent"
                    className="font-normal text-xs md:text-base hover:text-primary transition-all duration-1000"
                    fgColor={color || "black"}
                    target="_blank"
                    url="https://www.linkedin.com/company/odahomesolution"
                    style={{
                        height: 35,
                        width: 35,
                    }}
                />
            </div>
        </div>
    );
}
