<template>
    <div id='menu'>
        <h2>Menu</h2>
        <hr />
        <div id='link-list' v-if="dataArrived">
            <div v-for="(objective, index) in objectiveDetails" :key="objective.id" class="video-link-div">
                <a :href="objective.objectiveVideosDetails[0].url">{{`Video Link ${index + 1}`}}</a>
            </div>
        </div>
    
        <div id='objective-panel-holder' v-if="dataArrived">
            <ObjectivePanel v-for="(objective, index) in objectiveDetails" :key="objective.id" 
                :id="objective.id" :last="index === objectiveDetails.length - 1"/>
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
    background-color: #ffd05c;
    text-align: center;
    overflow-y: scroll;
}

#objective-panel-holder {
    /* position: fixed; */
    /* top: 10px; */
    /* left: 10px; */
    /* bottom: 10px; */
    /* width: 180px; */
    /* background-color: #eee; */
    /* overflow: scroll; */
    min-height: min-content;
}

.video-link-div {
    cursor: pointer;
}
</style>