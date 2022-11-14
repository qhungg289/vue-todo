import { ref } from "vue"
import { defineStore } from "pinia"
import { todosAPI } from "../api/todos"

export const useTodosStore = defineStore("todos", () => {
    const todos = ref([])

    function getAllTodos() {
        todosAPI.get()
            .then((res) => {
                todos.value = res.todos
            })
            .catch((err) => {
                console.error(err)
            })
    }

    function createNewTodo(content) {
        todosAPI.post({ content })
            .then((res) => {
                todos.value.push(res.todo)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    function updateTodo(id, content, isDone) {
        todosAPI.put(id, { content, is_done: isDone })
            .catch((err) => {
                console.error(err)
            })
    }

    function deleteTodo(id) {
        todosAPI.delete(id)
            .then(() => {
                todos.value = todos.value.filter((todo) => todo.id != id)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    return { todos, getAllTodos, createNewTodo, updateTodo, deleteTodo }
})