<script>
	import { scaleLinear, max, min } from 'd3';

	import IntegratedBar from './IntegratedBar.svelte';
	import IntegratedLine from './IntegratedLine.svelte';

	export let dataset;

	const options = ['total', 'marginal'];

	$: option = 'total';

	const columnHeadings = [
		['Sea-level model'],
		['Emission level'],
		['Exposure frequency'],
		['Year 2050', '(population in millions)'],
		['Exposure increase', '(population in millions)'],
		['Year 2100', '(population in millions)'],
		['Exposure increase', '(population in millions)']
	];

	const seaLevelProjectionModelAccessor = (d, i) =>
		i % 6 === 0 ? d['sea_level_projection_model'] : '';

	const emissionsAccessor = (d, i) => {
		if (i % 2 == 0) {
			switch (d['rcp']) {
				case '2.6':
					return 'low';
				case '4.5':
					return 'medium';
				case '8.5':
					return 'high';
				default:
					return null;
			}
		} else {
			return '';
		}
	};

	const frequencyAccessor = (d) => {
		switch (d['frequency']) {
			case 'Permanent':
				return 'permanent inundation';
			case 'RL1':
				return 'annual flooding';
			default:
				return null;
		}
	};

	const barWidth = 220,
		lineWidth = 280,
		height = 15;

	$: valueAccessor = (d, year, model) => d[option][year][model]['value'];
	$: intervalAccessor = (d, year, model, interval) =>
		d[option][year][model]['interval'][interval];
	$: differenceAccessor = (d, year) =>
		valueAccessor(d, year, 'coastal_dem') - valueAccessor(d, year, 'srtm');

	$: differenceAccessor2050 = (d) => differenceAccessor(d, '2050');
	$: differenceAccessor2100 = (d) => differenceAccessor(d, '2100');

	$: startIntervalAccessor2050 = (d) => intervalAccessor(d, '2050', 'coastal_dem', 'start');
	$: startIntervalAccessor2100 = (d) => intervalAccessor(d, '2100', 'coastal_dem', 'start');
	$: endIntervalAccessor2050 = (d) => intervalAccessor(d, '2050', 'coastal_dem', 'end');
	$: endIntervalAccessor2100 = (d) => intervalAccessor(d, '2100', 'coastal_dem', 'end');

	$: xScaleBar = scaleLinear()
		.domain([0, max([max(dataset, differenceAccessor2050), max(dataset, differenceAccessor2100)])])
		.range([0, barWidth]);

	$: xScaleLine = scaleLinear()
		.domain([
			min([min(dataset, startIntervalAccessor2050), min(dataset, startIntervalAccessor2100)]),
			max([max(dataset, endIntervalAccessor2050), max(dataset, endIntervalAccessor2100)])
		])
		.range([50, lineWidth - 10]);
</script>

<p>switch between...</p>
<select bind:value={option}>
	{#each options as value}<option {value}>{value}</option>{/each}
</select>

<table>
	<thead>
		<tr>
			{#each columnHeadings as headings}
				<th>
					{#each headings as heading, i}
						{#if i === 0}
							<p>{@html heading}</p>
						{:else}
							<p class="extra-heading">{@html heading}</p>
						{/if}
					{/each}
				</th>
			{/each}
		</tr></thead
	>
	<tbody>
		{#each dataset as row, i}
			{@const difference2050 = differenceAccessor2050(row)}
			{@const difference2100 = differenceAccessor2100(row)}
			{@const value2050 = valueAccessor(row, '2050', 'coastal_dem')}
			{@const value2100 = valueAccessor(row, '2100', 'coastal_dem')}

			{@const start2050 = startIntervalAccessor2050(row)}
			{@const start2100 = startIntervalAccessor2100(row)}

			{@const end2050 = endIntervalAccessor2050(row)}
			{@const end2100 = endIntervalAccessor2100(row)}

			<tr>
				<td>{seaLevelProjectionModelAccessor(row, i)}</td>
				<td>{emissionsAccessor(row, i)}</td>
				<td>{frequencyAccessor(row)}</td>
				<td>
					<IntegratedLine
						width={lineWidth}
						{height}
						start={start2050}
						value={value2050}
						end={end2050}
						scale={xScaleLine}
					/>
				</td>
				<td>
					<IntegratedBar
						{height}
						width={barWidth}
						value={difference2050}
						scale={xScaleBar}
						index={i}
						color="#A0CCD2"
					/>
				</td>
				<td>
					<IntegratedLine
						width={lineWidth}
						{height}
						start={start2100}
						value={value2100}
						end={end2100}
						scale={xScaleLine}
					/>
				</td>
				<td>
					<IntegratedBar
						{height}
						width={barWidth}
						value={difference2100}
						scale={xScaleBar}
						color="#A0CCD2"
					/>
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	th {
		border-bottom: 1px solid;
		border-collapse: collapse;
	}

	table {
		width: 100%;
		text-align: left;
		border-collapse: collapse;
	}

	table td,
	table th {
		padding: 3px 2px;
	}

	table tbody td, p {
		font-size: 13px;
	}

	p {
		margin: 0;
		padding: 0;
	}

	.extra-heading {
		font-size: 13px;
		font-weight: normal;
	}
</style>
