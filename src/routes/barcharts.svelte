<script>
	import { csv } from "d3";
	import transform from "../utils/transform.js";
	
	import Chart from "../components/Chart.svelte";
	import Source from "../components/Source.svelte";
	import Title from "../components/Title.svelte";
	import Subheading from "../components/Subheading.svelte";

	let dataset = csv("https://raw.githubusercontent.com/ancasarb/data/main/privacy.csv", transform);

	let selected = "";

	function onSelect(value) {
		selected = value;
	}
</script>

<main>
	<section class="chart-container">
		{#await dataset}
			<p>
				Loading data...
			</p>
		{:then data}
		<div class="title-row"> 
			<Title text="Individuals know that cookies can be used to trace movements of people on the internet." />
			<Title text="Individuals have ever changed the settings in their internet browser to prevent or limit cookies on any of their devices." />
		</div>
		<div class="subheading-row">
			<Subheading text="(% of individuals who used internet within the last 3 months)" />
			<Subheading text="(% of individuals who used internet within the last 3 months)" />
		</div>
		<div class="chart-row">
			<Chart
				dataset={data}
				{onSelect}
				{selected}
				dataPoint="have_cookies_knowledge_perc" />
			<Chart
				dataset={data}
				{onSelect}
				{selected}
				dataPoint="change_default_settings_perc"/>
		</div>
		<div class="title-row"> 
			<Title text="Individuals use software that limits the ability to track their activities on the internet." />
			<Title text="Individuals manage access to personal data on the internet." />
		</div>
		<div class="subheading-row">
			<Subheading text="(% of individuals who used internet within the last 3 months)" />
			<Subheading text="(% of individuals who used internet within the last 3 months)" />
		</div>
		<div class="chart-row">
			<Chart
				dataset={data}
				{onSelect}
				{selected}
				dataPoint="use_restrictive_software_perc"/>
			<Chart
				dataset={data}
				{onSelect}
				{selected}
				dataPoint="manage_personal_data_perc" />
		</div>
		{/await}
	</section>
	<section class="footer">
		<Source/>
	</section>
	
</main>

<style>
	@import url('https://rsms.me/inter/inter.css');
	
	main {
		font-family: 'Inter', sans-serif; 
		display: flex;
    	flex-direction: column;
	}
	
	.chart-container {
		display: flex;
		flex-direction: column;
	}
	
	.title-row, .subheading-row, .chart-row {
		display: flex;
		flex-direction: row;
		gap: 20px;
		width: 100%;
	}
	
</style>
