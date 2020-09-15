<template>
    <div>
        <!-- vant导航栏 -->
        <van-sticky>
            <van-nav-bar style="background-color: #3090EC;">
                
                <template #left>
                    <van-icon @click="back" color="white" name="arrow-left" />
                </template>
                
                <template #title>
                    <span style="color: white;">海关出入境特殊物品卫生检疫监管</span>
                </template>	
            </van-nav-bar>
        </van-sticky>
        <van-cell title="单位名称" :value="cpName" size="large" required title-class="mg-left" value-class="left"/>
        <van-cell title=" 组织机构代码" :value="orgCode" size="large" required title-class="mg-left" value-class="left"/>
        <van-cell title="法人代表" :value="legalPerson" size="large" required title-class="mg-left" value-class="left"/>
        <van-cell title="生物安全负责人" :value="principal" size="large" required title-class="mg-left" value-class="left"/>
        <van-cell title="生物安全负责人手机号码" :value="tel" size="large" required title-class="mg-left" value-class="left" center/>
        <van-cell title="生物安全负责人固定电话" :value="phone" size="large" required title-class="mg-left" value-class="left"/>
        <van-cell title="拟入境的特殊物品类别" size="large" title-class="mg-left" value-class="left" class="address-cell">
            <template slot="default">
                <van-radio-group v-model="radio" direction="horizontal" icon-size="0.8rem">
                    <van-radio name="1">人体组织</van-radio>
                    <van-radio name="2">微生物</van-radio>
                    <van-radio name="3">生物制品</van-radio>
                    <van-radio name="4">人体血液及其制品</van-radio>
                    <van-radio name="5">非特殊物品</van-radio>
                </van-radio-group>
            </template>
        </van-cell>
        <van-cell title="联系人" :value="telMan" size="large" required title-class="mg-left" value-class="left"/>
        <van-cell title="电子邮箱" :value="email" size="large" title-class="mg-left" value-class="left"/>
        <van-cell title="邮政编码" :value="postalCode" size="large" title-class="mg-left" value-class="left"/>
        <van-cell title="注册地址" :value="reAddress" size="large" title-class="mg-left" value-class="left"/>
        <van-cell size="large" title-class="mg-left" :value="address" required value-class="left" class="address-cell">
            <template slot="title">
                <select style="padding:3px 0px;margin-left:-3px;font-size:0.9rem;">
                    <option value="生产地址">生产地址</option>
                    <option value="经营地址">经营地址</option>
                </select>
            </template>
        </van-cell>
        <van-cell title="单位英文名称" :value="cpEnName" size="large" title-class="mg-left" value-class="left"/>
        <van-cell title="统一社会信用代码" :value="creditCode" size="large" title-class="mg-left" value-class="left"/>
        <van-cell title="法人身份证号" :value="idCard" size="large" required title-class="mg-left" value-class="left"/>
        <van-cell title="经营范围" :value="bussinessScope" size="large" required title-class="mg-left" value-class="left"/>
        <van-cell title="生物安全负责人电子邮箱" :value="principalEmail" size="large" required title-class="mg-left" value-class="left"/>
        <van-cell title="辖区监管机构" :value="regulator" size="large" required title-class="mg-left" value-class="left"/>
        <van-cell title="单位性质" size="large" title-class="mg-left" value-class="left" class="address-cell" center required>
            <template slot="default">
                <van-checkbox-group v-model="result" direction="horizontal">
                    <van-checkbox v-model="checked" icon-size="0.8rem" shape="square" name="a">生产</van-checkbox>
                    <van-checkbox v-model="checked" icon-size="0.8rem" shape="square" name="b">销售</van-checkbox>
                    <van-checkbox v-model="checked" icon-size="0.8rem" shape="square" name="c">科研</van-checkbox>
                    <van-checkbox v-model="checked" icon-size="0.8rem" shape="square" name="d">医疗</van-checkbox>
                    <van-checkbox v-model="checked" icon-size="0.8rem" shape="square" name="e">检验</van-checkbox>
                    <van-checkbox v-model="checked" icon-size="0.8rem" shape="square" name="f">医药研发外药</van-checkbox>
                </van-checkbox-group>
            </template>
        </van-cell>
        <van-cell title="手机号码" :value="orgTel" size="large" required title-class="mg-left" value-class="left"/>
        <van-cell title="固定电话" :value="orgPhone" size="large" title-class="mg-left" value-class="left"/>
        <van-cell title="传真" :value="fax" size="large" title-class="mg-left" value-class="left"/>
        <van-cell title="注册资金（万美元）" :value="reMoney" size="large" required title-class="mg-left" value-class="left"/>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Cell,Checkbox,Radio,RadioGroup,CheckboxGroup,Sticky } from 'vant';
    Vue.use(Cell).use(Checkbox).use(Radio).use(RadioGroup).use(CheckboxGroup).use(Sticky);
    import '@vant/touch-emulator';
    export default {
        data(){
            return{
                cpName:"xxxxxxx物流公司",
                orgCode:"122112222235",
                legalPerson:"王可里",
                principal:"李莎莎",
                tel:"18810923422",
                phone:"-",
                goodsType:"",
                telMan:"李莎莎",
                email:"13176779@qq.com",
                postalCode:"112223",
                reAddress:"北京市昌平区回龙观xxxxxxx",
                address:"北京市昌平区回龙观xxxxxxx",
                cpEnName:"huujjiijhhuuhhuhu",
                creditCode:"12112122222222223",
                idCard:"12112122222222243241",
                bussinessScope:"xxxxxxxxxxx",
                principalEmail:"13176779@qq.com",
                nature:"",
                regulator:"北京海关本部",
                orgTel:"18810922329",
                orgPhone:"-",
                fax:"",
                reMoney:"290万美元",
                radio: '1',
                result: ['a', 'b'],
                checked: true
            }
        },

        methods:{
            back(){ //返回我的页面
				this.$router.push({
					path:'/index'
				})
            }
        }
    }
</script>

<style scoped>
    .left{
        text-align: left;
        padding-left: 10px
    }
    .mg-left{
        margin-left: 20px; 
        width: 30%;      
    }
    .van-cell__value {
        min-width: 60%;
    }
    
</style>