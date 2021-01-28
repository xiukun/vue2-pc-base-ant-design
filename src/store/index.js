/*
 * @Description:
 * @Autor: xiukun@herry
 * @Date: 2021-01-12 18:17:00
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-01-19 11:17:27
 */
import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import user from './modules/user';
import multiTab from './modules/multi-tab';
import permission from './modules/permission';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
	getters,
	modules: {
		app,
		user,
		permission,
		multiTab,
	},
});
