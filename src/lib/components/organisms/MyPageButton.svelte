<script lang="ts">
	import IconButton from '@components/molecules/IconButton.svelte';

	export let loggedIn: boolean;
	const href = loggedIn ? '/mypage' : '/auth/login';
</script>

<a {href} role="button">
	<IconButton>
		<i class="ti ti-user" />
	</IconButton>
</a>
