<template>
<div>
<div class="btn">
  <AddVehicle></AddVehicle>
  <el-button
    type="primary"
    class="flush-btn"
    @click="flush"
    >刷新图表</el-button
  >
</div>
<div class="show-container">
  <div class="fence show01">
    <VehicleShow :flushFlag="flushFlag"></VehicleShow>
  </div>
  <div class="fence show02">
    <VehicleInfo :flushFlag="flushFlag"></VehicleInfo>
  </div>
</div>
</div>
</template>

<script>
import VehicleShow from './VehicleShow.vue'
import VehicleInfo from './VehicleInfo.vue'
import AddVehicle from './AddVehicle.vue'

export default {
  components: { VehicleShow, VehicleInfo, AddVehicle },
  data() {
    let flushFlag = true  // 一变化就刷新数据
    return {
      flushFlag
    }
  },
  methods: {
    flush() {
      this.flushFlag = !this.flushFlag
    }
  },
}

</script>

<style lang="scss" scoped>

.btn {
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .flush-btn {
    width: 160px;
    height: 50px;
    margin: 20px;
  }
}

  .show-container {
    min-width: 500px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 10px 40px;

    .fence {
      min-width: 400px;
      flex: 0 1 auto;
      padding: 20px;
      &:hover {
        box-shadow: 0 0 10px var(--theme-color);
        border-radius: 10px;
      }
    }
    .fence.add {
      width: 150px;

    }
  }

</style>