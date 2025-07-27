import prisma from "../../../lib/prisma";

export async function POST(request) {
  try {
    const body = await request.json();
    const { totalPrice, userId } = body;

    const isExistedOrder = await prisma.order.findFirst({
        where: {
          userId: userId,
          status: true
        },
    });

    let newOrder
    if (isExistedOrder) {
      newOrder = await prisma.order.create({
        data: {
          userId: userId,
          status: false,
          totalPrice: totalPrice
        },
      });
    } else {
      newOrder = await prisma.order.create({
        data: {
          userId,
          status: true,
          totalPrice,
        },
      });
    }

    return Response.json({ orderId: newOrder ? newOrder.orderId : isExistedOrder.orderId, isExisted: false  }, { status: 200 });
  } catch (err) {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}