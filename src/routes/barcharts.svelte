<script>
	import { csv } from 'd3';
	import transform from '../utils/transform.js';

	import Chart from '../components/Chart.svelte';
	import Source from '../components/Source.svelte';
	import Title from '../components/Title.svelte';
	import Subheading from '../components/Subheading.svelte';

	let dataset = csv('https://raw.githubusercontent.com/ancasarb/data/main/privacy.csv', transform);

	let selected = '';

	function onSelect(value) {
		selected = value;
	}
</script>

<main>
	<section class="chart-container">
		{#await dataset}
			<p>Loading data...</p>
		{:then data}
			<Title
				text="Individuals know that cookies can be used to trace movements of people on the internet."
			/>
			<Subheading text="(% of individuals who used internet within the last 3 months)" />
			<Chart dataset={data} {onSelect} {selected} dataPoint="have_cookies_knowledge_perc" />
			<Title
				text="Individuals have ever changed the settings in their internet browser to prevent or limit cookies on any of their devices."
			/>
			<Subheading text="(% of individuals who used internet within the last 3 months)" />
			<Chart dataset={data} {onSelect} {selected} dataPoint="change_default_settings_perc" />

			<Title
				text="Individuals use software that limits the ability to track their activities on the internet."
			/>
			<Subheading text="(% of individuals who used internet within the last 3 months)" />
			<Chart dataset={data} {onSelect} {selected} dataPoint="use_restrictive_software_perc" />

			<Title text="Individuals manage access to personal data on the internet." />
			<Subheading text="(% of individuals who used internet within the last 3 months)" />
			<Chart dataset={data} {onSelect} {selected} dataPoint="manage_personal_data_perc" />
		{/await}
	</section>
	<section class="footer">
		<Source />
	</section>
</main>

<style>
	/* CSS Reset: https://www.joshwcomeau.com/css/custom-css-reset/ */
	:global(*) {
		margin: 0;
	}

	:global(p) {
		margin-bottom: 1rem;
	}

	:global(body) {
		margin: 1rem;
	}
	/* End of CSS reset */

	@import url('https://rsms.me/inter/inter.css');

	main {
		font-family: 'Inter', sans-serif;
		font-size: 16px;
	}

	@media screen and (max-width: 1000px) {
		main {
			font-size: 12px;
		}
	}

	.chart-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: min-content min-content 1fr min-content min-content 1fr;
		grid-column-gap: 20px;
		grid-row-gap: 0;
		grid-auto-flow: column;
	}
</style>
