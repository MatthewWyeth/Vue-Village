<template>
    <div>
        <h1>Your Village</h1>
        <hr>
        <p>Gold: {{ gold }}</p>
		<p>Houses: {{ village.houses }}</p>
		<p>Farms: {{ village.farms }}</p>
		<p>Walls: {{ village.walls }}</p>
		<p>Towers: {{ village.towers }}</p>
    </div>
</template>
<script>
 	import {mapGetters} from 'vuex';
	export default {
		computed: {
			
			...mapGetters({
				gold: 'getGold',
				village: 'getVillage',
            })

		}
	}
</script>
