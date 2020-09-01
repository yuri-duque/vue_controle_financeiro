<template>
  <vs-sidebar
    click-not-close
    position-right
    parent="body"
    default-index="1"
    color="primary"
    class="add-new-data-sidebar items-no-padding"
    spacer
    v-model="isSidebarActiveLocal"
  >
    <div class="mt-6 flex items-center justify-between px-6">
      <h4>{{titulo}}</h4>
      <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <div>
      <vs-col vs-lg="12" class="px-2 pt-2">
        <vs-input
          label="Descrição"
          v-model="descricao"
          class="w-full"
          name="descricao"
          v-validate="'required'"
          :danger="errors.has('descricao')"
          :danger-text="errors.first('descricao')"
        />
      </vs-col>

      <vs-col vs-lg="12" class="px-2 pt-2">
        <vs-input
          label="Valor"
          v-model="valor"
          class="w-full"
          name="valor"
          v-validate="'required'"
          :danger="errors.has('valor')"
          :danger-text="errors.first('valor')"
        />
      </vs-col>

      <vs-row vs-type="flex" vs-justify="flex-end" class="pt-8 px-2">
        <vs-button @click="validar" class="font-semibold w-full">Cadastrar</vs-button>
      </vs-row>
    </div>
  </vs-sidebar>
</template>

<script>
import { Validator } from "vee-validate";
import utils from "@/assets/utils";
import api_receita from "@/api/api_receita";
import api_despesa from "@/api/api_despesa";

import { number_format, remover_virgulaERS } from "@/assets/utils/mask";

const dict = {
  custom: {
    descricao: {
      required: "O nome da conta é obrigatório!",
    },

    valor: {
      required: "O valor inicial da conta é obrigatório!",
    },
  },
};

Validator.localize("en", dict);

export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true,
    },

    idConta: {
      type: Number,
      required: true,
    },

    isDespesa: {
      type: Boolean,
      required: true,
    },

    isReceita: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      titulo: "",

      descricao: null,
      valor: null,
    };
  },

  mounted() {
    if (this.isDespesa) this.titulo += "Cadastrar despesa";
    else if (this.isReceita) this.titulo += "Cadastrar receita";
  },

  computed: {
    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive;
      },
      set(val) {
        if (!val) {
          this.initValues();
          this.$emit("closeSidebar");
        }
      },
    },
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

      var receitaDespesa = {
        description: this.descricao,
        value: parseFloat(remover_virgulaERS(this.valor)),
        idWallet: this.idConta
      };

      var receitaOuDespesa = null;
      var api = null;

      if (this.isDespesa) {
        api = api_despesa;
        receitaOuDespesa = "Despesa";
      } else if (this.isReceita) {
        api = api_receita;
        receitaOuDespesa = "Receita";
      }

      this.post(api, receitaDespesa, receitaOuDespesa);
    },

    post(api, data, receitaOuDespesa) {
      api
        .post(data)
        .then(() => {
          this.$vs.loading.close();

          this.$vs.notify({
            color: "success",
            title: `Cadastro ${receitaOuDespesa}`,
            text: `${receitaOuDespesa} editada com sucesso!`,
          });

          this.$router.push({ name: "conta-lista" });
        })
        .catch((error) => {
          var exception = utils.getError(error);
          this.$vs.loading.close();

          this.$vs.notify({
            color: "danger",
            title: `Erro ao cadastrar ${receitaOuDespesa}`,
            text: exception,
          });
        });
    },

    initValues() {
      this.descricao = "";
      this.valor = "";
    },
  },

   watch: {
    valor() {
      if (this.valor) {
        this.valor = number_format(this.valor);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.text-center {
  text-align: center;
}
</style>
