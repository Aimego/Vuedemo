<template>
	<div id="tab-bar">
		<slot>
			<tab-bar-item path="/home" activeColor="deeppink">
				<img slot="item-icon-active" src="../../assets/tabbar/首页选中.png" alt="">
				<img slot="item-icon" src="../../assets/tabbar/首页.png" alt="">
				<div slot="item-text">首页</div>
			</tab-bar-item>
			
			<tab-bar-item path="/calendar" activeColor="deeppink">
				<img slot="item-icon-active" src="../../assets/tabbar/日历选中.png" alt="">
				<img slot="item-icon" src="../../assets/tabbar/日历.png" alt="">
				<div slot="item-text">日历</div>
			</tab-bar-item>
			
			<tab-bar-item path="/map" activeColor="deeppink">
				<img slot="item-icon-active" src="../../assets/tabbar/地图选中.png" alt="">
				<img slot="item-icon" src="../../assets/tabbar/地图.png" alt="">
				<div slot="item-text">地图</div>
			</tab-bar-item>
			
			<tab-bar-item path="/profile" activeColor="deeppink">
				<img slot="item-icon-active" src="../../assets/tabbar/我的选中.png" alt="">
				<img slot="item-icon" src="../../assets/tabbar/我的.png" alt="">
				<div slot="item-text">我的</div>
			</tab-bar-item>
		</slot>
	</div>
</template>

<script>
	import TabBarItem from './TabBarItem.vue'
	export default{
		name:'TabBar',
		components:{
			TabBarItem
		}
	}
</script>

<style scoped="scoped">
	#tab-bar{
		max-width: 540px;
		min-width: 320px;
		display: flex;
		background-color: #f6f6f6;
		position: fixed;
		left: 50%;
		transform: translate(-50%);
		width: 100%;
		right:0;
		bottom: 0;
		box-shadow: 10px 5px 10px rgba(100,100,100,0.1);
		font-size: 14px;
		z-index: 999;
	}
</style>
