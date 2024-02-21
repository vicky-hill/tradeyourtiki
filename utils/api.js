import axios from "axios"
import error from "./error"
import { cookies } from 'next/headers'

const instance = axios.create({
    baseURL: "https://masterapi.pro/api/tiki/",
    // baseURL: "http://localhost:4000/api/tiki/",
    headers: { 'Content-Type': 'application/json' }
});

instance.interceptors.request.use((config) => {
    const cookieStore = cookies()
    const token = cookieStore.get('token');

    config.headers['x-auth-token'] = token ? token.value : ''
    return config;
});

export const api = {
    get: async (url, body) => {
        const promise = (resolve, reject) => {
            instance.get(url, body)
                .then(res => resolve(res.data))
                .catch(err => reject(err))
        }

        return new Promise(promise);
    },
    post: async (url, body) => {
        const promise = (resolve, reject) => {
            instance.post(url, body)
                .then(res => resolve(res.data))
                .catch(err => reject(err))
        }

        return new Promise(promise);
    },
    put: async (url, body) => {
        const promise = (resolve, reject) => {
            instance.put(url, body)
                .then(res => resolve(res.data))
                .catch(err => reject(err))
        }

        return new Promise(promise);
    },
    delete: async (url, body) => {
        const promise = (resolve, reject) => {
            instance.delete(url, body)
                .then(res => resolve(res.data))
                .catch(err => reject(err))
        }

        return new Promise(promise);
    }
}

export default api;