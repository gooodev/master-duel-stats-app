<script lang="ts">
	export let radius: StyleProps['radius'] = 'normal';
</script>

<div class="radius-base {radius}">
	<slot />
</div>

<style lang="postcss">
	:global(.button-base > :only-child) {
		display: grid;
		place-items: center;
	}
	:global(.button-base.normal > :only-child) {
		border-radius: var(--g-border-radius);
	}
	:global(.button-base.full > :only-child) {
		border-radius: var(--g-border-radius-full);
	}
</style>
