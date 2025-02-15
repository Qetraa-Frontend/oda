export const GET = async (req) => {
    const { searchParams } = new URL(req.url);

    const id = searchParams.get("id");

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

    try {
        let response;

        if (id) response = await fetch(`${backendUrl}Developer/${id}`);
        else response = await fetch(`${backendUrl}Developer`);

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
