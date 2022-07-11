<script>
	import { axisBottom, axisLeft, select } from "d3";

	export let xAxis;
	export let yAxis;
  export let position;
  export let scale;

  let axis;
	let transformAxis;
	let transformAxisLabel;
		
	$: {
		transformAxis =`translate(${xAxis}, ${yAxis})`;
		
		switch (position) {
      case "bottom":
						select(axis).call(axisBottom().scale(scale));		
						break;
			case "left":
						select(axis).call(axisLeft().scale(scale));
						break;
		}
	}
</script>

<g bind:this={axis} transform={transformAxis} />

<style>
/* 	
	.tick text {
		fill: darkgrey;
}
*/
</style>