import Image from "next/image";

export default function NotFoundIntro() {
    return (
        <div className="container mx-auto flex flex-col items-center justify-center text-center min-h-[1000px]">
            <Image
                alt="404"
                height={382}
                loading="lazy"
                src="/images/pages/404/404.webp"
                width={382}
            />
            <div className="mt-[27px] md:mt-[55px]">
                <h2 className="font-medium text-xl md:text-3xl text-primary">Page Not Found</h2>
                <p className="font-medium text-sm md:text-lg text-[#888] mt-2 md:mt-4">The Page You are Looking for dosen’t exist or an other error occurred</p>
            </div>
        </div>
    );
}
