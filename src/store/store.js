import Vue from 'vue';
import Vuex from 'vuex';

import endTurn from './modules/endTurn';
import village from './modules/village';
//import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
   // actions,
    modules: {
        village,
        endTurn
    }
});