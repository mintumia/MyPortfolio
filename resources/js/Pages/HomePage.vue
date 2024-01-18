<script setup>
import {Head} from "@inertiajs/vue3";
import {ref} from 'vue';

import Button from "primevue/button";
import Calendar from "primevue/calendar";

import MintuMainView from "@/Components/MintuMainView.vue";
import MintuLayout from "@/Layouts/MintuLayout.vue";
import MintuPrimeTest from "@/Components/MintuPrimeTest.vue";

const date = ref();


</script>

<template>
<mintu-layout>
    <div>
        <Head title="Home" />

<MintuPrimeTest />

<!--        <div class="card flex justify-content-center">
            <Button label="Primary" :pt="{
                root: { class: 'bg-indigo-600 border-indigo-600' }
            }" />

        </div>

        <div class="card flex justify-content-center">
            <Calendar v-model="date" />
        </div>-->

<!--        <div class="card flex justify-content-center flex-wrap gap-3">
            <Button label="Primary" />
            <Button label="Secondary" severity="secondary" />
            <Button label="Success" severity="success" />
            <Button label="Info" severity="info" />
            <Button label="Warning" severity="warning" />
            <Button label="Help" severity="help" />
            <Button label="Danger" severity="danger" />
        </div>-->


        <mintu-main-view/>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cupiditate explicabo neque non, quam sunt!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cupiditate explicabo neque non, quam sunt!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cupiditate explicabo neque non, quam sunt!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cupiditate explicabo neque non, quam sunt!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cupiditate explicabo neque non, quam sunt!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cupiditate explicabo neque non, quam sunt!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cupiditate explicabo neque non, quam sunt!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cupiditate explicabo neque non, quam sunt!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cupiditate explicabo neque non, quam sunt!
        </div>
    </div>
</mintu-layout>
</template>

<style scoped>

</style>
