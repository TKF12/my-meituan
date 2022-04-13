<template>
  <el-container>
    <el-header class="com-header" height="">
        <Header />
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer height="">
      <Footer />
    </el-footer>
</el-container>
</template>

<script>
import Header from '@/components/header/index.vue';
import Footer from '@/components/footer/index.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/css/layout/default.scss';
</style>
