<script>
	export let text;
	export let option;
	export let options;
</script>

<p>{text}</p>
<select bind:value={option}>
	{#each options as value}<option {value}>{value}</option>{/each}
</select>

<style>
	p {
		font-size: 13px;
        margin: 0;
		padding: 0;
	}
</style>
