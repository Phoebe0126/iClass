<template>
    <header>
        <div class="header-tit ellipsis" s v-if="headTitle">{{headTitle}}</div>
    </header>
</template>

<script>
    export default {
        name: "head-top",
        props:['headTitle', 'goBack'],
        methods: {
           
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../style/mixin";

    header {
        width: 100%;
        position: relative;
        height: 1rem;
        text-align: center;
        background: #f6f6f6;
       
        .header-tit{
            max-width: 60%;
            margin: 0 auto;
            color: #383938;
            font-size: .4rem;
            font-weight: bold;
            line-height: 1rem;
            height: 1rem;
        }
    }
</style>