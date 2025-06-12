import axios from 'axios';

export function getImagesByQuery(query) {

    const API_KEY = "50815044-d1b29e7254804b3149c32accf";
    const BASE_URL = "https://pixabay.com/api/";
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });
    return axios(`${BASE_URL}?${params}`)
        .then(res => 
            res.data)
        .catch(error => {
            console.log(error);
    })
}