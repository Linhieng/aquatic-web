<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="upload-form"
  >
    <el-form-item prop="driver" label="司机姓名"> <el-input v-model="ruleForm.driver" /> </el-form-item>
    <el-form-item prop="contact" label="司机号码"> <el-input v-model="ruleForm.contact" /> </el-form-item>
    <el-form-item prop="vehicle" label="车牌号码"> <el-input v-model="ruleForm.vehicle" /> </el-form-item>
    <br>
    <el-form-item prop="loadTime" label="装车时间"> <el-date-picker v-model="ruleForm.loadTime" type="datetime" placeholder="选择日期和时间" /> </el-form-item>
    <el-form-item prop="departure" label="出发地"> <el-cascader v-model="ruleForm.departure" :options="options" /> </el-form-item>
    <!-- <el-form-item prop="departure" label="出发地"> <el-input v-model="ruleForm.departure" /> </el-form-item> -->
    <el-form-item prop="departureDatetime" label="出发时间"> <el-date-picker v-model="ruleForm.departureDatetime" type="datetime" placeholder="选择日期和时间" /> </el-form-item>
    <el-form-item prop="destination" label="目的地"> <el-cascader v-model="ruleForm.destination" :options="options" /> </el-form-item>
    <!-- <el-form-item prop="destination" label="目的地"> <el-input v-model="ruleForm.destination" /> </el-form-item> -->
    <el-form-item prop="description" label="物流描述信息"> <el-input v-model="ruleForm.description" /> </el-form-item>
    <br>
    <el-form-item prop="productQRCode" label="水产品ID"> <el-input v-model="ruleForm.productQRCode" type="textarea" /> </el-form-item>
    <el-form-item prop="productName" label="水产品名称"> <el-input v-model="ruleForm.productName" /> </el-form-item>
    <el-form-item prop="originPlace" label="产品产地"> <el-cascader v-model="ruleForm.originPlace" :options="options" /> </el-form-item>
    <!-- <el-form-item prop="originPlace" label="产品产地"> <el-input v-model="ruleForm.originPlace" /> </el-form-item> -->
    <el-form-item prop="specification" label="产品规格">
      <el-radio-group v-model="ruleForm.specification">
        <el-radio label="优等品" />
        <el-radio label="标准品" />
      </el-radio-group>
    </el-form-item>
    <br>
    <el-button type="primary" @click.prevent="onSubmit">上传</el-button>
  </el-form>

</template>

<script>
import { address, ruleForm, rules } from  './data'

export default ({
    data() {
        return {
            ruleForm,
            rules,
            options: address,
        };
    },
    methods: {
        // 上传
        async onSubmit() {
            console.log(this.ruleForm);
            // 获取页面输入的数据
            const { 
            // 车辆信息
            driver, contact, vehicle, 
            // 物流信息
            departure, destination, departureDatetime, loadTime, description, 
            // 产品信息
            productName, originPlace, specification, } = this.ruleForm;
            // 将数据整理成后台允许接收的数据格式
            const data = {
                // 车辆信息
                driver,
                contact,
                vehicle,
                vehicleId: vehicle,
                // 物流信息
                departure,
                destination,
                departureDatetime: this.formatTime(departureDatetime),
                loadTime: this.formatTime(loadTime),
                description,
                // 产品信息
                productQRCodes: this.array,
                product: {
                    name: productName,
                    originPlace,
                    specification,
                    qr: "-1",
                },
            };
            console.log("上传的数据：", data);
            //**** 在这里最后处理一下，让上传按钮无法点击（转圈圈），请求接收后再允许点击
            const { data: resData } = await this.$axios.post("http://cn-hk-nf-1.natfrp.cloud:17653/logistics/add", data, { emulateJSON: true });
            console.log("服务器响应的数据：", resData);
            if (resData.code == "200" && resData.msg == "success")
                this.$message.success("上传成功");
            else
                this.$message.error("上传出错");
        },
    },
    created() {
        console.log('组件 created')
    },
    mounted() {
      console.log('组件 mounted')
    },
    unmounted() {
      console.log('组件 unmounted')
    },
    activated() {
      // 在首次挂载、
      // 以及每次从缓存中被重新插入的时候调用
      console.log('组件 activated')
    },
    deactivated() {
      console.log('组件 deactivated')
    }
})
</script>

<style lang="scss">
.el-button {
  width: 145px;
  height: 56px;
  font-size: 2rem;
  margin-left: 80px;
}
</style>

<!-- 
<style lang="scss" scoped>
#upload-container {
  padding: 20px;
  .el-container {
    height: auto;
    width: 100%;

    .el-header {
      height: 5.5rem !important;
      width: 100%;
      padding: 0;
      box-sizing: border-box;
    }

    .el-container {
      height: calc(100vh - 5.5rem);
      width: 100%;

      .el-main {
        min-height: 100%;
        height: 100%;
      }

      .box-card {
        height: 100%;
        width: auto;
        overflow-y: scroll;
      }
    }
  }

  .header {
    height: 100%;
    background-color: #4596FF;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .left {
      padding: 0 3rem;
      font-weight: 600;
      color: #fff;
      font-size: 2rem;
    }

    .avatar, .toHome {
      padding: 0 4rem;
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 50%;
      overflow: hidden;

      img {
        height: 100%;
        width: 100%;
      }
    }

    div {
      display: flex;
      flex-direction: row;
    }
  }
}

.forms {
  width: 600px;
  margin: auto;

  // >>> .el-button {
  // width :145px
  // height :56px
  // font-size: 17px
  // margin-left :50px
  // }
  >>> .el-form-item__label {
    font-size: 17px;
  }
}

.el-button {
  width: 145px;
  height: 56px;
  font-size: 2rem;
  margin-left: 80px;
}
</style> -->
