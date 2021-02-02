<!--
 * @Description: 
 * @Autor: xiukun@herry
 * @Date: 2021-02-01 10:27:50
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-02-02 16:55:48
-->
<template>
    <div class="form-model-test">
        <a-form-model ref="formRef" :model="form" :rules="rules" labelAlign="right" layout="horizontal" v-bind="formItemLayout">
            <slot name="header" />
            <a-row :gutter="20">
                <template v-for="(key,index) in attrs">
                    <a-col :key="index" :md="8" v-show="index<count">
                        <!-- input组件 input type 不包含textarea  -->
                        <a-form-model-item :selfUpdate="true" v-if="isShow(key,'input')" has-feedback :label="key.label" :prop="key.prop">
                            <a-input :type="key.type ? key.type : 'text'" autocomplete="off" :placeholder="key.placeholder?key.placeholder:'请输入'" :defaultValue="key.defaultValue" :disabled="key.disabled" :max-length="key.maxLength" allowClear @input="e => handleInput(e,key)">
                                <!-- <a-icon v-if="key.prefix" slot="prefix" :type="user" /> -->
                            </a-input>
                        </a-form-model-item>
                        <!-- select组件 -->
                        <a-form-model-item v-if="isShow(key,'select')" has-feedback :label="key.label" :prop="key.prop">
                            <a-select v-model="form[key.prop]" mode="multiple" :placeholder="`${key.label}请选择`" :showSearch="true" :showArrow="true" allowClear @change="val => handleSelectChange(val, key, form)">
                                <a-select-option v-for="(option, i) in key.options" :key="i" :value="option[key.keyProp ? key.keyProp.value : 'value']">
                                    <template v-if="key.customOption">
                                        <span style="float: left">{{ key.label }}</span>
                                        <span style="float: right; color: #8492a6; font-size: 13px">{{ key.value }}</span>
                                    </template>
                                    <template v-else>
                                        {{option[key.keyProp ? key.keyProp.label : 'label']}}
                                    </template>
                                </a-select-option>
                            </a-select>
                        </a-form-model-item>

                        <!-- cascader级联 -->
                        <a-form-model-item v-if="isShow(key,'cascader')" has-feedback :label="key.label" :prop="key.prop">
                            <a-cascader v-model="form[key.prop]" :options="key.options" mode="multiple" :change-on-select="true" :placeholder="`${key.label}请选择`" :fieldNames="key.fieldNames" @change="(val)=>handleCascaderChange(val,key,form)" />
                        </a-form-model-item>

                        <!-- DatePicker（a-range-picker）日期 -->
                        <a-form-model-item v-if="isShow(key,'datepicker')" has-feedback :prop="key.prop" :wrapperCol="{ span: 24 }">
                            <a-range-picker v-model="form[key.prop]" :show-time="{ format: 'HH:mm:ss',defaultValue: [$moment('00:00:00', 'HH:mm:ss'), $moment('11:59:59', 'HH:mm:ss')], }" format="YYYY-MM-DD HH:mm:ss" :value-format="key.valueFormat || 'YYYY-MM-DD HH:mm:ss'" :placeholder="[`${key.placeholder}开始时间`, `${key.placeholder}结束时间`]" @change="val=>handleDateChange(val,key)" />
                        </a-form-model-item>
                    </a-col>
                </template>
                <a-col>
                    <a-form-model-item :wrapperCol="{ span: 24 }" style="float:right;">
                        <a-button style="margin-left: 10px" type="primary" @click="submitForm('formRef')">
                            Submit1
                        </a-button>
                        <a-button style="margin-left: 10px" @click="resetForm('formRef')">
                            Reset2
                        </a-button>

                        <a-button style="margin-left: 10px;" shape="circle" icon="swap" @click="()=>{toggleBtn()}" />
                    </a-form-model-item>
                </a-col>
            </a-row>

        </a-form-model>
    </div>
</template>

