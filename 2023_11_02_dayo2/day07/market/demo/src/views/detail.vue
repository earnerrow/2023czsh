<template>
    <div class="debox">
<!-- <img :src="detail.pic" class="img" alt=""> -->
<div class="info">
    <div class="nowprice"></div>
<div class="past"></div>
<div class="title"></div>
<div class="desc"></div>
<div class="last">{{ }}</div>
</div>
<div class="bottom">
    <van-cell title="领券" is-link />
    <van-action-bar>
  <van-action-bar-icon icon="chat-o" text="客服"    />
  <van-action-bar-icon icon="cart-o" text="购物车" @click="add" badge="12"  />
  <van-action-bar-icon icon="shop-o" text="店铺"    />
  <van-action-bar-button type="warning" @click="addcar" text="加入购物车" />
  <van-action-bar-button type="danger" text="立即购买" />
</van-action-bar>
</div>
    </div>
</template>

<script setup lang="ts">
import { isDate } from 'moment';
import {getdetailapi,getaddshopapi} from '../utils/api'
import { onMounted, ref } from 'vue'
import {useRoute} from 'vue-router'
const route=useRoute()
let token=localStorage.getItem('token')
let detail=[]
let ids=route.query.id
onMounted(()=>{

console.log(ids);
 getdetailapi({goodsId:ids,page:1,pageSize:1}).then(res=>{
     console.log(res);
     detail=res.data.result[0].goods
     console.log(detail);
     
 })
})
const add=()=>{
    console.log(13);
    
}
const addcar=()=>{
getaddshopapi({token:token,goodsId:ids,number:1}).then(res=>{
    console.log(res);
    
})
}
</script>

<style lang="scss" scoped>
.debox{
    background-color: #ccc;
}
</style>