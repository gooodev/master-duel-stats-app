<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import ComponentBase from './ComponentBase.svelte';

	type Props = ComponentProps<ComponentBase>;

	export let { color, variant, radius } = {
		radius: 'normal',
		color: 'primary',
		variant: 'solid'
	} as Props;
</script>

<div class="button-base">
	<ComponentBase {color} {variant} {radius}>
		<slot />
	</ComponentBase>
</div>

<style lang="postcss">
	.button-base {
		transition: all 0.2s ease-in-out;
		&:active {
			transform: scale(0.9);
		}
	}
</style>
