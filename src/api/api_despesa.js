import apiUtils from "./api_utils.js";

export default {   
    getAllByConta(idConta) {
        return apiUtils.get(`expense?idWallet=${idConta}`);
    },

    post(despesa){
        return apiUtils.post("expense", despesa);
    }
};