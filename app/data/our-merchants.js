const airConditionMerchants = [
    {
        alt: "amazon",
        id: 1,
        imageSrc: "/images/pages/our-merchants/merchants/amazon.webp",
    },
    {
        alt: "carrier",
        id: 2,
        imageSrc: "/images/pages/our-merchants/merchants/carrier.webp",
    },
    {
        alt: "lg",
        id: 3,
        imageSrc: "/images/pages/our-merchants/merchants/lg.webp",
    },
    {
        alt: "samsung",
        id: 4,
        imageSrc: "/images/pages/our-merchants/merchants/samsung.webp",
    },
    {
        alt: "sharp",
        id: 5,
        imageSrc: "/images/pages/our-merchants/merchants/sharp.webp",
    },
    {
        alt: "hisense",
        id: 6,
        imageSrc: "/images/pages/our-merchants/merchants/hisense.webp",
    },
];

const appliancesMerchants = [
    {
        alt: "btech",
        id: 1,
        imageSrc: "/images/pages/our-merchants/merchants/btech.webp",
    },
    {
        alt: "amazon",
        id: 2,
        imageSrc: "/images/pages/our-merchants/merchants/amazon.webp",
    },
    {
        alt: "samsung",
        id: 3,
        imageSrc: "/images/pages/our-merchants/merchants/samsung.webp",
    },
    {
        alt: "carrier",
        id: 4,
        imageSrc: "/images/pages/our-merchants/merchants/carrier.webp",
    },
    {
        alt: "lg",
        id: 5,
        imageSrc: "/images/pages/our-merchants/merchants/lg.webp",
    },
    {
        alt: "black_and_decker",
        id: 6,
        imageSrc: "/images/pages/our-merchants/merchants/black_and_decker.webp",
    },
    {
        alt: "toshiba",
        id: 7,
        imageSrc: "/images/pages/our-merchants/merchants/toshiba.webp",
    },
];

const furnitureMerchants = [
    {
        alt: "ikea",
        id: 1,
        imageSrc: "/images/pages/our-merchants/merchants/ikea.webp",
    },
    {
        alt: "vitrine",
        id: 2,
        imageSrc: "/images/pages/our-merchants/merchants/vitrine.webp",
    },
    {
        alt: "homzmart",
        id: 3,
        imageSrc: "/images/pages/our-merchants/merchants/homzmart.webp",
    },
];

const homeFashionMerchants = [
    {
        alt: "ikea",
        id: 1,
        imageSrc: "/images/pages/our-merchants/merchants/ikea.webp",
    },
];

const homeGadgetsMerchants = [
    {
        alt: "ikea",
        id: 1,
        imageSrc: "/images/pages/our-merchants/merchants/ikea.webp",
    },
];

const mobilesMerchants = [
    {
        alt: "tradeline",
        id: 1,
        imageSrc: "/images/pages/our-merchants/merchants/tradeline.webp",
    },
    {
        alt: "samsung",
        id: 2,
        imageSrc: "/images/pages/our-merchants/merchants/samsung.webp",
    },
    {
        alt: "amazon",
        id: 3,
        imageSrc: "/images/pages/our-merchants/merchants/amazon.webp",
    },
];

const travelMerchants = [
    {
        alt: "star_alliance",
        id: 1,
        imageSrc: "/images/pages/our-merchants/merchants/star_alliance.webp",
    },
    {
        alt: "airbnb",
        id: 2,
        imageSrc: "/images/pages/our-merchants/merchants/airbnb.webp",
    },
    {
        alt: "booking",
        id: 3,
        imageSrc: "/images/pages/our-merchants/merchants/booking.webp",
    },
    {
        alt: "kayak",
        id: 4,
        imageSrc: "/images/pages/our-merchants/merchants/kayak.webp",
    },
    {
        alt: "expedia",
        id: 5,
        imageSrc: "/images/pages/our-merchants/merchants/expedia.webp",
    },
];

export const ourMerchants = {
    all: {
        key: "all",
        merchantsCategories: {
            airCondition: {
                key: "airCondition",
                merchants: airConditionMerchants,
                tab: "Air Condition",
            },
            appliances: {
                key: "appliances",
                merchants: appliancesMerchants,
                tab: "Appliances",
            },
            furniture: {
                key: "furniture",
                merchants: furnitureMerchants,
                tab: "Furniture",
            },
            homeFashion: {
                key: "homeFashion",
                merchants: homeFashionMerchants,
                tab: "Home Fashion",
            },
            homeGadgets: {
                key: "homeGadgets",
                merchants: homeGadgetsMerchants,
                tab: "Home Gadgets",
            },
            mobiles: {
                key: "mobiles",
                merchants: mobilesMerchants,
                tab: "Mobiles",
            },
            travel: {
                key: "travel",
                merchants: travelMerchants,
                tab: "Travel",
            },
        },
        tab: "All",
    },
    airCondition: { // eslint-disable-line
        key: "airCondition",
        merchants: airConditionMerchants,
        tab: "Air Condition",
    },
    appliances: {
        key: "appliances",
        merchants: appliancesMerchants,
        tab: "Appliances",
    },
    furniture: {
        key: "furniture",
        merchants: furnitureMerchants,
        tab: "Furniture",
    },
    homeFashion: {
        key: "homeFashion",
        merchants: homeFashionMerchants,
        tab: "Home Fashion",
    },
    homeGadgets: {
        key: "homeGadgets",
        merchants: homeGadgetsMerchants,
        tab: "Home Gadgets",
    },
    mobiles: {
        key: "mobiles",
        merchants: mobilesMerchants,
        tab: "Mobiles",
    },
    travel: {
        key: "travel",
        merchants: travelMerchants,
        tab: "Travel",
    },
};
