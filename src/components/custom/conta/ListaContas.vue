<template>
  <div>
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
</template>

<script>
import cardConta from "./CardConta.vue";

export default {
  components: {
    cardConta,
  },
};
</script>

<style scoped>
</style>