<template>
	<div>
		<Search></Search>
		<Carousel></Carousel>
		<Nav></Nav>
		<NavCommon></NavCommon>
		<Subnav></Subnav>
		<Salse></Salse>
	</div>
</template>

<script>
	import Search from './Search.vue'
	import Carousel from './Carousel.vue'
	import Nav 		from './Nav/Nav.vue'
	import NavCommon from './NavCommonItem.vue'
	import Subnav from './Subnav.vue'
	import Salse from './Salse.vue'
	export default {
	  name: 'Home',
	  components:{
		  Search,
		  Carousel,
		  Nav,
		  NavCommon,
		  Subnav,
		  Salse
	  }
	}
</script>

<style>
</style>
