import { lucia } from "lucia";
import { sveltekit } from "lucia/middleware";
import { dev } from "$app/environment";
import { pg } from "@lucia-auth/adapter-postgresql";
import { db } from "@vercel/postgres";

// expect error (see next section)
export const auth = lucia({
	env: dev ? "DEV" : "PROD",
	middleware: sveltekit(),
  adapter: pg(db, {
		user: '',
    session: '',
    key: ''
	})
});

export type Auth = typeof auth;
