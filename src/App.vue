<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
            loading: true,
        };
    },
    mounted() {
        this.$store.dispatch('getSettingData');
    },
};
</script>
