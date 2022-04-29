<template>
    <div class="area">
        <h3>按省份选择：</h3>
        <Select
            :value="provinceText"
            :list="provinceList"
            text="省份"
            :show="provinceShow"
            @changeSelect="changeProvince"
            @changeValue="changeProvinceValue"
        />
        <Select
            :value="cityText"
            :list="cityList"
            text="城市"
            :show="cityShow"
            @changeSelect="changeCity"
            @changeValue="changeCityValue"
            :disabled="disabled"
            :class="{ disabled: provinceText === '省份' }"
        />
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
import api from '@/api/index';
import Select from './Select.vue';

export default {
  created() {
    api.getProvince().then((rep) => {
      this.provinceList = this.filterLis(rep);
    });
  },
  data() {
    return {
      provinceShow: false,
      provinceText: '省份',
      cityShow: false,
      cityText: '城市',
      disabled: true,
      value: '',
      provinceList: [],
      cityList: [],
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
    filterLis(arr) {
      // let index = 0;
      const newArray = [];
      // while (index < arr.length) {
      //   newArray.push(arr.slice(index, index += 12));
      // }
      // return newArray;
      const len = Math.ceil(arr.length / 12);
      for (let i = 0; i < len; i += 1) {
        newArray.push(arr.slice(i * 12, i * 12 + 12));
      }
      return newArray;
    },
    changeProvince(val) {
      this.provinceShow = val;
    },
    changeProvinceValue(val, city) {
      this.provinceText = val;
      this.cityList = this.filterLis(city);
    },
    changeCity(val) {
      this.cityShow = val;
    },
    changeCityValue(val) {
      this.cityText = val;
      this.$store.dispatch('setCity', val);
      // localStorage.setItem('city', JSON.stringify(val));
      this.$router.push({ path: '/' });
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
