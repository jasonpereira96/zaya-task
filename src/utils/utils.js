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