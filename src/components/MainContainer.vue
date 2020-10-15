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