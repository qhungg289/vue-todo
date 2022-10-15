<script setup>
import ButtonPrimary from '../components/Button/ButtonPrimary.vue';
import ButtonSecondary from '../components/Button/ButtonSecondary.vue';
import { useUserStore } from '../stores/user'

const userStore = useUserStore()
</script>

<template>
    <div class="flex flex-col items-center justify-center gap-6 min-h-screen">
        <h1 class="font-serif font-bold text-5xl">V - Todo</h1>
        <div v-if="userStore.user" class="flex flex-col items-center gap-3">
            <p>Xin chào, <span class="font-semibold">{{ userStore.user.name }}</span>!</p>
            <router-link to="todos">
                <button-primary>Start using</button-primary>
            </router-link>
        </div>
        <div v-else class="flex gap-3">
            <router-link to="login">
                <button-primary>Log in</button-primary>
            </router-link>
            <router-link to="signup">
                <button-secondary>Sign up</button-secondary>
            </router-link>
        </div>
    </div>
</template>