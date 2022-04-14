<template>
  <ul class="nav" :style="{background: bgColor}">
            <li class="title">猫眼电影</li>
            <li
                v-for="(n, i) in navList.navList"
                :key="i"
                :class="{active: act === i}"
                @mouseenter="$emit('navChange', i)"
            >
                {{n.nav}}
            </li>
            <li class="total" v-if="!hide">全部</li>
        </ul>
</template>

<script>
export default {
  props: ['navList', 'act', 'bgColor', 'hide'],
};
</script>

<style lang="scss">
@import "~@/assets/css/nav.scss";
</style>
