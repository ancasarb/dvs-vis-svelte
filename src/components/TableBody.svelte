<script>
	import { scaleLinear, max, min } from 'd3';

	import TableBar from './TableBar.svelte';
	import TableLine from './TableLine.svelte';

	export let dataset;
	export let option;

	// NOTE: These conditions on 'i' are unreadable
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

	$: valueAccessor = (d, year, model) => d[option][year][model]['value'];

	$: differenceAccessor = (d, year) =>
		valueAccessor(d, year, 'coastal_dem') - valueAccessor(d, year, 'srtm');

	$: differenceAccessor2050 = (d) => differenceAccessor(d, '2050');
	$: differenceAccessor2100 = (d) => differenceAccessor(d, '2100');

	$: intervalAccessor = (d, year, model, interval) => d[option][year][model]['interval'][interval];

	$: startIntervalAccessor2050 = (d) => intervalAccessor(d, '2050', 'coastal_dem', 'start');
	$: startIntervalAccessor2100 = (d) => intervalAccessor(d, '2100', 'coastal_dem', 'start');
	$: endIntervalAccessor2050 = (d) => intervalAccessor(d, '2050', 'coastal_dem', 'end');
	$: endIntervalAccessor2100 = (d) => intervalAccessor(d, '2100', 'coastal_dem', 'end');

	const dimensions = {
		width: {
			bar: 220,
			line: 280
		},
		height: 15
	};

	const color = '#A0CCD2';

	$: xScaleBar = scaleLinear()
		.domain([0, max([max(dataset, differenceAccessor2050), max(dataset, differenceAccessor2100)])])
		.range([0, dimensions.width.bar]);

	$: xScaleLine = scaleLinear()
		.domain([
			min([min(dataset, startIntervalAccessor2050), min(dataset, startIntervalAccessor2100)]),
			max([max(dataset, endIntervalAccessor2050), max(dataset, endIntervalAccessor2100)])
		])
		.range([50, dimensions.width.line - 10]);
</script>

<tbody>
	{#each dataset as row, i}
		<tr>
			<td>{seaLevelProjectionModelAccessor(row, i)}</td>
			<td>{emissionsAccessor(row, i)}</td>
			<td>{frequencyAccessor(row)}</td>
			<td>
				<TableLine
					width={dimensions.width.line}
					height={dimensions.height}
					start={startIntervalAccessor2050(row)}
					value={valueAccessor(row, '2050', 'coastal_dem')}
					end={endIntervalAccessor2050(row)}
					scale={xScaleLine}
				/>
			</td>
			<td>
				<TableBar
					width={dimensions.width.bar}
					height={dimensions.height}
					value={differenceAccessor2050(row)}
					scale={xScaleBar}
					{color}
				>
					{#if i === 0}
						<!-- NOTE: i equals 0 is meaningless, readability suffers, we should name this condition -->
						* from previous estimate
					{/if}
				</TableBar>
			</td>
			<td>
				<TableLine
					width={dimensions.width.line}
					height={dimensions.height}
					start={startIntervalAccessor2100(row)}
					value={valueAccessor(row, '2100', 'coastal_dem')}
					end={endIntervalAccessor2100(row)}
					scale={xScaleLine}
				/>
			</td>
			<td>
				<TableBar
					value={differenceAccessor2100(row)}
					scale={xScaleBar}
					{color}
					width={dimensions.width.bar}
					height={dimensions.height}
				/>
			</td>
		</tr>
	{/each}
</tbody>

<style>
	tr:nth-child(odd) {
		background-color: #eee;
	}

	td {
		padding: 3px 2px;
		font-size: 13px;
	}

	text {
		font-size: 12px;
	}
</style>
