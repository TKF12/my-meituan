<template>
    <div class="header">
        <HeaderBar />
    </div>
</template>

<script>
import HeaderBar from './HeaderBar.vue';

export default {
  components: {
    HeaderBar,
  },
};
</script>

<style lang="scss" scoped>
@import url("~@/assets/css/header/index.scss");
</style>
