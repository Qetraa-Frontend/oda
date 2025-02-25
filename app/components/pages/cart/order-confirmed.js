import Image from "next/image";

export default function OrderConfirmed() {
    return (
        <div className="container mx-auto flex flex-col items-center justify-center text-center min-h-[1000px]">
            <Image
                alt="order_confirmed"
                height={213}
                loading="lazy"
                src="/images/pages/cart/order_confirmed.webp"
                width={211}
            />
            <div className="mt-[27px] md:mt-[55px]">
                <h2 className="font-medium text-xl md:text-3xl text-primary">Confirmed Successfully</h2>
                <p className="font-medium text-sm md:text-lg text-[#888] mt-2 md:mt-4">Your order has been confirmed Successfully thanks for your time!</p>
            </div>
        </div>
    );
}
