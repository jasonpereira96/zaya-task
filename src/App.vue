<template>
    <Header/>
    <MainContainer/>
</template>

<script>
import Header from './components/Header.vue';
import MainContainer from './components/MainContainer.vue';
import {actions } from './constants/constants';

export default {
    components: {
        Header,
        MainContainer
    },
    mounted() {
        console.log('in mounted');
        this.$store.dispatch(actions.DATA_FETCH);
    }
};
</script>

<style>
#app {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}
html, body {
    height: 100%;
    width: 100%;
}
</style>
