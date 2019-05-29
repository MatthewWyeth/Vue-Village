// Returns starting data values
export function data () {
	return {
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
			}
		},
		integers: {
			gold: 100,
			population: 50,
			invasionDays: 5,
			growth: 0,
			maintenance:0,
			tax:0,
			income: 0,
		},
		log: [],
	}
}