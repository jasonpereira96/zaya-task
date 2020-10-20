<template>
    <div :class="borderClass">
        <div>
            <h3>Time Signature</h3>
            <div>
                <div>
                    <div class="title">{{strings.title}}</div>
                    <div class="duration">({{strings.duration + ' Mins'}})</div>
                </div>
            </div>
        </div>
        <div>
            <img class='icon' src='../assets/s_done.png' @click="done"/>
            <img class='icon' src='../assets/s_not_done.png'  @click="notDone"/>
            <img class='icon' src='../assets/s_next_class.png'  @click="nextClass"/>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { mutations, constants } from './../constants/constants';

export default {
    props: [
        'id', 
        'last'
    ],
    computed: {
        ...mapState({
            strings: function(state) {
                let cache = state.cache;
                let objective = cache.objectives[this.id];
                return {
                    duration: objective.durationInMinutes,
                    title: objective.title,
                };
            },
            borderClass: function(state) {
                console.log(this.last)
                let objective = state.cache.objectives[this.id];
                let class_ = 'objective-panel';
                switch (objective.status) {
                    case constants.DONE:
                        class_ = 'objective-panel done';
                        break;
                    case constants.NOT_DONE:
                        class_ = 'objective-panel not-done';
                        break;
                    case constants.NEXT_CLASS:
                        class_ = 'objective-panel next-class';
                        break;
                    default:
                        class_ = 'objective-panel';
                }
                if (this.last) {
                    class_ = class_ + ' ' + 'last';
                }
                return class_;
            }
        })
    },
    methods: {
        done() {
            this.$store.commit(mutations.MARK_DONE, {
                id: this.id
            });
        },
        notDone() {
            this.$store.commit(mutations.MARK_NOT_DONE, {
                id: this.id
            });
        },
        nextClass() {
            this.$store.commit(mutations.MARK_NEXT, {
                id: this.id
            });
        }
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

.title {
    flex: 2;
    text-align: center;
}
.duration {
    flex: 1;
    text-align: center;
}

.objective-panel img {
    cursor: pointer;
}

.last {
    margin-bottom: 400px;
}

.icon {
    width: 40px;
    height: 40px;
    padding: 5px;
}

.done {
    border: 0.5em solid green;
}
.not-done {
    border: 0.5em solid red;
}
.next-class {
    border: 0.5em solid blue;
}
</style>