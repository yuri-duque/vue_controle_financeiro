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
            v-model="titulo"
            class="w-full"
            name="titulo"
            v-validate="'required'"
            :danger="errors.has('titulo')"
            :danger-text="errors.first('titulo')"
          />
        </vs-col>

        <vs-col vs-lg="6" vs-sm="12" class="px-2 pt-2">
          <vs-input
            label="Valor inicial"
            v-model="titulo"
            class="w-full"
            name="titulo"
            v-validate="'required'"
            :danger="errors.has('titulo')"
            :danger-text="errors.first('titulo')"
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

export default {
  data() {
    return {
      id: null,

      titulo: null,

      selectClassificacao: null,
      optionsClassificacao: [
        { id: 0, descricao: "Livre" },
        { id: 10, descricao: "Dez" },
        { id: 12, descricao: "Doze" },
        { id: 14, descricao: "Quatorze" },
        { id: 16, descricao: "Dezesseis" },
        { id: 18, descricao: "Dezoito" },
      ],

      lancamento: false,
    };
  },
};
</script>

<style scoped>
</style>