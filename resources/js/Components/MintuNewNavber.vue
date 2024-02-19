<script setup>
import {onMounted, ref} from 'vue';
import {useTimeoutPoll} from '@vueuse/core'



const toggleNav = ref(false);
const isHovering = ref(false);



const {isActive,resume,pause} = useTimeoutPoll(()=>{
    if(toggleNav.value && isHovering.value ===false){

        toggleNav.value = false;
        console.log(toggleNav.value+"::"+isHovering.value);
       // alert("Hovering");
    }

},3000)



onMounted(()=>{
resume();
});

</script>

<template>
<div>

    <header class="pb-6 bg-white lg:pb-0">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <!-- lg+ -->
            <nav class="flex items-center justify-between h-16 lg:h-20">
                <div class="flex-shrink-0">
                    <a href="#" title="" class="flex">
                        <img class="w-auto h-8 lg:h-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />
                    </a>
                </div>

                <button @click="toggleNav = !toggleNav" type="button" class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                    <!-- Menu open: "hidden", Menu closed: "block" -->
                    <svg :class="toggleNav ? 'hidden': 'block'" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                    </svg>

                    <!-- Menu open: "block", Menu closed: "hidden" -->
                    <svg :class="toggleNav ? 'block': 'hidden'" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div class="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                    <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>

                    <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Solutions </a>

                    <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Resources </a>

                    <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Pricing </a>
                </div>

                <a href="#" title="" class="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button"> Get started now </a>
            </nav>

            <!-- xs to lg -->
            <nav @mouseover="isHovering = true" @mouseleave="isHovering = false"  :class="toggleNav ? 'block': 'hidden'" class="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden transition-all duration-1000">
                <div class="flow-root" >
                    <div class="flex flex-col px-6 -my-2 space-y-1">
                        <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>

                        <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Solutions </a>

                        <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Resources </a>

                        <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Pricing </a>
                    </div>
                </div>

                <div class="px-6 mt-6">
                    <a href="#" title="" class="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700" role="button"> Get started now </a>
                </div>
            </nav>
        </div>
    </header>


</div>
</template>

<style scoped>

</style>
