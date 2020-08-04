<template>
  <div
    class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
    id="page-login"
  >
    <div class="vx-col sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row no-gutter justify-center items-center">
            <div class="vx-col sm:w-full md:w-full d-theme-dark-bg">
              <div class="p-8">
                <div class="vx-card__title flex flex-col items-center mb-8">
                  <h4 class="mb-4">Cadastrar</h4>
                  <p>Se cadastre para poder logar no sistema.</p>
                </div>
                <vs-input
                  type="mail"
                  icon="icon icon-mail"
                  icon-pack="feather"
                  label-placeholder="E-mail"
                  v-model="mail"
                  class="w-full no-icon-border"
                  name="mail"
                  v-validate="'required'"
                  :danger="errors.has('mail')"
                  :danger-text="errors.first('mail')"
                />

                <vs-input
                  icon="icon icon-user"
                  icon-pack="feather"
                  label-placeholder="Username"
                  v-model="username"
                  class="w-full mt-6 no-icon-border"
                  name="username"
                  v-validate="'required'"
                  :danger="errors.has('username')"
                  :danger-text="errors.first('username')"
                />

                <vs-input
                  type="password"
                  icon="icon icon-lock"
                  icon-pack="feather"
                  label-placeholder="Senha"
                  v-model="password"
                  class="w-full mt-6 no-icon-border"
                  name="password"
                  v-validate="'required'"
                  :danger="errors.has('password')"
                  :danger-text="errors.first('password')"
                />

                <vs-row class="mt-8">
                  <vs-col vs-w="6">
                    <vs-button :to="{ name: 'login'}" type="border">Voltar</vs-button>
                  </vs-col>
                  <vs-col vs-w="6">
                    <vs-button
                    class="float-right"
                    @click.prevent="submitForm"
                  >Cadastrar</vs-button>
                  </vs-col>
                </vs-row>
              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
import { Validator } from "vee-validate";
import utils from "@/assets/utils";

const dict = {
  custom: {
    mail:{
      required: "O username é obrigatório!",
    },

    username: {
      required: "O username é obrigatório!",
    },
    password: {
      required: "A senha é obrigatória!",
    },
  },
};

Validator.localize("pt", dict);

export default {
  data() {
    return {
      mail: "",
      username: "",
      password: ""
    };
  },

  methods:{
    async submitForm(){
      var valido = 0;

      var result = await utils.validar(this.$validator);
      if (!result) valido++;

      if (valido == 0) {
        this.cadastrar();
      }else{
        this.$vs.notify({
          color: "danger",
          title: "Erro",
          text: "Algum dos campos está com erro, verifique e tente novamente",
        });
      }
    },

    cadastrar(){

    }
  }
}
</script>
