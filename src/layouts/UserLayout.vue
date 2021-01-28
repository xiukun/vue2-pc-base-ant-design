<!--
 * @Description: 
 * @Autor: xiukun@herry
 * @Date: 2021-01-19 14:52:32
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-01-20 09:15:49
-->
<template>
    <div id="userLayout" :class="['user-layout-wrapper', device]">
        <div class="container">
            <div class="center">
                <div class="top">
                    <h1 class="title">商户系统</h1>
                    <p class="desc">Ant Design + Vue 后台管理系统</p>
                </div>
                <route-layout />
            </div>
        </div>
    </div>
</template>

<script>
import RouteLayout from './RouteLayout';
import { mixinDevice } from '@/utils/mixin';

export default {
    name: 'UserLayout',
    components: { RouteLayout },
    mixins: [mixinDevice],
    data() {
        return {};
    },
    mounted() {
        document.body.classList.add('userLayout');
    },
    beforeDestroy() {
        document.body.classList.remove('userLayout');
    },
};
</script>

<style lang="less">
#userLayout.user-layout-wrapper {
    height: 100vh;
    &.mobile {
        .container {
            .center {
                height: inherit;
                display: flex;
                flex: 1;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .main {
                max-width: 360px;
                width: 90%;
            }
        }
    }
    .container {
        width: 100%;
        height: 100vh;
        background: #f0f2f5 url(~@/assets/images/background.png) no-repeat 50%;
        background-size: 100% 100%;
        padding: 0;
        position: relative;
        .center {
            height: inherit;
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .main {
            min-width: 260px;
            width: 368px !important;
            margin: 0 auto;
        }
        a {
            text-decoration: none;
        }
        .top {
            text-align: center;
            .title {
                height: 44px;
                line-height: 44px;
            }
            .desc {
                font-size: 14px;
                color: rgba(0, 0, 0, 0.45);
                margin-top: 12px;
                margin-bottom: 40px;
            }
        }
    }
}
</style>
