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
            <el-select v-model="currentModify.course_name"
              v-show="currentModify.id == paper.row.id">
              <el-option v-for="course in courseList"
                :label="course.name"
                :value="course.id"
                :key="course.id" />
            </el-select>
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
      <el-input class="search-input" placeholder="搜索" v-model="searchKey">
        <el-select v-model="filterKey" placeholder="类型" slot="prepend">
          <el-option v-for="item in filterEnum"
            :key="item.id"
            :label="item.text"
            :value="item.id" />
        </el-select>
        <el-button slot="append" @click="handleSearch">搜索</el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
import { fetchPaper, modifyPaper, fetchAllCourse } from '@/api/paper';

export default {
  data() {
    return {
      paperData: [],
      searchKey: '',
      pageSize: 15,
      currentPage: 1,
      totalPaper: 10,
      currentModify: { id: -1 },
      courseList: [],
      filterEnum: [
        { id: 1, text: '学生姓名' },
        { id: 2, text: '学生学号' },
        { id: 3, text: '课程名称' },
        { id: 4, text: '课程号' },
        { id: 5, text: '课序号' },
      ],
      filterKey: 1,
    };
  },
  mounted() {
    this.getPaper();
    this.getCourse();
  },
  methods: {
    async getPaper() {
      const request = {
        pageSize: this.pageSize,
        currentPage: this.currentPage,
      };
      if (this.searchKey !== '') {
        request.filterKey = this.searchKey;
        request.filterType = this.filterKey;
      }
      const response = await fetchPaper(request);
      console.log(response.data);
      this.paperData = response.data.data;
      this.totalPaper = response.data.total;
    },
    async getCourse() {
      const response = await fetchAllCourse();
      this.courseList = response.data.data;
    },
    handleModify(paper) {
      this.currentModify = paper;
    },
    async handleModifySubmit() {
      const request = {
        paper: this.currentModify,
      };
      await modifyPaper(request);
      this.$message.success('修改成功');
      this.getPaper();
      this.currentModify = { id: -1 };
    },
    handleModifyCancel() {
      this.currentModify = { id: -1 };
    },
    handleSearch() {
      this.getPaper();
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

<style lang="scss">
.search-wrapper {
  .search-input>.el-input-group__prepend {
    width: 105px;
  }
}
</style>

