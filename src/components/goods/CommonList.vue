<template>
    <div class="commonlist">
        <div class="sort-option">
            <div class="tag-group">
                <div>
                    <span
                        :class="{ active: type === 'all' }"
                        @click="changeType('all')"
                    >
                        智能排序
                    </span>
                </div>
                <div>
                    <span
                        :class="{
                            'sort-up': type === 'sort-up',
                            'sort-down': type === 'sort-down',
                        }"
                        @click="changeType('sort')"
                    >
                        价格排序
                    </span>
                </div>
                <div>
                    <span
                        :class="{ active: type === 'mostup' }"
                        @click="changeType('mostup')"
                    >
                        人气最高
                    </span>
                </div>
                <div>
                    <span
                        :class="{ active: type === 'evaluaup' }"
                        @click="changeType('evaluaup')"
                    >
                        评价最高
                    </span>
                </div>
            </div>
        </div>
        <div class="common-list-main">
            <div class="default-card" v-for="(item, i) in goodList" :key="item.type">
                <div class="default-list-item">
                    <a href="" class="list-item-pic">
                        <span>{{i+1}}</span>
                        <img :src="item.image"/>
                    </a>
                    <div class="list-item-desc">
                        <div class="list-item-desc-top">
                            <a href="">{{item.title}}</a>
                            <div class="item-score">
                                <el-rate
                                    v-model="item.score"
                                    disabled
                                    disabled-void-color="#c3c3c3"
                                    text-color="#ff9900"
                                >
                                </el-rate>
                                <span v-if="item.score >= 4.5"
                                    >很好</span
                                >
                                <span v-else-if="item.score >= 4.1"
                                    >好</span
                                >
                                <span v-else-if="item.score >= 3.7"
                                    >不错</span
                                >
                                <span v-else-if="item.score >= 3.3"
                                    >一般</span
                                >
                                <span v-else>较差</span>
                                <span class="score"
                                    >{{ item.score }}分</span
                                >
                                <span class="cumNum">{{item.commentNum}}评论</span>
                            </div>
                            <div class="item-site-info">
                                <span
                                    v-for="(n, i) in item.tab"
                                    :key="i"
                                    v-text="
                                        n +
                                        (i < item.tab.length - 1
                                            ? '|'
                                            : '')
                                    "
                                >
                                </span>
                                <span class="item-site-map">
                                    <i class="el-icon-location-information"></i>
                                    查看地图
                                </span>
                            </div>
                            <div class="item-bottom-info">人均￥{{item.avgPrice}}</div>
                        </div>
                        <div class="dash-sperator-line"></div>
                        <div class="common-deal-container">
                            <a href="" v-for="(n, j) in item.dealItems" :key="j">
                                <div class="deal-title">{{n.title}}</div>
                                <div class="deal-info">
                                    <span class="deal-price">
                                        <span>￥</span>{{n.price}}
                                    </span>
                                    <span class="deal-value">门市价￥{{n.counterPrice}}</span>
                                </div>
                            </a>
                            <template v-if="show">
                                <a href=""
                                   v-for="(nn, v) in dealList[i]"
                                   :key="v+new Date().getTime()">
                                    <div class="deal-title">{{nn.title}}</div>
                                    <div class="deal-info">
                                        <span class="deal-price">
                                            <span>￥</span>{{nn.price}}
                                        </span>
                                        <span class="deal-value">门市价￥{{nn.counterPrice}}</span>
                                    </div>
                                </a>
                            </template>
                            <div class="toggle-btn" @click="toggleBtn($event, i)">
                                更多{{dealList[i].length}}个优惠<i class="el-icon-arrow-down"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  created() {
    // const obj = {};
    console.log(this.goodList.map((ele, i) => {
      const ss = ele;
      if (!this.dealList[i]) {
        this.dealList[i] = [];
        this.dealList[i] = ss.dealItems.slice(2);
      }
      ss.dealItems = ss.dealItems.slice(0, 2);
      return ss;
    }));
  },
  data() {
    return {
      dealList: {},
      index: 0,
      show: false,
      type: 'all',
      goodList: [
        {
          image: 'https://p0.meituan.net/wmproduct/bcd71e248162d4e75fbcdd7783fbfe1258706.jpg@385w_218h_1e_1c',
          title: '火鸡老店',
          type: 'food',
          score: 4.1,
          commentNum: 0,
          comment: [
            {
              usernam: 'xxxx',
              evalaute: '好吃',
            },
          ],
          tab: ['火锅', '沙河'],
          address: '昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里',
          avgPrice: 64,
          dealItems: [
            {
              title: '火鸡宴，建议10-14人使用',
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: '元',
            },
            {
              title: '火鸡宴，建议10-14人使用',
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: '元',
            },
            {
              title: '火鸡宴，建议10-14人使用',
              price: 212,
              counterPrice: 54343,
              saleNum: 0,
              priceType: '元',
            },
            {
              title: '火鸡宴，建议10-14人使用',
              price: 212,
              counterPrice: 54343,
              saleNum: 0,
              priceType: '元',
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggleBtn(e, i) {
      e.stopPropagation();
      if (!this.show) {
        this.show = true;
        e.target.innerHTML = '收起<i class="el-icon-arrow-up"></i>';
      } else {
        this.show = false;
        e.target.innerHTML = `更多${this.dealList[i].length}个优惠<i class="el-icon-arrow-down"></i>`;
      }
      this.index = i;
    },
    changeType(val) {
      if (val === 'sort') {
        if (this.type === 'sort-up') {
          this.type = 'sort-down';
        } else {
          this.type = 'sort-up';
        }
      } else {
        this.type = val;
      }
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/css/goods/commonlist.scss";
</style>
