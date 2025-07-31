export const dynamic = 'force-dynamic';

export async function POST(request) {
    return Response.json({ message: 'Logged out successfully' }, { status: 200 });
}