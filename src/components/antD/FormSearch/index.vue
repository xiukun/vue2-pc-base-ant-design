<!--
 * @Description: 查询搜索组件
 * @Autor: xiukun@herry
 * @Date: 2021-02-01 14:53:27
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-02-01 15:05:53
-->
<template>
    <a-form-model ref="formRef" :model="ruleForm" :rules="rules" v-bind="layout">
        <a-form-model-item has-feedback label="Password" prop="pass">
            <a-input v-model="ruleForm.pass" type="password" autocomplete="off" />
        </a-form-model-item>
        <a-form-model-item has-feedback label="Confirm" prop="checkPass">
            <a-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
        </a-form-model-item>
        <a-form-model-item has-feedback label="Age" prop="age">
            <a-input v-model.number="ruleForm.age" />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="submitForm('formRef')">
                Submit
            </a-button>
            <a-button style="margin-left: 10px" @click="resetForm('formRef')">
                Reset
            </a-button>
        </a-form-model-item>
    </a-form-model>
</template>

<script>
export default {
    name: 'form-search',
    data() {
        let checkPending;
        let checkAge = (rule, value, callback) => {
            clearTimeout(checkPending);
            if (!value) {
                return callback(new Error('Please input the age'));
            }
            checkPending = setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error('Please input digits'));
                } else {
                    if (value < 18) {
                        callback(new Error('Age must be greater than 18'));
                    } else {
                        callback();
                    }
                }
            }, 1000);
        };
        let validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Please input the password'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        let validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Please input the password again'));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error("Two inputs don't match!"));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                pass: '',
                checkPass: '',
                age: '',
            },
            rules: {
                pass: [{ validator: validatePass, trigger: 'change' }],
                checkPass: [{ validator: validatePass2, trigger: 'change' }],
                age: [{ validator: checkAge, trigger: 'change' }],
            },
            layout: {
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
            },
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
    },
};
</script>

<style>
</style>
