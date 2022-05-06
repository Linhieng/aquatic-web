//物流管理查询
<template>
<div class="bigBox">
  <!-- 上方的搜索框 -->
  <div style="margin-top: 15px;width:600px" class="search">
  <el-input placeholder="请输入想要查询的信息" v-model="input1" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
  </div>
  <!-- 下方的显示框 -->
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
      width="160">
      <template slot-scope="scope">
        <span>{{ scope.row.departureDatetime }}</span>
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
      width="160">
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
        <!-- 编辑数据弹出框 -->
        <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
          <el-form :model="formData">
            <el-form-item label="司机" :label-width="formLabelWidth">
              <el-input v-model="formData.driver" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" :label-width="formLabelWidth">
              <el-input v-model="formData.contact" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="车牌号" :label-width="formLabelWidth">
              <el-input v-model="formData.vehicleId" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="出发地" :label-width="formLabelWidth">
              <el-input v-model="formData.departure" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="出发时间" :label-width="formLabelWidth">
              <el-input v-model="formData.departureDatetime" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="目的地" :label-width="formLabelWidth">
              <el-input v-model="formData.destination" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="到达时间" :label-width="formLabelWidth">
              <el-input v-model="formData.arriveTime" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="产品名称" :label-width="formLabelWidth">
              <el-input v-model="formData.productName" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="handleYes">确 定</el-button>
          </div>
        </el-dialog>
        
        <el-button
          size="mini"
          type="danger"
          @click="dialogDeleteVisible = true">删除</el-button>
        <!-- 确认删除框 -->
        <el-dialog
            :visible.sync="dialogDeleteVisible"
            width="30%"
          >
            <span>确定删除？</span>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="dialogDeleteVisible = false">取消</el-button>
                <el-button type="primary" @click="handleDelete(scope.row.tid)"
                  >确认</el-button
                >
              </span>
            </template>
        </el-dialog>
          
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
  export default {
    data() {
      return {
        // 查询到的数据
        tableData: [],
        // 暂存编辑框中的数据内容
        formData: {},
        // 点击编辑时，保存当前被编辑的产品 id
        currentId:'',
        // 点击编辑时，保存当前被编辑的产品在 tableData 中的下标
        currentIndex: -1,
        input1:'',
        select:'all',
        // 控制编辑框是否显示
        dialogFormVisible: false,
        // 点击删除时弹出的确认框
        dialogDeleteVisible: false,
        formLabelWidth:'120px',
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
      // 事件回调函数

      // 点击确认删除
      async handleDelete(tid) {
        console.log('确认删除，tid = ', tid)
        try {
          const { data } = await this.$axios.get(`http://cn-hk-nf-1.natfrp.cloud:17653/logistics/delete/${tid}`)
          if (data.code == '200' && data.msg == 'success')
            this.$message.success('成功删除')
          else 
            this.$message.error(data.msg)          
        } catch (error) {
          this.$message.error(error.message)
        }
        this.dialogDeleteVisible = false
        this.getData()

      },
      // 修改完数据后点击确定
      async handleYes(){
        console.log('修改数据，新数据：', this.formData)
        try {
          const {data} = await this.$axios.post(
            `http://cn-hk-nf-1.natfrp.cloud:17653/logistics/update/${this.formData.tid}`,
            this.formData,
            { emulateJSON: true },
          )
          console.log('发起修改请求，响应数据：', data)
          if (data.code == '200' && data.msg == 'success')
            this.$message.success('修改成功')
          else 
            this.$message.error('修改失败')
        } catch (error) {
          this.$message.error(error.message)
        }
        this.dialogFormVisible = false
        // 重新渲染数据
        this.getData()
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
      // 查询所有数据
      async getData(){
        try{
          const {data:resData} = await this.$axios.get('http://cn-hk-nf-1.natfrp.cloud:17653/logistics/all')
          if(resData.code == 200 && resData.msg == 'success') {
            this.tableData = resData.data
            console.log('获取到的数据',this.tableData);
          } else {
            this.$message.error(resData.msg)
          }
        } catch(error){
          this.$message.error(error.message)
        }
      }
    },
    
    // 钩子函数
    mounted() {
      this.getData()
    },
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