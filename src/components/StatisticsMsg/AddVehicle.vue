<template>
  <el-button
    type="primary"
    @click="dialogFormVisible = true"
    class="add-vehicle-btn"
    >上传新的车辆</el-button
  >

  <el-dialog
    v-model="dialogFormVisible"
    title="上传新的车辆"
    :draggable="true"
    width="20%"
  >
    <el-form-item label="司机">
      <el-input v-model="driver" autocomplete="off" />
    </el-form-item>
    <el-form-item label="车牌号码">
      <el-input v-model="vehicle" autocomplete="off" />
    </el-form-item>
    <el-form-item label="车牌类型">
      <el-input v-model="type" autocomplete="off" />
    </el-form-item>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="uploadVehicle">上传</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { URL } from '@/constants/default.js'
import { getAllVehicle } from '../../api/getAllVehicle'

export default {
  data() {
    let dialogFormVisible = false // 弹出框的显示与否
    let driver = '' // 车牌号码
    let vehicle = '' // 车牌号码
    let type = '' // 车牌号码
    return {
      driver,
      vehicle,
      type,
      dialogFormVisible,
    }
  },
  methods: {
    async uploadVehicle() {
      if (!this.driver) {
        this.$message.error('请输入司机')
        return
      }
      if (!this.vehicle) {
        this.$message.error('请输入车牌号')
        return
      }
      if (!this.type) {
        this.$message.error('请输入车牌类型')
        return
      }

      const url = `${URL}/vehicle/add`
      const options = { emulateJSON: true }
      const data = {
        vehicle: this.vehicle,
        driver: this.driver,
        type: this.type,
      }
      const { data: resData } = await this.$axios.post(url, data, options)

      if (resData.code === 200 && resData.msg === 'success') {
        this.$msg.success('上传成功')
        this.initVehicle(this.vehicle)
      }
      this.dialogFormVisible = false
      this.vehicle = ''
      this.driver = ''
      this.type = ''
    },

    async initVehicle() {
      const data = await getAllVehicle()
      let unInitId = []
      data.forEach((v) => {
        if (v.status === '未初始化...') unInitId.push(v.id)
      })

      unInitId.forEach(async (v) => {
        const url = `${URL}/vehicle/init`
        const options = { emulateJSON: true }
        const data = { vehicle: v }
        const { data: resData } = await this.$axios.post(url, data, options)

        if (resData.code === 200 && resData.msg === 'success') {
          console.log('初始化成功')
        } else {
          console.log(resData.msg)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.add-vehicle-btn {
  width: 160px;
  height: 50px;
  margin: 20px;
}
</style>
