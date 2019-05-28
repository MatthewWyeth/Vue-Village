<template>
	<div class="col-sm-6 col-md-4">
		<div class="panel panel-success">
			<div class="panel-heading">
				<h3 class="panel-title">
					{{type}}
						 <small>{{this.$store.getters.getVillage[type].quantity}}</small>
				</h3>
			</div>
		</div>
		<div class="panel-body">
			<div class="pull-left">
				<input type="number" min="0" class="form-control" v-model.number="amount">
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
			amount: 0,
		}
	},
	computed: {
		gold() {
			return this.$store.getters.getGold
		},
		village() {
			return this.$store.getters.getVillage
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
	}
}
</script>

