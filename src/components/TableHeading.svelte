<script>
	export let headings;
</script>

<thead>
	<tr>
		{#each headings as heading}
			<th>
				<p>{@html heading.main}</p>
				{#if heading.additional}
					<p class="extra-heading">{@html heading.additional}</p>
				{/if}
			</th>
		{/each}
	</tr>
</thead>

<style>
	.extra-heading {
		font-size: 13px;
		font-weight: normal;
	}

	th {
		padding: 3px 2px;
		border-bottom: 1px solid;
		border-collapse: collapse;
	}

	p {
		margin: 0;
		padding: 0;
	}
</style>
