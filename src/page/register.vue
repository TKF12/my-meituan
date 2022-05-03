<template>
    <div class="register">
        <div class="register-header">
            <div class="wrapper">
                <a href=""></a>
                <div class="login-block">
                    <span class="tip">已有美团账号？</span>
                    <router-link class="login-btn" :to="{ name: 'Login' }"
                        >登录</router-link
                    >
                </div>
            </div>
        </div>
        <div class="content">
            <el-form
                :model="form"
                status-icon
                :rules="rules"
                ref="form"
                label-width="100px"
                class="demo-ruleForm"
            >
                <el-form-item label="用户名" prop="userName">
                    <el-input
                        v-model="form.userName"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input
                        type="password"
                        v-model="form.password"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="rePassword">
                    <el-input
                        type="password"
                        v-model="form.rePassword"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('form')"
                        >注册</el-button
                    >
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import api from '@/api/index';

export default {
  data() {
    const validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      form: {
        userName: '',
        password: '',
        rePassword: '',
      },
      rules: {
        userName: [{ validator: validateName, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }],
        rePassword: [{ validator: validatePass2, trigger: 'blur' }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.getRegister(this.form).then((rep) => {
            if (typeof rep === 'string') {
              this.$router.push({ name: 'Login' });
            } else {
              alert(rep.data.msg);
            }
          });
          return true;
        }
        console.log('error submit!!');
        return false;
      });
    },
  },
};
</script>

<style lang="scss">
.register {
    .register-header {
        border-bottom: 2px solid #d8d8d8;
        .wrapper {
            margin: 0 auto;
            padding: 10px 0;
            width: 980px;
            > a {
                display: inline-block;
                width: 128px;
                background: url(https://mss.sankuai.com/static-prod01/com.sankuai.fe.www.sso/assets/logo.6a89007.png)
                    no-repeat;
                background-size: contain;
                height: 47px;
            }
            .login-block {
                font-size: 14px;
                float: right;
                line-height: 36px;
                .tip {
                    margin-right: 10px;
                    color: #666;
                    vertical-align: sub;
                }
                .login-btn {
                    font-weight: normal;
                    box-shadow: 0px 2px 1px rgb(191 105 0 / 15%);
                    padding: 3px 10px;
                    font-size: 12px;
                    color: #222222;
                    background-image: linear-gradient(
                        135deg,
                        #ffd000 0%,
                        #ffbd00 100%
                    );
                }
            }
        }
    }
    .content {
        margin: 0 auto 30px;
        padding-top: 30px;
        width: 980px;
        min-height: 300px;
        input {
            width: 273px;
            height: 28px;
            padding: 5px;
            border: 1px solid #aaa;
            line-height: 28px;
            box-sizing: content-box;
            border-radius: 0;
        }
        .el-input__suffix{
            right: inherit;
        }
    }
}
</style>
