<script setup>
import {Head} from '@inertiajs/vue3'
</script>

<template>
<div>
    <Head title="Login" />
    <div class="flex items-center text-left m-2 *:mr-3">
        <label for="full_name">Full Name</label>


        <div class="relative">
<!--            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">-->
                <div class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
<!--                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>-->
                <svg class="absolute text-blue-600 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                </svg>
            </div>
            <input class="border border-gray-400 p-2 pl-8 rounded-lg bg-slate-100 focus:bg-white caret-blue-600" type="text" maxlength="22" minlength="3" name="full_name" id="full_name">
        </div>

    </div>
</div>
</template>

<style scoped>

</style>
