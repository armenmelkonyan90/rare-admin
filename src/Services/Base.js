import axios from 'axios';

export const api = axios.create({
    //    baseURL: "https://2063-45-143-205-154.ngrok.io"
    baseURL: process.env.REACT_APP_BASE_URL
    // baseURL: "http://193.187.175.79:4000",
    // headers: { 'Content-Type': 'Application/json', 
    //            "Accept-Language": "en-US"}
})


api.interceptors.request.use(async (config) => {
    const token = localStorage.getItem('accessToken');
    if (token && (!config.headers.non_auth || config.headers.non_auth === 'false')) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    delete config.headers.non_auth;
    return config;
});

api.interceptors.response.use((config) => {
    return config;
}, (error) => {
    const { response } = error;
    const { status } = response;
    if (status === 401) {
        localStorage.removeItem('accessToken');
        window.location.href = '/auth/login';
    }
    throw error;
});