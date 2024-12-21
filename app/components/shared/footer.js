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

export default function Footer() {
    return (
        <footer
            className="pt-56 pb-10 px-4 md:px-6 bg-cover bg-no-repeat bg-top"
            style={{
                backgroundImage: "url(/images/footer.png)",
                minHeight: 802,
            }}
        >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="col-span-6">
                    <div>
                        <Image
                            alt="oda_logo"
                            className="mt-5"
                            height={63}
                            src="/images/logo_2.png"
                            width={183}
                            priority
                        />
                        <span className="sr-only">Oda Logo</span>
                    </div>
                    <p className="mt-4 text-white text-xl max-w-[400px]">
                        We aim to change the concept of the finishing home by listening to
                        our customers who inspire us to stay ahead with innovative finishing
                        solutions & designs.
                    </p>
                    <div className="mt-8 flex items-center gap-4 text-gray-300">
                        <Mail size={20} />
                        <Link
                            href="mailto:shopcart_5@gmail.com"
                            prefetch={false}
                            target="_blank"
                        >
                            shopcart_5@gmail.com
                        </Link>
                    </div>
                    <div className="mt-2 flex items-center gap-4 text-gray-300">
                        <Phone size={20} />
                        <Link
                            href="tel:+20 111 2748 557"
                            prefetch={false}
                            target="_blank"
                        >
                            +20 111 2748 557
                        </Link>
                    </div>
                    <div className="mt-4 flex gap-4">
                        <Link
                            href="#"
                            prefetch={false}
                            target="_blank"
                        >
                            <Youtube
                                color="#fff"
                                size={24}
                            />
                        </Link>
                        <Link
                            href="#"
                            prefetch={false}
                            target="_blank"
                        >
                            <Instagram
                                color="#fff"
                                size={24}
                            />
                        </Link>
                        <Link
                            href="#"
                            prefetch={false}
                            target="_blank"
                        >
                            <Facebook
                                color="#fff"
                                size={24}
                            />
                        </Link>
                        <Link
                            href="#"
                            prefetch={false}
                            target="_blank"
                        >
                            <Twitter
                                color="#fff"
                                size={24}
                            />
                        </Link>
                    </div>
                </div>
                <div className="col-span-3">
                    <span className="text-white mb-4 inline-block text-lg md:text-4xl font-medium">Quick Links</span>
                    <ul className="space-y-2 text-white">
                        <Link
                            className="text-sm md:text-xl hover:text-primary transition-all duration-1000 font-medium text-white"
                            href="/"
                            prefetch={false}
                        >
                            Home
                        </Link>
                        <li>
                            <Link
                                className="text-sm md:text-xl hover:text-primary transition-all duration-1000 font-medium text-white"
                                href="/about-us"
                                prefetch={false}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-sm md:text-xl hover:text-primary transition-all duration-1000 font-medium text-white"
                                href="/why-oda"
                                prefetch={false}
                            >
                                Why Oda
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-sm md:text-xl hover:text-primary transition-all duration-1000 font-medium text-white"
                                href="/built-your-kit"
                                prefetch={false}
                            >
                                Built Your Kit
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-sm md:text-xl hover:text-primary transition-all duration-1000 font-medium text-white"
                                href="/successful-stories"
                                prefetch={false}
                            >
                                Successful Stories
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-sm md:text-xl hover:text-primary transition-all duration-1000 font-medium text-white"
                                href="/our-ambassador"
                                prefetch={false}
                            >
                                Oda Ambassador
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-sm md:text-xl hover:text-primary transition-all duration-1000 font-medium text-white"
                                href="/news-and-events"
                                prefetch={false}
                            >
                                News & Events
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-sm md:text-xl hover:text-primary transition-all duration-1000 font-medium text-white"
                                href="/contact-us"
                                prefetch={false}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-span-3">
                    <ul className="space-y-2 text-white">
                        <li>
                            <Link
                                className="text-sm md:text-xl hover:text-primary transition-all duration-1000 font-medium text-white"
                                href="/our-merchants"
                                prefetch={false}
                            >
                                Our Merchants
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-sm md:text-xl hover:text-primary transition-all duration-1000 font-medium text-white"
                                href="/our-partners"
                                prefetch={false}
                            >
                                Our Partners
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-sm md:text-xl hover:text-primary transition-all duration-1000 font-medium text-white"
                                href="/faqs"
                                prefetch={false}
                            >
                                FAQs
                            </Link>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <span className="text-white mb-2 inline-block font-medium text-base">Download App</span>
                        <div className="flex gap-4 flex-col">
                            <Link
                                href="#"
                                prefetch={false}
                            >
                                <Image
                                    alt="google_play"
                                    height={65}
                                    src="/images/google_play.png"
                                    width={180}
                                    priority
                                />
                            </Link>
                            <Link
                                href="#"
                                prefetch={false}
                            >
                                <Image
                                    alt="apple_store"
                                    height={65}
                                    src="/images/apple_store.png"
                                    width={180}
                                    priority
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
