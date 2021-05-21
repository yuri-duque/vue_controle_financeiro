import apiUtils from "./api_utils.js";

export default {   
    getAllByConta(idConta) {
        return apiUtils.get(`income?idWallet=${idConta}`);
    },

    post(despesa){
        return apiUtils.post("income", despesa);
    }
};