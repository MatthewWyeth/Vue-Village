<template>
    <div>
        <h1>Your Village</h1>
        <hr>
        <p>Gold: {{ gold }}</p>
		<p>Houses: {{ buildings.houses }}</p>
		<p>Farms: {{ buildings.farms }}</p>
		<p>Walls: {{ buildings.walls }}</p>
		<p>Towers: {{ buildings.towers }}</p>
    </div>
</template>
<script>
 	import {mapGetters} from 'vuex';
	export default {
		computed: {
			...mapGetters({
				gold: 'gold',
				buildings: 'buildings',
            })

		}
	}
</script>
