<template>
    <div class="box">
        <van-sidebar v-model="active" @change="changecate(active)">
  <van-sidebar-item  :title="item.name" v-for="item,index in first" :key="item.name" />
 
</van-sidebar>
<div class="right">
    <div class="ritem" v-for="item,index in catelist" :key="index">
<img :src="item.pic" class="img" alt="">
<p>{{ item.name }}</p>
<div class="price">{{ item.originalPrice }}</div>
    </div>
</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getcateapi,getcatesapi } from '@/utils/api';
import { onMounted } from 'vue';
import { reactive } from 'vue';
let first:any=ref([])
let two: never[]=[]
  const active = ref(0);
  let catelist=ref()
  let token=localStorage.getItem('token')
  onMounted(()=>{
    getcateapi({token:token}).then(res=>{
        console.log(res);
        first.value=res.data
     two=res.data
        
    })
    getcates()
  })
  let a: any
  const getcates=()=>{
    getcatesapi({categoryId:a,page:1,token:token,pageSize:10}).then(res=>{
        console.log(res);
        catelist.value=res.data.result
    })
  }
  let changecate=(index: any)=>{
    console.log(index);
    
    // console.log(active.value);
a=  two[index]
    console.log(a);
    
    getcatesapi({categoryId:a.id,page:1,token:token,pageSize:10}).then(res=>{
        console.log(res);
        catelist.value=res.data.result
    })
  }
</script>

<style scoped>
.box{
    display: flex;
    .right{
        width: 70%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .ritem{
width: 50%;
text-align: center;
.img{
    width: 100%;
    height: 120px;
}
p{
height: 60px;
}
div{
    color: #57a288;
text-align: left;
}
        }
    }
}
</style>