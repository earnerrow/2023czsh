import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'



const app = createApp(App)
import Vant from 'vant'
import 'vant/lib/index.css';
app.use(createPinia())
app.use(router)
app.use(Vant)
app.mount('#app')
