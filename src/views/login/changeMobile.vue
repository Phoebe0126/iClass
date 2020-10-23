<template>
  <div class="wrapper">
      <HeadTop/>
      <div class="container">
            <h1 class="title">
                输入原注册手机号码
            </h1>
            <div class="form">
               <van-form submit="submitForm"  :show-error="false" :show-error-message="false"  @failed="formValidateFailed">
                    <div class="mobile block section">
                            <span class="area-code">+86</span>
                            <van-field
                                v-model="mobile"
                                name="手机号"
                                placeholder="输入手机号"
                                show-error="false"
                                show-error-message="false"
                                :rules="[{ required: true, message: '请填写手机号' },
                                { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！'}]"
                            />
                    </div>
                    <div class="submit">
                        <van-button block type="info" native-type="submit" color="#f49d3e">
                            下一步
                        </van-button>
                    </div>
               </van-form>
          </div>
           <span class="mobile-forget" @click="naviToConnectPage">
                    忘记原手机号
            </span>
      </div>
  </div>
</template>

<script>
import HeadTop from '@/components/header/Head'

export default {
    data () {
        return {
            mobile: ''
        }
    },
    components:{
        HeadTop
    },
    methods: {
        submitForm () {

        },
        naviToConnectPage () {
            this.$router.push('/connect')
        },
        // 表单校验失败
        formValidateFailed (errorInfo) {
            this.$toast(errorInfo.errors[0].message)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/mixin.scss";
.wrapper {
    @include wh(100%, 100%);
    background-color: #fff;
    position: fixed;
    .container {
        margin-top: 3rem;
        padding: 0 1rem;
        .title {
            color: #000;
        }
        .form {
            margin-top: 1rem;
            .van-field__control, .van-cell {
                font-size: .4rem;
            }
            .mobile {
                border: 2px solid #f5f5f4;
                border-radius: .2rem;
                @include flex(center);
                margin: .5rem 0;
                .area-code {
                    border-right: 1px solid #c1c1c1;
                    padding: 0 .2rem;
                    color: #000;
                    line-height: .4rem;
                    font-size: .4rem;
                }
            }
            .submit {
                margin: 1rem 0 .5rem 0;
                .van-button {
                    border-radius: .222rem;
                }
                .van-button__text {
                    color: #fff;
                }
            }
        }
        .mobile-forget {
            float: right;
            color: $oy;
        }
    }
}
</style>