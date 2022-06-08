<template>
<div class="container" :class="{'active': inRegister}">
  <div class="card"></div>
  <div class="card">
    <h1 class="title">管理员登陆</h1>
    <form>
      <div class="input-container">
        <input type="text" v-model="name" required="required" />
        <label for="#{label}">输入账号</label>
        <div class="bar"></div>
      </div>
      <div class="input-container">
        <input type="password" v-model="password" required="required" />
        <label for="#{label}">输入密码</label>
        <div class="bar"></div>
      </div>
      <div class="button-container">
        <button @click.prevent="handleLogin"><span>登陆</span></button>
      </div>
    </form>
  </div>
  <div class="card alt">
    <div class="toggle" @click="inRegister = true;"></div>
    <h1 class="title">注册<div class="close" @click="inRegister=false"></div>
    </h1>
    <form>
      <div class="input-container">
        <input type="text"  disabled required="required" />
        <label for="#{label}">输入姓名</label>
        <div class="bar"></div>
      </div>
      <div class="input-container">
        <input type="text"  disabled required="required" />
        <label for="#{label}">输入手机号</label>
        <div class="bar"></div>
      </div>
      <div class="input-container">
        <input type="password"  disabled required="required" />
        <label for="#{label}">输入密码</label>
        <div class="bar"></div>
      </div>
      <div class="input-container">
        <input type="password"  disabled required="required" />
        <label for="#{label}">确定密码</label>
        <div class="bar"></div>
      </div>
      <div class="button-container"><button @click="handleRegister"><span>注册</span></button></div>
    </form>
  </div>
</div>
</template>

<script>
import {URL} from '../../constant/default'

export default {
  data() {
    this.$router.push('/inMess')

    return {
      name: "",
      password: "",
      login_ing: false, // 防止发起多个登陆请求
      inRegister: false,
    };
  },
  methods: {
    async handleLogin() {
      if (this.login_ing === true) return
      if (this.name === '' || this.password === '') {
        this.$message.error('账号或密码不能为空')
        return
      }
      
      const data = {
        username: this.name,
        password: this.password,
      }
      const options = { emulateJSON: true }
      const login_url = `${URL}/user/login`
      this.login_ing = true
      try {
        const { data: resData } = await this.$axios.post(login_url, data, options)
        if (resData.code == 200 && resData.msg == 'success') {
          this.$store.dispatch("userLogin", true)
          localStorage.setItem("Flag", "isLogin")
          this.$message.success('登陆成功')
          this.$router.push('/inMess')
        } else {
          this.$message.error(resData.msg)
        }
      } catch (error) {
        this.$message.error(error.message)
      }
      this.login_ing = false

    },

    handleRegister() {
      this.$message.error('暂不开放注册')
    },
  }
};
</script>

<style scoped>
@import url('./index.css');

</style>
