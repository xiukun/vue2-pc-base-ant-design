/*
 * @Description:
 * @Autor: xiukun@herry
 * @Date: 2021-01-12 18:17:00
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-01-25 10:08:32
 */
// IE10兼容 with polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store/';
import './icons'; //引入svg图标,需要用svg-sprite-loader做处理

// --- 注意 ---- mockjs不支持IE，正式项目中请不要在 production ENV中使用
import '@/mock';

import setStoreWidthConfig from '@/core/set_store_width_config';
import '@/core/lazy_use';
import '@/permission'; // permission control
import '@/utils/filter'; // global filter
import '@/assets/styles/global.less';

// 给 axios Promise 扩展 finally
import promiseFinally from 'promise.prototype.finally';
promiseFinally.shim();

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	created: setStoreWidthConfig,
	render: (h) => h(App),
}).$mount('#app');
