<template>
  <div class="citylist">
    <h3>{{text}}：</h3>
    <div class="r-info">
      <span
        class="city"
        v-for="item in list"
        :key="item.id"
        @click="cityClick(item.name)">
        {{item.name}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['text', 'list'],
  methods: {
    cityClick(item) {
      this.$store.dispatch('setCity', item);
      this.$router.push({ name: 'Index' });
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/css/changecity/citylist.scss";
</style>
