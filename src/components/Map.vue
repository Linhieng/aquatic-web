<template>
  <div id="map" v-loading="loading"></div>
</template>

<script>

import AMap from 'AMap'

export default {
  data () {
    // 正在显示图片中
    let loading = true
    const map = null
    const lineArr = [
      [110.302074,21.147042],
      [110.302503,21.145601],
      [110.302503,21.145601],
      [110.302739,21.144701],
      [110.306601,21.144481],
      [110.309391,21.145621],
      [110.307245,21.151585],
      [110.304971,21.155127],
      [110.302889,21.156468],
      [110.296774,21.158469],
    ]
    return {
      loading,
      map,
      lineArr,
    }
  },
  mounted() {
    setTimeout(() => {
      this.map = new AMap.Map("map", {
        zoom: 14, 
        center: [110.303511,21.153466]
      })
      // 创建一个 Marker 实例：（标记点）
      const polyline = new AMap.Polyline({
          path: this.lineArr,          //设置线覆盖物路径
          strokeColor: "#3366FF", //线颜色
          strokeWeight: 5,        //线宽
          strokeStyle: "solid",   //线样式
      })
      this.map.add(polyline)
      setTimeout(() => {
        this.loading = false
      }, 3000);
    }, 3000);
  },
}

</script>

<style scoped>
#map {
  min-width: 600px;
  min-height: 500px;
}
</style>