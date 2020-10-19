<template>
    <div id='menu'>
        <h2>Menu</h2>
        <hr />
        <div id='link-list' v-if="dataArrived">
            <div v-for="objective in objectiveDetails" :key="objective.id" class="video-link-div">Video</div>
        </div>
    
        <div id='objective-panel-holder' v-if="dataArrived">
            <ObjectivePanel v-for="objective in objectiveDetails" :key="objective.id" :id="objective.id" />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ObjectivePanel from './ObjectivePanel.vue';

export default {
    computed: {
        ...mapState({
            objectiveDetails(state) {
                let currentlyActiveLessonId = state.currentlyActiveLessonId;
                return state.cache.lessons[currentlyActiveLessonId].objectiveDetails;
            },
            dataArrived: function(state) {
                console.log('in data arrived');
                console.log(state);
                console.log(typeof state.cache === 'object');
                return typeof state.cache === 'object';
                // return false;
            }
        })
    },
    components: {
        ObjectivePanel
    }
};
</script>

<style scoped>
#menu {
    flex: 1;
    background-color: goldenrod;
    text-align: center;
}

.video-link-div {
    cursor: pointer;
}
</style>