<template>
  <vs-card class="d-theme-dark-bg mx-2">
    <div slot="header">
      <vs-row vs-type="flex" vs-justify="center">
        <h3>{{titulo}}</h3>
      </vs-row>
    </div>

    <vs-row vs-type="flex" vs-justify="center">
      <h3>{{formatarValor(valor)}}</h3>
    </vs-row>
  </vs-card>
</template>

<script>
export default {
  props:{
    titulo: "",
    valor: null
  },

  methods:{
    formatarValor(valor) {
      if (!valor) return "R$ 0,00";

      var valueFormatado = valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
      return valueFormatado;
    },
  }
};
</script>

<style scoped>
</style>