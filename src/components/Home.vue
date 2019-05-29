<template>
    <div>
        <h1>Village Details</h1>
        <hr>
		<strong>Economy</strong>
		<p></p>
        <p>Total Gold: {{ integers.gold }} gold</p>
		<p>Tax: {{ integers.tax }} gold</p>
		<p>Maintenance: {{ integers.maintenance }} gold</p>
		<p>Revenue: {{ integers.income }} gold</p>
		<p>Houses: {{ buildings.house.quantity }}</p>
		<p>Farms: {{ buildings.farm.quantity  }}</p>
		<strong>People</strong>
		<p></p>
		<p>Total Population: {{ integers.population  }} civilians</p>
		<p>Growth: {{ integers.growth  }} civilians</p>
		<strong>Defense</strong>
		<p></p>
		<p>Walls: {{ buildings.wall.quantity  }} </p>
		<p>Defense Capacity: {{ buildings.wall.quantity*5  }} civilians</p>
		<hr>
		
    </div>
</template>
<script>
 	import {mapGetters} from 'vuex';
	export default {
		computed: {
			...mapGetters({
				integers: 'integers',
				buildings: 'buildings',
            })
		}
	}
</script>
