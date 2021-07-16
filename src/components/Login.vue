<template>
	<div class="login-box">
		<el-form ref="form" :model="form" label-width="80px" :rules="rules">
			<h3 class="login-title">欢迎登录</h3>
		  <el-form-item label="用户名" prop="name">
		    <el-input v-model="form.name" placeholder='请输入用户名'></el-input>
		  </el-form-item>
		  <el-form-item label="密码" prop="password">
		    <el-input type='password' v-model="form.password" placeholder='请输入密码' ></el-input>
		  </el-form-item>
		  
		  <el-form-item class='login-submit'>
		      <el-button type="primary" @click="onSubmit('form')">登录</el-button>
		      <el-button @click="resetForm('form')">重置</el-button>
		    </el-form-item>
		</el-form>
		<el-empty  :image-size="200"></el-empty>
	</div>
</template>

<script>
	export default {
		name:'Login',
		data() {
		      return {
		        form: {
		          name: '',
				  password:'',
				  id:''
			},
			rules:{
				name:[
					 { required: true, message: '请输入用户名', trigger: 'blur' },
					 { min: 2, max: 5, message: '长度在 2 到 5 个字母', trigger: 'blur' }
				],
				password:[
					{ required: true, message: '请输入密码', trigger: 'blur' },
					{ min: 3, max: 12, message: '长度在 5 到 12 个数字', trigger: 'blur' }
				]
			}
			}
			},
		methods: {
		      onSubmit(formName) {
		        this.$refs[formName].validate((valid) => {
		          if (valid){
					  this.form.id = (Math.random()*1000000).toFixed(0)
					  this.$store.commit('getValue',this.form)
					   this.$message.success('欢迎您 :'+this.form.name);
					   setTimeout(()=>{
						   this.$router.push('/profile');
					   },2000)
		          } else {
		            this.$message.error('用户名或密码格式不正确');
		            return false;
		          }
		        });
		      },
			  resetForm(formName) {
			          this.$refs[formName].resetFields();
			        }
		  },
		  }
</script>

<style>
	.login-box{
		width: 500px;
		height: 400px;
		border: 1px solid #F2F6FC;
		border-radius: 20px;
		box-shadow: 0px 0px 20px #F2F6FC;
		margin: 100px auto;
		padding: 20px 30px;
	}
	.login-title{
		text-align: center;
		margin-bottom: 40px;
	}
	.login-submit{
		
	}
</style>
