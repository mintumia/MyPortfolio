<script setup>
import {Link, router} from "@inertiajs/vue3";
import {ref} from 'vue';

const navToggle = ref(false);


</script>

<template>
<div>
   <nav class="bg-slate-100">
<div class="max-md:flex-wrap md:flex items-center justify-between content-center mx-auto">

   <div class="flex max-sm:max-w-sm max-md:max-w-md items-center justify-between bg-amber-200 px-6">
       <div class="text-2xl font-bold mx-3 my-2">Icon</div>
       <div class="max-md:block md:hidden bg-blue-500 text-left"><button @click="navToggle = !navToggle"><span>Click Me</span> <span>X</span></button></div>
   </div>


        <ul :class="navToggle ?'max-md:flex-wrap':'max-md:hidden'" class="md:flex items-center justify-center content-center mx-auto">
            <li class="mx-3 my-2"><Link :href="route('home')">Home</Link></li>
            <li class="mx-3 my-2"><Link :href="route('about')">About</Link></li>
            <li class="mx-3 my-2"><Link :href="route('service')">Service</Link></li>
            <li class="mx-3 my-2"><Link :href="route('contact')">Contact</Link></li>


        </ul>


</div>


   </nav>

</div>
</template>

<style scoped>

</style>
