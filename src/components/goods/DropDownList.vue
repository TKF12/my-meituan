<template>
    <div class="popover">
        <p>{{ text }}</p>
        <div class="tag-group">
            <div>
                <span :class="active === 'all' ? 'active' : ''" @click="changeType('all')">全部</span>
            </div>
            <div
                v-for="item in list"
                :key="item.id">
                <span
                    :class="{active: item.id === active}"
                    @click="changeType(item.id)">
                    {{ item.name }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['text', 'list', 'active'],
  methods: {
    changeType(val) {
      this.$emit('changeAcv', val);
    },
  },
};
</script>

<style>
</style>
