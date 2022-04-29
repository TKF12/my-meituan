<template>
    <div class="left-banner">
        <div class="category-nav-title-wrapper">
            <span>全部分类</span>
        </div>
        <div class="category-nav-content-wrapper">
            <ul>
                <li
                    v-for="(item, i) in list"
                    :key="i"
                    class="nav-li"
                    @mouseenter="itemMou(item.items)"
                    @mouseleave="itemMouend"
                >
                    <i></i>
                    <span class="nav-text-wrapper">
                        <a href="#">{{ item.name }}</a>
                    </span>
                    <i class="nav-right-arrow"></i>
                </li>
            </ul>
        </div>
        <div
            class="category-nav-detail-wrapper"
            v-if="children.length"
            @mouseenter="mouNav"
            @mouseleave="mouNavEnd"
        >
            <div class="detail-area" v-for="n in children" :key="n.title">
                <div class="detail-title-wrapper">
                    <h2>{{ n.title }}</h2>
                    <a href="#">
                        更多
                        <i></i>
                    </a>
                </div>
                <div class="detail-content">
                    <a v-for="j in n.items" :key="j" href="#">{{ j }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api/index';

export default {
  created() {
    api.getNavList().then((rep) => {
      this.list = rep;
    });
  },
  data() {
    return {
      children: [],
      list: [],
    };
  },
  methods: {
    itemMou(item) {
      this.children = item;
    },
    itemMouend() {
      this.timer = setTimeout(() => {
        this.children = [];
      }, 200);
    },
    mouNav() {
      clearTimeout(this.timer);
    },
    mouNavEnd() {
      this.children = [];
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/css/index/left-banner.scss";
</style>
