import Image from "next/image";

export default function Loading() {
    return (
        <div className="bg-primary flex flex-col items-center justify-center min-h-screen w-full relative z-50">
            <Image
                alt="logo"
                height={191}
                src="/images/logo_3.webp"
                width={556}
            />
            <div className="w-[233px] mt-[22px] md:mt-[45px]">
                <div className="h-[5px] w-full bg-black bg-opacity-40 overflow-hidden">
                    <div
                        className="animate-progress w-full h-full bg-black"
                        style={{ transformOrigin: "0% 50%" }}
                    />
                </div>
            </div>
        </div>
    );
}
