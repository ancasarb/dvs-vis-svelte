<script>
	export let color;
	export let scale;
	export let value;

	$: chartWidth = scale(value);
</script>

<div class="container">
	<div class="bar" style={`width: ${chartWidth}px; background-color: ${color}`}>
		{value}
	</div>
	<span class="annotation"><slot /></span>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
	}

	.bar {
		height: 15px;
		margin-right: 5px;
		padding-left: 5px;
		flex-grow: 0;
		flex-shrink: 0;
	}

	.annotation {
		white-space: nowrap;
	}
</style>
