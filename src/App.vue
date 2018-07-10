<template>
    <div>
        <TheHeader />
        <router-view></router-view>
    </div>
</template>

<script>
    
    export default {
        components: {
            TheHeader: require('./components/TheHeader.vue').default
        }
    }

</script>

<style scoped>
</style>