import dynamic from "next/dynamic";

const CheckoutHero = dynamic(() => import("@/app/components/pages/checkout/hero"));
const CheckoutQuestions = dynamic(() => import("@/app/components/pages/checkout/questions"));
const CheckoutPaymentPlans = dynamic(() => import("@/app/components/pages/checkout/payment-plans"));
const CheckoutForm = dynamic(() => import("@/app/components/pages/checkout/form"));

export const metadata = { title: "Oda | Checkout" };

export default async function Checkout() {
    const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    const paymentPlansResponse = await fetch(
        `${publicSiteUrl}api/payment-plans`,
        { cache: "no-store" },
    );

    const paymentPlans = await paymentPlansResponse.json();

    const formattedPaymentPlans = paymentPlans.reduce(
        (acc, payment) => {
            const {
                adminfees,
                adminfeespercentage,
                description,
                downpayment,
                downpaymentpercentage,
                iconBase64,
                interestrate,
                interestrateperyearpercentage,
                numberofinstallmentmonths,
                paymentplanid,
                paymentplanname,
            } = payment;

            if (!acc[paymentplanname]) {
                acc[paymentplanname] = {
                    description,
                    iconBase64,
                    installemntPlans: [],
                    paymentplanname,
                };
            }

            acc[paymentplanname].installemntPlans.push({
                adminfees,
                adminfeespercentage,
                downpayment,
                downpaymentpercentage,
                interestrate,
                interestrateperyearpercentage,
                numberofinstallmentmonths,
                paymentplanid,
            });

            return acc;
        },
        {},
    );

    return (
        <div>
            <CheckoutHero />
            <CheckoutQuestions />
            <CheckoutPaymentPlans paymentPlans={Object.values(formattedPaymentPlans)} />
            <CheckoutForm paymentPlans={paymentPlans} />
        </div>
    );
}
