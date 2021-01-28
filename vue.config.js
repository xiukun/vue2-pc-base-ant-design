/*
 * @Description:
 * @Autor: xiukun@herry
 * @Date: 2021-01-12 18:31:31
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-01-25 15:29:26
 */
const path = require('path');
const isProd = process.env.NODE_ENV === 'production';
//按需加载lodash
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	devServer: {
		port: 9010,
		// 如果您想启用代理，请删除 mockjs /src/main.jsL11
		// proxy: {
		//   '/api': {
		//     target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro',
		//     ws: false,
		//     changeOrigin: true
		//   }
		// }
	},
	configureWebpack: {
		resolve: {
			alias: {
				// 别名
				'@': resolve('src'),
				'@api': resolve('src/api'),
				'@com': resolve('src/components'),
				'@core': resolve('src/core'),
				'@store': resolve('src/store'),
				'@views': resolve('src/views'),
			},
		},
		entry: {
			app: ['babel-polyfill', resolve('src/main.js')],
		},
	},
	chainWebpack: (config) => {
		let iconDir = resolve('src/icons');
		let iconOtherDir = resolve('src/icons/other');
		config.module.rules.delete('svg'); // 重点:删除默认配置中处理svg,
		config.module
			.rule('svg-sprite-loader')
			.test(/\.svg$/)
			.include.add(iconDir) // 处理svg目录
			.end()
			.use('svg-sprite-loader')
			.loader('svg-sprite-loader')
			.options({
				symbolId: 'icon-[name]',
			});

		//按需加载lodash
		if (process.env.NODE_ENV === 'production') {
			config
				.plugin('loadshReplace')
				.use(new LodashModuleReplacementPlugin());
		}
	},
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'less',
			// 注入全局样式
			patterns: [
				resolve('src/assets/styles/utils.less'),
				resolve('src/assets/styles/index.less'),
			],
		},
	},
	css: {
		loaderOptions: {
			less: {
				modifyVars: {
					//在此处设置主题色，也可以设置直角、边框色、字体大小等
					'primary-color': '#00caab',
					'link-color': '#00caab',
					'border-radius-base': '2px',
					// 'input-height-base': '24',
					// 'btn-height-base': '32px',
				},
				javascriptEnabled: true,
			},
		},
	},
};
