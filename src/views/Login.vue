<template>
<div id="background">
    <div class="container" @keyup.enter="handlelogin">
        <form action="">
          <h1>Login</h1>
          <div class="form">
              <div class="item">
                <label>账号：</label>
                <input type="text" name="username" v-model="name" placeholder="请输入账号">
                <br/>
              </div>
              <div class="item">
                <label>密码：</label>
                <input type="password" name="password" v-model="password" placeholder="请输入密码">
                <br/>
              </div>            
          </div>         
        </form>
              <button type="submit" @click.prevent="handlelogin">
                登录
                <span v-loading="login_ing" class="login_ing"></span>
              </button>
              <button  @click.prevent="handleregister">注册</button>
          <router-view></router-view>
    </div>
</div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      name: "",
      password: "",
      login_ing: false,
    };
  },
  methods: {
    async handlelogin() {
      if (this.login_ing === true) return

      const data = {
        username: this.name,
        password: this.password,
      }
      if (this.name === '' || this.password === '') {
        this.$message.error('账号或密码不能为空')
        return
      }

      const options = { emulateJSON: true }
      this.login_ing = true
      try {
        const { data: resData } = await this.$axios.post('http://cn-hk-nf-1.natfrp.cloud:17653/user/login', data, options)
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
    handleregister() {
      this.$router.push('/register')
    }
  }
};
</script>

//css
<style scoped>
::-webkit-input-placeholder {
  /*Webkit browsers*/
  color: white;
  font-size: 16px;
}

:-moz-placeholder {
  /*Mozilla Firefox 4 to 8*/
  color: white;
  font-size: 16px;
}

::moz-placeholder {
  /*Mozilla Firefox 19+*/
  color: white;
  font-size: 16px;
}

:-ms-input-placeholder {
  /*Internet Explorer 10+*/
  color: white;
  font-size: 16px;
}

#background {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  position: fixed;
  top: 0;
  left: 0;
}

.container {
  width: 1016px;
  height: 614px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #4596FF;
  text-align: center;
  border-radius: 4px;
  /* margin-top: 10px; */
}

.container h1 {
  color: #0c64c9;
  height: 96px;
  line-height: 96px;
  font-size: 48px;
}

.item {
  color: white;
  margin-left: 25%;
  margin-top: 45px;
  font-size: 24px;
  text-align: left;
}

.item label {
  float: left;
  width: 5em;
  margin-right: 1em;
  text-align: right;
  margin-top: 6px;
}

input {
  margin-left: -5px;
  padding: 4px;
  padding-left: 14px;
  border: solid 0.5px white;
  outline: 0;
  /* font: normal 13px/100% Verdana,Tahoma,sans-serif; */
  font-size: 16px;
  color: aliceblue;
  width: 308px;
  height: 40px;
  background: #4596FF;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
}

button {
  position: relative;
  height: 50px;
  width: 124px;
  background: #4596ff;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 74px;
  box-shadow: none;
  color: white;
  font-size: 16px;
  margin-left: 56px;
  border: solid 1px white;
}

.login_ing {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
