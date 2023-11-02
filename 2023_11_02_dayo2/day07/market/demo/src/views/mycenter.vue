<template>
    <div class="my">
        <div class="top">
            <div class="topson">
                <img src="" class="img" alt="">
                <div><span>登录</span>/<span>注册</span></div>
            </div>

        </div>
        <div class="second">
            <div class="secitem">
                <van-icon name="card" />
                <div>积分</div>
            </div>
            <div class="secitem">
                <van-icon name="card" />
                <div>积分</div>
            </div>
            <div class="secitem">
                <van-icon name="card" />
                <div>积分</div>
            </div>
        </div>
        <div class="three">
            <van-cell title="我的订单" is-link value="查看全部订单" />
            <div class="two">
            <div class="twoitem">
                <van-icon name="card" />
                <div>积分</div>
            </div>
            <div class="twoitem">
                <van-icon name="card" />
                <div>积分</div>
            </div>
            <div class="twoitem">
                <van-icon name="card" />
                <div>积分</div>
            </div>
            <div class="twoitem">
                <van-icon name="card" />
                <div>积分</div>
            </div>
            <div class="twoitem">
                <van-icon name="card" />
                <div>积分</div>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { getmyinfoapi } from '../utils/api'
let token=localStorage.getItem('token')
onMounted(() => {
getmyinfoapi({token:token}).then(res=>{
    console.log(res);
    
})
})
</script>

<style lang="scss" scoped>
.my {
    height: 100vh;
    width: 100%;
    background-color: #ccc;

    .top {
        background-color: #50a586;
        padding: 10px;

        .topson {
            display: flex;
            align-items: center;
            height: 80px;
        }

        .img {
            width: 40px;
            height: 40px;
            background-color: #fff;
            border-radius: 50%;
        }
    }
    .second{
        margin: 10px auto;
        border-radius: 5px;
        height: 60px;
        padding: 10px;
        width: 90%;
        background-color: #fff;
        display: flex;
        justify-content: space-around;
        align-items:center ;
        text-align: center;
    }
    .three{
       width: 90%;
       margin: 0 auto;
       border-top-left-radius: 5px;
       border-top-right-radius: 5px;
        .two{
           width: 100%;
       border-bottom-left-radius: 5px;
       border-bottom-right-radius: 5px;
        height: 60px;
       
       
        background-color: #fff;
        display: flex;
        justify-content: space-around;
        align-items:center ;
        text-align: center;
        }
    }
}
.van-cell{
    border-top-left-radius: 5px;
       border-top-right-radius: 5px;
}
</style>