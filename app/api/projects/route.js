export const GET = async (req) => {
    const { searchParams } = new URL(req.url);

    const id = searchParams.get("id");

    const developerId = searchParams.get("developerId");

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

    try {
        let response;

        if (id) response = await fetch(`${backendUrl}Project/${id}`);
        else if (developerId) response = await fetch(`${backendUrl}Developer/${id}/ProjectsIDAndNames`);
        else response = await fetch(`${backendUrl}Project`);

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
