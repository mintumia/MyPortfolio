
<template>
    <div class="card flex justify-content-center">
        <Toast position="top-right" />
<!--        <Button label="Show" @click="show()" />-->
        <Button @click="show" :pt="{root:{class:'bg-yellow-500 rounded p-4'}}" label="Submit" />
    </div>
</template>

<script setup>
import {useToast} from 'primevue/usetoast';
import Button from "primevue/button";
import Toast from "primevue/toast";
const toast = useToast();

const show = () => {
    toast.add({ severity: 'error', summary: 'Report', detail: 'Message text', life: 3000});
};
</script>
