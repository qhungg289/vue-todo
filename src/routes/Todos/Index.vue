<script setup>
import { onMounted, ref } from "vue"
import { useTodosStore } from "../../stores/todos"

const todoContent = ref("")
const todoInputRef = ref(null)

const todosStore = useTodosStore()

onMounted(() => {
    todoInputRef.value.focus()
    todosStore.getAllTodos()
})

function handleSubmit() {
    todosStore.createNewTodo(todoContent.value)
    todoContent.value = ""
}
</script>

<template>
    <div class="container max-w-2xl space-y-6">
        <router-link to="/">
            <h1 class="font-bold text-4xl my-8">Vodo</h1>
        </router-link>

        <form @submit.prevent="handleSubmit" class="flex justify-around gap-2">
            <input ref="todoInputRef" class="input input-bordered w-full" v-model="todoContent"
                placeholder="New todo...">
            <button class="btn btn-primary" type="submit">Create</button>
        </form>

        <ul class="divide-y-2 divide-gray-100">
            <li v-for="todo in todosStore.todos" :key="todo.id" class="py-4 flex items-center justify-between">
                <span class="flex items-center gap-2"
                    @click="todosStore.updateTodo(todo.id, todo.content, todo.is_done == 1 ? 0 : 1)">
                    <input type="checkbox" v-model="todo.is_done" :true-value="1" :false-value="0" :id="todo.id"
                        class="checkbox checkbox-secondary">
                    <label :class="{ 'line-through opacity-50': todo.is_done }" class="cursor-pointer" :for="todo.id">{{
                            todo.content
                    }}</label>
                </span>
                <button @click="todosStore.deleteTodo(todo.id)" class="hover:text-rose-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </li>
        </ul>
    </div>
</template>