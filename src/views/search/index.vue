<!--搜索界面-->
<!--可进行模糊查询，展示所有符合条件的学生信息，查询电子版试卷-->
<template>
  <div class="search-wrapper">
    <div class="table">
      <el-table :data="paperData" border>
        <el-table-column prop="student_name" label="学生姓名" />
        <el-table-column prop="student_no" label="学生学号" />
        <el-table-column prop="course_name" label="课程名" />
        <el-table-column prop="course_no" label="课程号" />
        <el-table-column prop="course_serial_no" label="课序号" />
        <el-table-column label="操作">
          <template slot-scope="paper">
            <el-button @click="handleModify(paper)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin: 15px;">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          background
          :current-page="currentPage"
          :page-size="pageSize"
          layout="total, prev, pager, next, jumper"
          :total="totalPaper" />
      </div>
    </div>
    <div class="filter-wrapper">
      <span style="color: gray; font-weight: bold;">筛&nbsp;选</span>
      <hr style="margin-bottom: 15px;">
      <el-input placeholder="搜索" v-model="searchKey">
        <template slot="append">
          <el-button @click="handleSearch">搜索</el-button>
        </template>
      </el-input>
    </div>
  </div>
</template>

<script>
import { fetchPaper } from '@/api/paper';

export default {
  data() {
    return {
      paperData: [],
      searchKey: '',
      pageSize: 15,
      currentPage: 1,
      totalPaper: 10,
    };
  },
  mounted() {
    this.fetchPaper();
  },
  methods: {
    async fetchPaper() {
      const request = {
        pageSize: this.pageSize,
        currentPage: this.currentPage,
      };
      const response = await fetchPaper(request);
      this.paperData = response.data.data;
      this.totalPaper = response.data.total;
    },
    handleModify() {
      this.$message.error('Not Implement.');
    },
    handleSearch() {
      this.$message.error('Not Implement.');
    },
    handleCurrentChange(...args) {
      console.log(args);
    },
    handleSizeChange(...args) {
      console.log(args);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-wrapper {
  padding: 15px;
  .table {
    float: left;
    width: 70%;
  }
  .filter-wrapper {
    float: left;
    width: 28%;
    border: 1px solid #EBEEF5;
    padding: 15px;
    margin-left: 15px;
  }
}
</style>

