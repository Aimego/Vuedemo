<template>
	
	  <div class="block">
	    <el-carousel trigger="click" height="150px" class="car">
	      <el-carousel-item v-for="item in imgs" :key="item.id">
				<img :src="item.imgUrl" alt="">
	      </el-carousel-item>
	    </el-carousel>
	  </div>
	
</template>

<script>
	export default{
		name:'Carousel',
		data(){
			return{
				imgs:[
					{
						id:'101',
						imgUrl:require('../../assets/1.jpg')
					},
					{
						id:'102',
						imgUrl:require('../../assets/2.jpg')
					},
					{
						id:'103',
						imgUrl:require('../../assets/3.jpg')
					}
				]
			}
		}
	}
</script>

<style>
	
	.block{
		margin-top:50px ;
	}
	.car{
		border-radius: 10px;
	}
	.car img{
		width: 100%;
		height: 100%;
	}
	.el-carousel__container{
		height: 200px !important;
	}
	
</style>
