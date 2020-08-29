import apiUtils from "./api_utils.js";

export default {   
    getAll() {
        return apiUtils.get("wallet");
    },

    post(conta){
        return apiUtils.post("wallet", conta);
    },

    put(conta, id){
        return apiUtils.put("wallet", conta, id);
    }
};