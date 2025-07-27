import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from "../../../lib/prisma";

export async function POST(req) {
  const body = await req.json();
  const { username, password } = body;

  if (!username || !password) {
    return Response.json({ error: 'Username/email dan password wajib diisi' }, { status: 400 });
  }

  try {
    const user = await prisma.user.findFirst({ 
      where: {
        OR: [
          { email: username },
          { username: username },
        ],
      },
    });

    if (!user) {
      return Response.json({ error: 'User/Password Salah' }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return Response.json({ error: 'User/Password Salah' }, { status: 401 });
    }

    const token = jwt.sign(
      { userId: user.userId, email: user.email },
      process.env.JWT_SECRET
    );

    const userInfo = {
      username : user.username,
      email : user.email,
      id : user.userId,
      phone : user.phone,
      address : user.address
    };

    return Response.json({ token, userInfo }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Terjadi kesalahan server' }, { status: 500 });
  }
}
