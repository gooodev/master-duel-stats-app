<script lang="ts">
	export let iconPosition: 'left' | 'right' = 'left';
	export let size: StyleProps['size'] = 'md';
</script>

<div class={size}>
	{#if iconPosition === 'left'}
		<span class="icon">
			<slot name="icon" />
		</span>
	{/if}
	<span class="label">
		<slot name="label" />
	</span>
	{#if iconPosition === 'right'}
		<span class="icon"> <slot name="icon" /> </span>
	{/if}
</div>

<style lang="postcss">
	div {
		display: inline-flex;
		align-items: center;
		gap: var(--g-padding-sm);
		padding: 0;

		&.sm {
			& .icon {
				font-size: 1rem;
			}
			& .label {
				font-size: 0.875rem;
			}
		}
		&.md {
			& .icon {
				font-size: 1rem;
			}
			& .label {
				font-size: 0.875rem;
			}
		}
		&.lg {
			& .icon {
				font-size: 1.5rem;
			}
			& .label {
				font-size: 1.25rem;
			}
		}
	}
</style>
