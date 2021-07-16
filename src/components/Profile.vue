<template>
<div>
	<div class="Person">
		<div class="Person-message" v-if="isUse">
			<div>{{$store.state.use.name}}</div>
			<div>身份编码 : {{$store.state.use.id}}</div>
			<div>查看或编辑个人动态 ></div>
		</div>
		<div class="Person-message" v-else="isUse">
			<div><el-row>
			<el-button round @click="Myuse">登录</el-button>
			<el-button round @click="Myuse">注册</el-button>
			</el-row></div>
		</div>
		<div class="Person-img">
			<el-avatar :size="100" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
		</div>
	</div>
	
	<div class="Mes-item">
		<div class="Mes-item-icon1">身份认证</div>
		<div class="Mes-item-icon2">我的任务</div>
		<div class="Mes-item-icon3">智能客服</div>
		<div class="Mes-item-icon4">我的评价</div>
		<div class="Mes-item-icon5">我的收藏</div>
	</div>
	
	<el-empty  :image-size="200"></el-empty>
</div>
</template>

<script>
	export default {
		name:'Use',
		data(){
			return{
				isUse:Object.keys(this.$store.state.use).length != 0
			}
		},
		methods:{
			Myuse(){
				this.$router.push('/login')
			}
		}
		}
</script>

<style>
	.Person{
		display: flex;
		font-size: 12px;
		color: slategray;
		background-color: #F2F6FC;
		border-radius: 5px;
		padding-left: 15px;
		margin-top: 10px;
		box-shadow: 5px 5px 5px 5px #F0F0F0;
	}
	.Person .Person-message,.Person-img{
		flex: 1;
	}
	.Person-message{
		/* margin:15px 0px 0px 60px; */
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.Person-message div{
		margin: 5px;
	}
	.Person-message div:nth-child(1){
		color: #000000;
		font-size: 24px;
		font-weight: bold;
	}
	.Person-img{
		margin-right: 20px;
		text-align: right;
	}
	.Mes-item{
		margin-top: 20px;
		display: flex;
		flex-wrap: wrap;
		position: relative;
		background-color: #F2FAE3;
		border-radius: 10px;
		box-shadow: 5px 5px 4px 2px #FFC0CB;
		cursor: pointer;
	}
	.Mes-item div{
		font-size: 12px;
		height: 50px;
		flex: 100%;
		border-top:1px solid #fff ;
		border-bottom:1px solid #fff ;
		display: flex;
		align-items: center;
		border-radius: 10px;
	}
	.Mes-item .Mes-item-icon1::before{
		content: "";
		display: block;
		width: 30px;
		height: 30px;
		background: url(../assets/person/身份证.png) no-repeat left center;
		background-size: 28px;
		margin: 0px 5px;
	}
	.Mes-item .Mes-item-icon2::before{
		content: "";
		display: block;
		width: 30px;
		height: 30px;
		background: url(../assets/person/任务.png) no-repeat left center;
		background-size: 28px;
		margin: 0px 5px;
		
	}
	.Mes-item .Mes-item-icon3::before{
		content: "";
		display: block;
		width: 30px;
		height: 30px;
		background: url(../assets/person/客服.png) no-repeat left center;
		background-size: 28px;
		margin: 0px 5px;
	}
	.Mes-item .Mes-item-icon4::before{
		content: "";
		display: block;
		width: 30px;
		height: 30px;
		background: url(../assets/person/评价.png) no-repeat left center;
		background-size: 28px;
		margin: 0px 5px;
	}
	.Mes-item .Mes-item-icon5::before{
		content: "";
		display: block;
		width: 30px;
		height: 30px;
		background: url(../assets/person/收藏.png) no-repeat left center;
		background-size: 28px;
		margin: 0px 5px;
	}
	
	.Mes-item div::after{
		position: absolute;
		content: "";
		width: 7px;
		height: 7px;
		border-top:2px solid #000000;
		border-right: 2px solid #000000;
		transform: rotate(45deg);
		right: 10px;
	}
</style>
