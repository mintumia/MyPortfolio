<template>
    <div>

            <div class="card flex justify-content-center">
                <Checkbox v-model="checked" :binary="true" />
            </div>


            <div class="card flex flex-wrap gap-3 p-fluid">
                <div class="flex-auto">
                    <label for="buttondisplay" class="font-bold block mb-2"> Button Display </label>
                    <Calendar v-model="buttondisplay" showIcon inputId="buttondisplay" :pt="{root:'rounded-lg'}" />
                </div>
                <div class="flex-auto">
                    <label for="icondisplay" class="font-bold block mb-2"> Icon Display </label>
                    <Calendar v-model="icondisplay" showIcon iconDisplay="input" inputId="icondisplay" />
                </div>
                <div class="flex-auto">
                    <label for="templatedisplay" class="font-bold block mb-2"> Icon Template </label>
                    <Calendar v-model="templatedisplay" showIcon iconDisplay="input" timeOnly inputId="templatedisplay">
                        <template #inputicon="{ clickCallback }">
                            <i class="pi pi-clock" @click="clickCallback" />
                        </template>
                    </Calendar>
                </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Calendar from "primevue/calendar";
import Checkbox from "primevue/checkbox";
/*import CalendarIcon from "primevue/icons/calendar/index.js";
import CalendarStyle from "primevue/calendar/style/calendarstyle.esm.js";*/

const buttondisplay = ref("");
const icondisplay = ref("");
const templatedisplay = ref("");
const checked = ref(false);
</script>
