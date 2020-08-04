
import axios from "axios"
import config from "@/../config.js";
const urlApi = config.apiUrl;

axios.defaults.withCredentials = true;

export default {    
    serializeData(data) {
        return JSON.stringify(data);
    },

    call() {
        var token = localStorage.getItem("login_token");

        if(token){
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        }

        return axios.create({})
    },

    async get(path) {
        return await this.call().get(`${urlApi}/${path}`);
    },

    async post(path, data) {
        return await this.call().post(`${urlApi}/${path}`, data);
    },

    async put(path, data, id) {
        return await this.call().put(`${urlApi}/${path}/${id}`, data);
    },

    async delete(path) {
        return await this.call().delete(`${urlApi}/${path}`);
    },
}