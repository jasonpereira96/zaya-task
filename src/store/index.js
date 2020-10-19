import { createStore } from 'vuex';

// import Vue from 'vue';
import { actions, mutations, constants } from './../constants/constants';
import { getData } from './../data/data';
import { getDataMap } from './../utils/utils';

// then had to add in ./store.js as well.
// Vue.config.devtools = process.env.NODE_ENV === 'development'

var demoState = {
    _currentlyActiveLessonId: 'b0a34173-c5c9-4911-b1dd-b1004bdce1f1',
    instrumentTitle: '',
    recitalTitle: '',
    lessonsDetails: [{
        _active: true,
        id: '2dsd',
        lessonTitle: '',
        objectiveDetails: [{
            id: 'fdfgd',
            objectiveVideosDetails: [],
            recital: '',
            created: '',
            updated: '',
            title: '',
            order: 1,
            durationInMinutes: 5,
            classFlow: 'sdsdsd',
            lesson: 'some id',
            _state: 'DONE' //constants
        }]
    }]
};
console.log(demoState)

export default createStore({
    state: {
        instrumentTitle: '',
        recitalTitle: 'xxx',
        lessonDetails: [],
        cache: ''
    },
    mutations: {
        [mutations.DATA_RECEIVED]: function (state, payload) {
            console.log('data received...');
            let data  = payload.data;
            for (let lesson of data.lessonDetails) {
                lesson.active = false;

                for (let objective of lesson.objectiveDetails) {
                    objective.state = constants.NOT_DONE;
                }
            }
            state.instrumentTitle = data.instrumentTitle;
            state.lessonDetails = data.lessonDetails;
            state.recitalTitle = data.recitalTitle;
            state.currentlyActiveLessonId = state.lessonDetails[0].id;
            state.lessonDetails[0].active = true;
            state.cache = getDataMap(data);
            console.log('state set');
            console.log(state);
        },
        [mutations.LESSON_CHANGED]: function (state, payload) {
            state.currentlyActiveLessonId = payload.id;
        }
    },
    actions: {
        [actions.DATA_FETCH]: async function ({ commit }) {
            console.log('fetching...');
            let data = await getData();
            commit(mutations.DATA_RECEIVED, {
                data
            });
        }
    },
    modules: {
    }
})
