<script>
	export let width;
	export let height;
	export let color;
	export let scale;
	export let value;

	$: chartWidth = scale(value);
</script>

<svg {width} {height}>
	<rect x={0} y={0} width={chartWidth} {height} fill={color} />
	<text x={5} y={height - 3} fill="black">{value}</text>
	<slot name="annotation" x={chartWidth + 1} y={height - 3} />
</svg>
