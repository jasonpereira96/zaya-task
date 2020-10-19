<template>
    <div :class="className" @click="lessonChanged">
        {{number + 1}}</div>
</template>

<script>
import { mapState } from 'vuex';
import { mutations } from './../constants/constants';
export default {
    props: [
        'number',
        'id'
    ],
    computed: {
        ...mapState({
            className(state) {
                return this.id === state.currentlyActiveLessonId ? 'number active' : 'number';
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
        }
    }
}
</script>

<style scoped>
.number {
    flex: 1;
    padding: 2em;
    background: radial-gradient(circle, orange 50%, skyblue 50%);
    cursor: pointer;
}

.number.active {
    background: radial-gradient(circle, white 50%, skyblue 50%);
}
</style>