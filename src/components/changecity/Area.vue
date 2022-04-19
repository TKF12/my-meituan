<template>
  <div class="area">
      <h3>按省份选择：</h3>
      <Select
        :text="provinceText"
        :list="provinceList"
        :show="provinceShow"
        @changeSelect="changeProvince"
        @changeValue="changeProvinceValue"/>
      <Select
        :text="cityText"
        :list="cityList"
        :show="cityShow"
        @changeSelect="changeCity"
        @changeValue="changeCityValue"
        :disabled="disabled"
        :class="{disabled: provinceText === '省份'}"/>
       <div class="search">
           <h3>直接搜索：</h3>
           <el-autocomplete
                class="inline-input"
                v-model="value"
                :fetch-suggestions="querySearch"
                placeholder="请输入城市中文或拼音"
                :trigger-on-focus="false"
                @select="handleSelect"
            ></el-autocomplete>
       </div>
  </div>
</template>

<script>
import Select from './Select.vue';

export default {
  data() {
    return {
      provinceShow: false,
      provinceText: '省份',
      cityShow: false,
      cityText: '城市',
      disabled: true,
      value: '',
      provinceList: [{
        id: '370000',
        name: '山东',
        cityInfoList: [
          {
            id: 60,
            name: '青岛',
            pinyin: 'qingdao',
            acronym: 'qd',
            rank: 'B',
            firstChar: 'Q',
          },
        ],
      }],
      cityList: [
        {
          id: 60,
          name: '青岛',
          pinyin: 'qingdao',
          acronym: 'qd',
          rank: 'B',
          firstChar: 'Q',
        },
      ],
    };
  },
  watch: {
    provinceText(val) {
      // 不是省份时 城市列表可以选择
      if (val !== '省份') {
        this.disabled = false;
      }
    },
  },
  components: {
    Select,
  },
  methods: {
    changeProvince(val) {
      this.provinceShow = val;
    },
    changeProvinceValue(val) {
      this.provinceText = val;
    },
    changeCity(val) {
      this.cityShow = val;
    },
    changeCityValue(val) {
      this.cityText = val;
    },
    handleSelect(val) {
      console.log(val);
    },
    querySearch(er) {
      console.log(er);
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/css/changecity/area.scss";
</style>
