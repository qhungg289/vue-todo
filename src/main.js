import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'

import Index from './routes/Index.vue'
import Login from './routes/Login.vue'
import Signup from './routes/Signup.vue'
import Todos from './routes/Todos/Index.vue'

const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Index,
        },
        {
            path: '/signup',
            component: Signup,
            beforeEnter: () => {
                const token = localStorage.getItem('token')
                if (token) {
                    return '/'
                }
            }
        },
        {
            path: '/login',
            component: Login,
            beforeEnter: () => {
                const token = localStorage.getItem('token')
                if (token) {
                    return '/'
                }
            }
        },
        {
            path: '/todos',
            component: Todos,
            beforeEnter: () => {
                const token = localStorage.getItem('token')
                if (!token) {
                    return '/login'
                }
            }
        }
    ]
})

app.use(router)
app.use(createPinia())

app.mount('#app')
