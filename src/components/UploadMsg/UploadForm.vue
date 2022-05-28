<template>
  <el-form
    :model="formData"
    label-width="120px"
    class="upload-form"
  >
    <h2 class="title">车辆信息</h2>
    <el-form-item :label="data2name.driver"> <el-input v-model="formData.driver" /> </el-form-item>
    <el-form-item :label="data2name.contact"> <el-input v-model="formData.contact" /> </el-form-item>
    <el-form-item :label="data2name.vehicleId"> <el-select v-model="formData.vehicleId" placeholder="选择车牌">
      <el-option
        v-for="item in vehicleArr"
        :key="item.id"
        :label="`${item.vehicle} ------ ${item.status}`"
        :value="item.id"
      />
    </el-select> </el-form-item>
    <br />
    <h2 class="title">运输信息</h2>
    <el-form-item :label="data2name.loadTime"> <el-date-picker v-model="formData.loadTime" type="datetime" placeholder="选择日期和时间" /> </el-form-item>
    <el-form-item :label="data2name.departure"> <el-cascader v-model="formData.departure" :options="addressOptions" /> </el-form-item>
    <el-form-item :label="data2name.departureDatetime"> <el-date-picker v-model="formData.departureDatetime" type="datetime" placeholder="选择日期和时间" /> </el-form-item>
    <el-form-item :label="data2name.destination"> <el-cascader v-model="formData.destination" :options="addressOptions" /> </el-form-item>
    <el-form-item :label="data2name.description"> <el-input v-model="formData.description" /> </el-form-item>
    <br />
    <h2 class="title">产品信息</h2>
    <el-form-item :label="data2name.productQRCode"> <el-input v-model="formData.productQRCode" type="textarea" /> </el-form-item>
    <el-form-item :label="data2name.productName"> <el-input v-model="formData.productName" /> </el-form-item>
    <el-form-item :label="data2name.originPlace"> <el-cascader v-model="formData.originPlace" :options="addressOptions" /> </el-form-item>
    <el-form-item :label="data2name.specification"> <el-radio-group v-model="formData.specification">
      <el-radio label="优等品" />
      <el-radio label="标准品" />
    </el-radio-group> </el-form-item>
    <br />
    <el-button class="btn " type="primary" @click.prevent="onSubmit" >上传</el-button >
    <el-button class="btn clear" @click.prevent="clear">清空数据</el-button >
  </el-form>
</template>

<script>
import { getVehicle, addressOptions, formData, data2name } from "./data"
import { URL } from "@/constants/default.js"


export default {
  data() {
    let vehicleArr = '' // 可选的空闲车辆
    let array = [] // 产品 id 转换为 数组
    return {
      array,
      vehicleArr, 
      formData, 
      addressOptions,
      data2name,
    }
  },
  watch: {
    // 监视 录入的二维码，将其转换为数组格式
    'formData.productQRCode': function (newValue) {
      if (!this.formData.productQRCode) {
        this.array = []
        return
      }
      if (!newValue) { return }
      this.array = newValue.split(/[(\r\n)\r\n]+/);
      this.array.forEach((item, index) => {
        if (!item) {
          this.array.splice(index, 1)
        }
      })
    },
    // 监控车牌号(vehicleId)的选择, 让 vehicle 和 vehicleId 绑定在一起
    'formData.vehicleId': function (newValue) {
      this.formData.vehicle = this.id2vehicle(newValue)
    }
  },
  computed: {
    // 和 watch 搭配（好像）
    productQRCode() {
      return this.rules.productQRCode;
    },
  },
  methods: {
    // 上传
    async onSubmit() {

      if (!this.formDataRight()) return
      
      const url = `${URL}/logistics/add`
      const options = { emulateJSON: true }
      const { driver, contact, vehicle, vehicleId, departure, destination, description, departureDatetime, loadTime, productName, originPlace, specification } = this.formData
      // 将数据整理成后台允许接收的数据格式
      const data = {
        // 车辆信息
        driver,
        contact,
        vehicle,
        vehicleId,
        // 物流信息
        departure: departure[0] + departure[1],
        destination: destination[0] + destination[1],
        description,
        departureDatetime: this.formatTime(departureDatetime),
        loadTime: this.formatTime(loadTime),
        // 产品信息
        productQRCodes: [...this.array],
        product: {
          name: productName,
          originPlace: originPlace[0] + originPlace[1],
          specification,
          qr: "-1",
        },
      }
      
      console.log("上传的数据：", data)

      const { data: resData } = await this.$axios.post(url, data, options)

      console.log("服务器响应的数据：", resData)

      if (resData.code == "200" && resData.msg == "success") {
        this.$message.success("上传成功")
      }
      else 
        this.$message.error(`code: ${resData.code}, msg: ${resData.msg}`)
    },
    /* 工具函数 */
    clear() {
      Object.keys(this.formData).forEach(key => {
        this.formData[key] = undefined
      })
    },
    // 将时间格式化成后台需要的时间格式
    formatTime(ti) {
      let data
      try {
        data = 
          `${ti.getFullYear()}-${ti.getMonth() + 1 > 9 ? "" : "0"}${
            ti.getMonth() + 1
          }-${ti.getDate() > 9 ? "" : "0"}${ti.getDate()}T${
            ti.getHours() > 9 ? "" : "0"
          }${ti.getHours()}:${ti.getMinutes() > 9 ? "" : "0"}${ti.getMinutes()}:${
            ti.getSeconds() > 9 ? "" : "0"
          }${ti.getSeconds()}`
      } catch (error) {
        console.log(error)
      }
      
      return data
    },
    // 通过 vehicleid 找到对应的 vehicle 车牌号
    id2vehicle(id) {
      const vehicleArr = this.vehicleArr
      let vehicle
      vehicleArr.forEach((item) => {
        if (item.id === id) vehicle = item.vehicle
      })
      console.log(vehicle)
      return vehicle
    },
    // 验证输入的输入是否正确
    formDataRight() {
      const formData = this.formData 
      return Object.keys(formData).every(key => {  
        if (!formData[key]) {
          this.$message.error(`${data2name[key]}未输入`) 
          return false 
        } 
        return true
      })
    }
  },
  created() {
    getVehicle()
      .then((v) => {
        this.vehicleArr = v
      })
      .catch((err) => {
        this.$message.error(err)
      })
    console.log("UploadMsg created")
  },
  mounted() {
    console.log("UploadMsg mounted")
  },
  unmounted() {
    console.log("UploadMsg unmounted")
  },
  activated() {
    console.log("UploadMsg activated")
  },
  deactivated() {
    console.log("UploadMsg deactivated")
  },
}
</script>

<style lang="scss" scoped>
.upload-form {
  margin: 10px;
  padding: 10px;
  margin-bottom: 50px;
  .title {
    color: #555;
    font-size: 24px;
    line-height: 40px;
    padding-left: 30px;
    margin-bottom: 10px;
    position: relative;
    &::before {
      content: "";
      display: block;
      width: 4px;
      height: 100%;
      position: absolute;
      top: 0;
      left: 6px;
      background: var(--theme-color);
    }
  }
  .btn {
    width: 125px;
    height: 46px;
    font-size: 1.1rem;
    margin-left: 40px;
  }
  .btn.clear {
    
  }
}
</style>
