import { ref, watchEffect, computed } from "vue"
import { useRouter } from "vue-router"
import { defineStore } from "pinia"

const baseUrl = "https://qhungg289-todo.fly.dev/api/"

export const useUserStore = defineStore("user", () => {
    const user = ref(null)
    const error = ref(null)
    const isAuthenticated = computed(() => !!JSON.parse(localStorage.getItem("user")))

    watchEffect(() => {
        const userFromStorge = JSON.parse(localStorage.getItem("user"))

        if (userFromStorge) {
            user.value = userFromStorge
        }
    })

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
            localStorage.setItem("token", resData.token)
            localStorage.setItem("user", JSON.stringify(resData.user))
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
            localStorage.setItem("token", resData.token)
            localStorage.setItem("user", JSON.stringify(resData.user))
            error.value = null

            router.push("/")
        } catch (error) {
            console.error(error)
        }
    }

    return { user, error, login, signup, isLoggedIn: isAuthenticated }
})