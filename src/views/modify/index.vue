<!--录入结果人工确认界面-->
<!--在录入一次试卷后识别结果将在此页展示，此时可人工修改识别结果，点击录入系统后正式录入数据库，此时可能出现学号相同的状况
（即之前的一次录入错误或现在的录入错误）需要后端返回两个录入的信息，再次进行人工修改-->
<template>
  <div class='result-box'>
    <div class="header">
      <el-button type="primary" icon="el-icon-check">录入系统</el-button>
    </div>
    <div class="modify-box">
      <el-row>
        <el-col :span="6" v-for="results in resultsList" :key="results.id">
          <el-card class="modify-card" :body-style="{ padding: '0px' }">
            <div>
              <img :src="results.image" class='image' />
              <div>
                <div style="margin:10px;height:40px">
                  <span v-if="!isEdit(results.id)">{{ results.student_no }}</span>
                  <el-input
                    v-model="results.student_no"
                    v-show="isEdit(results.id)">
                    <i slot="append" class="remove el-icon-remove"></i>
                  </el-input>
                </div>
                <div style="text-align:center">
                  <el-button
                    type="primary"
                    icon="el-icon-edit"
                    @click.stop="handleEditStudentNO(results.id)">
                    编辑
                  </el-button>
                  <el-button
                    type="primary"
                    icon="el-icon-setting"
                    @click.stop="handleSaveStudentNO(results.id)">
                    保存
                  </el-button>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currPage"
      :page-sizes="[8, 12, 16]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="resultsList.length" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currEditId: -1,
      currPage: 1,
      pageSize: 8,
      resultsList: [
        { id: 1, image: '/static/img.jpg', student_no: 1 },
        { id: 2, image: '/static/img.jpg', student_no: 2 },
        { id: 3, image: '/static/img.jpg', student_no: 3 },
      ],
    };
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      this.handleCurrentChange(this.currPage);
    },
    handleCurrentChange(val) {
      this.currPage = val;
      this.currentPageChange(this.resultsList);
    },
    currentPageChange(list) {
      let begin = (this.currPage - 1) * this.pageSize;
      const end = this.currPage * this.pageSize;
      this.resultsListEnd = [];
      for (; begin < end; begin += 1) {
        if (list[begin]) {
          this.resultsListEnd.push(list[begin]);
        }
      }
    },
    isEdit(id) {
      if (this.currEditId === -1) return false;
      return this.currEditId === id;
    },
    handleEditStudentNO(id) {
      this.currEditId = id;
    },
    handleSaveStudentNO() {
      this.currEditId = -1;
    },
    handleInput(studenoNO) {
      console.log(studenoNO);
    },
  },
};
</script>

<style lang="scss" scoped>
.header{
  text-align:center;
  padding-top: 20px;
  padding-bottom: 10px;
}
.modify-box{
  padding: 10px;
}
.image{
  width: 100%;
  height: 190px;
  display: block;
}
.modify-card{
  width:260px;
  height: 320px;
  display: flex;
  margin: 0 auto;
}
.el-col{
  margin-bottom: 40px;
}
.el-pagination{
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}
</style>

