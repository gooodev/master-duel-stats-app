<script lang="ts">
	import { routes } from '$lib/routes';
	import NavigationItem from '@components/molecules/NavigationItem.svelte';

	export let appearance: 'wide' | 'narrow';
	export let currentPath: string;
	export let onClickNavItem: (event: MouseEvent) => void = () => {};
	const navItems = [
		{
			...routes.record,
			iconClass: 'ti ti-info'
		},
		{
			...routes.deck,
			iconClass: 'ti ti-book'
		},
		{
			...routes.stats,
			iconClass: 'ti ti-chart-bar'
		},
		{
			...routes.stats,
			iconClass: 'ti ti-chart-bar'
		},
		{
			...routes.stats,
			iconClass: 'ti ti-chart-bar'
		}
	];
</script>

<nav>
	<ul class={appearance}>
		{#each navItems as navItem}
			<li>
				<a href={navItem.url} on:click={onClickNavItem}>
					<NavigationItem {appearance} current={navItem.url === currentPath}>
						<i class={navItem.iconClass} slot="icon" />
						<p slot="label">{navItem.name}</p>
					</NavigationItem>
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="postcss">
	nav {
		height: 100%;
		background-color: var(--g-color-base-200);
		& ul {
			display: grid;
			gap: var(--g-gap-sm);
			&.wide {
				padding: var(--g-padding-md);
			}
			&.narrow {
				padding: var(--g-padding-sm);
			}
			& a {
				position: relative;
				align-items: center;
				width: 100%;
			}
		}
	}
</style>
