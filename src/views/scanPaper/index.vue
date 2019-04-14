<!--扫描录入界面-->
<!--由于同一个考生有很多门考试，每天也有很多考试，而本系统只识别学号部分，在填写课程号和课序号以及考试时间后
联合教务处信息可定位到一门准确的考试后可进行本堂考试的录入，完成后跳转到人工修改界面进行二次检查-->
<template>
  <div class='scan-box'>
    <div class="form">
      <el-input class="input" v-model="courseNo">
        <span slot="prepend">课程号</span>
      </el-input>
      <el-input class="input" v-model="courseSerialNo">
        <span slot="prepend">课序号</span>
      </el-input>
      <el-input class="input"
        style="width: 300px;"
        v-model="timeYear">
        <span slot="prepend">学&emsp;年</span>
        <el-select v-model="timeSeason"
          style="width: 105px;"
          slot="append">
          <el-option label="秋季学期" :value="0" />
          <el-option label="春季学期" :value="1" />
        </el-select>
      </el-input>
      <div style="margin-top: 15px;"></div>
      <el-button type="primary" @click="submit">提交</el-button>
    </div>
    <el-row :gutter="20" style="margin-top: 15px;">
      <el-col v-for="item in dataList" :key="item.id" :span="6">
        <el-card>
          <img :src="item.src" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courseNo: '',
      courseSerialNo: '',
      timeSeason: 0,
      timeYear: '',
      dataList: [],
    };
  },
  methods: {
    submit() {
      this.dataList = [];
    },
  },
  mounted() {
    for (let i = 0; i < 10; i += 1) {
      this.dataList.push({
        id: i,
        src: '/static/img.jpg',
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.scan-box {
  padding: 15px;
  .form {
    padding-left: 15px;
    .input {
      width: 250px;
      margin-right: 15px;
    }
  }
}
</style>

