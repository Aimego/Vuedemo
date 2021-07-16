<template>
	<div>
		<router-view></router-view>
		<TabBar></TabBar>
	</div>
</template>

<script>

import TabBar from './components/tabbar/TabBar.vue'
export default {
  name: 'App',
  components:{
	  TabBar
  },

}
</script>

<style>
	body{
		max-width: 540px !important;
		min-width: 320 !important;
		margin: 0px auto !important;
		font-size: 14px !important;
		color: black !important;
		background: #f2f2f2 !important;
		overflow-x:hidden  !important;
		-webkit-tap-highlight-color: transparent !important;
	}
	a{
		text-decoration: none;
		color: #000000;
	}
	ul{
		padding: 0px;
		margin: 0px;
		list-style: none;
	}
</style>
