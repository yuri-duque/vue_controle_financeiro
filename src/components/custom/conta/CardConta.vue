<template>
  <vs-card class="d-theme-dark-bg mx-2 m-0">
    <div slot="header">
      <vs-row vs-type="flex" vs-justify="center">
        <h3>{{titulo}}</h3>
      </vs-row>
    </div>

    <vs-row vs-type="flex" vs-justify="center">
      <h3>{{formatarValor(valor)}}</h3>
    </vs-row>
    
    <vs-row class="my-3 mt-5">
      <vs-col vs-type="flex" vs-w="6" class="px-2">
        <vs-button icon-pack="feather" icon="icon-arrow-down" color="danger" class="w-full" @click="despesa"></vs-button>
      </vs-col>

      <vs-col vs-type="flex" vs-w="6" class="px-2">
        <vs-button icon-pack="feather" icon="icon-arrow-up" color="success" class="w-full"  @click="receita"></vs-button>
      </vs-col>      
    </vs-row>
  </vs-card>
</template>

<script>
export default {
  props: {
    titulo: "",
    valor: null,
    buttons: null,
  },

  methods: {
    formatarValor(valor) {
      if (!valor) return "R$ 0,00";

      var valueFormatado = valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
      return valueFormatado;
    },

    despesa(){
      this.$emit('despesa')
    },

    receita(){
      this.$emit('receita')
    }
  },
};
</script>

<style>
.vs-card--content{
  padding-bottom: 0px !important;
  margin-bottom: 0px !important;
}
</style>