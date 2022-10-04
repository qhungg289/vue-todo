<script setup>
    import ButtonPrimary from '../components/Button/ButtonPrimary.vue';
    import ButtonSecondary from '../components/Button/ButtonSecondary.vue';
</script>

<template>
    <div class="flex flex-col items-center justify-center gap-6 min-h-screen">
        <h1 class="font-serif font-bold text-5xl">V - Todo</h1>
        <div class="flex gap-3">
            <router-link to="login">
                <button-primary>Đăng nhập</button-primary>
            </router-link>
            <router-link to="signup">
                <button-secondary>Đăng ký</button-secondary>
            </router-link>
        </div>
    </div>
</template>