<template>
  <div class="header-entry">
    <span class="current-city">
        <i class="el-icon-location"></i>
        {{this.$store.state.city}}
    </span>
    <router-link class="change-city" :to="{name: 'Changecity'}">切换城市</router-link>
    [
    <router-link :to="{path: '/'}">香港</router-link>
    <router-link :to="{path: '/'}">谢岗</router-link>
    <router-link :to="{path: '/'}">镇惠阳</router-link>
    ]
    <div class="user-entry">
        <template v-if="!$store.state.userName">
          <router-link class="login" :to="{name: 'Login'}">立即登录</router-link>
          <router-link class="register" :to="{name: 'Register'}">注册</router-link>
        </template>
        <template v-else>
          <span class="login-name" >{{$store.state.userName}}</span>
          <span class="quit" @click="quit">退出</span>
        </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: '',
    };
  },
  async created() {
    await this.$jsonp('https://apis.map.qq.com/ws/location/v1/ip', {
      key: 'CBRBZ-XN7K2-WK5UJ-CZE7N-WELSZ-V3FWF',
      output: 'jsonp',
    }).then((rep) => {
      this.$store.dispatch('setLocaTion', rep.result.location);
      this.city = rep.result.ad_info.city.replace('市', '');
    });
    this.$store.dispatch('setCity', JSON.parse(localStorage.getItem('city')) || this.city);
  },
  methods: {
    quit() {
      this.$store.dispatch('setUser', '');
      if (this.$router.name !== 'Index') {
        this.$router.push({ name: 'Index' });
      }
    },
  },
};
</script>

<style>

</style>
