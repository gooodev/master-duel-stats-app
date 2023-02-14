<script lang="ts">
	export let action: 'login' | 'register' = 'login';
	const label = action === 'login' ? 'Login' : 'Register';
</script>

<form method="POST" {action}>
	<h1>{label}</h1>
	<label for="email">Email</label>
	<input type="email" id="email" name="email" required />
	<label for="password">Password</label>
	<input type="password" id="password" name="password" required />
	<button type="submit">{label}</button>
</form>
