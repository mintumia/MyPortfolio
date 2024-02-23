<script setup>
import {Link, router} from "@inertiajs/vue3";
import {ref,onMounted} from 'vue';
import {useTimeoutPoll} from '@vueuse/core'
import {Icon} from "@iconify/vue";

const toggleNav = ref(false);
const isHovering = ref(false);
const countTime = ref(3000);


const {isActive,resume,pause} = useTimeoutPoll(()=>{

    if(toggleNav.value && isHovering.value ===false){

        toggleNav.value = false;


      //  console.log(toggleNav.value+"::"+isHovering.value);
        // alert("Hovering");
    }

},countTime.value)



onMounted(()=>{
    resume();
   /* if(isHovering.value === true){
        pause();
    }else if(isHovering.value ===false){

        //resume();
    }*/
});







</script>

<template>
<div>
   <nav class="bg-indigo-400">
<!--       <MintuTestMenu />-->
<div class="max-lg:flex-wrap md:flex lg:max-w-5xl items-center justify-between content-center mx-auto">

   <div class="flex max-lg:w-full max-lg:min-w-max items-center justify-between bg-amber-200 px-6">
       <div class="text-2xl font-bold mx-3 my-2">Icon</div>
       <div class="max-lg:flex lg:hidden text-left max-lg:mx-2">

<!--           <button @click="toggleNav = !toggleNav" class="p-3 opacity-75"><span v-if="!toggleNav"><icon icon="material-symbols:menu-rounded" /> </span>
           <span v-else> <icon icon="material-symbols:close-rounded"/>        </span></button>-->
           <button @click="toggleNav = !toggleNav" class="p-3 opacity-75 transition-all duration-500">
           <svg :class="toggleNav ? 'hidden': 'block'" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
           </svg>

           <!-- Menu open: "block", Menu closed: "hidden" -->
           <svg :class="toggleNav ? 'block': 'hidden'" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
           </svg>
           </button>
       </div>
   </div>


        <ul id="navbar" :class="toggleNav ?'max-lg:block w-full':'max-lg:hidden'" @mouseover="isHovering = true" @mouseleave="isHovering = false" class="lg:flex items-center justify-start content-center">
            <li class="mx-3 my-2 max-lg:border-b-2 text-center"><Link class="flex items-center content-center hover:bg-blue-300 rounded-lg p-1 border-b-2 hover:border-black border-indigo-400" :href="route('home')"><span class="p-1"><icon class="text-xl opacity-80" icon="heroicons-solid:home" /> </span>Home</Link></li>
            <li class="mx-3 my-2 max-lg:border-b-2 text-center"><Link class="flex items-center content-center hover:bg-blue-300 rounded-lg p-1 border-b-2 hover:border-black border-indigo-400" :href="route('about')"><span class="p-1"><icon class="text-xl opacity-80" icon="heroicons-solid:information-circle" /> </span>About</Link></li>
            <li class="mx-3 my-2 max-lg:border-b-2 text-center"><Link class="flex items-center content-center hover:bg-blue-300 rounded-lg p-1 border-b-2 hover:border-black border-indigo-400" :href="route('service')"><span class="p-1"><icon class="text-xl opacity-80" icon="heroicons-solid:briefcase" /> </span>Service</Link></li>
            <li class="mx-3 my-2 text-center"><Link title="contact" class="flex items-center content-center hover:bg-blue-300 rounded-lg p-1 border-b-2 hover:border-black border-indigo-400" :href="route('contact')"><span class="p-1"><icon class="text-xl opacity-80" icon="heroicons-solid:chat-bubble-left-right" /> </span>Contact</Link></li>
<!--            <li class="mx-3 my-2 max-md:border-b-2 text-center"><Link :href="route('about')">About</Link></li>
            <li class="mx-3 my-2 max-md:border-b-2 text-center"><Link :href="route('service')">Service</Link></li>
            <li class="mx-3 my-2 max-md:border-b-2 text-center"><Link :href="route('contact')">Contact</Link></li>-->


        </ul>


</div>


   </nav>

</div>
</template>

<style scoped>

</style>
