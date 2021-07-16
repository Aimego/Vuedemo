<template>
	<div>
	
	<div class="nav-common" v-for="item in CommonItem" >
		<div class="nav-common-item" >
			<span>{{item.text1}}</span>
			<span><img :src="item.img" alt=""></span>
		</div>
		<div class="nav-common-item" >
			<span>{{item.text2}}</span>
			<span>{{item.text3}}</span>
		</div>
		<div class="nav-common-item" >
			<span>{{item.text4}}</span>
			<span>{{item.text5}}</span>
		</div>
	</div>
	
	</div>
</template>

<script>
	export default{
		name:'NavCommonItem',
		data(){
			return{
				CommonItem:this.$store.state.Navs.Common
			}
		}
	}
</script>

<style>
	.nav-common{
		margin-top: 5px;
		display: flex;		
		background-color: #8EC5FC;
		background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
	}
	.nav-common-item{
		flex: 1;
		display: flex;
		flex-direction: column;
		text-align: center;
		text-shadow: 1px 1px rgba(0,0,0,0.2);
		cursor: pointer;
	}
	.nav-common-item span{
		height: 40px;
		line-height: 40px;
	}
	.nav-common-item:nth-child(2) span:nth-child(2){
		border-top: 1px solid #fff;
	}
	.nav-common-item:nth-child(2){
		border-left: 1px solid #fff;
		border-right:1px solid #fff ;
	}
	.nav-common-item:nth-child(3) span:nth-child(2){
		border-top: 1px solid #fff;
	}
	.nav-common-item:nth-child(3){
		border-left: 1px solid #fff;
		border-right:1px solid #fff ;
	}
	.nav-common-item span img{
		width: 44px;
		height: 40px;
	}
	.nav-common:nth-child(2){
		background-color: #D9AFD9;
		background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);
	}
	.nav-common:nth-child(3){
		background-color: #0093E9;
		background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
	}
</style>
