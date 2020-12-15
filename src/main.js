import Vue from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
Vue.use(dataV)
/**
 * @description 修改默认配置
 * @param {String} key          想要修改的配置项的key
 * @param {Object|Array} config 你的配置
 * @return {Undefined} 无返回值
 */
// changeDefaultConfig('color', ['#37a2da'])
import './assets/common.less'

//引入echart
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;
import 'echarts/map/js/china.js'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
