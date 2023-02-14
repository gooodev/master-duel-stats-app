<script lang="ts">
	export let color: StyleProps['color'] = 'neutral';
	export let variant: StyleProps['variant'] = 'solid';
	export let radius: StyleProps['radius'] = 'normal';
	export let hoverable: boolean = true;
</script>

<div class="component-base {color} {variant} {radius}" class:hoverable>
	<slot />
</div>

<style lang="postcss">
	.component-base {
		border-style: solid;
		border-width: 1px;

		/* color styles */
		&.primary {
			--background-color: var(--g-color-primary);
			--color: var(--g-color-primary-content);
			--background-color-focus: var(--g-color-primary-focus);
		}
		&.secondary {
			--background-color: var(--g-color-secondary);
			--color: var(--g-color-secondary-content);
			--background-color-focus: var(--g-color-secondary-focus);
		}
		&.neutral {
			--background-color: var(--g-color-neutral);
			--color: var(--g-color-neutral-content);
			--background-color-focus: var(--g-color-neutral-focus);
		}
		&.accent {
			--background-color: var(--g-color-accent);
			--color: var(--g-color-accent-content);
			--background-color-focus: var(--g-color-accent-focus);
		}
		&.success {
			--background-color: var(--g-color-success);
			--color: var(--g-color-success-content);
			--background-color-focus: var(--g-color-success);
		}
		&.warning {
			--background-color: var(--g-color-warning);
			--color: var(--g-color-warning-content);
			--background-color-focus: var(--g-color-warning);
		}
		&.error {
			--background-color: var(--g-color-error);
			--color: var(--g-color-error-content);
			--background-color-focus: var(--g-color-error);
		}
		&.info {
			--background-color: var(--g-color-info);
			--color: var(--g-color-info-content);
			--background-color-focus: var(--g-color-info-);
		}
		&.ghost {
			--background-color: var(--g-color-ghost);
			--color: var(--g-color-ghost-content);
			--background-color-focus: var(--g-color-ghost-focus);
		}

		/* variant styles */
		&.solid {
			background-color: var(--background-color);
			color: var(--color);
			border-color: var(--background-color);
			&.hoverable:hover {
				background-color: var(--background-color-focus);
				color: var(--color);
				border-color: rgba(0, 0, 0, 0.25);
			}
		}
		&.outline {
			background-color: transparent;
			color: var(--background-color);
			border-color: currentColor;
			&.hoverable:hover {
				background-color: var(--background-color-focus);
				color: var(--color);
				border-color: var(--background-color-focus);
			}
		}
		&.text {
			background-color: transparent;
			color: var(--background-color);
			border-color: transparent;
		}

		/* radius styles */
		&.none {
			border-radius: 0;
		}
		&.normal {
			border-radius: var(--g-border-radius);
		}
		&.full {
			border-radius: var(--g-border-radius-full);
		}
	}
</style>
