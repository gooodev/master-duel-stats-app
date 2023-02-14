<script lang="ts">
	import ComponentBase from './ComponentBase.svelte';
</script>

<div class="link-base">
	<ComponentBase color="ghost" variant="solid" radius="normal">
		<slot />
	</ComponentBase>
</div>

<style lang="postcss">
	.link-base {
		transition: all 0.2s ease-in-out;
		&:active {
			color: var(--g-color-primary-content);
			background-color: var(--g-color-primary-focus);
		}
	}
</style>
