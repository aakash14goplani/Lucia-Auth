import { auth } from '$lib/server/lucia';
import type { Handle, HandleServerError } from '@sveltejs/kit';

export const handleError = (async ({ error }) => {
	const message = 'Error captured from Server Hooks: ' + (error as any)?.message;
	console.log(message);
}) satisfies HandleServerError;

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);
	return await resolve(event);
};
