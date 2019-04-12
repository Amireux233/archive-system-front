<!--搜索界面-->
<!--可进行模糊查询，展示所有符合条件的学生信息，查询电子版试卷-->
<template>
  <div class="search-wrapper">
    <div class="table">
      <el-table :data="paperData" border>
        <el-table-column prop="student_name" label="学生姓名">
          <template slot-scope="paper">
            <span v-show="currentModify.id != paper.row.id">
              {{ paper.row.student_name }}
            </span>
            <el-input v-model="currentModify.student_name"
              v-show="currentModify.id == paper.row.id" />
          </template>
        </el-table-column>
        <el-table-column prop="student_no" label="学生学号" sortable :sort-method="sortByStudentNo">
          <template slot-scope="paper">
            <span v-show="currentModify.id != paper.row.id">
              {{ paper.row.student_no }}
            </span>
            <el-input v-model="currentModify.student_no"
              v-show="currentModify.id == paper.row.id" />
          </template>
        </el-table-column>
        <el-table-column prop="course_name" label="课程名">
          <template slot-scope="paper">
            <span v-show="currentModify.id != paper.row.id">
              {{ paper.row.course_name }}
            </span>
            <el-input v-model="currentModify.course_name"
              v-show="currentModify.id == paper.row.id" />
          </template>
        </el-table-column>
        <el-table-column prop="course_no" label="课程号" sortable :sort-method="sortByCourseNo">
          <template slot-scope="paper">
            <span v-show="currentModify.id != paper.row.id">
              {{ paper.row.course_no }}
            </span>
            <el-input v-model="currentModify.course_no"
              v-show="currentModify.id == paper.row.id" />
          </template>
        </el-table-column>
        <el-table-column
          prop="course_serial_no"
          label="课序号"
          sortable
          :sort-method="sortByCourseSerialNo">
          <template slot-scope="paper">
            <span v-show="currentModify.id != paper.row.id">
              {{ paper.row.course_serial_no }}
            </span>
            <el-input v-model="currentModify.course_serial_no"
              v-show="currentModify.id == paper.row.id" />
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="paper">
            <el-button v-show="currentModify.id != paper.row.id"
              @click="handleModify(paper.row)">
              修改
            </el-button>
            <div v-show="currentModify.id == paper.row.id">
              <el-button type="primary"
                @click="handleModifySubmit()">
                提交
              </el-button>
              <el-button type="danger"
                @click="handleModifyCancel()">
                取消
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin: 15px; display: flex; justify-content: center;">
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
import { fetchPaper, modifyPaper } from '@/api/paper';

export default {
  data() {
    return {
      paperData: [],
      searchKey: '',
      pageSize: 15,
      currentPage: 1,
      totalPaper: 10,
      currentModify: { id: -1 },
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
    handleModify(paper) {
      this.currentModify = paper;
    },
    async handleModifySubmit() {
      const request = {
        paper: this.currentModify,
      };
      const response = await modifyPaper(request);
      console.log(response.data);
      this.currentModify = { id: -1 };
    },
    handleModifyCancel() {
      this.currentModify = { id: -1 };
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
    sortByStudentNo(a, b) {
      return a.student_no > b.student_no;
    },
    sortByCourseNo(a, b) {
      return a.course_no > b.course_no;
    },
    sortByCourseSerialNo(a, b) {
      return a.course_serial_no > b.course_serial_no;
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

