<!--
 * @Description: 
 * @Autor: xiukun@herry
 * @Date: 2021-01-19 14:52:32
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-01-20 11:12:30
-->
<template>
    <div class="logo">
        <router-link :to="{ path: defaultRootRoutePath }">
            <svg-icon icon-class="logo" class-name="logo-img" />
            <h1 v-show="showTitle">{{ title }}</h1>
        </router-link>
    </div>
</template>

<script>
import { defaultRootRoutePath } from '@/router/router.config';
export default {
    name: 'Logo',
    data() {
        return {
            defaultRootRoutePath,
        };
    },
    props: {
        title: {
            type: String,
            default: 'Ant Design Pro',
            required: false,
        },
        showTitle: {
            type: Boolean,
            default: true,
            required: false,
        },
    },
};
</script>
<style lang="less" scoped>
.logo {
    .logo-img {
        height: 40px;
        width: 40px;
    }
}
</style>