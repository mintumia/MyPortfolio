<template>
    <div class="card">
        <Menubar :model="items" :pt="{root:{class:'m-2'}}" />


    </div>
</template>



<script setup>
import { ref } from "vue";
import {router} from "@inertiajs/vue3";
import Menubar from "primevue/menubar";



const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
       command:()=>{
            //router.visit('/home');
            router.visit('/home');

       }
    },
    {
        label: 'Features',
        icon: 'pi pi-star'
    },
    {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Components',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil'
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope',
        command: () => {


        }

    }
]);
</script>

