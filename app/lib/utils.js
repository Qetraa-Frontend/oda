import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => twMerge(clsx(inputs));

export const handleNumberInputLogic = (e) => {
    const { value } = e.target;

    e.target.value = value.replace( // eslint-disable-line
        /\D/g,
        "",
    );

    if (value.startsWith("0")) {
        e.target.value = value.replace( // eslint-disable-line
            /^0+/,
            "",
        );
    }

    if (value !== "" && (Number(value) < 1)) {
        e.target.value = 0; // eslint-disable-line

        return false; // eslint-disable-line
    }

    return true;
};

export const formatNumber = (number) => {
    if (number % 1 === 0) return number.toLocaleString();

    return number.toFixed(2).toLocaleString();
};
