<template>
    <div class="right-banner">
        <div class="home-header-links">
            <a href="#" class="waimai-link">美团外卖</a>
            <a href="#" class="maoyan-link">猫眼电影</a>
            <a href="#" class="hotel-link">美团酒店</a>
            <a href="#" class="homestay-link">民宿／公寓</a>
            <a href="#" class="merchant-link">商家入驻</a>
            <a href="#" class="gongyi-link">美团公益</a>
        </div>
        <div class="banner-row">
            <el-carousel height="240px" class="carousel">
                <el-carousel-item v-for="item in imgList" :key="item.img">
                    <img :src="item.img" />
                </el-carousel-item>
            </el-carousel>
            <a href="#">
                <div class="pic-1"></div>
            </a>
            <div class="banner-logincard">
                <div class="login-container">
                    <div class="login-avatar">
                        <el-avatar
                            :size="47"
                            src="https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg"
                        ></el-avatar>
                    </div>
                    <p class="user-name">Hi！你好</p>
                    <div class="register">
                        <el-button round>注册</el-button>
                    </div>
                    <div class="login">
                        <el-button round>立即登录</el-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="banner-row">
            <a href="#">
                <div class="pic-2"></div>
            </a>
            <a href="#">
                <div class="pic-3"></div>
            </a>
            <a href="#">
                <div class="pic-4"></div>
            </a>
            <div class="download-app">
                <div class="qrcode-box">
                    <img
                        src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
                        alt="下载APP"
                    />
                </div>
                <p class="app-name">美团APP手机版</p>
                <p class="s1"><span class="red">1元起</span><span class="gard">吃喝玩乐</span></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgList: [
                {
                    url: "#",
                    img: "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
                },
                {
                    url: "#",
                    img: "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
                },
                {
                    url: "#",
                    img: "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
                },
            ],
        };
    },
};
</script>

<style lang="scss">
@import "~@/assets/css/index/right-banner.scss";
</style>
