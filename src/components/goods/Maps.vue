<template>
    <div :class="['map', { poin: fxd }]" ref="mapr"></div>
</template>

<script>
export default {
  data() {
    return {
      fxd: false,
    };
  },
  mounted() {
    const scr = document.createElement('script');
    scr.charset = 'utf-8';
    scr.src = 'https://map.qq.com/api/gljs?v=1.exp&key=CBRBZ-XN7K2-WK5UJ-CZE7N-WELSZ-V3FWF';
    document.head.appendChild(scr);
    setTimeout(() => {
      const map = new window.TMap.Map(this.$refs.mapr, { // eslint-disable-line no-unused-vars
        center: new window.TMap.LatLng(22.71991, 114.24779),
        zoom: 10,
      });
    }, 2000);

    document.addEventListener('scroll', this.isScroll);
  },
  methods: {
    isScroll() {
      const domheight = window.pageYOffset;
      if (domheight > 213) {
        this.fxd = true;
        this.$emit('fxd', true);
      } else {
        this.fxd = false;
        this.$emit('fxd', false);
      }
    },
  },
  destroyed() {
    document.removeEventListener('scroll', this.isScroll);
  },
};
</script>

<style lang="scss">
.map {
    margin-top: 10px;
    height: 220px;
    width: 230px;
    border-radius: 4px;
    margin-bottom: 10px;
    border: 1px solid #e5e5e5;
}
.poin {
    position: fixed !important;
    top: 0px;
    box-shadow: 0 5px 14px 0 rgb(0 0 0 / 19%);
    margin-top: 0px;
    z-index: 999;
}
</style>
