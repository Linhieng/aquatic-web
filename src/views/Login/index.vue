<script>
import {URL} from '../../constants/default'

export default {
  data() {

    return {
      name: "",
      password: "",
      login_ing: false, // 防止发起多个登陆请求
      inRegister: false,
    };
  },
  methods: {
    async handleLogin() {
      this.$router.push('/home')
      if (this.login_ing === true) return
      if (this.name === '' || this.password === '') {
        this.$msg.error('账号或密码不能为空')
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
          this.$store.commit("changeLogin", true)
          this.$msg.success('登陆成功')
          this.$router.push('/home')
        } else {
          this.$msg.error(resData.msg)
        }
      } catch (error) {
        this.$msg.error(error.message)
      }
      this.login_ing = false

    },

    handleRegister() {
      this.$msg.error('暂不开放注册')
    },
  }
};
</script>




<template>
<div id="login-container">
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
      <div class="button-container"><button @click.prevent="handleRegister"><span>注册</span></button></div>
    </form>
  </div>
</div>
</div>
</template>

<style lang="scss">
// Main Colors
$accent: null;
$white: #ffffff;
$black: #000000;

// Pen Settings
$primary: #363636;
$accent: var(--bg-color);

// Mixins
$level: 1;

@mixin materialShadow($level) {
  @if $level == 1 {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  @else if $level == 2 {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  @else if $level == 3 {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  @else if $level == 4 {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  @else if $level == 5 {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
}
@mixin transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}
@mixin transition($property) {
  -webkit-transition: $property;
  -ms-transition: $property;
  transition: $property;
}
/* Container */
.container {
  position: relative;
  width: 460px;
  display: inline-block;

  &.active {
    .card {
      &:first-child {
        background: darken($white, 5%);
        margin: 0 15px;
      }

      &:nth-child(2) {
        background: darken($white, 2%);
        margin: 0 10px;
      }

      &.alt {
        top: 20px;
        right: 0;
        width: 100%;
        min-width: 100%;
        height: auto;
        border-radius: 5px;
        padding: 60px 0 40px;
        overflow: hidden;

        .toggle {
          position: absolute;
          top: 40px;
          right: -70px;
          box-shadow: none;
          @include transform(scale(10));
          transition: transform .3s ease;

          &:before {
            content: '';
          }
        }

        .title,
        .input-container,
        .button-container {
          left: 0;
          opacity: 1;
          visibility: visible;
          transition: .3s ease;
        }

        .title {
          transition-delay: .3s;
        }

        .input-container {
          transition-delay: .4s;

          &:nth-child(2) {
            transition-delay: .5s;
          }

          &:nth-child(3) {
            transition-delay: .6s;
          }
        }

        .button-container {
          transition-delay: .7s;
        }
      }
    }
  }
}

/* Card */
.card {
  position: relative;
  background: $white;
  border-radius: 5px;
  padding: 60px 0 40px 0;
  box-sizing: border-box;
  @include materialShadow(1);
  transition: .3s ease;

  &:first-child {
    background: darken($white, 2%);
    height: 10px;
    border-radius: 5px 5px 0 0;
    margin: 0 10px;
    padding: 0;
  }

  /* Title */
  .title {
    position: relative;
    z-index: 1;
    border-left: 5px solid $accent;
    margin: 0 0 35px;
    padding: 10px 0 10px 50px;
    color: $accent;
    font-size: 32px;
    font-weight: 600;
    text-transform: uppercase;
  }

  /* Inputs */
  .input-container {
    position: relative;
    margin: 0 60px 50px;

    input {
      outline: none;
      z-index: 1;
      position: relative;
      background: none;
      width: 100%;
      height: 60px;
      border: 0;
      color: #212121;
      font-size: 24px;
      font-weight: 400;

      &:focus {
        ~ label {
          color: #9d9d9d;
          transform: translate(-12%, -50%) scale(0.75);
        }

        ~ .bar {
          &:before,
          &:after {
            width: 50%;
          }
        }
      }

      &:valid {
        ~ label {
          color: #9d9d9d;
          transform: translate(-12%, -50%) scale(0.75);
        }
      }
    }

    label {
      position: absolute;
      top: 0;
      left: 0;
      color: #757575;
      font-size: 24px;
      font-weight: 300;
      line-height: 60px;
      @include transition(0.2s ease);
    }

    .bar {
      position: absolute;
      left: 0;
      bottom: 0;
      background: #757575;
      width: 100%;
      height: 1px;

      &:before,
      &:after {
        content: '';
        position: absolute;
        background: $accent;
        width: 0;
        height: 2px;
        transition: .2s ease;
      }

      &:before {
        left: 50%;
      }

      &:after {
        right: 50%;
      }
    }
  }

  /* Button */
  .button-container {
    margin: 0 60px;
    text-align: center;

    button {
      outline: 0;
      cursor: pointer;
      position: relative;
      display: inline-block;
      background: 0;
      width: 240px;
      border: 2px solid #e3e3e3;
      padding: 20px 0;
      font-size: 24px;
      font-weight: 600;
      line-height: 1;
      text-transform: uppercase;
      overflow: hidden;
      transition: .3s ease;

      span {
        position: relative;
        z-index: 1;
        color: #ddd;
        transition: .3s ease;
      }

      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        background: $accent;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        margin: -15px 0 0 -15px;
        opacity: 0;
        transition: .3s ease;
      }

      &:hover,
      &:active,
      &:focus {
        border-color: $accent;

        span {
          color: $accent;
        }
      }

      &:active,
      &:focus {
        span {
          color: $white;
        }

        &:before {
          opacity: 1;
          @include transform(scale(10));
        }
      }
    }
  }

  /* Footer */
  .footer {
    margin: 40px 0 0;
    color: #d3d3d3;
    font-size: 24px;
    font-weight: 300;
    text-align: center;

    a {
      color: inherit;
      text-decoration: none;
      transition: .3s ease;

      &:hover {
        color: darken(#d3d3d3, 10%);
      }
    }
  }

  /* Alt Card */
  &.alt {
    position: absolute;
    top: 40px;
    right: -70px;
    z-index: 10;
    width: 140px;
    height: 140px;
    background: none;
    border-radius: 100%;
    box-shadow: none;
    padding: 0;
    transition: .3s ease;

    /* Toggle */
    .toggle {
      position: relative;
      background: $accent;
      width: 140px;
      height: 140px;
      border-radius: 100%;
      @include materialShadow(1);
      color: $white;
      font-size: 58px;
      line-height: 140px;
      text-align: center;
      cursor: pointer;

      &:before {
        content: '注册';
        display: inline-block;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: 40px;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transform: translate(0, 0);
      }
    }

    .title,
    .input-container,
    .button-container {
      left: 100px;
      opacity: 0;
      visibility: hidden;
    }

    /* Title */
    .title {
      position: relative;
      border-color: $white;
      color: $white;

      .close {
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 60px;
        display: inline;
        color: $white;
        font-size: 58px;
        font-weight: 400;

        &:before {
          content: '\00d7';
        }
      }
    }

    /* Input */
    .input-container {
      input {
        color: $white;

        &:focus {
          ~ label {
            color: $white;
          }

          ~ .bar {
            &:before,
            &:after {
              background: $white;
            }
          }
        }

        &:valid {
          ~ label {
            color: $white;
          }
        }
      }

      label {
        color: rgba($white, 0.8);
      }

      .bar {
        background: rgba($white, 0.8);
      }
    }

    /* Button */
    .button-container {
      button {
        width: 100%;
        background: $white;
        border-color: $white;

        span {
          color: $accent;
        }

        &:hover {
          background: rgba($white, 0.9);
        }

        &:active,
        &:focus {
          &:before {
            display: none;
          }
        }
      }
    }
  }
}

.container::before {
  content: '';
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  background: linear-gradient(60deg, rgb(255, 120, 17) 0, rgb(0, 162, 255) 100%);
}

#login-container {
  width: 530px;
  padding-top: 80px;
  margin: auto;
}
</style>