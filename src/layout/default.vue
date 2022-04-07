<template>
  <el-container>
    <el-header class="com-header">
        <Header />
    </el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
</el-container>
</template>

<script>
import Header from '@/components/header/index.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
@import url('~@/assets/css/layout/default.scss');
</style>
