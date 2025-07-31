import Midtrans from "midtrans-client";
export const dynamic = 'force-dynamic';

let snap = new Midtrans.Snap({
  isProduction: true,
  serverKey: process.env.NEXT_PUBLIC_SERVER,
  clientKey: process.env.NEXT_PUBLIC_CLIENT
})

export async function POST(request) {
  try {
    const body = await request.json();
    const { orderId, totalPrice } = body;

    let parameter = {
        "transaction_details": {
            "order_id": orderId,
            "gross_amount": totalPrice
        }
    }
    const token = await snap.createTransactionToken(parameter)
    
    return Response.json({ token }, { status: 200 });
  } catch (err) {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}