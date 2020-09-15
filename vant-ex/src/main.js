import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vue-easytable/libs/themes-base/index.css'			// 引入样式
import {VTable, VPagination} from 'vue-easytable'			// 导入 table 和 分页组件
import $ from 'jquery'
// import 'amfe-flexible'

Vue.component(VTable.name, VTable)							// 注册到全局
Vue.component(VPagination.name, VPagination)

Vue.config.productionTip = false

window.jQuery = $;
window.$ = $;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
