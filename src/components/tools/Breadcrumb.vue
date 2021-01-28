<!--
 * @Description: 
 * @Autor: xiukun@herry
 * @Date: 2021-01-19 14:52:32
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-01-25 17:34:44
-->
<template>
    <a-breadcrumb class="breadcrumb">
        <a-breadcrumb-item v-for="(item, index) in breadList" :key="item.name">
            <router-link v-if="item.name != name && index != 1" :to="{ path: item.path === '' ? '/' : item.path }">{{ item.meta.title }}</router-link>
            <span v-else>{{ item.meta.title }}</span>
        </a-breadcrumb-item>
    </a-breadcrumb>
</template>

<script>
import Vue from 'vue';
import { Breadcrumb } from 'ant-design-vue';
Vue.use(Breadcrumb);
export default {
    data() {
        return {
            name: '',
            breadList: [],
        };
    },
    created() {
        this.getBreadcrumb();
    },
    methods: {
        getBreadcrumb() {
            this.breadList = [];
            this.name = this.$route.name;
            this.$route.matched.forEach((item) => {
                // item.name !== 'index' && this.breadList.push(item)
                this.breadList.push(item);
            });
        },
    },
    watch: {
        $route() {
            this.getBreadcrumb();
        },
    },
};
</script>

<style scoped></style>
