<template>
    <div id='menu'>
        <h2>Menu</h2>
        <hr />
        <div id='link-list'>
            <div>Video Link 1</div>
            <div>Video Link 1</div>
            <div>Video Link 1</div>
        </div>
    
        <div id='objective-panel-holder'>
            <ObjectivePanel/>
            <ObjectivePanel/>
            <ObjectivePanel/>
            <ObjectivePanel/>
        </div>
    </div>
</template>

<script>
import ObjectivePanel from './ObjectivePanel.vue';

export default {
    components: {
        ObjectivePanel
    }
};
</script>