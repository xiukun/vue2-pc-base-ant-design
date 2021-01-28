<template>
    <transition name="showHeader">
        <div v-if="visible" class="header-animat" :class="multiTab ? 'multi-tab' : ''">
            <a-layout-header v-if="visible" :class="[fixedHeader && 'ant-header-fixedHeader', sidebarOpened ? 'ant-header-side-opened' : 'ant-header-side-closed']" :style="{ padding: '0',height:'54px' }">
                <div v-if="mode === 'sidemenu'" class="header">
                    <header class="header-flex">
                        <div style="flex:1;">
                            <a-icon v-if="device === 'mobile'" class="trigger" :type="collapsed ? 'menu-fold' : 'menu-unfold'" @click="toggle" />
                            <a-icon v-else class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="toggle" />
                        </div>

                        <header-search />
                        <user-menu></user-menu>
                    </header>
                    <multi-tab v-if="multiTab"></multi-tab>
                </div>
                <div v-else :class="['top-nav-header-index', theme]">
                    <div class="header-index-wide">
                        <div class="header-index-left">
                            <logo class="top-nav-header" :show-title="device !== 'mobile'" />
                            <s-menu v-if="device !== 'mobile'" mode="horizontal" :menu="menus" :theme="theme" />
                            <a-icon v-else class="trigger" :type="collapsed ? 'menu-fold' : 'menu-unfold'" @click="toggle" />
                        </div>
                        <user-menu class="header-index-right"></user-menu>
                        <multi-tab v-if="multiTab"></multi-tab>
                    </div>
                </div>
            </a-layout-header>
        </div>
    </transition>
</template>

<script>
import UserMenu from '../tools/UserMenu';
import HeaderSearch from '../tools/HeaderSearch';
import SMenu from '../Menu/';
import Logo from '../tools/Logo';
import { mixin } from '@/utils/mixin';

export default {
    name: 'GlobalHeader',
    components: {
        UserMenu,
        HeaderSearch,
        SMenu,
        Logo,
    },
    mixins: [mixin],
    props: {
        mode: {
            type: String,
            // sidemenu, topmenu
            default: 'sidemenu',
        },
        menus: {
            type: Array,
            required: true,
        },
        theme: {
            type: String,
            required: false,
            default: 'dark',
        },
        collapsed: {
            type: Boolean,
            required: false,
            default: false,
        },
        device: {
            type: String,
            required: false,
            default: 'desktop',
        },
    },
    data() {
        return {
            visible: true,
            oldScrollTop: 0,
        };
    },
    mounted() {
        document.addEventListener('scroll', this.handleScroll, {
            passive: true,
        });
    },
    methods: {
        handleScroll() {
            if (!this.autoHideHeader) {
                return;
            }

            const scrollTop =
                document.body.scrollTop + document.documentElement.scrollTop;
            if (!this.ticking) {
                this.ticking = true;
                requestAnimationFrame(() => {
                    if (this.oldScrollTop > scrollTop) {
                        this.visible = true;
                    } else if (scrollTop > 300 && this.visible) {
                        this.visible = false;
                    } else if (scrollTop < 300 && !this.visible) {
                        this.visible = true;
                    }
                    this.oldScrollTop = scrollTop;
                    this.ticking = false;
                });
            }
        },
        toggle() {
            this.$emit('toggle');
        },
    },
    beforeDestroy() {
        document.body.removeEventListener('scroll', this.handleScroll, true);
    },
};
</script>

<style lang="less">
// @import '../../style/index';

.header-animat {
    position: relative;
    z-index: @ant-global-header-zindex;
}
.showHeader-enter-active {
    transition: all 0.25s ease;
}
.showHeader-leave-active {
    transition: all 0.5s ease;
}
.showHeader-enter,
.showHeader-leave-to {
    opacity: 0;
}
.header-animat {
    height: 54px;
    &.multi-tab {
        clear: both;
        height: 114px;
        background-color: #fff;
    }
}
.header-animat /deep/ {
    .ant-layout-header {
        height: 54px !important;
        line-height: 54px;
    }
    .header {
        height: auto !important;
        padding: 0 !important;
        box-shadow: none !important;
        header {
            display: flex;
            padding-right: 12px;
            height: 54px;
            box-shadow: 0 1px 4px #ddd;
            .clearfix();
        }
    }
    .ant-pro-multi-tab {
        margin: 1px 0 0 !important;
    }
}
</style>
