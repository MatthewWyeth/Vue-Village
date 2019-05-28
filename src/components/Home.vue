<template>
    <div>
        <h1>Your Village</h1>
        <hr>
        <p>Gold: {{ gold }}</p>
		<p>Houses: {{ buildings.house.quantity }}</p>
		<p>Farms: {{ buildings.farm.quantity  }}</p>
		<p>Walls: {{ buildings.wall.quantity  }}</p>
		<p>Towers: {{ buildings.tower.quantity  }}</p>
    </div>
</template>
<script>
 	import {mapGetters} from 'vuex';
	export default {
		computed: {
			...mapGetters({
				population: 'population',
				gold: 'gold',
				buildings: 'buildings',
            })

		}
	}
</script>
