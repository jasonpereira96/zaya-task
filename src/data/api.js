import axios from 'axios';

export async function getEmbedData(options) {
    const BASE_URL = 'https://vimeo.com/api/oembed.json';
    let promises = [];
    let ids = [];
    const { urls, height, width } = options;

    for (let url of urls) {
        ids.push(url.id);
        promises.push(axios.get(BASE_URL, {
            params: {
                url: url.url,
                height,
                width
            }
        }).then(json => json.data));
    }
    let jsons = await Promise.all(promises);
    return jsons.reduce((acc, json, index) => {
        let id = ids[index];
        acc[id] = json;
        return acc;
    }, {});
}