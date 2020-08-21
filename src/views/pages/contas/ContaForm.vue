<template>
  <vs-card class="d-theme-dark-bg">
    <div slot="header">
      <h3>Cadastro de conta</h3>
    </div>

    <div>
      <vs-row>
        <vs-col vs-lg="6" vs-sm="12" class="px-2 pt-2">
          <vs-input
            label="Nome"
            v-model="nome"
            class="w-full"
            name="nome"
            v-validate="'required'"
            :danger="errors.has('nome')"
            :danger-text="errors.first('nome')"
          />
        </vs-col>

        <vs-col vs-lg="6" vs-sm="12" class="px-2 pt-2">
          <vs-input
            label="Valor inicial"
            v-model="valorInicial"
            class="w-full"
            name="valorInicial"
            v-validate="'required'"
            :danger="errors.has('valorInicial')"
            :danger-text="errors.first('valorInicial')"
          />
        </vs-col>
      </vs-row>

      <vs-row vs-type="flex" vs-justify="flex-end" class="mt-6 pr-2">
        <vs-button v-if="!id" @click="validar" class="font-semibold">Cadastrar</vs-button>

        <vs-button v-if="id" @click="validar" class="font-semibold" type="filled">Editar</vs-button>
      </vs-row>
    </div>
  </vs-card>
</template>

<script>
import { Validator } from "vee-validate";
import utils from "@/assets/utils";
import api_conta from "@/api/api_conta";

import {
  number_format,
  remover_virgulaERS
} from "@/assets/utils/mask";

const dict = {
  custom: {
    nome: {
      required: "O nome da conta é obrigatório!",
    },

    valorInicial: {
      required: "O valor inicial da conta é obrigatório!",
    },
  },
};

Validator.localize("en", dict);

export default {
  data() {
    return {
      id: null,

      nome: null,
      valorInicial: null,
    };
  },

  mounted() {
    this.valorInicial = number_format("0");
  },

  methods: {
    async validar() {
      var invalido = 0;

      var result = await utils.validar(this.$validator);
      if (!result) invalido++;

      if (invalido == 0) {
        this.submit();
      } else {
        this.$vs.notify({
          color: "danger",
          title: "Erro",
          text: "Algum dos campos está com erro, verifique e tente novamente",
        });
      }
    },

    submit() {
      this.$vs.loading();

      var conta = {
        id: this.id ? this.id : 0,
        name: this.nome,
        balance: parseFloat(remover_virgulaERS(this.valorInicial)),
      };

      if (!this.id) {
        this.post(conta);
      } else {
        this.put(conta);
      }
    },

    post(conta) {
      // SALVAR
      api_conta
        .post(conta)
        .then(() => {
          this.$vs.loading.close();
          this.$vs.notify({
            color: "success",
            title: "Login",
            text: "Conta cadastrada com sucesso!",
          });
          this.$router.push({ name: "conta-list" });
        })
        .catch((error) => {
          var exception = utils.getError(error);
          this.$vs.loading.close();
          this.$vs.notify({
            color: "danger",
            title: "Erro ao cadastrar conta",
            text: exception,
          });
        });
    },

    put(conta) {
      // EDITAR
      conta.id = parseInt(this.id);

      api_conta
        .put(conta, this.id)
        .then(() => {
          this.$vs.loading.close();
          this.$vs.notify({
            color: "success",
            title: "Login",
            text: "Conta editada com sucesso!",
          });
          this.$router.push({ name: "conta-list" });
        })
        .catch((error) => {
          var exception = utils.getError(error);
          this.$vs.loading.close();
          this.$vs.notify({
            color: "danger",
            title: "Erro ao editar conta",
            text: exception,
          });
        });
    },
  },

  watch: {
    valorInicial() {
      if (this.valorInicial) {
        this.valorInicial = number_format(this.valorInicial);
      }
    },
  },
};
</script>

<style scoped>
</style>