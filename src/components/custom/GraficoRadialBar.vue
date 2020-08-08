<template>
  <vs-card class="d-theme-dark-bg p-3">
    <h3>{{titulo}}</h3>

    <apexchart type="radialBar" height="350" :options="chartOptions" :series="series"></apexchart>
  </vs-card>
</template>

<script>
export default {
  props: {
    titulo: "",
  },

  data() {
    return {
      series: [6.6],
      chartOptions: {
        chart: {
          height: 250,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "75%",
            },
          },
        },
        labels: ["Total"],
      },
    };
  },
};
</script>

<style scoped>
</style>