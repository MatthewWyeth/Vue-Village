<template>
	<div class="container">
		<h2>Buildings</h2>
		<div class="panel panel-default">
			<building :type="'house'" :quantity="buildings.house.quantity"></building>
			<building :type="'farm'" :quantity="buildings.farm.quantity"></building>
			<building :type="'wall'" :quantity="buildings.wall.quantity"></building>
		</div>
	</div>
</template>
<script>
	import Building from './Building.vue'
	export default {
		computed: {
			buildings () {
				return this.$store.getters.buildings
			},
		},
		components: {
			building: Building
		},
	}
</script>
