<template>
  <div>
    <vs-row vs-type="flex" vs-justify="space-between">
      <h3 class="ml-2">Contas</h3>

      <vs-button class="float-right" icon="add" @click.prevent="submitForm">Nova conta
      </vs-button>
    </vs-row>

    <div class="mt-10">
      <vs-row vs-w="12">
        <vs-col vs-type="flex" vs-lg="4" vs-sm="6" vs-xs="12">
          <cardConta />
        </vs-col>
        <vs-col vs-type="flex" vs-lg="4" vs-sm="6" vs-xs="12">
          <cardConta />
        </vs-col>
        <vs-col vs-type="flex" vs-lg="4" vs-sm="6" vs-xs="12">
          <cardConta />
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
import cardConta from "@/components/custom/conta/CardConta.vue";

export default {
  components: {
    cardConta,
  },
};
</script>

<style scoped>
</style>