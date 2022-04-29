<template>
  <div class="changecity">
      <div class="op-area">
          <Area />
      </div>
      <div class="m-city-list">
          <CityList text="热门城市" :list="popuList"/>
      </div>
      <div class="zuiji-list">
          <CityList text="最近访问" :list="recent"/>
      </div>
      <div class="m-hot">
          <Hot />
      </div>
  </div>
</template>

<script>
import Area from '@/components/changecity/Area.vue';
import CityList from '@/components/changecity/CityList.vue';
import Hot from '@/components/changecity/Hot.vue';
import api from '@/api/index';

export default {
  created() {
    api.getHot().then((rep) => {
      this.popuList = rep;
    });
    api.getRecents().then((rep) => {
      this.recent = rep;
    });
  },
  components: {
    Area,
    CityList,
    Hot,
  },
  data() {
    return {
      popuList: [],
      recent: [],
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/css/changecity/index.scss";
</style>
