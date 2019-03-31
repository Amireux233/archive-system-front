<!--扫描录入界面-->
<!--由于同一个考生有很多门考试，每天也有很多考试，而本系统只识别学号部分，在填写课程号和课序号以及考试时间后
联合教务处信息可定位到一门准确的考试后可进行本堂考试的录入，完成后跳转到人工修改界面进行二次检查-->
<template>
  <div class='scan-box'>
    <div class='scan-input'>
      <div>
        <span>课程号: </span>
        <el-input placeholder="请输入课程号" v-model="courseNo" clearable />
      </div>
      <div>
        <span>课序号：</span>
        <el-input placeholder="请输入课序号" v-model="lessonNo" clearable />
      </div>
      <div class="date">
        <span >考试日期：</span>
        <el-date-picker
          v-model="value1"
          type="date"
           placeholder="选择日期" />
      </div>
    </div>
    <el-progress type="circle" :percentage="scanningPercentage" />
    <div>
      <el-button type="primary" @click="scanPaper">扫描试卷</el-button>
      <el-button type="primary" @click="checkResult">查看结果</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      courseNo: 0,
      lessonNo: 0,
      scanningPercentage: 100,
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
    };
  },
  methods: {
    checkResult() {
      this.$router.push({
        path: '/modify',
      });
    },
    scanPaper() {
      return 0;
    },
  },
};
</script>

<style lang="scss" scoped>
    .scan-box{
        padding: 10px;
        display: inline-block;
    }
    .scan-input{
        display: flex;
    }

</style>

