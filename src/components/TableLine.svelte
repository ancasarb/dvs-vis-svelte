<script>
	export let width;
	export let height;

	export let value;
	export let start;
	export let end;

	export let scale;

	const xStart = scale(start);
	const xEnd = scale(end);
	const xValue = scale(value);

	const y = height - 3;
	const radius = 1;

	const stroke = 'black';
</script>

<svg {width} {height}>
	<text x={0} {y}>
		{value}
	</text>
	<line x1={xStart} y1={y} x2={xEnd} y2={y} {stroke} />
	<circle cx={xStart} cy={y} r={radius} {stroke} />
	<circle cx={xValue} cy={y} r={radius} {stroke} />
	<circle cx={xEnd} cy={y} r={radius} {stroke} />
	<text class="tooltip" x={xStart} y={y - 3}>
		{start} -> {value} -> {end}
	</text>

	<rect x={xStart} y={y - 2.5} width={xEnd - xStart} height={5} />
</svg>

<style>
	text {
		font-size: 13px;
	}

	.tooltip {
		visibility: hidden;
		font-size: 10px;
	}

	svg:hover .tooltip {
		visibility: visible;
	}

	rect {
		fill-opacity: 0;
	}
</style>
