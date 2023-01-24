import type { RequestHandler } from '@sveltejs/kit';
import { getToken } from '@auth/core/jwt';
export const GET: RequestHandler = async ({ request }) => {
	const jwt = await getToken({ req: request, secret: 's3cr3t' });
	return new Response(String(jwt));
};
