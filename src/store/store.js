import Vue from 'vue';
import Vuex from 'vuex';
import { data } from './data'; 

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		buildings: data().buildings,
		integers: data().integers,
		log: []
	},
	mutations : { 
		'BUY_BUILDING' (state, {quantity, type}) {
			if (state.integers.gold >= state.buildings[type].price * quantity){
				state.integers.gold -= state.buildings[type].price * quantity;
				state.buildings[type].quantity += quantity
			} else {
				state.log.unshift({type: 'red', event: 'Insuffient funds'})
			}
		},
		'END_TURN' (state) {
			state.log = []
			state.integers.invasionDays--
			// determine new population
			// check for invasion
			if (state.integers.invasionDays <= 0) {
				state.integers.invasionDays = 5
				const defense = state.buildings.wall.quantity*5
				const battleLoss = state.integers.population + Math.floor(state.integers.population*Math.random())
				var losses = battleLoss - defense
				if (losses > 0) {
					if (losses < state.integers.population) {
						state.log.unshift({type: 'red', event: 'you were invaded, and lost ' + losses + ' people'})
					}
					else {
						state.log.unshift({type: 'red', event: 'you were invaded, and lost ' + state.integers.population + ' people'})
					}
					state.integers.population -= losses;
				} else {
					state.log.unshift({type: 'orange', event: 'you were invaded, but no one died'})
				}
				if (state.integers.population <= 0) state.integers.population = 0
			} 
			const farmRatio = state.buildings.farm.quantity/state.integers.population;
			const requiredFarmRatio = 0.1
			if (farmRatio < requiredFarmRatio) {
				const loss = Math.floor(state.integers.population*(0.45 - farmRatio)) + 10
				state.log.unshift({type: 'red', event: 'your people are starving, lost ' + loss +' build more farms'})
				state.integers.growth = -loss
				state.integers.population -= loss
			}
			if (farmRatio >= requiredFarmRatio && !(state.integers.invasionDays <= 0)) {
				// population increases depending on number of farms
				const growth = Math.ceil((Math.random() * state.buildings.farm.quantity) * 0.10 + state.integers.population*0.07)
				state.integers.population += growth
				state.log.unshift({type: 'green', event: 'your population grew ' + growth})
				state.integers.growth = growth
				// population is capped by number of houses
				const cappedPop = state.buildings.house.quantity*10;
				if (state.integers.population > cappedPop) {
					state.integers.population = cappedPop;
					state.log.unshift({type: 'orange', event: 'Pop limit reached, build more houses'})
				}
			}
			// retreive taxes from population
			const tax = Math.floor(Math.random() * state.integers.population);
			// maintenance
			const maintenance = Math.floor((state.buildings.farm.quantity*state.buildings.farm.price + 
			state.buildings.house.quantity*state.buildings.house.price + 
			state.buildings.wall.quantity*state.buildings.wall.price)*0.04)
			// calculate total income
			state.integers.gold = state.integers.gold + tax - maintenance
			state.integers.income = tax - maintenance
			// add tax and maintenance into state
			state.integers.maintenance = maintenance
			state.integers.tax = tax
			// if gold falls below zero, cap it at zero but remove walls/farms as result
			if (state.integers.gold < 0) {
				state.integers.gold = 0;
				state.buildings.farm.quantity -= Math.ceil(state.buildings.farm.quantity*0.10)
				state.buildings.wall.quantity -= Math.ceil(state.buildings.wall.quantity*0.10)
				state.log.unshift({type: 'orange', event: 'Cannot pay building maintenance, lost ' +  Math.ceil(state.buildings.farm.quantity*0.10) + ' farms'  +'and ' +  Math.ceil(state.buildings.farm.quantity*0.10) + ' walls'})
			}
			// game over, reset state
			if (state.integers.population<=0) {
				if (confirm('Everybody died, GAME OVER! New Game?')) {
					
					state.buildings = data().buildings;
					state.integers = data().integers;
					state.log = []
                }
			}
		}
	},
	getters : {
		buildings(state)  { 
			return state.buildings
		},
		log(state) {
			return state.log
		},
		integers (state) {
			return state.integers
		}
	},
	actions: {
		buyBuilding: ({commit}, data) => {
			commit('BUY_BUILDING', data);
		},
		endTurn: ({commit}) => {
			commit('END_TURN');
		}
	}
});