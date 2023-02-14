<script lang="ts">
	export let open = false;
	export let onClick: VoidFunction | undefined = undefined;

	const onKeyPress = (e: KeyboardEvent) => {
		if (e.key === 'Escape' && onClick) {
			onClick();
		}
	};
</script>

<div
	class="modal-overlay"
	class:open
	class:clickable={!!onClick}
	on:click={onClick}
	on:keypress={onKeyPress}
/>

<style lang="postcss">
	.modal-overlay {
		position: fixed;
		inset: 0;
		width: 100dvw;
		height: 100dvh;
		z-index: var(--g-z-index-overlay);
		cursor: pointer;
		visibility: hidden;
		transition: all 0.2s ease;
		&.open {
			visibility: visible;
			opacity: 0.9;
			background-color: var(--g-color-ghost-focus);
		}
	}
</style>
