<template>
    <div class="index-container">
        <div class="banner-container">
            <LeftBanner />
            <RightBanner />
        </div>
    </div>
</template>

<script>
import LeftBanner from '@/components/index/LeftBanner.vue';
import RightBanner from '@/components/index/RightBanner.vue';

export default {
  components: {
    LeftBanner,
    RightBanner,
  },
};
</script>

<style lang="scss">
@import "~@/assets/css/index/index.scss";
</style>
