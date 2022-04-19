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
          <Hot :list="a_z"/>
      </div>
  </div>
</template>

<script>
import Area from '@/components/changecity/Area.vue';
import CityList from '@/components/changecity/CityList.vue';
import Hot from '@/components/changecity/Hot.vue';

export default {
  components: {
    Area,
    CityList,
    Hot,
  },
  data() {
    return {
      popuList: [{
        id: 1,
        name: '北京',
        pinyin: 'beijing',
        acronym: 'bj',
        rank: 'S',
        firstChar: 'b',
      }],
      recent: [{
        id: 1,
        name: '北京',
        pinyin: 'beijing',
        acronym: 'bj',
        rank: 'S',
        firstChar: 'b',
      }],
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/css/changecity/index.scss";
</style>
