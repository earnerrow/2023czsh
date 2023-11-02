<template>
    <div class="box" v-show="isshow">
        <div class="main">
            <div class="top">
                <span>请完成安全验证</span><span @click="$emit('close',asx)">x</span>
            </div>
            <div class="bodybox">
<div class="first">
    <input type="text" class="inp" placeholder="输入验证码">
    <img src="" alt="">
</div>
<div class="second">
    看不清,换一张
</div>
<van-button type="primary" size="large">大号按钮</van-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps(['isshow'])
let asx=false
</script>

<style lang="scss" scoped>
.box {

    width: 100%;
    height: 100vh;
    background: rgba(74, 74, 74, 0.5);
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;

    .main {
        width: 80%;
        margin: 200px auto;
        height: 200px;
        background-color: #fff;
        border-radius: 5px;

        .top {
            padding: 10px;
            border-bottom: 1px solid #ccc;
            justify-content: space-between;
            line-height: 40px;

            span {
                &:nth-child(1) {
                    font-size: 20px;
                }

                &:nth-child(2) {
                    font-size: 26px;
                    float: right;
                }
            }
        }
        .bodybox{
            padding: 10px;
.first{
    display: flex;
}
.second{
    text-align: right;
    color: red;
    margin: 10px 0;
}
        }
    }
}</style>