<template>
    <Header/>
    <MainContainer/>
</template>

<script>
import Header from './components/Header.vue';
import MainContainer from './components/MainContainer.vue';
export default {
    components: {
        Header,
        MainContainer
    }
};
</script>

<style>
#app {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}

    
#main {
    flex: 4;
}

#main {
    padding: 2%;
    display: flex;
    background-color: skyblue;
}

#menu {
    flex: 1;
    background-color: goldenrod;
    text-align: center;
}

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

#video-container {
    flex: 4;
}

video {
    height: 100%;
    width: 100%;
}
</style>
