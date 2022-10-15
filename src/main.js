import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import { useUserStore } from './stores/user'

import Index from './routes/Index.vue'
import Login from './routes/Login.vue'
import Signup from './routes/Signup.vue'

const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Index },
        { path: '/signup', component: Signup },
        { path: '/login', component: Login },
    ]
})

router.beforeEach((to, from) => {
    const userStore = useUserStore()

    if (userStore.isLoggedIn && (to.path == '/signup' || to.path == '/login')) {
        return '/todos'
    }
})

app.use(createPinia())
app.use(router)

app.mount('#app')
