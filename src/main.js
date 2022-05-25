import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import { ElMessage } from 'element-plus'
// import 'element-plus/dist/index.css'
import '../public/style-theme.scss'
import '../public/style-color.css'
import axios from 'axios'

const app = createApp(App)

app.config.globalProperties.$axios = axios
app.config.globalProperties.$msg = ElMessage

app.use(store)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
