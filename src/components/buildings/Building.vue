<template>
	<div class="col-sm-6 col-md-4">
		<div class="panel panel-default">
			<div class="panel-heading">
				<h3 class="panel-title">
					{{type | toUpperCasePlural}} ({{buildings[type].quantity}})
						 <div class="pull-right">Price: {{buildings[type].price}} Gold</div>
				</h3>
			</div>
		</div>
		<div class="panel-body">
			<div class="pull-left">
				<input type="number" min="1" class="form-control" v-model.number="amount">
			</div>
			<div class="pull-right">
				<button :disabled="amount <= 0" @click="buyBuilding" class="btn btn-success">Buy</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props:['type'],
	data ()  {
		return {
			amount: 1,
		}
	},
	computed: {
		gold() {
			return this.$store.getters.integers.gold
		},
		buildings() {
			return this.$store.getters.buildings
		}
	},
	methods: {
		buyBuilding () {
			const data = {
				quantity:  this.amount,
				type: this.type,
			}
			console.log('BUYING ' +  this.amount + ' ' + data.type)
			this.$store.dispatch('buyBuilding', data)
		}
	},
	filters: {
		toUpperCasePlural(string) {
			return string.charAt(0).toUpperCase() + string.slice(1) + 's';
		}
	}
}
</script>

