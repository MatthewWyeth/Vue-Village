import buildings from '../../data/buildings';

const state = {
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
}

const mutations = { 
	'BUY_BUILDING' (state, {quantity, type}) {
		state.buildings[type].quantity += quantity
		state.gold -= type.price * quantity;
	},
	'SET_BUILDINGS' (state, buildings) {
        state.buildings = buildings;
    },
}

const getters = {
    getVillage: function getVillage(state)  { 
        return state.buildings
    },
    getGold: function getGold(state) {
      return state.gold;
    }
};

const actions = {
	buyBuilding: ({commit}, data) => {
        commit('BUY_BUILDING', data);
    },
	initBuildings: ({commit}) => {
        commit('SET_BUILDINGS', buildings);
    },
}

export default {
    state,
    mutations,
	getters,
	actions
}