<script>
import { Cascader } from 'ant-design-vue';
export default {
    name: 'form-search',
    components: {
        ACascader: Cascader,
    },
    data() {
        let validateAge = (rule, value, callback) => {
            console.log(value, typeof value);
            if (!value) {
                return callback(new Error('Please input the number'));
            } else {
                return callback();
            }
        };
        return {
            expand: true,
            formItemLayout: {
                labelCol: { span: 6 },
                wrapperCol: { span: 18 },
                xs: 20,
                sm: 16,
                md: 12,
                lg: 8,
                xxl: 4,
            },

            searchConfig: {
                labelWidth: '120px',
                props: [
                    {
                        tag: 'input',
                        prop: 'p1',
                        type: 'number',
                        placeholder: '订单编号',
                        label: '订单编号:',
                    },
                    {
                        tag: 'input',
                        prop: 'p2',
                        placeholder: '下单人手机号',
                        label: '手机号:',
                    },
                    {
                        tag: 'input',
                        prop: 'p3',
                        placeholder: '收货人姓名',
                        label: '收货人姓名:',
                    },
                    {
                        tag: 'input',
                        prop: 'p4',
                        placeholder: '收货人手机号',
                        label: '收货人手机号:',
                    },
                    {
                        tag: 'cascader',
                        prop: 'p5',
                        placeholder: '收货地址',
                        label: '收货地址:',
                        change: (val, item, form) => {
                            console.log(val, item, form);
                        },
                        fieldNames: {
                            label: 'label',
                            value: 'value2',
                            children: 'children',
                        },
                        options: [
                            {
                                value2: 'zhejiang',
                                label: 'Zhejiang',
                                children: [
                                    {
                                        value2: 'hangzhou',
                                        label: 'Hangzhou',
                                        children: [
                                            {
                                                value2: 'xihu',
                                                label: 'West Lake',
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                value2: 'jiangsu',
                                label: 'Jiangsu',
                                children: [
                                    {
                                        value2: 'nanjing',
                                        label: 'Nanjing',
                                        children: [
                                            {
                                                value2: 'zhonghuamen',
                                                label: 'Zhong Hua Men',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        tag: 'select',
                        prop: 'p6',
                        placeholder: '订单状态',
                        options: [
                            { value: -1, label: '全部' },
                            { value: 0, label: '待支付' },
                            { value: 8, label: '待配送' },
                            { value: 1, label: '配送中' },
                            { value: 2, label: '已完成' },
                            { value: 3, label: '已取消' },
                            { value: 4, label: '已退款' },
                            { value: 5, label: '停订' },
                            { value: 6, label: '售后中' },
                            { value: 7, label: '作废' },
                        ],
                        label: '订单状态:',
                    },

                    {
                        tag: 'select',
                        prop: 'p7',
                        placeholder: '奶站',
                        options: [
                            { value: 0, label: '鲜活go' },
                            { value: 2, label: '电商' },
                            { value: 3, label: '征订' },
                        ],
                        label: '奶站:',
                        filterable: true,
                        change: (val, item, form) => {
                            console.log(val, item, form);
                        },
                    },
                    {
                        tag: 'select',
                        prop: 'p8',
                        placeholder: '选择订单来源',
                        options: undefined,
                        label: '订单来源:',
                    },
                    {
                        tag: 'datePicker',
                        prop: 'p9',
                        type: 'datetimerange',
                        placeholder: '下单日期',
                        label: '下单日期:',
                    },
                ],
                optBtns: [],
            },
            selectData: undefined,

            filterForm: {
                p1: 0,
                p2: '',
                p3: '',
                p4: '',
                p5: [],
                p6: undefined,
                p7: undefined,
                p8: undefined,
                p9: [],
            },
            rules: {
                p2: [
                    {
                        required: true,
                        message: '请输入..',
                        trigger: 'blur',
                    },
                ],
                p1: [{ validator: validateAge, trigger: 'blur,change' }],
            },
        };
    },
    computed: {
        count() {
            return this.expand ? 11 : 3;
        },
        attrs() {
            return this.searchConfig.props;
        },
        form() {
            return this.filterForm;
        },
    },
    mounted() {
        this.selectData = [
            { value: 0, label: '鲜活go' },
            { value: 2, label: '电商' },
            { value: 3, label: '征订' },
            { value: 4, label: '奶站' },
            { value: 5, label: '牛奶钱包' },
            { value: 6, label: '送奶工App' },
            { value: 70, label: '电话' },
            { value: 80, label: '机构' },
            { value: 100, label: '鲜生活' },
            { value: 110, label: '鲜小厨' },
            { value: 120, label: '小程序' },
            { value: 130, label: '淘宝' },
            { value: 140, label: '拼多多' },
            { value: 150, label: '天猫' },
            { value: 160, label: '京东' },
            { value: 170, label: '总部店铺' },
            { value: 180, label: '牛奶钱包' },
            { value: 190, label: '千丁' },
            { value: 200, label: '鑫划算' },
            { value: 210, label: '琥珀亲子' },
            { value: 220, label: '星life' },
            { value: 230, label: '龙湖享家' },
            { value: 240, label: '业点点' },
            { value: 250, label: '苏宁易购' },
            { value: 260, label: '万科' },
            { value: 270, label: '生活记' },
        ];
        //p8  select延迟赋值
        setTimeout(() => {
            for (let i = this.searchConfig.props.length - 1; i >= 0; i--) {
                if (this.searchConfig.props[i].prop === 'p8') {
                    this.searchConfig.props[i].options = this.selectData;
                    console.log(this.searchConfig.props);
                    return;
                }
                console.log(this.searchConfig.props[i].prop);
            }
        }, 2000);
    },
    methods: {
        toggleBtn() {
            this.expand = !this.expand;
        },
        submitForm(formName) {
            console.log(this.filterForm, formName);
            // this.$refs[formName].validate((valid) => {
            //     if (valid) {
            //         // alert('submit!');
            //         console.log(this.filterForm, 'submit');
            //     } else {
            //         console.log('error submit!!');
            //         return false;
            //     }
            // });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        //匹配
        isShow(item, tag) {
            return item.tag.toLowerCase() === tag;
        },
        //Input值绑定，解决渲染卡顿
        handleInput: function (e, item) {
            this.filterForm[item.prop] = e.target.value;
        },
        //select change
        handleSelectChange: function (value, item, form) {
            console.log(`Selected: ${value}`, item);
            if (item.change) {
                item.change(value, item, form);
            }
        },
        //cascader change
        handleCascaderChange: function (value, item, form) {
            console.log(`Cascader: ${value}`, item);
            if (item.change) {
                item.change(value, item, form);
            }
        },
        //datePicker change
        handleDateChange: function (value, item) {
            console.log(`date picker: ${value}`, item);
            if (item.change) {
                item.change(value, item);
            }
        },
    },
};
</script>

<style>
</style>
