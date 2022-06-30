<template>
  <div id="map-container">
    <div id="map" v-loading="loading"></div>
  </div>
</template>

<script>
import AMap from 'AMap'

export default {
  data() {
    // 正在显示图片中
    let loading = true
    const map = null
    const lineArr = [
      // [110.302074, 21.147042],
      // [110.302503, 21.145601],
      // [110.302503, 21.145601],
      // [110.302739, 21.144701],
      // [110.306601, 21.144481],
      // [110.309391, 21.145621],
      // [110.307245, 21.151585],
      // [110.304971, 21.155127],
      // [110.302889, 21.156468],
      // [110.296774, 21.158469],
      [110.30143250439451, 21.155529984521632],
      [110.29319275830076, 21.1600124960265],
      [110.28563965771482, 21.176660635896432],
      [110.27122010205076, 21.192026486502566],
      [110.25268067333982, 21.23363430673905],
      [110.25886048291014, 21.266912113288956],
      [110.24924744580076, 21.280349096006866],
      [110.25817383740232, 21.31361634137244],
      [110.28563965771482, 21.344957427763273],
      [110.31035889599607, 21.360305720647272],
      [110.33713807080076, 21.380128219198806],
      [110.40786255810545, 21.401226638707495],
    ]
    return {
      loading,
      map,
      lineArr,
    }
  },
  mounted() {
    this.showMap()
  },
  methods: {
    // 显示地图
    showMap() {
      setTimeout(() => {
        const mapOpts = {
          zoom: 14, // 初始缩放级别
          center: [110.303511, 21.153466], // 中心坐标
          showIndoorMap: false, // 是否在有矢量底图的时候自动展示室内地图，PC默认true,移动端默认false
          resizeEnable: true, //是否监控地图容器尺寸变化，默认值为false
          dragEnable: true, // 地图是否可通过鼠标拖拽平移，默认为true
          keyboardEnable: false, //地图是否可通过键盘控制，默认为true
          doubleClickZoom: false, // 地图是否可通过双击鼠标放大地图，默认为true
          zoomEnable: true, //地图是否可缩放，默认值为true
          rotateEnable: false, // 地图是否可旋转，3D视图默认为true，2D视图默认false
          scrollWheel: false, // 是否允许鼠标滚动缩放
        }

        this.map = new AMap.Map('map', mapOpts)
        // 创建一个 Marker 实例：（标记点）
        const polyline = new AMap.Polyline({
          path: this.lineArr, //设置线覆盖物路径
          strokeColor: '#3366FF', //线颜色
          strokeWeight: 5, //线宽
          strokeStyle: 'solid', //线样式
        })
        this.map.add(polyline)

        this.map.plugin(['AMap.ToolBar'], () => {
          this.map.addControl(new AMap.ToolBar())
        })
        // if(location.href.indexOf('&guide=1')!==-1){
        //   map.setStatus({scrollWheel:false})
        // }

        setTimeout(() => {
          this.loading = false
        }, 3000)
      }, 3000)
    },
  },
}
</script>

<style lang="scss" scoped>
#map-container {
  widows: 100%;
  height: 90%;
  margin: 20px;
  box-shadow: 0 0 10px #999;
  border-radius: 20px;
  overflow: hidden;

  #map {
    min-width: 600px;
    min-height: 500px;
    width: 100%;
    height: 100%;
  }
}
</style>
