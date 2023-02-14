<script lang="ts">
	import { page } from '$app/stores';
	import LayoutMain from '@components/templates/LayoutMain.svelte';
</script>

<LayoutMain currentPath={$page.url.pathname} loggedIn={true}>
	<slot />
</LayoutMain>
