import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import Index from './routes/Index.vue'

const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Index }
    ]
})

app.use(router)

app.mount('#app')
