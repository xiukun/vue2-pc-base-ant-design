/*
 * @Description:
 * @Autor: xiukun@herry
 * @Date: 2021-01-19 14:53:56
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-01-19 15:11:51
 */
import { http } from '@/core/ajax';
const api = {
	user: '/user',
	role: '/role',
	service: '/service',
	permission: '/permission',
	permissionNoPager: '/permission/no-pager',
	orgTree: '/org/tree',
};

export default api;

export function getUserList(parameter) {
	return http({
		url: api.user,
		method: 'get',
		params: parameter,
	});
}

export function getRoleList(parameter) {
	return http({
		url: api.role,
		method: 'get',
		params: parameter,
	});
}

export function getServiceList(parameter) {
	return http({
		url: api.service,
		method: 'get',
		params: parameter,
	});
}

export function getPermissions(parameter) {
	return http({
		url: api.permissionNoPager,
		method: 'get',
		params: parameter,
	});
}

export function getOrgTree(parameter) {
	return http({
		url: api.orgTree,
		method: 'get',
		params: parameter,
	});
}

// id == 0 add     post
// id != 0 update  put
export function saveService(parameter) {
	return http({
		url: api.service,
		method: parameter.id === 0 ? 'post' : 'put',
		data: parameter,
	});
}
