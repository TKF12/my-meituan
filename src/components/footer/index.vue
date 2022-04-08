<template>
    <div class="com-footer">
        <div class="footer-content">
            <div class="footer-link">
                <div class="footer-column" v-for="(item, i) in columnList" :key="i">
                    <dl v-for="(nn, j) in item" :key="j">
                        <dt>{{ nn.title }}</dt>
                        <dd v-for="n in nn.list" :key="n">
                            <a href="#"> {{ n }} </a>
                        </dd>
                    </dl>
                </div>
                <div class="footer-column" v-for="item in telList" :key="new Date().getTime()">
                    <dl v-for="nn in item" :key="nn.title">
                        <dt>{{ nn.title }}</dt>
                        <dd v-for="n in nn.subtitle" :key="n.tal">
                            {{ n.title | isTitle}}
                            <a href="#"> {{ n.tel }} </a>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      columnList: [
        [
          {
            title: '用户帮助',
            list: [
              '申请退款',
              '常见问题',
              '用户协议',
              '隐私政策',
              '反诈骗公告',
              '消费者权益保障',
            ],
          },
          {
            title: '美团服务',
            list: [
              '美团外卖',
              '美团酒店',
              '猫眼电影',
              '美团配送',
              '美团云',
              '大众点评',
              '美团民宿',
              '无人配送',
              '企业用餐、企业用车、企业差旅',
              '开放平台',
            ],
          },
        ],
        [
          {
            title: '商家合作',
            list: [
              '美食商家入驻(非外卖)',
              '美团外卖开店申请',
              '美团餐饮系统',
              '美团配送合作申请',
              '美团餐饮培训',
              '酒店商家入驻',
              '境内度假商家入驻',
              '综合商家入驻',
              '美团民宿房东商家入驻',
              '商家开票申请',
              '美团智能收银机',
              '美团开放平台',
              '美团收单',
              '免费使用美团排队',
              '快驴进货商家合作',
              '美团闪购商家入驻',
              '合作/招聘',
            ],
          },
        ],
        [
          {
            title: '合作商招募',
            list: ['美团外卖合作商招募', '到店餐饮合作商招募', '到店综合业务合作商招募', '美团联盟', '美团收银招募线上分销商', '美团收银合作商招募', '美团收单合作商招募', '美团充电宝合作商招募', '美团优选渠道合作商招募', '美团买菜合作商招募'],
          },
          {
            title: '美团规则',
            list: ['规则中心', '规则目录', '规则评议院'],
          },
        ],
        [
          {
            title: '关注美团',
            list: ['美团新浪微博'],
          },
          {
            title: '公司信息',
            list: ['关于我们', '投资者关系', '加入我们', '商户诚信公约及管理办法', '保险经纪资质'],
          },
          {
            title: '廉正举报',
            list: ['廉正举报平台'],
          },
          {
            title: '知识产权',
            list: ['知识产权维权平台'],
          },
        ],
      ],
      telList: [
        [
          { title: '消费者服务热线', subtitle: [{ title: '外卖消费者', tal: '10109777' }, { title: '猫眼消费者', tel: '10105335' }, { title: '其他消费者', tel: '10107888' }] },
          { title: '商家服务热线', subtitle: [{ title: '外卖&餐饮商家', tel: '10105557' }, { title: '休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家', tel: '10100107' }] },
          { title: '投诉举报专区', subtitle: [{ title: '违法和不良信息举报电话', tel: '4006018900' }, { title: '举报邮箱', tel: 'tousujubao@meituan.com' }, { title: '', tel: '网上有害信息举报' }, { title: '注', tel: '以上渠道均可投诉举报涉未成年人的违法和不良信息' }] },
        ],
      ],
    };
  },
  filters: {
    isTitle(item) {
      return item ? `${item}：` : '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/footer.scss";
</style>
