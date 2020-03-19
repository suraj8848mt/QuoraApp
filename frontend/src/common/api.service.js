import {CSRF_TOKEN} from "./csrf_token.js";

async function getJson(response) {
    if (response.status === 204) return  '';
    return  response.json();
}

function apiService(endpoint, method, data) {
    const config = {
        method: method || GET,
        body: data !== undefined ? JSON.stringify(data) : null,
        header: {
            'content-type': 'application/json',
            'X-CSRFTOKEN': CSRF_TOKEN
        }
    }
    return fetch(endpoint, config)
        .then(getJson)
        .catch(error => console.log(error))
}

export  { apiService };