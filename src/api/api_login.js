import apiUtils from "./api_utils.js";

export default {
    
    async login(userName, passwordHash) {
        return await apiUtils.post("login", {userName, passwordHash});
    },
};