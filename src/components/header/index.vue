<template>
    <div class="header">
        <HeaderBar />
        <HeaderSearch />
    </div>
</template>

<script>
import HeaderBar from './HeaderBar.vue';
import HeaderSearch from './HeaderSearch.vue';

export default {
  components: {
    HeaderBar,
    HeaderSearch,
  },
};
</script>

<style lang="scss" scoped>
@import url("~@/assets/css/header/index.scss");
</style>
