import Vue from 'vue';
import Vuex from 'vuex';
import buildings from '../data/buildings';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		gold: 10000,
		buildings: {
			farm: {
				id: 1, 
				price: 10,
				quantity: 0
			},
			wall: {
				id: 2, 
				price: 10,
				quantity: 0
			},
			house: {
				id: 3, 
				price: 10,
				quantity: 0
			},
			tower: {
				id: 4, 
				price: 10,
				quantity: 0
			},
		}
	},
	mutations : { 
		'BUY_BUILDING' (state, {quantity, type}) {
			state.buildings[type].quantity += quantity
			state.gold -= type.price * quantity;
		},
		'SET_BUILDINGS' (state, buildings) {
			state.buildings = buildings;
		},
		'END_TURN' (state) {
			
		}
	},
	getters : {
		buildings(state)  { 
			return state.buildings
		},
		gold(state) {
		  return state.gold;
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