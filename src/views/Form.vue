<!-- 试验（忽略此vue文件即可） -->
<template>
    <div>
        <el-form ref="form" :model="sizeForm" label-width="80px" size="small">
            <el-form-item label="高亮">
                
                    <el-select v-model="sizeForm.region" placeholder="请选择活动区域">
                        <el-option label="纯文本" value="pure_text"></el-option>
                        <el-option label="C/C++" value="c__text"></el-option>
                        <el-option label="Java" value="java_text"></el-option>
                        <el-option label="Python" value="py_text"></el-option>
                        <el-option label="Bash" value="bash_text"></el-option>
                        <el-option label="Markdown" value="md_text"></el-option>
                        <el-option label="JSON" value="json_text"></el-option>
                        <el-option label="Go" value="go_text"></el-option>
                    </el-select>
                
            </el-form-item>
            
            <el-form-item label="密码">
                <el-input v-model="sizeForm.name"></el-input>
            </el-form-item>
            <el-form-item label=""></el-form-item>
                <el-input type="textarea" ></el-input>
            </el-form-item>
            
            <el-row>
            <el-form-item size="large">
                <el-button type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>

            <el-form-item size="large">
                <el-switch v-model="switch_value" active-text="阅后即焚"></el-switch>
            </el-form-item>
            </el-row>

        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sizeForm: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
            }
        };
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>

<style>

</style>