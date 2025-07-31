import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";
export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const body = await request.json();
    const { username, email, password, phone, address } = body;

    const existing = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existing) {
      return Response.json({ error: "Email atau username sudah digunakan." }, { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        username,
        email,
        password: hashed,
        phone, 
        address
      },
    });

    return Response.json({ message: "User created successfully" }, { status: 200 });
  } catch (err) {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
