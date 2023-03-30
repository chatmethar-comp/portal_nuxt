<template>
    <div>

        <posts :user="user? user.user_metadata.picture : ''"></posts>
    </div>
</template>

<script setup>
const user = useSupabaseUser();
</script>

<style lang="scss" scoped>

</style>