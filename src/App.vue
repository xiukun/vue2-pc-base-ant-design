<!--
 * @Description: 
 * @Autor: xiukun@herry
 * @Date: 2021-01-12 18:17:00
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-01-18 18:31:59
-->
<template>
    <a-config-provider :locale="locale">
        <div id="app">
            <router-view />
        </div>
    </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import { AppDeviceEnquire } from '@/utils/mixin';

export default {
    mixins: [AppDeviceEnquire],
    data() {
        return {
            locale: zhCN,
        };
    },
};
</script>
