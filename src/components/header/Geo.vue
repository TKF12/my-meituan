<template>
  <div class="header-entry">
    <span class="current-city">
        <i class="el-icon-location"></i>
        深圳
    </span>
    <router-link class="change-city" :to="{path: '/'}">切换城市</router-link>
    [
    <router-link :to="{path: '/'}">香港</router-link>
    <router-link :to="{path: '/'}">谢岗</router-link>
    <router-link :to="{path: '/'}">镇惠阳</router-link>
    ]
    <div class="user-entry">
        <router-link class="login" :to="{name: 'login'}">立即登录</router-link>
        <router-link class="register" :to="{name: 'register'}">注册</router-link>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>
