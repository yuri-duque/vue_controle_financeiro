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
      <h4 v-if="!this.id">ADICIONAR NOVO TIPO DE PRODUTO</h4>
      <h4 v-if="this.id">EDITAR TIPO DE PRODUTO</h4>
      <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <h1>TESTE SIDE BAR</h1>
  </vs-sidebar>
</template>

<script>
export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true,
    },
    id: null,
  },

  data() {
    return {};
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
    initValues() {},
  },
};
</script>

<style lang="scss" scoped>
</style>
