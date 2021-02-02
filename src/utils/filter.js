/*
 * @Description:
 * @Autor: xiukun@herry
 * @Date: 2021-01-28 15:06:08
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-02-02 16:37:29
 */
import Vue from 'vue';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

Vue.prototype.$moment = moment; //全局注册moment

Vue.filter('NumberFormat', function(value) {
	if (!value) {
		return '0';
	}
	const intPartFormat = value
		.toString()
		.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); // 将整数部分逢三一断
	return intPartFormat;
});

Vue.filter('dayjs', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
	return moment(dataStr).format(pattern);
});

Vue.filter('moment', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
	return moment(dataStr).format(pattern);
});
