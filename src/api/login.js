/*
 * @Description:
 * @Autor: xiukun@herry
 * @Date: 2021-01-08 18:20:44
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-01-18 16:29:11
 */
import { request } from '@/core/ajax';
const api = {
	login: '/login',
	role: '/role',
	permission: '/permission',
	getInfo: '/getInfo',
	logout: '/logout',
	captchaImage: '/captchaImage',
};

export default api;
// 登录方法
export const login = (params = {}) => request(api.login, 'post', params);

// 获取用户详细信息
export function getInfo() {
	return request(api.getInfo, 'get');
}

// 退出方法
export function logout(data) {
	return request(api.logout, 'post', data);
}

// 获取验证码
export function getCodeImg(data) {
	return request(api.captchaImage, 'get', data);
}
