import prisma from "../../../lib/prisma";

export async function POST(request) {
  try {
    const body = await request.json();
    const { orderId, userId } = body;

    // create payment transaction
    await prisma.payment.create({
        data: {
            userId: userId,
            status: true,
            orderId: orderId
        },
    });

    // search productId based on orderId
    const userCart = await prisma.cart.findMany({
        where: {
          userId: userId
        },
    });
    await Promise.all(
        userCart.map((cartItem) =>
            prisma.product.update({
                where: {
                    productId: cartItem.productId,
                },
                data: {
                    stock: {
                        decrement: cartItem.quantity,
                    },
                },
            })
        )
    );

    // delete current cart
    await prisma.cart.deleteMany({
        where: {
            userId: userId
        },
    });

    // update order status
    await prisma.order.update({
        where: {
            orderId: orderId,
        },
        data: {
            status: true
        },
    });

    return Response.json({ message: "Payment success" }, { status: 200 });
  } catch (err) {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}