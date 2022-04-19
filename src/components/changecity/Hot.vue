<template>
  <div class="hot">
      <div class="alphabet">
          <h3>
          按拼音首字母选择：
        </h3>
        <div class="hot-list">
            <a
                class="r-info"
                v-for="item in a_z"
                :key="item"
                :href="'#city-' + item"
                >
                {{item}}
            </a>
        </div>
      </div>
      <div
        class="city-area"
        v-for="(item, i) in filterList"
        :key="i"
        :id="'city-' + i.toUpperCase()">
          <span class="city-label">{{i.toUpperCase()}}</span>
          <div class="cities">
              <a class="city" v-for="n in item" :key="n">
                {{n}}
              </a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a_z: 'abcdefghjklmnpqrstwxyz'.toUpperCase().split(''),
      list: [{
        id: 1,
        name: '北京',
        pinyin: 'beijing',
        acronym: 'bj',
        rank: 'S',
        firstChar: 'b',
      }],
      filterList: [],
    };
  },
  created() {
    const obj = {};
    this.list.forEach((ele) => {
      if (!obj[ele.firstChar]) {
        obj[ele.firstChar] = [];
      }
      obj[ele.firstChar].push(ele.name);
    });
    this.filterList = obj;
  },
};
</script>

<style lang="scss">
@import "~@/assets/css/changecity/hot.scss";
</style>
