/*
 * @Description:
 * @Autor: xiukun@herry
 * @Date: 2021-01-12 18:17:00
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-01-12 18:29:46
 */
module.exports = {
	presets: ['@vue/cli-plugin-babel/preset'],
	plugins: [
		[
			'import',
			{
				libraryName: 'ant-design-vue',
				libraryDirectory: 'es',
				style: true,
			},
		],
		'lodash',
	],
};
