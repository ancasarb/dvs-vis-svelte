<script>
	import Select from './Select.svelte';
	import TableBody from './TableBody.svelte';
	import TableHeading from './TableHeading.svelte';
	import TableSource from './TableSource.svelte';
import TableTitle from './TableTitle.svelte';

	export let dataset;

	const options = ['total', 'marginal'];
	$: option = 'total';

	const headings = [
		{
			main: 'Sea-level model'
		},
		{
			main: 'Emission level'
		},
		{
			main: 'Exposure frequency'
		},
		{
			main: 'Year: 2050',
			additional: '(population in millions)'
		},
		{
			main: 'Exposure increase',
			additional: '(population in millions)'
		},
		{
			main: 'Year: 2100',
			additional: '(population in millions)'
		},
		{
			main: 'Exposure increase',
			additional: '(population in millions)'
		}
	];
</script>

<Select bind:option {options} text="choose between..." />

<TableTitle />

<table>
	<TableHeading {headings} />
	<TableBody {dataset} {option} />
</table>

<TableSource />

<style>
	table {
		width: 100%;
		text-align: left;
		border-collapse: collapse;
	}
</style>
