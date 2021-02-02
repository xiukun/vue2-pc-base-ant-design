/*
 * @Description:
 * @Autor: xiukun@herry
 * @Date: 2021-01-18 18:30:51
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-02-01 16:14:26
 */
import { RouteLayout } from '@/layouts';

const exampleModle = {
	path: '/example',
	name: 'example',
	redirect: '/example/table',
	component: RouteLayout,
	meta: {
		title: '示例页面',
		keepAlive: false,
		icon: 'thunderbolt',
		permission: ['dashboard'],
	},
	children: [
		{
			path: '/example/table',
			name: 'exampleTableList',
			component: () => import('@/views/example/TableList'),
			meta: {
				title: 'table',
				keepAlive: false,
				permission: ['dashboard'],
			},
		},
		{
			path: '/example/form',
			name: 'exampleForm',
			component: () => import('@/views/example/form'),
			meta: {
				title: 'form',
				// keepAlive: false,
				permission: ['dashboard'],
			},
		},
		{
			path: '/example/formModel',
			name: 'exampleFormModel',
			component: () => import('@/views/example/formModel'),
			meta: {
				title: 'formModel',
				// keepAlive: true,
				permission: ['dashboard'],
			},
		},
		{
			path: '/example/test',
			name: 'exampleTest',
			component: () => import('@/views/example/test'),
			meta: { title: 'test', keepAlive: true, permission: ['dashboard'] },
		},
	],
};

export default exampleModle;
