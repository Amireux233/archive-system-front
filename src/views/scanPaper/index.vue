<!--扫描录入界面-->
<!--由于同一个考生有很多门考试，每天也有很多考试，而本系统只识别学号部分，在填写课程号和课序号以及考试时间后
联合教务处信息可定位到一门准确的考试后可进行本堂考试的录入，完成后跳转到人工修改界面进行二次检查-->
<template>
  <div class='scan-box'>
    <el-input class="input" v-model="courseNo">
      <span slot="prepend">课程号</span>
    </el-input>
    <el-input class="input" v-model="courseSerialNo">
      <span slot="prepend">课序号</span>
    </el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courseNo: '',
      courseSerialNo: '',
      time: '',
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.scan-box {
  padding: 15px;

  .input {
    width: 300px;
    margin-right: 15px;
  }
}
</style>

