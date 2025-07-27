import prisma from "../../../lib/prisma";

export async function GET(request) {
    try {
        const parentId = request.nextUrl.searchParams.get("parentId");

        const products = await prisma.product.findMany({
            where: {
                parentId: Number(parentId)
            },
            orderBy: {
                productId: 'desc'
            }
        });

        return Response.json(products);
    } catch (error) {
        console.error("Failed to fetch products:", error);
        return Response.json({ error: "Failed to fetch products" }, { status: 500 });
    }
}
