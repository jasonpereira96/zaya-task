<template>
    <div :class="className" @click="lessonChanged">
        {{number + 1}}</div>
</template>

<script>
import { mapState } from 'vuex';
import { mutations, constants } from './../constants/constants';
export default {
    props: [
        'number',
        'id'
    ],
    computed: {
        ...mapState({
            className(state) {
                if (this.id === state.currentlyActiveLessonId) {
                    return 'number active';
                }
                if (this.isLessonComplete(state)) {
                    return 'number complete';
                }
                return 'number';
            }
        })
    },
    methods: {
        lessonChanged() {
            console.log(232);
            let { id } = this;
            this.$store.commit(mutations.LESSON_CHANGED, {
                id
            });
        },
        isLessonComplete(state) {
            let lesson = state.cache.lessons[this.id];
            return lesson.objectiveDetails
                .map(objective => objective.id)
                .every(objectiveId => {
                    let objective = state.cache.objectives[objectiveId];
                    return objective.status === constants.DONE;
                });
        }
    }
}
</script>

<style scoped>
.number {
    flex: 1;
    padding: 2em;
    background: radial-gradient(circle, #ff9613 50%, #e6e7e9 50%);
    cursor: pointer;
    color: black;
    /* font-weight: bold; */
}

.number.active {
    background: radial-gradient(circle, white 50%, #e6e7e9 50%);
}
.number.complete {
    background: radial-gradient(circle, #94d700 50%, #e6e7e9 50%);
}
</style>