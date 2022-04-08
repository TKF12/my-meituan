<template>
    <div class="header-content">
        <div class="header-title-module">
            <a href="#">
                <img
                    src="https://s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png"
                    alt=""
                />
            </a>
        </div>
        <div class="header-search-module">
            <div class="header-search-block">
                <el-input
                    class="header-search-input"
                    v-model="input"
                    placeholder="搜索商家或地点"
                    @focus="focus"
                    @blur="blur"
                >
                </el-input>
                <el-button
                    class="header-search-btn"
                    type="success"
                    icon="el-icon-search"
                ></el-button>
            </div>
            <div class="header-search-suggest" v-show="show">
                <div
                    class="header-search-noinput"
                    v-show="searchHistory.length && !input.length"
                >
                    <div class="header-search-history">
                        <h6>最近搜索</h6>
                        <span class="header-search-clean">删除搜索历史</span>
                        <ul>
                            <li v-for="(item, i) in searchHistory" :key="i">
                                <router-link
                                    :to="{ path: '/s', params: { id: item } }"
                                >
                                    {{ item }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="header-search-hasinput" v-if="input.length">
                    <ul>
                        <li v-for="(item, i) in hasinput" :key="i">
                            <router-link
                                :to="{ path: '/s', params: { id: item } }"
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
export default {
  data() {
    return {
      input: '',
      show: false,
      searchHistory: ['小米'],
      hasinput: ['小米之家'],
    };
  },
  methods: {
    focus() {
      this.show = true;
    },
    blur() {
      setTimeout(() => {
        this.show = false;
      }, 200);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/header-search.scss";
</style>
