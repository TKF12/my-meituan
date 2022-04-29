<template>
    <div class="header-content">
        <div class="header-title-module">
            <router-link :to="{name: 'Index'}">
                <img
                    src="https://s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png"
                    alt=""
                />
            </router-link>
        </div>
        <div class="header-search-module">
            <div class="header-search-block">
                <el-input
                    class="header-search-input"
                    v-model="input"
                    placeholder="搜索商家或地点"
                    @focus="focus"
                    @blur="blur"
                    @input="inputVal"
                >
                </el-input>
                <el-button
                    class="header-search-btn"
                    type="success"
                    icon="el-icon-search"
                    @click="tagList(input); $router.push({name: 'Goods', params: {s:input}})"
                ></el-button>
            </div>
            <div class="header-search-suggest" v-show="show">
                <div
                    class="header-search-noinput"
                    v-show="noInputShow"
                >
                    <div class="header-search-history"
                        v-show="searchHistory.length && !input.length">
                        <h6>最近搜索</h6>
                        <span class="header-search-clean" @click="delSearch">
                            删除搜索历史
                        </span>
                        <ul>
                            <li
                              v-for="(item, i) in searchHistory"
                              :key="i"
                              @click="tagList(item.name)">
                                <router-link
                                    :to="{ name: 'Goods', params: { s: item.name } }"
                                >
                                    {{ item.name }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="header-search-hasinput" v-show="input.length">
                    <ul>
                        <li v-for="(item, i) in hasinput" :key="i" @click="tagList(item)">
                            <router-link
                                :to="{ name: 'Goods', params: { s: item } }"
                                >{{ item }}</router-link
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api/index';

export default {
  data() {
    return {
      input: '',
      show: false,
      noInputShow: true,
      searchHistory: [],
      hasinput: [],
    };
  },
  created() {
    this.searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    if (this.$route.name === 'Goods') {
      this.input = this.$route.params.s;
    }
  },
  methods: {
    focus() {
      this.show = true;
      if (this.input) {
        this.inputVal();
      }
    },
    blur() {
      this.timer = setTimeout(() => {
        this.show = false;
      }, 300);
    },
    inputVal() {
      if (this.input) {
        this.noInputShow = false;
      } else {
        this.noInputShow = true;
      }
      this.sechTimer = setTimeout(() => {
        clearTimeout(this.sechTimer);
        api.getSearchList().then((rep) => {
          this.hasinput = rep.list.filter(
            (ele) => ele.indexOf(this.input) > -1,
          );
        });
      }, 200);
    },
    localHistory() {
      localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
    },
    tagList(item) {
      if (item) {
        this.input = item;
      }
      // 搜索的是否重复
      const rep = this.searchHistory.find((ele) => ele.name === this.input);
      if (rep) {
        // 搜索的重复更新时间戳并排序
        rep.time = new Date().getTime();
        this.searchHistory.sort((a, b) => b.time - a.time);
      } else {
        this.searchHistory.unshift({ name: this.input, time: new Date().getTime() });
      }
      this.localHistory();
    },
    delSearch() {
      this.searchHistory = [];
      this.localHistory();
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/header-search.scss";
</style>
