//物流管理查询
<template>
<div class="bigBox">
  <div style="margin-top: 15px;width:600px" class="search">
  <el-input placeholder="请输入想要查询的信息" v-model="input1" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
  </div>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="司机"
      width="100">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.driver }}</p>
          <p>手机号码: {{ scope.row.contact }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.driver }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

    <el-table-column
      label="联系电话"
      width="130">
      <template slot-scope="scope">
        <span>{{ scope.row.contact }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="车牌号"
      width="100">
      <template slot-scope="scope">
        <span>{{ scope.row.vehicleId }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="出发地"
      width="100">
      <template slot-scope="scope">
        <span>{{ scope.row.departure }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="出发时间"
      width="130">
      <template slot-scope="scope">
        <span>{{ scope.row.departureTime }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="目的地"
      width="100">
      <template slot-scope="scope">
        <span>{{ scope.row.destination }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="到达时间"
      width="130">
      <template slot-scope="scope">
        <span>{{ scope.row.arriveTime }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="产品名称"
      width="150">
      <template slot-scope="scope">
        <span>{{ scope.row.productName }}</span>
      </template>
    </el-table-column>


    <el-table-column 
    label="操作"
    width="200">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit($event, scope.row.id)">编辑</el-button>
        <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
          <el-form :model="formData">
            <el-form-item label="司机" :label-width="formLabelWidth">
              <el-input v-model="formData.driver" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" :label-width="formLabelWidth">
              <el-input v-model="formData.contact" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="目的地" :label-width="formLabelWidth">
              <el-input v-model="formData.departure" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="出发时间" :label-width="formLabelWidth">
              <el-input v-model="formData.departureTime" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="目的地" :label-width="formLabelWidth">
              <el-input v-model="formData.destination" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="产品名称" :label-width="formLabelWidth">
              <el-input v-model="formData.productName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="车牌号" :label-width="formLabelWidth">
              <el-input v-model="formData.vehicleId" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="到达时间" :label-width="formLabelWidth">
              <el-input v-model="formData.arriveTime" autocomplete="off"></el-input>
            </el-form-item>
            
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="handleYes(tableData)">确 定</el-button>
          </div>
        </el-dialog>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, tableData)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
  export default {
    data() {
      this.loadData()
      return {
        // 点击编辑时，保存当前被编辑的产品 id
        currentId:'',
        currentIndex: -1,
        input1:'',
        select:'all',
        // 控制编辑框是否显示
        dialogFormVisible: false,
        formLabelWidth:'120px',
        tableData: [
          {
            id:'1',
            driver: '范振南',
            contact: '19111321234',
            departure: '湛江',
            destination: '广州',
            productName: '生蚝',
            vehicleId: '粤V88888',
            departureTime: '2022-05-01',
            arriveTime: '2022-05-27',
          },
          {
            id:'2',
            driver: '吴远健',
            contact: '16512344312',
            departure: '茂名',
            destination: '深圳',
            productName: '热带鱼',
            vehicleId: '粤V66655',
            departureTime: '2022-05-04',
            arriveTime: '2022-05-22',
          },
        ],
        // 暂存编辑框中的数据内容
        formData: {},
        options:[
          {
            value:'all',
            label:'全部'
          },
          {
            value:'driver',
            label:'司机'
          },
          {
            value:'contact',
            label:'联系电话'
          },
          {
            value:'departure',
            label:'出发地'
          },
          {
            value:'departureTime',
            label:'出发时间'
          },
          {
            value:'destination',
            label:'目的地'
          },
          {
            value:'arriveTime',
            label:'到达时间'
          },
          {
            value:'vehicleId',
            label:'车辆号'
          },
          {
            value:'productName',
            label:'产品名称'
          },
          {
            value:'weight',
            label:'车辆载重'
          },
        ]
      }
    },
    methods: {
      handleDelete(index, row) {
        row.splice(index, 1);
      },
      // 修改完数据后点击确定
      handleYes(row){
        // 替换被修改的数据并引起更新
        this.tableData.splice(this.currentIndex, 1, this.formData)
        this.dialogFormVisible = false
      },
      // 点击编辑
      handleEdit (e, currentId) {
        // 保存编辑的数据的 id
        this.currentId = currentId
        // 找到要修改的数据的索引
        this.currentIndex = this.tableData.findIndex((v, i) => {
          return v.id == this.currentId
        })
        // 将待编辑的数据填入暂存表 formData 中，方便编辑
        this.formData = this.tableData[this.currentIndex]
        this.dialogFormVisible = true
      },
      async loadData(){
        const data = {
          driver:this.tableData.driver,
          contact:this.tableData.contact,
          departure:this.tableData.departure,
          destination:this.tableData.destination,
          productName:this.tableData.productName,
          vehicleId:this.tableData.vehicleId,
          departureTime:this.tableData.departureTime,
          arriveTime:this.tableData.arriveTime,
        }
        try{
          const resData = await this.$axios.get('http://cn-hk-nf-1.natfrp.cloud:17653/user/all',
          data)
          console.log(resData);
          if(resData.code == 200) {
            this.tableData = [resData.data]
          }
        } catch(error){
          this.$message.error(error.message)
        }
      }
    },
    // watch: {
    //   'formData': function (newV, oldV) {
    //     console.log('hello')
    //       this.tableData[this.currentId] = newV
    //   },
    //   // 'formData.contact': function(newValue,oldValue) {
    //   //   this.tableData[this.currentId].contact = newValue ;
    //   //   console.log('222',this.tableData.contact);
    //   // }
    // },
    // computed: {
    //   contact(){
    //     return this.tableData.contact
    //   },
    // }
  }
</script>

<style lang="stylus" scoped>
.bigBox {
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
    .el-select {
      width 110px
    }
  }
  
}
</style>