<template>
    <div>
<router-view></router-view>
<van-tabbar v-model="active" route>
  <van-tabbar-item icon="home-o" to="/homepage">首页</van-tabbar-item>
  <van-tabbar-item icon="search" to="/classify">分类</van-tabbar-item>
  <van-tabbar-item icon="friends-o" to="/shopcar">购物车</van-tabbar-item>
  <van-tabbar-item icon="setting-o" to="mycenter">个人中心</van-tabbar-item>
</van-tabbar>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
let isblack=ref(false)
const whiteblack=()=>{
  console.log(425);
  isblack.value=!isblack.value
}
const active = ref(0);
</script>

<style scoped>
.van-tabbar{
  z-index: 999;
}
</style>