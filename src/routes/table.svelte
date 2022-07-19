<script>
	import { csv } from 'd3';
	import transform from '../utils/sea_levels_transform.js';

	import Table from '../components/Table.svelte';

	let dataset = csv(
		'https://raw.githubusercontent.com/ancasarb/data/main/sea_levels.csv',
		transform
	);
</script>

<main>
	{#await dataset}
		<p>Loading data...</p>
	{:then data}
		<Table dataset={data} />
	{/await}
</main>

<style>
	@import url('https://rsms.me/inter/inter.css');

	main {
		font-family: 'Inter', sans-serif;
	}
</style>
