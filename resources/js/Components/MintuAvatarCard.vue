<script setup>

import {Icon} from "@iconify/vue";
import {Link} from "@inertiajs/vue3";
import {onMounted} from "vue";



</script>

<template>
    <div class="m-2">
        <div
            class="inline-block items-center content-center justify-center max-sm:min-w-max min-w-full min-h-full bg-blue-600 m-1 p-2 text-center rounded-lg shadow-lg shadow-black ">
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
</template>

<style scoped>

</style>
