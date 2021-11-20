import axios from 'axios';

const URL = 'http://localhost:4000';

function registerUser (body) {
    return axios.post(`${URL}/sign-up`, body);
}

function loginUser (body) {
    return axios.post(`${URL}/sign-in`, body);
}

function getSignature (config) {
    return axios.get(`${URL}/signature-data`, config);
}

export{
    registerUser,
    loginUser,
    getSignature,
}
