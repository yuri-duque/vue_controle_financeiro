const apiUrl = "https://localhost:44388/api";
// const apiUrl = "https://encartesapi.smartretail.app/api"; 
const siteUrl =  process.env.VUE_APP_ROOT_SITE;
const domain = process.env.VUE_APP_DOMAIN;
const domainApi = process.env.VUE_APP_DOMAIN_API;
var config = {
    apiUrl,siteUrl,domain, domainApi
}

export default config;
