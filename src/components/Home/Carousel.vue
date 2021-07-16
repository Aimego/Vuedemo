<template>
	
	  <div class="block">
	    <el-carousel trigger="click" height="150px" class="car">
	      <el-carousel-item v-for="(item,index) in CarouselItem" :key="index">
				<img :src="item" alt="">
	      </el-carousel-item>
	    </el-carousel>
	  </div>
	
</template>

<script>
	export default{
		name:'Carousel',
		data(){
			return{
				CarouselItem:this.$store.state.Navs.Carousel
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
