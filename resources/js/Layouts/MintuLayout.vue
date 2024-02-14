<script setup>

import MintuNavbar from "@/Components/MintuNavbar.vue";
import MintuNewNavber from "@/Components/MintuNewNavber.vue";
import MintuFooter002 from "@/Components/MintuFooter002.vue";
</script>

<template>
<div class="p-fluid">
<header class="w-full">
<!--    <mintu-navbar />-->
    <MintuNewNavber />
</header>
    <main class="max-w-[1024px] mx-auto">
        <slot />

    </main>
    <footer>
        <MintuFooter002 />
    </footer>

</div>
</template>

<style scoped>

</style>
