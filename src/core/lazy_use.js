/*
 * @Description:
 * @Autor: xiukun@herry
 * @Date: 2021-01-19 14:52:31
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-01-19 16:42:40
 */
import Vue from 'vue';
import VueStorage from 'vue-ls';
import { storageOptions } from '@/config/index';
import '@/core/lazy_lib/components_use'; // antDesign 按需引入

import MultiTab from '@/components/MultiTab'; //顶部tab切换组件
import PageLoading from '@/components/PageLoading';
import PermissionHelper from '@/utils/helper/permission';

// 按钮级别权限控制指令
import './directives/action';

Vue.use(MultiTab);
Vue.use(PageLoading);
Vue.use(VueStorage, storageOptions);
Vue.use(PermissionHelper);
