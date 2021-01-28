<!--
 * @Description: 项目下的iocns/svg的图标
 * @Autor: xiukun@herry
 * @Date: 2021-01-08 14:04:27
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-01-08 14:08:30
-->
<!--
    icon-class：对应的是iconfont下载的svg文件名
    class-name：对应的是自定义的css类名
-->
<template>
    <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" v-on="$listeners" />
    <svg v-else :class="svgClass" aria-hidden="true" v-on="$listeners">
        <use :xlink:href="iconName" />
    </svg>
</template>

<script>
export default {
    name: 'SvgIcon',
    props: {
        iconClass: {
            type: String,
            required: true,
        },
        className: {
            type: String,
            default: '',
        },
    },
    computed: {
        isExternal() {
            return this.IsExternal(this.iconClass);
        },
        iconName() {
            return `#icon-${this.iconClass}`;
        },
        svgClass() {
            if (this.className) {
                return 'svg-icon ' + this.className;
            } else {
                return 'svg-icon';
            }
        },
    },
    methods: {
        IsExternal: function (path) {
            return /^(https?:|mailto:|tel:)/.test(path);
        },
    },
};
</script>

<style scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

.svg-external-icon {
    background-color: currentColor;
    mask-size: cover !important;
    display: inline-block;
}
</style>
