<template>
    <div class="recommend-box">
        <div class="top-nav-box">
            <div class="label">猜你喜欢</div>
        </div>
        <div class="recommend-list">
            <a href="" v-for="item in list" :key="item.itemId">
                <div class="img-box">
                    <img :src="item.imgUrl" />
                </div>
                <div class="info-box">
                    <div class="title">{{ item.title }}</div>
                    <div class="score">
                        <el-rate
                            v-model="item.score"
                            disabled
                            show-score
                            text-color="#999"
                            disabled-void-color="#c3c3c3"
                            :score-template="`${item.commentNum}个评价`"
                        >
                        </el-rate>
                    </div>
                    <div class="desc-line">
                        {{ item.areaName }}
                    </div>
                    <div class="price-box">
                        <span class="yuan">￥</span>
                        <span class="num">{{ item.lowPrice }}</span>
                        <span class="desc">起</span>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import api from '@/api/index';

export default {
  created() {
    api.getRecommend().then((rep) => {
      this.list = rep.map((el) => {
        const ele = el;
        ele.score = +el.score;
        return el;
      });
    });
  },
  data() {
    return {
      list: [],
    };
  },
};
</script>

<style lang="scss">
.recommend-box {
    margin-top: 10px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    padding: 16px 20px 0;
    width: 230px;
    box-sizing: border-box;
    .top-nav-box {
        margin-bottom: 12px;
        .label {
            font-size: 16px;
            color: #333333;
            line-height: 22px;
            font-weight: 500;
        }
    }
    .recommend-list {
        > a {
            overflow: hidden;
            display: block;
            margin-bottom: 20px;
            width: 190px;
            .img-box {
                padding-bottom: 56.25%;
                background-color: #f4f4f4;
                border-radius: 4px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .info-box {
                margin-top: 10px;
                .title {
                    font-size: 14px;
                    color: #222222;
                    line-height: 20px;
                    width: 100%;
                    margin: 0;
                    font-weight: 500;
                }
                .score {
                    margin: 3px 0;
                    height: 24px;
                    line-height: 24px;
                    i {
                        font-size: 14px !important;
                    }
                    .el-rate__text {
                        font-size: 12px !important;
                        margin-left: 10px;
                    }
                }
            }
            .desc-line {
                font-size: 12px;
                color: #999999;
                width: 100%;
                height: 18px;
                line-height: 18px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-top: 4px;
            }
            .price-box {
                color: #ff6600;
                .yuan {
                    font-size: 14px;
                    font-weight: 700;
                }
                .num {
                    font-size: 22px;
                }
                .desc {
                    font-size: 12px;
                    margin-left: 4px;
                    font-weight: 700;
                }
            }
        }
    }
}
</style>
