import { mande } from "mande";

const todosAPI = mande("https://qhungg289-todo.fly.dev/api/todos")
todosAPI.options.headers.Authorization = `Bearer ${localStorage.getItem("token")}`

export { todosAPI }