<template>
<div>
  <div id="c1"></div>
</div>
</template>

<script>

import { Chart } from '@antv/g2'

export default {
  data() {
    const chart = null;
    const chartData = [
      { year: "1951 年", sales: 38 },
      { year: "1952 年", sales: 52 },
      { year: "1956 年", sales: 61 },
      { year: "1957 年", sales: 145 },
      { year: "1958 年", sales: 48 },
      { year: "1959 年", sales: 38 },
      { year: "1960 年", sales: 38 },
      { year: "1962 年", sales: 38 },
    ];
    return {
      chart,
      chartData,
    };
  },
  mounted() {
    console.log("hello");
    console.log(this.chart);
    this.chart = new Chart({
      container: "c1",
      width: 600,
      height: 500,
    });
    this.chart.data(this.chartData);
    this.chart.scale("sales", {
      nice: true,
    });
    this.chart.tooltip({
      showMarkers: false,
    });
    this.chart.interaction("active-region");
    this.chart.interval().position("year*sales");
    this.chart.render();
  },
}

</script>
