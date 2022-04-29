<template>
    <div class="select" @click="changeSelect(true)" ref="select">
        <span>{{ value }}</span>
        <i class="el-icon-caret-bottom"></i>
        <div class="mt-provinces" v-if="show">
            <p>{{ text }}</p>
            <div class="provinces-wrapper">
                <div v-show="text === '省份'">
                    <div
                        class="province-col"
                        v-for="(item, i) in list"
                        :key="i"
                    >
                        <span
                            :class="[
                                'mt-province',
                                { active: n.provinceName === value },
                            ]"
                            v-for="n in item"
                            :key="n.provinceCode"
                            @click="
                                changeSelect(false);
                                changeValue(n.provinceName, n.cityInfoList);
                            "
                        >
                            {{ n.provinceName }}
                        </span>
                    </div>
                </div>
                <div v-show="text === '城市'">
                    <div
                        class="province-col"
                        v-for="(item, j) in list"
                        :key="j + new Date().getTime()"
                    >
                        <span
                            :class="[
                                'mt-province',
                                { active: n.name === value },
                            ]"
                            v-for="n in item"
                            :key="n.id"
                            @click="
                                changeSelect(false);
                                changeValue(n.name);
                            "
                        >
                            {{ n.name }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['text', 'show', 'list', 'disabled', 'value'],
  methods: {
    changeSelect(val) {
      if (this.disabled) {
        return;
      }
      this.$emit('changeSelect', val);
    },
    changeValue(val, city) {
      this.$emit('changeValue', val, city);
    },
    domClick(e) {
      // contains 获取这个元素是否被包含 返回 true/false
      if (this.$refs.select.contains(e.target)) {
        return;
      }
      this.$emit('changeSelect', false);
    },
  },
  mounted() {
    document.addEventListener('click', this.domClick);
  },
  destroyed() {
    document.removeEventListener('click', this.domClick);
  },
};
</script>

<style lang="scss">
@import "~@/assets/css/changecity/select.scss";
</style>
