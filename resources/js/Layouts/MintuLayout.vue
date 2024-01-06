<script setup>

import MintuNavbar from "@/Components/MintuNavbar.vue";
</script>

<template>
<div>
<header class="w-full">
    <mintu-navbar />
</header>
    <main>
        <slot />

    </main>
</div>
</template>

<style scoped>

</style>
