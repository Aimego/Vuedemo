import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import('../components/Home/Home.vue')
const Calendar = ()=> import('../components/Calendar.vue')
const Map = ()=> import('../components/Map.vue')
const Login = ()=> import('../components/Login.vue')
const Profile = ()=> import('../components/Profile.vue')

Vue.use(VueRouter)

const routes = [
	{
		path:'/',
		redirect:'/home'
	},
	{
		path:'/home',
		name:'Home',
		component:Home
	},
	{
		path:'/calendar',
		name:'Calendar',
		component:Calendar
	},
	{
		path:'/map',
		name:'Map',
		component:Map
	},
	{
		path:'/login',
		name:'Login',
		component:Login
	},
	{
		path:'/profile',
		name:'Profile',
		component:Profile
	}
]

const router = new VueRouter({
	routes,
	mode:'hash'
})



export default router