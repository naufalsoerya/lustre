import prisma from "../../../lib/prisma";
export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const body = await request.json();
    const { orderId, userId } = body;

    // delete existed order item
    const existedOrderItem = await prisma.orderItem.findMany({
        where: {
          orderId: orderId
        },
    });
    if (existedOrderItem.length > 0) {
        await prisma.orderItem.deleteMany({
          where: {
            orderId: orderId,
          },
        });
    }

    // add new order item
    const userCart = await prisma.cart.findMany({
        where: {
          userId: userId
        },
    });
    const addOrderItem = userCart.map((cartItem) => {
        return prisma.orderItem.create({
            data: {
            orderId: orderId,
            productId: cartItem.productId,
            quantity: cartItem.quantity,
            },
        });
    });
    await Promise.all(addOrderItem);

    return Response.json({ message: "Checkout in process"  }, { status: 200 });
  } catch (err) {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}