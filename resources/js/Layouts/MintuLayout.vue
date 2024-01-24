<script setup>

import MintuNavbar from "@/Components/MintuNavbar.vue";
</script>

<template>
<div class="p-fluid">
<header class="w-full">
    <mintu-navbar />
</header>
    <main class="max-w-[1024px] mx-auto">
        <slot />

    </main>
</div>
</template>

<style scoped>

</style>
