<!--
 * @Description: iframe共用组件
 * @Autor: xiukun@herry
 * @Date: 2021-01-29 15:40:04
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-01-29 15:52:06
-->
<script>
import { TOKEN_NAME } from '@/config/index';
export default {
    name: 'iframe-layout-jsx',
    render() {
        return (
            <div class="link-home" ref="iframeContainer">
                <iframe
                    ref="iframe"
                    src={this.iframeSrc}
                    width="100%"
                    scrolling="auto"
                    frameborder="0"
                ></iframe>
            </div>
        );
    },
    created() {
        console.log(this.$ls.get(TOKEN_NAME));
        let outlink = this.$route.meta.link || '';
        let isTrue = this.isHttp(this.$route.meta.link);
        if (isTrue) {
            this.iframeSrc = outlink;
            if (outlink.indexOf('token=') > -1) {
                this.iframeSrc = outlink + this.$ls.get(TOKEN_NAME);
            } else {
                this.iframeSrc = outlink;
            }
        }
    },
    mounted() {
        this.$refs.iframe.height = this.$refs.iframeContainer.offsetHeight - 5;
    },
    methods: {
        isHttp(path) {
            return /^(https?:|http?:)/.test(path);
        },
    },
};
</script>
<style lang="less" scoped>
.link-home {
    /* 54= navbar  54  */
    min-height: calc(100vh - 54px - 42px - 2px);
    width: 100%;
    position: relative;
    // -webkit-overflow-scrolling:touch;overflow:auto;
    iframe {
        &::-webkit-scrollbar {
            // display: none;
            box-sizing: border-box;
            width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
            height: 1px;
        }
        &::-webkit-scrollbar-thumb {
            /*滚动条里面小方块*/
            border-radius: 10px;
            // background-color: @primary-color;
            background: rgba(156, 156, 156, 0.5);
        }
        &::-webkit-scrollbar-track {
            /*滚动条里面轨道*/
            border-radius: 10px;
            background: #fff;
            margin: 5px 0;
        }
    }
}
</style>