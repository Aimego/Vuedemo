import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		use:{},
		Navs:{}
	},
	mutations:{
		getValue(state,payload){
			state.use = payload
		},
		getNav(state,payload){
			state.Navs = payload
		}
	},
	actions:{
		
	},
	getters:{
		
	}
})

export default store