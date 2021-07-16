<template>
	<div class="nav">
		<NavItem v-for="(item,index) in NavItem" :key="item">
			<img slot="icon" :src="item.icon" alt="">
			<div slot="text">{{item.text}}</div>
		</NavItem>
	</div>
</template>

<script>
	import NavItem from './NavItem.vue'
	export default{
		name:'Nav',
		components:{
			NavItem
		},
		data(){
			return{
				NavItem:this.$store.state.Navs.Nav
			}
		},
		
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
