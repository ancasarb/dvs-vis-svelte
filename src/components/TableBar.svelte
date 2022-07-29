<script>
	import { tweened } from 'svelte/motion';

	export let color;
	export let scale;
	export let value;
	export let width;
	export let height;

	const initialValue = scale(value);
	const barWidth = tweened(initialValue, { duration: 400 });

	$: barWidth.set(scale(value));
</script>

<div class="container" style="width: {width}px">
	<div class="bar" style={`height: ${height}px; width: ${$barWidth}px; background-color: ${color}`}>
		{value}
	</div>
	<span class="annotation"><slot /></span>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
	}

	.bar {
		margin-right: 5px;
		padding-left: 5px;
		flex-grow: 0;
		flex-shrink: 0;
	}

	.annotation {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
