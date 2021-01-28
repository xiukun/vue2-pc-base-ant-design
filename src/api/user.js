/*
 * @Description:
 * @Autor: xiukun@herry
 * @Date: 2021-01-19 13:20:09
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-01-19 15:10:22
 */
import api from './index';
import { http } from '@/core/ajax';
/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function login(parameter) {
	return http({
		url: '/auth/login',
		method: 'post',
		data: parameter,
	});
}

export function getSmsCaptcha(parameter) {
	return http({
		url: api.SendSms,
		method: 'post',
		data: parameter,
	});
}

export function getInfo(token) {
	return http({
		url: '/user/info',
		method: 'post',
		data: token,
	});
}

export function getCurrentUserNav(token) {
	return http({
		url: '/user/nav',
		method: 'post',
		data: token,
	});
}

export function logout() {
	return http({
		url: '/auth/logout',
		method: 'post',
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
		},
	});
}

/**
 * get user 2step code open?
 * @param parameter {*}
 */
export function get2step(parameter) {
	return http({
		url: api.twoStepCode,
		method: 'post',
		data: parameter,
	});
}
