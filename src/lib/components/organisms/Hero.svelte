<script lang="ts">
	import AnimationFall from '$lib/components/molecules/AnimationFall.svelte';
	import AnimationFlip from '$lib/components/molecules/AnimationFlip.svelte';
	import ButtonBase from '@components/base/ButtonBase.svelte';

	const cardTypes = [
		'normal',
		'effect',
		'fusion',
		'ritual',
		'synchro',
		'xyz',
		'link',
		'spell',
		'trap'
	];
	const delays = [1, 5, 0, 8, 2, 7, 6, 3, 4, 9].map((v) => v * 2);
	const duration = `${cardTypes.length * 2}s`;
</script>

<div class="foreground-container">
	<div>
		<h1>
			{`Master Duel\nStats App`}
		</h1>
		<a href="/home">
			<ButtonBase color="secondary" variant="outline" radius="normal">
				<p>Get Started!</p>
			</ButtonBase>
		</a>
	</div>
</div>
<div class="background-container">
	<div class="charts">
		<figure class="pie">
			<img src="/images/charts/pie.webp" alt="Pie Chart" />
		</figure>
		<figure class="bar">
			<img src="/images/charts/bar.webp" alt="Bar Chart" />
		</figure>
	</div>
	<div class="cards">
		{#each cardTypes as src, i}
			{@const delay = `${delays[i] * 2}s`}
			{@const width = 'clamp(3rem, 10dvw, 5rem)'}
			<div class="card-container" style="--width: {width};">
				<AnimationFall {delay} {duration} height={`calc(${width} * 86 / 59)`}>
					<AnimationFlip {delay} duration="3.5s">
						<img slot="front" src="/images/cards/{cardTypes[i]}.webp" alt="" />
						<img slot="back" src="/images/cards/back.webp" alt="" />
					</AnimationFlip>
				</AnimationFall>
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	.foreground-container {
		display: grid;
		position: relative;
		gap: 2rem;
		place-items: center;
		z-index: var(--g-z-index-modal);
		height: 100%;
		& > div {
			display: grid;
			gap: 2rem;
			place-items: center;
			& h1 {
				font-size: clamp(2rem, 8dvw, 4rem);
				line-height: 1.25;
				text-align: center;
				white-space: pre-wrap;
				font-family: var(--g-font-family-heading);
			}
			& a {
				& p {
					font-size: clamp(1rem, 4dvw, 2rem);
					padding: 1rem 2rem;
					text-align: center;
				}
			}
		}
	}

	.background-container {
		position: absolute;
		inset: 0;
		margin: auto;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: linear-gradient(
			to bottom,
			hsl(0 0% 0%),
			var(--g-color-base-100),
			var(--g-color-neutral-focus) 100%
		);
		& .charts {
			& figure {
				z-index: inherit;
				position: absolute;
				line-height: 0;
				&.pie {
					inset: 2rem 2rem auto auto;
					& img {
						width: clamp(10rem, 30dvw, 15rem);
					}
				}
				&.bar {
					inset: auto auto 0 1rem;
					& img {
						width: clamp(15rem, 50dvw, 25rem);
					}
				}
			}
		}
		& .cards {
			& .card-container {
				position: absolute;
				--width: clamp(3rem, 10dvw, 5rem);
				width: var(--width);
				height: 100%;
				& img {
					aspect-ratio: 59 / 86;
					filter: opacity(0.8);
					width: var(--width);
				}

				&:nth-child(1) {
					left: 0%;
				}
				&:nth-child(2) {
					left: calc(calc(100% - var(--width)) / 8 * 1);
				}
				&:nth-child(3) {
					left: calc(calc(100% - var(--width)) / 8 * 2);
				}
				&:nth-child(4) {
					left: calc(calc(100% - var(--width)) / 8 * 3);
				}
				&:nth-child(5) {
					left: calc(calc(100% - var(--width)) / 8 * 4);
				}
				&:nth-child(6) {
					left: calc(calc(100% - var(--width)) / 8 * 5);
				}
				&:nth-child(7) {
					left: calc(calc(100% - var(--width)) / 8 * 6);
				}
				&:nth-child(8) {
					left: calc(calc(100% - var(--width)) / 8 * 7);
				}
				&:nth-child(9) {
					left: calc(calc(100% - var(--width)) / 8 * 8);
				}
			}
		}
	}
</style>
