<!-- Paster Homepage -->

<template>
    <div>
        <el-container>
            <!-- 最上部的导航栏和索引搜索 -->
            <el-header>
                <el-form :inline="true" :rules="rules" :model="PostInfo" class="demo-form-inline">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#353a3f" active-text-color="#ffffff">
                        <el-menu-item index="1"><a href="/" target="_self">Paster</a></el-menu-item>
                        <el-menu-item index="2" text-color="#ffffff">paster.byted.org/</el-menu-item>
                        <el-menu-item index="3"><el-input v-model="PostInfo.id" placeholder="索引"></el-input></el-menu-item>
                        <el-menu-item index="4"><el-button type="primary" @click="onSubmit">前往</el-button></el-menu-item>
                    </el-menu>
                </el-form>
            </el-header>

            <!-- 页面主体 -->
            <el-main>
                <el-form ref="form" :model="PostInfo" label-width="80px" size="medium">
                    <!-- 高亮 -->
                    <el-form-item label="高亮">
                        <el-select v-model="PostInfo.lang" placeholder="纯文本" >
                            <el-option label="纯文本" value="pure_text"></el-option>
                            <el-option label="C/C++" value="c_text"></el-option>
                            <el-option label="Java" value="java_text"></el-option>
                            <el-option label="Python" value="py_text"></el-option>
                            <el-option label="Bash" value="bash_text"></el-option>
                            <el-option label="Markdown" value="md_text"></el-option>
                            <el-option label="JSON" value="json_text"></el-option>
                            <el-option label="Go" value="go_text"></el-option>
                        </el-select>
                    
                    </el-form-item>
                
                    <!-- 密码 -->
                    <el-form-item label="密码">
                        <el-input v-model="PostInfo.password" placeholder="若无需设置请忽略"></el-input>
                    </el-form-item>
                    
                    <!-- 昵称 -->
                    <el-form-item label="昵称" prop="nickname">
                        <el-input v-model="PostInfo.nickname" placeholder="请输入昵称"></el-input>
                    </el-form-item>


                    <!-- 输入 -->
                    <el-form-item prop="content">
                        <el-input v-model="PostInfo.content" :rows="12" width:auto type="textarea" placeholder="写点什么进来吧"></el-input>
                    </el-form-item>            

                    <!-- 保存和阅后即焚按钮 -->
                    <el-form :inline="true" :model="PostInfo" class="demo-form-inline">
                        <el-form-item size="large">
                            <el-button type="primary" v-on:click="onSubmit('nick_content')">保存</el-button>
                        </el-form-item>

                        <el-form-item size="large" prop="is_disposable">
                            <el-switch v-model="PostInfo.is_disposable" active-text="阅后即焚"></el-switch>
                        </el-form-item>
                    </el-form>
                </el-form>
            </el-main>
        </el-container>

        <!-- TODO: 当昵称或内容为空时，跳出对话框 -->
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <span>请输入昵称和内容</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible=false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
            
            PostInfo: {
                content:'',
                password: '',
                nickname:'',
                lang: '纯文本',
                is_disposable: false,
                id: '',
                time:''
            },
            rules:{
                nickname:[
                    {required: true, message: '内容不能为空', trigger: 'blur'}
                ],
                content:[
                    {required: true, message: '昵称不能为空', trigger: 'blur'}
                ]
            },
            dialogVisible: false
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        onSubmit() {
            this.$refs[nick_content].validate((valid) => {
                if(valid){
                    this.$router.push("/");
                }else{
                    this.dialogVisible = true;
                    return false;
                }
            });
        }
    }
}
</script>

<style>
    .el-header, .el-footer {
        background-color: #ffffff;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
  
    .el-aside {
        background-color: #ffffff;
        color: #333;
        text-align: center;
        line-height: 200px;
    }
  
    .el-main {
        background-color: #ffffff;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
  
    body > .el-container {
        margin-bottom: 40px;
    }
  
    #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    }
</style>