<template>
    <div class="filter-component">
        <div class="label">
            <span class="fil">{{text}}</span>
            <span
                :class="['tag', acv === 'all' ? 'active' : '']"
                @click="acv = 'all';dropActive = '';dropType=''">
                全部
            </span>
        </div>
        <div class="tags">
            <div v-for="item in navList"
                :key="item.title">
                <a href="#"
                    :class="['goods-select', acv === item ? 'active' : '']"
                    @mouseenter="navMou($event, item.subList, item)"
                    @mouseleave="navMouEnd">
                    {{ item.title }}
                    <i class="el-icon-caret-bottom"></i>
                </a>
            </div>
            <DropDownList
                v-if="show"
                :list="dropList"
                :text="navList[index].title"
                :active="dropActive"
                :style="{ left: depLeft + 'px' }"
                @mouseenter.native="dropMou"
                @mouseleave.native="dropMouEnd"
                @changeAcv="changeAcv"
            />
        </div>
    </div>
</template>

<script>
import DropDownList from './DropDownList.vue';

export default {
  props: ['text', 'navList'],
  components: {
    DropDownList,
  },
  data() {
    return {
      index: 0,
      show: false,
      depLeft: -10,
      // 当前一级导航选中
      acv: 'all',
      // 当前鼠标移动到的一级导航
      facv: '',
      // 当前二级导航选中
      dropActive: '',
      // 记录还没有切换 之前二级导航栏选择
      seAc: '',
      dropList: [],
      dropType: '',
    };
  },
  methods: {
    navMou(e, val, type) {
      // 保存当前在哪个一级标签上
      this.facv = type;
      // 当前移动到的是其他标签 清除当前二级选择
      if (type !== this.acv) {
        this.dropActive = '';
      } else {
        // 设置当前选中
        this.dropActive = this.seAc;
        this.dropType = this.seAc;
      }
      clearTimeout(this.timer);
      this.show = true;
      this.depLeft = e.target.offsetLeft - 10;
      this.dropList = val;
    },
    navMouEnd() {
      this.timer = setTimeout(() => {
        this.show = false;
      }, 200);
    },
    dropMou() {
      clearTimeout(this.timer);
    },
    dropMouEnd() {
      this.show = false;
    },
    changeAcv(val) {
      // 更新一级导航栏选中
      this.acv = this.facv;
      // 记录当前选中
      this.seAc = val;
      // 更新当前选中
      this.dropType = val;
      this.dropActive = val;
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/css/goods/filter.scss";
</style>
