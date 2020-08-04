import apiUtils from "./api_utils.js";

export default {    
    login(userName, passwordHash) {
        return apiUtils.post("login", {userName, passwordHash});
    },
};