<script>
	export let width;
	export let height;
	
	export let value;
	export let start;
	export let end;

	export let scale;
</script>

<svg {width} {height}>
	<text x={0} y={height - 3}>
		{value}
	</text>
	<line
		x1={scale(start)}
		y1={height - 3}
		x2={scale(end)}
		y2={height - 3}
		stroke="black"
	/>
	<circle cx={scale(start)} cy={height - 3} r="1" stroke="black" />
	<circle cx={scale(value)} cy={height - 3} r="1" stroke="black" />
	<circle cx={scale(end)} cy={height - 3} r="1" stroke="black" />
</svg>
