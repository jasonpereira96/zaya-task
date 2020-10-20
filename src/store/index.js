import { createStore } from 'vuex';

import { actions, mutations, constants } from './../constants/constants';
import { getData } from './../data/data';
import { getDataMap, getAllVideoUrls } from './../utils/utils';
import { getEmbedData } from './../data/api';

let store = createStore({
    state: {
        instrumentTitle: '',
        recitalTitle: '',
        lessonDetails: [],
        cache: ''
    },
    mutations: {
        [mutations.DATA_RECEIVED]: function (state, payload) {
            console.log('data received...');
            let data = payload.data;
            for (let lesson of data.lessonDetails) {
                lesson.active = false;
            }
            state.instrumentTitle = data.instrumentTitle;
            state.lessonDetails = data.lessonDetails;
            state.recitalTitle = data.recitalTitle;
            state.currentlyActiveLessonId = state.lessonDetails[0].id;
            state.currentlyActiveObjectiveId = state.lessonDetails[0].objectiveDetails[0].id;
            state.lessonDetails[0].active = true;
            state.cache = getDataMap(data);
            console.log('state set');
            console.log(state);
        },
        [mutations.VIDEOS_RECEIVED]: function (state, payload) {
            console.log(state);
            console.log(payload);
            let objectives = state.cache.objectives;
            for (const [id, data] of Object.entries(payload.data)) {
                objectives[id].vimeo = data;
            }

        },
        [mutations.LESSON_CHANGED]: function (state, payload) {
            state.currentlyActiveLessonId = payload.id;
            state.currentlyActiveObjectiveId = getFirstObjectiveId(state, payload.id);

        },
        [mutations.MARK_DONE]: function (state, payload) {
            let objectiveId = payload.id;
            state.cache.objectives[objectiveId].status = constants.DONE;
        },
        [mutations.MARK_NOT_DONE]: function (state, payload) {
            let objectiveId = payload.id;
            state.cache.objectives[objectiveId].status = constants.NOT_DONE;
        },
        [mutations.MARK_NEXT]: function (state, payload) {
            let objectiveId = payload.id;
            state.cache.objectives[objectiveId].status = constants.NEXT_CLASS;
        },
        [mutations.THUMBNAIL_CLICKED]: function (state, payload) {
            let { id } = payload;
            state.currentlyActiveObjectiveId = id;
        }
    },
    actions: {
        [actions.DATA_FETCH]: async function ({ commit }) {
            let data = await getData();
            commit(mutations.DATA_RECEIVED, {
                data
            });
        },
        [actions.VIDEOS_FETCH]: async function (param, { height, width }) {
            let commit = param.commit;
            let state = param.state;
            let urls = getAllVideoUrls(state);
            console.log(param);
            let data = await getEmbedData({ height, width, urls });
            commit(mutations.VIDEOS_RECEIVED, {
                data
            });
        }
    }
});

const unsubscribe = store.subscribe(function (mutation) {
    if (mutation.type === mutations.DATA_RECEIVED) {
        setTimeout(() => {
            let videoContainer = document.getElementById('iframe-wrapper');
            let height = videoContainer.clientHeight;
            let width = videoContainer.clientWidth;
            store.dispatch(actions.VIDEOS_FETCH, {
                height, width
            });
            unsubscribe();
        }, 500);
    }
});

function getFirstObjectiveId(state, lessonId) {
    let lesson = state.cache.lessons[lessonId];
    return lesson.objectiveDetails[0].id;
}

export default store;