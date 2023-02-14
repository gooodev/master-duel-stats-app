<script lang="ts">
	export let delay: string = '0s';
	export let duration: string = '3s';
	export let height: string = '10vh';
</script>

<div style="--delay: {delay}; --duration: {duration}; --height: {height};">
	<span>
		<slot />
	</span>
</div>

<style lang="postcss">
	div {
		position: relative;
		height: 100%;
		width: auto;
		overflow: hidden;
		& span {
			position: absolute;
			top: calc(var(--height) * -1.1);
			animation-name: fall;
			animation-timing-function: linear;
			animation-iteration-count: infinite;
			animation-delay: var(--delay);
			animation-duration: var(--duration);
		}
	}

	@keyframes fall {
		from {
			top: calc(var(--height) * -1.1);
		}
		to {
			top: 100%;
		}
	}
</style>
