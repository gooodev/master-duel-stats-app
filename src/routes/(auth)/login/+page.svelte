<script lang="ts">
	import { validator } from '@felte/validator-zod';
	import { createForm } from 'felte';
	import { z } from 'zod';

	const User = z.object({
		email: z.string().email(),
		password: z.string().min(8)
	});
	type User = z.infer<typeof User>;
	const { form, errors } = createForm({
		extend: validator({ schema: User }),
		onError: (errors) => {
			console.log(errors);
		}
	});
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<form method="POST">
	<hgroup>
		<h2>Login</h2>
		<h3>Welcome back!</h3>
	</hgroup>
	<label for="username">Username</label>
	<input type="text" id="username" name="username" required />

	<label for="password">Password</label>
	<input type="password" id="password" name="password" required />

	<button type="submit">Login</button>
</form>
<p>Don't have an account? <a href="/auth/register">Register</a></p>
