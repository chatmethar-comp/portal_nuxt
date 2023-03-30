<template>
    <body class="overflow-hidden">
        <div class="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
            <div class="w-full lg:w-1/2 flex justify-center">
                <img class="hidden lg:block w-2/3" src="@/public/images/conversation.png" />
            </div>
            <div class="w-full lg:w-1/2">
                <h1 class="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800">Looks like you've found the doorway to the great nothing</h1>
                <p class="py-4 text-base text-gray-800">The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the link.</p>
                <p class="py-2 text-base text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
                <button @click="navigateTo('/')" class="w-full lg:w-auto my-4 border rounded-md px-1 sm:px-16 py-5 bg-primary text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-opacity-50">Go back to Homepage</button>
            </div>
        </div>
    </body>
</template>

<script setup>

</script>

<style scoped>

</style>
