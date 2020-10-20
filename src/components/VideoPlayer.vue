<template>
    <div id='video-container'>
        <div v-if="dataArrived" id='wrapper'>
            <div v-html="iframe" id='iframe-wrapper'></div>
            <div id='thumbnails-wrapper'>
                <Thumbnail v-for="objective in objectiveDetails" :key="objective.id" :id="objective.id">
                </Thumbnail>
            </div>
        </div>
        <h2 v-else>Loading</h2>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Thumbnail from './Thumbnail';

export default {
    computed: {
        ...mapState({
            objectiveDetails(state) {
                let currentlyActiveLessonId = state.currentlyActiveLessonId;
                return state.cache.lessons[currentlyActiveLessonId].objectiveDetails;
            },
            dataArrived: function(state) {
                return typeof state.cache === 'object';
            },
            iframe: function(state) {
                let objectiveId = state.currentlyActiveObjectiveId;
                let objective = state.cache.objectives[objectiveId];
                if (!objective.vimeo) {
                    return ''
                }
                return objective.vimeo.html;
            }
        })
    },
    components: {
        Thumbnail
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
    background:url('../assets/loading.png') center center no-repeat;
}

#thumbnails-wrapper {
    flex: 1;
    display: flex;
}

iframe {
    height: 100%;
    width: 100%;
    flex: 1;
    border: none;
}
</style>