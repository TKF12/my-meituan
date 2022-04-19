<template>
    <div class="index-container">
        <Nav
            @navChange="navMou"
            :act="act"
            :navList="imgList"
            :bgColor="
                `linear-gradient(to right, rgb(250, 60, 104) 2%, rgb(254, 70, 77) 97%)
                 rgb(250, 60, 104)`"
        />
        <div class="scenes-body">
            <div
                class="slider-content"
                :style="{ left: mouTo }"
                ref="slider_content"
            >
                <div
                    class="slider-item"
                    v-for="(item, i) in imgList.navList[act].list"
                    :key="i"
                >
                    <img :src="item.img" :alt="item.title" />
                    <div class="film-info">
                        <p class="score">
                            <span v-if="item.see">{{item.see}}</span>
                            <b v-if="item.score">观众评</b>
                            <span v-if="item.score">{{ item.score }}</span>
                            <b v-if="item.see">人想看</b>
                        </p>
                        <p class="name">{{ item.title }}</p>
                        <span class="ticket">{{ act === 0 ? '购票' : '预售'}}</span>
                    </div>
                </div>
            </div>
            <div class="left-btn" @click="changeInx(-1)"></div>
            <div class="right-btn" @click="changeInx(1)"></div>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/nav/index.vue';

export default {
  components: {
    Nav,
  },
  data() {
    return {
      index: 0,
      act: 0,
      width: 1165,
      imgList: {
        title: '猫眼电影',
        navList: [
          {
            nav: '正在热播',
            list: [
              {
                title: '神奇动物:邓布利多之谜',
                score: '8.4',
                img: 'https://p0.pipi.cn/mmdb/25bfd602d7c807d7c3cbae3e4517bbee2a46d.jpg?imageMogr2/thumbnail/2500x2500%3E',
              },
              {
                title: '神秘海域',
                score: '8.6',
                img: 'https://p0.pipi.cn/mmdb/25bfd69ad7c3385bf180779c8ca665bf97ce5.jpg?imageMogr2/thumbnail/2500x2500%3E',
              },
              {
                title: '新蝙蝠侠',
                score: '7.9',
                img: 'https://p0.pipi.cn/mmdb/25bfd69a9235bfecd8b535cb9e40b04b22831.jpg?imageMogr2/thumbnail/2500x2500%3E',
              },
              {
                title: '月球陨落',
                score: '8.1',
                img: 'https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageMogr2/thumbnail/2500x2500%3E',
              },
              {
                title: '精灵旅社4：变身大冒险',
                score: '9.1',
                img: 'https://p0.pipi.cn/mmdb/25bfd69a8eac7e7a3539dd3abbabc299e2f10.jpg?imageMogr2/thumbnail/2500x2500%3E',
              },
              {
                title: '密室逃生2',
                score: '8.4',
                img: 'https://p0.pipi.cn/mmdb/25bfd69a030338ddd2300b1f3b191305438ba.jpg?imageMogr2/thumbnail/2500x2500%3E',
              },
              {
                title: '长津湖之水门桥',
                score: '9.6',
                img: 'https://p0.pipi.cn/mmdb/25bfd6be9abc7e8d3311e5bd9b6d287be0f28.png?imageMogr2/thumbnail/2500x2500%3E',
              },
              {
                title: '这个杀手不太冷静',
                score: '9.1',
                img: 'https://p0.pipi.cn/mmdb/25bfd69a8ea9237df502ff701190c0ccf9296.jpg?imageMogr2/thumbnail/2500x2500%3E',
              },
              {
                title: '花束般的恋爱',
                score: '9',
                img: 'https://p0.pipi.cn/mmdb/25bfd6bec7e7e1030cb12da89b6f158d2d3ce.jpg?imageMogr2/thumbnail/2500x2500%3E',
              },
              {
                title: '奇迹·笨小孩',
                score: '9.5',
                img: 'https://p0.pipi.cn/mmdb/25bfd68de7adddddd2395b4c04f4737cd31fc.jpg?imageMogr2/thumbnail/2500x2500%3E',
              },
            ],
          },
          {
            nav: '即将上映',
            list: [
              {
                title: '神奇动物:邓布利多之谜',
                see: '675',
                img: 'https://p0.pipi.cn/mmdb/25bfd6029239230faf16bde1fd1506c4bc17b.jpg?imageMogr2/thumbnail/2500x2500%3E',
              },
              {
                title: '神奇动物:邓布利多之谜',
                see: '111',
                img: 'https://p0.pipi.cn/mmdb/25bfd6029239230faf16bde1fd1506c4bc17b.jpg?imageMogr2/thumbnail/2500x2500%3E',
              },
              {
                title: '神奇动物:邓布利多之谜',
                see: '333',
                img: 'https://p0.pipi.cn/mmdb/25bfd6029239230faf16bde1fd1506c4bc17b.jpg?imageMogr2/thumbnail/2500x2500%3E',
              },
              {
                title: '神奇动物:邓布利多之谜',
                see: '222',
                img: 'https://p0.pipi.cn/mmdb/25bfd6029239230faf16bde1fd1506c4bc17b.jpg?imageMogr2/thumbnail/2500x2500%3E',
              },
              {
                title: '神奇动物:邓布利多之谜',
                see: '345',
                img: 'https://p0.pipi.cn/mmdb/25bfd6029239230faf16bde1fd1506c4bc17b.jpg?imageMogr2/thumbnail/2500x2500%3E',
              },
              {
                title: '神奇动物:邓布利多之谜',
                see: '1234',
                img: 'https://p0.pipi.cn/mmdb/25bfd6029239230faf16bde1fd1506c4bc17b.jpg?imageMogr2/thumbnail/2500x2500%3E',
              },
              {
                title: '神奇动物:邓布利多之谜',
                see: '345',
                img: 'https://p0.pipi.cn/mmdb/25bfd6029239230faf16bde1fd1506c4bc17b.jpg?imageMogr2/thumbnail/2500x2500%3E',
              },
              {
                title: '神奇动物:邓布利多之谜',
                see: '23',
                img: 'https://p0.pipi.cn/mmdb/25bfd6029239230faf16bde1fd1506c4bc17b.jpg?imageMogr2/thumbnail/2500x2500%3E',
              },
              {
                title: '神奇动物:邓布利多之谜',
                see: '78',
                img: 'https://p0.pipi.cn/mmdb/25bfd6029239230faf16bde1fd1506c4bc17b.jpg?imageMogr2/thumbnail/2500x2500%3E',
              },
              {
                title: '神奇动物:邓布利多之谜',
                see: '67',
                img: 'https://p0.pipi.cn/mmdb/25bfd6029239230faf16bde1fd1506c4bc17b.jpg?imageMogr2/thumbnail/2500x2500%3E',
              },
            ],
          },
        ],
      },
      // imgList: [
      //   {
      //     title: '猫眼电影',
      //     navList: {
      //     nav: '正在热播',
      //     list: [
      //       {
      //         title: '神奇动物:邓布利多之谜',
      //         score: '8.4',
      //         img: 'https://p0.pipi.cn/mmdb/25bfd602d7c807d7c3cbae3e4517bbee2a46d.jpg?imageMogr2/thumbnail/2500x2500%3E',
      //       },
      //       {
      //         title: '神秘海域',
      //         score: '8.6',
      //         img: 'https://p0.pipi.cn/mmdb/25bfd69ad7c3385bf180779c8ca665bf97ce5.jpg?imageMogr2/thumbnail/2500x2500%3E',
      //       },
      //       {
      //         title: '新蝙蝠侠',
      //         score: '7.9',
      //         img: 'https://p0.pipi.cn/mmdb/25bfd69a9235bfecd8b535cb9e40b04b22831.jpg?imageMogr2/thumbnail/2500x2500%3E',
      //       },
      //       {
      //         title: '月球陨落',
      //         score: '8.1',
      //         img: 'https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageMogr2/thumbnail/2500x2500%3E',
      //       },
      //       {
      //         title: '精灵旅社4：变身大冒险',
      //         score: '9.1',
      //         img: 'https://p0.pipi.cn/mmdb/25bfd69a8eac7e7a3539dd3abbabc299e2f10.jpg?imageMogr2/thumbnail/2500x2500%3E',
      //       },
      //       {
      //         title: '密室逃生2',
      //         score: '8.4',
      //         img: 'https://p0.pipi.cn/mmdb/25bfd69a030338ddd2300b1f3b191305438ba.jpg?imageMogr2/thumbnail/2500x2500%3E',
      //       },
      //       {
      //         title: '长津湖之水门桥',
      //         score: '9.6',
      //         img: 'https://p0.pipi.cn/mmdb/25bfd6be9abc7e8d3311e5bd9b6d287be0f28.png?imageMogr2/thumbnail/2500x2500%3E',
      //       },
      //       {
      //         title: '这个杀手不太冷静',
      //         score: '9.1',
      //         img: 'https://p0.pipi.cn/mmdb/25bfd69a8ea9237df502ff701190c0ccf9296.jpg?imageMogr2/thumbnail/2500x2500%3E',
      //       },
      //       {
      //         title: '花束般的恋爱',
      //         score: '9',
      //         img: 'https://p0.pipi.cn/mmdb/25bfd6bec7e7e1030cb12da89b6f158d2d3ce.jpg?imageMogr2/thumbnail/2500x2500%3E',
      //       },
      //       {
      //         title: '奇迹·笨小孩',
      //         score: '9.5',
      //         img: 'https://p0.pipi.cn/mmdb/25bfd68de7adddddd2395b4c04f4737cd31fc.jpg?imageMogr2/thumbnail/2500x2500%3E',
      //       },
      //     ],
      //     },
      //   },
      //   {
      //     navList: {
      //     nav: '即将上映',
      //     list: [
      //       {
      //         title: '神奇动物:邓布利多之谜',
      //         see: '675',
      //         img: 'https://p0.pipi.cn/mmdb/25bfd6029239230faf16bde1fd1506c4bc17b.jpg?imageMogr2/thumbnail/2500x2500%3E',
      //       },
      //       {
      //         title: '神奇动物:邓布利多之谜',
      //         see: '111',
      //         img: 'https://p0.pipi.cn/mmdb/25bfd6029239230faf16bde1fd1506c4bc17b.jpg?imageMogr2/thumbnail/2500x2500%3E',
      //       },
      //       {
      //         title: '神奇动物:邓布利多之谜',
      //         see: '333',
      //         img: 'https://p0.pipi.cn/mmdb/25bfd6029239230faf16bde1fd1506c4bc17b.jpg?imageMogr2/thumbnail/2500x2500%3E',
      //       },
      //       {
      //         title: '神奇动物:邓布利多之谜',
      //         score: '222',
      //         img: 'https://p0.pipi.cn/mmdb/25bfd6029239230faf16bde1fd1506c4bc17b.jpg?imageMogr2/thumbnail/2500x2500%3E',
      //       },
      //       {
      //         title: '神奇动物:邓布利多之谜',
      //         see: '345',
      //         img: 'https://p0.pipi.cn/mmdb/25bfd6029239230faf16bde1fd1506c4bc17b.jpg?imageMogr2/thumbnail/2500x2500%3E',
      //       },
      //       {
      //         title: '神奇动物:邓布利多之谜',
      //         see: '1234',
      //         img: 'https://p0.pipi.cn/mmdb/25bfd6029239230faf16bde1fd1506c4bc17b.jpg?imageMogr2/thumbnail/2500x2500%3E',
      //       },
      //       {
      //         title: '神奇动物:邓布利多之谜',
      //         see: '345',
      //         img: 'https://p0.pipi.cn/mmdb/25bfd6029239230faf16bde1fd1506c4bc17b.jpg?imageMogr2/thumbnail/2500x2500%3E',
      //       },
      //       {
      //         title: '神奇动物:邓布利多之谜',
      //         see: '23',
      //         img: 'https://p0.pipi.cn/mmdb/25bfd6029239230faf16bde1fd1506c4bc17b.jpg?imageMogr2/thumbnail/2500x2500%3E',
      //       },
      //       {
      //         title: '神奇动物:邓布利多之谜',
      //         see: '78',
      //         img: 'https://p0.pipi.cn/mmdb/25bfd6029239230faf16bde1fd1506c4bc17b.jpg?imageMogr2/thumbnail/2500x2500%3E',
      //       },
      //       {
      //         title: '神奇动物:邓布利多之谜',
      //         see: '67',
      //         img: 'https://p0.pipi.cn/mmdb/25bfd6029239230faf16bde1fd1506c4bc17b.jpg?imageMogr2/thumbnail/2500x2500%3E',
      //       },
      //     ],
      //   },},}
      // ],
    };
  },
  computed: {
    mouTo() {
      return `${-this.index * this.width}px`;
    },
  },
  methods: {
    changeInx(index) {
      if (
        (index === -1 && this.index === 0)
                || (-this.index * this.width <= -1 * this.width && index === 1)
      ) {
        return;
      }
      if (index === -1) {
        this.index -= 1;
      } else {
        this.index += 1;
      }
    },
    navMou(i) {
      this.act = i;
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/css/index/slidecar.scss";
</style>
