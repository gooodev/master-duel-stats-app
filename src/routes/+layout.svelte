<script lang="ts">
	import { page } from '$app/stores';
	import '@components/styles/app.postcss';
	import { handleSession } from '@lucia-auth/sveltekit/client';

	handleSession(page);
</script>

<slot />
