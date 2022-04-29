import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import inMess from '../components/inMess'
import inquireMess from '../components/inquireMess'
import statisticsMess from '../components/statisticsMess'
import Map from '../components/Map'
import userMess from '../components/userMess'
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
    meta: {
      isLogin:false
    }
  },
  {
    path:'/Home',
    name:'Home',
    component:Home,
    meta:{
      isLogin:true
    },
    children:[
      {
        path: '/inMess',
        name: 'inMess',
        component: inMess,
        meta: {
          isLogin:true
        }
      },
      {
        path: '/inquireMess',
        name: 'inquireMess',
        component: inquireMess,
        meta: {
          isLogin:true
        }
      },
      {
        path: '/statisticsMess',
        name: 'statisticsMess',
        component: statisticsMess,
        meta: {
          isLogin:true
        }
      },
      {
        path: '/map',
        name: 'map',
        component: Map,
        meta: {
          isLogin:true
        }
      },
      {
        path: '/userMess',
        name: 'userMess',
        component: userMess,
        meta: {
          isLogin:true
        }
      },
      
    ]
  },
  {
    path:"/login",
    name:"login",
    component:Login,
    meta: {
      isLogin:false
    }
  },
  {
    path:"/register",
    name:"register",
    component:Register,
    meta: {
      isLogin:false
    }
    
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next) => {
  let getFlag = localStorage.getItem("Flag")
  
  if(getFlag === 'isLogin'){
    store.state.isLogin = true
    next()
    if(!to.meta.isLogin) {
    alert("您已登录，如要重新登录请先退出登录")
      next({ path:'/inMess'})
    }
  } else {
    if (to.meta.isLogin){
      next({path : '/login'})
      alert("请先登录")
    } else {
      next()
    }
  }
})

export default router
