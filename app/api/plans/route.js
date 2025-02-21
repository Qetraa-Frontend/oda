export const GET = async (req) => {
    const { searchParams } = new URL(req.url);

    const id = searchParams.get("id");

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

    try {
        let response;

        if (id) response = await fetch(`${backendUrl}Plan/${id}/PlanDetails`);
        else response = await fetch(`${backendUrl}Plan`);
        console.log(response);
        if (!response.ok) {
            console.log(response);
            return Response.json(
                { error: "Failed to fetch data from backend" },
                { status: response.status },
            );
        }
        console.log(response);

        const data = await response.json();

        return Response.json(data);
    } catch (error) {
        console.log(error);

        return Response.json(
            { error: "Internal Server Error" },
            { status: 500 },
        );
    }
};
