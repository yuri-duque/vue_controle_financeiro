<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template functional>
  <footer class="the-footer flex-wrap justify-between" :class="classes">
    <span>
      YURI DUQUE  -- {{ new Date().getFullYear() }}
      <a
        href="https://github.com/yuriduque"
        target="_blank"
        rel="nofollow"
        class="ml-4"
      > github </a>

      <a
        href="https://www.linkedin.com/in/yuri-duque/"
        target="_blank"
        rel="nofollow"
        class="ml-4"
      > linkedin </a>
    </span>
  </footer>
</template>

<script>
export default {
  name: "the-footer",
  props: {
    classes: {
      type: String,
    },
  },
};
</script>
