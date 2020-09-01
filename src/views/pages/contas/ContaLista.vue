<template>
  <div>
    <vs-row vs-type="flex" vs-justify="space-between">
      <h3 class="ml-2">Contas</h3>

      <vs-button
        class="float-right"
        icon-pack="feather"
        icon="icon-plus"
        :to="{ name: 'conta-cadastro'}"
      >Nova conta</vs-button>
    </vs-row>

    <div class="mt-10">
      <vs-row vs-w="12">
        <vs-col
          vs-type="flex"
          vs-lg="4"
          vs-sm="6"
          vs-xs="12"
          v-for="(conta, index) in contas"
          :key="index"
        >
          <cardConta
            :titulo="conta.name"
            :valor="conta.balance"
            :buttons="true"
            @despesa="novaDespesa(conta.id)"
            @receita="novaReceita(conta.id)"
          />
        </vs-col>
      </vs-row>
    </div>

    <receita-despesa-form
      :isSidebarActive="formReceitaDespesaActive"
      :isDespesa="isDespesa"
      :isReceita="isReceita"
      :idConta="id"
      @closeSidebar="formReceitaDespesaActive = false"
      v-if="formReceitaDespesaActive"
    />
  </div>
</template>

<script>
import cardConta from "@/components/custom/conta/CardConta.vue";
import api_conta from "@/api/api_conta";
import utils from "@/assets/utils";

import receitaDespesaForm from "./../receita_despesa/Form";

export default {
  components: {
    cardConta,
    receitaDespesaForm,
  },

  data() {
    return {
      contas: null,

      id: null,

      formReceitaDespesaActive: false,
      isDespesa: false,
      isReceita: false
    };
  },

  created() {
    this.getAll();
  },

  methods: {
    getAll() {
      this.$vs.loading();
      api_conta
        .getAll()
        .then((response) => {
          this.$vs.loading.close();

          this.contas = response.data;
        })
        .catch((error) => {
          var exception = utils.getError(error);

          this.$vs.loading.close();
          this.$vs.notify({
            color: "danger",
            title: "Erro ao carregar as contas!",
            text: exception,
          });
        });
    },

    novaReceita(id) {
      this.id = id;
      this.isDespesa = false;
      this.isReceita = true;
      this.formReceitaDespesaActive = true;
    },

    novaDespesa(id) {
      this.id = id;
      this.isDespesa = true;
      this.isReceita = false;
      this.formReceitaDespesaActive = true;
    },
  },
};
</script>

<style scoped>
</style>