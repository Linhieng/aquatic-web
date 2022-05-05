<template>
  <div class="home">
    <div class="body">
      <h2>车辆信息</h2>
      <div class="forms">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="150px"
          class="demo-ruleForm"
        >
          <el-form-item label="车主姓名" prop="driver">
            <el-input v-model="ruleForm.driver"></el-input>
          </el-form-item>
          <el-form-item label="车主联系电话" prop="contact">
            <el-input v-model="ruleForm.contact"></el-input>
          </el-form-item>
          <el-form-item label="车辆号" prop="vehicle">
            <el-input v-model="ruleForm.vehicle"></el-input>
          </el-form-item>          

          <hr />
          <br />

          <h2>运输信息</h2>
          <el-form-item label="出发地" prop="departure">
            <el-input v-model="ruleForm.departure"></el-input>
          </el-form-item>
          <el-form-item label="目的地" prop="destination">
            <el-input v-model="ruleForm.destination"></el-input>
          </el-form-item>
          <el-form-item label="装车时间" prop="loadTime">
            <el-date-picker
              v-model="ruleForm.loadTime"
              type="datetime"
              placeholder="选择装车时间"
              style="width: 100%"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="出发时间" prop="departureDatetime">
            <el-date-picker
              v-model="ruleForm.departureDatetime"
              type="datetime"
              placeholder="选择出发时间"
              style="width: 100%"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="物流描述信息" prop="description">
            <el-input v-model="description"></el-input>
          </el-form-item>
          
          <hr />
          <br />

          <h2>水产品信息</h2>
          <el-form-item label="水产品ID" prop="productQRCode">
            <el-input
              type="textarea"
              :autosize="{ minRows: 1, maxRows: 5 }"
              v-model="ruleForm.productQRCode"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="水产品名称" prop="productName">
            <el-input v-model="ruleForm.productName"></el-input>
          </el-form-item>
          <el-form-item label="产地" prop="origin">
            <el-input v-model="ruleForm.origin"></el-input>
          </el-form-item>
          <el-form-item label="规格" prop="specification">
            <el-input v-model="ruleForm.specification"></el-input>
          </el-form-item>
          <el-form-item label="水产品描述" prop="seaProductDescription">
            <el-input v-model="ruleForm.seaProductDescription"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div style="text-align: center">
        <el-button type="primary" @click="onSubmit">上传</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkPhone = (rule, value, callback) => {
      const phoneReg = /^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/;
      if (!value) {
        return callback(new Error("电话号码不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(+value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (phoneReg.test(value)) {
            callback();
          } else {
            callback(new Error("电话号码格式不正确"));
          }
        }
      }, 100);
    };

    const ruleForm = {
      driver: "范振南",
      contact: "18824143496",
      vehicle: "粤V5655",
      
      departure: "湛江",
      destination: "广州",
      finalWeight: "130",
      weight: "144",
      departureDatetime: "2022-04-13 01:50",
      seaProductDescription: "来自湛江特产的生蚝",
      loadTime: "2022-04-13 01:40",
      productQRCode: "",
      productName: "生蚝",
      origin: "湛江",
      specification: "特等品",
    };

    return {
      array: [],
      ruleForm,
      rules: {
        vehicle: [
          { required: true, message: "请输入车辆号", trigger: "blur" },
          { max: 10, message: "字数最多为十", trigger: "blur" },
        ],
        carKind: [
          { required: true, message: "请输入车辆类型", trigger: "blur" },
        ],
        driver: [
          { required: true, message: "请输入车主姓名", trigger: "blur" },
        ],
        contact: [{ required: true, validator: checkPhone, trigger: "blur" }],
        departure: [
          { required: true, message: "请输入出发地", trigger: "blur" },
        ],
        destination: [
          { required: true, message: "请输入目的地", trigger: "blur" },
        ],
        departureDatetime: [
          { required: true, message: "请输入出发时间", trigger: "blur" },
        ],
        loadTime: [
          { required: true, message: "请输入装车时间", trigger: "blur" },
        ],
        productQRCode: [
          { required: true, message: "请输入水产品ID", trigger: "blur" },
        ],
        productName: [
          { required: true, message: "请输入水产品名称", trigger: "blur" },
        ],
        origin: [{ required: true, message: "请输入产地", trigger: "blur" }],
        seaProductDescription: [
          { required: true, message: "请输入水产品描述", trigger: "blur" },
        ],
        specification: [
          { required: true, message: "请输入规格", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    formatTime(ti) {
      let t;
      if (typeof ti === "string") {
        t = `${ti.substring(0, 10)} ${ti.substring(11, 16)}`;
      } else {
        t = `${ti.getFullYear()}-${ti.getMonth()}-${ti.getDate()} ${ti.getHours()}:${ti.getMinutes()}`;
      }
      return t;
    },
    async onSubmit() {
      // 获取页面输入的数据
      const {
        contact,
        departure,
        departureDatetime,
        carKind,
        destination,
        vehicle,
        weight,
        finalWeight,
        driver,
        seaProductDescription,
        productName,
        origin,
        specification,
        loadTime,
      } = this.ruleForm;
      // 将数据整理成后台允许接收的数据格式
      const data = {
        carKind,
        departure,
        destination,
        vehicle,
        weight,
        finalWeight,
        driver,
        contact,
        loadTime: this.formatTime(loadTime),
        departureDatetime: this.formatTime(departureDatetime),
        seaProductDescription,
        productQRCode: this.array,
        product: { name: productName, origin, specification },
      };

      console.log('上传数据:')
      console.log(data);
      const resData = await this.$axios.post(
        "http://cn-hk-nf-1.natfrp.cloud:17653/logistics/add",
        data,
        { emulateJSON: true }
      );
      console.log('响应数据：')
      console.log(resData);
      alert(" 上传成功");
    },
    isArray() {
      this.array = this.ruleForm.productQRCode.split(/[(\r\n)\r\n]+/);
      this.array.forEach((item, index) => {
        if (!item) {
          this.array.splice(index, 1);
        }
      });
    },
  },
  watch: {
    // 监视 录入的二维码，将其转换为数组格式
    "ruleForm.productQRCode": function (newValue, oldValue) {
      this.array = newValue.split(/[(\r\n)\r\n]+/);
      this.array.forEach((item, index) => {
        if (!item) {
          this.array.splice(index, 1);
        }
      });
    },
  },
  computed: {
    // 
    productQRCode() {
      return this.rules.productQRCode;
    },
  },
};
</script>

<style lang="stylus" scoped>
.home {
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

h2 {
  color: #4596ff;
  text-align: center;
  margin-bottom: 10px;
}

hr {
  width: 1300px;
  margin: 0px -20em !important;
  margin: auto;
}

.el-button {
  width: 145px;
  height: 56px;
  font-size: 17px;
  margin-left: 80px;
}
</style>
