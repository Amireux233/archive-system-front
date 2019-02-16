<template>
    <div class='scan-box'>
        <div class='scan-input'>
            <div>
                <sapn>课程号：</sapn>
                <el-input placeholder="请输入课程号……" v-model="courseNo" clearable></el-input>
            </div>
            <div>
                <sapn>课序号：</sapn>
                <el-input placeholder="请输入课序号……" v-model="lessonNo" clearable></el-input>
            </div>
            <div class="date">
                <span >考试日期：</span>
                <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
                </el-date-picker>
            </div>
        </div>
        <el-progress type="circle" :percentage="scanningPercentage"></el-progress>
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
        scanningPercentage:100,
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        }
        
      };
    },
    methods:{
        checkResult(){
            this.$router.push({
                path:'/modify'
            })
        }
    }
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

