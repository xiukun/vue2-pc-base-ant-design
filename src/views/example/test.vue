<!--
 * @Description: 
 * @Autor: xiukun@herry
 * @Date: 2021-01-19 14:53:05
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-01-20 16:56:58
-->
<template>
    <div class="test">
        <div>富文本测试</div>
        <tinymce class="tiny" v-model="content1" :height="300" />
        <tinymce class="tiny" v-model="content2" :height="300" />
    </div>
</template>

<script>
import Tinymce from '@/components/Tinymce';

export default {
    name: 'exampleTest',
    data() {
        return {
            content1: '',
            content2: '',
        };
    },
    components: { Tinymce },
    watch: {},
    methods: {},
};
</script>

<style scoped lang="less">
.test {
    h1 {
        .sc(24px,#333);
    }
    .tiny {
        height: 500px;
    }
}
</style>
