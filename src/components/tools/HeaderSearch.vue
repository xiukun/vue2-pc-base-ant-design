<!--
 * @Description: 
 * @Autor: xiukun@herry
 * @Date: 2021-01-25 09:30:08
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-01-25 16:55:55
-->

<template>
    <div :class="{'show':show}" class="header-search">
        <a-icon type="search" class="search-icon" @click.stop="click" />
        <a-select placeholder="菜单搜索" :value="search" show-search :default-active-first-option="false" :show-arrow="false" :filter-option="false" :not-found-content="null" class="header-search-select" @search="querySearch" @change="change">
            <a-select-option v-for="(option,index) in options" :key="index" :value="option.path">
                {{option.title.join(' > ')}}
            </a-select-option>
        </a-select>
    </div>
</template>

<script>
// fuse.js是轻量级的模糊搜索插件
import Fuse from 'fuse.js';
import path from 'path';
import _ from 'lodash';
import { openPermission } from '@/config/index';
import { syncRouterMap } from '@/router/router.config';
export default {
    name: 'HeaderSearch',
    data() {
        this.querySearch = _.debounce(this.querySearch, 800); //防抖
        return {
            search: undefined,
            options: [],
            searchPool: [],
            show: true,
            fuse: undefined,
        };
    },
    computed: {
        routes() {
            const routeArr = openPermission
                ? this.$store.getters.addRouters
                : syncRouterMap;
            return routeArr;
        },
    },
    watch: {
        routes() {
            this.searchPool = this.generateRoutes(this.routes);
        },
        searchPool(list) {
            this.initFuse(list);
        },
        show(value) {
            console.log(value);
            // if (value) {
            //     document.body.addEventListener('click', this.close);
            // } else {
            //     document.body.removeEventListener('click', this.close);
            // }
        },
    },
    mounted() {
        this.searchPool = this.generateRoutes(this.routes);
    },
    methods: {
        click() {
            this.show = true;
        },
        close() {
            this.options = [];
            this.show = false;
        },
        change(path) {
            if (this.ishttp(path)) {
                // http(s):// 路径新窗口打开
                window.open(path, '_blank');
            } else {
                this.$router.push(path);
            }
            this.search = undefined;
            this.options = [];
            this.$nextTick(() => {
                this.show = false;
            });
        },
        initFuse(list) {
            this.fuse = new Fuse(list, {
                shouldSort: true,
                threshold: 0.4,
                location: 0,
                distance: 100,
                maxPatternLength: 32,
                minMatchCharLength: 1,
                keys: [
                    {
                        name: 'title',
                        weight: 0.7,
                    },
                    {
                        name: 'path',
                        weight: 0.3,
                    },
                ],
            });
        },
        // 生成一维扁平化路由数组，方便使用fuse进行筛选
        generateRoutes(routes, basePath = '/', prefixTitle = []) {
            let res = [];
            /**
             * 遍历所有路由，并进行扁平化处理
             */
            for (const router of routes) {
                // 如果为隐藏的菜单项，跳过循环
                if (router.hidden) {
                    continue;
                }
                // 为每个路由创建一个简单的对象
                const data = {
                    path: !this.ishttp(router.path)
                        ? path.resolve(basePath, router.path)
                        : router.path,
                    title: [...prefixTitle],
                };

                if (router.meta && router.meta.title) {
                    // 如果存在菜单标题，则添加菜单标题
                    data.title = [...data.title, router.meta.title];

                    if (!router.children) {
                        // 无children子项，则添加菜单项
                        res.push(data);
                    }
                }

                // 如果含有子菜单，则继续递归遍历
                if (router.children) {
                    const tempRoutes = this.generateRoutes(
                        router.children,
                        data.path,
                        data.title
                    );
                    if (tempRoutes.length >= 1) {
                        // 如果子菜单数量不为0，则添加所有子菜单项
                        // res = [...res, ...tempRoutes];
                        res.push(...tempRoutes);
                    }
                }
            }
            return res;
        },
        querySearch(query) {
            console.log(query);
            if (query !== '') {
                this.options = this.fuse.search(query);
            } else {
                this.options = [];
            }
            console.log(this.options);
        },
        ishttp(url) {
            return (
                url.indexOf('http://') !== -1 || url.indexOf('https://') !== -1
            );
        },
    },
};
</script>

<style lang="less" scoped>
.header-search {
    // font-size: 0 !important;

    .search-icon {
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
        vertical-align: middle;
    }

    .header-search-select {
        // font-size: 18px;
        transition: width 0.2s;
        width: 0;
        overflow: hidden;
        background: transparent;
        border-radius: 0;
        display: inline-block;
        vertical-align: middle;
    }

    &.show {
        .header-search-select {
            width: 210px;
            margin-left: 10px;
        }
    }
}
</style>
