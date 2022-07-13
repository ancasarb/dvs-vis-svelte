<script>
	import { scaleBand, scaleLinear, ascending } from 'd3';
	import Axis from './Axis.svelte';
	import DataPoint from './DataPoint.svelte';

	export let dataset;
	export let dataPoint;
	export let selected;
	export let onSelect;

	const width = 500,
		height = 700;
	const margin = { top: 10, bottom: 20, left: 80, right: 10 };
	const innerHeight = height - margin.top - margin.bottom,
		innerWidth = width - margin.left - margin.right;

	const xAccessor = (d) => d[dataPoint];
	const yAccessor = (d) => d.country;

	$: dataset.sort(function (x, y) {
		return ascending(xAccessor(x), xAccessor(y));
	});

	$: yScale = scaleBand().domain(dataset.map(yAccessor)).range([0, innerHeight]).paddingInner(0.15);

	$: xScale = scaleLinear().domain([0, 100]).range([0, innerWidth]);

	$: viewBox = `0 0 ${width} ${height}`;
</script>

<div style="width:100%; max-width: 1280px">
	<svg {viewBox}>
		<g transform={`translate(${margin.left},${margin.top})`}>
			{#each dataset as data, i}
				{@const yData = yAccessor(data)}
				<DataPoint
					x={0}
					onSelect={() => onSelect(yData)}
					onReset={() => onSelect('')}
					color={yData === selected ? '#fe9922' : 'cornflowerblue'}
					y={yScale(yData)}
					width={xScale(xAccessor(data))}
					height={yScale.bandwidth()}
				/>
			{/each}

			<Axis scale={xScale} position="bottom" xAxis={0} yAxis={innerHeight} />
			<Axis scale={yScale} position="left" xAxis={0} yAxis={0} />
		</g>
	</svg>
</div>

<style>
	/* svg { 
		/* color: darkgrey; */
	/* }  */
</style>
