import prisma from "../../../lib/prisma";

export async function GET(request) {
	try {
		const category = request.nextUrl.searchParams.get("categories");

		const products = await prisma.product.findMany({
			where: {
				categories: category,
				parentId: 0
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
