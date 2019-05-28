import Vue from 'vue';
import Vuex from 'vuex';
import buildings from '../data/buildings';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		gold: 100,
		population: 50,
		buildings: {
			farm: {
				id: 1, 
				price: 20,
				quantity: 1
			},
			wall: {
				id: 2, 
				price: 50,
				quantity: 0
			},
			house: {
				id: 3, 
				price: 10,
				quantity: 5
			},
			tower: {
				id: 4, 
				price: 100,
				quantity: 0
			},
		}
	},
	mutations : { 
		'BUY_BUILDING' (state, {quantity, type}) {
			if (state.gold >= state.buildings[type].price * quantity){
				state.gold -= state.buildings[type].price * quantity;
				state.buildings[type].quantity += quantity
			} else {
				console.log('Insuffient funds')
			}
			
		},
		'SET_BUILDINGS' (state, buildings) {
			state.buildings = buildings;
		},
		'END_TURN' (state) {
			// determine new population
			// check for invasion
			// make invasions always possible
			const invade = Math.random() < 0.1;
			if (invade) {
				console.log('you were invaded with pop: ' + state.population )
				const defense = state.buildings.tower.quantity*10 + state.buildings.wall.quantity*5
				const battleLoss = state.population - defense + Math.floor(state.population*Math.random())
				if (battleLoss > 0) {
					state.population -= battleLoss;
					console.log('and lost ' + battleLoss + ' people')
					console.log('defense saved: ' + defense)
				} else {
					console.log('and no one died, defense held up')
				}
				if (state.population <= 0) state.population = 0
			} 
			console.log('Farm %: '+ state.buildings.farm.quantity)
			console.log('Farm %: '+ state.population)
			const farmRatio = state.buildings.farm.quantity/state.population;
			const requiredFarmRatio = 0.1
			console.log('Farm %: '+ farmRatio)
			if (farmRatio < requiredFarmRatio) {
				const loss = Math.floor(state.population*(0.45 - farmRatio)) + 10
				console.log('your people are starving, lost ' + loss +' build more farms')
				state.population -= loss
			}
			if (farmRatio >= requiredFarmRatio && !invade) {
				// population increases depending on number of farms
				const growth = Math.ceil((Math.random() * state.buildings.farm.quantity) * 0.10 + state.population*0.07)
				state.population += growth
				console.log('your population grew ' + growth +', nice work')
				// population is capped by number of houses
				const cappedPop = state.buildings.house.quantity*10;
				if (state.population > cappedPop) {
					state.population = cappedPop;
					console.log('Pop limit reached, build more houses')
				}
			}
		
			// retreive taxes from population
			const tax = Math.floor(Math.random() * state.population);
			// maintenance
			const maintenance = Math.floor((state.buildings.farm.quantity*state.buildings.farm.price + 
						state.buildings.house.quantity*state.buildings.house.price + 
						state.buildings.tower.quantity*state.buildings.tower.price + 
						state.buildings.wall.quantity*state.buildings.wall.price)*0.01)
			state.gold = state.gold + tax - maintenance
			if (state.population<=0) console.log('GAME OVEREREREERERERERER')
			

		}
	},
	getters : {
		buildings(state)  { 
			return state.buildings
		},
		gold(state) {
		  return state.gold;
		},
		population(state) {
			return state.population;
		},
	},
	actions: {
		buyBuilding: ({commit}, data) => {
			commit('BUY_BUILDING', data);
		},
		initBuildings: ({commit}) => {
			commit('SET_BUILDINGS', buildings);
		},
		endTurn: ({commit}) => {
			commit('END_TURN');
		}
	}
});