export const GET = async () => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

    try {
        const response = await fetch(`${backendUrl}UnitType`);

        if (!response.ok) {
            return Response.json(
                { error: "Failed to fetch unit types" },
                { status: response.status },
            );
        }

        const data = await response.json();
        return Response.json(data);
    } catch (error) {
        return Response.json(
            { error: "Internal Server Error" },
            { status: 500 },
        );
    }
};
