<template>
  <div class="select" @click="changeSelect(true)" ref="select">
      <span>{{text}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div class="mt-provinces" v-if="show">
          <p>{{text}}</p>
          <div class="provinces-wrapper">
              <div class="province-col">
                  <span :class="['mt-province', {active: item.name === text}]"
                    v-for="item in list"
                    :key="item.id"
                    @click="changeSelect(false); changeValue(item.name)"
                    >
                    {{item.name}}
                  </span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['text', 'show', 'list', 'disabled'],
  methods: {
    changeSelect(val) {
      if (this.disabled) {
        return;
      }
      this.$emit('changeSelect', val);
    },
    changeValue(val) {
      this.$emit('changeValue', val);
    },
  },
  mounted() {
    document.addEventListener('click', (e) => {
      // contains 获取这个元素是否被包含 返回 true/false
      if (this.$refs.select.contains(e.target)) {
        return;
      }
      this.$emit('changeSelect', false);
    });
  },
};
</script>

<style lang="scss">
@import '~@/assets/css/changecity/select.scss';
</style>
