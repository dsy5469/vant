<template>
	<div>
		
		<!-- vant导航栏 -->
		<van-nav-bar style="background-color: #3090EC;">
			
			<template #left>
				<van-icon @click="back" color="white" name="arrow-left" />
			</template>
			
			<template #title>
				<span style="color: white;">登录</span>
			</template>
			
		</van-nav-bar>
		
		<!-- vant表单 -->
		<van-form>
            <van-field
            v-model="username"
            name="账号"
            label="账号"
            placeholder="手机号"
            :rules="[{ required: true, message: '请填写账号' },{pattern:/^[1][3,5,6,7,8,9][0-9]{9}$/ , message: '请输入正确的11位手机号'}]"
            />
            <van-field
            v-model="password"
            :type="isPassword"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' },{pattern: /^\w{6,}$/,message:'密码不少于6位'}]"
            >
                <template #right-icon>
                    <span @click="onPassword" style="font-size: 20px;" class="iconfont icon-view"></span>
                </template>
            </van-field>
			
            <div style="margin: 16px;">
                <van-button @click="onSubmit" round block type="info" native-type="submit">
                    登录
                </van-button>
            </div>
		</van-form>
		
		<div style="float: right;">
			<router-link to="/reg">没有账号？点击注册</router-link>
		</div>
		
	</div>
</template>

<script>
    import Vue from 'vue';
    import { Button,Form,NavBar,Field,Icon } from 'vant';
    Vue.use(Button).use(Form).use(NavBar).use(Field).use(Icon);
    import '@vant/touch-emulator';
	export default {
		data() {
			return {
				username: '',
				password: '',
				isPassword:'password', //密码的type类型
				isText:true
			};
		},
		methods: {
			onSubmit(){ //点击登录
                //如果不符合登录条件则不会继续执行
				if(this.username.trim() == ''){
					return
				}
				if(!this.username.match(/^[1][3,5,6,7,8,9][0-9]{9}$/)){
					return
				}
				if(!this.password.match(/^\w{6,}$/)){
					return
				}
				
				// 获取数据
                // let users = localStorage.users;
				// if(users){
					// users = JSON.parse(users)
					let isLogin = false
					// users.map(item=>{
					// 	if(item.username == this.username && item.password == this.password){
					// 		isLogin = true
					// 		return
					// 	}
                    // })
                    if('17614660979' == this.username && '123456' == this.password){
                        isLogin = true
                        // return
                    }
					if(isLogin){
						// sessionStorage.user = this.username
						this.$router.push({
							path:'/index'
						})
					}else{
						this.$notify({ type: 'danger', message: '输入的账号或密码有误' });
					}
					
				// }else{
				// 	this.$notify({ type: 'danger', message: '该用户不存在' });
				// }
			},
			onPassword(){ //点击切换密码的type类型
				this.isText = !this.isText
				if(this.isText){
					this.isPassword = 'password'
				}else{
					this.isPassword = 'text'
				}
			},
			back(){ //返回我的页面
				this.$router.push({
					path:'/user'
				})
			}
		}
		
	};
</script>

<style>
</style>