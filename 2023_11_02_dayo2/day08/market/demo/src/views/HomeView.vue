<script setup lang="ts">
import { onMounted } from 'vue';
import {getloginapi} from '../utils/api'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { showFailToast } from 'vant';
const router=useRouter()
const value = ref('');
const username = ref('');
const password = ref('');

const checked = ref(false);
const onSubmit = (values: any) => {
  if(checked.value==false){
 showFailToast('请先勾选同意')
  }
  if(codepass){
getloginapi({deviceId:16983106199973322818,deviceName:'pc',mobile:username.value,pwd:password.value}).then(res=>{
  console.log(res);
  
})
  }
};
let changeicon=()=>{
  console.log(123);
  codeorpwd.value=!codeorpwd.value
}
let codeorpwd=ref(false)
let codepass=ref(false)
let codelogin=()=>{
codepass.value=!codepass.value
}
onMounted(()=>{
  localStorage.setItem('token','954b8063-3260-4960-a70b-c21ba3c1bc16')
})
</script>

<template>
  <div class="loginbox">
    <h1>{{codepass?'验证码登录' :'账号密码登录'}}</h1>
    <p>为了你的账号安全,请用手机号登录</p>
    <van-form @submit="onSubmit">
      <van-cell-group inset>

       
          <van-field v-model="value" label="中国+86" clearable placeholder="请输入手机号"  />
  
        <van-field v-if="codepass==false" v-model="password" @click-right-icon="changeicon" :type="codeorpwd?'password':'text'" clearable name="密码" :right-icon="codeorpwd?'eye-o':'closed-eye'" label="密码" placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]">
          
        </van-field>
        <van-field v-else v-model="password"  clearable name="密码"   placeholder="密码"
          :rules="[{ required: true, message: '请输入四位验证码' }]">
          <template #button>
获取验证码
          </template>
        </van-field>
      </van-cell-group>
      <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
    </van-form>
    <div class="formunder">
      <div @click="codelogin">{{codepass? '密码登录':'验证码登录'}}</div>
      <div>
        <span  v-if="codepass==false" @click="router.push({ path:'/register',query:{id:1}})">忘记密码</span>
        <span style="margin-left: 7px;" @click="router.push({path:'/register'})">免费注册</span>
      </div>
    </div>

    <div class="bobox">
      <van-checkbox v-model="checked" ></van-checkbox>&nbsp 阅读并同意 <span>《用户协议》</span> 和 <span>《隐私政策》</span>

    </div>
  </div>
</template>
<style lang="scss" scoped>
.loginbox{
  position: relative;
  :deep(.van-field__button) {
  color: blue;
}
.bobox{
  display: flex;
position: absolute;
text-align: center;
bottom: 40px;
span{
  color: blue;
}
}
  height: 100vh;
  background-color: #f8f8f8;
  padding: 30px;
  .van-cell{
    background-color: #f8f8f8;
  }
  .van-button{
    background-color: #a3cdbf;
    border-radius: 5px;
    border: 0;
  }
  p{
    margin: 10px 0;
  }
  .formunder{
    margin: 10px;
    display: flex;
    justify-content: space-between;
    color: #aec7ec;
  }
}

</style>