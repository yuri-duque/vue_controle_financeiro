
import axios from "axios"
import config from "../../config.js";
const urlApi = config.apiUrl;

axios.defaults.withCredentials = true;

export default {    
    getError(error) {
        var data = { success: false, message: "Ocorreu um problema" }
        if (error != undefined && error.response != undefined) {
            if (error.response.message != undefined) {
                data.message = error.response.message;
            }

            if (error.response.data.message != undefined) {
                data.message = error.response.data.message;
            }
        }
        return data;
    },

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
        var promise = this.call().get(`${urlApi}/${path}`)
            
        return await this.retorno(promise);
    },

    async post(path, data) {
        var promise = this.call().post(`${urlApi}/${path}`, data)
            
        return await this.retorno(promise);
    },

    async put(path, data, id) {
        var promise = this.call().put(`${urlApi}/${path}/${id}`, data);    

        return await this.retorno(promise);
    },

    async deletar(path) {
        var promise = this.call().delete(`${urlApi}/${path}`);

        return await this.retorno(promise);
    },

    async retorno(promise){
        return await promise
        .then(response => {
            if (response && response.data) {
                return { success: true, data: response.data }
            } else {
                return { success: false }
            }
        })
        .catch(error => {
            console.log(error);
            return { success: false }
        });
    }
}