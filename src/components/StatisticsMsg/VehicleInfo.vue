<template>
  <div class="container">
    <h2 class="title">全部车辆状态</h2>
    <div class="radio">
      <el-radio-group v-model="vehicleStatus">
        <el-radio-button label="all"> 所有车辆 </el-radio-button>
        <el-radio-button label="busy"> 忙绿车辆 </el-radio-button>
        <el-radio-button label="free"> 空闲车辆 </el-radio-button>
      </el-radio-group>
    </div>
    <div class="table">
      <el-table
        :data="showVehicle"
        border
        height="400"
        stripe
        style="width: 100%"
      >
        <el-table-column label="车牌号" prop="vehicle" width="180" />
        <el-table-column label="车辆唯一标识" prop="id" width="180" />
        <el-table-column label="车辆状态" prop="status" />
      </el-table>
    </div>
  </div>
</template>

<script>
import { getR } from '@/request/request.js'

export default {
  props: ['flushFlag'],
  data() {
    let busyVehicle
    let freeVehicle
    let allVehicle
    let showVehicle //  默认为 all
    let vehicleStatus = 'all'
    return {
      showVehicle,
      vehicleStatus,
    }
  },
  watch: {
    flushFlag: function () {
      this.flush()
    },
    vehicleStatus: function (newV) {
      switch (newV) {
        case 'all':
          this.showVehicle = this.allVehicle
          break
        case 'free':
          this.showVehicle = this.freeVehicle
          break
        case 'busy':
          this.showVehicle = this.busyVehicle
          break
      }
    },
  },
  methods: {
    getMission() {
      getR('/vehicle/onMission').then((v) => {
        this.busyVehicle = v
      })
    },
    getFree() {
      getR('/vehicle/free').then((v) => {
        this.freeVehicle = v
      })
    },
    getAll() {
      getR('/vehicle/all').then((v) => {
        this.allVehicle = v
        this.showVehicle = v
      })
    },
    flush() {
      this.getMission()
      this.getFree()
      this.getAll()
      this.vehicleStatus = 'all'
    },
  },
  mounted() {
    this.flush()
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 600px;

  .title {
    width: 200px;
    margin: 10px 200px;
    padding-bottom: 10px;
    font-size: 24px;
    text-align: center;
    border-bottom: 4px solid var(--theme-color);
  }
  .radio {
    width: 600px;
    margin: 20px 0;
    display: flex;
    justify-content: center;
  }
}
</style>
