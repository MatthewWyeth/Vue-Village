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
			// determine chance of invasion according to tower and wall numbers
			const battleForAgainst = (((Math.random() * state.buildings.tower.quantity * 3) + (Math.random() * state.buildings.wall.quantity)-state.population) + 100)
			console.log('battleForAgainst: ' + battleForAgainst)
			// make invasions always possible
			const hailMary = Math.random() < 0.01;
			if (battleForAgainst < 0 || hailMary ) {
				if (hailMary) console.log('HAIL MARY FULL OF GRACE')
				state.population -= Math.ceil(battleForAgainst)
				if (state.population <= 0) state.population = 0
				console.log('you were invaded and lost ' + battleForAgainst + ' people')
			} 
			const farmRatio = state.buildings.farm.quantity/state.population;
			console.log('Farm %: '+ farmRatio)
			if (farmRatio < 0.1) {
				const loss = Math.ceil(state.population*(0.45 - farmRatio))
				console.log('your people are starving, lost ' + loss +' build more farms')
				state.population -= loss
			} else {
				// population increases depending on number of farms
				const growth = Math.ceil((Math.random() * state.buildings.farm.quantity) * 0.10 + state.population*0.07)
				state.population += growth
				console.log('your population grew ' + growth +', nice work')
			}
			// population is capped by number of houses
			const cappedPop = state.buildings.house.quantity*10;
			if (state.population > cappedPop) {
				state.population = cappedPop;
				console.log('Pop limit reached, build more houses')
			}
			// retreive taxes from population
			state.gold += Math.floor(Math.random() * state.population);

			

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