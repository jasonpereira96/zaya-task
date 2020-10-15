<template>
    <Header/>
    <MainContainer/>
</template>

<script>
import Header from './components/Header.vue';
import MainContainer from './components/MainContainer.vue';
export default {
    components: {
        Header,
        MainContainer
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
</style>
