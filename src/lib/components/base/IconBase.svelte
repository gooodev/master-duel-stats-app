<script lang="ts">
	export let size: StyleProps['size'] = 'md';
</script>

<div class={size}>
	<slot />
</div>

<style lang="postcss">
	div {
		display: inline-grid;
		place-items: center;
		padding: 0;
		width: var(--size);
		height: var(--size);
		&.sm {
			--size: 1.5rem;
			font-size: 1rem;
		}
		&.md {
			--size: 2rem;
			font-size: 1.5rem;
		}
		&.lg {
			--size: 2.5rem;
			font-size: 2rem;
		}
	}
</style>
