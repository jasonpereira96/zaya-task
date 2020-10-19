<template>
    <div class='objective-panel'>
        <div>
            <h3>Time Signature</h3>
            <div>
                <div>
                    <div>3/4</div>
                    <div>({{duration + ' Mins'}})</div>
                </div>
            </div>
        </div>
        <div>
            <img class='icon' src='../assets/s_done.png' />
            <img class='icon' src='../assets/s_not_done.png' />
            <img class='icon' src='../assets/s_next_class.png' />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    props: [
        'id'
    ],
    computed: {
        ...mapState({
            duration: function(state) {
                let cache = state.cache;
                // let lessonId = state.currentlyActiveLessonId;
                // let lesson = cache.lessons[lessonId];
                let objective = cache.objectives[this.id];

                return objective.durationInMinutes;
            }
        })
    }
};
</script>

<style scoped>
.objective-panel {
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 30px;
    margin-bottom: 30px;
}

.objective-panel>div {
    flex: 1;
}

.objective-panel>div>div>div {
    display: flex;
}

.objective-panel>div>div>div>div {
    flex: 1;
    text-align: center;
}

.icon {
    width: 40px;
    height: 40px;
    padding: 5px;
}
</style>