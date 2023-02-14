<script lang="ts">
	import ButtonFace from './ButtonBase.svelte';
	import type { ComponentProps } from 'svelte';
	import IconFace from './IconBase.svelte';

	type Props = ComponentProps<ButtonFace> & ComponentProps<IconFace>;
	export let { color, variant, round, size } = {
		color: 'primary',
		variant: 'solid',
		round: 'normal',
		size: 'md'
	} as Props;
</script>

<ButtonFace {color} {variant} {round}>
	<IconFace {size}>
		<slot />
	</IconFace>
</ButtonFace>
