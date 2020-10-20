<template>
    <div id='header'>
        <div id='header-start'>
            <img src='https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png' id='avatar' />
        </div>
        <div id='header-mid'>
            <h1>{{recitalTitle}}</h1>
            <LessonBar/>
        </div>
        <div id='header-end'>
            <div>
                <h2>{{instrumentTitle}}</h2>
            </div>
            <div>
                <div id='exit' class='shadow'> Exit Session</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import LessonBar from './LessonBar.vue';

export default {
    computed: {
        ...mapState({
            recitalTitle: state => state.recitalTitle,
            instrumentTitle: state => state.instrumentTitle
        })
    },
    components: {
        LessonBar
    }
}
</script>

<style scoped>
#header {
    background-color: #e6e7e9;
    flex: 1;
    display: flex;
    padding-bottom: 2%;
    font-family: "Comic Sans MS", cursive, sans-serif;
}

#header-start {
    flex: 1;
    text-align: center;
    padding-top: 20px;
}

#header-start>img {
    width: 150px;
    height: 150px;
}

#header-mid {
    flex: 3;
    text-align: center;
    color: #c01661;
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
    color: #c01661;
}

#header-end>div {
    flex: 1;
    text-align: center;
    padding-top: 10%;
}

#header-mid-lower {
    display: flex;
}

#exit {
    background-color: #c52b2d;
    color: white;
    padding-top: 4%;
    padding-bottom: 4%;
    margin-left: 20%;
    margin-right: 20%;
    cursor: pointer;
}
.shadow {
  -webkit-box-shadow: 3px 5px 6px grey;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    3px 5px 6px grey;  /* Firefox 3.5 - 3.6 */
  box-shadow:         3px 5px 6px grey;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
}
</style>