<script setup>
import {Link, router} from "@inertiajs/vue3";
import {ref} from 'vue';
import {Icon} from "@iconify/vue";
import MintuTestMenu from "@/Components/MintuTestMenu.vue";

const navToggle = ref(false);


</script>

<template>
<div>
   <nav class="bg-indigo-400">
<!--       <MintuTestMenu />-->
<div class="max-md:flex-wrap md:flex md:max-w-5xl items-center justify-between content-center mx-auto">

   <div class="flex max-md:w-full max-md:min-w-max items-center justify-between bg-amber-200 px-6">
       <div class="text-2xl font-bold mx-3 my-2">Icon</div>
       <div class="max-md:flex md:hidden text-left"><button @click="navToggle = !navToggle" class="p-3 opacity-75"><span v-if="!navToggle"><icon icon="material-symbols:menu-rounded" /> </span>
           <span v-else> <icon icon="material-symbols:close-rounded"/>        </span></button></div>
   </div>


        <ul :class="navToggle ?'max-md:flex-wrap':'max-md:hidden'" class="md:flex items-center justify-center content-center mx-auto">
            <li class="mx-3 my-2 max-md:border-b-2 text-center"><Link class="flex items-center content-center hover:bg-blue-300 rounded-lg p-1 border-b-2 hover:border-black border-indigo-400" :href="route('home')"><span class="p-1"><icon class="text-xl opacity-80" icon="heroicons-solid:home" /> </span>Home</Link></li>
            <li class="mx-3 my-2 max-md:border-b-2 text-center"><Link class="flex items-center content-center hover:bg-blue-300 rounded-lg p-1 border-b-2 hover:border-black border-indigo-400" :href="route('about')"><span class="p-1"><icon class="text-xl opacity-80" icon="heroicons-solid:information-circle" /> </span>About</Link></li>
            <li class="mx-3 my-2 max-md:border-b-2 text-center"><Link class="flex items-center content-center hover:bg-blue-300 rounded-lg p-1 border-b-2 hover:border-black border-indigo-400" :href="route('service')"><span class="p-1"><icon class="text-xl opacity-80" icon="heroicons-solid:briefcase" /> </span>Service</Link></li>
            <li class="mx-3 my-2 max-md:border-b-2 text-center"><Link class="flex items-center content-center hover:bg-blue-300 rounded-lg p-1 border-b-2 hover:border-black border-indigo-400" :href="route('contact')"><span class="p-1"><icon class="text-xl opacity-80" icon="heroicons-solid:chat-bubble-left-right" /> </span>Contact</Link></li>
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
