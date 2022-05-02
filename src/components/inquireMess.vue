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
        <span>{{ scope.row.vehicle }}</span>
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
      label="车辆载重"
      width="100">
      <template slot-scope="scope">
        <span>{{ scope.row.weight }}</span>
      </template>
    </el-table-column>

    <el-table-column 
    label="操作"
    width="200">
      <template slot-scope="scope">
        <el-button
          size="mini"
          :data-id="scope.row.id"
          data-ajsdlkfa="12341"
          @click="handleEdit">编辑</el-button>
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
      return {
        currentId:'',
        input1:'',
        select:'all',
        dialogFormVisible: false,
        formLabelWidth:'120px',
        tableData: [{
          id:'1',
          driver: '范振南',
          contact: '19111321234',
          departure: '湛江',
          destination: '广州',
          productName: '生蚝',
          vehicleId: '粤V88888',
          departureTime: '2022-05-01',
          arriveTime: '2022-05-27',
          weight:'100',
        }],
        formData: {
          id: '1',
          driver: '范振南',
          contact: '19111321234',
          departure: '湛江',
          destination: '广州',
          productName: '生蚝',
          vehicleId: '粤V88888',
          departureTime: '2022-05-01',
          arriveTime: '2022-05-27',
          weight:'100',
        },
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
      handleYes(row){
        console.log(this.tableData);
        this.tableData = this.tableData.forEach((v) => {
          if (v.id == this.currentId) {
            v = this.formData
          }
        })
        console.log(this.tableData);
        // console.log(this.formData)
        // this.tableData = JSON.parse(JSON.stringify(row))
        this.dialogFormVisible = false
      },
      handleEdit (e) {
        console.log(e)
        console.dir(e.target.dataset);
        // this.currentId = '1'
        this.dialogFormVisible = true
      },
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