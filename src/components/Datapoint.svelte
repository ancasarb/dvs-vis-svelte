<script>
	export let x;
	export let y;
	export let width;
	export let height;
	export let color;
	export let onSelect;
	export let onReset;
</script>

<rect {x} {y} {width} {height} on:mouseover={onSelect} on:mouseout={onReset} fill={color} />
