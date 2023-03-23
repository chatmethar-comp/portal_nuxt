<script setup>
const toggleMenu = () => {

    var icon = document.getElementById('bgIcon');
    const childEle = icon.children;

    childEle[0].classList.toggle('hidden');
    childEle[1].classList.toggle('hidden');

    var mobileNav = document.getElementById('MobileNavigation').classList.toggle('hidden');
                
}
</script>
<template>
    <div class=" bg-white shadow-md md:shadow-none">
        <nav class="2xl:container 2xl:mx-auto sm:py-4 sm:px-7 py-2 px-4">
            <div class="flex justify-between items-center"> 
                <div class=" flex space-x-2 items-center">
                    <img id="logo" class="p-1 w-12 h-12 md:w-14 md:h-14 bg-white " src="https://i.ibb.co/2KsVCXf/Single-gimmick-logo.png" alt="circle" />
                    <h1 class="text-2xl md:text-3xl leading-6 text-gray-800 dark:text-primary oswald font-black " >Portal</h1>
                </div>
                <div class="hidden sm:flex flex-row space-x-4">
                    <button class="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-primary-dark bg-white border border-primary-dark focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center" >Sign Up</button>
                    <button @click="navigateTo('/login')" class="rounded-md flex space-x-2 w-24 h-10 font-black text-sm leading-3 text-white bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark focus:bg-primary-light hover:bg-primary duration-150 justify-center items-center" >Log In</button>
                </div>


                <div id="bgIcon" @click="toggleMenu()"  class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  flex justify-center items-center sm:hidden cursor-pointer">
                    <img class="border border-primary p-1 rounded-md" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg6.svg" alt="burger" />
                    <img class="border border-primary p-1 rounded-full duration-150 hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg7.svg" alt="cross" />                                                               
                </div>
            </div>


            <div id="MobileNavigation" class="hidden sm:hidden mt-4 mx-auto">
                <div class="flex flex-col gap-3 mt-4 mx-auto w-full ">
                    <button class="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-primary-dark bg-white  duration-100 border focus:outline-none focus:bg-gray-200 hover:bg-gray-200  justify-center items-center" >Sign Up</button>
                    <button @click="navigateTo('/login')" class="rounded-md flex space-x-2 w-full h-10 font-black text-sm leading-3 text-white bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark focus:bg-primary-light hover:bg-primary-dark duration-150 justify-center items-center" >Log In</button>
                </div>
            </div>
        </nav>    
    </div>

</template>

<style scoped>
#logo{
    max-height: 100%; max-width: 100%;
}
</style>