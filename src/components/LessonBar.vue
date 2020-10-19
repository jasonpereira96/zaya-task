<template>
    <div id='header-mid-lower'>
        <div id='lessons-word'>Lessons: </div>
        <div id='list'>
            <LessonNumber v-for="(lesson, index) in lessonDetails" :key="lesson.id" :number="index" :id="lesson.id">

            </LessonNumber>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import LessonNumber from './LessonNumber';

export default {
    computed: {
        ...mapState({
            lessonDetails: state => state.lessonDetails
        })
    },   
    components: {
        LessonNumber
    }
};
</script>

<style scoped>
#lessons-word {
    flex: 1;
    padding: 2em;
}

#list {
    flex: 8;
    display: flex;
}
</style>