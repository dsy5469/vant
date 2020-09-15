<template>
    <div>
        <!-- vant导航栏 -->
        <van-sticky>
            <van-nav-bar style="background-color: #3090EC;">
                
                <template #left>
                    <van-icon @click="back" color="white" name="arrow-left" />
                </template>
                
                <template #title>
                    <span style="color: white;">首页</span>
                </template>	
            </van-nav-bar>
        </van-sticky>

        <van-grid clickable :column-num="2">
            <van-grid-item icon="manager-o" :text="first" to="/main" />
            <van-grid-item icon="gift-card-o" :text="second" to="/goods" />
        </van-grid>
    </div>

</template>

<script>
    import Vue from 'vue';
    import { Grid,GridItem,Icon,NavBar,Sticky } from 'vant';
    Vue.use(Grid).use(GridItem).use(Icon).use(NavBar).use(Sticky);
    import '@vant/touch-emulator';
    export default {
        data(){
            return{
                first:"个人信息",
                second:"特殊物品信息"
            }
        },

        methods:{
            back(){ //返回我的页面
				this.$router.push({
					path:'/login'
				})
            }
        }
    }
</script>