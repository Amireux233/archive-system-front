<!--搜索界面-->
<!--可进行模糊查询，展示所有符合条件的学生信息，查询电子版试卷-->
<template>
    <div>
        <div class='search-box' v-if='!searchSuccess'>
            <div class='search-input'>
                <div class='search-criteria name'>
                    <span>学生姓名：</span>
                    <el-input placeholder="请输入学生姓名……" v-model="SCname" clearable></el-input>
                </div>
                <div class='search-criteria StuNo'>
                    <span>学号:</span>
                    <el-input placeholder="请输入学生学号……" v-model="SCStuNo" clearable></el-input>
                </div>
                <div class='search-criteria teacher'>
                    <span>任课教师：</span>
                    <el-input placeholder="请输入教师姓名……" v-model="SCteacher" clearable></el-input>
                </div>
                <div class='search-criteria semester'>
                    <span>学期:</span>
                    
                </div>
                <div class='search-criteria courseNo'>
                    <span>课程号：</span>
                    <el-input placeholder="请输入课程号……" v-model="SCCourseNo" clearable></el-input>
                </div>
                <div class='search-criteria lessonNo'>
                    <span>课序号：</span>
                    <el-input placeholder="请输入课序号……" v-model="SClessonNo" clearable></el-input>
                </div>
                <div class="search-criteria date">
                    <span >考试日期：</span>
                    <el-date-picker
                    v-model="SCdate"
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
                </div>
            </div>
            <div>
                <el-button type="primary" @click="scanPaper">查找</el-button>
            </div>
        </div>
        <div class='result-box' v-if='searchSuccess'>
            <el-tabs type="border-card" v-model="activename" @tab-click="handleClick">
                <el-tab-pane label="姓名" name='SRname'>
                    <el-table :data="searchResultListEnd" style="width: 100%" max-height="500">
                        <el-table-column  prop="SRname" label="姓名"  width="140">
                        </el-table-column>
                        <el-table-column  prop="SRstuNo" label="学号"  width="240">
                        </el-table-column>
                        <el-table-column prop="SRteacher" label="任课教师"  width="140">
                        </el-table-column>
                        <el-table-column prop="SRCourseNo" label="课程号"  width="240">
                        </el-table-column>
                        <el-table-column prop="SRCourseNo" label="课序号"  width="140">
                        </el-table-column>
                        <el-table-column prop="SRdate" label="考试日期"  width="240">
                        </el-table-column>
                        <el-table-column prop="SRpaper" label="电子版试卷"  width="140">
                             <template slot-scope="scope">
                               <el-button
                                @click.native.prevent="checkpaper()"
                                type="text"
                                size="small">
                                查看
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currPage"
                    :page-sizes="[8, 12, 16]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="searchResultList.length">
                    </el-pagination>
                </el-tab-pane>
                <el-tab-pane label="学号" name='SRstuNo'>
                    <el-table :data="searchResultListEnd" style="width: 100%" max-height="500">
                        <el-table-column  prop="SRname" label="姓名"  width="140">
                        </el-table-column>
                        <el-table-column  prop="SRstuNo" label="学号"  width="240">
                        </el-table-column>
                        <el-table-column prop="SRteacher" label="任课教师"  width="140">
                        </el-table-column>
                        <el-table-column prop="SRCourseNo" label="课程号"  width="240">
                        </el-table-column>
                        <el-table-column prop="SRCourseNo" label="课序号"  width="140">
                        </el-table-column>
                        <el-table-column prop="SRdate" label="考试日期"  width="240">
                        </el-table-column>
                        <el-table-column prop="SRpaper" label="电子版试卷"  width="140">
                             <template slot-scope="scope">
                               <el-button
                                @click.native.prevent="checkpaper()"
                                type="text"
                                size="small">
                                查看
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currPage"
                    :page-sizes="[8, 12, 16]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="searchResultList.length">
                    </el-pagination>
                </el-tab-pane>
                <el-tab-pane label="考试时间" name='SRdate'>
                    <el-table :data="searchResultListEnd" style="width: 100%" max-height="500">
                        <el-table-column  prop="SRname" label="姓名"  width="140">
                        </el-table-column>
                        <el-table-column  prop="SRstuNo" label="学号"  width="240">
                        </el-table-column>
                        <el-table-column prop="SRteacher" label="任课教师"  width="140">
                        </el-table-column>
                        <el-table-column prop="SRCourseNo" label="课程号"  width="240">
                        </el-table-column>
                        <el-table-column prop="SRCourseNo" label="课序号"  width="140">
                        </el-table-column>
                        <el-table-column prop="SRdate" label="考试日期"  width="240">
                        </el-table-column>
                        <el-table-column prop="SRpaper" label="电子版试卷"  width="140">
                             <template slot-scope="scope">
                               <el-button
                                @click.native.prevent="checkpaper()"
                                type="text"
                                size="small">
                                查看
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currPage"
                    :page-sizes="[8, 12, 16]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="searchResultList.length">
                    </el-pagination>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            searchSuccess:true,
            currPage:1,
            pageSize:8,
            searchResultListEnd:[],
            activename:'SRstuNo',
            searchResultList:[
                {SRname:'何',SRstuNo:'2016141462222',SRteacher:'王二',SRCourseNo:'1634533',SRCourseNo:'12',SRdate:'2018-01-01'},
                {SRname:'李',SRstuNo:'2016141462222',SRteacher:'王二',SRCourseNo:'1634533',SRCourseNo:'12',SRdate:'2018-01-01'},
                {SRname:'张',SRstuNo:'2016141462222',SRteacher:'王二',SRCourseNo:'1634533',SRCourseNo:'12',SRdate:'2018-01-01'},
                {SRname:'刘',SRstuNo:'2016141462222',SRteacher:'王二',SRCourseNo:'1634533',SRCourseNo:'12',SRdate:'2018-01-01'},
                {SRname:'王',SRstuNo:'2016141462222',SRteacher:'王二',SRCourseNo:'1634533',SRCourseNo:'12',SRdate:'2018-01-01'},
                {SRname:'何',SRstuNo:'2016141462222',SRteacher:'王二',SRCourseNo:'1634533',SRCourseNo:'12',SRdate:'2018-01-01'},
                {SRname:'李',SRstuNo:'2016141462222',SRteacher:'王二',SRCourseNo:'1634533',SRCourseNo:'12',SRdate:'2018-01-01'},
                {SRname:'张',SRstuNo:'2016141462222',SRteacher:'王二',SRCourseNo:'1634533',SRCourseNo:'12',SRdate:'2018-01-01'},
                {SRname:'刘',SRstuNo:'2016141462222',SRteacher:'王二',SRCourseNo:'1634533',SRCourseNo:'12',SRdate:'2018-01-01'},
                {SRname:'王',SRstuNo:'2016141462222',SRteacher:'王二',SRCourseNo:'1634533',SRCourseNo:'12',SRdate:'2018-01-01'},
                {SRname:'何',SRstuNo:'2016141462222',SRteacher:'王二',SRCourseNo:'1634533',SRCourseNo:'12',SRdate:'2018-01-01'},
                {SRname:'李',SRstuNo:'2016141462222',SRteacher:'王二',SRCourseNo:'1634533',SRCourseNo:'12',SRdate:'2018-01-01'},
                {SRname:'张',SRstuNo:'2016141462222',SRteacher:'王二',SRCourseNo:'1634533',SRCourseNo:'12',SRdate:'2018-01-01'},
                {SRname:'刘',SRstuNo:'2016141462222',SRteacher:'王二',SRCourseNo:'1634533',SRCourseNo:'12',SRdate:'2018-01-01'},
                {SRname:'王',SRstuNo:'2016141462222',SRteacher:'王二',SRCourseNo:'1634533',SRCourseNo:'12',SRdate:'2018-01-01'},
                {SRname:'何',SRstuNo:'2016141462222',SRteacher:'王二',SRCourseNo:'1634533',SRCourseNo:'12',SRdate:'2018-01-01'},
                {SRname:'李',SRstuNo:'2016141462222',SRteacher:'王二',SRCourseNo:'1634533',SRCourseNo:'12',SRdate:'2018-01-01'},
                {SRname:'张',SRstuNo:'2016141462222',SRteacher:'王二',SRCourseNo:'1634533',SRCourseNo:'12',SRdate:'2018-01-01'},
                {SRname:'刘',SRstuNo:'2016141462222',SRteacher:'王二',SRCourseNo:'1634533',SRCourseNo:'12',SRdate:'2018-01-01'},
                {SRname:'王',SRstuNo:'2016141462222',SRteacher:'王二',SRCourseNo:'1634533',SRCourseNo:'12',SRdate:'2018-01-01'},
            ]
        }
    },
    created(){
        if(this.searchResultList.length > this.pageSize){
            for(let index = 0;index < this.pageSize; index++){
                this.searchResultListEnd.push(this.searchResultList[index]);
            }
        }else{
            this.searchResultListEnd = this.searchResultList;
        }
    },
    methods:{
        handleClick() {
            console.log(this.activename);
            this.searchResultList.sort(this.sortBy('SRname'));
            for(let index = 0;index < this.pageSize;index++){
                console.log(this.searchResultList[index].SRname);
            }
            
        },
        handleSizeChange(val){
            this.pageSize = val;
            this.handleCurrentChange(this.currPage);
        },
        handleCurrentChange(val){
            this.currPage = val;
            this.currentPageChange(this.searchResultList)
        },
        currentPageChange(list){
            let begin = (this.currPage - 1) * this.pageSize;
            let end = this.currPage * this.pageSize;
            this.searchResultListEnd = [];
            for(;begin<end;begin++){
                if(list[begin]){
                    this.searchResultListEnd.push(list[begin])
                }
            }
        },
        sortBy(property){
            return  function(a,b){
                return a[property] - b[property];
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.search-box{
    padding: 20px;
}
.el-input{
    width: 300px;
}
.search-criteria{
    padding-top:5px;
    padding-bottom: 5px; 
}
.search-criteria span{
    width: 80px;
    display: block;
}
.el-pagination{
    margin-top: 30px;
    display: flex;
    justify-content: center;
}
</style>

