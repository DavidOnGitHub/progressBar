import config from '../config';

export function get(url) {
    return fetch(`${config.baseUrl}${url}`)
        .then(response => {
            return response.json();
        }, error => {
            console.log(error);
        });
}