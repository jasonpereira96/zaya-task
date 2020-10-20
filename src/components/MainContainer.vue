<template>
    <div id='main'>
        <Menu/>
        <VideoPlayer/>
    </div>
</template>

<script>
import Menu from './Menu.vue';
import VideoPlayer from './VideoPlayer.vue';


export default {
    components: {
        Menu,
        VideoPlayer
    }
};
</script>

<style scoped>
#main {
    flex: 4;
    padding: 2%;
    display: flex;
    background-color: #e6e7e9;
    max-height: 100%;
    font-family: "Comic Sans MS", cursive, sans-serif;
}
</style>