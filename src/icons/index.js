/*
 * @Description:
 * @Autor: xiukun@herry
 * @Date: 2021-01-08 14:09:50
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-01-20 10:38:12
 */
import Vue from 'vue';
import SvgIcon from '../components/SvgIcon/index.vue'; // svg component

// 全局注册
Vue.component('svg-icon', SvgIcon);

const req = require.context('./svg', false, /\.svg$/);
const requireAll = (requireContext) =>
	requireContext.keys().map(requireContext);
requireAll(req);
