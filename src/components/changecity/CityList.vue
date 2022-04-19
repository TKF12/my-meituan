<template>
  <div class="citylist">
    <h3>{{text}}：</h3>
    <div class="r-info">
      <span class="city" v-for="item in list" :key="item.id">
        {{item.name}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['text', 'list'],
};
</script>

<style lang="scss">
@import "~@/assets/css/changecity/citylist.scss";
</style>
