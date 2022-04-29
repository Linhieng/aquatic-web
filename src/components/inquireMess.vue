<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="司机"
      width="100">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>手机号码: {{ scope.row.contact }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.driver }}</el-tag>
          </div>
        </el-popover>
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
      width="180">
      <template slot-scope="scope">
        <span>{{ scope.row.productName }}</span>
      </template>
    </el-table-column>

    <el-table-column 
    label="操作"
    width="180">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          driver: '范振南',
          contact: '19111321234',
          departure: '湛江',
          destination: '广州',
          productName: '生蚝',
          vehicle: '粤V88888',
          departureTime: '2022-05-01',
          arriveTime: '2022-05-27',
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>