<template>
    <div>
        <HeadTop head-title="完善信息" go-back="true" ></HeadTop>
        <div id="wrapper">
            <div id="middle" class="container">
                <div class="title">绑定手机号</div>
                <div class="account-form">
                  <van-form submit="submitForm">

                        <div>
                            <span @click="getVerifyCode">+86</span>
                            <van-field
                                v-model="mobile"
                                name="手机号"
                                placeholder="手机号"
                                :rules="[{ required: true, message: '请填写手机号' },
                                     { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！'}]"
                            />
                        </div>
                        <van-field
                            v-model="verifyText"
                            name="验证文字"
                            placeholder="验证文字"
                            :rules="[{ required: true, message: '请填写验证文字' }]"
                        >
                            <div slot="button" >
                                哈工大
                                <img src=""/>
                            </div>
                        </van-field>
                        <van-field
                            v-model="verifyCode"
                            name="验证码"
                            placeholder="验证码"
                            :rules="[{ required: true, message: '请填写验证码' }]"
                        >
                            <div slot="button" >
                                <span @click="getVerifyCode">获取验证码</span>
                                <img src=""/>
                            </div>
                            </van-field>
                        <div style="margin: 16px;">
                            <van-button round block type="info" native-type="submit">
                            提交
                            </van-button>
                        </div>
                    </van-form>
                </div>
                <div class="mobile-change">
                    手机号变更
                </div>
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
            verifyCode: ''
        }
    },

    components:{
        HeadTop
    },
    methods:{
        submitForm () {
            // 1.提交用户所填表单
            // 2. 验证成功则跳转到首页
            // this.$router.push('/')
        },
        getVerifyCode () {
            // 1.验证文字验证码是否正确
            // 2.请求后台验证码接口
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
    }
    .container {
        padding: .5rem;
        font-size: .37333333rem;
        .title {
            font-size: .6rem;
            text-align: center;
            margin: 1rem 0;
        }
        .account-form {
            margin-top: 1rem;
        }
        .mobile-change {
            text-align: right;
            color: #aaa;
        }
    }

</style>