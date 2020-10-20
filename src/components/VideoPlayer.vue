<template>
    <div id='video-container'>
        <div v-if="dataArrived" id='wrapper'>
            <div v-html="iframe" id='iframe-wrapper'></div>
            <div id='thumbnails-wrapper'>
                <div class='thumbnail'></div>
                <div class='thumbnail'></div>
                <div class='thumbnail'></div>
                <div class='thumbnail'></div>
            </div>
        </div>
        <h2 v-else>Loading</h2>
    </div>
</template>

<script>
// import { actions } from './../constants/constants';
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            dataArrived: function(state) {
                console.log('in data arrived');
                console.log(state);
                console.log(typeof state.cache === 'object');
                return typeof state.cache === 'object';
            },
            iframe: function(state) {
                let objectives = state.cache.objectives;
                return Object.values(objectives)[0].vimeo ? Object.values(objectives)[0].vimeo.html : '';
            }
        })
    }
};
</script>

<style scoped>
#video-container {
    flex: 2.5;
    display: flex;
    height: 100%;
}

#wrapper {
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
}

#iframe-wrapper {
    flex: 4;
    display: flex;
}
#thumbnails-wrapper {
    flex: 1;
    display: flex;
}
.thumbnail {
    flex: 1;
    background-color: green;
}
iframe {
    height: 100%;
    width: 100%;
    flex: 1;
    /* position: absolute; */
    /* height: 100%;  */
    border: none;
}
</style>