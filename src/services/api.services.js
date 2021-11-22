import axios from 'axios';

const URL = 'http://localhost:4000';

function registerUser (body) {
    return axios.post(`${URL}/sign-up`, body);
}

function loginUser (body) {
    return axios.post(`${URL}/sign-in`, body);
}

function getSignatureData (config) {
    return axios.get(`${URL}/signature-data`, config);
}

function postSignature (config, body) {
    return axios.post(`${URL}/signature`, body, config);
}

function postAddress (config, body) {
    return axios.post(`${URL}/address`, body, config);
}

function getSignature(config) {
    return axios.get(`${URL}/signature`, config);
}

export{
    registerUser,
    loginUser,
    getSignatureData,
    postSignature,
    postAddress,
    getSignature,
}
