<template>
	<div class="nav">
		<NavItem>
			<img slot="icon" src="../../../assets/nav/旅游景点.png" alt="">
			<div slot="text">景点·玩乐</div>
		</NavItem>
		
		<NavItem>
			<img slot="icon" src="../../../assets/nav/景点.png" alt="">
			<div slot="text">周边游</div>
		</NavItem>
		
		<NavItem>
			<img slot="icon" src="../../../assets/nav/美食.png" alt="">
			<div slot="text">美食林</div>
		</NavItem>
		
		<NavItem>
			<img slot="icon" src="../../../assets/nav/旅游车.png" alt="">
			<div slot="text">一日游</div>
		</NavItem>
		
		<NavItem>
			<img slot="icon" src="../../../assets/nav/地图.png" alt="">
			<div slot="text">当地攻略</div>
		</NavItem>
	</div>
</template>

<script>
	import NavItem from './NavItem.vue'
	export default{
		name:'Nav',
		components:{
			NavItem
		}
	}
</script>

<style>
	.nav{
		margin-top: 10px;
		display: flex;
		background-color: #F2FAE3;
		border-radius: 5px;
		box-shadow: -1px 2px 5px 2px gainsboro;
	}
</style>
