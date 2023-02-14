<script lang="ts">
	import ButtonBase from '@components/base/ButtonBase.svelte';
</script>

<ButtonBase color="ghost" variant="solid" radius="normal">
	<div>
		<slot />
	</div>
</ButtonBase>

<style lang="postcss">
	div {
		display: grid;
		place-items: center;
		width: 3rem;
		height: 3rem;
		font-size: 1.5rem;
	}
</style>
