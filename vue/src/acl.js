import Vue from "vue";
import { AclInstaller, AclCreate, AclRule } from "vue-acl";
import router from "./router";

Vue.use(AclInstaller);

export default new AclCreate({
  initial: "public",
  notfound: {
    path: "/error",
    forwardQueryParams: true
  },
  router,
  acceptLocalRules: true,
  globalRules: {
    admin: new AclRule("admin").generate(),
    public: new AclRule("public").or("admin").generate(),
    logged: new AclRule("user").and("inside").generate()
  }
});
