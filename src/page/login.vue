<template>
    <div class="login">
        <div class="login-header">
            <a href="#"></a>
        </div>
        <div class="body">
            <div class="promotion-banner">
                <img
                    src="https://mss.sankuai.com/static-prod01/com.sankuai.fe.www.sso/page/static/banner/www.jpg"
                />
            </div>
            <div class="login-section">
                <div class="validate-info"
                    :style="{visibility: !info ? 'hidden' : 'visible'}">
                    {{info}}
                </div>
                <p class="login-type">账号登录<a href="">手机动态码登录</a></p>
                <div class="account">
                    <el-input prefix-icon="el-icon-arrow-right"
                    v-model="userName" placeholder="用户名"></el-input>
                </div>
                <div class="pas">
                    <el-input prefix-icon="el-icon-unlock"
                    placeholder="请输入密码" v-model="password" show-password></el-input>
                </div>
                <div class="cf">
                    <a href="">忘记密码?</a>
                </div>
                <div class="su-btn">
                    <el-button @click="success">登录</el-button>
                </div>
                <div class="signup-guide">
                    还没有账号？
                    <router-link :to="{name: 'Register'}">免费注册</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api/index';

export default {
  data() {
    return {
      userName: '',
      password: '',
      info: '',
    };
  },
  methods: {
    success() {
      if (!this.userName) {
        this.info = '请输入账号';
        return;
      }
      if (!this.password) {
        this.info = '请输入密码';
      }
      api.getLogin({
        userName: this.userName,
        password: this.password,
      }).then((rep) => {
        if (typeof rep === 'string') {
          this.$store.dispatch('setUser', rep);
          this.$router.push({ name: 'Index' });
        } else {
          alert(rep.data.msg);
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/css/method.scss";
body,
html {
    background-color: #fff;
}
.login {
    .login-header {
        position: relative;
        width: 980px;
        height: auto;
        margin: 40px auto 30px;
        a {
            background: url(https://mss.sankuai.com/static-prod01/com.sankuai.fe.www.sso/assets/logo.6a89007.png)
                no-repeat;
            background-position: 0 !important;
            background-size: contain !important;
            width: 130px;
            height: 47px;
            display: inline-block;
        }
    }
    .body {
        margin: 0 auto 70px;
        width: 980px;
        @include clearfix;
        .promotion-banner {
            float: left;
            height: 370px;
            margin: 0 115px 0 0;
            width: 480px;
        }
        .login-section {
            float: left;
            width: 270px;
            .validate-info {
                min-height: 18px;
                margin-bottom: 10px;
                padding: 10px;
                border: 1px solid #f5d8a7;
                border-radius: 2px;
                background: #fff6db;
                font-size: 12px;
                margin: 10px auto;
                visibility: hidden;
            }
            .login-type {
                font-weight: 400;
                color: #666;
                height: 20px;
                a {
                    position: relative;
                    padding-right: 16px;
                    color: #666;
                    float: right;
                    font-size: 12px;
                    line-height: 20px;
                }
            }
            .account{
                margin: 8px 0;
            }
            .pas{
                padding: 8px 0;
            }
            .cf{
                font-size: 12px;
                padding-bottom: 8px;
                @include clearfix;
                a{
                    color: #FE8C00;
                    float: right;
                }
            }
            .su-btn{
                padding: 8px 0;
                button{
                    color: #222;
    background-image: linear-gradient(135deg,#FFD000 0,#FFBD00 100%);
    border-width: 0;
    box-shadow: 0 2px 1px rgb(191 105 0 / 15%);
    background-size: 100%;
    width: 100%;
        font-size: 14px;
    font-weight: 700;
                }
            }
            .signup-guide{
                font-size: 14px;
                color: #666;
                a{
                    color: #FE8C00;
                }
            }
            .el-input{
                input {
                    border-color: #aaa;
                    border-radius: 0;
                    &:focus {
                        border-color: #FFC300;
                    }
                }
            }
        }
    }
}
</style>
