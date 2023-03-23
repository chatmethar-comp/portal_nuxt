<template>
    <div class="flex flex-col h-screen items-center justify-center ">
       <div class="flex flex-col gap-6 bg-primary-bright rounded-3xl px-40 py-8 items-center">
            <h2 class="text-6xl oswald font-bold text-primary">Portal</h2>
            <div class="bg-white px-4 py-4 rounded-md flex flex-col relative">
                <label v-if="info.email.length" class="absolute top-1 text-sm text-primary">Email</label>
                <input v-model="info.email" type="text" placeholder="Email" class="text-xl focus:outline-none w-96 mt-2">
            </div>
            <input type="password" placeholder="Password" class="bg-white px-4 py-2 rounded-md focus:outline-none w-full">
            <button type="submit" placeholder="Password" class="bg-white px-4 py-2 rounded-md focus:outline-none w-full uppercase">log in</button>
            <button type="submit" placeholder="Password" class="bg-blue-400 px-4 py-2 rounded-md focus:outline-none w-full">Log in with Google</button>
        </div>
    </div>
</template>

<script setup>

const info = ref({
    email: '',
    password: ''
})

definePageMeta({
    layout: 'custom'
})
</script>

<style lang="scss" scoped>

</style>