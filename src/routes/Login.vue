<script setup>
import { ref } from "vue"
import { useUserStore } from "../stores/user";

const email = ref("")
const password = ref("")

const userStore = useUserStore()
</script>

<template>
    <div>
        <h1>Log in</h1>

        <p v-if="userStore.error" class="text-red-500 font-semibold">{{ userStore.error.credentials }}</p>

        <form @submit.prevent="userStore.login(email, password)">
            <div>
                <label for="email">Email</label>
                <input v-model="email" type="email" name="email" id="email" required>
            </div>

            <div>
                <label for="password">Password</label>
                <input v-model="password" type="password" name="password" id="password" required>
            </div>

            <button type="submit">Log in</button>
        </form>
    </div>
</template>