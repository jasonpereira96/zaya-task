<template>
    <div id='header-mid-lower'>
        <div id='lessons-word'>Lessons: </div>
        <div id='list'>
            <LessonNumber></LessonNumber>
            <LessonNumber></LessonNumber>
            <LessonNumber></LessonNumber>
            <LessonNumber></LessonNumber>
            <LessonNumber></LessonNumber>
            <LessonNumber></LessonNumber>
            <LessonNumber></LessonNumber>
            <LessonNumber></LessonNumber>
        </div>
    </div>
</template>

<script>
import LessonNumber from './LessonNumber';

export default {
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