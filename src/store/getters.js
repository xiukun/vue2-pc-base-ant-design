/*
 * @Description:
 * @Autor: xiukun@herry
 * @Date: 2021-01-19 11:17:06
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-01-25 13:36:13
 */
const getters = {
	device: (state) => state.app.device,
	theme: (state) => state.app.theme,
	color: (state) => state.app.color,
	token: (state) => state.user.token,
	avatar: (state) => state.user.avatar,
	nickname: (state) => state.user.name,
	welcome: (state) => state.user.welcome,
	roles: (state) => state.user.roles,
	userInfo: (state) => state.user.info,
	addRouters: (state) => state.permission.addRouters,
	multiTab: (state) => state.app.multiTab,
	multiTabList: (state) => state.multiTab.tabList,
};

export default getters;
