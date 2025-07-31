import bcrypt from 'bcryptjs';
import prisma from "../../../lib/prisma";
export const dynamic = 'force-dynamic';

export async function POST(req) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, newPassword } = req.body;

  if (!email || !newPassword) {
    return res.status(400).json({ error: 'Email and new password are required' });
  }

  try {
    // Hash password baru
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update password di database
    const user = await prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    });

    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}
