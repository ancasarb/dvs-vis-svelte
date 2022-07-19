<script>
	export let width;
	export let height;
	export let color;
	export let scale;
	export let value;
	export let index;

	$: chartWidth = scale(value);
</script>

<svg {width} {height}>
	<rect x={0} y={0} width={chartWidth} {height} fill={color} />
	<text x={5} y={height - 3} fill="black">{value}</text>
	{#if index === 0}
		<text x={chartWidth + 1} y={height - 3} fill="black">*from previous estimate</text>
	{/if}
</svg>

<style>
	text {
		font-size: 12px;
	}
</style>
