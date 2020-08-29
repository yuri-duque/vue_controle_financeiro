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

    <div>
        <vs-col vs-lg="6" vs-sm="12" class="px-2 pt-2">
          <vs-input
            label="Descrição"
            v-model="descricao"
            class="w-full"
            name="descricao"
            v-validate="'required'"
            :danger="errors.has('descricao')"
            :danger-text="errors.first('descricao')"
          />
        </vs-col>

        <vs-col vs-lg="6" vs-sm="12" class="px-2 pt-2">
          <vs-input
            label="Valor"
            v-model="valor"
            class="w-full"
            name="valor"
            v-validate="'required'"
            :danger="errors.has('valor')"
            :danger-text="errors.first('valor')"
          />
        </vs-col>
      

      <vs-row vs-type="flex" vs-justify="flex-end" class="mt-6 pb-4 pr-2">
        <vs-button v-if="!id" @click="validar" class="font-semibold">Cadastrar</vs-button>

        <vs-button v-if="id" @click="validar" class="font-semibold" type="filled">Editar</vs-button>
      </vs-row>
    </div>

  </vs-sidebar>
</template>

<script>
import { Validator } from "vee-validate";
import utils from "@/assets/utils";
import api_receita from "@/api/api_receita";
import api_despesa from "@/api/api_despesa";

import {
  number_format,
  remover_virgulaERS
} from "@/assets/utils/mask";

const dict = {
  custom: {
    descricao: {
      required: "O nome da conta é obrigatório!",
    },

    valor: {
      required: "O valor inicial da conta é obrigatório!",
    },
  },
};

Validator.localize("en", dict);

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

      receitaDespesa:{
        descricao: null,
        valor: null
      }
    };
  },

  mounted() {
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
.text-center{
  text-align: center;
}
</style>
