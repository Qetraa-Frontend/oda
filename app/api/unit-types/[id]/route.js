export const GET = async (req, { params }) => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const { id } = params;

    if (!id) {
        return Response.json(
            { error: "Unit Type ID is required" },
            { status: 400 },
        );
    }

    try {
        const response = await fetch(`${backendUrl}UnitType/${id}`);

        if (!response.ok) {
            return Response.json(
                { error: "Failed to fetch unit type details" },
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
