<template>
    <div class="text-primary">
        Protal
        {{ user }}
    </div>
</template>

<script setup>
const user = useSupabaseUser();
</script>

<style lang="scss" scoped>

</style>