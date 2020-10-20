<template>
    <header>
        <div class="header-tit ellipsis" v-if="headTitle">{{headTitle}}</div>
    </header>
</template>

<script>
    export default {
        name: "head-top",
        props:['goBack'],
        data () {
            return {
                headTitle: ''
            }
        },
        created () {
            this.headTitle = document.title || this.$route.meta.title
        }
    }
</script>

<style lang="scss" scoped>
@import "../../style/mixin";

header {
    width: 100%;
    position: relative;
    height: 1.3rem;
    text-align: center;
    background: #f6f6f6;
    .header-tit{
        max-width: 60%;
        margin: 0 auto;
        color: #383938;
        font-size: .45rem;
        font-weight: bold;
        line-height: 1.3rem;
        height: 1.3rem;
    }
}
</style>