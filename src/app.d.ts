// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
/// <reference types="lucia" />

import type { AuthRequest } from "lucia";

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			auth: AuthRequest
		}
		// interface PageData {}
		// interface Platform {}
	}

	namespace Lucia {
		type Auth = import("$lib/server/lucia").Auth;
		type DatabaseUserAttributes = {};
		type DatabaseSessionAttributes = {};
	}
}

export {};
