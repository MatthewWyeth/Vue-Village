<template>
	<div>
		<building :type="'house'" :quantity="buildings.house.quantity"></building>
		<building :type="'farm'" :quantity="buildings.farm.quantity"></building>
		<building :type="'tower'" :quantity="buildings.tower.quantity"></building>
		<building :type="'wall'" :quantity="buildings.wall.quantity"></building>
	</div>
</template>
<script>
	import Building from './Building.vue'
	export default {
		computed: {
			buildings () {
				return this.$store.getters.getVillage
			},
		},
		components: {
			building: Building
		},
	}
</script>
