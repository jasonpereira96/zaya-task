<template>
    <div class='thumbnail' :style="style" @click="thumbnailClicked">
    
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { mutations } from './../constants/constants';

export default {
    props: [
        'id'
    ],
    computed: {
        ...mapState({
            style(state) {
                console.log(' in styke');
                if (!state.cache) {
                    return '';
                }
                let objectives = state.cache.objectives;
                let objective = objectives[this.id];
                if (!objective.vimeo) {
                    return '';
                }
                let url = objective.vimeo.thumbnail_url_with_play_button;
                return `background-image: url('${url}');`;
            }
        })
    },
    methods: {
        thumbnailClicked() {
            this.$store.commit(mutations.THUMBNAIL_CLICKED, {
                id: this.id
            });
        }
    }
}
</script>

<style scoped>
.thumbnail {
    flex: 1;
    background-repeat: no-repeat;
    background-position: center;
    margin: 2%;
    cursor: pointer;
    max-width: 184px;  
}
</style>