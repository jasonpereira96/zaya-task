import { createStore } from 'vuex';

// import Vue from 'vue';
import { actions, mutations, constants } from './../constants/constants';
import { getData } from './../data/data';

// then had to add in ./store.js as well.
// Vue.config.devtools = process.env.NODE_ENV === 'development'

var demoState = {
    _currentlyActiveLessonIndex: 0,
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
        lessons: [{

        }]
    },
    mutations: {
        [mutations.DATA_RECEIVED]: function (state, payload) {
            console.log('data received...');
            var  data  = payload.data;
            data.currentlyActiveLessonIndex = 0;
            for (let lesson of data.lessonDetails) {
                lesson.active = false;

                for (let objective of lesson.objectiveDetails) {
                    objective.state = constants.NOT_DONE;
                }
            }
            data.lessonDetails[0].active = true;
            // Object.assign(state, data);
            state.instrumentTitle = data.instrumentTitle;
            state.lessonDetails = data.lessonDetails;
            state.recitalTitle = data.recitalTitle;
            console.log('state set');
            console.log(state);
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
