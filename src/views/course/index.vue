<template>
  <div class="course-wrapper">
    <div class="left-wrapper">
      <el-button @click="handleAdd" type="primary">添加</el-button>
      <el-table :data="courseList" border>
        <el-table-column prop="name" label="课程名" />
      </el-table>
    </div>
    <el-dialog :visible.sync="dialogVisible" title="添加课程">
      <div>
        <span>课程</span>
        <el-select v-model=""
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { fetchAllCourse } from '@/api/paper';

export default {
  name: 'course',
  data() {
    return {
      courseList: [],
      dialogVisible: false,
      newCourse: {
      },
    };
  },
  mounted() {
    this.getCourse();
  },
  methods: {
    async getCourse() {
      const response = await fetchAllCourse();
      this.courseList = response.data.data;
    },
    handleAdd() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.course-wrapper {
  padding: 15px;
  .left-wrapper {
    float: left;
    width: 50%;
  }
}
</style>
