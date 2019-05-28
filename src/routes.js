import Home from './components/Home.vue';
import Buildings from './components/buildings/Buildings.vue';
import Village from './components/Village.vue';

export const routes = [
	{path: '/', component: Home},
	{path: '/buildings', component: Buildings},
	{path: '/village', component: Village},
]