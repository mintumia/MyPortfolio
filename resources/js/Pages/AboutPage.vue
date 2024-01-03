<script setup>
import {useTestStore} from "@/stores/test.js";
import {Head} from "@inertiajs/vue3";
import MintuLayout from "@/Layouts/MintuLayout.vue";

const mm = useTestStore();

</script>

<template>
<MintuLayout>
    <div>
        <Head title="About"/>
        <h1 class="text-2xl font-semibold">This About Page.{{$page.props.org['url']}}</h1>
        <h1 class="text-2xl font-semibold">Store Data = {{mm.mintu}}</h1>

    </div>
</MintuLayout>
</template>

<style scoped>

</style>
