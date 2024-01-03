<script setup>

import {Icon} from "@iconify/vue";
</script>

<template>
<div class="m-2">
    <div class="inline-block items-center content-center justify-center max-sm:min-w-max min-w-full min-h-full bg-blue-600 m-1 p-2 text-center rounded-lg shadow-lg shadow-black ">
        <img class="rounded-full mx-auto" :src="$page.url+'assets/avatar.png'" alt="avatar">

        <h2 class="text-2xl font-semibold p-3 m-2">Md. Mintu Mia</h2>
        <h3 class="text-xl font-semibold p-3 m-2 mb-4">PHP Laravel Full Stack Web Developer </h3>
        <hr/>

        <div class="flex justify-center items-center content-center">

            <h4 class="flex items-center text-lg m-2 p-2"><span><Icon icon="skill-icons:vuejs-light"/></span><span>Github</span></h4><span> | </span>
            <h4 class="flex items-center text-lg m-2 p-2"><span><Icon icon="skill-icons:vuejs-light"/></span><span>Github</span></h4><span> | </span>
            <h4 class="flex items-center text-lg m-2 p-2"><span><Icon icon="skill-icons:vuejs-light"/></span><span>Github</span></h4><span> | </span>
            <h4 class="flex items-center text-lg m-2 p-2"><span><Icon icon="skill-icons:vuejs-light"/></span><span>Github</span></h4>
        </div>


    </div>

</div>
</template>

<style scoped>

</style>
