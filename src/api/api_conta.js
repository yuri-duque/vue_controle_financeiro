import apiUtils from "./api_utils.js";

export default {   
    getAll() {
        return apiUtils.get("wallet");
    },

    save(conta) {
        return apiUtils.post("wallet", conta);
    }, 
};