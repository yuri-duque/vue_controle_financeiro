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
    };
  },

  mounted() {
    debugger;
    if (this.id) this.titulo += "Editar ";
    else this.titulo += "Cadastrar ";

    if (this.isDespesa) this.titulo += "despesa";
    else if(this.isReceita) this.titulo += "receita";
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
