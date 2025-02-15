import { create } from "zustand";

export const useLocateYourHomeStore = create((set, get) => ({
    addons: [],
    addonsPerRequest: [],
    airConditioningAddons: [],
    automation: {
        id: "",
        name: "",
    },
    developer: {
        id: "",
        name: "",
    },
    plan: {
        id: "",
        name: "",
    },
    project: {
        id: "",
        name: "",
    },
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
    resetAirConditioningAddons: () => set({
        ...get(),
        airConditioningAddons: [],
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
    setAddonQuantity: (quantity, id) => set({
        ...get(),
        addons: get().addons.map((addon) => {
            if (addon.id === id) {
                return {
                    ...addon,
                    quantity,
                };
            }

            return addon;
        }),
    }),
    setAirConditioningAddon: (addon) => set({
        ...get(),
        airConditioningAddons: [
            ...get().airConditioningAddons,
            addon,
        ],
    }),
    setAirConditioningAddonQuantity: (quantity, id) => set({
        ...get(),
        airConditioningAddons: get().airConditioningAddons.map((addon) => {
            if (addon.id === id) {
                return {
                    ...addon,
                    quantity,
                };
            }

            return addon;
        }),
    }),
    setAutomation: (automation) => set({
        ...get(),
        automation: {
            id: automation.id,
            name: automation.name,
        },
    }),
    setDeveloper: (developer) => set({
        ...get(),
        developer: {
            id: developer.id,
            name: developer.name,
        },
    }),
    setPlan: (plan) => set({
        ...get(),
        plan: {
            id: plan.id,
            name: plan.name,
        },
    }),
    setProject: (project) => set({
        ...get(),
        project: {
            id: project.id,
            name: project.name,
        },
    }),
    setUnitArea: (unitArea) => set({
        ...get(),
        unitArea,
    }),
    unitArea: {
        id: "",
        space: "",
    },
}));
