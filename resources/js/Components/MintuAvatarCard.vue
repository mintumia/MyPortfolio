<script setup>

import {Icon} from "@iconify/vue";
import {Link} from "@inertiajs/vue3";
import {onMounted} from "vue";



</script>

<template>
    <div class="m-2 mx-auto w-full">
        <div class="relative inline-block items-center content-center justify-center mx-auto max-w-[400px] bg-blue-200 m-1 p-1 text-center rounded-lg shadow-lg shadow-black overflow-hidden z-20">
           <span class="absolute left-0 top-0 bg-gradient-to-br to-blue-200 from-gray-900 from-25% to-45%  w-full h-full animate-[spin_5s_linear_infinite] z-30"></span>
<!--            animate-[spin_5s_linear_infinite]-->
             <div class="relative w-full h-full bg-blue-600 rounded-lg z-40">
                 <img class="rounded-full mx-auto" :src="$page.url+'assets/avatar.png'" alt="avatar">

                 <h2 class="text-2xl font-semibold p-3 m-2">Md. Mintu Mia</h2>
                 <h3 class="text-xl font-semibold p-3 m-2 mb-4">PHP Laravel Full Stack Web Developer </h3>
                 <hr/>

                 <div class="flex justify-center items-center content-center">


                     <Link :href="route('about')" class="flex items-center text-lg p-2"><span class="mx-1"><Icon
                         icon="skill-icons:vuejs-light"/></span><span>Github</span></Link>
                     <span> | </span>

                     <Link :href="route('home')" class="flex items-center text-lg p-2"><span class="mx-1"><Icon
                         icon="skill-icons:vuejs-light"/></span><span>Github</span></Link>
                     <span> | </span>
                     <Link :href="route('service')" class="flex items-center text-lg p-2"><span class="mx-1"><Icon
                         icon="skill-icons:vuejs-light"/></span><span>Github</span></Link>
                     <span> | </span>
                     <Link :href="route('contact')" class="flex items-center text-lg p-2"><span class="mx-1"><Icon
                         icon="skill-icons:vuejs-light"/></span><span>Github</span></Link>


                 </div>

             </div>

        </div>

    </div>
</template>

<style scoped>

</style>
