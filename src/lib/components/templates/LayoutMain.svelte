<script lang="ts">
	import ModalOverlay from '@components/molecules/ModalOverlay.svelte';
	import HeaderContent from '@components/organisms/HeaderContent.svelte';
	import Navigation from '@components/organisms/Navigation.svelte';

	export let currentPath: string;
	export let loggedIn: boolean;

	let drawerOpen = false;
	const openDrawer = () => (drawerOpen = true);
	const closeDrawer = () => (drawerOpen = false);
</script>

<div id="root">
	<header>
		<div class="sp-header">
			<HeaderContent {loggedIn} onClickDrawerButton={openDrawer} />
		</div>
		<div class="pc-header">
			<HeaderContent {loggedIn} />
		</div>
	</header>

	<main><slot /></main>

	<aside>
		<div class="sp-sidebar">
			<div class="drawer-content" class:open={drawerOpen}>
				<Navigation appearance="wide" {currentPath} onClickNavItem={closeDrawer} />
			</div>
			<div class="drawer-overlay">
				<ModalOverlay open={drawerOpen} onClick={closeDrawer} />
			</div>
		</div>
		<div class="pc-sidebar">
			<Navigation appearance="narrow" {currentPath} onClickNavItem={closeDrawer} />
		</div>
	</aside>

	<footer>
		<small>&copy; 2022 MD Stats</small>
	</footer>
</div>

<style lang="postcss">
	#root {
		display: grid;
		grid-template-areas:
			'header'
			'main'
			'footer';
		grid-template-rows: auto 1fr auto;
		grid-template-columns: 1fr;
		height: 100dvh;
		@media (--breakpoint-pc) {
			grid-template-areas:
				'aside header'
				'aside main'
				'aside footer';
			grid-template-columns: auto 1fr;
		}
	}

	header {
		grid-area: header;
		position: sticky;
		inset: 0;
		& .sp-header {
			padding: var(--g-padding-xs) var(--g-padding-md);
			@media (--breakpoint-pc) {
				display: none;
			}
		}
		& .pc-header {
			padding: var(--g-padding-sm) var(--g-padding-lg);
			@media (--breakpoint-sp) {
				display: none;
			}
		}
	}

	aside {
		grid-area: aside;
		& .sp-sidebar {
			@media (--breakpoint-pc) {
				display: none;
			}
			& .drawer-content {
				position: fixed;
				height: 100dvh;
				--drawer-width: 18rem;
				max-width: var(--drawer-width);
				inset: 0 0 0 calc(-1 * var(--drawer-width));
				transition: transform 0.2s ease;
				z-index: var(--g-z-index-modal);
				&.open {
					transform: translateX(var(--drawer-width));
				}
			}
		}
		& .pc-sidebar {
			@media (--breakpoint-sp) {
				display: none;
			}
			position: sticky;
			inset: 0;
			max-width: 7rem;
		}
	}

	main {
		grid-area: main;
		padding: var(--g-padding-md);
		@media (--breakpoint-pc) {
			padding: var(--g-padding-lg);
		}
	}

	footer {
		grid-area: footer;
		text-align: center;
		padding: var(--g-padding-xs);
	}
</style>
