<template>
    <div>
        <HeadTop/>
        <div id="wrapper">
            <div id="middle" class="container">
                <div class="title">绑定手机号</div>
                <div class="account-form">
                  <van-form @submit="submitForm" :show-error="false" :show-error-message="false" @failed="formValidateFailed">
                        <div class="mobile block section">
                            <span class="area-code">+86</span>
                            <van-field
                                v-model="mobile"
                                name="手机号"
                                placeholder="输入手机号"
                                :rules="[{ required: true, message: '请填写手机号' },
                                { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！'}]"
                            />
                        </div>
                        <div class="section verify-text">
                           <div class="block">
                                <van-field
                                    v-model="verifyText"
                                    name="验证文字"
                                    placeholder="输入图中验证码"
                                    :rules="[{ required: true, message: '请填写验证文字' }]"
                                >
                                </van-field>
                            </div>
                            <div class="verify-text-img block-right">
                                哈工大
                            </div>
                        </div>
                        <div class="section verify-code">
                            <div class="block">
                                <van-field
                                    v-model="verifyCode"
                                    name="验证码"
                                    placeholder="输入验证码"
                                >
                                 <!-- :rules="[{ required: true, message: '请填写验证码' }]" -->
                                </van-field>
                            </div>
                            <div class="block-right verify-code-right">
                                <van-button round v-show="!showCountDown"  @click="getVerifyCode" >获取验证码</van-button>
                                <van-button round  size="normal" v-show="showCountDown">{{ count }}</van-button>
                            </div>
                        </div>
                        <div class="submit">
                            <van-button round block type="info" native-type="submit" color="#f49d3e">
                              提交
                            </van-button>
                        </div>
                    </van-form>
                </div>
                <span class="mobile-change" @click="naviToMobileChangePage">
                    手机号变更
                </span>
            </div>
        </div>
       
    </div>
</template>

<script>
import HeadTop from '@/components/header/Head'

export default {
    name: "login",
    data(){
        return{
            mobile:'',
            verifyText: '',
            verifyCode: '',
            showCountDown: false,
            timer: null,
            count: 0
        }
    },
    components:{
        HeadTop
    },
    methods: {
        // 表单校验成功
        submitForm () {
            console.log(11)
            // 1.提交用户所填表单
            // 2. 验证成功则跳转到首页
            // this.$router.push('/')
        },
        // 表单校验失败
        formValidateFailed (errorInfo) {
            this.$toast(errorInfo.errors[0].message)
        },
        getVerifyCode () {
            // 1.验证文字验证码是否正确
            // 2.请求后台验证码接口
            // 3.60秒倒计时
            this.countdown()
            // 4.清空文字验证码并且更换验证码图片
            this.resetVerifyText()

        },
        resetVerifyText () {
            if (this.verifyText) {
                this.verifyText = ''
            }
        },
        naviToMobileChangePage () {
            this.$router.push('/changeMobile')
        },
        // 验证码倒计时
        countdown () {
            const MAX_COUNT = 60
            if (!this.timer) {
                this.count = MAX_COUNT
                this.showCountDown = true
                this.timer = setInterval(() => {
                    if (this.count > 0 && this.count <= MAX_COUNT) {
                        this.count--
                    } else {
                        clearInterval(this.timer)
                        this.count = 0
                        this.timer = null
                        this.showCountDown = false
                    }
                }, 1000);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/mixin.scss";

#wrapper{
    background-color: #fff;
    height: 100%;
    width: 100%;
    position: fixed;
    .container {
        padding: .5rem;
        font-size: .37333333rem;
        .title {
            font-size: .6rem;
            text-align: center;
            margin: 1rem 0;
            color: #000;
        }
        .account-form {
            margin-top: 1rem;
            .block {
                border: 2px solid #f5f5f4;
                border-radius: .2rem;
            }
            .section {
                @include flex(center);
                margin: .5rem 0;
            }
            .van-field__control, .van-cell {
                font-size: .4rem;
            }
            .mobile {
                .area-code {
                    border-right: 1px solid #c1c1c1;
                    padding: 0 .2rem;
                    color: #000;
                    line-height: .4rem;
                    font-size: .4rem;
                }
            }
            .verify-text, .verify-code {
                @include flex(space-between, stretch);
                overflow: hidden;
                .block {
                    flex: 1;
                }
                .block-right {
                    margin-left: .4rem;
                    text-align: center;
                    @include flex(center);
                    width: 35%;
                }
                .verify-code-right {
                    border: 0;
                    .van-button {
                        width: 100%;
                        border: .04rem solid $oy;
                        background-color: #fff;
                        .van-button__text {
                            color: $oy;
                            font-family: 'Microsoft YaHei';
                        }
                    }
                }
            }
            .submit {
                margin: 1rem 0 .5rem 0;
                .van-button__text {
                    color: #fff;
                }
            }
        }
        .mobile-change {
            float: right;
            color: $oy;
        }
    }
}


</style>