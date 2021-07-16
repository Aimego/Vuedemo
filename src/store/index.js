import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		use:{}
	},
	mutations:{
		getValue(state,payload){
			state.use = payload
		}
	},
	actions:{
		
	},
	getters:{
		
	}
})

export default store