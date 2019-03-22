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
                <el-col :span="6" v-for="(results,index) in resultsListEnd" :key="results.studentNO">
                    <el-card class="modify-card" :body-style="{ padding: '0px' }">
                        <div>
                            <img :src="results.image" class='image'>
                            <div>
                                <div style="margin:10px;height:40px">
                                    <span v-if="!isEdit[index]">{{ results.studentNO }}</span>
                                    <el-input v-else-if="isEdit[index]" :key="results.studentNO" v-model="results.studentNO">
                                        <i slot="append" class="remove el-icon-remove"></i>
                                    </el-input>
                                </div>
                                <div style="text-align:center">
                                    <el-button type="primary" icon="el-icon-edit" @click.stop="handleEditStudentNO(index)">编辑</el-button>
                                    <el-button type="primary" icon="el-icon-setting" @click.stop="handleSaveStudentNO(index)">保存</el-button>
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
        :total="resultsList.length">
        </el-pagination>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
    data(){
        return{
            isEdit:[],
            currPage:1,
            pageSize:8,
            resultsList:[
                {image:require('../../static/test1.jpg'),studentNO:1},
                {image:require('../../static/test1.jpg'),studentNO:2},
                {image:require('../../static/test1.jpg'),studentNO:3},
                {image:require('../../static/test1.jpg'),studentNO:4},
                {image:require('../../static/test1.jpg'),studentNO:5},
                {image:require('../../static/test1.jpg'),studentNO:6},
                {image:require('../../static/test1.jpg'),studentNO:7},
                {image:require('../../static/test1.jpg'),studentNO:8},
                {image:require('../../static/test1.jpg'),studentNO:9},
                {image:require('../../static/test1.jpg'),studentNO:10},
                {image:require('../../static/test1.jpg'),studentNO:11},
                {image:require('../../static/test1.jpg'),studentNO:12},
                {image:require('../../static/test1.jpg'),studentNO:13},
                {image:require('../../static/test1.jpg'),studentNO:14},
                {image:require('../../static/test1.jpg'),studentNO:15},
                {image:require('../../static/test1.jpg'),studentNO:16},
            ],
            resultsListEnd:[]
        };
    },
    created(){
        if(this.resultsList.length > this.pageSize){
            for(let index = 0;index < this.pageSize; index++){
                this.resultsListEnd.push(this.resultsList[index]);
                this.isEdit[index] = false;
            }
        }else{
            this.resultsListEnd = this.resultsList;
            this.isEdit[index] = false;
        }
    },
    methods:{
        handleSizeChange(val) {
            this.pageSize = val;
            this.handleCurrentChange(this.currPage);
        },
        handleCurrentChange(val) {
            this.currPage = val;
            this.currentPageChange(this.resultsList);
        },
        currentPageChange(list){
            let begin = (this.currPage - 1) * this.pageSize;
            let end = this.currPage * this.pageSize;
            this.resultsListEnd = [];
            for(;begin<end;begin++){
                if(list[begin]){
                    this.resultsListEnd.push(list[begin])
                }
            }
        },
        handleEditStudentNO (index) {
            Vue.set(this.isEdit,index,true);
        },
        handleSaveStudentNO (index) {
            Vue.set(this.isEdit,index,false);
        },
    }
}
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

