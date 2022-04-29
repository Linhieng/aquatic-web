<template>
    <div id="background">
      <div id="contain">
        <h1>Register</h1>
        <form action="">
          <div class="form">
          <label>姓名：</label><input type="text" v-model.trim="name"><br/>
        </div>
        <div class="form">
          <label>账号：</label><input type="text" maxlength="11" v-model.trim="phone" @blur="checkphone()"><br/>
        </div>
        <div class="form">
          <label>密码：</label><input type="password" minlength="6" v-model.trim="password" @blur="checkpassword()" autocomplete="off" ><br/>
        </div>
        <div class="form">          
          <label>确认密码：</label><input type="password" v-model.trim="repassword" autocomplete="off"><br/>
        </div>
        <button @click.prevent="register">提交</button>
        <button @click.prevent="returnLogin">返回登录</button>
        </form>
      </div>
    </div>
</template>
<script>
export default {
    name:'register',
    data(){
        return{
        name:"",
        phone:'',
        password:"",
        repassword:"",       
    }
    },
    methods:{
    //点击完成按钮触发handlefinish
        register()
        {
          
          this.$axios.post('http://192.168.31.43/user/reg',{
            name:this.name,
            phone:this.phone,
            password:this.password
          },{emulateJSON:true})
          .then(res => {
            console.log(res);
            if(this.name === "" || this.phone === "" || this.password === ""){
              alert("输入不得为空")
            }else{
              if(this.repassword === this.password){
                
                if(res.data.code != 200){
                  console.log(1234567);
                  this.$message.error("该账号已被注册！")
                }else {
                  this.$message.success(res.data.msg)
                  this.$router.replace({
                  path:'/login'})
                }             
              }else {
                this.$message.error('前后两次密码输入不一致，请重新输入正确密码')
               }
            }   
          })

        },
        returnLogin(){
          this.$router.replace('/Login');
        },
        checkphone(){
           var re = 11 && /^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/;
           let str = this.phone;
           if(re.test(str)){
               
           }else {
               this.$message.error("手机号码格式不正确")
          }
        },
        checkpassword(){
          if(this.password.length>=6){
          }else {
            this.$message.error("密码至少为六位数")
            
          }
        }
        
        
    }
    };
</script>

//css
<style scoped>
::-webkit-input-placeholder{/*Webkit browsers*/
    color:white;
    font-size:16px;
}
:-moz-placeholder{/*Mozilla Firefox 4 to 8*/
   color:white;
   font-size:16px;
}
::moz-placeholder{/*Mozilla Firefox 19+*/
   color:white;
   font-size:16px;
}
:-ms-input-placeholder{/*Internet Explorer 10+*/
    color:white;
    font-size:16px;
}
#background{
    width: 100%;
    height: 100%;
    background-size:100% 100%;
    position: fixed;
    top: 0;
    left: 0;
}
#contain{
  width: 1016px;
  height: 614px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: #4596ff;;
  text-align: center;
  border-radius: 20px;
}
#contain h1{
  color: #0c64c9;
  height: 96px;
  line-height: 96px;
  font-size: 48px;
}
.form{
  color: white;
  margin-left: 25%;
  margin-top: 45px;
  font-size: 24px;
  text-align: left;
}
label{
  float:left;
  width: 5em;
  margin-right: 1em;
  text-align: right;
  margin-top: 6px;
}
input,textarea{
  margin-left: 10px;
  padding: 4px;
  border: solid 0.5px white;
  outline: 0;
  font-size: 16px;

  width: 308px;
  height: 40px;
  background:#4596ff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
}
input:hover,textarea:hover,input:focus,textarea:focus{border-color:#0d0aa1;}
button{
  position: relative;
  height: 50px;
  width: 124px;
  background: #4596ff;
  border-radius: 4px;
  margin-top: 40px;
  box-shadow: none;
  color: white;
  margin-left: 56px;
  font-size: 16px;
  border: solid 1.5px white;
}
</style>
