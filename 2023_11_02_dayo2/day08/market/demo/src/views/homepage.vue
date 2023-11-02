<template>
  <div class="aboutbox">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="item,index in bannerlist" :key="item.picUrl">
    <van-image
  width="100%"
  height="250"
  :src="item.picUrl"
/>
  </van-swipe-item>
 
</van-swipe>

<div :class="isblack?'mainw': 'mainb' ">
  <div class="changebgcolor" @click.native="whiteblack"></div>
  <div class="totop"></div>
  <div :class="isblack?'title1': 'title'">商品列表</div>
<div class="listbox">
  <div class="listitem" v-for="item,index in homelist" @click="godetail(item.id)" :key="index">
    <div class="recom" v-if="item.recommendStatusStr=='推荐' ">
      {{ item.recommendStatusStr }}
    </div>
    <img :src="item.pic" class="img" alt="">
<div class="desc">{{ item.name }}</div>
<div class="bott">
  <div class="left"><span>￥</span><span>1</span><span>199</span></div>
<div class="right">购买</div>
</div>
</div>
</div>
</div>
<van-back-top immediate bottom="60" />
  </div>
</template>

<script setup lang="ts">
let a=document.documentElement.scrollTop
  console.log(a);
import { getbannerapi,getlistapi } from '@/utils/api';
import { reactive } from 'vue';
import { onMounted, ref } from 'vue';
import {useRouter} from 'vue-router'
const router=useRouter()
let token=localStorage.getItem('token')
let bannerlist=ref()
let params={
  token:token,
  page:1,
  pageSize:10
}
let istop=ref(false)
let isblack=ref(false)
let homelist=ref()
let jia: any[]=[]
onMounted(()=>{
  
  
  getbannerapi({token:token,type:'indexBanner'}).then(res=>{
    console.log(res);
    bannerlist.value=res.data
  })
  getlistapi(params).then(res=>{
    console.log(res);
    homelist.value=res.data.result
    jia=res.data.result
    console.log(jia);
    
  })
})
const whiteblack=()=>{
  console.log(465);
  isblack.value=!isblack.value
}
const godetail=(id: any)=>{
  console.log(id);
  
router.push({path:'/detail',query:{id:id}})
}

</script>

<style scoped lang="scss">
.aboutbox{
  overflow: hidden;
  .mainb{
   
    background-color: black;
    width: 100%;
   
   
  }
  .mainw{
    background-color: white;
   
    
  }
  .totop{
    display: none;
    position: fixed;
    right: 30px;
      bottom: 120px;
      width: 50px;
      height: 50px;
      background-color: #50a586;
      border-radius: 50%;
      z-index: 4;
  }
  .changebgcolor{
      width: 50px;
      height: 50px;
      background-color: #50a586;
      border-radius: 50%;
      position: fixed;
      right: 30px;
      bottom: 140px;
     z-index: 99;
    }
  .title{
    margin: 10px auto;
    width: 100%;
    color: #fff;
    text-align: center;
  }
  .title1{
    margin: 10px auto;
    width: 100%;
    color:black;
    text-align: center;
  }
  .listbox{
    padding: 0 10px;
    width: 98%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .listitem{
      border-radius: 5px;
      width: 49%;
      border-top-right-radius: 5px;
       border-top-left-radius: 5px;
       position: relative;
      .img{
       border-top-right-radius: 5px;
       border-top-left-radius: 5px;
        width: 100%;
        height: 50%;
      }
      .desc{
padding: 5px 15px;
overflow: hidden;

text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
}

      .bott{
padding: 0 15px;
display: flex;
justify-content: space-between;
       .left{
        :nth-child(1){
          color: #4d9c81;
          font-size: 12px;
        }
        :nth-child(2){
          color: #4d9c81;
          font-size: 16px;
        }
        :nth-child(3){
          text-decoration: line-through;
          color: #ccc;
        }
       }
       .right{
        color: #4d9c81;
        border: 1px solid #4d9c81 ;
        padding: 1px 3px;
        text-align: center;
        border-radius: 5px;
       }
      }
      .recom{
        position: absolute;
        left: 0;
        top: 25px;
        text-align: center;
        padding: 2px 4px;
        color: #fff;
        background-color: red;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
  }
}
</style>