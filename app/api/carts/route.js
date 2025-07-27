import prisma from "../../../lib/prisma";

export async function POST(request) {
  try {
    const body = await request.json();
    const { productId, userId } = body;

    const product = await prisma.product.findFirst({
        where: {
          productId: Number(productId)
        },
    });

    if (product.stock < 1) {
      return Response.json({ message: "This product size is out of stock" }, { status: 400 });
    }

    const existedCart = await prisma.cart.findFirst({
      where: {
        productId: Number(productId),
        userId: userId
      },
    });

    if (existedCart) {
      await prisma.cart.update({
        where: {
          cartId: existedCart.cartId,
        },
        data: {
          quantity: existedCart.quantity + 1
        },
      });
  
      return Response.json({ message: "Product Added to Cart" }, { status: 200 });
    }

    await prisma.cart.create({
      data: {
        userId: userId,
        productId: Number(productId),
        quantity: 1
      },
    });

    return Response.json({ message: "Product Added to Cart" }, { status: 200 });
  } catch (err) {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function GET(request) {
	try {
    const { searchParams } = new URL(request.url);
    const userId = Number(searchParams.get("userId"));

		const cart = await prisma.cart.findMany({
			where: {
				userId: userId
			},
      include: {
        product: true, 
      }
		});

		return Response.json(cart);
	} catch (error) {
		console.error("Failed to fetch products:", error);
		return Response.json({ error: "Failed to fetch products" }, { status: 500 });
	}
}

export async function DELETE(request) {
  try {
    const body = await request.json();
    const { productId, userId } = body;

    const carts = await prisma.cart.findFirst({
      where: {
        productId: Number(productId)
      },
    });

    if (carts.quantity > 1) {
      await prisma.cart.update({
        where: {
          cartId: carts.cartId,
        },
        data: {
          quantity: carts.quantity - 1
        },
      });
    } else {
      await prisma.cart.deleteMany({
        where: {
          userId: Number(userId),
          productId: Number(productId),
        },
      });
    }

    return Response.json({ message: "Item removed from cart" }, { status: 200 });
  } catch (err) {
    console.error("Failed to delete item:", err);
    return Response.json({ error: "Failed to delete item" }, { status: 500 });
  }
}