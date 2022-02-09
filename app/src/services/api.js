import axios from "axios";

export const key = '27a75efcbf57224733673020b41a68b176f75a21';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}`
    }
});

export default api;