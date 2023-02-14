<script lang="ts">
	import ComponentBase from '@components/base/ComponentBase.svelte';
	export let appearance: 'wide' | 'narrow';
	export let current: boolean = false;
</script>

<ComponentBase
	color={current ? 'primary' : 'ghost'}
	variant="solid"
	radius="normal"
	hoverable={!current}
>
	<div class="container {appearance}">
		<span class="icon">
			<slot name="icon" />
		</span>
		<span class="label">
			<slot name="label" />
		</span>
	</div>
</ComponentBase>

<style lang="postcss">
	.container {
		padding: var(--g-padding-sm);
		& .label {
			font-family: var(--g-font-family-heading);
		}
		&.wide {
			display: flex;
			align-items: center;
			gap: var(--g-gap-sm);
			padding: var(--g-padding-sm);
			& .icon {
				font-size: var(--g-font-size-icon-lg);
			}
			& .label {
				font-size: var(--g-font-size-text-lg);
			}
		}
		&.narrow {
			display: grid;
			place-items: center;
			gap: var(--g-gap-xs);
			padding: var(--g-padding-xs);
			.icon {
				font-size: var(--g-font-size-icon-xl);
			}
			.label {
				font-size: var(--g-font-size-text-md);
			}
		}
	}
</style>
