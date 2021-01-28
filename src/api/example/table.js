/*
 * @Description:
 * @Autor: xiukun@herry
 * @Date: 2021-01-19 14:53:56
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-01-19 15:13:14
 */
import { http } from '@/core/ajax';
export function getList(parameter) {
	return http({
		url: 'https://randomuser.me/api',
		method: 'get',
		params: parameter,
	});
}
