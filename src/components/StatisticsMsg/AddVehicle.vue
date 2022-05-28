<template>
  <el-button
    type="primary"
    @click="dialogFormVisible = true"
    class="add-vehicle-btn"
    >上传新的车辆</el-button
  >

  <el-dialog v-model="dialogFormVisible" title="Shipping address" :draggable="true" width="20%">
    <el-form-item label="车牌号码" >
      <el-input v-model="vehicle" autocomplete="off" />
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
import { URL } from "@/constants/default.js"

export default {
  data() {
    let dialogFormVisible = false // 弹出框的显示与否
    let vehicle = "" // 车牌号码
    return {
      vehicle,
      dialogFormVisible,
    }
  },
  methods: {
    async uploadVehicle() {
      if (!this.vehicle) {
        this.$message.error("请输入车牌号")
        return
      }

      const url = `${URL}/vehicle/init`
      const options = { emulateJSON: true }
      const data = { vehicle: this.vehicle }
      const { data: resData } = await this.$axios.post(url, data, options)

      if (resData.code === 200 && resData.msg === 'success') {
        this.$msg.success('上传成功')
      }
      this.dialogFormVisible = false
      this.vehicle = ''
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