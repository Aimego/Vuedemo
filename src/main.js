import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import BaiduMap from 'vue-baidu-map'
import store from './store'

Vue.use(BaiduMap, {
  ak: 'wbQxqFcVheqtGg8HfolIqeEW9eaq9nbo'
})
Vue.use(ElementUI)

Vue.config.productionTip = false


router.beforeEach((to,form,next) => {
	if(to.path == '/home'){
		if(Object.keys(store.state.use).length == 0){
		alert('请您先登录')
		next({path:'/profile'})
		}
	}
	next();
})


Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
	router,
	store,
  render: h => h(App)
})

