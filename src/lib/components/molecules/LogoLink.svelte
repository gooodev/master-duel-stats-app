<script lang="ts">
	import Logo from '@components/atoms/Logo.svelte';

	export let href: string;
</script>

<a class="logo-link" {href}>
	<span>
		<Logo />
	</span>
	<h2>MD STAT</h2>
</a>

<style lang="postcss">
	.logo-link {
		display: flex;
		align-items: center;
		gap: var(--g-padding-sm);
		& span {
			width: 2rem;
			height: 2rem;
		}
		& h2 {
			font-family: var(--g-font-family-heading);
			font-size: 1.5rem;
		}
	}
</style>
