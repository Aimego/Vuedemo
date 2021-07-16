<template>
	<div class="sales-box">
		<div class="sales-hd">
			<h2><i>热门活动</i></h2>
			<a href="#" class="more">获取更多福利</a>
		</div>
		<div class="sales-bd">
			<div class="row" v-for="item in SalseItem">
				<a href="#">
					<img :src="item.one" alt="">
				</a>
				<a href="#">
					<img :src="item.two" alt="">
				</a>
			</div>
		</div>
		<el-empty  :image-size="50" description="已到底部了"></el-empty>
	</div>
</template>

<script>
	export default{
		name:"Salse",
		data(){
			return{
				SalseItem:this.$store.state.Navs.Salse
			}
		}
	}
</script>

<style>
	.sales-box{
		border-top: 1px solid #ccc;
		background-color: #fff;
		margin: 4px;
	}
	.sales-hd{
		height: 44px;
		border: 1px solid #ccc;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.sales-hd h2{
		margin-top: 10px;
		margin-left: 4px;
		color: orangered;
		display: flex;
		font-size: 20px;
		font-weight: bolder;
	}
	.sales-hd h2::after{
		content: "";
		display: block;
		width: 20px;
		height: 20px;
		background: url(../../../static/salse/庆祝.png) no-repeat left 0px ;
		background-size: 20px;
		margin-left: 5px;
	}
	
	.more {
		font-size: 8px;
		background: -webkit-linear-gradient(left,#FF506C,#FF6B6C);
		border-radius: 8px;
		padding: 3px 20px 3px 10px;
		margin-right: 4px;
		position: relative;
		color: #fff;
	}
	.more::after{
		position: absolute;
		content: "";
		top: 7px;
		right: 7px;
		width: 7px;
		height: 7px;
		border-top:2px solid #fff;
		border-right: 2px solid #fff;
		transform: rotate(45deg);
	}
	
	.row{
		display: flex;
	}
	.row a{
		flex:1;
		border-bottom: 1px solid #ccc;
	}
	.row a:nth-child(1){
		border-right: 1px solid #eee;
	}
	.row a img{
		width:100% ;
	}
	.el-empty{
		
	}
</style>
