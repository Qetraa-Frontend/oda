export const odaAmbassadorFormData = {
    ownerDetails: [
        {
            id: 1,
            label: "Name",
            name: "ownerName",
            type: "text",
        },
        {
            id: 2,
            label: "Phone Number",
            name: "ownerPhoneNumber",
            type: "text",
        },
        {
            id: 3,
            label: "Unit Area",
            name: "unitArea",
            type: "number",
        },
        {
            id: 4,
            label: "Unit Location",
            name: "unitLocation",
            type: "text",
        },
        {
            id: 5,
            isAsync: true,
            label: "Developer",
            name: "developer",
            type: "select",
        },
        {
            id: 6,
            label: "Budget",
            name: "budget",
            type: "number",
        },
    ],
    referralDetails: [
        {
            id: 1,
            label: "Name",
            name: "referralName",
            type: "text",
        },
        {
            id: 2,
            label: "Phone Number",
            name: "referralPhoneNumber",
            type: "text",
        },
        {
            id: 3,
            label: "Email",
            name: "referralEmail",
            type: "email",
        },
        {
            data: ["New Client", "Returning Client"],
            id: 4,
            label: "Client Status",
            name: "clientStatus",
            type: "select",
        },
    ],
};
