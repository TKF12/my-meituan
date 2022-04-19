<template>
    <div class="index-container">
        <div class="banner-container">
            <LeftBanner />
            <RightBanner />
        </div>
        <div class="maoyan-container">
          <SlideCar />
        </div>
        <div class="recommend-container">
          <RecomMend
            :list="list"
          />
        </div>
    </div>
</template>

<script>
import LeftBanner from '@/components/index/LeftBanner.vue';
import RightBanner from '@/components/index/RightBanner.vue';
import SlideCar from '@/components/index/SlideCar.vue';
import RecomMend from '@/components/index/RecomMend.vue';

export default {
  components: {
    LeftBanner,
    RightBanner,
    SlideCar,
    RecomMend,
  },
  data() {
    return {
      list: {
        title: '猜你喜欢',
        navList: [
          {
            nav: '为你甄选最适合的',
            list: [
              {
                title: '藤野造型烫染接发（西丽高品质店）',
                img: 'https://p1.meituan.net/dpmerchantpic/54e511baf05614b23b4e4dc568cf2372158340.jpg@374w_210h_1e_1c',
                score: 4,
                address: '平湖',
                scoreNum: 345,
                price: 10,
              },
              {
                title: '红荔村肠粉（云景豪园店）',
                img: 'https://p0.meituan.net/biztone/676649268_1646725979741.jpeg@374w_210h_1e_1c',
                score: 4.1,
                address: '春风万佳/文锦渡',
                scoreNum: 345,
                price: 8.8,
              },
              {
                title: '首脑美发沙龙（桂芳园店）',
                img: 'https://p1.meituan.net/dpmerchantpic/a8c05e65031da3150d08e99bfd779cab797811.png@374w_210h_1e_1c',
                score: 4,
                address: '春风万佳/文锦渡',
                scoreNum: 345,
                price: 8.8,
              },
              {
                title: '万岁寿司·料理（IBCmall店）',
                img: 'https://p0.meituan.net/merchant/ed5c31931b2c5d78367b1296ec3979e774616.jpg@374w_210h_1e_1c',
                score: 4,
                address: '平湖',
                scoreNum: 345,
                price: 8.8,
              },
              {
                title: '愿者上钩（大浪店）',
                img: 'https://p1.meituan.net/merchant/2fac9b5408644373231e179ce8872ed462429.jpg@374w_210h_1e_1c',
                score: 4,
                address: '平湖',
                scoreNum: 345,
                price: 8.8,
              },
              {
                title: '汤鲜生自助回转火锅百汇（坂田天虹店）',
                img: 'https://p0.meituan.net/biztone/f45def254f2905f798280eca3058f6fb5545821.jpg@374w_210h_1e_1c',
                score: 4.5,
                address: '平湖',
                scoreNum: 345,
                price: 8.8,
              },
              {
                title: '汤鲜生自助回转火锅百汇（坂田天虹店）',
                img: 'https://p0.meituan.net/biztone/f45def254f2905f798280eca3058f6fb5545821.jpg@374w_210h_1e_1c',
                score: 4.5,
                address: '平湖',
                scoreNum: 345,
                price: 8.8,
              },
              {
                title: '汤鲜生自助回转火锅百汇（坂田天虹店）',
                img: 'https://p0.meituan.net/biztone/f45def254f2905f798280eca3058f6fb5545821.jpg@374w_210h_1e_1c',
                score: 4.5,
                address: '平湖',
                scoreNum: 345,
                price: 8.8,
              },
              {
                title: '汤鲜生自助回转火锅百汇（坂田天虹店）',
                img: 'https://p0.meituan.net/biztone/f45def254f2905f798280eca3058f6fb5545821.jpg@374w_210h_1e_1c',
                score: 4.5,
                address: '平湖',
                scoreNum: 345,
                price: 8.8,
              },
              {
                title: '汤鲜生自助回转火锅百汇（坂田天虹店）',
                img: 'https://p0.meituan.net/biztone/f45def254f2905f798280eca3058f6fb5545821.jpg@374w_210h_1e_1c',
                score: 4.5,
                address: '平湖',
                scoreNum: 345,
                price: 8.8,
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/css/index/index.scss";
</style>
