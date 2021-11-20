import axios from 'axios';

const URL = 'http://localhost:4000';

function registerUser(body){
    return axios.post(`${URL}/sign-up`, body);
}

export{
    registerUser,
}
