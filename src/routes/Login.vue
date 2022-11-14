<script setup>
import { ref } from "vue"
import { useUserStore } from "../stores/user";

const email = ref("")
const password = ref("")

const userStore = useUserStore()
</script>

<template>
    <div class="flex flex-col items-center justify-center gap-6 min-h-screen">
        <h1 class="font-bold text-4xl">Log in</h1>

        <p v-if="userStore.error" class="text-red-500 font-semibold">{{ userStore.error.credentials }}</p>

        <form @submit.prevent="userStore.login(email, password)" class="flex flex-col gap-4 w-2/3 max-w-md">
            <div class="flex flex-col gap-2">
                <label for="email" class="text-sm text-gray-600">Email</label>
                <input class="input input-bordered" v-model="email" type="email" name="email" id="email"
                    placeholder="Your email..." required>
            </div>

            <div class="flex flex-col gap-2">
                <label for="password" class="text-sm text-gray-600">Password</label>
                <input class="input input-bordered" v-model="password" type="password" name="password" id="password"
                    placeholder="Your password..." required>
            </div>

            <button class="btn" type="submit">Log in</button>
        </form>

        <p>Don't have an account yet? <router-link to="/signup" class="text-primary-focus font-semibold">Sign up
            </router-link>
        </p>
    </div>
</template>