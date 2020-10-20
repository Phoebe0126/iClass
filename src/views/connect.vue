<template>
   <div class="wrapper">
        <HeadTop/>
        <h1 class="title">联系客服微信</h1>
        <div class="qr">
            <img src="" alt="二维码">
        </div>
        <div class="tip">
            <p>扫描二维码</p>
            <p>添加客服【小拿】</p>
        </div>
   </div>
</template>

<script>
import HeadTop from  '@/components/header/Head'

export default {
    components: {
        HeadTop
    }
}
</script>

<style lang="scss" scoped>
@import "../style/mixin.scss";
.wrapper {
    @include wh(100%, 100%);
    background-color: #fff;
    position: fixed;
    text-align: center;
    .title {
        margin-top: 2rem;
    }
    .tip {
        p {
            color: #aaa;
        }
        font-size: .4rem;
        line-height: .6rem;
    }
    .qr {
        width: 5rem;
        height: 5rem;
        border: 1px solid #aaa;
        margin: 1rem auto;
        margin-bottom: .2rem;
        img {
            @include wh(100%, 100%);
        }
    }
}
</style>