<script setup>
import {useTestStore} from "@/stores/test.js";
const mm = useTestStore();

</script>

<template>
<div>
    <h1 class="text-2xl font-semibold">This About Page.{{$page.props.org['url']}}</h1>
    <h1 class="text-2xl font-semibold">Store Data = {{mm.mintu}}</h1>

</div>
</template>

<style scoped>

</style>
