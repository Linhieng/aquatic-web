<template>
  <h2 class="title">车辆空闲情况</h2>
  <div id="show-vehicle"></div>
</template>

<script>

import { Chart, getEngine } from '@antv/g2'
const G = getEngine('canvas')
import { getR } from '@/request/request.js'

export default {
  props: ['flushFlag'],
    data() {
        let chart = null
        console.log(this.flushFlag)
        return {
            chart,
        };
    },
    watch: {
      'flushFlag': function(n) {
        this.flush()
      }
    },
    methods: {
        // 获取空闲车辆比例
        async getVehiclePercent() {
            const v = await getR("/vehicle/all");
            let num = 0;
            v.forEach(item => {
                if (item.status === "空闲")
                    num++;
            });
            return num / v.length;
        },
        // 渲染表格
        async showVehicle() {
            const percent = await this.getVehiclePercent();
            const data = [
                { status: "空闲", sold: percent },
                { status: "忙碌", sold: 1 - percent },
            ];
            const chart = new Chart({
                container: "show-vehicle",
                autoFit: true,
                height: 400,
                padding: [20, 30, 30, 20],
            });
            chart.coordinate("theta", { radius: 0.8, });
            chart.data(data);
            chart.tooltip({
                showTitle: false,
                showMarkers: false,
            });
            chart
                .interval()
                .adjust("stack")
                .position("sold")
                .color("status", ["#1890ff", "#f04864"]);
            chart.interaction("element-active");
            chart.render();
            this.chart = chart;
        },
        // 刷新
        async flush() {
            const percent = await this.getVehiclePercent();
            const data = [
                { status: "空闲", sold: percent },
                { status: "忙碌", sold: 1 - percent },
            ];
            this.chart.changeData(data);
        }
    },
    mounted() {
        this.showVehicle();
    },
}

</script>


<style lang="scss" scoped>
  #show-vehicle {
    width: 400px;
  }
  .title {
    width: 200px;
    padding-bottom: 10px;
    margin: 20px 100px;
    font-size: 24px;
    text-align: center;
    border-bottom: 4px solid var(--theme-color);
  }
  .flush-btn {
    width: 200px;
    margin: 0 100px;
    display: flex;
    justify-content: center;
  }

</style>