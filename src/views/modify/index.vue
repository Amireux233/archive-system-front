<template>
  <div class='result-box'>
    <div class="header">
      <el-button type="primary" icon="el-icon-check">录入系统</el-button>
    </div>
    <div class="modify-box">
      <el-row>
        <el-col :span="6" v-for="results in resultsListEnd" :key="results.studentNO">
          <el-card class="modify-card" :body-style="{ padding: '0px' }">
            <div>
              <img :src="results.image" class='image' />
              <div>
                <div style="margin:10px;height:40px">
                  <span v-if="!isEdit">{{ results.studentNO }}</span>
                  <el-input v-else-if="isEdit" :key="results.studentNO" v-model="results.studentNO">
                    <i slot="append" class="remove el-icon-remove"></i>
                  </el-input>
                </div>
                <div style="text-align:center">
                  <el-button
                    type="primary"
                    icon="el-icon-edit"
                    @click.stop="handleEditStudentNO">
                    编辑
                  </el-button>
                  <el-button
                    type="primary"
                    icon="el-icon-setting"
                    @click.stop="handleSaveStudentNO">
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
      isEdit: false,
      currPage: 1,
      pageSize: 8,
      resultsList: [
        // eslint-disable-next-line
        { image: require('../../static/test1.jpg'), studentNO: 1 },
        // eslint-disable-next-line
        { image: require('../../static/test1.jpg'), studentNO: 2 },
        // eslint-disable-next-line
        { image: require('../../static/test1.jpg'), studentNO: 3 },
      ],
      resultsListEnd: [],
    };
  },
  created() {
    if (this.resultsList.length > this.pageSize) {
      for (let index = 0; index < this.pageSize; index += 1) {
        this.resultsListEnd.push(this.resultsList[index]);
      }
    } else {
      this.resultsListEnd = this.resultsList;
    }
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
    handleEditStudentNO() {
      this.isEdit = true;
    },
    handleSaveStudentNO() {
      this.isEdit = false;
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

