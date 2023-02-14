// See https://kit.svelte.dev/docs/types#app

declare global {
	/// <reference types="@sveltejs/kit" />
	namespace App {
		// interface Error {}
		interface Locals {
			validate: import('@lucia-auth/sveltekit').Validate;
			validateUser: import('@lucia-auth/sveltekit').ValidateUser;
			setSession: import('@lucia-auth/sveltekit').SetSession;
		}
		// interface PageData {}
		// interface Platform {}
	}
	// eslint-disable-next-line no-var
	var __prisma: import('@prisma/client').PrismaClient;

	/// <reference types="lucia-auth" />
	declare namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth;
		type UserAttributes = {
			username: string;
			name: string;
		};
	}
}

export {};
