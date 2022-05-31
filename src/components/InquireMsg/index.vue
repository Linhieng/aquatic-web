<template>
<div class="bigBox">
  <el-table :data="tableData" style="width: 100%" id="data-table">

    <el-table-column label="司机" width="100"  header-align="center">
      <template #default="scope">
        <div style="display: flex; align-items: center; justify-content: center;">
          
          <span style="margin-left: 10px">{{ scope.row.driver }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="联系电话" width="150" header-align="center">
      <template #default="scope">
        <div style="display: flex; align-items: center; justify-content: center;">
          <svg t="1653745436462" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2462" width="200" height="200"><path d="M430.549333 387.754667a70.528 70.528 0 0 0 4.394667-95.744L360.917333 198.4c-23.893333-31.573333-69.632-35.882667-100.096-11.946667-2.176 2.133333-4.352 2.133333-4.352 4.352l-65.28 65.28c-62.037333 62.037333 26.112 229.589333 187.136 390.656 160 159.957333 324.266667 245.888 387.413334 186.026667l64.170666-64.170667c28.288-28.288 28.288-73.984 0-100.096l-4.352-4.352-93.568-73.984a70.528 70.528 0 0 0-95.744 4.352l-40.277333 40.234667a632.746667 632.746667 0 0 1-115.328-88.149333c-33.706667-33.706667-62.037333-71.808-88.149333-115.328l38.101333-43.52z m-33.706666-64.213334c7.594667 9.813333 7.594667 23.936-2.176 31.573334l-52.224 55.466666c-7.637333 7.68-9.813333 19.626667-4.352 28.330667 28.288 52.224 64.170667 98.986667 105.557333 141.44 41.344 41.386667 89.173333 77.226667 141.44 105.557333 9.813333 4.352 20.650667 2.133333 28.288-4.352l55.466667-55.466666c9.813333-9.813333 21.76-9.813333 31.573333-2.218667l93.610667 76.16s2.133333 0 2.133333 2.176c9.813333 8.704 9.813333 23.936 1.109333 32.64 0 0 0 1.109333-1.066666 1.109333l-66.389334 64.213334c-31.573333 31.573333-179.541333-47.872-321.024-187.178667-141.44-139.264-217.6-289.450667-187.136-320.981333l67.456-67.456c9.813333-7.637333 26.112-7.637333 33.706667 4.352l74.026667 94.634666z" fill="#B2B2B2" p-id="2463"></path></svg>
          <span >{{ scope.row.contact }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="车牌号" width="100" header-align="center">
      <template #default="scope">
        <div style="display: flex; align-items: center; justify-content: center;">
          
          <span style="margin-left: 10px">{{ scope.row.vehicle }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="出发地" width="150" header-align="center">
      <template #default="scope">
        <div style="display: flex; align-items: center; justify-content: center;">
          
          <span style="margin-left: 10px">{{ scope.row.departure }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="出发时间" width="180" header-align="center">
      <template #default="scope">
        <div style="display: flex; align-items: center; justify-content: center;">
          <span style="margin-left: 10px">{{ scope.row.departureDatetime }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="目的地" width="150" header-align="center">
      <template #default="scope">
        <div style="display: flex; align-items: center; justify-content: center;">
          
          <span style="margin-left: 10px">{{ scope.row.destination }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="到达时间" width="180" header-align="center">
      <template #default="scope">
        <div style="display: flex; align-items: center; justify-content: center;">
          
          <span style="margin-left: 10px">{{ scope.row.arriveTime? scope.row.arriveTime:'未到达' }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="产品名称" width="150" header-align="center">
      <template #default="scope">
        <div style="display: flex; align-items: center; justify-content: center;">
          
          <span style="margin-left: 10px">{{ scope.row.productName }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="操作" width="150" header-align="center">
      <template #default="scope">
        <el-button 
          size="small" 
          @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
    
  </el-table>

  <el-dialog
    v-model="dialogVisible"
    title="编辑数据"
    width="40%"
    draggable
  >
    <el-form :model="editData" label-width="100px">
      <el-form-item label="司机"    > <el-input v-model="editData.driver" autocomplete="off"></el-input> </el-form-item>
      <el-form-item label="联系电话" > <el-input v-model="editData.contact" autocomplete="off"></el-input> </el-form-item>
      <el-form-item label="车牌号"> <el-select v-model="editData.vehicle" placeholder="选择车牌">
        <el-option
          v-for="item in vehicleArr"
          :key="item.id"
          :label="item.vehicle"
          :value="item.vehicle"
        />
      </el-select> </el-form-item>
      <el-form-item label="产品名称" > <el-input v-model="editData.productName" autocomplete="off"></el-input> </el-form-item>
      <el-form-item label="出发地"   > <el-input v-model="editData.departure" autocomplete="off"></el-input> </el-form-item>
      <el-form-item label="出发时间"> <el-date-picker v-model="editData.departureDatetime" type="datetime" placeholder="选择日期和时间" /> </el-form-item>
      <el-form-item label="目的地"   > <el-input v-model="editData.destination" autocomplete="off"></el-input> </el-form-item>
      <el-form-item label="到达时间"> <el-date-picker v-model="editData.arriveTime" type="datetime" placeholder="选择日期和时间" /> </el-form-item>
      <el-form-item label="描述信息" > <el-input v-model="editData.description" autocomplete="off"></el-input> </el-form-item>
    </el-form>
    
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="editDone()"
          >上传</el-button
        >
      </span>
    </template>
  </el-dialog>
  
</div>
</template>


<script>
import { getR } from '@/request/request'
import { URL } from '@/constants/default.js'
import { getAllVehicle } from '@/api/getAllVehicle'
import { vehicle2id } from '@/utils/vehicle2id'
import { formatTime } from '@/utils/utils'



export default {
  data() {
    let tableData = [] // 查询到的数据
    let dialogVisible = false // 控制编辑窗口的显示
    let editData = {} // 暂存要编辑的内容
    let vehicleArr = [] // 所有车辆车牌
    return {
      tableData,
      dialogVisible,
      editData,
      vehicleArr,
    }
  },

  methods: {
    // 查询所有数据
    async getData(){
      const resData = await getR('/logistics/all')
      this.tableData = resData
      console.log(resData)
    },
    // 获取车牌号
    initVehicle() {
      getAllVehicle()
        .then(v => this.vehicleArr = v)
        .catch(r => console.error(r))
    },
    // 上传修改的信息
    async updateData(reqData) {
      const url = `${URL}/logistics/update/${reqData.tid}`
      const data = reqData
      const options = {emulateJSON: true}
      const { data:resData } = await this.$axios.post(url, data, options)
      console.log(resData, data)
      if (resData.code === 200 && resData.msg === 'success') {
        this.$msg.success('修改成功')
        this.getData()
      } else {
        this.$msg.error(resData.msg)
      }
    },
    // 确定编辑（上传编辑内容）
    async editDone() {
      const vehicleId = await vehicle2id(this.editData.vehicle)
      const departureDatetime = formatTime(this.editData.departureDatetime)
      const arriveTime = formatTime(this.editData.arriveTime)
      const reqData = {...this.editData, vehicleId, departureDatetime, arriveTime}
      this.updateData(reqData)
      this.dialogVisible = false
    },
    // 点击编辑（未上传编辑内容）
    handleEdit(index, row) {
      this.initVehicle()
      this.dialogVisible = true
      Object.keys(row).forEach(key => {
        this.editData[key] = row[key]
      })
    },
    // 发送删除请求
    delete(tid) {
      getR(`/logistics/delete/${tid}`)
        .then(() => {
          this.$msg.success('已删除')
          this.getData()
        })
        .catch(() => this.$msg.error('无法删除'))
      
    },
    // 点击删除
    handleDelete(index, row) {
      console.log(index, row)
      this.$box.confirm('确定要删除吗？', 'Waring', { confirmButtonText: '确定删除', cancelButtonText: '取消', type: 'warning', })
        .then(() => this.delete(row.tid))
        .catch(() => { console.log('已取消删除') })
    },
  },
  
  mounted() {
    this.getData()
  },
}
</script>


<style lang="scss" scoped>

  .icon {
  width: 20px;
  height: 20px;
  margin: 0 4px;
}

.bigBox {
  margin: 10px;
  box-shadow: 0 0 4px #ccc;
  border-radius: 4px;
  
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
    .el-select {
      width: 110px;
    }
  }
  
}
  

</style>