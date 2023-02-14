<script lang="ts">
	import PageMypage from '@components/templates/PageMypage.svelte';
	import PageUnauthenticated from '@components/templates/PageUnauthenticated.svelte';
	import { getUser } from '@lucia-auth/sveltekit/client';
	const user = getUser();

	console.log($user);
</script>

{#if $user != null}
	<PageMypage />
{:else}
	<PageUnauthenticated />
{/if}
