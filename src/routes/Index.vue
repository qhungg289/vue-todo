<script setup>
import { useUserStore } from '../stores/user'

const userStore = useUserStore()
</script>

<template>
    <div class="flex flex-col items-center justify-center gap-6 min-h-screen">
        <h1 class="font-bold text-9xl">Vodo</h1>
        <div v-if="userStore.user" class="flex flex-col items-center gap-4">
            <p>Hello, <span class="font-semibold">{{ userStore.user.name }}</span>!</p>
            <div class="flex gap-3">
                <router-link to="todos">
                    <button class="btn btn-primary">Start using</button>
                </router-link>
                <button class="btn btn-secondary" @click="userStore.logout">Log out</button>
            </div>
        </div>
        <div v-else class="flex gap-3">
            <router-link to="login">
                <button class="btn btn-primary">Log in</button>
            </router-link>
            <router-link to="signup">
                <button class="btn btn-secondary">Sign up</button>
            </router-link>
        </div>
    </div>
</template>