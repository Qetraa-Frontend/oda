/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: ["class"],
    plugins: [require("tailwindcss-animate")],
    theme: {
        extend: {
            animation: {
                slideInFromBottom: "slideInFromBottom .5s linear .5s",
                slideOutToTop: "slideOutToTop 1s linear",
                wiggle: "wiggle 0.2s ease-in-out infinite;",
                wiggleBottom: "wiggleBottom 0.2s ease-in-out infinite;",
                wiggleTop: "wiggleTop 0.2s ease-in-out infinite;",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            colors: {
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                background: "hsl(var(--background))",
                border: "hsl(var(--border))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                chart: {
                    1: "hsl(var(--chart-1))",
                    2: "hsl(var(--chart-2))",
                    3: "hsl(var(--chart-3))",
                    4: "hsl(var(--chart-4))",
                    5: "hsl(var(--chart-5))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                foreground: "hsl(var(--foreground))",
                input: "hsl(var(--input))",
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                ring: "hsl(var(--ring))",
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
            },
            fontFamily: {
                "albert-sans": "var(--font-albert-sans)",
                "nanum-myeongjo": "var(--font-nanum-myeongjo)",
            },
            keyframes: {
                slideInFromBottom: {
                    "0%": {
                        transform: "translateY(0%)",
                    },
                    "50%": {
                        transform: "translateY(-50%)",
                    },
                    "100%": { // eslint-disable-line
                        transform: "translateY(-100%)",
                    },
                },
                slideOutToTop: {
                    "0%": {
                        transform: "translateY(0)",
                    },
                    "50%": {
                        transform: "translateY(-50%)",
                    },
                    "100%": { // eslint-disable-line
                        transform: "translateY(-100%)",
                    },
                },
                wiggle: {
                    "0%, 100%": {
                        transform: "translateX(0)",
                    },
                    "25%": {
                        transform: "translateX(-4px)",
                    },
                    "75%": {
                        transform: "translateX(4px)",
                    },
                },
                wiggleBottom: {
                    "0%, 100%": {
                        rotate: "15deg",
                    },
                    "25%": {
                        rotate: "17deg",
                    },
                    "75%": {
                        rotate: "15deg",
                    },
                },
                wiggleTop: {
                    "0%, 100%": {
                        rotate: "-15deg",
                    },
                    "25%": {
                        rotate: "-17deg",
                    },
                    "75%": {
                        rotate: "-15deg",
                    },
                },
            },
        },
    },
};
