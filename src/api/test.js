/*
 * @Description:接口
 * @Autor: xiukun@herry
 * @Date: 2021-01-08 12:28:11
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-01-19 15:11:32
 */
import { request, http } from '@/core/ajax';
//如果有网关 就加上 没有去掉
const getway = process.env.VUE_APP_GETWAY;
const api = {
	getMenu: `${getway}/api/dy/menu/getMenu`,
};

export default api;
//左侧菜单
const getMenu = (params = {}) => http.get(api.getMenu, params);
const getMenu2 = (params = {}) => request(api.getMenu, 'post', params);

/**
 * 页面使用
 * 1.import {getMenu} from '@/api/test.js'  getMenu.then().catch()
 * 2.this.$request.get('api/dy/menu/getMenu',{a:1})
 */
export { getMenu, getMenu2 };
