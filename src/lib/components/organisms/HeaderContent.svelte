<script lang="ts">
	import IconButton from '@components/molecules/IconButton.svelte';
	import LogoLink from '@components/molecules/LogoLink.svelte';
	import MyPageButton from '@components/organisms/MyPageButton.svelte';
	export let loggedIn: boolean;
	export let onClickDrawerButton: VoidFunction | undefined = undefined;
</script>

<div class="container">
	{#if onClickDrawerButton}
		<button class="drawer-toggle" on:click={onClickDrawerButton}>
			<IconButton>
				<i class="ti ti-menu-2" />
			</IconButton>
		</button>
	{/if}
	<LogoLink href="/home" />
	<MyPageButton {loggedIn} />
</div>

<style lang="postcss">
	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: var(--g-color-base-100);
	}
</style>
