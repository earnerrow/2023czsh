<template>
    <div class="box">
        <van-empty description="登陆后才能看到购物车" v-if="!token" />
        <van-empty description="快饿扁了" v-if="goods.length==0" />
        <van-button type="success" round v-if="!token">去登陆</van-button>
        <div class="carbox">
            <div class="top">
                <div class="lefticon">
                    <van-icon name="chat-o" /> 购物车
                </div>
       
        <div class="edit" @click="edit">编辑</div>
    </div>
<div class="caritem" v-for="item,index in goods" :key="index">
    <van-checkbox v-model="checked"></van-checkbox>
    <van-card

  :price="item.price"
  :desc="item.name"
 
  :thumb="item.pic"
>
 
  <template #footer>
    <van-stepper v-model="item.number" />
   
  </template>
</van-card>

</div>
        </div>
        <van-submit-bar :price="3050" @click="deortot" :button-text="isbot?'去结算':'删除'" @submit="onSubmit">
  <van-checkbox v-model="checked">全选</van-checkbox>

</van-submit-bar>
    </div>
</template>

<script setup>
import {getshopapi,getdeleteapi} from '../utils/api'
import {onMounted,ref} from 'vue'
let token=localStorage.getItem('token')
const checked = ref(true);
const value = ref(1);
let goods=ref([])
onMounted(()=>{
    getshopapi({token:token}).then(res=>{
        console.log(res);
goods.value=res.data.items
    })
})
const onSubmit = () => showToast('点击按钮');
let isbot=ref(true)
let edit=()=>{
isbot.value=!isbot.value
}
// let key=
let deortot=()=>{
    if(isbot.value){
        return 
    }else{
        // getdeleteapi({key:}).then(res=>{
        //     console.log(res);
        // })
    }
}
</script>

<style lang="scss" scoped>
.box{
    text-align: center;
    padding: 10px;
    background-color: #ccc;
    height: 100vh;
    .carbox{
        background-color: #fff;
        border-radius: 5px;
.top{
    display: flex;
    justify-content: space-between;
    padding: 5px;
}
.caritem{
    display: flex;
    align-items: center;
}
    }
}
.van-submit-bar{
    margin-bottom: 49px;
    background-color: #fff;
}
::deep() {
    .van-card__bottom{
        text-align: left;
    }
    
}
.van-card{
    width: 90%;
}
.van-cell-group{
    background-color: #f8f8f8;
}
</style>