<template>
	<div @click="Mymap" class="search-index">
		<div class="serach">搜索:/目的地/酒店/景点/航班号</div>
		<a href="#" @click.stop="Myprofile" class="user">我 的</a>
	</div>
</template>

<script>
	export default{
		name:'Search',
		methods:{
			Myprofile(){
				this.$router.push('/profile')
			},
			Mymap(){
				this.$router.push('/map')
			}
		}
	}
</script>

<style scoped="scoped">
	.search-index{
		position: fixed;
		display: flex;
		top: 10px;
		left: 50%;
		transform: translate(-50%);
		/* 固定的盒子应该有宽度 */
		width: 100%;
		min-width: 320px;
		max-width: 540px;
		height: 34px;
		box-shadow: 0px 2px 4px rgba(0,0,0,.2);
		border-radius: 7px;
		cursor: pointer;
		z-index: 999;
	}
	.serach{
		flex: 1;
		height: 26px;
		margin: auto 0;
		border-radius: 4px;
		line-height: 26px;
		display: flex;
		font-size: 12px;
	}
	.serach::before{
		content: "";
		display: block;
		width: 24px;
		height: 24px;
		background: url("../../assets/search/放大镜.png") no-repeat left center;
		background-size: 22px;
	}
	.user{
		width: 44px;
		font-size: 10px;
		background: url("../../assets/search/用户.png") no-repeat center top;
		background-size: 22px;
		text-align: center;
		line-height: 52px;
	}
</style>
