export const GET = async (req) => {
    const { searchParams } = new URL(req.url);

    const projectId = searchParams.get("projectId");

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

    try {
        let response;

        if (projectId) response = await fetch(`${backendUrl}Project/by-name/${projectId}/available-apartment-spaces`);

        if (!response.ok) {
            return Response.json(
                { error: "Failed to fetch data from backend" },
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
