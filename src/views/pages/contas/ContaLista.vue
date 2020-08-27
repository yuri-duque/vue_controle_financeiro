<template>
  <div>
    <vs-row vs-type="flex" vs-justify="space-between">
      <h3 class="ml-2">Contas</h3>

      <vs-button class="float-right" icon-pack="feather" icon="icon-plus" :to="{ name: 'conta-cadastro'}">Nova conta</vs-button>
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
          <cardConta :titulo="conta.name" :valor="conta.balance" :buttons="true"/>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
import cardConta from "@/components/custom/conta/CardConta.vue";
import api_conta from "@/api/api_conta";
import utils from "@/assets/utils";

export default {
  components: {
    cardConta,
  },

  data() {
    return {
      contas: null,
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
  },
};
</script>

<style scoped>
</style>