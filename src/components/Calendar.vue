<template>
	<div class="cal">
	<el-calendar v-model="value">
	</el-calendar>
	<el-empty  :image-size="50" description="已到底部了"></el-empty>
	</div>
</template>

<script>
	import Hom from './Home/Home.vue'
	export default {
	  name: 'Home',
	  components:{
		  Hom
	  },
	  data(){
		  return{
			  value: new Date()
		  }
	  }
	}
</script>

<style>
	.cal{
		margin-top: 10px;
	}
</style>
