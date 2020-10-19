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
    background-color: skyblue;
    max-height: 100%;
}
</style>