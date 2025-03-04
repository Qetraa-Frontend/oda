import { create } from "zustand";

export const useLocateYourHomeStore = create((set, get) => ({
    addons: [],
    addonsPerRequest: [],
    airConditioningAddons: [],
    automation: {
        id: "",
        name: "",
    },
    bookingId: "",
    developer: {
        id: "",
        name: "",
    },
    info: {
        email: "",
        name: "",
        paymentPlan: {
            id: "",
            installmentMonths: "",
            name: "",
        },
        phoneNumber: "",
    },
    isActive: false,
    mode: "create",
    plan: {
        id: "",
        name: "",
    },
    questions: {},
    removeAddon: (id) => set({
        ...get(),
        addons: get().addons.filter(({ id: addonId }) => addonId !== id),
    }),
    removeAddonPerRequest: (id) => set({
        ...get(),
        addonsPerRequest: get().addonsPerRequest.filter(({ id: addonId }) => addonId !== id),
    }),
    removeAirConditioningAddon: (id) => set({
        ...get(),
        airConditioningAddons: get().airConditioningAddons.filter(({ id: addonId }) => addonId !== id),
    }),
    removeQuestion: (id) => set(() => {
        const updatedQuestions = { ...get().questions };

        delete updatedQuestions[id];

        return {
            ...get(),
            questions: updatedQuestions,
        };
    }),
    resetAirConditioningAddons: () => set({
        ...get(),
        airConditioningAddons: [],
    }),
    resetAll: () => set({
        addons: [],
        addonsPerRequest: [],
        airConditioningAddons: [],
        automation: {
            id: "",
            name: "",
        },
        bookingId: "",
        developer: {
            id: "",
            name: "",
        },
        info: {
            email: "",
            name: "",
            paymentPlan: {
                id: "",
                installmentMonths: "",
                name: "",
            },
            phoneNumber: "",
        },
        isActive: false,
        mode: "create",
        plan: {
            id: "",
            name: "",
        },
        project: {
            id: "",
            name: "",
        },
        questions: {},
        unitArea: {
            id: "",
            space: "",
        },
    }),
    setAddon: (addon) => set({
        ...get(),
        addons: [
            ...get().addons,
            addon,
        ],
    }),
    setAddonPerRequest: (addon) => set({
        ...get(),
        addonsPerRequest: [
            ...get().addonsPerRequest,
            addon,
        ],
    }),
    setAddonQuantity: (quantity, price, id) => set({
        ...get(),
        addons: get().addons.map((addon) => {
            if (addon.id === id) {
                return {
                    ...addon,
                    price,
                    quantity,
                };
            }

            return addon;
        }),
    }),
    setAddons: (addons) => set({ addons }),
    setAddonsPerRequest: (addons) => set({ addonsPerRequest: addons }),
    setAirConditioningAddon: (addon) => set({
        ...get(),
        airConditioningAddons: [
            ...get().airConditioningAddons,
            addon,
        ],
    }),
    setAirConditioningAddonQuantity: (quantity, price, id) => set({
        ...get(),
        airConditioningAddons: get().airConditioningAddons.map((addon) => {
            if (addon.id === id) {
                return {
                    ...addon,
                    price,
                    quantity,
                };
            }

            return addon;
        }),
    }),
    setAirConditioningAddons: (addons) => set({ airConditioningAddons: addons }),
    setAutomation: (automation) => set({
        ...get(),
        automation: {
            id: automation.id,
            name: automation.name,
        },
    }),
    setBookingId: (bookingId) => set({ bookingId }),
    setDeveloper: (developer) => set({
        ...get(),
        developer: {
            id: developer.id,
            name: developer.name,
        },
    }),
    setInfo: (info) => set({
        ...get(),
        info,
    }),
    setIsActive: (isActive) => set({ isActive }),
    setMode: (mode) => set({ mode }),
    setPlan: (plan) => set({
        ...get(),
        plan: {
            id: plan.id,
            name: plan.name,
        },
    }),
    setQuestion: (question) => set({
        ...get(),
        questions: {
            ...get().questions,
            [question.id]: {
                answer: question.answer,
                question: question.question,
            },
        },
    }),
    setQuestions: (questions) => set({ questions }),
    setUnitArea: (unitArea) => set({
        ...get(),
        unitArea,
    }),
    setUnitType: (project) => set({
        ...get(),
        unitType: {
            id: project.id,
            name: project.name,
        },
    }),
    unitArea: "",
    unitType: {
        id: "",
        name: "",
    },
}));
