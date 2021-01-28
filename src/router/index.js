/*
 * @Description:
 * @Autor: xiukun@herry
 * @Date: 2021-01-18 18:30:51
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-01-19 17:32:59
 */
import Vue from 'vue';
import Router from 'vue-router';
import { constantRouterMap, syncRouterMap } from '@/router/router.config';
import { openPermission } from '@/config/index';

// hack router push callback
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
	if (onResolve || onReject) {
		return originalPush.call(this, location, onResolve, onReject);
	}
	return originalPush.call(this, location).catch((err) => err);
};

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	scrollBehavior: () => ({ y: 0 }),
	routes: openPermission
		? constantRouterMap
		: constantRouterMap.concat(syncRouterMap), //未开启权限时候不用异步加载路由 初始化的时候直接把同步路由加进去
});
