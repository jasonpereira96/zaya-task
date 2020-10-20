import { constants } from './../constants/constants';

function clone(value) {
    return JSON.parse(JSON.stringify(value));
}

export function getDataMap(data) {
    let cache = {
        lessons: {},
        objectives: {}
    };

    for (let lesson of data.lessonDetails) {
        cache.lessons[lesson.id] = clone(lesson);

        for (let objective of lesson.objectiveDetails) {
            let objectiveId = objective.id;
            cache.objectives[objectiveId] = clone(objective);
            cache.objectives[objectiveId].status = constants.UNCLICKED;
        }
    }
    return cache;
}

export function getAllVideoUrls(state) {
    let objectives = state.cache.objectives;
    let urls = [];
    console.log(Object.values(objectives));
    for (let objective of Object.values(objectives)) {
        for (let item of objective.objectiveVideosDetails) {
            urls.push({
                url: item.url,
                id: item.objective
            });
        }
    }
    return urls;
}