<template>
    <div id='header'>
            <div id='header-start'>
                <img src='https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png' id='avatar' />
            </div>
            <div id='header-mid'>
                <h1>Lavender's Blue</h1>
                <LessonBar/>
            </div>
            <div id='header-end'>
                <div>
                    Guitar
                </div>
                <div>
                    <button> Exit </button>
                </div>
            </div>
        </div>
</template>

<script>
import LessonBar from './LessonBar.vue';

export default {
    components: {
        LessonBar
    }
}

</script>


<style scoped>
#header {
    background-color: skyblue;
    flex: 1;
    display: flex;
    padding-bottom: 2%;
}

 #header-start {
        flex: 1;
    }

#header-start>img {
    width: 150px;
    height: 150px;
}

#header-mid {
    flex: 3;
    text-align: center;
    color: red;
}

#header-end {
    text-align: end;
}

span {
    float: left;
}

#header-end {
    flex: 1;
    display: flex;
    flex-direction: column;
}

#header-end>div {
    flex: 1;
    text-align: center;
    padding-top: 10%;
}

#header-mid-lower {
    display: flex;
}


</style>