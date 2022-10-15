import { ref, computed } from "vue"
import { useRouter } from "vue-router"
import { defineStore } from "pinia"
import { useStorage, StorageSerializers } from "@vueuse/core"

const baseUrl = "https://qhungg289-todo.fly.dev/api/"

export const useUserStore = defineStore("user", () => {
    const user = useStorage("user", null, localStorage, { serializer: StorageSerializers.object })
    const token = useStorage("token", null, localStorage, { serializer: StorageSerializers.string })
    const error = ref(null)
    const isAuthenticated = computed(() => !!user.value)
    const router = useRouter()

    async function login(email, password) {
        try {
            const res = await fetch(baseUrl + "login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            })

            if (!res.ok && res.status == 401) {
                error.value = { credentials: "Credentials does not match." }
                return
            }

            const resData = await res.json()

            console.log(resData)
            user.value = resData.user
            token.value = resData.token
            error.value = null

            router.push("/")
        } catch (error) {
            console.error(error)
        }
    }

    async function signup(name, email, password) {
        try {
            const res = await fetch(baseUrl + "signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, password })
            })

            const resData = await res.json()

            if (!res.ok && res.status == 401) {
                error.value = {
                    email: resData.email[0],
                    password: resData.password[0]
                }
                return
            }

            user.value = resData.user
            token.value = resData.token
            error.value = null

            router.push("/")
        } catch (error) {
            console.error(error)
        }
    }

    async function logout() {
        try {
            await fetch(baseUrl + "logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token.value}`
                },
            })

            user.value = null
            token.value = null

            location.reload()
        } catch (error) {
            console.error(error)
        }
    }

    return { user, error, login, signup, logout, isAuthenticated }
})