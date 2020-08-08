<template>
  <div>
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-lg="4" vs-sm="6" vs-xs="12">
        <CardValor titulo="Saldo atual" :valor="22000" />
      </vs-col>
      <vs-col vs-type="flex" vs-lg="4" vs-sm="6" vs-xs="12">
        <CardValor titulo="Despesas" mes="AGO" ano="2020" :valor="450" />
      </vs-col>
      <vs-col vs-type="flex" vs-lg="4" vs-sm="6" vs-xs="12">
        <CardValor titulo="Receitas" mes="AGO" ano="2020" :valor="3000" />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import CardValor from "@/components/custom/CardValor.vue";

export default {
  components: {
    CardValor,
  },
};
</script>