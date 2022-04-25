<template>
    <div class="list-container">
        <div class="crumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }"
                    >{{ $store.state.city }}美团</el-breadcrumb-item
                >
                <el-breadcrumb-item
                    ><a href="/"
                        >{{ $store.state.city }}{{ $route.params.s }}</a
                    ></el-breadcrumb-item
                >
            </el-breadcrumb>
        </div>
        <div class="center-content">
            <div class="left-content">
                <div class="filter-section-wrapper">
                    <div class="filter-box">
                        <FilterBox text="分类" :navList="sortList" />
                        <FilterBox text="区域" :navList="areaList" />
                    </div>
                </div>
                <div class="common-list">
                    <CommonList />
                </div>
            </div>
            <div class="right-content">right-content</div>
        </div>
    </div>
</template>

<script>
import FilterBox from '@/components/goods/Filter.vue';
import CommonList from '@/components/goods/CommonList.vue';

export default {
  components: {
    FilterBox,
    CommonList,
  },
  data() {
    return {
      sortList: [
        {
          title: '美食',
          type: 'food',
          subList: [
            {
              name: '日本菜',
              id: 'Japan',
            },
            {
              name: '美利坚',
              id: 'Jap',
            },
          ],
        },
        {
          title: '酒店',
          type: 'jiud',
          subList: [
            {
              name: '5星',
              id: 'Jwuxin',
            },
            {
              name: '4星',
              id: 'Jsi',
            },
          ],
        },
      ],
      areaList: [
        {
          title: '推荐商圈',
          subList: [
            {
              name: '望京',
              id: 120000,
            },
            {
              name: '昌平',
              id: 12222,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/css/goods/index.scss";
</style>
