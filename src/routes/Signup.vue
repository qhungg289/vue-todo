<script setup>
import { ref } from "vue"
import { useUserStore } from "../stores/user";

const name = ref("")
const email = ref("")
const password = ref("")
const passwordConfirmation = ref("")

const error = ref("")

const userStore = useUserStore()

function onSubmit() {
    if (password.value != passwordConfirmation.value) {
        error.value = "Password comfirmation does not match with your password."
        return
    }

    userStore.signup(name.value, email.value, password.value)
}
</script>

<template>
    <div class="flex flex-col items-center justify-center gap-6 min-h-screen">
        <h1 class="font-bold text-4xl">Sign up</h1>

        <form @submit.prevent="onSubmit" class="flex flex-col gap-4 w-2/3 max-w-md">
            <div class="flex flex-col gap-2">
                <label for="name" class="text-sm text-gray-600">Name</label>
                <input class="input input-bordered" v-model="name" type="text" name="name" id="name"
                    placeholder="Your full name..." required>
            </div>

            <div class="flex flex-col gap-2">
                <label for="email" class="text-sm text-gray-600">Email</label>
                <input class="input input-bordered" v-model="email" type="email" name="email" id="email"
                    placeholder="Your email..." required>
                <p class="text-red-500 font-semibold" v-if="userStore.error?.email">{{ userStore.error.email }}</p>
            </div>

            <div class="flex flex-col gap-2">
                <label for="password" class="text-sm text-gray-600">Password</label>
                <input class="input input-bordered" v-model="password" type="password" name="password" id="password"
                    min="6" placeholder="Your password...">
                <p class="text-red-500 font-semibold" v-if="userStore.error?.password">{{ userStore.error.password }}
                </p>
            </div>

            <div class="flex flex-col gap-2">
                <label for="password-confirm" class="text-sm text-gray-600">Confirm password</label>
                <input class="input input-bordered" v-model="passwordConfirmation" type="password"
                    name="password-confirm" id="password-confirm" min="6" placeholder="Confirm your password...">
                <p class="text-red-500 font-semibold" v-if="error">{{ error }}</p>
            </div>

            <button class="btn" type="submit">Sign up</button>
        </form>

        <p>Already have an account? <router-link to="/login" class="text-primary-focus font-semibold">Log in
            </router-link>
        </p>
    </div>
</template>