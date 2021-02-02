/*
 * @Description:
 * @Autor: xiukun@herry
 * @Date: 2021-01-19 14:52:31
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-02-01 15:22:18
 */
/* eslint-disable */
/**
 * 该文件是为了按需加载，剔除掉了一些不需要的框架组件。
 * 减少了编译支持库包大小
 *
 * 当需要更多组件依赖时，在该文件加入即可
 */
import Vue from 'vue';
import {
	ConfigProvider,
	Dropdown,
	List,
	Avatar,
	Layout,
	Input,
	Button,
	Switch,
	Radio,
	Checkbox,
	Select,
	Card,
	Form,
	FormModel,
	Row,
	Col,
	Modal,
	Table,
	Tabs,
	Icon,
	Popover,
	Menu,
	Drawer,
	Tooltip,
	Alert,
	Divider,
	DatePicker,
	TimePicker,
	message,
	notification,
} from 'ant-design-vue';

Vue.use(ConfigProvider);
Vue.use(Dropdown);
Vue.use(List);
Vue.use(Avatar);
Vue.use(Layout);
Vue.use(Input);
Vue.use(Button);
Vue.use(Switch);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(Select);
Vue.use(Card);
Vue.use(Form);
Vue.use(FormModel);
Vue.use(Row);
Vue.use(Col);
Vue.use(Modal);
Vue.use(Table);
Vue.use(Tabs);
Vue.use(Icon);
Vue.use(Popover);
Vue.use(Menu);
Vue.use(Drawer);
Vue.use(Tooltip);
Vue.use(Alert);
Vue.use(Divider);
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(notification);

Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$message = message;
Vue.prototype.$notification = notification;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
