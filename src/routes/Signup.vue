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
    <div>
        <h1>Sign up</h1>

        <form @submit.prevent="onSubmit">
            <div>
                <label for="name">Name</label>
                <input v-model="name" type="text" name="name" id="name" required>
            </div>

            <div>
                <label for="email">Email</label>
                <input v-model="email" type="email" name="email" id="email" required>
                <p v-if="userStore.error?.email">{{ userStore.error.email }}</p>
            </div>

            <div>
                <label for="password">Password</label>
                <input v-model="password" type="password" name="password" id="password" min="6">
                <p v-if="userStore.error?.password">{{ userStore.error.password }}</p>
            </div>

            <div>
                <label for="password-confirm">Confirm password</label>
                <input v-model="passwordConfirmation" type="password" name="password-confirm" id="password-confirm"
                    min="6">
                <p v-if="error">{{ error }}</p>
            </div>

            <button type="submit">Sign up</button>
        </form>
    </div>
</template>