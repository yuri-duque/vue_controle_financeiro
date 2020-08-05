import apiUtils from "./api_utils.js";

export default {    
    login(login) {
        return apiUtils.post("user/login", login);
    },
};