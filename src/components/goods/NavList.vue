<template>
    <div>
        <div
            class="goods-select"
            v-for="item in list"
            :key="item.type"
            @mouseenter="navMou($event, item.subList)"
            @mouseleave="navMouEnd"
        >
            <a href="#">
                {{ item.title }}
                <i class="el-icon-caret-bottom"></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  props: ['list'],
  methods: {
    navMou(e, val) {
      this.$emit('navMou', e, val);
    },
    navMouEnd() {
      this.$emit('navMouEnd');
    },
  },
};
</script>

<style>
</style>
