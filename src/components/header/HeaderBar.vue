<template>
  <div class="header-bar">
    <el-row class="header-content">
      <el-col :span="15">
          <Geo />
      </el-col>
      <el-col :span="9">
          <Nav />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Geo from './Geo.vue';
import Nav from './Nav.vue';

export default {
  components: {
    Geo,
    Nav,
  },
};
</script>

<style lang="scss">
@import '~@/assets/css/header/header-bar.scss';
</style>
