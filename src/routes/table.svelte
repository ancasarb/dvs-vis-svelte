<script>
	import Table from '../components/Table.svelte';
	import seaLevels from '../data/sea_levels.js';
</script>

<main>
	<Table dataset={seaLevels} />
</main>

<style>
	@import url('https://rsms.me/inter/inter.css');

	main {
		font-family: 'Inter', sans-serif;
	}
</style>
