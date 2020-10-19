<template>
    <div>
        <div id="wrapper">
            <div class="nav-left"  @click="goBackDo"><i class="iconfont">&#xe609;</i></div>
            <div class="product-intro">
                <h1>iClass</h1>
                <div>拿offer旗下产品</div>
            </div>
            <div class="auth">
                <van-button class="btn" type="primary" color="#56bc4b" size="large" @click="getAuth">微信授权登录</van-button>
                <div class="user-manual">用户手册</div>
            </div>
        </div>
    </div>
</template>

<script>
// import HeadTop from '@/components/header/Head'

export default {
    name: "login",
    data (){
        return{
            
        }
    },
    methods: {
        getAuth () {
            // todo 获取用户授权获取code、openid等信息
            // 1.needbind
            const res = 'needbind';
            if (res === 'needbind') {
                this.$router.push('/bindMobile')
            } else {
                // 直接进入首页
                this.$router.push('/')
            }
        },
        goBackDo() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
        }
    }

}


</script>

    <style lang="scss" scoped>

    #wrapper{
        background-color: #fff;
        height: 100%;
        width: 100%;
        position: fixed;
        text-align: center;
        .nav-left {
            margin-left: .2rem;
            margin-top: .3rem;
            height: 1rem;
            width: 1rem;
            font-size: .5rem;
            color: #8a8a8a;
        }
        .product-intro {
            padding: 2rem 1rem;
            color: #3c3c3c;
            div {
                color: #414141;
                margin-top: .3rem;
                font-size: .22rem;
            }
        }
        .auth {
            padding: 1rem;
            .van-button__text {
                color: #fff;
            }
            .user-manual {
                width: 1.5rem;
                color: #ababab;
                font-size: .3rem;
                margin: .5rem auto;
                border-bottom: 1px solid #aaa;
            }
        }
    }
    

</style>