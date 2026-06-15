import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' 
import App from './App.vue'
import router from './router'
import './style.css'

// 1. Importás Bootstrap básico y los estilos de la versión de Vue 3
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css' // 👈 Ojo que cambió la ruta

// 2. Importás el plugin de BootstrapVueNext
import { createBootstrap } from 'bootstrap-vue-next'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate) 
app.use(pinia)
app.use(router)

// 3. Le decís a tu app de Vue 3 que use Bootstrap
app.use(createBootstrap()) 

app.mount('#app')