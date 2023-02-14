<script lang="ts">
	export let delay: string = '0s';
	export let duration: string = '3s';
</script>

<div class="container" style="--delay: {delay}; --duration: {duration};">
	<div class="front">
		<slot name="front" />
	</div>
	<div class="back">
		<slot name="back" />
	</div>
</div>

<style lang="postcss">
	.container {
		transform-style: preserve-3d;
		aspect-ratio: 59 / 86;
		& > div {
			transform-style: preserve-3d;
			backface-visibility: hidden;
			position: absolute;
			height: 100%;

			animation-name: flip;
			animation-timing-function: linear;
			animation-iteration-count: infinite;
			animation-delay: var(--delay);
			animation-duration: var(--duration);
			&.front {
				--initial: 0deg;
				width: fit-content;
				height: 100%;
			}
			&.back {
				--initial: -180deg;
				width: fit-content;
				height: 100%;
			}
		}
	}
	@keyframes flip {
		from {
			transform: rotateY(var(--initial));
		}
		to {
			transform: rotateY(calc(var(--initial) + 360deg));
		}
	}
</style>
