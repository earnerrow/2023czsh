<template>
    <div class="regibox">
        <h1>{{route.query.id?'重置密码':'免费注册'}}</h1>
        <van-form @submit="onSubmit">
            <van-cell-group inset>
               
                    <van-field v-model="mobile" label="中国+86" clearable placeholder="请输入手机号" />
             
                <van-field v-model="code" name="用户名"  placeholder="用户名"
                    :rules="[{ required: true, message: '请输入4位验证码' }]">
                    <template #button >
                        <p @click="getcode"> 获取验证码</p>

                    </template>
                </van-field>

                <van-field v-if="codepass==false" v-model="password" @click-right-icon="changeicon" :type="codeorpwd?'password':'text'" clearable name="密码" :right-icon="codeorpwd?'eye-o':'closed-eye'"  placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]">
          
        </van-field>
        <van-field v-if="codepass==false" v-model="repassword" @click-right-icon="changeicon1" :type="codeorpwd1?'password':'text'" clearable name="密码" :right-icon="codeorpwd1?'eye-o':'closed-eye'"  placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]">
          
        </van-field>
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>
        <div class="bo">
            <van-checkbox v-model="checked" checked-color="#ee0a24"></van-checkbox>&nbsp 阅读并同意 <span>《用户协议》</span> 和 <span>《隐私政策》</span>
        </div>
        <imagecode :isshow="isshowpa" @close="close"></imagecode>
    </div>
</template>

<script setup lang="ts">
import imagecode from '../components/imagecode.vue'
import { getregisterapi,getcodeapi,getimagecodeapi } from '@/utils/api';
import { showFailToast } from 'vant';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route=useRoute()
const mobile = ref('');
const checked = ref(true);
const code = ref('');
const password = ref('');
const repassword = ref('');
let isshowpa=ref(false)
const onSubmit = () => {
    if (password.value == repassword.value) {
        getregisterapi({ mobile: mobile.value, code: code.value, pwd: password.value }).then(res => {
            console.log(res);

        })
    }

};
let close=(bo: boolean)=>{
isshowpa.value=bo
}
let changeicon=()=>{
  console.log(123);
  codeorpwd.value=!codeorpwd.value
}
let codeorpwd=ref(false)
let codepass=ref(false)
let changeicon1=()=>{
  console.log(123);
  codeorpwd.value=!codeorpwd.value
}
let codeorpwd1=ref(false)
let codepass1=ref(false)
const getcode=()=>{
console.log(13);
if(mobile.value==''){
    showFailToast('先输入手机号')
}else{
isshowpa.value=true
// 获取图片
getimagecodeapi({}).then(res=>{
    console.log(res);
    
})
}

}
</script>

<style scoped lang="scss">
.regibox{
    height: 100vh;
  background-color: #f8f8f8;
 overflow: hidden;
}
h1{
    margin: 30px 0 0 30px;
}
.van-button{
    background-color: #a3cdbf;
    border-radius: 5px;
    border: 0;
  }
.van-cell{
    background-color: #f8f8f8;
  }
.bo {
    position: relative;
    padding: 20px;
    display: flex;
position: absolute;
text-align: center;
bottom: 40px;
span{
  color: blue;
}
}
</style>