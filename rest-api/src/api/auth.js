import axios from 'axios';

const URL = 'http://devapi.ajoonamu.com/api/user';

export const postLogin = async (email, password) => {
    const REQUEST_URL = `${URL}/login`;
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    const response = await axios.post(REQUEST_URL, formData);
    return response;
}

export const postRegister = async (email, password, password_confirm, agree_marketing) =>{
    const REQUEST_URL = `${URL}/register`;
    const formData = new FormData();
    formData.append('email', 'tjdals6695@gmail.com');
    formData.append('password', '*aksen1090314');
    formData.append('password_confirm', '*ksen1090314');
    formData.append('agree_marketing', 0);
    const response = await axios.post(REQUEST_URL, formData);
    return response;
}

export const postRefresh = async (token) =>{
    const REQUEST_URL = `${URL}/refresh`;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await axios.post(REQUEST_URL);
    return response;
}

export const postGetUserInfo = async (token) =>{
    const REQUEST_URL = `${URL}/me`;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await axios.post(REQUEST_URL);
    return response;
}

export const postLogout = async (token) =>{
    const REQUEST_URL = `${URL}/logout`;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await axios.post(REQUEST_URL);
    return response;
}