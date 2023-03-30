<template>
    <body>
        <div class="mx-auto container">

            <div class="py-4 mx-2 lg:py-20 lg:mx-14 flex justify-center items-center">
                <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-4 justify-center ">
                    <!-- start -->
                    <div class="w-full hover:shadow-lg shadow-none flex justify-center items-center flex-shrink-0 border rounded-md border-gray-200 h-full cursor-pointer">
                        <div class="inline-flex flex-col space-y-1.5 items-start justify-end flex-1 h-full px-4 py-5">
                            <div class="flex flex-row mb-4">
                                <div>
                                    <!-- poster image -->
                                    <img class="rounded-full w-8 h-8" :src="user" alt="avatar" />
                                </div>
                                <div class="ml-2">
                                    <p class="text-sm font-medium leading-none text-gray-800">Anita Jane</p>
                                    <div class="flex justify-start md:space-x-3 mt-1">
                                        <div class="flex justify-between text-white items-center">
                                            <!-- calendar -->
                                            <span class="material-icons-outlined text-gray-600 text-sm sm:text-xl">event</span>
                                            <p class="text-sm leading-none text-gray-600 ml-1">16 Mar 2021</p>
                                        </div>
                                        <div class="p-1 md-hidden"></div>
                                        <div class="flex justify-end text-white items-center">
                                            <!-- clock -->
                                            <span class="material-icons-outlined text-black text-sm sm:text-xl">
                                            schedule
                                            </span>
                                            <p class="text-sm leading-none text-gray-600 ml-1">7:26am</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                                <img src="https://images.unsplash.com/photo-1679954564570-8cf4a3d6ad23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80" class="aspect-square" alt="">
                            <p class="text-sm font-medium leading-none text-gray-800">Random Fact</p>
                            <p class="text-sm leading-tight text-gray-600">Erotomania is a psychological disorder where the sufferer has delusions that another person is in love with him or her...</p>
                            <div class="flex w-full justify-between">
                                <div class="flex flex-col md:flex-row md:gap-2">
                                    <div class="flex items-center">
                                        <span class="material-icons-outlined text-gray-600 text-lg sm:text-3xl">event</span>
                                        <p class="flex-1">22 Apr</p>
                                    </div>
                                    <div class="flex items-center">
                                        
                                        <span class="material-icons-outlined text-black text-lg sm:text-3xl">
                                            place
                                        </span>
                                        <p class="flex-1">17 building SCG</p>
                                    </div>
                                </div>
                                <avatar></avatar>
                            </div>
                        </div>
                    </div>
                    <!-- end -->
                    <div class="w-full hover:shadow-lg shadow-none flex justify-center items-center flex-shrink-0 border rounded-md border-gray-200 h-full cursor-pointer">
                        <div class="inline-flex flex-col space-y-1.5 items-start justify-end flex-1 h-full px-4 py-5">
                            <div class="flex flex-row mb-4">
                                <div>
                                    <img class="rounded-full" src="https://i.ibb.co/NmrRq3F/Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1.png" alt="avatar" />
                                </div>
                                <div class="ml-2">
                                    <p class="text-sm font-medium leading-none text-gray-800">Anita Jane</p>
                                    <div class="flex justify-start space-x-6 mt-1">
                                        <div class="flex justify-between text-white">
                                            <svg class="mr-1 fill-current" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 2.5H3C2.44772 2.5 2 2.94772 2 3.5V9.5C2 10.0523 2.44772 10.5 3 10.5H9C9.55228 10.5 10 10.0523 10 9.5V3.5C10 2.94772 9.55228 2.5 9 2.5Z" stroke="#4B5563" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M8 1.5V3.5" stroke="#4B5563" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M4 1.5V3.5" stroke="#4B5563" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M2 5.5H10" stroke="#4B5563" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <p class="text-sm leading-none text-gray-600">16 March, 2021</p>
                                        </div>
                                        <div class="flex justify-end text-white">
                                            <svg class="mx-1 fill-current" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5Z" stroke="#4B5563" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M6 3.5V6L7.5 7.5" stroke="#4B5563" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <p class="text-sm leading-none text-gray-600">7:26am</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="text-sm font-medium leading-none text-gray-800">Random Fact</p>
                            <p class="text-sm leading-tight text-gray-600">Erotomania is a psychological disorder where the sufferer has delusions that another person is in love with him or her...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script setup>
defineProps({
    user: {
        type: Object,
        default: '',
    }
})
</script>

<style scoped></style>
