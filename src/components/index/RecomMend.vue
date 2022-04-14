<template>
    <div class="recommend">
        <Nav
            :bgColor="`linear-gradient(to right, rgb(88, 174, 221) 2%, rgb(66, 191, 205) 97%)
            rgb(88, 174, 221)`"
            :act="act"
            :navList="list"
            :hide="true"
        />
        <div class="recommend-list">
            <a href="" class="recommend-item" v-for="(item, i) in list.navList[act].list">
                <div class="card-container">
                    <div class="img-box">
                        <img :src="item.img" :title="item.title">
                    </div>
                    <div class="info-box">
                        <div class="title">{{item.title}}</div>
                        <div class="score-line">
                            <el-rate
                                v-model="item.score"
                                disabled
                                show-score
                                text-color="#ff9900"
                                disabled-void-color="#c3c3c3"
                                :score-template="`${item.scoreNum}个评价`">
                            </el-rate>
                       </div>
                        <div class="desc-line">{{item.address}}</div>
                        <div class="price-box">
                            <span class="yuan">￥</span>
                            <span class="num">{{item.price}}</span>
                            <span class="price-desc">起</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/nav/index.vue';

export default {
  props: ['list'],
  components: {
    Nav,
  },
  data() {
    return {
      act: 0,
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/css/index/recommend"
</style>
