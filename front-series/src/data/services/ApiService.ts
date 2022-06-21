import axios from 'axios';

export const ApiService = axios.create({
    baseURL: 'http://localhost:8000/api/series',
    headers: {
        'Content-Type': 'application/json'
    }
})