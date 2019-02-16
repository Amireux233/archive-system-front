<template>
    <div class='search-box'>
        <div class='search-input'>
            <div>
                <sapn>学生姓名：</sapn>
                <el-input placeholder="请输入学生姓名……" v-model="courseNo" clearable></el-input>
            </div>
            <div>
                <sapn>学号：</sapn>
                <el-input placeholder="请输入学生学号……" v-model="courseNo" clearable></el-input>
            </div>
            <div>
                <sapn>任课教师：</sapn>
                <el-input placeholder="请输入教师姓名……" v-model="courseNo" clearable></el-input>
            </div>
            <div>
                <sapn>学期：</sapn>
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
        <div>
            <el-button type="primary" @click="scanPaper">查找</el-button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

</style>

