<script>
	import { highlight } from '../utils/stores.js';
	
	export let x;
	export let y;
	export let width;
	export let height;
	export let value;
	
	export let color;
	$: {
		if (value === $highlight) {
			color = "#fe9922";
		} else {
			color = "cornflowerblue";
		}
	}
		
	function handleMouseOver(e) {
		highlight.set(value);
	}
	
	function handleMouseOut(e) {
		highlight.set("");
	}
	
</script>

<rect
	{x}
	{y}
	{width}
 	{height}
	on:mouseover={handleMouseOver}
	on:mouseout={handleMouseOut}
	fill={color}
/>