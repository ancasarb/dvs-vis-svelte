<script>
	import { tweened } from 'svelte/motion';

	export let width;
	export let height;

	export let value;
	export let start;
	export let end;

	export let scale;

	const xStart = tweened(scale(start), { duration: 400 });
	const xEnd = tweened(scale(end), { duration: 400 });
	const xValue = tweened(scale(value), { duration: 400 });

	$: xStart.set(scale(start));
	$: xEnd.set(scale(end));
	$: xValue.set(scale(value));

	const y = height - 3;
	const radius = 1;

	const stroke = 'black';
</script>

<svg {width} {height}>
	<text x={0} {y}>
		{value}
	</text>
	<line x1={$xStart} y1={y} x2={$xEnd} y2={y} {stroke} />
	<circle cx={$xStart} cy={y} r={radius} {stroke} />
	<circle cx={$xValue} cy={y} r={radius} {stroke} />
	<circle cx={$xEnd} cy={y} r={radius} {stroke} />
	<text class="tooltip" x={$xStart} y={y - 3}>
		{start} -> {value} -> {end}
	</text>
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
</style>
