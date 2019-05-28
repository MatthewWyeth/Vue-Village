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
	'END_TURN' (state) {
		console.log('state before: ' + state.buildings.farm.quantity)
		console.log('building before: '+ buildings.farm.quantity)
		state.buildings.farm.quantity += 12
		 console.log('state after: ' + state.buildings.farm.quantity)
		 console.log('building after: '+ buildings.farm.quantity)
	}
};

const actions = {
    endTurn: ({commit}) => {
        commit('END_TURN');
    }
};



export default {
    state,
    mutations,
    actions
};